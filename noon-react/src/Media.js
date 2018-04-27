import React from 'react';
import {NewsVideosCarousel} from "./Media-components/News-videos-carousel";
import "./Media-components/media.js";
import "./Media-components/media.css";

export class Media extends React.Component
{

    constructor(){
        super();
        this.state = {
            videosCarouselData: require("./fake/videosCarousel.json")
        };
    }

    render(){
        return(
            <div>
                <NewsVideosCarousel data={this.state.videosCarouselData} />
                {/* call your components here */}
            </div>
        );
    }
}
