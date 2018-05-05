/* author: Ahmed Mohamed Ahmed */

import React from "react";

export const Carousel = (props) => {
    return(
        <div className ="row">
            <div className="col-12">
                <div className="carousel slide" id={props.carouselID} data-ride="carousel" data-interval="5000">
                    {props.children}
                </div>
            </div>
        </div>
    );
}
