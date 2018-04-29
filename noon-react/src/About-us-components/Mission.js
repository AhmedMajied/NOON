/* author : Mariam Ashraf */
import React from "react"
import "./css/missionStyle.css"
import {NOON} from "./NOON"
export const Mission =(props)=>
{
    return(
        <NOON noon={props.mission} /> 
    );
}