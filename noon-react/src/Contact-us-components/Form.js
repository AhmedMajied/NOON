import React from "react"
import "./css/form.css"
import "./js/formValidation"
export class Form extends React.Component
{
    constructor(props)
    {
        super();
        this.state={
            image:props.formImage.image
        }
        this.style={ 
            backgroundImage: 'url('+this.state.image+')'
        }
    }
    render()
    {
        return(
            <div className="row row2"style={this.style}>
                <div id="idiv-img"className="col-xs-6 pull-right"></div>
                <div id="idiv-form-write-message" className="col-xs-6">
                    <form action="#" method="post" onsubmit="return false;">
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
}