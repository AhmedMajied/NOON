/* author : Mariam Ashraf Fekry*/
import React from "react"
import "./css/missionStyle.css"
import {NOON} from "./NOON"
export const Mission =(props)=>
{
    return(
        /**Start Mission by NOON Component */
        <NOON noon={props.mission} /> 
        /**End Mission */
    );
}