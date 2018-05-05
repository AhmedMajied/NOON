/* Author: Ahmed Hussein Karam */

import React from "react"

import "./News-Card.css"
import {getDurationFromDate} from "./../Details-components/js/time.js"
export const NewsCard = (props) => {
    var paragraphStyle = {
        maxHeight: (1.25 * props.descriptionLineCount) + "rem",
        textAlign: props.alignment
    };

    var alignmentStyle = {
        textAlign: props.alignment
    }

    return (
        <div className="cdiv-card-root">
            <div className="cdiv-news">
                <img className="img img-responsive cimg-news" src={props.news.posterSrc} alt="News" />
                {props.hasPublishTime === true && <time className="cnews-time">{getDurationFromDate(props.news.time)}</time>}
                <h5 style={alignmentStyle}>{props.news.title}</h5>
                {props.descriptionLineCount > 0 && <p style={paragraphStyle}>{props.news.about}</p>}
                
                
                
                {props.hasSocialLinks===true && props.hasMoreDetail === true &&
                <div className="row">
                <div className="cdiv-social col-xl-6 col-lg-12 col-6">
                    <a href={props.news.facebook}>
                        <i className="fa fa-facebook-f" />
                    </a>
                    <a href={props.news.twitter}>
                        <i className="fa fa-twitter" />
                    </a>
                    <a href={props.news.instagram}>
                        <i className="fa fa-instagram" />
                    </a>
                    <a href={props.news.google}>
                        <i className="fa fa-google-plus" />
                    </a>
                    <a href={props.news.youtube}>
                        <i className="fa fa-youtube" />
                    </a>
                </div>
                <div className="cdiv-read-more col-xl-6 col-lg-12 col-6">
                    <a href={"/details/"+props.news.id}>Read More
                        <span className="arrow">→</span>
                    </a>
                </div>
            </div>
                }








                {props.hasSocialLinks === true && !props.hasMoreDetail &&
                    <div className="container">
                        <div className="row">
                            <div className="cdiv-social" style={alignmentStyle}>
                                <a href={props.news.facebook}>
                                    <i className="fa fa-facebook-f" />
                                </a>
                                <a href={props.news.twitter}>
                                    <i className="fa fa-twitter" />
                                </a>
                                <a href={props.news.instagram}>
                                    <i className="fa fa-instagram" />
                                </a>
                                <a href={props.news.google}>
                                    <i className="fa fa-google-plus" />
                                </a>
                                <a href={props.news.youtube}>
                                    <i className="fa fa-youtube" />
                                </a>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}