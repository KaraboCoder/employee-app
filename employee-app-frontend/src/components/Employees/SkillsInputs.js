import { SENIORITY_LEVELS } from '../../constants'
import '../../styles/skills-input.css'

const SkillsInputs = ({ index, value, onChange, removeSkill }) => {
    return (
        <div className='skills-grid'>
            <input className='skills-grid-item' name="title" type="text" value={value.title} onChange={(e) => onChange(index, e)} required />
            <input className='skills-grid-item' name="yearsOfExperience" type="number" min={1} value={value.yearsOfExperience} onChange={(e) => onChange(index, e)} required />
            <div className='skills-grid-item flex'>
                <select className='select-input' name="seniority" value={value.seniority} onChange={(e) => onChange(index, e)} required>
                    {
                        SENIORITY_LEVELS.map((level, i) => <option value={level} key={i}>{level}</option>)
                    }
                </select>
                <button className='skills-grid-item' onClick={() => removeSkill(index)}>Delete</button>
            </div>
        </div>
    )
}

export default SkillsInputs