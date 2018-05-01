import React, {Component} from 'react';
import './Section.css'

export default class PhotoContainer extends Component{
  render(){
      return (
        <div className="col-md-3 cdiv-photo-container">
          <img className="cimg-photo" src={this.props.src}/>
          <div className="cdiv-photo-text">
            <div className="cdiv-photo-title">
              {this.props.title}
            </div>
            <div className="cdiv-photo-description">
              {this.props.description}
            </div>
          </div>
        </div>
      );
  }
}
