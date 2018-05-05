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
    return (
      <header className="ihdr">
          <span className="ispn-hdr-left" style={this.border(this.props.type)}>
              <label className="ilbl-header-name">{this.props.title}</label>
          </span>
          <span className="ispn-hdr-right">
              <label className="ilbl-all-page">{this.props.navTitle}</label>
          </span>
      </header>
    );
  }
}
