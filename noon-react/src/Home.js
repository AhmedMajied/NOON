import React from 'react';

import "./shared-libraries/font-awesome-4.min.css";
import "./Home-components/home.css";
import "./Home-components/home.js";

import {VideosCarousel} from "./Home-components/Videos-carousel";
import {ImagesCarousel} from "./Home-components/Images-carousel"
export class Home extends React.Component
{

    constructor(){
        super();
        this.state = {
            imagesCarouselData: require("./fake/imagesCarousel.json"),
            videosCarouselData: require("./fake/videosCarousel.json")
        };
    }

    render(){
        var videosHeadlineStyle = {
            width: '75px',
            paddingLeft: '7px',
            paddingBottom: '5px'
        };
        var videosHeadlineTextStyle = {
            verticalAlign: 'bottom'
        };

        return(
            <div>
                <ImagesCarousel data={this.state.imagesCarouselData} />
                <VideosCarousel
                    data={this.state.videosCarouselData}
                    videosHeadlineStyle ={videosHeadlineStyle}
                    videosHeadlineTextStyle = {videosHeadlineTextStyle}
                />
                {/* call your components here */}
            </div>
        );
    }
}
