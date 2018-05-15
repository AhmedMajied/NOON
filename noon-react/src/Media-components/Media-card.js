/* Author: Ahmed Hussein */

import React from 'react';

class MediaCard extends React.Component {    

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
            metaCaption = "Video duration ...";
            media = (
                <video className="cmedia" ref="video" onLoad={this.showVideoDuration} >
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
                        <figcaption className="cfigcaption-show-on-hover">{metaCaption}</figcaption>
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