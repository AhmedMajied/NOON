import React from 'react';

import "./shared-libraries/bootstrap-3.3.7.min.css";
import "./shared-libraries/bootstrap-3.3.7.min.js";
import "./About-us-components/css/generalStyle.css";
import {About} from "./About-us-components/About";
import {NOON} from "./About-us-components/NOON";
import {Photo} from "./About-us-components/Photo";
import { Logo } from './About-us-components/Logo';
import { Vision } from './About-us-components/Vision';
import { PhotoCopy } from './About-us-components/PhotoCopy';
import { Mission } from './About-us-components/Mission';
import { LogoCopy } from './About-us-components/LogoCopy';
export class AboutUs extends React.Component
{
    state={
        AboutNoon:{
            content:'عن نون',
        },
        noon:{
            title:'نون',
            content:'عهٌدجديٌد،دا اً ُجملةتتك ررع مسامعنامن القادة   كل ا جا ت عندما يتم انتخابهم أو تأييدهم أو اعت ئهم  ناصب التوجيه والتعديلوالفكروالتأث ..جميلٌةهذهالعبارة فهي تبعث   نفس ا تلقي ا يجابية والتقدم وا مــل والطموح وأيضاً السعادة حسب الدراسات الحديثة.عهٌدجديٌد،دا اً ُجملةتتك ررع مسامعنامن القادة   كل ا جا ت عندما يتم انتخابهم أو تأييدهم أو اعت ئهم  ناصب التوجيه والتعديلوالفكروالتأث ..جميلٌةهذهالعبارة فهي تبعث   نفس ا تلقي ا يجابية والتقدم وا مــل والطموح وأيضاً السعادةحسب الدراسات الحديثة'
        },
        photo:{
            image:'./images/Gathering.png'
        },
        logo:{
            image:'./images/logo.png'
        },
        vision:{
            title:'رؤيتنا',
            content:'عهٌدجديٌد،دا اً ُجملةتتك ررع مسامعنامن القادة   كل ا جا ت عندما يتم انتخابهم أو تأييدهم أو اعت ئهم  ناصب التوجيه والتعديلوالفكروالتأث ..جميلٌةهذهالعبارة فهي تبعث   نفس ا تلقي ا يجابية والتقدم وا مــل والطموح وأيضاً السعادة حسب الدراسات الحديثة. عهٌدجديٌد،دا اً ُجملةتتك ررع مسامعنامن القادة   كل ا جا ت عندما يتم انتخابهم أو تأييدهم أو اعت ئهم  ناصب التوجيه والتعديلوالفكروالتأث ..جميلٌةهذهالعبارة فهي تبعث   نفس ا تلقي ا يجابية والتقدم وا مــل والطموح وأيضاً السعادة حسب الدراسات الحديثة. عهٌدجديٌد،دا اً ُجملةتتك ررع مسامعنامن القادة   كل ا جا ت عندما يتم انتخابهم أو تأييدهم أو اعت ئهم  ناصب التوجيه والتعديلوالفكروالتأث ..جميلٌةهذهالعبارة فهي تبعث   نفس ا تلقي ا يجابية والتقدم وا مــل والطموح وأيضاً السعادة حسب الدراسات الحديثة. عهٌدجديٌد،دا اً ُجملةتتك ررع مسامعنامن القادة   كل ا جا ت عندما يتم انتخابهم أو تأييدهم أو اعت ئهم  ناصب التوجيه والتعديلوالفكروالتأث ..جميلٌةهذهالعبارة فهي تبعث   نفس ا تلقي ا يجابية والتقدم وا مــل والطموح وأيضاً السعادة حسب الدراسات الحديثة.'
            ,image:'./images/Laundry.png'
        },
        photoCopy:{
            image:'./images/Gathering.png'
        },
        mission:{
            title:'رسالتنا',
            content:'عهٌدجديٌد،دا اً ُجملةتتك ررع مسامعنامن القادة   كل ا جا ت عندما يتم انتخابهم أو تأييدهم أو اعت ئهم  ناصب التوجيه والتعديلوالفكروالتأث ..جميلٌةهذهالعبارة فهي تبعث   نفس ا تلقي ا يجابية والتقدم وا مــل والطموح وأيضاً السعادة عهٌدجديٌد،دا اً ُجملةتتك ررع مسامعنامن القادة   كل ا جا ت عندما يتم انتخابهم أو تأييدهم أو اعت ئهم  ناصب التوجيه والتعديلوالفكروالتأث ..جميلٌةهذهالعبارة فهي تبعث   نفس ا تلقي ا يجابية والتقدم وا مــل والطموح وأيضاً السعادة عهٌدجديٌد،دا اً ُجملةتتك ررع مسامعنامن القادة   كل ا جا ت عندما يتم انتخابهم أو تأييدهم أو اعت ئهم  ناصب التوجيه والتعديلوالفكروالتأث ..جميلٌةهذهالعبارة فهي تبعث   نفس ا تلقي ا يجابية والتقدم وا مــل والطموح وأيضاً السعادة عهٌدجديٌد،دا اً ُجملةتتك ررع مسامعنامن القادة   كل ا جا ت عندما يتم انتخابهم أو تأييدهم أو اعت ئهم  ناصب التوجيه والتعديلوالفكروالتأث ..جميلٌةهذهالعبارة فهي تبعث   نفس ا تلقي ا يجابية والتقدم وا مــل والطموح وأيضاً السعادة.'
        },
        logoCopy:{
            image:'./images/whiteLogo.png'
        }
    }
    render(){
        return(
            <div className="container">
                <div className="row aboutus_row1">                    
                  <About aboutNoon={this.state.AboutNoon} />
                  <NOON noon={this.state.noon}/>
                  <Photo photo={this.state.photo}/>
                  <Logo logo={this.state.logo}/>
                </div>
                <Vision vision={this.state.vision}/>
                <div className="row aboutus_row3">
                    <PhotoCopy photoCopy={this.state.photoCopy}/>
                    <Mission mission={this.state.mission}/>
                    <LogoCopy logoCopy={this.state.logoCopy}/>
                </div>
            </div>
        );
    }
}
