import CloseBtn from "../../components/CloseBtn"
import TypewriterReveal from "../../components/TypewriterReveal"
import { projects } from "./project-data"
import ProjectCard from "./components/ProjectCard"


export default function Project({ onClose }) {
    return (
        <main>
            <TypewriterReveal className="title">
                <pre> /$$$$$$$                                               /$$             </pre>
                <pre>| $$__  $$                                             | $$             </pre>
                <pre>| $$  \ $$ /$$$$$$   /$$$$$$  /$$  /$$$$$$   /$$$$$$$ /$$$$$$   /$$$$$$$</pre>
                <pre>| $$$$$$$//$$__  $$ /$$__  $$|__/ /$$__  $$ /$$_____/|_  $$_/  /$$_____/</pre>
                <pre>| $$____/| $$  \__/| $$  \ $$ /$$| $$$$$$$$| $$        | $$   |  $$$$$$ </pre>
                <pre>| $$     | $$      | $$  | $$| $$| $$_____/| $$        | $$ /$$\____  $$</pre>
                <pre>| $$     | $$      |  $$$$$$/| $$|  $$$$$$$|  $$$$$$$  |  $$$$//$$$$$$$/</pre>
                <pre>|__/     |__/       \______/ | $$ \_______/ \_______/   \___/ |_______/ </pre>
                <pre>                        /$$  | $$                                       </pre>
                <pre>                       |  $$$$$$/                                      </pre>
                <pre>                        \______/                                        </pre>
            </TypewriterReveal>

            <br />

            <div className="sub-title">
                <TypewriterReveal>
                <pre> ____ ____ ____ ____ _________ ____ ____ _________ ____ ____ ____ ____ ____ ____ </pre>
                <pre>||M |||o |||r |||e |||       |||o |||n |||       |||G |||i |||t |||h |||u |||b ||</pre>
                <pre>||__|||__|||__|||__|||_______|||__|||__|||_______|||__|||__|||__|||__|||__|||__||</pre>
                <pre>|/__\|/__\|/__\|/__\|/_______\|/__\|/__\|/_______\|/__\|/__\|/__\|/__\|/__\|/__\|</pre>
                </TypewriterReveal>
            </div>

            <br />
            <br />

            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}

            <CloseBtn onClose={onClose} />
        </main>
    )
}