import React from "react";
import "./css/logo.css";
export class Logo extends React.Component{
    constructor(props)
    {
        super();
        this.state={
            logo:props.logo.image,
        }
    }
    render()
    {
        return(
            <div className="cdiv-behind-logo">
                <div className="cdiv-contain-logo">
                    <img className="cimg-logo"src={this.state.logo} alt=""/>
                </div>
            </div>
        );
    }
}