import React, { useState, useEffect } from "react";
import MyButton from "../../Components/MyButton/MyButton.component";
import MyInput from "../../Components/MyInput/MyInput.component";
import { Link, useNavigate } from "react-router-dom";

function PassRecovery() {
    const navigate = useNavigate();
    const [recPass, setRecPass] = useState({
        pass: "",
        checkPass: "",
    });
    const handleChange = (params) => {
        const value = params.target.value;
        const name = params.target.className.split(" ")[1];
        setRecPass((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
     const handleSubmit = (e) => {
        e.preventDefault()
        if (recPass.checkPass == recPass.password) {
            const userId = JSON.parse(localStorage.getItem('email-forget-pass'))

            fetch("http://localhost:3002/api/user/req/"+userId, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(recPass),
        });
        alert('password updated')
        navigate("/shop");
        }else{
            alert('new password and check password should be same ')
        }
     };
    // useEffect(() => {}, []);
    return (
        <form
            onSubmit={handleSubmit}
            style={{ textAlign: "center", padding: "10em" }}
        >
            <h3>Enter your new password...</h3>
            <MyInput
                {...{
                    name: "password",
                    type: "password",
                    onChange: handleChange,
                    placeholder: "New Password",
                    value: { ...recPass.pass },
                }}
            />
            <MyInput
                {...{
                    name: "checkPass",
                    type: "password",
                    onChange: handleChange,
                    placeholder: "Check Password",
                    value: { ...recPass.checkPass },
                }}
            />
            <MyButton name={"recovery"} />
        </form>
    );
}

export default PassRecovery;
