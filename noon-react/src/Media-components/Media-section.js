import React from 'react';
import MediaCard from './Media-card';

class MediaSection extends React.Component{
    constructor(props){
		super();
		this.state = {
			data: props.data
		};
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
                this.state.data.data.slice(0, 12).map(
                    (card, index) => {
                        var date = new Date(card.publishTime);
                        return <MediaCard 
                                key={card.id}
                                sectionTitle={this.props.title}
                                mediaSrc={card.source}
                                date={date.getDate() + "/" + (date.getMonth()+1) + "/" + 
                                      date.getFullYear()}
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
                    <button className="cbtn-more">More</button>
                </footer>
            </div>
        );
    }
}

export default MediaSection;