import TypewriterReveal from "../../../components/TypewriterReveal"

export default function MusicCard({ name, path, description }) {
    return (
        <article className="fun-music">
            <TypewriterReveal>
                <h3>{name}</h3>
                <p>{description}</p>
                <audio controls preload="none" src={path} aria-label={`Play ${name}`}>
                    Your browser does not support audio playback.
                </audio>
            </TypewriterReveal>
        </article>
    )
}