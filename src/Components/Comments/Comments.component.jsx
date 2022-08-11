import React, { useState, useEffect } from "react";
import CommentItem from "../CommentItem/CommentItem.component";
function Comments() {
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        const productId = document.location.href.split('/')[4]
        fetch('http://localhost:3002/api/product')
        .then(rawData=>rawData.json())
        .then(json=>{
            let target = json.find(product=>{
                return product.id == productId
            })
            target.comments.comment.forEach(comment=>{
                fetch(`http://localhost:3002/api/user/${comment.commentOwner}`)
                .then(rawData=>rawData.json())
                .then(json=>{
                    let commentFullInfo = {
                        firstName:json.firstName,
                        lastName:json.lastName,
                        comment:comment.text
                    }
                    // console.log(commentFullInfo);
                    // setComments(commentFullInfo)
                })
            })
        })
    },[])
    return (
        <div>
            {comments != [] &&
                comments.map((comment) =>console.log(comment) /*<CommentItem {...{ comment }} />*/)}
        </div>
    );
}

export default Comments;
