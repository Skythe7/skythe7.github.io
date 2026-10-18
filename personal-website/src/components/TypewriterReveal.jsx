import { Children, cloneElement, Fragment, isValidElement, useEffect, useRef } from "react"

function countCharacters(children) {
    let characterCount = 0

    Children.forEach(children, (child) => {
        if (typeof child === "string" || typeof child === "number") {
            characterCount += Array.from(String(child)).length
        } else if (isValidElement(child)) {
            if (child.type !== TypewriterReveal) {
                characterCount += countCharacters(child.props.children)
            }
        }
    })

    return characterCount
}

function animateChildren(children, chunkIndex, charactersPerChunk) {
    return Children.map(children, (child) => {
        if (isValidElement(child) && child.type === TypewriterReveal) return child

        if (typeof child === "string" || typeof child === "number") {
            const characters = Array.from(String(child))
            const chunks = []

            for (let offset = 0; offset < characters.length; offset += charactersPerChunk) {
                const index = chunkIndex.current
                chunkIndex.current += 1
                chunks.push(
                    <span
                        className="typewriter-character"
                        key={index}
                    >
                        {characters.slice(offset, offset + charactersPerChunk).join("")}
                    </span>
                )
            }

            return <Fragment key={`text-${chunkIndex.current}`}>{chunks}</Fragment>
        }

        if (isValidElement(child) && child.props.children != null) {
            return cloneElement(
                child,
                undefined,
                animateChildren(child.props.children, chunkIndex, charactersPerChunk)
            )
        }

        return child
    })
}

export default function TypewriterReveal({ as: Element = "div", className = "", children }) {
    const elementRef = useRef(null)
    const characterCount = countCharacters(children)
    const maxAnimationSteps = 120
    const charactersPerChunk = Math.max(1, Math.ceil(characterCount / maxAnimationSteps))
    const chunkIndex = { current: 0 }
    const animatedChildren = animateChildren(children, chunkIndex, charactersPerChunk)

    useEffect(() => {
        const element = elementRef.current
        if (!element) return

        const chunks = Array.from(element.querySelectorAll(".typewriter-character"))
            .filter((chunk) => chunk.closest(".typewriter-reveal") === element)

        function revealAll() {
            chunks.forEach((chunk) => chunk.classList.add("is-visible"))
        }

        if (
            typeof IntersectionObserver === "undefined" ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            revealAll()
            return
        }

        let timeoutId
        let revealedCount = 0
        let observer

        function revealNextChunk(startTime) {
            const elapsed = performance.now() - startTime
            const targetCount = Math.min(
                chunks.length,
                Math.max(revealedCount + 1, Math.floor(elapsed / 15) + 1)
            )

            while (revealedCount < targetCount) {
                chunks[revealedCount].classList.add("is-visible")
                revealedCount += 1
            }

            if (revealedCount < chunks.length) {
                timeoutId = window.setTimeout(() => revealNextChunk(startTime), 15)
            }
        }

        observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                observer.disconnect()
                revealNextChunk(performance.now())
            }
        }, { threshold: 0.01 })

        observer.observe(elementRef.current)
        return () => {
            observer.disconnect()
            window.clearTimeout(timeoutId)
        }
    }, [])

    return (
        <Element
            ref={elementRef}
            className={`typewriter-reveal ${className}`.trim()}
        >
            {animatedChildren}
        </Element>
    )
}