import React from "react"
import "./css/callUs.css"
import {About} from "./../About-us-components/About"
export const CallUs =(props)=>{
    return(
        <About aboutNoon={props.callUs}/>
    );
}