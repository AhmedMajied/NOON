/* author : Mariam Ashraf Fekry*/
import React from "react"
import "./css/logoStyle.css"
export const Logo =(props)=>
{
    return(
        /** Start Logo*/
        <div className="cdiv-behind-logo">
            {/**Start Front Logo */}
            <div className="cdiv-contain-logo">
                {/**Image Logo */}
                <img className="cimg-logo"src={props.logo.image} alt=""/>
            </div>
            {/**End Front Logo */}
        </div>
        /** End Logo*/
    );
}