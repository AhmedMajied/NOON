import React from "react"
import "./css/postAddress.css"
export class PostAddress extends React.Component{
    constructor(props)
    {
        super();
        this.state={
            title:props.postAddress.title,
            info:props.postAddress.info,
        }
    }
    render()
    {
        return(
            <div className="cdiv-back-post-address">
                <div className="cdiv-front-post-address">
                    <h2 className="ch2-post-address-title">{this.state.title}</h2>
                    <div id="idiv-content-line"></div>
                    <div id="idiv-info">
                        {   this.state.info.map((information, index) => {
                            return( 
                            <div className="cdiv-our-info" key={index}>
                                <span id="ip-name">{information.name}</span>
                                <span id="ispan-value">{information.value}</span>
                            </div> 
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}