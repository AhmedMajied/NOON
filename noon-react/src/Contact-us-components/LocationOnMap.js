import React from "react"
import "./css/locationOnMap.css"
export class LocationOnMap extends React.Component{
    constructor(props){
        super();
        this.state={
            content:props.locationOnMap.content,            
        }
        var array=this.state.content.split(" ");
        this.first=array[0];
        array.splice(0,1);
        this.second=array.join(' ');
    }
    render()
    {
        return(
            <div className="cdiv-map-location">
                <div className="cdiv-front col-lg-3 pull-right">
                    <h2 className="ch2-front"> {this.first}</h2>
                    <p className="cp-front">{this.second}</p>
                </div>
                <div className="cdiv-back"></div>
            </div>
        );
    }
}