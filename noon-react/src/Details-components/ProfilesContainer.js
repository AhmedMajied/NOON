/* Author: Andrew Emad Nassif */

import React from "react"
import {Profile} from "./Profile.js"
import ScrollArea from "react-scrollbar"

export const ProfilesContainer = (props) => {
    return (
        <div id="idiv-profiles">
            <div className="cdiv-flag">
                Profiles
            </div>
            <ScrollArea className="cdiv-profile-scroll">
            {props.profiles.map((profile) => <Profile profile={profile} key={profile.id} />)}
            </ScrollArea>
        </div>
    );
}