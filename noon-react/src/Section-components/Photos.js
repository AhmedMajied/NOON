/* Author: Amr Saeed */

import React, {Component} from 'react';
import PhotoContainer from './Photo-container'
import './Section.css'

export class Photos extends Component{
  constructor(){
    super();
    this.state =  {
      data: require("../fake/photos.json")
    }
    this.photos = this.state.data.photos;
  }

  render(){
    let photos = this.photos.map( photo => {
      return (
        <PhotoContainer src={photo.src} title={photo.title} description={photo.description}/>
      );
    });

    return (
      <div className="cdiv-gray-bg">
        <header>
          <div className="cdiv-header-bg">
            <span className="cspan-header">Photos</span>
          </div>
          <a href="#">
            <span className="cspan-all-page">All page</span>
          </a>
        </header>
        <div className="container-fluid">
          <div className="row">
            {photos.slice(0, 4)}
          </div>
          <div className="row">
            {photos.slice(4, 8)}
          </div>
        </div>
      </div>
    );
  }
}
