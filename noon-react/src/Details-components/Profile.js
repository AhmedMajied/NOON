/* Author: Andrew Emad Nassif */

import React from "react"

export const Profile = (props) => {
    return (
        <div className="cdiv-profile">
            <img src={props.profile.posterSrc} alt="User" />
            <div className="cdiv-profile-name">{props.profile.title}</div>
            <div className="cdiv-profile-text">{props.profile.about}</div>
            
            <div className="cdiv-social">
                <a href={props.profile.facebook}>
                    <i className="fa fa-facebook-f" />
                </a>
                <a href={props.profile.twitter}>
                    <i className="fa fa-twitter" />
                </a>
                <a href={props.profile.instagram}>
                    <i className="fa fa-instagram" />
                </a>
                <a href={props.profile.google}>
                    <i className="fa fa-google-plus" />
                </a>
                <a href={props.profile.youtube}>
                    <i className="fa fa-youtube" />
                </a>
            </div>

        </div>

    );
}