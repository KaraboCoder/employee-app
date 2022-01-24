import '../styles/chip.css'

/**
 * Used for displaying entered skills on the filter component
 */
const Chip = ({ text, onClick }) => {
    return (
        <div onClick={onClick} className="chip">
            <span>{text}</span>
            <button onClick={onClick}>X</button>
        </div>
    )
}

export default Chip