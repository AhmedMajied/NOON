import React from "react"
import "./css/postAddress.css"
export const PostAddress =(props)=>
{
    return(
        <div className="cdiv-back-post-address">
            <div className="cdiv-front-post-address">
                <h2 className="ch2-post-address-title">{props.postAddress.title}</h2>
                <div id="idiv-content-line"></div>
                <div id="idiv-info">
                    {   props.postAddress.info.map((information, index) => {
                        return( 
                        <div className="cdiv-our-info" key={index}>
                            <span id="ip-name">{information.name}</span>
                            <span id="ispan-value">{information.value}</span>
                        </div> 
                        );
                    })}
                </div>
            </div>
        </div>
    );
}