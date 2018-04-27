/* author: Ahmed Mohamed Ahmed */

import React from "react";
import {Carousel} from "./Carousel"

export class NewsCarousel extends React.Component{
    render(){
        var carouselIndicators = [];
        for(var i=0;i<this.props.dataItemsLength;i++){
            carouselIndicators.push(<li data-target={"#"+this.props.carouselID} data-slide-to={i} key={i} className={(i===0)?"active":""}></li>);
        }


        return(
            <Carousel carouselID={this.props.carouselID}>
                <div className="carousel-inner" id="idiv-news-carousel-inner">
                    {this.props.children}
                </div>

                {/*<li data-target={"#"+this.props.carouselID} data-slide-to={i} key={i} className={(i===0)?"active":""}></li>*/}
                {/* Indicators */}
                <ol className="carousel-indicators">
                    {carouselIndicators}
                </ol>
            </Carousel>
        );
    }
}
