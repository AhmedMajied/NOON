/* Author: Andrew Emad Nassif */

import React from 'react';
import { NewsArticle } from "./Details-components/NewsArticle"
import { Links } from "./Details-components/Links"
import { MoreNews } from "./Details-components/MoreNews"
import { CommentsSection } from "./Details-components/CommentsSection"
import { NewsSection } from "./NewsSection/News-Section"
import { Advertisement } from "./Details-components/Advertisement"
import { ProfilesSection } from './Details-components/ProfilesSection';
import "./Details-components/css/details.css"
import "./Details-components/css/scroll.css"

export const Details = (props) => {
    var news = require("./fake-api/news.json");
    news.id = props.newsId;
    news.links.site = window.location.href;
    var relatedTopicsFlagStyle= {
        borderBottomLeftRadius: "50%",
        borderBottomRightRadius: "50%",
        backgroundColor: "#6b478f",
        width: "85px",
        height: "81px",
        padding: "20px",
        paddingTop: "34px",
        fontSize: "14px",
        fontFamily: "Bahij TheSansArabic",
        lineHeight:"1.2",
        textAlign: "center",
        float: "left"
        
    }
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
                        <CommentsSection comments={news.comments} />
                    </div>
                    <aside className="col-lg-3 col-sm-5 col-12">
                        <Advertisement />
                        <ProfilesSection />
                    </aside>
                </div>
            </main>
            {/* News Section Here ! */}
            <NewsSection flagBorderStyle={relatedTopicsFlagStyle} newsSrc="moreNews" withPublishTimes={true} withSocialLinks={true} title="Related Topics" withMoreDetails={true}/>
        </div>
    );
}
