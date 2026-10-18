import CloseBtn from "../../components/CloseBtn"
import TypewriterReveal from "../../components/TypewriterReveal"
import MusicCard from "./components/MusicCard"
import { musics } from "./music-data"

export default function Fun({ onClose }) {
    const musicCardsEl = musics.map(
        music => (
            <MusicCard
                key={music.id}
                name={music.name}
                path={music.path}
                description={music.description}
            />
        )
    )
    return (
        <main>
            <TypewriterReveal className="title">
                <pre>  /$$$$$$                            /$$$$$$                            /$$$$$$                    </pre>
                <pre> /$$__  $$                          /$$__  $$                          /$$__  $$                   </pre>
                <pre>| $$  \__//$$   /$$ /$$$$$$$       | $$  \__//$$   /$$ /$$$$$$$       | $$  \__//$$   /$$ /$$$$$$$ </pre>
                <pre>| $$$$   | $$  | $$| $$__  $$      | $$$$   | $$  | $$| $$__  $$      | $$$$   | $$  | $$| $$__  $$</pre>
                <pre>| $$_/   | $$  | $$| $$  \ $$      | $$_/   | $$  | $$| $$  \ $$      | $$_/   | $$  | $$| $$  \ $$</pre>
                <pre>| $$     | $$  | $$| $$  | $$      | $$     | $$  | $$| $$  | $$      | $$     | $$  | $$| $$  | $$</pre>
                <pre>| $$     |  $$$$$$/| $$  | $$      | $$     |  $$$$$$/| $$  | $$      | $$     |  $$$$$$/| $$  | $$</pre>
                <pre>|__/      \______/ |__/  |__/      |__/      \______/ |__/  |__/      |__/      \______/ |__/  |__/</pre>
            </TypewriterReveal>

            <br />

            <TypewriterReveal className="sub-title">
                <pre> ____ ____ ____ ______ ____ ____ ____ ______ ____ ______ ____ ____ ____ ____ </pre>
                <pre>||w |||h |||y |||    |||a |||r |||e |||    |||u |||    |||h |||e |||r |||e ||</pre>
                <pre>||__|||__|||__|||____|||__|||__|||__|||____|||__|||____|||__|||__|||__|||__||</pre>
                <pre>|/__\|/__\|/__\|/____\|/__\|/__\|/__\|/____\|/__\|/____\|/__\|/__\|/__\|/__\|</pre>
            </TypewriterReveal>

            <br />
            <br />

            <TypewriterReveal className="sub-title">
                <pre>       _             _ _     _   </pre>
                <pre>      | |           | (_)   | |  </pre>
                <pre> _ __ | | __ _ _   _| |_ ___| |_ </pre>
                <pre>| '_ \| |/ _` | | | | | / __| __|</pre>
                <pre>| |_) | | (_| | |_| | | \__ \ |_ </pre>
                <pre>| .__/|_|\__,_|\__, |_|_|___/\__|</pre>
                <pre>| |             __/ |            </pre>
                <pre>|_|            |___/             </pre>
            </TypewriterReveal>

            <br />

            <TypewriterReveal className="fun-playlist">
                I sometimes compossed music. I'm not very good at it, and I don't really like learning music theory because it's just confusing to me. But I do like making music, and still like it until now. <br />
                Here's some of my music or soundtrack, some of them got into a game and some of them just for fun.
            </TypewriterReveal>

            <br />

            <section className="fun-musics">
                {musicCardsEl}
            </section>

            <br />
            <br />

            <CloseBtn onClose={onClose} />
        </main>
    )
}