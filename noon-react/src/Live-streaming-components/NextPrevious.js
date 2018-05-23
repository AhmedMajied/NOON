import React, { Component } from 'react'

export class NextPrevious extends Component {
  render() {
    return (
        <div class="options">
        <div class="row">
            <div class="col-sm-6">
                <div class="left">
                    <img class="image-video d-block w-100" src="./images/LiveStream-images/slider/next.jpg" alt="First slide"/>
                    <div class="controller">
                        <div class="square">
                            <p class="sq-text">Previous</p>
                        </div>
                        <div class="rectangle">
                            <p class="rec-text">Lorem Ipsum is simply dummy text of the printing and</p>
                            <i class="rec-icon fa fa-play-circle"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="right">
                    <img class="image-video d-block w-100" src="./images/LiveStream-images/slider/next.jpg" alt="First slide"/>
                    <div class="controller">
                        <div class="square">
                            <p class="sq-text">Next</p>
                        </div>
                        <div class="rectangle">
                            <p class="rec-text">Lorem Ipsum is simply dummy text of the printing and</p>
                            <i class="rec-icon fa fa-play-circle"></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
  }
}

export default NextPrevious
