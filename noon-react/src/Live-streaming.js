import React from 'react';
import "./Live-streaming-components/css/style.css"
import LiveVideo from './Live-streaming-components/LiveVideo'
import NextPrevious from './Live-streaming-components/NextPrevious'

export class LiveStreaming extends React.Component
{
    render(){
        return(
        <section class="slide-show">
            <div class="container">
                <LiveVideo />
                <NextPrevious />
            </div>
        </section>
        );
    }
}
