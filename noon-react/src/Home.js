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
        return(
            <div>
                <ImagesCarousel data={this.state.imagesCarouselData} />
                <VideosCarousel data={this.state.videosCarouselData} />
                {/* call your components here */}
            </div>
        );
    }
}
