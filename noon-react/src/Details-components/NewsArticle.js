import React from "react"
export const NewsArticle = (props) => {

    return (
        <article id="iarticle-news-container" className="col-md-8 col-xs-12">
            <img id="iimg-news" src={props.news.imageLink} alt="News" />
            <time className="cnews-time">
                {props.news.time}
            </time>
            <div id="idiv-title" >
                {props.news.title}
            </div>
            <p id="ip-text">
                {props.news.text}
            </p>
        </article>
    );
}