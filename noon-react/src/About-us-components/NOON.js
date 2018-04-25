import React from "react"
import "./css/noon.css"

export const NOON =(props)=>
{
    return(
        <div className="cdiv-behind-content-noon">
            <div className="cdiv-front-content-noon">
                <div className="cdiv-noon-title">{props.noon.title}</div>
                <p className="cp-noon">{props.noon.content}</p>
            </div>
        </div>
    );
}