import React, { useState } from "react";
import MyButton from "../MyButton/MyButton.component";
import MyInput from "../MyInput/MyInput.component";
import "./SignIn.style.css";

function SignIn() {
    const [profile, setProfile] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        address: "",
        seller: false,
    });

    function handleChange(params) {
        const value = params.target.value;
        const name = params.target.className.split(" ")[1];
        setProfile((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function handleCheckbox() {
        profile.seller = !profile.seller;
    }

    function handleEquation() {
        if (profile.password === profile.confirmPassword) return true;
        else return false;
    }

    function handleSubmit(params) {
        params.preventDefault();
        if (handleEquation()) signUp();
        else alert("Password missmatch");
    }

    function signUp() {
        console.log(profile);
        let newUser = {
            firstName: profile.firstName,
            lastName: profile.lastName,
            email: profile.email,
            pass: profile.password,
            address: profile.address,
            seller: profile.seller,
        };
        fetch("http://localhost:3002/api/user", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(newUser),
        });

        setProfile.firstName = "";
        setProfile.lastName = "";
        setProfile.address = "";
        setProfile.email = "";
        setProfile.password = "";
        setProfile.confirmPassword = "";
        setProfile.seller = false;
    }

    return (
        <form onSubmit={handleSubmit} className="sign-in-log">
            <MyInput
                {...{
                    name: "firstName",
                    type: "text",
                    onChange: handleChange,
                    placeholder: "First Name",
                    value: { ...profile.firstName },
                }}
            />
            <MyInput
                {...{
                    name: "lastName",
                    type: "text",
                    onChange: handleChange,
                    placeholder: "Last Name",
                    value: { ...profile.lastName },
                }}
            />
            <MyInput
                {...{
                    name: "email",
                    type: "text",
                    onChange: handleChange,
                    placeholder: "Email",
                    value: { ...profile.email },
                }}
            />
            <MyInput
                {...{
                    name: "address",
                    type: "text",
                    onChange: handleChange,
                    placeholder: "Address",
                    value: { ...profile.address },
                }}
            />
            <MyInput
                {...{
                    name: "password",
                    type: "password",
                    onChange: handleChange,
                    placeholder: "Password",
                    value: { ...profile.password },
                }}
            />
            <MyInput
                {...{
                    name: "confirmPassword",
                    type: "password",
                    onChange: handleChange,
                    placeholder: "Confirm Password",
                    value: { ...profile.confirmPassword },
                }}
            />

            <div className="checkbox-sell">
                <input
                    onChange={handleCheckbox}
                    type="checkbox"
                    name="Seller"
                    id="Seller"
                />
                <label htmlFor="Seller">
                    By checking this we will identify you as a seller.
                </label>
            </div>

            <div className="button-container">
                <MyButton name="Sign in" />
            </div>
        </form>
    );
}

export default SignIn;
