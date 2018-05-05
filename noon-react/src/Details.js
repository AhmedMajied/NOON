/* Author: Andrew Emad Nassif */

import React from 'react';
import { NewsArticle } from "./Details-components/NewsArticle"
import { Links } from "./Details-components/Links"
import { MoreNews } from "./Details-components/MoreNews"
import { CommentsContainer } from "./Details-components/CommentsContainer"
import { NewsSection } from "./Details-components/NewsSection"
import { Advertisement } from "./Details-components/Advertisement"
import { ProfilesContainer } from './Details-components/ProfilesContainer';
import "./Details-components/css/details.css"
import "./Details-components/css/scroll.css"

export const Details = (props) => {
    var news = require("./fake/news.json");
    news.id = props.newsId;
    news.links.site = window.location.href;

    return (
        <div>
            <main id="imain-container" className="container">
                <div className="row">
                    <div className="col-lg-9 col-sm-7 col-12">
                        <div className="row">
                            <div className="col-lg-8 col-12">
                                <NewsArticle news={news.article} />
                            </div>
                            <div id="idiv-more-news" className="col-lg-4 col-12">
                                <Links newsLinks={news.links} />
                                <MoreNews />
                            </div>
                        </div>
                        <CommentsContainer comments={news.comments} />
                    </div>
                    <aside className="col-lg-3 col-sm-5 col-12">
                        <Advertisement />
                        <ProfilesContainer />
                    </aside>
                </div>
            </main>
            {/* News Section Here ! */}
            
        </div>
    );
}
