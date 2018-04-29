/* author : Mariam Ashraf */
import React from "react"
import "./css/photoCopyStyle.css"
import { Photo } from "./Photo"
export const PhotoCopy =(props)=>
{
    return(
        <Photo photo={props.photoCopy}/>
    );
}