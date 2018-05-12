import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import {Header} from "./Header"
import {Footer} from "./Footer"
import {Home} from "./Home"
import {AboutUs} from "./About-us"
import {ContactUs} from "./Contact-us"
import {Details} from "./Details"
import {LiveStreaming} from "./Live-streaming"
import {Media} from "./Media"
import {Section} from "./Section"



class App extends React.Component
{

    render(){
        return(
            <div>
                <Header title="Live Stream"/>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/About-us" component={AboutUs} />
                        <Route path="/Contact-us" component={ContactUs} />
                        <Route exact path="/details/:id" render={(props)=>{
                            return(<Details id={props.match.params.id}/>);
                        }} />
                        <Route path="/Live-streaming" component={LiveStreaming} />
                        <Route path="/Media" component={Media} />
                        <Route path="/Section" component={Section} />
                    </Switch>
                </Router>

                <Footer/>
            </div>
        );
    }
}

render(<App/> , window.document.getElementById("app"));
