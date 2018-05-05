/* Author: Amr Saeed */

import React from 'react';
import {VideosCarousel} from "./Home-components/Videos-carousel"
import {Photos} from "./Photos-component/Photos"
import {Sports} from "./Sports-component/Sports"

export class Section extends React.Component
{

    render(){
        

        return(
            <div>
                <Sports sportName="football"/>
                <Photos/>
            
            </div>
        );
    }
}
