import React from "react"
import { NewsCard } from "./NewsCard"

export const MoreNews = (props)=>{
    var moreNews = require("./../fake/moreNews.json");
    return (
        moreNews.map((news) => <NewsCard key={news.id} news={news} />)
    );

}