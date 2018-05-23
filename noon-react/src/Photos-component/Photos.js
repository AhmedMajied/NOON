/* Author: Amr Saeed */

import React, {Component} from 'react';
import PhotoContainer from './Photo-container'
import Header from '../Component-header/Header'
import './Photos.css'

export class Photos extends Component{
  constructor(){
    super();
    this.state = {photos: []};
  }

  componentDidMount() {
    /*Call nodejs API*/
    fetch("media/images").then(res => {
        return res.json()
    }).then(JSONRes => {
        this.setState({photos: JSONRes});
    });
  }

  render(){
    let photos = this.state.photos.slice(0,this.props.limit).map( photo => {
      return (
        <PhotoContainer key={photo._id} src={photo.source} title={photo.publishTime} description={photo.captionText}/>
      );
    });

    return (
      <div id="idiv-photo-nav" className="cdiv-gray-bg">
        <Header title="Photos" navTitle="All Page" moreLink="media" ype="circle"/>
        <div className="container-fluid">
          <div className="row">
            {photos}
          </div>
        </div>
      </div>
    );
  }
}
