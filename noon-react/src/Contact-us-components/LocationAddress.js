import React from "react"
import "./css/locationAddress.css"
import { PostAddressInfo } from "./PostAddressInfo";
export const LocationAddress=(props)=>
{
    return(
        <div id="idiv-location-address" className="col-lg-4 col-lg-offset-1 hidden-xs hidden-sm">
        <div id="idiv-front-location-address">
            <h2 id="ih2-location-address-title">{props.locationAddress.title}</h2>
            <div id="idiv-content-location-address">
                <PostAddressInfo noon={props.locationAddress}/>
            </div>
        </div>
    </div>
    );
}