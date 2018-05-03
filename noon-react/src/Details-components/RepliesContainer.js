/* Author: Andrew Emad Nassif */

import React from "react"
import {Comment} from "./Comment"

export class RepliesContainer extends React.Component {
    constructor(props) {
        super();
        this.state = {
            replies: [props.replies[0]]
        }
    }

    viewMoreReplies(){
        this.setState({replies:this.props.replies});
    }

    render() {
        return (
            <div className="cdiv-replies">
                {this.state.replies.map((reply) => <Comment comment={reply} key={reply.id} />)}
                {
                    this.props.replies.length > 1 && this.state.replies.length === 1 &&
                     <div className="cdiv-view-more">
                        <button onClick={() => this.viewMoreReplies()}>
                            <span className="arrow">→</span>
                            View more replies
                        </button>
                    </div>

                }
            </div>
        );
    }
}