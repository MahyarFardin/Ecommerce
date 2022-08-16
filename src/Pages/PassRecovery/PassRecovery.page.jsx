import React, { useState, useEffect } from "react";
import MyButton from "../../Components/MyButton/MyButton.component";
import MyInput from "../../Components/MyInput/MyInput.component";

function PassRecovery() {
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
     const handleSubmit = () => {};
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
                    placeholder: "Password",
                    value: { ...recPass.pass },
                }}
            />
            <MyInput
                {...{
                    name: "checkPass",
                    type: "password",
                    onChange: handleChange,
                    placeholder: "Password",
                    value: { ...recPass.checkPass },
                }}
            />
            <MyButton name={"recovery"} />
        </form>
    );
}

export default PassRecovery;
