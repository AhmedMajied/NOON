import React from "react";
import "./css/noon.css";

export class NOON extends React.Component{
    constructor(props)
    {
        super();
        this.state={
            title:props.noon.title,
            content:props.noon.content,
        }
    }
    render()
    {
        return(
            <div className="cdiv-behind-content-noon">
                <div className="cdiv-front-content-noon">
                    <div className="cdiv-noon-title">{this.state.title}</div>
                    <p className="cp-noon">{this.state.content}</p>
                </div>
            </div>
        );
    }
}