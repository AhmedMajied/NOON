/* author : Mariam Ashraf Fekry*/
import React from "react"
import "./css/mapStyle.css"
import {InitMap} from "./js/InitMap"
export const Map=(props)=>
{
    return(
        /**Start Map */
        <div id="idiv-map-location">
            {/*Start Call InitMap and sent marker and put style to container element and map element*/}
            <InitMap containerElement = {
                <div style={{height:"100%"}}/> }
                mapElement = { <div style={{height:"100%"}}/>}
                marker={props.marker}
            />
            {/*End Call InitMap*/}
        </div>
        /**End Map */
    );
}