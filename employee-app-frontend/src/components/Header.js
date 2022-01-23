import { useContext } from "react"
import { Filter } from "."
import { AppContext } from "../context"
import '../styles/header.css'

const Header = () => {
    const { state, dispatch } = useContext(AppContext)
    const { employees } = state
    return (
        <div className="header">
            <div className="header-content">
                <div className="logo">
                    <p>Employees</p>
                    <span>{`There are ${employees.length} employees`}</span>
                </div>
                <div className="search-field">
                    <input placeholder="Search" type="text" />
                </div>
                <Filter />
                <div className="create-new-employee-btn-wrapper">
                    <button>
                        <span className="btn-icon">+</span>
                        <span className="btn-text">New Employee</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header