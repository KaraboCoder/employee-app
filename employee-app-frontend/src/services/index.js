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

export const create = async (employeeData) => {
    try {
        const { data } = await axios.post(BASE_URL, employeeData)
        return data
    } catch (e) {
        throw new Error('Could not create new employee')
    }
}

export const update = async (employeeData, employeeId) => {
    try {
        const { data } = await axios.put(BASE_URL + employeeId, employeeData)
        return data
    } catch (e) {
        throw new Error('Could not update employee')
    }
}

export const deleteEmployee = async (employeeId) => {
    try {
        await axios.delete(BASE_URL + employeeId)
    } catch (e) {
        throw new Error('Could not delete employee')
    }
}