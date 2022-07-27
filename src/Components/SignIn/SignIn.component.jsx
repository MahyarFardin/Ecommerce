import React, { useState } from 'react';
import MyButton from '../MyButton/MyButton.component';
import MyInput from '../MyInput/MyInput.component';
import "./SignIn.style.css"


function SignIn() {
    const [profile, setProfile] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        address: ""
    })

    function handleChange(params) {
        const value = params.target.value
        const name = params.target.className.split(" ")[1];
        setProfile(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function handleSubmit(params) {
        params.preventDefault()
        console.log(params);
        signUp()
    }

    function signUp(){
        
        let newUser = {
            firstName:profile.firstName,
            lastName:profile.lastName,
            email:profile.email,
            pass:profile.password,
            address:profile.address
        }
        // console.log(newUser);
        fetch('http://localhost:3002/api/user', {
            method:'POST' , 
            headers:{"Content-type":'application/json'},
            body:JSON.stringify(newUser)
        })
        .then(i=>{
            console.log(i);
        })
    }
    return (
        <form onSubmit={handleSubmit} className='sign-in-log'>
            <MyInput
                {...{
                    name: "firstName",
                    type: "text",
                    onChange: handleChange,
                    placeholder: "First Name",
                    value: { ...profile.firstName }
                }} />
            <MyInput
                {...{
                    name: "lastName",
                    type: "text",
                    onChange: handleChange,
                    placeholder: "Last Name",
                    value: { ...profile.lastName }
                }} />
            <MyInput
                {...{
                    name: "email",
                    type: "text",
                    onChange: handleChange,
                    placeholder: "Email",
                    value: { ...profile.email }
                }} />
            <MyInput
                {...{
                    name: "address",
                    type: "text",
                    onChange: handleChange,
                    placeholder: "Address",
                    value: { ...profile.address }
                }} />
            <MyInput
                {...{
                    name: "password",
                    type: "password",
                    onChange: handleChange,
                    placeholder: "Password",
                    value: { ...profile.password }
                }} />
            <MyInput
                {...{
                    name: "confirmPassword",
                    type: "password",
                    onChange: handleChange,
                    placeholder: "Confirm Password",
                    value: { ...profile.confirmPassword }
                }} />

            <div className="button-container">
                <MyButton {...{
                    name: "Sign in"
                }} />

            </div>
        </form>
    );
}

export default SignIn;