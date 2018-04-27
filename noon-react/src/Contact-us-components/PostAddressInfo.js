import React from "react"
export const PostAddressInfo =(props)=>
{
    return(
        <div className="cdiv-info">
            {   props.noon.info.map((information, index) => {
                return( 
                <div className="cdiv-our-info" key={index}>
                    <span className="cp-name">{information.name}</span>
                    <span className="cspan-value">{information.value}</span>
                </div> 
                );
            })}
        </div>
    );
}
       