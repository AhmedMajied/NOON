import React from 'react';

class Sponsor extends React.Component {
    render(){
        return (
            <span className="col-lg-2 col-md-3 col-sm-3 col-xs-3 cspn-sponsor">
                <img className="img img-responsive" src={this.props.logo} alt={this.props.alt} />
            </span>
        );
    }
}

export default Sponsor;