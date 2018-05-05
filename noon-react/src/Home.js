import React from 'react';

import "./shared-libraries/font-awesome-4.min.css";
import "./Home-components/home.css";
import "./Home-components/home.js";

import {VideosCarousel} from "./Home-components/Videos-carousel";
import {NewsSection} from "./NewsSection/News-Section";
import {ImagesCarousel} from "./Home-components/Images-carousel";
import SponsorsSection from "./Home-components/Sponsors-section";

export class Home extends React.Component
{

    constructor(){
        super();
        this.state = {
            imagesCarouselData: require("./fake-api/imagesCarousel.json"),
            videosCarouselData: require("./fake-api/videosCarousel.json"),
            sponsorsData: require("./fake-api/sponsors.json")
        };
    }

    render(){
        var videosHeadlineStyle = {
            width: '75px',
            paddingLeft: '7px',
            paddingBottom: '5px'
        };
        var videosHeadlineTextStyle = {
            verticalAlign: 'bottom'
        };

        var flagBorderStyle = {
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%'
        }

        return(
            <div>
                <ImagesCarousel />
                <NewsSection title = "Profiles"
                             flagBorderStyle = {flagBorderStyle}
                             more = "All Page"
                             newsSrc = "profiles.json"
                             withPublishTimes = {false}
                             withSocialLinks = {true}
                             withMoreDetails = {false}
                             alignment = "center"
                             descriptionLineCount = {2} />
                <VideosCarousel
                    data={this.state.videosCarouselData}
                    videosHeadlineStyle ={videosHeadlineStyle}
                    videosHeadlineTextStyle = {videosHeadlineTextStyle}
                />
                <NewsSection title = "Magazines"
                             flagBorderStyle = {flagBorderStyle}
                             more = "All Page"
                             newsSrc = "magazines.json"
                             withPublishTimes = {false}
                             withSocialLinks = {true}
                             withMoreDetails = {false}
                             alignment = "left"
                             descriptionLineCount = {5} />
                <NewsSection title = "Opinions"
                             flagBorderStyle = {flagBorderStyle}
                             more = "All Page"
                             newsSrc = "opinions.json"
                             withPublishTimes = {false}
                             withSocialLinks = {true}
                             withMoreDetails = {false}
                             alignment = "left"
                             descriptionLineCount = {5} />
                <SponsorsSection data={this.state.sponsorsData} />
            </div>
        );
    }
}
