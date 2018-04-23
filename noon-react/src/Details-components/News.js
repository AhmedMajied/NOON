import React from "react"
export class News extends React.Component{
    constructor(props){
        super();
        this.state = {
            imageLink: "http://images.all-free-download.com/images/graphiclarge/beautiful_flowers_02_hd_picture_166969.jpg",
            
            time: (function(){
                var today = new Date();
                var newsDate = new Date("2017/02/21");
                var diffMs = (today - newsDate); // milliseconds
                var diffMins = Math.round(diffMs / 60000); // minutes
                var diffHrs = Math.floor(diffMins / 60); // hours
                var diffDays = Math.floor(diffHrs / 24); // days
                var diffWeeks = Math.floor(diffDays / 7); // weeks
                var diffMonths = Math.floor(diffDays / 30); // months
                var diffYears = Math.floor(diffDays / 365); // years
                if(diffMins <= 1)
                    return "1 min ago.";
                else if(diffMins <= 59)
                    return diffMins.toString()+" mins ago.";

                    else if(diffHrs <= 1)
                    return "1 hour ago.";

                else if(diffHrs <= 23)
                    return diffHrs.toString()+" hrs ago.";

                    else if(diffDays <= 1)
                    return "1 day ago.";

                else if(diffDays <= 6)
                    return diffDays.toString()+" days ago.";

                else if(diffWeeks <= 1)
                    return "1 week ago.";

                else if(diffWeeks <= 4)
                    return diffWeeks.toString()+" weeks ago.";

                else if(diffMonths <= 1)
                    return "1 month ago.";

                else if(diffMonths <= 11)
                    return diffMonths.toString()+" months ago.";

                else if(diffYears <= 1)
                    return "1 year ago.";

                else
                    return diffYears.toString()+" years ago.";

            })(),
            
            title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
            
            text:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.`
        }
    }
    render(){
        
        return(
            <article id="iarticle-news-container" className="col-md-8 col-xs-12">
                <img id="iimg-news" src={this.state.imageLink} alt="News" />
                <time className="cnews-time">
                    {this.state.time}
                </time>
                <div id="idiv-title" >
                    {this.state.title}
                </div>
                <p id="ip-text">
                    {this.state.text}
                </p>
            </article>
        );
    }
}