/* author: Ahmed Mohamed Ahmed */
import $ from "jquery"

$(document).ready(function(){

    $("#idiv-videos-carousel").on("slid.bs.carousel", function() {
        closeVideo();
    });

    // for every slide in carousel, copy the next slide's item in the slide
    $('#idiv-videos-carousel.carousel .item').each(function(){
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

        // change size of middle item in each slide
        $(this).children(":nth-child(2)").removeClass("col-xs-3");
        $(this).children(":nth-child(2)").addClass("col-xs-6");
        $(this).children(":nth-child(3)").removeClass("col-xs-6");
        $(this).children(":nth-child(3)").addClass("col-xs-3");
    });

    // show video and hide its cover
    $(".fa-play-circle").click(function(){
        $(".item.active .cdiv-video-carousel-item:nth-child(2) .cimg-video-cover").hide();
        $(".item.active .cdiv-video-carousel-item:nth-child(2) .cdiv-video-caption").hide();
        $(".item.active .cdiv-video-carousel-item:nth-child(2) video").show();
    });

});

/**
 *  when move to another video slide :
 *  hide video if still visible then show its cover again
 *  pause video if it is still play
 */
function closeVideo(){
    // hide video if still visible and show cover again_
    if($(".item.active .cdiv-video-carousel-item:nth-child(2) video").is(':visible')){
        $(".item.active .cdiv-video-carousel-item:nth-child(2) .cimg-video-cover").show();
        $(".item.active .cdiv-video-carousel-item:nth-child(2) .cdiv-video-caption").show();
        $(".item.active .cdiv-video-carousel-item:nth-child(2) video").hide();
    }

    // pause video
    $("video").trigger("pause");
}