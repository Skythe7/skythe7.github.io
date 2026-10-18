export default function CloseBtn({ onClose }) {
    return (
        <button className="close-btn" type="button" onClick={onClose}>
            <pre>╔════════════╗</pre>
            <pre>║ Close page ║</pre>
            <pre>╚════════════╝</pre>
        </button>
    )
}