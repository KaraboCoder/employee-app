import { APPLY_FILTERS, SET_EMPLOYEES, NEW_EMPLOYEE, SEARCH, TOGGLE_FILTERS_DROPDOWN, CLOSE_EMPLOYEES_EDIT_FORM, OPEN_EMPLOYEES_EDIT_FORM } from "../actions";
import { SET_LOADING } from "../actions/actionTypes";
import initialState from "../state"

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case APPLY_FILTERS:
            return {
                ...state,
                ...action.payload
            }
        case TOGGLE_FILTERS_DROPDOWN:
            return {
                ...state,
                filtersDropDownState: !state.filtersDropDownState
            }
        case OPEN_EMPLOYEES_EDIT_FORM:
            return {
                ...state,
                employeesEditFormOpenState: true,
                editFormIntent: action.payload.intent,
                employeeUpdating: action.payload.employee
            }
        case CLOSE_EMPLOYEES_EDIT_FORM:
            return {
                ...state,
                employeesEditFormOpenState: false,
            }
        case SEARCH:
            return {
                ...state,
                employees: action.payload
            }
        case SET_EMPLOYEES:
            return {
                ...state,
                employees: action.payload
            }
        case NEW_EMPLOYEE:
            return {
                ...state,
                employees: [...state.employees, action.payload]
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }

        default:
            return state
    }
}

export default reducer