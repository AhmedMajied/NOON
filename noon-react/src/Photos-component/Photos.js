/* Author: Amr Saeed */

import React, {Component} from 'react';
import PhotoContainer from './Photo-container'
import Header from '../Component-header/Header'
import './Photos.css'

export class Photos extends Component{
  constructor(){
    super();
    this.state = require("../fake-api/photosComponent.json");
    this.photos = this.state.data;
  }

  render(){
    let photos = this.photos.map( photo => {
      return (
        <PhotoContainer src={photo.src} title={photo.title} description={photo.description}/>
      );
    });

    return (
      <div id="idiv-photo-nav" className="cdiv-gray-bg">
        <Header title="Photos" navTitle="All Page" type="circle"/>
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
