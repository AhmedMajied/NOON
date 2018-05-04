/* author : Mariam Ashraf Fekry*/
import React from "react"
import "./css/visionStyle.css"
export const Vision =(props)=>
{
    /**Start Style backgroundImage */
    const style={ 
        backgroundImage: 'url('+props.vision.image+')'
    }
    /**End Style backgroundImage */
    return(
        /**Start Vision Component */
        <div className="row aboutus_row2"style={style}>
            <div className="cdiv-vision">
                {/**Vision Title */}
                <h2 className="cdiv-our-vision-title">{props.vision.title}</h2>
                {/**Vision Content */}
                <p className="cp-our-vision-description">{props.vision.content}</p>
            </div>
        </div>
        /**End Vision Component */
    );
}