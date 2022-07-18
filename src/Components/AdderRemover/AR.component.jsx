import React from 'react';
import "./AR.style.css"

function AR(props) {

    function reducer(event) {
        if (event.target.className === "plus")
            props.setter.setNumber(prev => prev + 1)
        else if(props.number>0)
            props.setter.setNumber(prev => prev - 1)
    }


    return (
        <div className="adder-remover">
            <h3 onClick={reducer} className='plus'>+</h3>
            <h3 className='count'>{props.number}</h3>
            <h3 onClick={reducer} className='minus'>-</h3>
        </div>
    );
}

export default AR;