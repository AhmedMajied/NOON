/* Author: Amr Saeed */

import React, {Component} from 'react';
import './Sports.css'

export default class RelatedNewsCart extends Component{
  render(){
    let relatedNews = this.props.relatedNews;
    return (
      <div className="cdiv-related-news-cart">
          <img className="cimg-related-news" src={relatedNews.src} alt="News" />
          <label className="clbl-time">{relatedNews.time}</label>
          <div className="cdiv-related-news-title">
              {relatedNews.title}
          </div>
          <a className="clink-read-more" href="#">Read More<span className="arrow"> &rarr;</span></a>
          <div className="cdiv-social">
              <a href={relatedNews.social.facebook}><i className="fa fa-facebook-f"></i></a>
              <a href={relatedNews.social.twitter}><i className="fa fa-twitter"></i></a>
              <a href={relatedNews.social.instagram}><i className="fa fa-instagram"></i></a>
              <a href={relatedNews.social.google}><i className="fa fa-google-plus"></i></a>
              <a href={relatedNews.social.youtube}><i className="fa fa-youtube"></i></a>
          </div>
      </div>
    );
  }
}
