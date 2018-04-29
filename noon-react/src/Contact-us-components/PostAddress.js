/* author : Mariam Ashraf */
import React from "react"
import "./css/postAddressStyle.css"
import {NOON} from "./../About-us-components/NOON"
export const PostAddress =(props)=>
{
    return(
        /** Start PostAddress Componenet  */
        <NOON noon={props.postAddress}/>
        /** End PostAddress Componenet  */

    );
}