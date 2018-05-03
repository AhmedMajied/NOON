import React from 'react';
import MediaCard from './Media-card';

class MediaSection extends React.Component{
    constructor(props){
		super();
		this.state = {
			data: props.data,
		};
    }

    render() {
        let cards = null;

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
                                hoverIconSrc = {(this.props.title === "Photos") ? 
                                                "./images/img.png" : "./images/play.png"}
                                caption={card.captionText} />
                    }
                )
            );
        }

        return (
            <div className="container-fluid cdiv-component-root">
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