import React from 'react';

class MediaCard extends React.Component {
    constructor(props){
		super();
		this.state = {
			metaCaption: props.date /*Either image date or video duration*/
		};
    }
    
    showVideoDuration = (e) => 
        console.log('videoDuration')
        /*var videoDuration = this.refs.video.duration;
        console.log(videoDuration);
        this.setState({metaCaption: videoDuration});*/
    
    render() {
        var media;
        
        /*div shown on mouse hover*/
        var hoverDiv = (
            <div className="cdiv-show-on-hover">
                <span className="cspn-show-on-hover">
                    <figure className="cfgr-show-on-hover">
                        <img src={this.props.hoverIconSrc} className="img img-responsive cimg-show-on-hover" alt=""/>
                        <figcaption className="cfigcaption-show-on-hover">{this.state.metaCaption}</figcaption>
                    </figure>
                </span>
            </div>
        );

        if(this.props.sectionTitle === "Photos") {
            media = (
                <img src={this.props.mediaSrc} className="img img-responsive cmedia" alt="" />
            );
        }
        else {
            media = (
                <video className="cmedia" ref="video" onLoad={this.showVideoDuration} >
                    <source src={this.props.mediaSrc} />
                </video>
            );
        }

        return (
            <div className="cdiv-media-card col-lg-3 col-md-4 col-sm-6">
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