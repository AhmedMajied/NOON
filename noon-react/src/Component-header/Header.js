/* Author: Amr Saeed */

import React, {Component} from 'react';
import './Header.css'

export default class Header extends Component{
  border(type){
    if(type == "circle"){
      return {
        borderBottomLeftRadius:50,
        borderBottomRightRadius: 50
      };
    }
  }

  render(){
    var moreLink = this.props.moreLink || "#";
    return (
      <header className="ihdr">
          <span className="ispn-hdr-left" style={this.border(this.props.type)}>
              <label className="ilbl-header-name">{this.props.title}</label>
          </span>
          <span className="ispn-hdr-right">
              <a className="clink-all-page" href={moreLink}>{this.props.navTitle}</a>
          </span>
      </header>
    );
  }
}
