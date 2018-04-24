/* author: Ahmed Mohamed Ahmed */

import React from "react";

import {Carousel} from "./Carousel";

export class VideosCarousel extends React.Component{

    constructor(props){
        super();
        this.state = {
            data: props.data
        };
    }

    render(){
        return(
            <div id="idiv-videos-section">

                {/* videos section header */}
                <div id="idiv-videos-header">
                    <div className="row">
                        <div className="col-6">
                            <div id="idiv-videos-headline">
                                <span id="ispan-videos-headline">Videos</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div id="idiv-videos-allpage">
                                <a href="#" id="ilink-videos-allpage">All page</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* videos section body */}
                <Carousel carouselID={"idiv-videos-carousel"}>
                    {/* videos slides */}
                    <div className="carousel-inner">
                        {this.state.data.data.map((carouselItem,i) =>
                            <div className={"carousel-item "+((i===0)?"active":"") } key={i} >
                                <div className="row">
                                    <div className="col-3 cdiv-video-carousel-item">
                                        {/* video and its cover */}
                                        <img src={carouselItem.cover} alt={carouselItem.captionText} className="img-fluid cimg-video-cover" />
                                        <video className="video" controls>
                                            <source src="videos/1.mp4" type="video/mp4" />
                                                Your browser does not support the video tag.
                                        </video>

                                        {/* video caption */}
                                        <div className="cdiv-video-caption">
                                            <div className="cdiv-video-title">{carouselItem.title}</div>

                                            <div className="row">
                                                <div className="col-sm-12 col-md-9 col-lg-9">
                                                    <div className="cdiv-video-caption-text">
                                                        {carouselItem.captionText}
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-3 col-lg-3">
                                                    <center>
                                                        <i className="fa fa-play-circle" aria-hidden="true"></i>
                                                    </center>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* left and right controls */}
                    <a className="carousel-control-prev" href="#idiv-videos-carousel" data-slide="prev" id="ilink-video-left-control">
                        <i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
                    </a>
                    <a className="carousel-control-next" href="#idiv-videos-carousel" data-slide="next" id="ilink-video-right-control">
                        <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
                    </a>
                </Carousel>
            </div>
        );
    }
}