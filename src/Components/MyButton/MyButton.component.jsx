import React from 'react';
import "./MyButton.style.css"

function MyButton({name,...props}) {
    return (
        <button className='my-button' {...props} onSubmit={props.functionSubmit}>{name}</button>
    );
}

export default MyButton;