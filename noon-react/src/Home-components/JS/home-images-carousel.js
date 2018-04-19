/* author: Ahmed Mohamed Ahmed */
import $ from "jquery"

$(document).ready(function(){

    // for every slide in carousel, copy the next slide's item in the slide
    $('.carousel .item').each(function(){
        var next = $(this).next();
        
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        
        next.children(':first-child').clone().appendTo($(this));
        
        if (next.next().length>0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
});

