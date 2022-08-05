import React from "react";
import "./ProductEdit.style.css"
import MyButton from "../../Components/MyButton/MyButton.component";
import MyInput from "../../Components/MyInput/MyInput.component";

function ProductEditSchema({ handleChange, handleSave, product }) {
    return (
        <div style={{textAlign:"center", marginTop:"5em"}}>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                }}
            >
                <MyInput
                    {...{
                        name: "Image",
                        type: "text",
                        onChange: handleChange,
                        placeholder:
                            "Enter an uploaded url of your product image",
                        value: { ...product.Image },
                    }}
                />
                <MyInput
                    {...{
                        name: "Title",
                        type: "text",
                        onChange: handleChange,
                        placeholder: "Title: Give something facinating",
                        value: { ...product.Title },
                    }}
                />
                <MyInput
                    {...{
                        name: "Price",
                        type: "text",
                        onChange: handleChange,
                        placeholder: "Price: Enter your price",
                        value: { ...product.Price },
                    }}
                />
                <select onChange={handleChange} className="cat-select Category">
                    <option value="electronics">electronics</option>
                    <option value="jewelery">jewelery</option>
                    <option value="mensclothing">men's clothing</option>
                    <option value="womensclothing">women's clothing</option>
                    <option value="other">other</option>
                </select>
            </div>
            <MyInput
                {...{
                    name: "Description",
                    type: "text",
                    onChange: handleChange,
                    placeholder: "Description: Sell me this pen :)",
                    value: { ...product.Description },
                }}
            />
            <MyButton
                {...{
                    name: "Save",
                    func: handleSave,
                }}
            />
        </div>
    );
}

export default ProductEditSchema;
