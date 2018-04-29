/* author : Mariam Ashraf */
import React from "react"
import "./css/logoCopyStyle.css"
import {Logo} from "./Logo"
export const LogoCopy =(props)=>
{   
    return(
        <Logo logo={props.logoCopy} />
    );
}