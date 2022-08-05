import React from 'react';
import "./MyInput.style.css"

function MyInput(props) {
    return (
        <input
            className={`my-input ${props.name}`}
            type={props.type}
            onChange={props.onChange}
            placeholder={props.placeholder}
            value={props.value.temp}
            required={true}
        />
    );
}

export default MyInput;