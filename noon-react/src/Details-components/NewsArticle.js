import React from "react"
import ScrollArea from "react-scrollbar"
import "./css/scroll.css"
export const NewsArticle = (props) => {

    return (
        <article id="iarticle-news-container">
            <img id="iimg-news" src={props.news.imageLink} alt="News" />
            <time className="cnews-time">
                {props.news.time}
            </time>
            <ScrollArea className="cdiv-news-body">
                <div id="idiv-title" >
                    {props.news.title}
                </div>
                <p id="ip-text">
                    {props.news.text}
                </p>
            </ScrollArea>
        </article>
    );
}