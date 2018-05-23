import React from 'react';

import "./shared-libraries/font-awesome-4.min.css";
import "./Home-components/home.css";
import "./Home-components/home.js";

import {VideosCarousel} from "./Home-components/Videos-carousel";
import {NewsSection} from "./NewsSection/News-Section";
import {ImagesCarousel} from "./Home-components/Images-carousel";
import SponsorsSection from "./Home-components/Sponsors-section";
import {Sports} from "./Sports-component/Sports";
import {Photos} from "./Photos-component/Photos";

export class Home extends React.Component
{

    constructor(){
        super();
        this.state = {
            sponsorsData: require("./fake-api/sponsors.json")
        };
    }

    render(){

        var flagBorderStyle = {
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%'
        }

        return(
            <div>
                <ImagesCarousel limit="5" />
                <Sports id="idiv-football-nav" sportName="Football"/>
                <NewsSection id="idiv-profile-nav" title = "Profiles"
                             flagBorderStyle = {flagBorderStyle}
                             more = "All Page"
                             newsSrc = "profiles.json"
                             withPublishTimes = {false}
                             withSocialLinks = {true}
                             withMoreDetails = {false}
                             alignment = "center"
                             descriptionLineCount = {2} />
                <Sports id="idiv-basketball-nav" sportName="Basketball"/>
                <Photos limit="8" />
                <Sports id="idiv-swimming-nav" sportName="Swimming"/>
                <VideosCarousel />
                <Sports id="idiv-vollyball-nav" sportName="Vollyball"/>
                <NewsSection id="idiv-magazine-nav" title = "Magazines"
                             flagBorderStyle = {flagBorderStyle}
                             more = "All Page"
                             newsSrc = "magazines.json"
                             withPublishTimes = {false}
                             withSocialLinks = {true}
                             withMoreDetails = {false}
                             alignment = "left"
                             descriptionLineCount = {5} />
                <Sports id="idiv-tennis-nav" sportName="Tennis"/>
                <NewsSection id="idiv-opinion-nav" title = "Opinions"
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
