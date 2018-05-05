/* Author: Andrew Emad Nassif */

import React from "react"
import {Profile} from "./Profile.js"
import ScrollArea from "react-scrollbar"

export const ProfilesSection = () => {
    var profiles = require("./../fake-api/profiles.json");
    return (
        <div id="idiv-profiles">
            <div className="cdiv-flag">
                Profiles
            </div>
            <ScrollArea className="cdiv-profile-scroll">
            {profiles.data.map((profile) => <Profile profile={profile} key={profile.id} />)}
            </ScrollArea>
        </div>
    );
}