import React, { Component } from 'react'

import DownHeaderSub from "./DownHeader-c/DownHeaderSub"
export class DownHeader extends Component {
    constructor(props) {
        super(props);
        this.state={
            title:props.title,
            categories:[
                {title:"Sports", categories:[
                    {title:"Football",action:"#",sub:true},
                    {title:"Basketball",action:"/#idiv-bdy",sub:false},
                    {title:"Swmming",action:"/#idiv-bdy",sub:false},
                ]},
                {title:"opinion",categories:[
                    {title:"user",action:"/#idiv-opinion-nav",sub:false}
                ]},
                {title:"Images",categories:[
                    {title:"Nature",action:"/#idiv-photo-nav",sub:false}
                ]},
                {title:"Videos",categories:[
                    {title:"Animation",action:"/#idiv-videos-section",sub:false}
                ]},
                {title:"Magazine",categories:[
                    {title:"Manga",action:"/#idiv-opinion-nav",sub:false}
                ]},
            ]
        }
    }
  render() {
      let navBar = this.state.categories.map((category) => {
          return(
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {category.title} <i className="fa fa-chevron-down"></i>
            </a>
                <DownHeaderSub categories= { category.categories}/>
        </li>
          );
      });
    return (
        <header className="cheader-bottom-header">
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="/">Home</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse fl-right" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    {navBar}
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fa fa-shopping-bag"></i> Shop</a>
                        </li>
                        <li className="nav-item cli-active-cust">
                            <a className="nav-link" href="/Live-streaming"><span className="oi oi-audio"></span> Live Stream</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    </header>
    )
  }
}

export default DownHeader
