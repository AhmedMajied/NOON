/* author: Ahmed Mohamed Ahmed */

import React from "react";
import "./CSS/carousel.css";

export class Carousel extends React.Component{

    render(){
        return(
            <div className ="row">
                <div className="col-xs-12">
                    <div className="carousel slide" id={this.props.carouselID} data-ride="carousel">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
