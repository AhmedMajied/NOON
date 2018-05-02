import React, {Component} from 'react';
import MainNewsCart from './Main-news-cart'
import RelatedNewsCart from './Related-news-cart'
import './Section.css'

export class Sports extends Component{
  render(){
    let mainNewsCart = this.props.data.mainNewsCart;
    let relatedNewsCarts = this.props.data.relatedNewsCarts.map(cart => {
      return (
        <RelatedNewsCart relatedNews={cart}/>
      );
    });

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
                  <MainNewsCart mainNews={mainNewsCart}/>
                  <div class="col-lg-3 col-md-6 cdiv-related-news-col">
                    {relatedNewsCarts.slice(0, 2)}
                  </div>
                  <div class="col-lg-3 col-md-6 cdiv-related-news-col">
                    {relatedNewsCarts.slice(2, 4)}
                  </div>
              </div>
          </div>
      </div>
    );
  }
}
