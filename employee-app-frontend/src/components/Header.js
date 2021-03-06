import { useContext, useState } from "react"
import { Filter } from "."
import { openEmployeesEditForm, searchEmployees, toggleFiltersDropDown } from "../actions"
import { EMPLOYEE_EDIT_FORM_INTENTS } from "../constants"
import { AppContext } from "../context"
import '../styles/header.css'

const Header = () => {
    const { state, dispatch } = useContext(AppContext)
    const [searchInputText, setSearchInputText] = useState("")
    let debounceTimeOut
    const { filters } = state

    /**
     * onSearch event handler with debounce to control the rate of api requests
     */
    const onSearchInput = (searchText) => {
        setSearchInputText(searchText)

        //reset previous timeout
        if (debounceTimeOut) {
            clearTimeout(debounceTimeOut)
        }

        //setup new timeout
        debounceTimeOut = setTimeout(() => {
            searchEmployees(dispatch, searchText, filters)
        }, 500)
    }

    /**
     * Perform a search every time the filters change 
     */
    const onFiltersChange = () => {
        searchEmployees(dispatch, searchInputText, filters)
    }

    const onToggleFilterDropDown = () => {
        toggleFiltersDropDown(dispatch)
    }

    const onClickCreateEmployee = () => {
        openEmployeesEditForm(dispatch, EMPLOYEE_EDIT_FORM_INTENTS.CREATE_EMPLOYEE)
    }

    const { employees, filtersDropDownState } = state
    const subTitle = employees.length > 0 ? `There are ${employees.length} employees` : 'No employees'

    return (
        <div className="header">
            <div className="header-content">
                <div className="logo">
                    <p>Employees</p>
                    <span>{subTitle}</span>
                </div>
                <div className="search-field">
                    <input value={searchInputText} onChange={(e) => onSearchInput(e.target.value)} placeholder="Search" type="text" />
                </div>
                <div className="filter-wrapper ">
                    <span onClick={onToggleFilterDropDown}>Filter by </span>
                    <Filter searchString={searchInputText} onFiltersChange={onFiltersChange} dispatch={dispatch} show={filtersDropDownState} />
                </div>
                <div className="create-new-employee-btn-wrapper">
                    <button onClick={onClickCreateEmployee}>
                        <span className="btn-icon">+</span>
                        <span className="btn-text">New Employee</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header