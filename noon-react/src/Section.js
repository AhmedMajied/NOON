import React from 'react';
import {VideosCarousel} from "./Home-components/Videos-carousel"

export class Section extends React.Component
{

    constructor(){
        super();
        this.state = {
            videosCarouselData: require("./fake/videosCarousel.json")
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
