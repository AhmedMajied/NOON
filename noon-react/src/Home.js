import React from 'react';
import {NewsCarousel as ImagesCarousel} from "./Home-components/News-carousel";
//import {VideosCarousel} from "./Home-components/videos-carousel";

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
                {/*<VideosCarousel data={this.state.videosCarouselData} />*/}
                {/* call your components here */}
            </div>
        );
    }
}
