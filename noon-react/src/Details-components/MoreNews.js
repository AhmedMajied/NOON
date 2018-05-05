import React from "react"
import { NewsCard } from "./../NewsCard/News-Card.js"

export const MoreNews = (props)=>{
    var moreNews = require("./../fake-api/moreNews.json");
    return (
        moreNews.data.slice(0,3).map((news) => <NewsCard key={news.id} news={news} hasSocialLinks={true} hasMoreDetail={true} descriptionLineCount={0} hasPublishTime={true}/>)
    );

}