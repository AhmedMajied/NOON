import React from "react"
import "./css/logo.css"
export const Logo =(props)=>
{
    return(
        <div className="cdiv-behind-logo">
            <div className="cdiv-contain-logo">
                <img className="cimg-logo"src={props.logo.image} alt=""/>
            </div>
        </div>
    );
}