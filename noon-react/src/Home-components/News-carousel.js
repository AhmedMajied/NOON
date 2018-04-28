/* author: Ahmed Mohamed Ahmed */

import React from "react";
import {Carousel} from "./Carousel"

export const NewsCarousel = (props) => {

    var carouselIndicators = [];
    for(var i=0;i<props.dataItemsLength;i++){
        carouselIndicators.push(<li data-target={"#"+props.carouselID} data-slide-to={i} key={i} className={(i===0)?"active":""}></li>);
    }

    return(
        <Carousel carouselID={props.carouselID}>
            <div className="carousel-inner" id="idiv-news-carousel-inner">
                {props.children}
            </div>

            {/* Indicators */}
            <ol className="carousel-indicators">
                {carouselIndicators}
            </ol>
        </Carousel>
    );
}
