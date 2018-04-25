import React from "react"
import "./css/photoCopy.css"
import { Photo } from "./Photo"
export const PhotoCopy =(props)=>
{
    return(
        <Photo photo={props.photoCopy}/>
    );
}