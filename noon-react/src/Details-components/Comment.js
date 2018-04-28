import React from "react"
import {RepliesContainer} from "./RepliesContainer"

export const Comment = (props) => {
    return (
        <div className="cdiv-comment">
            <img src={props.comment.userPhoto} alt="User" />
            {/* Begin Comment Body */}
            <div className="cdiv-comment-body">
                {/* Begin Comment Username */}
                <div className="cdiv-comment-username">{props.comment.userName}</div>
                {/* End Comment Username */}
                {/* Begin Comment Text */}
                <div className="cdiv-comment-text">{props.comment.text}</div>
                {/* End Comment Text */}
                {/* Begin Like-Reply */}
                <div className="cdiv-like-reply">
                    <a href="#">Like</a>
                    <a href="#">Reply</a>
                </div>
                {/* End Like-Reply */}
                {/* Begin Replies */}
                {props.comment.replies.length > 0 && <RepliesContainer replies={props.comment.replies} />}
                {/* End Replies */}
            </div>
            {/* End Comment Body */}
        </div>

    );
}