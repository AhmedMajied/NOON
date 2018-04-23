import React from "react";
import "./css/vision.css";
export class Vision extends React.Component{
    constructor(props)
    {
        super();
        this.state={
            title:props.vision.title,
            content:props.vision.content,
            image:props.vision.image
        }
        this.style={ 
            backgroundImage: 'url('+this.state.image+')'
    }
    }
    render()
    {
        return(
            <div className="row aboutus_row2"style={this.style}>
                <div className="cdiv-vision">
                    <h2 className="cdiv-our-mission-title">{this.state.title}</h2>
                    <p className="cp-our-mission-description">{this.state.content}</p>
                </div>
            </div>
        );
    }
}