import React from "react";
import "./LOF.syle.css"

function ListOfFooter({ props, title }) {
    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <h1 style={{margin:"2px 0px"}}>{title}</h1>
            <ul style={{display:"flex", flexDirection:"column", listStyle:"none", marginLeft:"0px"}}>
                {props.map((item,idx) => (
                    <li key={idx} className="item">{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListOfFooter;
