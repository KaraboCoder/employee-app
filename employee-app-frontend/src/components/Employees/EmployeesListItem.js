import '../../styles/employees-list-item.css'

const EmployeesListItem = ({ item, index, dispatch }) => {
    return (
        <div className="employees-list-item">
            <span>{index + 1}</span>
            <p>{item.firstName}</p>
            <p>{item.lastName}</p>
            <p>{item.contactNumber}</p>
        </div>
    )
}

export default EmployeesListItem