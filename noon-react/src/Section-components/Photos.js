import React, {Component} from 'react';
import PhotoContainer from './Photo-container'
import './Section.css'

export class Photos extends Component{

  render(){
    let photos = this.props.data.photos.map( photo => {
      return (
        <PhotoContainer src={photo.src} title={photo.title} description={photo.description}/>
      );
    });

    return (
      <div className="cdiv-gray-bg">
        <div className="cdiv-header-bg">
          <span className="cspan-header">Photos</span>
        </div>
        <a href="#">
          <span className="cspan-all-page">All page</span>
        </a>
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
