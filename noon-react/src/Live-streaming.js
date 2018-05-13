import React from 'react';
import "./Live-streaming-components/css/style.css"
import LiveVideo from './Live-streaming-components/LiveVideo'
import NextPrevious from './Live-streaming-components/NextPrevious'

export class LiveStreaming extends React.Component
{
    constructor(props) {
        super(props)
        this.state={
            title:"Live Stream"
        }
    }
    
    render(){
        return(
        <section class="slide-show">
            <div class="container">
                <div className="cdiv-label">
                    <span>{this.state.title}</span>
                </div>
                <LiveVideo />
                <NextPrevious />
            </div>
        </section>
        );
    }
}
