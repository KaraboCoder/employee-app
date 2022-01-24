export const EMPLOYEE_EDIT_FORM_INTENTS = {
    CREATE_EMPLOYEE: "CREATE_EMPLOYEE",
    UPDATE_EMPLOYEE: "UPDATE_EMPLOYEE",
}

export const SENIORITY_LEVELS = [
    "Beginner",
    "Mid-Level",
    "Expert"
]

export const EMPTY_FORM_DATA = {
    "firstName": "",
    "lastName": "",
    "contactNumber": "",
    "email": "",
    "dateOfBirth": "",
    "address": {
        "streetAddress": "",
        "city": "",
        "country": "",
        "postalCode": ""
    },
    "skills": [
        {
            "title": "",
            "yearsOfExperience": "",
            "seniority": "Beginner"
        },
    ]
}