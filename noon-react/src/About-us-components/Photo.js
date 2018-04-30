/* author : Mariam Ashraf */
import React from "react"
import "./css/photoStyle.css"
export const Photo =(props)=>
{
    return(
        /**Start Photo  */
        <div className="cdiv-behind-image">
            {/**Start Div Contains Photo  */}
            <div className="cdiv-contain-image">
                <img className= "cimg-photo" src={props.photo.image} alt=""/> 
                <div className="cdiv-horizontal">
                </div>
            </div>
            {/**End Div Contains Photo  */}
        </div>
        /**End Photo  */
    );
}