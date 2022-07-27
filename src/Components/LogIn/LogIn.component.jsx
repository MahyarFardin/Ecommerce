import React, { useState } from 'react';
import MyInput from '../MyInput/MyInput.component';
import MyButton from '../MyButton/MyButton.component';
import "./LogIn.style.css";

function LogIn() {
    const [formInput, setFormInput] = useState({
        email: "",
        password: ""
    })

    function handleChange(params) {
        const value = params.target.value
        const name = params.target.className.split(" ")[1];
        setFormInput(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function handleSubmit(params){
        params.preventDefault();
        console.log(params);
        logIn()
    }
    async function logIn(){
        await fetch('http://localhost:3002/api/user')
        .then(i=>{
            console.log(i);
            return i.json()
        }).then(users=>{
            users.forEach(user=>{
                if (user.email == formInput.email && user.pass == formInput.password) {
                    // localStorage.setItem('loginUser' , JSON.stringify(user))
                    let time  = new Date()
                    time.setTime(time.getTime() +  2*24*60*60*1000)
                    console.log(time);
                    document.cookie = `loginUser = ${JSON.stringify(user)} ; path= / ; expires =${time} ` 
                    console.log(user);
                    return 
                }
            })
        })
    }

    return (
        <form onSubmit={handleSubmit} className='signin-form'>
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
            <MyButton
            {...{
                name:"Log In"
            }}
            />
        </form>
    );
}

export default LogIn;