import { APPLY_FILTERS, CLEAR_FILTERS, SET_EMPLOYEES, SEARCH, TOGGLE_FILTERS_DROPDOWN } from "../actions";
import { SET_LOADING } from "../actions/actionTypes";
import initialState from "../state"

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case APPLY_FILTERS:
            return {
                ...state,
                ...action.payload
            }

        case CLEAR_FILTERS:
            return {
                ...state,
                ...action.payload
            }

        case TOGGLE_FILTERS_DROPDOWN:
            return {
                ...state,
                filtersDropDownState: !state.filtersDropDownState
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