/* author : Mariam Ashraf */
import React from "react"
import "./css/callUsStyle.css"
import {About} from "./../About-us-components/About"
export const CallUs =(props)=>{
    return(
        /**start call us component using About Component with callUs data*/
        <About aboutNoon={props.callUs}/>
        /** End call us component */
    );
}