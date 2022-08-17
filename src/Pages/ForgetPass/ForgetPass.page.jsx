import React, { useState } from 'react';
import { useResolvedPath } from 'react-router-dom';
import MyButton from '../../Components/MyButton/MyButton.component';
import MyInput from "../../Components/MyInput/MyInput.component";

function ForgetPass() {
    const[email, setEmail]= useState("")

    const handleChange=(event)=>{
        setEmail(event.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        fetch(`http://localhost:3002/api/user`)
        .then(i=>i.json())
        .then(users=>{
            const isExist = users.find(user=>{
                return user.email == email
            })
            if (isExist) {
                fetch(`http://localhost:3002/api/pass-recovery?email=${email}`)  
                fetch(`http://localhost:3002/api/user`)
                .then(i=>i.json())
                .then(users=>{
                    const target = users.find(user=>{
                        return user.email == email
                    })
                    localStorage.setItem('email-forget-pass' , JSON.stringify(target._id))
                    alert('email sent please check your email box or spam box')
                })
                
            }else{
                return alert('this email dose not exists')
            }
        })

    }

    return (
        <form onSubmit={handleSubmit} style={{textAlign:"center", padding:"10em"}}>
            <h3>Forget Password</h3>
            <p>Please enter your email to recive a recovery email ...</p>
            <MyInput
                {...{
                    name: "email",
                    type: "email",
                    onChange: handleChange,
                    placeholder: "Email",
                    value: email,
                }}
            />
            <MyButton name={"Recovery"}/>
        </form>
    );
}

export default ForgetPass;
