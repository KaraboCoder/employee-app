/**
 * Generates a random id
 * Converts random numbers between 65 and 90 to ascii characters (Uppercase letters) to find the first two chars of the id
 */
export const generateId = (): string => {
    return String.fromCharCode(Math.ceil(Math.random() * (90 - 65) + 65)) + String.fromCharCode(Math.ceil(Math.random() * (90 - 65) + 65)) + Math.random().toString().substr(2, 4)
}