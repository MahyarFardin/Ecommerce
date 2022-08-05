import React from 'react'
import "./CommentItem.style.css"

function CommentItem(props) {
    return ( 
        <div className='comment-item'>
            <h3>{props.firstName} {props.lastName}</h3>
            <p>{props.comment}</p>
        </div>
     );
}

export default CommentItem;