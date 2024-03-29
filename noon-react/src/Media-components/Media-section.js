/* Author: Ahmed Hussein */

import React from 'react';
import MediaCard from './Media-card';

class MediaSection extends React.Component{
    constructor(props){
		super();
		this.state = {
            data: [],
            limit: props.limit
        };
    }

    componentDidMount() {
        /*Call nodejs API*/
        fetch(this.props.dataURL).then(res => {
            return res.json()
        }).then(JSONRes => {
            this.setState({data: JSONRes});
        });
    }

    showMore = () => {
        this.setState({limit: this.state.data.length});
        this.refs.btnMore.setAttribute("hidden", "hidden");
    }

    render() {
        let cards = null;
        var cardStyle, hoverIconSrc;

        if(this.props.title === "Photos") {
            hoverIconSrc = "./images/img.png";
            cardStyle = {
                'margin': '1.25rem 0rem'
            };
        } else {
            hoverIconSrc = "./images/play.png";
            cardStyle = {
                'margin': '1.25rem -0.07rem',
                'padding': '0rem 0rem'
            };
        }

        if ( this.state.data ) {
            cards = (
                this.state.data.slice(0, this.state.limit).map(
                    (card, index) => {
                        return <MediaCard 
                                key={card._id}
                                sectionTitle={this.props.title}
                                mediaSrc={ card.source}
                                date={card.publishTime}
                                hoverIconSrc = {hoverIconSrc}
                                caption={card.captionText}
                                cardStyle = {cardStyle}
                                showScreen={this.props.showScreen} />
                    }
                )
            );
        }

        return (
            <div className="container-fluid cdiv-component-root" style={this.props.backgroundStyle}>
                <header className="chdr">
                    <span className="cspn-hdr">
                        <label className="clbl-hdr">{this.props.title}</label>
                    </span>
                </header>
                
                <div className="container-fluid">
                    {/*rows of photos*/}
                    <div className="row cdiv-media-photo-row">
                        {/*photo card*/}
                        {cards}
                    </div>
                </div>

                <footer className="container-fluid cftr">
                    <button ref="btnMore" className="cbtn-more" onClick={this.showMore}>More</button>
                </footer>
            </div>
        );
    }
}

export default MediaSection;