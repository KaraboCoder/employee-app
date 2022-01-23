import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api/employees/'

export const fetchAllEmployees = async () => {
    try {
        const { data } = await axios.get(BASE_URL)
        return data
    } catch (e) {
        throw new Error('Could not fetch employees')
    }
}

export const search = async (query) => {
    try {
        const { data } = await axios.get(BASE_URL + 'search?' + query)
        return data
    } catch (e) {
        throw new Error('Could not search employees')
    }
}