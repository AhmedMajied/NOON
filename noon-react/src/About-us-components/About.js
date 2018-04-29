/* author : Mariam Ashraf */
import React from "react"
import "./css/about-usStyle.css"
export const About =(props)=>
{
    return(
        <div className="cdiv-about-us">
            <div className="cdiv-about-noon">
                <span className="cspan-about">{props.aboutNoon.content.split(" ")[0]}</span>
                <span className="cspan-noon">{props.aboutNoon.content.split(" ")[1]}</span>
            </div>
        </div>
    );

}