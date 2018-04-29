/* author : Mariam Ashraf */
import $ from "jquery"
/* @description. this function is used when user click on button submit to sent his message
 *                and sent his message by ajax then alert user by action
*/
$(function () {
    $(".cbtn-send").click(function () {
        var usrName = $(".cinput-name").val();/* userName String*/
        var usrMail = $(".cinput-email").val();/* userMail String*/
        var message=$(".ctextarea-message").val();/* Message String*/
        if(usrName !== "" && usrMail !== "" && message !== "")
        {
                alert(1);
                $.ajax({
                    type: 'POST',
                    url: '',/* Here Url To sent Values*/
                    data: {name:usrName, mail: usrMail , message:message},/* data to be sent*/
                    success: function (data) {
                            alert(data);/* if sent will return sent sucessfully to user else it will alert him that message failed to sent*/
                    },
                    error: function (msg)
                    {
                        alert("Sorry Fail to sent Your Message");/*if error happens alert user with error message*/
                    }
                });
        }
        else
        {
                if(usrName===""){   /* if name is empty display error message for 3 seconds*/
                        $(".cspan-error-name").text("Required");
                        $('.cspan-error-name').fadeIn('fast').delay(3000).fadeOut('slow');
                }
                if(usrMail===""){/*if email is empty display error message for 3 seconds*/
                        $(".cspan-error-email").text("Required");
                        $('.cspan-error-email').fadeIn('fast').delay(3000).fadeOut('slow');
                }
                if(message===""){/*if message is empty display error message for 3 seconds*/
                        $(".cspan-error-message").text("Required");
                        $('.cspan-error-message').fadeIn('fast').delay(3000).fadeOut('slow');
                }
             

        }
    });
});