import React from "react";
import "./css/logoCopy.css";
export class LogoCopy extends React.Component{
    constructor(props)
        {
            super();
            this.state={
                logo:props.logoCopy.image
            }
        }
    render()
    {   
        return(
            <div className="cdiv-behind-logo">
                <div className="cdiv-contain-logo">
                    <img className="cimg-logo"src={this.state.logo}alt=""/>
                </div>
            </div>
        );
    }
}