import React, {Component} from 'react';
import './Section.css'

export default class RelatedNewsCart extends Component{
  render(){
    let props = this.props;
    return (
      <div class="cdiv-related-news-cart">
          <img class="cimg-related-news" src={props.src} alt="News" />
          <label class="clbl-time">{props.time}</label>
          <div class="cdiv-related-news-title">
              {props.title}
          </div>
          <a class="clink-read-more" href="#">Read More<span class="arrow"> &rarr;</span></a>
          <div class="cdiv-social">
              <a href={props.facebook}><i class="fa fa-facebook-f"></i></a>
              <a href={props.twitter}><i class="fa fa-twitter"></i></a>
              <a href={props.instagram}><i class="fa fa-instagram"></i></a>
              <a href={props.google}><i class="fa fa-google-plus"></i></a>
              <a href={props.youtube}><i class="fa fa-youtube"></i></a>
          </div>
      </div>
    );
  }
}
