import React from 'react';
import "./Live-streaming-components/css/bootstrap-4-navbar.css"
import "./Live-streaming-components/css/header.css"
import "./Live-streaming-components/js/bootstrap-4-navbar"
import "./shared-libraries/open-iconic-bootstrap.css"

import UpHeader from "./Header-components/UpHeader";
import { DownHeader } from './Header-components/DownHeader';


export class Header extends React.Component
{
    constructor(props) {
        super(props);
        this.state={
            title:props.title,
        }
    }
    
    render(){
        return(
        <div>
            <UpHeader />
            <DownHeader title={this.state.title} />
        </div>
        );
    }
}
