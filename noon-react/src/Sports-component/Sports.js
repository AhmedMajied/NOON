/* Author: Amr Saeed */

import React, {Component} from 'react';
import MainNewsCart from './Main-news-cart'
import RelatedNewsCart from './Related-news-cart'
import Header from '../Component-header/Header'
import './Sports.css'

export class Sports extends Component{
  constructor(){
    super();
    this.state = require("../fake-api/sportsComponent.json");
    this.mainNewsCart = this.state.data.mainNewsCart;
    this.relatedNewsCarts = this.state.data.relatedNewsCarts;
  }

  render(){
    let sportId = this.props.id;
    let sportName = this.props.sportName;
    let mainNewsCart = this.mainNewsCart;
    let relatedNewsCarts = this.relatedNewsCarts.map(cart => {
      return (
        <RelatedNewsCart key={cart.id} relatedNews={cart}/>
      );
    });

    return (
      <div id={sportId}>
      <div id="idiv-component-root" className="container-fluid">
        <Header title={sportName} navTitle="All Page" type="circle"/>
          <div id="idiv-bdy" className="container">
              <div className="row">
                  <MainNewsCart mainNews={mainNewsCart}/>
                  <div className="col-lg-3 col-md-6 cdiv-related-news-col">
                    {relatedNewsCarts.slice(0, 2)}
                  </div>
                  <div className="col-lg-3 col-md-6 cdiv-related-news-col">
                    {relatedNewsCarts.slice(2, 4)}
                  </div>
              </div>
          </div>
      </div>
      </div>
    );
  }
}
