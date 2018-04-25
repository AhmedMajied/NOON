import React from "react"
import "./css/logoCopy.css"
import {Logo} from "./Logo"
export const LogoCopy =(props)=>
{   
    return(
        <Logo logo={props.logoCopy} />
    );
}