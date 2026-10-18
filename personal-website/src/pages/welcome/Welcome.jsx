import { useEffect, useState } from "react"

import Prompt from "./components/Prompt"
import TypewriterReveal from "../../components/TypewriterReveal"
import Helper from "../../Helper"

const helperIntro = "Hi! I am Skythe walmart version, how can I help you?"
const helperQuotes = [
  "Uhm what the sigma",
  "I AM NOT AN EMOTIONAL SUPPORT I AM JUST A POTATO",
  "East is up",
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
]

const helperRoutes = {
  About: "./about.sh",
  Projects: "./projects.sh",
  Fun: "./fun.sh",
  Socials: "./socials.sh"
}

export default function Welcome({ onCommand, helperVisible }) {
  const [helperState, setHelperState] = useState("menu")
  const [helperMessage, setHelperMessage] = useState(helperIntro)
  const [isTyping, setIsTyping] = useState(false)
  const [helperCommand, setHelperCommand] = useState("")
  const [isCommandTyping, setIsCommandTyping] = useState(false)

  useEffect(() => {
    if (!helperVisible) {
      setHelperState("menu")
      setHelperMessage(helperIntro)
      setIsTyping(false)
      setIsCommandTyping(false)
    }
  }, [helperVisible])

  function triggerTypewriter(text, onFinish) {
    setHelperState("typing")
    setHelperMessage("")
    setIsTyping(true)
    setIsCommandTyping(false)

    let index = 0
    const interval = window.setInterval(() => {
      index += 1
      setHelperMessage(text.slice(0, index))

      if (index >= text.length) {
        window.clearInterval(interval)
        window.setTimeout(() => {
          setIsTyping(false)
          onFinish?.()
        }, 500)
      }
    }, 45)
  }

  function handleHelperClick() {
    if (!helperVisible || isTyping) return

    if (helperState === "menu") {
      const randomQuote = helperQuotes[Math.floor(Math.random() * helperQuotes.length)]
      triggerTypewriter(randomQuote, () => {
        setHelperState("menu")
        setHelperMessage(helperIntro)
      })
    }
  }

  function handleHelperSelect(page) {
    const command = helperRoutes[page]
    setHelperCommand(command)
    setHelperState("typing")
    setHelperMessage("")
    setIsTyping(true)
    setIsCommandTyping(true)
  }

  return (
    <main>
        <TypewriterReveal className="title">
            <pre>$$\   $$\           $$\ $$\                 $$\   $$\                                                       $$\ </pre>
            <pre>$$ |  $$ |          $$ |$$ |                $$ |  $$ |                                                      $$ |</pre>
            <pre>$$ |  $$ | $$$$$$\  $$ |$$ | $$$$$$\        $$ |  $$ |$$\   $$\ $$$$$$\$$$$\   $$$$$$\  $$$$$$$\   $$$$$$$\ $$ |</pre>
            <pre>$$$$$$$$ |$$  __$$\ $$ |$$ |$$  __$$\       $$$$$$$$ |$$ |  $$ |$$  _$$  _$$\  \____$$\ $$  __$$\ $$  _____|$$ |</pre>
            <pre>$$  __$$ |$$$$$$$$ |$$ |$$ |$$ /  $$ |      $$  __$$ |$$ |  $$ |$$ / $$ / $$ | $$$$$$$ |$$ |  $$ |\$$$$$$\  \__|</pre>
            <pre>$$ |  $$ |$$   ____|$$ |$$ |$$ |  $$ |      $$ |  $$ |$$ |  $$ |$$ | $$ | $$ |$$  __$$ |$$ |  $$ | \____$$\     </pre>
            <pre>$$ |  $$ |\$$$$$$$\ $$ |$$ |\$$$$$$  |      $$ |  $$ |\$$$$$$  |$$ | $$ | $$ |\$$$$$$$ |$$ |  $$ |$$$$$$$  |$$\ </pre>
            <pre>\__|  \__| \_______|\__|\__| \______/       \__|  \__| \______/ \__| \__| \__| \_______|\__|  \__|\_______/ \__|</pre>
        </TypewriterReveal>

        <br />

        <TypewriterReveal className="sub-title">
            <pre> ____ _________ ____ ____ ____ ____ _________ ____ ____ ____ ____ ____ ____ ____</pre>
            <pre>||I |||       |||l |||i |||k |||e |||       |||I |||n |||d |||o |||m |||i |||e ||</pre>
            <pre>||__|||_______|||__|||__|||__|||__|||_______|||__|||__|||__|||__|||__|||__|||__||</pre>
            <pre>|/__\|/_______\|/__\|/__\|/__\|/__\|/_______\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|</pre>
        </TypewriterReveal>
        
        <br />
        <br />

        <TypewriterReveal className="text">
            Hello world, and welcome to mah personal website. You can find anything about me here
            That's kinda cool, if you care lol? <br />
            <br />
            To start exploring.. <br />
            <span className="welcome-instruction">
                1. Type ls on the prompt below and you'll see bash script files as any topics! <br />
                2. Type ./[file you want to see] to view them! <br />
                3. After that, another window will show up <br />
            </span>

            Just like in the real linux terminal! But keep in mind that THIS IS NOT AN ACCURATE LINUX TERMINAL.<br />
            
            <br />
            <span className="welcome-note">
                NOTE: If you aren't familiar with linux or terminal commands, type ./help and a friendly helper will help you explore!
            </span> <br />
            <br />
            That's it! Happy suffering through my terminal-like nerd website
        </TypewriterReveal>
        <br />
        <Prompt onCommand={onCommand} helperCommand={helperCommand} />

        {helperVisible && (
          <div className={`helper-shell ${helperState === "typing" ? "helper-shell--typing" : ""}`}>
            {!isCommandTyping && (
              <div className="helper-panel">
                <div className="helper-message">
                  {helperMessage}
                  {helperState !== "menu" && <span className="helper-cursor">█</span>}
                </div>

                {helperState === "menu" && (
                  <div className="helper-actions">
                    {Object.keys(helperRoutes).map((page) => (
                      <button
                        key={page}
                        type="button"
                        className="helper-action"
                        onClick={() => handleHelperSelect(page)}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            <Helper onClick={handleHelperClick} className={helperState === "typing" ? "helper-button--typing" : "helper-button--ready"} />
          </div>
        )}
    </main>
  )
}