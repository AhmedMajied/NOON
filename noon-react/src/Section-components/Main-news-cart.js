/* Author: Amr Saeed */

import React, {Component} from 'react';
import './Section.css'

export default class MainNewsCart extends Component {
  render(){
    let mainNews = this.props.mainNews;
    return (
      <div id="idiv-news" class="col-lg-6">
          <img id="iimg-news" src={mainNews.src} alt="Main sports news" />
          <label class="clbl-time">{mainNews.time}</label>
          <h5>{mainNews.title}</h5>
          <p>{mainNews.description}</p>
      </div>
    );
  }
}
