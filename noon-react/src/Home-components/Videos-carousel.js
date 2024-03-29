/* author: Ahmed Mohamed Ahmed */

import React from "react";

import {Carousel} from "./Carousel";

export class VideosCarousel extends React.Component{

    constructor(){
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        /*Call nodejs API*/
        fetch("media/videos").then(res => {
            return res.json()
        }).then(JSONRes => { 
            this.setState({data: JSONRes});
        });
    }

    render(){
        return(
            <div id="idiv-videos-section">

                {/* videos section header */}
                <div id="idiv-videos-header">
                    <div className="row">
                        <div className="col-6">
                            <div id="idiv-videos-headline" >
                                <span id="ispan-videos-headline">Videos</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div id="idiv-videos-allpage">
                                <a href="media" id="ilink-videos-allpage">All page</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* videos section body */}
                <Carousel carouselID={"idiv-videos-carousel"}>
                    {/* videos slides */}
                    <div className="carousel-inner">
                        {this.state.data.map((carouselItem,i) =>
                            <div className={"carousel-item "+((i===0)?"active":"") } key={carouselItem._id} >
                                <div className="row">
                                    <div className="col-3 cdiv-video-carousel-item">
                                        {/* video and its cover */}
                                        <img src={carouselItem.coverSource} alt={carouselItem.captionText} className="img-fluid cimg-video-cover" />
                                        <video className="video" controls>
                                            <source src={carouselItem.source} />
                                                Your browser does not support the video tag.
                                        </video>

                                        {/* video caption */}
                                        <div className="cdiv-video-caption">
                                            <div className="cdiv-video-title">{carouselItem.title}</div>

                                            <div className="row">
                                                <div className="col-sm-6 col-md-6 col-lg-9">
                                                    <div className="cdiv-video-caption-text">
                                                        {carouselItem.captionText}
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-3">
                                                    <center>
                                                        <i className="fa fa-play-circle cplay-btn" aria-hidden="true" style={{"fontSize": "49px"}}></i>
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
                        <i className="fa fa-chevron-circle-left c-video-carousel-control" aria-hidden="true"></i>
                    </a>
                    <a className="carousel-control-next" href="#idiv-videos-carousel" data-slide="next" id="ilink-video-right-control">
                        <i className="fa fa-chevron-circle-right c-video-carousel-control" aria-hidden="true" ></i>
                    </a>
                </Carousel>
            </div>
        );
    }
}