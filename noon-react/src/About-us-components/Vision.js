/* author : Mariam Ashraf */
import React from "react"
import "./css/visionStyle.css"
export const Vision =(props)=>
{
    const style={ 
        backgroundImage: 'url('+props.vision.image+')'
    }
    return(
        <div className="row aboutus_row2"style={style}>
            <div className="cdiv-vision">
                <h2 className="cdiv-our-vision-title">{props.vision.title}</h2>
                <p className="cp-our-vision-description">{props.vision.content}</p>
            </div>
        </div>
    );
}