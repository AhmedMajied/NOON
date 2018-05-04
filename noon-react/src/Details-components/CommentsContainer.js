/* Author: Andrew Emad Nassif */

import React from "react"
import { Comment } from "./Comment"
import ScrollArea from "react-scrollbar"

export class CommentsContainer extends React.Component {
    constructor(props) {
        super();
        this.state = {
            comments: props.comments
        }
    }
    addComment(e){
        e.preventDefault();
        var comment = {
            id: "10",
            userName: "Maria Sharapova",
            userPhoto: "https://pbs.twimg.com/profile_images/786423002820784128/cjLHfMMJ_400x400.jpg",
            text: e.target.comment.value,
            replies: []
        }
        this.setState({...this.state.comments.push(comment)});
        document.getElementById("ifrm-add-comment").reset();
    }
    render() {
        return (
            <section className="row" id="isection-comments-container">
                <header id="iheader-comments">
                    Comments:
                </header>
                <form onSubmit={ (e) => this.addComment(e) } id="ifrm-add-comment">
                    <input id="iinp-write-comment" className="form-control" name="comment" placeholder="Write a comment..." type="text"/>
                </form>
                <ScrollArea className="cdiv-comments">
                {this.state.comments.map((comment) => <Comment comment={comment} key={comment.id} />)}
                </ScrollArea>
            </section >
        );
    }
}