import { create, deleteEmployee, fetchAllEmployees, search } from "../services";
import {
    APPLY_FILTERS,
    SET_EMPLOYEES,
    SEARCH,
    SET_LOADING,
    TOGGLE_FILTERS_DROPDOWN,
    CLOSE_EMPLOYEES_EDIT_FORM,
    OPEN_EMPLOYEES_EDIT_FORM,
    NEW_EMPLOYEE
} from "./actionTypes";


export const setLoading = (dispatch, payload) => {
    dispatch({ type: SET_LOADING, payload })
}

export const applyFilters = (dispatch, searchString, filters) => {
    dispatch({
        payload: { filters },
        type: APPLY_FILTERS
    })
    searchEmployees(dispatch, searchString, filters)
}

export const toggleFiltersDropDown = (dispatch) => {
    dispatch({ type: TOGGLE_FILTERS_DROPDOWN })
}

export const openEmployeesEditForm = (dispatch, intent, employee = null) => {
    dispatch({ type: OPEN_EMPLOYEES_EDIT_FORM, payload: { intent, employee } })
}

export const closeEmployeesEditForm = (dispatch) => {
    dispatch({ type: CLOSE_EMPLOYEES_EDIT_FORM })
}

export const searchEmployees = (dispatch, searchString, filters = {}) => {
    setLoading(dispatch, true)

    const query = `query=${searchString}&year=${filters.year}&skills=${filters.skills}`

    search(query).then((employees) => {
        dispatch({ type: SET_EMPLOYEES, payload: employees })
        setLoading(dispatch, false)
    }).catch((e) => {
        console.log(e)
        setLoading(dispatch, false)
    })
}

export const getAllEmployees = (dispatch) => {
    setLoading(dispatch, true)

    fetchAllEmployees().then((employees) => {
        dispatch({ type: SET_EMPLOYEES, payload: employees })
        setLoading(dispatch, false)
    }).catch((e) => {
        console.log(e)
        setLoading(dispatch, false)
    })

}

export const createNewEmployee = (dispatch, formData) => {
    setLoading(dispatch, true)

    create(formData).then((employee) => {
        dispatch({ type: NEW_EMPLOYEE, payload: employee })
        setLoading(dispatch, false)
    }).catch((e) => {
        console.log(e)
        setLoading(dispatch, false)
    })
}

export const deleteEmployee_ = (dispatch, employeeId) => {
    setLoading(dispatch, true)

    deleteEmployee(employeeId).then(() => {
        getAllEmployees(dispatch)
    }).catch((e) => {
        console.log(e)
        setLoading(dispatch, false)
    })
}

export {
    APPLY_FILTERS,
    SEARCH,
    TOGGLE_FILTERS_DROPDOWN,
    SET_EMPLOYEES,
    CLOSE_EMPLOYEES_EDIT_FORM,
    OPEN_EMPLOYEES_EDIT_FORM,
    NEW_EMPLOYEE
}