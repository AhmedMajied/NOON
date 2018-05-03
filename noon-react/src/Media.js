import React from 'react';
import {NewsVideosCarousel} from "./Media-components/News-videos-carousel";
import "./Media-components/media.js";
import "./Media-components/media.css";
import MediaSection from './Media-components/Media-section';

export class Media extends React.Component
{

    constructor(){
        super();
        this.state = {
            videosCarouselData: require("./fake-api/videosCarousel.json"),
            photosData: require("./fake-api/photos.json"),
            videosData: require("./fake-api/videos.json"),
        };
    }

    render(){
        return(
            <div>
                <NewsVideosCarousel data={this.state.videosCarouselData} />
                {/* Media photos */}
                <MediaSection title="Photos" data={this.state.photosData}/>
                {/* Media vidoeos */}
                <MediaSection title="Videos" data={this.state.videosData}/>
                {/* call your components here */}
            </div>
        );
    }
}
