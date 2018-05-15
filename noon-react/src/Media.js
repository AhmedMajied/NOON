import React from 'react';
import {NewsVideosCarousel} from "./Media-components/News-videos-carousel";
import MediaSection from './Media-components/Media-section';
import Screen from './Screen/Screen';
import "./Media-components/media.js";
import "./Media-components/media.css";

export class Media extends React.Component
{
    /*Screen modes are: "Photos" - "Videos" */
    showScreen = (mode, src) => {
        this.refs.screen.powerOn(mode, src);
    };

    render(){
        var photosBackground = {
            'backgroundColor' : '#ffffff'
        };
        var videosBackground = {
            'backgroundColor' : '#efefef'
        };

        return(
            <div>
                <NewsVideosCarousel />

                {/* Media photos */}
                <MediaSection limit={12} title="Photos" dataURL="media/images" showScreen={this.showScreen} 
                              backgroundStyle={photosBackground} />
                {/* Media videos */}
                <MediaSection limit={12} title="Videos" dataURL="media/videos" showScreen={this.showScreen}
                              backgroundStyle={videosBackground} />
                {/*Sceen is a modal that opens images and videos for better view */}
                <Screen ref="screen" />
            </div>
        );
    }
}
