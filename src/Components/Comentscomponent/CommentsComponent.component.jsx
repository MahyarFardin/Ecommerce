import React from "react";
import AddComment from "../AddComment/AddComment.component";
import Comments from "../Comments/Comments.component";

import "./CommentsComponent.style.css";

function CommentsComponent() {
    return (
        <div className="com-comp">
            <h3>
                Let us know what you are thinking about this product by leaving
                a comment
            </h3>
            <div className="comment-component">
                <div>
                    <AddComment />
                </div>
                <div>
                    <Comments />
                </div>
            </div>
        </div>
    );
}

export default CommentsComponent;
