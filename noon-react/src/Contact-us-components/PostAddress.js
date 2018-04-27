import React from "react"
import "./css/postAddress.css"
import {NOON} from "./../About-us-components/NOON"
export const PostAddress =(props)=>
{
    return(
        <NOON noon={props.postAddress}/>
    );
}