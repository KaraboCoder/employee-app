import { EmployeesListItem } from "../"
import '../../styles/employees-list.css'
import emptyStateIcon from '../../assests/Icon.JPG'

const EmployeesList = ({ list, dispatch }) => {

    return (
        <div className="employees-list">
            {
                list.map((item, i) => <EmployeesListItem item={item} index={i} dispatch={dispatch} key={i} />)
            }
            {
                list.length === 0 &&
                (
                    <div className="empty-state">
                        <img src={emptyStateIcon} />
                        <div>
                            <p className="heading">There is nothing here</p>
                            <p className="message">Create a new employee by clicking the <strong>New Employee</strong> button to get started</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default EmployeesList