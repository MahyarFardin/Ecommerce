import React, { useState, useEffect } from "react";
import CommentItem from "../CommentItem/CommentItem.component";
function Comments() {
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        
    },[])
    return (
        <div>
            {comments != [] &&
                comments.map((comment) => <CommentItem {...{ comment }} />)}
        </div>
    );
}

export default Comments;
