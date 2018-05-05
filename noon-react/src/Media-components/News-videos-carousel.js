/* author: Ahmed Mohamed Ahmed */

import React from "react";
import {NewsCarousel} from "./../Home-components/News-carousel";

export class NewsVideosCarousel extends React.Component{

    constructor(){
        super();
        this.state = {
            data: require("./../fake-api/videosCarousel.json")
        };
    }

    render(){
        return(
            <NewsCarousel
                carouselID={"idiv-news-videos-carousel"}
                dataItemsLength={this.state.data.data.length}
            >
                {/* videos slides */}
                {this.state.data.data.map((carouselItem,i) =>
                    <div className={"carousel-item "+((i===0)?"active":"") } key={carouselItem.ID} >
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4 cdiv-carousel-item">

                                {/* video and its cover */}
                                <img src={carouselItem.cover} alt={carouselItem.captionText} className="img-fluid cimg-carousel-image" />
                                <video className="video" controls>
                                    <source src="videos/1.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                {/* video caption */}
                                <div className="cdiv-carousel-item-caption">
                                    <div className="cspan-published-time">{carouselItem.publishTime}</div>

                                    <div className="row">
                                        <div className="col-sm-12 col-md-9 col-lg-9">
                                            <div className="cdiv-text">
                                                {carouselItem.captionText}
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-3 col-lg-3">
                                            <center>
                                                <i className="fa fa-play-circle" aria-hidden="true" style={{display:'none',fontSize:'73px'}}></i>
                                                <img src={carouselItem.iconImage} className="cimg-icon" alt="icon"/>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </NewsCarousel>
        );
    }
}
