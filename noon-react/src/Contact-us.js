import React from 'react';
import "./Contact-us-components/css/generalContactUsStyle.css";
import { CallUs } from './Contact-us-components/CallUs';
import { Form } from './Contact-us-components/Form';
import { OurOffices } from './Contact-us-components/OurOffices';
import { LocationOnMap } from './Contact-us-components/LocationOnMap';
import { CountrySelect } from './Contact-us-components/CountrySelect';
import { PostAddress } from './Contact-us-components/PostAddress';
import { LocationAddress } from './Contact-us-components/LocationAddress';
import { Map } from './Contact-us-components/Map';

export const ContactUs =(props)=>
{
    props={
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
            ],
            id:2
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
        },
        marker:{
            lat:30.0594838 ,
            lng:31.2934839
        }
    }
    
    return(
        <div className="container">
            <div className="row contactus_row1">
                <CallUs callUs={props.callUs}/>
                <PostAddress postAddress={props.postAddress}/>
                <OurOffices OurOffices={props.OurOffices}/>
            </div>
            <Form formImage={props.formImage}/>
            <div className="row contactus_row3">
                <LocationOnMap locationOnMap={props.locationOnMap}/>
                <CountrySelect country={props.country}/>
                <Map marker={props.marker}/>
                <LocationAddress locationAddress={props.locationAddress}/>
            </div>
        </div>
    );
}
