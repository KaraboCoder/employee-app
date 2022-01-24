import { openEmployeesEditForm } from '../../actions'
import { EMPLOYEE_EDIT_FORM_INTENTS } from '../../constants'
import '../../styles/employees-list-item.css'

const EmployeesListItem = ({ item, index, dispatch }) => {

    /**
     * When you click the list item the Update Employee form is opened
     */
    const onOpenUpdateEmployee = () => {
        openEmployeesEditForm(dispatch, EMPLOYEE_EDIT_FORM_INTENTS.UPDATE_EMPLOYEE, item)
    }

    return (
        <div className="employees-list-item" onClick={onOpenUpdateEmployee}>
            <span>{index + 1}</span>
            <p>{item.firstName}</p>
            <p>{item.lastName}</p>
            <p>{item.contactNumber}</p>
        </div>
    )
}

export default EmployeesListItem