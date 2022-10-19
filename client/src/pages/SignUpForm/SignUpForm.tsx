// @ts-ignore
import React from 'react';
import styles from "./signUpForm.module.css"
import {signUpInputConfiguration} from "./signUpInputConfiguration.ts";
import {useForm} from "react-hook-form";
import {on} from "socket.io-client/build/esm-debug/on";

const SignUpForm: React.FC = (props)=> {
    const { register, handleSubmit, watch, formState } = useForm({
        mode: 'onChange'
    });

    const onSubmit = data => console.log(data)
console.log(formState.isValid)
    return (<div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form} >
            {signUpInputConfiguration.map(inputConfiguration => {
                return (
                    <div>
                    <label>
                        {inputConfiguration.label}
                    </label>
                        <input {...register(inputConfiguration.key, {required : true, pattern: inputConfiguration.pattern})}  type={inputConfiguration.type} placeholder={inputConfiguration.placeholder} />

                    </div>
                )
            })}
            <button type={'submit'} onClick={handleSubmit(onSubmit)} className={styles.button} disabled={!formState.isValid}>Register</button>
        </form>
    </div>)
}
export default SignUpForm