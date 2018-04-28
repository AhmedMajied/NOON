import React from 'react';
import {NewsVideosCarousel} from "./Media-components/News-videos-carousel";
import "./Media-components/media.js";
import "./Media-components/media.css";

export class Media extends React.Component
{
    render(){
        return(
            <div>
                <NewsVideosCarousel />
                {/* call your components here */}
            </div>
        );
    }
}
