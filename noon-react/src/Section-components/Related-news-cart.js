/* Author: Amr Saeed */

import React, {Component} from 'react';
import './Section.css'

export default class RelatedNewsCart extends Component{
  render(){
    let relatedNews = this.props.relatedNews;
    return (
      <div class="cdiv-related-news-cart">
          <img class="cimg-related-news" src={relatedNews.src} alt="News" />
          <label class="clbl-time">{relatedNews.time}</label>
          <div class="cdiv-related-news-title">
              {relatedNews.title}
          </div>
          <a class="clink-read-more" href="#">Read More<span class="arrow"> &rarr;</span></a>
          <div class="cdiv-social">
              <a href={relatedNews.social.facebook}><i class="fa fa-facebook-f"></i></a>
              <a href={relatedNews.social.twitter}><i class="fa fa-twitter"></i></a>
              <a href={relatedNews.social.instagram}><i class="fa fa-instagram"></i></a>
              <a href={relatedNews.social.google}><i class="fa fa-google-plus"></i></a>
              <a href={relatedNews.social.youtube}><i class="fa fa-youtube"></i></a>
          </div>
      </div>
    );
  }
}
