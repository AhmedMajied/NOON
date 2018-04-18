import React from 'react';
import {NewsCarousel as ImagesCarousel} from "./Home-components/news-carousel"

export class Home extends React.Component
{

    constructor(){
        super();
        this.state = {
            imagesCarouselData: require("./fake/imagesCarousel.json")
        };
    }

    render(){
        return(
            <div>
		        <ImagesCarousel data={this.state.imagesCarouselData} />
                {/* call your components here */}
            </div>
        );
    }
}
