import React, { useState } from 'react';
import MyInput from '../MyInput/MyInput.component';
import "./Signin.style.css";

function SignIn() {
    const [formInput, setFormInput] = useState({
        email: "",
        password: "",
        confirmPass: ""
    })

    function handleChange(params) {
        const value = params.target.value
        const name = params.target.className.split(" ")[1];
        setFormInput(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <form className='signin-form'>
            <MyInput {
                ...{
                    name: "email",
                    type: "email",
                    onChange: handleChange,
                    placeholder: "Email",
                    value: { ...(formInput.email) }
                }
            }
            />
            <MyInput {
                ...{
                    name: "password",
                    type: "password",
                    onChange: handleChange,
                    placeholder: "Password",
                    value: { ...(formInput.password) }
                }
            }
            />
            <MyInput {
                ...{
                    name: "confirmPass",
                    type: "text",
                    onChange: handleChange,
                    placeholder: "Confirm Password",
                    value: { ...(formInput.confirmPass) }
                }
            }
            />
        </form>
    );
}

export default SignIn;