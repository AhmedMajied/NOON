/* Author: Ahmed Hussein */

import React from 'react';
import Sponsor from './Sponsor';

class SponsorsSection extends React.Component {

    constructor(props){
		super();
		this.state = {
			data: props.data,
		};
    }
    
    render() {
        let sponsors = null;

        if ( this.state.data ) {
            sponsors = (
                this.state.data.data.map(
                    (sponsor, index) => {
                        return <Sponsor key={sponsor.id} logo={sponsor.logo} alt={sponsor.alt} />
                    }
                )
            );
        }
        return (
            <div id="idiv-sponsors" className="container-fluid">
                <div className="row">
                    {sponsors}
                </div>
            </div>
        );
    }
}

export default SponsorsSection;