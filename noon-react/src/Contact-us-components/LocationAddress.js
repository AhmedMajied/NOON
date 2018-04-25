import React from "react"
import "./css/locationAddress.css"
export const LocationAddress=(props)=>
{
    return(
        <div id="idiv-location-address" className="col-lg-4 pull-right hidden-xs hidden-sm">
        <div id="idiv-front-location-address">
            <h2 id="ih2-location-address-title">{props.locationAddress.title}</h2>
            <div id="idiv-content-location-address">
                <div id="idiv-info">
                    {   props.locationAddress.info.map((information, index) => {
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
    </div>
    );
}