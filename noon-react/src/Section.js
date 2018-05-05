/* Author: Amr Saeed */

import React from 'react';
import {VideosCarousel} from "./Home-components/Videos-carousel"
import {Photos} from "./Section-components/Photos"
import {Sports} from "./Section-components/Sports"

export class Section extends React.Component
{

    constructor(){
        super();
        this.state = {
            videosCarouselData: require("./fake-api/videosCarousel.json")
        };
    }

    render(){
        var videosHeadlineStyle = {
            width: '82px',
            textAlign: 'center',
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%'
        };
        var videosHeadlineTextStyle = {
            verticalAlign: 'middle'
        };

        return(
            <div>
                <Sports sportName="football"/>
                <Photos/>
                <VideosCarousel
                    data={this.state.videosCarouselData}
                    videosHeadlineStyle ={videosHeadlineStyle}
                    videosHeadlineTextStyle = {videosHeadlineTextStyle}
                />
            </div>
        );
    }
}
