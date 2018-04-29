/* author : Mariam Ashraf */
import React from "react"
import "./css/formStyle.css"
import "./js/formValidation"
export const Form =(props)=>
{
    /**get backGround-image from props and set it into style variable */
    const style={ 
        backgroundImage: 'url('+props.formImage.image+')'
    }
    return(
        /**Start The second row in contact us page */
        <div className="row contactus_row2"style={style}>
            {/**Start Image  */}
            <div id="idiv-img"className="col-xs-6 pull-right"></div>
            {/**End Image  */}
            {/**Start Div Form */}
            <div id="idiv-form-write-message" className="col-xs-6">
                {/**Start form */}
                <form action="#" method="post" onSubmit="return false;">
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
                {/**End Form */}
                {/**Start Purple Div behind form */}
                <div id="idiv-behind-write-message"></div>
                {/**End Purple Div behind form */}
            </div>
            {/**Start Form Div*/}
        </div>
         /**End The second row in contact us page */
    );
}