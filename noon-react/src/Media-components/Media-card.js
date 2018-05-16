/* Author: Ahmed Hussein */

import React from 'react';

class MediaCard extends React.Component {  

    showVideoDuration = () => {
        let options = {  
            hour: "2-digit", minute: "2-digit", second: "2-digit"
        }; 

        var durationInSec = Math.floor(this.refs.video.duration); //ignore milliseconds
        var videoDuration = new Date();
        videoDuration.setHours(0, 0, durationInSec);
        this.refs.hoverFigCaption.innerHTML = videoDuration.toTimeString().split(' ')[0];
    }

    /**
     * Zooms in the video/photo that is shown on the card by viewing it in a big modal screen
     */
    zoomIn = ()  => {
        var screenMode = this.props.sectionTitle;
        var viewSource = this.props.mediaSrc;
        this.props.showScreen(screenMode, viewSource);
    }

    render() {
        var media, metaCaption;

        if(this.props.sectionTitle === "Photos") {
            metaCaption = this.props.date;
            media = (
                <img src={this.props.mediaSrc} className="img img-responsive cmedia" alt="not found" />
            );
        }
        else {
            metaCaption = "Getting duration ...";
            media = (
                <video className="cmedia" ref="video" onLoadedMetadata={this.showVideoDuration} >
                    <source src={this.props.mediaSrc} />
                </video>
            );
        }

        /*div shown on mouse hover*/
        var hoverDiv = (
            <div className="cdiv-show-on-hover">
                <span className="cspn-show-on-hover">
                    <figure className="cfgr-show-on-hover" onClick={this.zoomIn}>
                        <img src={this.props.hoverIconSrc} className="img img-responsive cimg-show-on-hover" alt="not found"/>
                        <figcaption ref="hoverFigCaption" className="cfigcaption-show-on-hover">{metaCaption}</figcaption>
                    </figure>
                </span>
            </div>
        );

        return (
            <div className="cdiv-media-card col-lg-3 col-md-4 col-sm-6" style={this.props.cardStyle}>
                <figure className="cfgr-main">
                    <div className="cdiv-media-box">
                        {hoverDiv}
                        {media}
                    </div>
                    <figcaption className="cfigcaption-main">{this.props.caption}</figcaption>
                </figure>
            </div>
        );
    }
}

export default MediaCard;