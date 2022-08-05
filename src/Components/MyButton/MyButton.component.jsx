import React from 'react';
import "./MyButton.style.css"

function MyButton({name, func}) {
    return (
        <button className='my-button' onClick={func}>{name}</button>
    );
}

export default MyButton;