import React, {Component} from 'react';
import './Section.css'

export default class MainNewsCart extends Component {
  render(){
    let props = this.props;
    return (
      <div id="idiv-news" class="col-lg-6">
          <img id="iimg-news" src={props.src} alt="Main sports news" />
          <label class="clbl-time">{props.time}</label>
          <h5>{props.title}</h5>
          <p>{props.description}</p>
      </div>
    );
  }
}
