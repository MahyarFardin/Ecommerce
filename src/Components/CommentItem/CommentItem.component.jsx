import React from "react";
import { FaUserAlt } from "react-icons/fa";
import "./CommentItem.style.css";

function CommentItem(props) {
    console.log(props.comment);
    return (
        <div className="comment-item">
            <div className="temp-cont">
                <FaUserAlt size={20} />
                <h3>
                    {props.comment.firstName} {props.comment.lastName}
                </h3>
            </div>
            <p>{props.comment.comment}</p>
        </div>
    );
}

export default CommentItem;
