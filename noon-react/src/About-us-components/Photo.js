import React from "react"
import "./css/photo.css"
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