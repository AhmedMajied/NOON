/* author : Mariam Ashraf */
import React from "react"
import "./css/photoStyle.css"
export const Photo =(props)=>
{
    return(
        <div className="cdiv-behind-image">
            <div className="cdiv-contain-image">
                <img className= "cimg-photo" src={props.photo.image} alt=""/> 
                <div className="cdiv-horizontal">
                </div>
            </div>
        </div>
    );
}