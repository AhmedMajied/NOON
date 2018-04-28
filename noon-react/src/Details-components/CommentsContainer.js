import React from "react"
import { Comment } from "./Comment"
export class CommentsContainer extends React.Component {
    constructor(props) {
        super();
        this.state = {
            comments: props.comments
        }
    }
    render() {
        return (
            <section className="row" id="isection-comments-container">
                <header id="iheader-comments">
                    Comments:
                </header>
                <input id="iinp-write-comment" className="form-control" placeholder="Write a comment..." type="text" />
                {/* Begin Comment */}
                {this.state.comments.map((comment) => <Comment comment={comment} key={comment.id} />)}
                {/* End Comment */}
                </section >
        );
    }
}