import React from 'react';
import "./MyButton.style.css"

function MyButton(props) {
    return (
        <button className='my-button' onSubmit={props.onSubmit}>{props.name}</button>
    );
}

export default MyButton;