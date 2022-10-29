import React from 'react';
import styles from "./signUpForm.module.css"
import {signUpInputConfiguration, SignUpInputConfiguration} from "./signUpInputConfiguration.ts";
import {useForm} from "react-hook-form";
import {createUser, CreateUserRequest} from "./../../api/users.ts";
import {useMutation} from "@tanstack/react-query";


const SignUpForm: React.FC = () => {
    const { register, handleSubmit, formState } = useForm({
        mode: 'onChange'
    });
    const {mutate: createAccount} = useMutation(createUser, {
        onSuccess: (res) => console.log(res),
        onError: (err) => console.log(err)
    })

    const onSubmit = (data: CreateUserRequest) => {
        createAccount(data)
    }
    return (<div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form} >
            {signUpInputConfiguration.map((inputConfiguration: SignUpInputConfiguration) => {
                return (
                    <div>
                    <label>
                        {inputConfiguration.label}
                    </label>
                        <input {...register(inputConfiguration.key, {required : true, pattern: inputConfiguration.pattern})}  type={inputConfiguration.type} placeholder={inputConfiguration.placeholder} />
                    </div>
                )
            })}
            <button type={'submit'} className={styles.button} disabled={!formState.isValid}>Register</button>
        </form>
    </div>)
}
export default SignUpForm