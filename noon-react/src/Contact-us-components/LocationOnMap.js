import React from "react"
import "./css/locationOnMap.css"
export const LocationOnMap =(props)=>
{
    var array=props.locationOnMap.content.split(" ");
    const first=array[0];
    array.splice(0,1);
    const second=array.join(' ');
    return(
        <div className="cdiv-map-location">
            <div className="cdiv-front col-lg-3 pull-right">
                <h2 className="ch2-front"> {first}</h2>
                <p className="cp-front">{second}</p>
            </div>
            <div className="cdiv-back"></div>
        </div>
    );
}