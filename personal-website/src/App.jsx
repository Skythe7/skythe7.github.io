import { useEffect, useState } from 'react'

import Welcome from './pages/welcome/Welcome.jsx'
import About from './pages/about/About.jsx'
import Projects from './pages/project/Projects.jsx'
import Fun from './pages/fun/Fun.jsx'
import Social from './pages/social/Socials.jsx'

const startupMessage = [
  'INITIALIZING TERMINAL WANNABE BRUHHHH...',
  'LOADING COFFEE...',
  'CHECKING FOR MOTIVATION...',
  'ERROR 404: NOT FOUND',
  'WELCOME TO MA BUNGKRRR.'
].join('\n')

const openingMessages = [
  'GIVING TREATS TO CATS AND DOGS',
  'SHIMMY SHIMMY YA SHIMMY YAH SHIMMY YAHHHHH',
  'DESTROYING THE BIG TECH HQ',
  'PLEASE CLEAN UR KEYBOARD, LOOK HOW DIRTY IT IS',
  'HAVE YOU SHOWERED YET?',
  'STOP USING AI TO MAKE "ARTS", GRAB A PENCIL'
]

export default function App() {
  const [isBooting, setIsBooting] = useState(true)
  const [startupText, setStartupText] = useState('')
  const [page, setPage] = useState('welcome')
  const [openingPage, setOpeningPage] = useState('')
  const [openingText, setOpeningText] = useState('')
  const [helperVisible, setHelperVisible] = useState(false)

  useEffect(() => {
    let characterIndex = 0
    let completionTimeout
    const typingInterval = window.setInterval(() => {
      characterIndex += 1
      setStartupText(startupMessage.slice(0, characterIndex))

      if (characterIndex === startupMessage.length) {
        window.clearInterval(typingInterval)
        completionTimeout = window.setTimeout(() => setIsBooting(false), 900)
      }
    }, 35)

    return () => {
      window.clearInterval(typingInterval)
      window.clearTimeout(completionTimeout)
    }
  }, [])

  useEffect(() => {
    if (!openingPage) return

    const randomMessage = openingMessages[Math.floor(Math.random() * openingMessages.length)]
    const message = [
      `OPENING ${openingPage}.sh...`,
      'SUCCESS',
      randomMessage
    ].join('\n')
    let characterIndex = 0
    let completionTimeout

    const typingInterval = window.setInterval(() => {
      characterIndex += 1
      setOpeningText(message.slice(0, characterIndex))

      if (characterIndex === message.length) {
        window.clearInterval(typingInterval)
        completionTimeout = window.setTimeout(() => {
          setPage(openingPage)
          setOpeningPage('')
        }, 700)
      }
    }, 28)

    return () => {
      window.clearInterval(typingInterval)
      window.clearTimeout(completionTimeout)
    }
  }, [openingPage])

  function handleCommand(command) {
    const trimmedCommand = command.trim()

    switch (trimmedCommand) {
      case './help':
        setHelperVisible(true)
        break

      case './about.sh':
        setHelperVisible(false)
        setOpeningText('')
        setOpeningPage('about')
        break

      case './projects.sh':
        setHelperVisible(false)
        setOpeningText('')
        setOpeningPage('projects')
        break

      case './fun.sh':
        setHelperVisible(false)
        setOpeningText('')
        setOpeningPage('fun')
        break

      case './socials.sh':
        setHelperVisible(false)
        setOpeningText('')
        setOpeningPage('socials')
        break

      default:
        break
    }
  }

  if (isBooting) {
    return (
      <main className="startup-screen" aria-live="polite">
        <pre className="startup-text">
          {startupText}<span className="startup-cursor" aria-hidden="true">█</span>
        </pre>
      </main>
    )
  }

  if (openingPage) {
    return (
      <main className="startup-screen" aria-live="polite">
        <pre className="startup-text">
          {openingText}<span className="startup-cursor" aria-hidden="true">█</span>
        </pre>
      </main>
    )
  }

  switch (page) {
    case 'about':
      return <About onClose={() => { setHelperVisible(true); setPage('welcome') }} />
    case 'projects':
      return <Projects onClose={() => { setHelperVisible(true); setPage('welcome') }} />
    case 'fun':
      return <Fun onClose={() => { setHelperVisible(true); setPage('welcome') }} />
    case 'socials':
      return <Social onClose={() => { setHelperVisible(true); setPage('welcome') }} />
    default:
      return <Welcome onCommand={handleCommand} helperVisible={helperVisible} />
  }
}