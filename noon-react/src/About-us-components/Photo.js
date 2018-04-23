import React from "react";
import "./css/photo.css";
export class Photo extends React.Component{
    constructor(props)
        {
            super();
            this.state={
                image:props.photo.image,
            }
        }
    render()
    {
        
        return(
            <div className="cdiv-behind-image">
                <div className="cdiv-contain-image">
                    <img src={this.state.image} alt=""/> 
                </div>
            </div>
        );
    }
}