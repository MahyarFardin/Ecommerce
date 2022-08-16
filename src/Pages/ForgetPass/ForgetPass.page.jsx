import React, { useState } from 'react';
import MyButton from '../../Components/MyButton/MyButton.component';
import MyInput from "../../Components/MyInput/MyInput.component";

function ForgetPass() {
    const[email, setEmail]= useState("")

    const handleChange=(event)=>{
        setEmail(event.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(email);
        // todo 
        // email recovery
        fetch(`http://localhost:3002/api/pass-recovery?email=${email}`)
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
