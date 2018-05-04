import React from 'react';

import "./shared-libraries/font-awesome-4.min.css";
import "./Home-components/home.css";
import "./Home-components/home.js";

import {VideosCarousel} from "./Home-components/Videos-carousel";
import {ImagesCarousel} from "./Home-components/Images-carousel";
import SponsorsSection from "./Home-components/Sponsors-section";

export class Home extends React.Component
{

    constructor(){
        super();
        this.state = {
            imagesCarouselData: require("./fake-api/imagesCarousel.json"),
            videosCarouselData: require("./fake-api/videosCarousel.json"),
            sponsorsData: require("./fake-api/sponsors.json")
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
                <ImagesCarousel />
                <VideosCarousel
                    data={this.state.videosCarouselData}
                    videosHeadlineStyle ={videosHeadlineStyle}
                    videosHeadlineTextStyle = {videosHeadlineTextStyle}
                />
                <SponsorsSection data={this.state.sponsorsData} />
                {/* call your components here */}
            </div>
        );
    }
}
