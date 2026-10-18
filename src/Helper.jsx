import helperGif from "./assets/helper.gif"

export default function Helper({ onClick, className = "" }) {
    return (
        <button
            type="button"
            className={`helper-button ${className}`.trim()}
            onClick={onClick}
            aria-label="Activate helper"
        >
            <img src={helperGif} alt="Skythe helper" />
        </button>
    )
}