import TypewriterReveal from "../../../components/TypewriterReveal";

export default function SocialCard({ social }) {
    return (
        <section className="social-card">
            <div className="social-ascii">
                {social.ascii.split("\n").map((line, lineIndex) => (
                    <TypewriterReveal as="pre" key={`${social.id}-${lineIndex}`}>
                        {line}
                    </TypewriterReveal>
                ))}
            </div>

            <a 
                href={social.url}
                target="_blank" 
                className="social-link"
            >
                ╔═════════════╗ <br />
                ║ View Social ║ <br />
                ╚═════════════╝
            </a>
        </section>
    )
}