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

    const handleChange = (params) => {
        const value = params.target.value;
        const name = params.target.className.split(" ")[1];
        setComment((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const itemID = document.location.href.split("/")[4];
        await fetch("http://localhost:3002/api/product")
            .then((rawData) => rawData.json())
            .then((josn) => {
                let target = josn.find((product) => {
                    return product.id == itemID;
                });

                let count = parseInt(target.rating.count);
                let rate = parseInt(target.rating.rate);
                target.rating.rate = (
                    parseInt(Number(count * rate) + Number(comment.rate / 20)) /
                    parseInt(count + 1)
                ).toFixed(1);
                target.rating.count++;

                const user = JSON.parse(
                    document.cookie.split(",")[0].split(":")[1]
                );
                let newcomment = {
                    text: comment.comment,
                    commentOwner: user,
                };

                target.comments.comment.push(newcomment);
                fetch(`http://localhost:3002/api/product/${target._id}`, {
                    method: "PUT",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(target),
                });
            });
        window.location.reload();
    };

    return (
        <form onSubmit={handleSubmit} className="comments">
            <label htmlFor="rate">
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
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
