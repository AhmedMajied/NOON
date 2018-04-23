import React from "react";
import "./css/mission.css";
export class Mission extends React.Component{
    constructor(props)
    {
        super();
        this.state={
            title:props.mission.title,
            content:props.mission.content,
        }
    }
    render()
    {
        return(
            <div className="cdiv-behind-our-mission">
                <div className="cdiv-front-our-mission">
                    <h2 className="ch2-our-mission-title">{this.state.title}</h2>
                    <p className="cp-our-mission">{this.state.content}</p>
                </div>
            </div>
        );
    }
}