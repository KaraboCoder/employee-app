import { useState } from "react"
import { applyFilters, toggleFiltersDropDown } from "../actions"
import { Chip } from '.'
import '../styles/filter.css'

const Filter = ({ searchString, onFiltersChange, dispatch, show }) => {
    const [skills, setSkills] = useState([])
    const [inputSkill, setInputSkill] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")

    const onAddSkill = () => {
        if (inputSkill) {
            setSkills((oldSkills) => [...oldSkills, inputSkill])
            setInputSkill("")
        }
    }

    const onRemoveSkill = (index) => {
        setSkills(skills.filter((_, i) => i !== index))
    }

    const onApplyFilters = () => {
        applyFilters(dispatch, searchString, { year: dateOfBirth, skills: skills.join(",") })
    }

    const onClearFilters = () => {
        applyFilters(dispatch, searchString, { year: "", skills: "" })
        setSkills([])
        setInputSkill("")
        setDateOfBirth("")
    }

    const onClose = () => {
        toggleFiltersDropDown(dispatch)
    }
    return (
        <div className={`filter ${!show ? 'hide' : ''}`}>
            <div>
                <span>Filter by</span>
                <button className="close" onClick={onClose}>x</button>
            </div>
            <div>
                <span>Date of birth(year)</span>
                <input type="number" min={1940} max={2022} step={1} onChange={(e) => setDateOfBirth(e.target.value.toString())} />
            </div>
            <div>
                <span>Skills</span>
                <input type="text" value={inputSkill} onChange={(e) => setInputSkill(e.target.value)} placeholder="Enter skill" />
                <button onClick={onAddSkill}>Add</button>
            </div>
            <div className="skills">
                {
                    skills.map((skill, i) => <Chip key={i} text={skill} onClick={() => onRemoveSkill(i)} />)
                }
            </div>
            <div className="controls">
                <button onClick={onClearFilters}>Clear</button>
                <button onClick={onApplyFilters}>Apply</button>
            </div>
        </div>
    )
}

export default Filter