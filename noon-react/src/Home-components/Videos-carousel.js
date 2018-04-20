/* author: Ahmed Mohamed Ahmed */

import React from "react";
import "./../shared-libraries/bootstrap-3.3.7.min.css";
import "./CSS/videos-carousel.css";

import "jquery"
import "./../shared-libraries/bootstrap-3.3.7.min.js";
import "./JS/videos-carousel.js"

export class VideosCarousel extends React.Component{

    constructor(props){
        super();
        this.state = {
            data: props.data
        };
    }

    render(){
        return(
            <div id="idiv-videos-section">

                {/* videos section header */}
                <div id="idiv-videos-header">
                    <div className="row">
                        <div className="col-xs-6">
                            <div id="idiv-label">
                                <label id="ilbl-label">Videos</label>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div id="idiv-videos-all-page">
                                <a href="#" id="ilink-videos-all-page">All page</a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        );
    }
}