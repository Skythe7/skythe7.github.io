import { useEffect, useState } from "react"

const USERNAME = "skythe7"
const WEEK_COUNT = 53
const DAY_COUNT = 7
const CELL_COUNT = WEEK_COUNT * DAY_COUNT
const ANIMATION_SPEED = 115
const CONTRIBUTIONS_URL = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`

function buildCalendar(contributions) {
	if (!contributions?.length) throw new Error("No contribution history was returned.")

	const countsByDate = new Map(contributions.map((day) => [day.date, day]))
	const latestDate = new Date(`${contributions[contributions.length - 1].date}T00:00:00Z`)
	const daysToSaturday = (6 - latestDate.getUTCDay() + DAY_COUNT) % DAY_COUNT
	latestDate.setUTCDate(latestDate.getUTCDate() + daysToSaturday)

	const firstDate = new Date(latestDate)
	firstDate.setUTCDate(firstDate.getUTCDate() - CELL_COUNT + 1)

	const cells = Array.from({ length: CELL_COUNT }, (_, index) => {
		const date = new Date(firstDate)
		date.setUTCDate(date.getUTCDate() + index)
		const dateKey = date.toISOString().slice(0, 10)
		const contribution = countsByDate.get(dateKey)

		return {
			date: dateKey,
			count: contribution?.count ?? 0,
			level: contribution?.level ?? 0,
		}
	})

	return Array.from({ length: WEEK_COUNT }, (_, weekIndex) => ({
		cells: cells.slice(weekIndex * DAY_COUNT, (weekIndex + 1) * DAY_COUNT),
	}))
}

function getSnakeCell(position) {
	const row = Math.floor(position / WEEK_COUNT)
	const columnOffset = position % WEEK_COUNT
	const column = row % 2 === 0 ? columnOffset : WEEK_COUNT - 1 - columnOffset
	return column * DAY_COUNT + row
}

function getMonthLabel(week, weekIndex) {
	const firstOfMonth = week.cells.find((cell) => cell.date.endsWith("-01"))
	const labelDate = firstOfMonth ?? (weekIndex === 0 ? week.cells[0] : null)
	if (!labelDate) return ""
	return new Date(`${labelDate.date}T00:00:00Z`).toLocaleDateString("en", {
		month: "short",
		timeZone: "UTC",
	})
}

export default function Snake() {
	const [weeks, setWeeks] = useState([])
	const [total, setTotal] = useState(0)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const [retry, setRetry] = useState(0)
	const [headPosition, setHeadPosition] = useState(0)
	const [reducedMotion, setReducedMotion] = useState(false)

	useEffect(() => {
		const controller = new AbortController()

		async function loadContributions() {
			setLoading(true)
			setError(false)

			try {
				const response = await fetch(CONTRIBUTIONS_URL, { signal: controller.signal })
				if (!response.ok) throw new Error("Contribution service request failed.")
				const data = await response.json()
				setWeeks(buildCalendar(data.contributions))
				setTotal(data.total?.lastYear ?? data.contributions.reduce((sum, day) => sum + day.count, 0))
			} catch (loadError) {
				if (loadError.name !== "AbortError") setError(true)
			} finally {
				if (!controller.signal.aborted) setLoading(false)
			}
		}

		loadContributions()
		return () => controller.abort()
	}, [retry])

	useEffect(() => {
		const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)")
		const updateMotionPreference = () => setReducedMotion(motionPreference.matches)
		updateMotionPreference()
		motionPreference.addEventListener("change", updateMotionPreference)
		return () => motionPreference.removeEventListener("change", updateMotionPreference)
	}, [])

	useEffect(() => {
		if (loading || error || reducedMotion) return undefined

		const interval = window.setInterval(() => {
			setHeadPosition((position) => (position + 1) % CELL_COUNT)
		}, ANIMATION_SPEED)
		return () => window.clearInterval(interval)
	}, [error, loading, reducedMotion])

	const snakeCells = new Set(
		Array.from({ length: 7 }, (_, index) => headPosition - index)
			.filter((position) => position >= 0)
			.map(getSnakeCell),
	)
	const contributionMessage = loading
		? "Loading contribution history..."
		: error
			? "Contribution history is temporarily unavailable."
			: `${total.toLocaleString()} contributions in the last year.`

	return (
		<section className="contribution-panel" aria-label={`GitHub contributions for ${USERNAME}`}>
			<header className="contribution-header">
				<pre aria-hidden="true">{`  /^-----\\   GITHUB ACTIVITY\n /_______/   @${USERNAME}`}</pre>
				<a href={`https://github.com/${USERNAME}`} target="_blank" rel="noreferrer" aria-label={`View ${USERNAME} on GitHub`}>
					VIEW PROFILE ↗
				</a>
			</header>

			<div className="contribution-summary" aria-live="polite">
				<span>{contributionMessage}</span>
				{error && <button type="button" onClick={() => setRetry((value) => value + 1)}>RETRY</button>}
			</div>

			<div className="contribution-scroll" aria-busy={loading}>
				<div
					className="contribution-calendar"
					role="img"
					aria-label={`${contributionMessage} Animated snake travels across the contribution calendar.`}
				>
					<div className="contribution-months" aria-hidden="true">
						{weeks.map((week, index) => (
							<span key={index} style={{ gridColumn: index + 1 }}>{getMonthLabel(week, index)}</span>
						))}
					</div>
					<div className="contribution-chart-row">
						<div className="contribution-weekdays" aria-hidden="true">
							<span></span><span>Mon</span><span></span><span>Wed</span><span></span><span>Fri</span><span></span>
						</div>
						<div className="contribution-grid" aria-hidden="true">
							{weeks.map((week, weekIndex) => (
								<div className="contribution-week" key={weekIndex}>
									{week.cells.map((cell, dayIndex) => {
										const cellIndex = weekIndex * DAY_COUNT + dayIndex
										const snakeIndex = [...snakeCells].indexOf(cellIndex)
										const snakeClass = snakeIndex === 0
											? " is-snake-head"
											: snakeIndex > 0 ? " is-snake-body" : ""

										return (
											<span
												className={`contribution-cell${snakeClass}`}
												data-level={cell.level}
												title={`${cell.date}: ${cell.count} contributions`}
												key={cell.date}
											/>
										)
									})}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<footer className="contribution-footer">
				<span>LESS <i data-level="0"></i><i data-level="1"></i><i data-level="2"></i><i data-level="3"></i><i data-level="4"></i> MORE</span>
				<span>LIVE PROFILE DATA</span>
			</footer>
		</section>
	)
}
