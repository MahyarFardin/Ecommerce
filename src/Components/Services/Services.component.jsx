import React from 'react'
import "./Services.style.css"
function Services(props) {
    return ( 
        <div className='single-service'>
            <props.icon size={50}/>
            <h3>{props.text}</h3>
        </div>
     );
}

export default Services;