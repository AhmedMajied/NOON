/* Author: Andrew Emad Nassif */

import React from "react"
import { NewsCard } from "./NewsCard"
export const NewsSection = (props) => {
    return (
        <section className="container-fluid" id="isection-related-topics">
            <div className="container">
                <header id="iheader-related-topics">
                    <div className="cdiv-flag">
                        {props.title}
                    </div>
                    <div className="cdiv-more">
                        <a href={props.more}>More</a>
                    </div>
                </header>
                <div className="row">
                    {
                        props.news.news.map((news) => (
                            <div key={news.id} className="col-lg-3 col-md-6 col-12">
                                <NewsCard news={news} />
                            </div>
                            )
                        )
                    }
                </div>
            </div>
        </section>
    );
}