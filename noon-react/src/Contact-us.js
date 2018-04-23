import React from 'react';
import "jquery"
import "./shared-libraries/bootstrap-3.3.7.min.css";
import "./shared-libraries/bootstrap-3.3.7.min.js";
import "./Contact-us-components/css/generalStyle.css"
import { CallUs } from './Contact-us-components/CallUs';
import { Form } from './Contact-us-components/Form';
import { OurOffices } from './Contact-us-components/OurOffices';
import { LocationOnMap } from './Contact-us-components/LocationOnMap';
import { CountrySelect } from './Contact-us-components/CountrySelect';
import { PostAddress } from './Contact-us-components/PostAddress';
import { LocationAddress } from './Contact-us-components/LocationAddress';
import { Map } from './Contact-us-components/Map';

export class ContactUs extends React.Component
{
    state={
        callUs:{
            content:'إتصل بنا'
        }
        ,
        formImage:{
            image:'./images/Soccer_Lady&Girl.png'
        },
        OurOffices:{
            title:'مكاتبنا',
            offices:
            [
                {name:'البحرين',email:'bahrain.bureau@noonsport.com'},
                {name:'الاردن',email:'jordan.bureau@noonsport.com'},
                {name:'مصر',email:'egypt.bureau@noonsport.com'},
                {name:'تونس',email:'tunisia.bureau@noonsport.com'},
                {name:'فلسطين',email:'palestine.bureau@noonsport.com'},
                {name:'المغرب',email:'morocco.bureau@noonsport.com'},
            ]
        },
        locationOnMap:{
            content:'موقعنا على الخريطة'
        },
        country:{
            countries:[
                'اختر دولتك','مصر','تونس','فلسطين','الامارات'
            ]
        },
        postAddress:{
            title:'العنوان البريدي',
            info:[
                {name:'',value:'مجلة نون'},
                {name:'ص.ب: ',value:'113147'},
                {name:'',value:'الإمارات العربية المتحدة ـ ابوظبي'},
                {name:'البريد الإلكتروني: ',value:'info@noonsport.com'},
                {name:'الهاتف: ',value:'+971 26270007'},
            ]
        },
        locationAddress:{
            title:'البحرين',
            info:[
                {name:'',value:'مجلة نون'},
                {name:'ص.ب: ',value:'113147'},
                {name:'',value:'الإمارات العربية المتحدة ـ ابوظبي'},
                {name:'البريد الإلكتروني: ',value:'info@noonsport.com'},
                {name:'الهاتف: ',value:'+971 26270007'},
            ]
        }
    }
    
    render(){
        return(
            <div className="container">
                <div className="row row1">
                    <CallUs callUs={this.state.callUs}/>
                    <PostAddress postAddress={this.state.postAddress}/>
                    <OurOffices OurOffices={this.state.OurOffices}/>
                </div>
                <Form formImage={this.state.formImage}/>
                <div className="row row3">
                    <LocationOnMap locationOnMap={this.state.locationOnMap}/>
                    <CountrySelect country={this.state.country}/>
                    <Map/>
                    <LocationAddress locationAddress={this.state.locationAddress}/>
                </div>
            </div>
        );
    }
}
