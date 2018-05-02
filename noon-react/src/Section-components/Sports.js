import React, {Component} from 'react';
import MainNewsCart from './Main-news-cart'
import RelatedNewsCart from './Related-news-cart'
import './Section.css'

export class Sports extends Component{
  render(){
    return (
      <div id="idiv-component-root" class="container-fluid">
          <header id="ihdr">
              <span id="ispn-hdr-left">
                  <label id="ilbl-sport-name">Sport name</label>
              </span>
              <span id="ispn-hdr-right">
                  <label id="ilbl-all-page">All page</label>
              </span>
          </header>

          <div id="idiv-bdy" class="container">
              <div class="row">
                  <MainNewsCart src={require('./images/Test.jpg')}
                    title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop"
                    time="1 min. ago"/>
                  <div class="col-lg-3 col-md-6 cdiv-related-news-col">
                    <RelatedNewsCart src={require('./images/Test.jpg')}
                      title="Lorem Ipsum is simply dummy"
                      time="1 min. ago"/>
                    <RelatedNewsCart src={require('./images/Test.jpg')}
                      title="Lorem Ipsum is simply dummy"
                      time="1 min. ago"/>
                  </div>
                  <div class="col-lg-3 col-md-6 cdiv-related-news-col">
                    <RelatedNewsCart src={require('./images/Test.jpg')}
                      title="Lorem Ipsum is simply dummy"
                      time="1 min. ago"/>
                    <RelatedNewsCart src={require('./images/Test.jpg')}
                      title="Lorem Ipsum is simply dummy"
                      time="1 min. ago"/>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}
