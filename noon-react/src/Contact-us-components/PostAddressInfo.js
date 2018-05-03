/**Author : Mariam Ashraf Fekry*/
import React from "react"
export const PostAddressInfo =(props)=>
{
    return(
        /**Start Info Div */
        <div className="cdiv-info">
            {   /**Start Loop on informations and put name and value to spans */
                props.noon.info.map((information, index) => {
                return( 
                <div className="cdiv-our-info" key={index}>
                    <span className="cp-name">{information.name}</span>
                    <span className="cspan-value">{information.value}</span>
                </div> 
                );
            })}
            {/*End Loop*/}
        </div>
        /**End Info Div */
    );
}
       