import React from "react";
import "./css/photo.css";
import "./css/photoCopy.css";
export class PhotoCopy extends React.Component{
    constructor(props)
        {
            super();
            this.state={
                image:props.photoCopy.image,
            }
        }
    render()
    {
        return(
            <div className="cdiv-behind-image">
                <div className="cdiv-vertical">
                </div>
                <div className="cdiv-horizontal">
                </div>
                <div className="cdiv-contain-image">
                    <img src={this.state.image} alt=""/> 
                </div>
            </div>
        );
    }
}