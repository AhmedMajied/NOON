import React from "react"
import "./css/callUs.css"
export class CallUs extends React.Component{
    constructor(props){
        super();
        this.state={
            content:props.callUs.content
        }
    }
    render()
    {
        return(
            <div className="cdiv-call-us">
                <h1 id="ip-call-us">
                    <span className="cspan-call">{this.state.content.split(" ")[0]}</span>
                    <span className="cspan-us">{this.state.content.split(" ")[1]}</span>
                </h1>
            </div>
        );
    }
}