import { useContext, useEffect, useState } from 'react'
import { closeEmployeesEditForm, createNewEmployee, deleteEmployee_, updateNewEmployee } from '../../actions'
import { EMPLOYEE_EDIT_FORM_INTENTS, EMPTY_FORM_DATA } from '../../constants'
import { SkillsInputs } from '../'
import { AppContext } from '../../context'
import '../../styles/employees-form.css'

const EmployeesForm = () => {
    const { state, dispatch } = useContext(AppContext)
    const { employeesEditFormOpenState, editFormIntent, employeeUpdating } = state
    const [formData, setFormData] = useState(EMPTY_FORM_DATA)


    useEffect(() => {
        if (EMPLOYEE_EDIT_FORM_INTENTS.UPDATE_EMPLOYEE === editFormIntent) {
            setFormData(employeeUpdating)
        } else {
            setFormData({
                ...EMPTY_FORM_DATA, address: { city: "", streetAddress: "", country: "", postalCode: "" }, skills: [{
                    title: "",
                    yearsOfExperience: "",
                    seniority: "Beginner"
                }]
            })
        }
    }, [employeesEditFormOpenState])

    const onCloseEmployeesForm = () => {
        closeEmployeesEditForm(dispatch)
    }

    const addNewSkill = () => {
        let skillsTemp = [...formData.skills]
        skillsTemp.push({
            title: "",
            yearsOfExperience: "",
            seniority: "Beginner"
        })
        setFormData({ ...formData, skills: skillsTemp })
    }

    const onSkillChange = (index, event) => {
        let skillsTemp = [...formData.skills]
        skillsTemp[index][event.target.name] = event.target.value
        setFormData({ ...formData, skills: skillsTemp })
    }

    const onRemoveSkill = (index) => {
        let skillsTemp = [...formData.skills]
        skillsTemp.splice(index, 1)
        setFormData({ ...formData, skills: skillsTemp })
    }

    const onFormSubmit = (event) => {
        event.preventDefault()

        if (EMPLOYEE_EDIT_FORM_INTENTS.CREATE_EMPLOYEE === editFormIntent) {
            createNewEmployee(dispatch, formData)
            onCloseEmployeesForm()
        }

        if (EMPLOYEE_EDIT_FORM_INTENTS.UPDATE_EMPLOYEE === editFormIntent) {
            updateNewEmployee(dispatch, formData, employeeUpdating._id)
            onCloseEmployeesForm()
        }

    }

    const onDeleteEmployee = () => {
        deleteEmployee_(dispatch, employeeUpdating._id)
        onCloseEmployeesForm()
    }

    const onFormInputChange = (event) => {
        let formDataTemp = { ...formData }
        if (
            event.target.name === 'streetAddress' ||
            event.target.name === 'city' ||
            event.target.name === 'postalCode' ||
            event.target.name === 'country'
        ) {
            formDataTemp.address[event.target.name] = event.target.value
        } else {
            formDataTemp[event.target.name] = event.target.value
        }
        setFormData(formDataTemp)
    }

    const formHeading = EMPLOYEE_EDIT_FORM_INTENTS.CREATE_EMPLOYEE === editFormIntent ? 'Create Employee' : 'Update Employee'

    return (
        <div className={`employees-form ${employeesEditFormOpenState ? 'open' : ''}`}>
            <form onSubmit={onFormSubmit} className="employees-form-content">
                <p className='heading'>{formHeading}</p>
                <p className='sub-heading'>Basic Info</p>
                <div className='form-group'>
                    <div>
                        <label>First Name</label>
                        <input value={formData.firstName} onChange={onFormInputChange} name='firstName' type="text" required />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input value={formData.lastName} onChange={onFormInputChange} name='lastName' type="text" required />
                    </div>
                </div>
                <div className='form-group'>
                    <div>
                        <label>Contact Number</label>
                        <input value={formData.contactNumber} onChange={onFormInputChange} name='contactNumber' className='max-w-200' type="text" required />
                    </div>
                </div>
                <div className='form-group'>
                    <div>
                        <label>Email Address</label>
                        <input value={formData.email} onChange={onFormInputChange} name='email' className='max-w-200' type="email" required />
                    </div>
                </div>
                <div className='form-group'>
                    <div>
                        <label>Date of Birth </label>
                        <input value={formData.dateOfBirth} onChange={onFormInputChange} name='dateOfBirth' className='max-w-200' type="date" required />
                    </div>
                </div>

                <p className='sub-heading'>Address Info</p>
                <div className='form-group'>
                    <div>
                        <label>Street Address</label>
                        <input value={formData.address.streetAddress} onChange={onFormInputChange} name='streetAddress' type="text" required />
                    </div>
                </div>
                <div className='form-group'>
                    <div>
                        <label>City</label>
                        <input value={formData.address.city} onChange={onFormInputChange} name='city' type="text" required />
                    </div>
                    <div>
                        <label>Postal Code</label>
                        <input value={formData.address.postalCode} onChange={onFormInputChange} name='postalCode' type="text" required />
                    </div>
                    <div>
                        <label>Country</label>
                        <input value={formData.address.country} onChange={onFormInputChange} name='country' type="text" required />
                    </div>
                </div>
                <p className='sub-heading'>Skills</p>
                <div className='form-group block'>
                    <div className='grid'>
                        <label className='grid-item'>Skill</label>
                        <label className='grid-item'>Years Exp</label>
                        <label className='grid-item'>Seniority Rating</label>
                    </div>
                    {
                        formData.skills.map((skill, i) => <SkillsInputs key={i} index={i} value={skill} onChange={onSkillChange} removeSkill={onRemoveSkill} />)
                    }
                </div>
                <button onClick={addNewSkill}>+Add New Skill</button>
                <div className='controls'>
                    {
                        EMPLOYEE_EDIT_FORM_INTENTS.UPDATE_EMPLOYEE === editFormIntent &&
                        <button className='delete' type='button' onClick={onDeleteEmployee}>Delete Employee</button>
                    }
                    <button className='cancel' type="reset" onClick={onCloseEmployeesForm}>Cancel</button>
                    <button className='save' type="submit">
                        {
                            EMPLOYEE_EDIT_FORM_INTENTS.CREATE_EMPLOYEE === editFormIntent ?
                                <span>Add Employee</span> :
                                <span>Update Employee</span>

                        }
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EmployeesForm