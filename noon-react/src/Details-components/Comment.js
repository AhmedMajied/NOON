/* Author: Andrew Emad Nassif */

import React from "react"
import { RepliesContainer } from "./RepliesContainer"

export class Comment extends React.Component {
    constructor(props) {
        super();
        this.state = {
            comment: props.comment
        }
    }


    addReply(e){
        e.preventDefault();
        var reply = {
            id: "10",
            userName: "Maria Sharapova",
            userPhoto: "https://pbs.twimg.com/profile_images/786423002820784128/cjLHfMMJ_400x400.jpg",
            text: e.target.reply.value,
            replies: []
        }
        this.state.comment.replies.push(reply);
        this.setState(this.state);
        document.getElementById("ifrm-"+this.state.comment.id).reset()
        document.getElementById("ifrm-"+this.state.comment.id).style = "display:none;"


    }

    showReplyForm(){
        document.getElementById("ifrm-"+this.state.comment.id).style = "display:block;"
    }

    render() {
        return (
            <div className="cdiv-comment">
                <img src={this.state.comment.userPhoto} alt="User" />
                <div className="cdiv-comment-body">
                    <div className="cdiv-comment-username">{this.state.comment.userName}</div>
                    <div className="cdiv-comment-text">{this.state.comment.text}</div>
                    <div className="cdiv-like-reply">
                        <button>Like</button>
                        <button onClick={()=>this.showReplyForm()}>Reply</button>
                        <form className="cfrm-add-reply" id={"ifrm-"+this.state.comment.id} onSubmit={(e) => this.addReply(e)} style={{display:"none"}}>
                            <input className="form-control cinp-write-reply" name="reply" placeholder="Write a reply..." type="text"/>
                        </form>
                    </div>
                    {this.state.comment.replies.length > 0 && <RepliesContainer replies={this.state.comment.replies} />}
                </div>
            </div>
        );
    }
}