import '../styles/chip.css'

const Chip = ({ text, onClick }) => {
    return (
        <div onClick={onClick} className="chip">
            <span>{text}</span>
            <button onClick={onClick}>X</button>
        </div>
    )
}

export default Chip