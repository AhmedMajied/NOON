/* author: Ahmed Mohamed Ahmed */

import React from "react";
import {NewsCarousel} from "./../Home-components/News-carousel";

export class NewsVideosCarousel extends React.Component{

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
            <NewsCarousel
                carouselID={"idiv-news-videos-carousel"}
                dataItemsLength={this.props.limit}
            >
                {/* videos slides */}
                {this.state.data.slice(0,this.props.limit).map((carouselItem,i) =>
                    <div className={"carousel-item "+((i===0)?"active":"") } key={carouselItem._id} >
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4 cdiv-carousel-item">

                                {/* video and its cover */}
                                <img src={carouselItem.coverSource} alt={carouselItem.captionText} className="img-fluid cimg-carousel-image" />
                                <video className="video" controls>
                                    <source src={carouselItem.source} />
                                    Your browser does not support the video tag.
                                </video>

                                {/* video caption */}
                                <div className="cdiv-carousel-item-caption" style={{"paddingRight":"3.1%"}}>
                                    <div className="cspan-published-time">{carouselItem.publishTime}</div>

                                    <div className="row">
                                        <div className="col-sm-6 col-md-6 col-lg-9">
                                            <div className="cdiv-text" style={{"marginTop":"21px"}}>
                                                {carouselItem.captionText}
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3">
                                            <center>
                                                <i className="fa fa-play-circle" aria-hidden="true" style={{display:'none',fontSize:'81px'}}></i>
                                                <img src={carouselItem.iconImageSource} className="cimg-icon" alt="icon"/>
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
