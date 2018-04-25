import React from "react"

export const Links = (props) => {
    return (
        <section className={props.className}>
            <div className="cdiv-link-title">Link</div>
            <div className="cdiv-link-text">
                <a href={props.newsLinks.site}>{props.newsLinks.site}</a>
            </div>
            <div className="cdiv-print-title">Print</div>
            <button className="cbtn-print-text" onClick={window.print}>Print this screen</button>
            <div className="cdiv-social">
                <a href={props.newsLinks.facebook}>
                    <i className="fa fa-facebook-f" />
                </a>
                <a href={props.newsLinks.twitter}>
                    <i className="fa fa-twitter" />
                </a>
                <a href={props.newsLinks.instagram}>
                    <i className="fa fa-instagram" />
                </a>
                <a href={props.newsLinks.google}>
                    <i className="fa fa-google-plus" />
                </a>
                <a href={props.newsLinks.youtube}>
                    <i className="fa fa-youtube" />
                </a>
            </div>
        </section>
    );
}