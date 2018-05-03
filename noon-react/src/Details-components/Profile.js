/* Author: Andrew Emad Nassif */

import React from "react"

export const Profile = (props) => {
    return (
        <div className="cdiv-profile">
            <img src={props.profile.userPhoto} alt="User" />
            <div className="cdiv-profile-name">{props.profile.userName}</div>
            <div className="cdiv-profile-text">{props.profile.text}</div>
            
            <div className="cdiv-social">
                <a href={props.profile.links.facebook}>
                    <i className="fa fa-facebook-f" />
                </a>
                <a href={props.profile.links.twitter}>
                    <i className="fa fa-twitter" />
                </a>
                <a href={props.profile.links.instagram}>
                    <i className="fa fa-instagram" />
                </a>
                <a href={props.profile.links.google}>
                    <i className="fa fa-google-plus" />
                </a>
                <a href={props.profile.links.youtube}>
                    <i className="fa fa-youtube" />
                </a>
            </div>

        </div>

    );
}