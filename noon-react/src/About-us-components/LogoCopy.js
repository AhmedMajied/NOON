/* author : Mariam Ashraf */
import React from "react"
import "./css/logoCopyStyle.css"
import {Logo} from "./Logo"
export const LogoCopy =(props)=>
{   
    return(
        /**Start Logo Copy by call Logo Component */
        <Logo logo={props.logoCopy} />
        /**End Logo Copy */
    );
}