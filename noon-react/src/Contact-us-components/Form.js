import React from "react"
import "./css/form.css"
import "./js/formValidation"
export const Form =(props)=>
{
    function getFalse()
    {
        return false;
    }
    const style={ 
        backgroundImage: 'url('+props.formImage.image+')'
    }
    return(
        <div className="row contactus_row2"style={style}>
            <div id="idiv-img"className="col-xs-6 pull-right"></div>
            <div id="idiv-form-write-message" className="col-xs-6">
                <form action="#" method="post" onSubmit={getFalse()}>
                    <div className="idiv-write-message-info">
                        <div className="cdiv-name">الإسم</div>
                        <span className="cspan-error-name"></span>
                        <input type="text" className="cinput-name"/>
                    </div>
                    <div className="idiv-write-message-info">
                        <div className="cdiv-email">البريد الإلكتروني</div>
                        <span className="cspan-error-email"></span>
                        <input type="email" className="cinput-email"/>
                    </div>
                    <div className="idiv-write-message-info">
                        <div className="cdiv-message">الرسالة</div>
                        <span className="cspan-error-message"></span>
                        <textarea className="ctextarea-message"placeholder="أكتب رسالتك هنا......."></textarea>
                    </div>
                
                    <button type="button" className="btn btn-default cbtn-send">إرسال</button>
                </form>
                <div id="idiv-behind-write-message"></div>
            </div>
        </div>
    );
}