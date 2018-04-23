import React from "react";
import "./css/about-us.css";
export class About extends React.Component
{
    constructor(props)
    {
        super();
        this.state={
            content:props.aboutNoon.content
        }
    }
    render()
    {
        return(
            <div className="cdiv-about-us">
                <div className="cdiv-about-noon">
                    <span className="cspan-about">{this.state.content.split(" ")[0]}</span>
                    <span className="cspan-noon">{this.state.content.split(" ")[1]}</span>
                </div>
            </div>
        );
    }

}