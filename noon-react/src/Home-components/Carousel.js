/* author: Ahmed Mohamed Ahmed */

import React from "react";

export class Carousel extends React.Component{

    render(){
        return(
            <div className ="row">
                <div className="col-12">
                    <div className="carousel slide" id={this.props.carouselID} data-ride="carousel" data-interval="5000">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
