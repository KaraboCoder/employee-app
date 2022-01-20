export const generateId = (): string => {
    return String.fromCharCode(Math.ceil(Math.random() * (90 - 65) + 65)) + String.fromCharCode(Math.ceil(Math.random() * (90 - 65) + 65)) + Math.random().toString().substr(2, 4)
}