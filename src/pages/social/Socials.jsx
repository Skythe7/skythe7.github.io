import CloseBtn from "../../components/CloseBtn"
import TypewriterReveal from "../../components/TypewriterReveal"
import SocialCard from "./components/SocialCard"
import { socials } from "./social-data"

export default function Social({ onClose }) {
    const socialCardEl = socials.map(
        social => <SocialCard social={social} />
    )
    return (
        <main>
            <TypewriterReveal className="title">
                <pre>  /$$$$$$                      /$$           /$$</pre>
                <pre> /$$__  $$                    |__/          | $$</pre>
                <pre>| $$  \__/  /$$$$$$   /$$$$$$$ /$$  /$$$$$$ | $$</pre>
                <pre>|  $$$$$$  /$$__  $$ /$$_____/| $$ |____  $$| $$</pre>
                <pre> \____  $$| $$  \ $$| $$      | $$  /$$$$$$$| $$</pre>
                <pre> /$$  \ $$| $$  | $$| $$      | $$ /$$__  $$| $$</pre>
                <pre>|  $$$$$$/|  $$$$$$/|  $$$$$$$| $$|  $$$$$$$| $$</pre>
                <pre> \______/  \______/  \_______/|__/ \_______/|__/</pre>
            </TypewriterReveal>

            <br />

            <TypewriterReveal className="sub-title">
                <pre> ____ ____ ____ ____ _________ ____ ____ ____ ____ </pre>
                <pre>||c |||h |||i |||t |||       |||c |||h |||a |||t ||</pre>
                <pre>||__|||__|||__|||__|||_______|||__|||__|||__|||__||</pre>
                <pre>|/__\|/__\|/__\|/__\|/_______\|/__\|/__\|/__\|/__\|</pre>
            </TypewriterReveal>

            <br />
            <br />

            <div className="socials">
                {socialCardEl}
            </div>

            <br />
            <br />

            <CloseBtn onClose={onClose} />
        </main>
    )
}