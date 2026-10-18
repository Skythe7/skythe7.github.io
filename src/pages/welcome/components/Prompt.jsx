import { useEffect, useState } from "react"

export default function Prompt({ onCommand, helperCommand = "" }) {
    const [command, setCommand] = useState("")
    const [commandHistory, setCommandHistory] = useState([])

    useEffect(() => {
        if (!helperCommand) return

        let index = 0
        const interval = window.setInterval(() => {
            index += 1
            setCommand(helperCommand.slice(0, index))

            if (index >= helperCommand.length) {
                window.clearInterval(interval)
                window.setTimeout(() => {
                    setCommandHistory((history) => [...history, helperCommand])
                    onCommand?.(helperCommand)
                    setCommand("")
                }, 180)
            }
        }, 70)

        return () => window.clearInterval(interval)
    }, [helperCommand, onCommand])

    function handleSubmit(event) {
        event.preventDefault()
        setCommandHistory((history) => [...history, command])
        onCommand?.(command)
        setCommand("")
    }

    return (
        <>
        {commandHistory.map((entry, index) => (
            <div key={index}>
                <div className="prompt">
                    <pre><span className="prompt-user">guest@skythe-website</span>:<span className="prompt-pwd">~</span>$ </pre>
                    <pre>{entry}</pre>
                </div>
                {entry === "ls" && (
                    <>
                        <pre>about.sh           know more about me, or smth</pre>
                        <pre>projects.sh        see my works or stuff</pre>
                        <pre>fun-stuff.sh       if you're bored</pre>
                        <pre>socials.sh         im an introvert, but feel free to talk to me</pre>
                        <br />
                    </>
                )}
            </div>
        ))}
        <div className="prompt">
            <pre><span className="prompt-user">guest@skythe-website</span>:<span className="prompt-pwd">~</span>$ </pre>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="prompt-input"
                    value={command}
                    onChange={(event) => setCommand(event.target.value)}
                    autoFocus
                />
            </form>
        </div> 
        </>
    )
}