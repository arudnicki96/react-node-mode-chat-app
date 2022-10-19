type SignUpInputConfiguration = {
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
    birthdate: /^(?:(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/|-|\.)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,


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
        key: 'dateOfBirth',
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
