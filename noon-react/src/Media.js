import React from 'react';
import {NewsVideosCarousel} from "./Media-components/News-videos-carousel";
import MediaSection from './Media-components/Media-section';
import Screen from './Screen/Screen';
import "./Media-components/media.js";
import "./Media-components/media.css";

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

    /*Screen modes are: "Photos" - "Videos" */
    showScreen = (mode, src) => {
        this.refs.screen.powerOn(mode, src);
    };

    render(){
        var photosBackground = {
            'background-color' : '#ffffff'
        };
        var videosBackground = {
            'background-color' : '#efefef'
        };

        return(
            <div>
                <NewsVideosCarousel data={this.state.videosCarouselData} />
                {/* Media photos */}
                <MediaSection title="Photos" data={this.state.photosData} 
                              showScreen={this.showScreen} backgroundStyle={photosBackground} />
                {/* Media videos */}
                <MediaSection title="Videos" data={this.state.videosData} 
                              showScreen={this.showScreen} backgroundStyle={videosBackground} />
                {/*Sceen is a modal that opens images and videos for better view */}
                <Screen ref="screen" />
                {/* call your components here */}
            </div>
        );
    }
}
