import TypewriterReveal from "../../../components/TypewriterReveal"

export default function ProjectCard({ project }) {
    return (
        <section className="project-entry">
            <div className="sub-title project-ascii">
                {project.asciiTitle.split("\n").map((line, lineIndex) => (
                    <TypewriterReveal as="pre" key={`${project.id}-${lineIndex}`}>
                        {line}
                    </TypewriterReveal>
                ))}
            </div>

            <br />

            {project.img && (
                <img className="project-screenshot" src={project.img} alt={project.imgAlt} />
            )}

            <br />

            <TypewriterReveal as="p" className="project-description">
                {project.description}
            </TypewriterReveal>

            <br />

            <div className="project-button">
                <a
                    href={project.url}
                    className="project-button"
                    target="_blank"
                    rel="noreferrer"
                >
                    ╔═══════════════╗ <br />
                    ║ Go to project ║ <br />
                    ╚═══════════════╝
                </a>

                {project.video && (
                    <a
                        href={project.video}
                        className="project-button"
                        target="_blank"
                        rel="noreferrer"
                    >
                        ╔════════════╗ <br />
                        ║ Demo Video ║ <br />
                        ╚════════════╝
                    </a>
                )}
            </div>

            <br />
            <br />

        </section>
    )
}