/* author : Mariam Ashraf */
import React from "react"
import "./css/logoStyle.css"
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