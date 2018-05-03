/* author : Mariam Ashraf Fekry*/
import React from "react"
import "./css/photoCopyStyle.css"
import { Photo } from "./Photo"
export const PhotoCopy =(props)=>
{
    return(
        /**Start PhotoCopy by Photo Component */
        <Photo photo={props.photoCopy}/>
        /**End PhotoCopy */
    );
}