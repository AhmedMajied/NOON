/* author : Mariam Ashraf Fekry*/
import React from "react"
import "./css/locationOnMapStyle.css"
export const LocationOnMap =(props)=>
{
    /**Split given string into 2 strings */
    var array=props.locationOnMap.content.split(" ");
    const first=array[0];
    array.splice(0,1);
    const second=array.join(' ');
    return(
        /**Start OurLocation OnMap */
        <div className="cdiv-map-location">
            {/*Start Front Div*/}
            <div className="cdiv-front col-lg-3 pull-right">
                <h2 className="ch2-front"> {first}</h2>
                <p className="cp-front">{second}</p>
            </div>
            {/*End Front Div*/}
            {/*Start Back Div*/}
            <div className="cdiv-back"></div>
            {/*End Back Div*/}
        </div>
        /**End OurLocation OnMap */
    );
}