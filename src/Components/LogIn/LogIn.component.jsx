import React, { useState, useContext } from "react";
import { userSignInCheck } from "../../App";
import { useNavigate } from "react-router-dom";
import MyInput from "../MyInput/MyInput.component";
import MyButton from "../MyButton/MyButton.component";
import "./LogIn.style.css";

function LogIn() {
    const { setSignCheck } = useContext(userSignInCheck);

    const navigate = useNavigate();
    const [formInput, setFormInput] = useState({
        email: "",
        password: "",
    });

    function handleChange(params) {
        const value = params.target.value;
        const name = params.target.className.split(" ")[1];
        setFormInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function handleSubmit(params) {
        params.preventDefault();
        login();
        setSignCheck(true);
    }

    async function login() {
        await fetch("http://localhost:3002/api/user")
            .then((i) => i.json())
            .then((users) => {
                users.forEach(async (user) => {
                    if (user.email === formInput.email &&user.pass === formInput.password) {
                        await fetch(`http://localhost:3002/api/user/${user._id}`)
                            .then((i) => i.json())
                            .then((i) => {
                                let zippedUser = {
                                    _id: i._id,
                                    cart: i.cart,
                                    seller: i.seller,
                                };
                                let time = new Date();
                                time.setTime(
                                    time.getTime() + 1 * 24 * 60 * 60 * 1000
                                );
                                document.cookie = `loginUser = ${JSON.stringify(zippedUser)} ; path= / ; expires =${time}`;
                                navigate("/shop");
                                return;
                            });
                    }else{
                        alert('email or password is in correct')
                    }
                });
            });
    }

    return (
        <form onSubmit={handleSubmit} className="signin-form">
            <MyInput
                {...{
                    name: "email",
                    type: "email",
                    onChange: handleChange,
                    placeholder: "Email",
                    value: { ...formInput.email },
                }}
            />
            <MyInput
                {...{
                    name: "password",
                    type: "password",
                    onChange: handleChange,
                    placeholder: "Password",
                    value: { ...formInput.password },
                }}
            />
            <MyButton name="login" />
        </form>
    );
}

export default LogIn;
