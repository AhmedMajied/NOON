import React from "react"

export const NewsBreif = (props) => {
    return (
        <div className="cdiv-news">
            <img className="cimg-news" src={props.news.imageLink} alt="News" />
            <time className="cnews-time">{props.news.time}</time>
            <div className="cdiv-news-title">{props.news.title}</div>
            <div className="row">
                <div className="cdiv-social col-xl-6 col-lg-12 col-6">
                    <a href={props.news.links.facebook}>
                        <i className="fa fa-facebook-f" />
                    </a>
                    <a href={props.news.links.twitter}>
                        <i className="fa fa-twitter" />
                    </a>
                    <a href={props.news.links.instagram}>
                        <i className="fa fa-instagram" />
                    </a>
                    <a href={props.news.links.google}>
                        <i className="fa fa-google-plus" />
                    </a>
                    <a href={props.news.links.youtube}>
                        <i className="fa fa-youtube" />
                    </a>
                </div>
                <div className="cdiv-read-more col-xl-6 col-lg-12 col-6">
                    <a href={"/details/"+props.news.id}>Read More
                        <span className="arrow">→</span>
                    </a>
                </div>
            </div>
        </div>
    );
}