/* eslint-disable no-useless-escape */
export type SignUpInputConfiguration = {
    placeholder: string | number;
    label: string;
    key: string;
    type: string;
    pattern: RegExp
}
const rules = {
    firstName: /[a-zA-Z ]/,
    lastName: /[a-zA-Z]/,
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/,
    nickname: /[a-zA-Z0-9]/,
    gender: /^(Male|Female)$/,
    birthdate : /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/



}

export const signUpInputConfiguration: SignUpInputConfiguration[] = [
    {
    key: 'name',
    label: 'First and Last Name',
    placeholder: 'First and Last Name',
    type: 'text',
        pattern: rules.firstName
    },
    {
        key: 'birthDate',
        label: 'Date Of Birth',
        placeholder: 'Date Of Birth',
        type: 'date',
        pattern: rules.birthdate
    },
    {
        key: 'gender',
        label: 'Gender',
        placeholder: 'Gender',
        type: 'select',
        pattern: rules.gender
    },
    {
    key: 'emailAddress',
        label: 'Email Address',
        placeholder: 'Email Address',
        type: 'email',
        pattern: rules.email
    },
    {
        key: 'password',
        label: 'Password',
        placeholder: 'Password',
        type: 'text',
        pattern: rules.password

    }]
