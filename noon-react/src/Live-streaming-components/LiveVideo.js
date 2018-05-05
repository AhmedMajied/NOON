import React, { Component } from 'react'

import "./js/script"
export class LiveVideo extends Component {
  render() {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
       
            {/* *******************************
                        Amr Saeed
                 Live stream video html
            *******************************
          --> */}
          <div class="carousel-item active">
              <video id="ivideo-lst" class="d-block w-100" poster="LiveStream-images/slider/video-1.png">
                <source src="./videos/1.mp4"/>
              </video>
              <button id="ibutton-play">
              </button>
              <div id="idiv-lst-controls">
                <div id="idiv-time-bar">
                  <div id="idiv-time-buf-bar"></div>
                  <input id="iinput-time-slider" class="cinput-slider" type="range" min="0" max="100" value="0" step="1"/>
                  <div id="idiv-time-prog-bar"></div>
                  <span id="ispan-current-time">00:00</span>
                </div>
                <div id="idiv-volume-bar">
                  <button id="ibutton-mute"></button>
                  <input id="iinput-volume-slider" class="cinput-slider" type="range" min="0" max="100" value="100" step="1"/>
                  <div id="idiv-volume-prog-bar"></div>
                </div>
                <button id="ibutton-full-screen"></button>
                <button id="ibutton-options"></button>
              </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span> Previous Stream
            <span class="sr-only">Previous</span>
        </a>
        <span class="line"></span>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            Next Stream <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    )
  }
}

export default LiveVideo
