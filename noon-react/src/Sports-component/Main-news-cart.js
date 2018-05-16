/* Author: Amr Saeed */

import React, {Component} from 'react';
import './Sports.css'

export default class MainNewsCart extends Component {
  render(){
    let mainNews = this.props.mainNews;
    return (
      <div id="idiv-news" className="col-lg-6">
          <img id="iimg-news" src={mainNews.src} alt="Main sports news" />
          <label className="clbl-time">{mainNews.time}</label>
          <div className="ch5-main-news">{mainNews.title}</div>
          <p>{mainNews.description}</p>
      </div>
    );
  }
}

/* Author: Amr Saeed */