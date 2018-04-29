/* author : Mariam Ashraf */
import React from "react"
import "./css/locationAddressStyle.css"
import { PostAddressInfo } from "./PostAddressInfo";
export const LocationAddress=(props)=>
{
    return(
        /**Start LocationAddress */
        <div id="idiv-location-address" className="col-lg-3 col-sm-offset-1 col-lg-offset-0">
            {/**Start Front Div */}
            <div id="idiv-front-location-address">
                {/*Title Of locationAddress*/}
                <h2 id="ih2-location-address-title">{props.locationAddress.title}</h2>
                {/*LocationAddress Information sent to component PostAddressInfo*/}
                <div id="idiv-content-location-address">
                    <PostAddressInfo noon={props.locationAddress}/>
                </div>
            </div>
            {/**End Front Div */}
        </div>
        /**End LocationAddress */
    );
}