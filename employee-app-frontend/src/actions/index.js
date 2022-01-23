import { fetchAllEmployees, search } from "../services";
import { APPLY_FILTERS, CLEAR_FILTERS, SET_EMPLOYEES, SEARCH, SET_LOADING, TOGGLE_FILTERS_DROPDOWN } from "./actionTypes";


export const setLoading = (dispatch, payload) => {
    dispatch({ type: SET_LOADING, payload })
}

export const applyFilter = (filters) => ({
    payload: { filters },
    type: APPLY_FILTERS
})

export const clearFilters = () => ({
    payload: {
        filters: {
            skills: "",
            year: ""
        }
    },
    type: CLEAR_FILTERS
})

export const toggleFiltersDropDown = () => ({
    type: TOGGLE_FILTERS_DROPDOWN
})

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

export {
    APPLY_FILTERS,
    CLEAR_FILTERS,
    SEARCH,
    TOGGLE_FILTERS_DROPDOWN,
    SET_EMPLOYEES
}