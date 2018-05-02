import React, {Component} from 'react';
import './Section.css'

export default class PhotoContainer extends Component{
  render(){
    let props = this.props;
    return (
      <div className="col-md-3 cdiv-photo-container">
        <img className="cimg-photo" src={props.src}/>
        <div className="cdiv-photo-text">
          <div className="cdiv-photo-title">
            {props.title}
          </div>
          <div className="cdiv-photo-description">
            {props.description}
          </div>
        </div>
      </div>
    );
  }
}
