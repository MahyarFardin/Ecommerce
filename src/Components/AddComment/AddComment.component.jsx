import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import MyInput from "../MyInput/MyInput.component";
import MyButton from "../MyButton/MyButton.component";
import "./AC.style.css";

function AddComment() {
    const [comment, setComment] = useState({
        comment: "",
        rate: 50,
    });

    // useEffect({}, []);

    const handleChange = (params) => {
        const value = params.target.value;
        const name = params.target.className.split(" ")[1];
        setComment((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className="comments">
            <label htmlFor="rate">
                <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
                    <AiFillStar size={30} />
                    {comment.rate / 20}
                </div>
                <input
                    type="range"
                    id="rate"
                    className=" rate"
                    onChange={handleChange}
                />
            </label>
            <MyInput
                {...{
                    name: "comment",
                    type: "text",
                    onChange: handleChange,
                    placeholder: "Enter your comment on this product",
                    value: { comment },
                }}
            />
            <MyButton name="Submit" />
        </form>
    );
}

export default AddComment;
