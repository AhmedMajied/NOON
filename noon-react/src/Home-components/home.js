import $ from "jquery"


$(document).ready(function(){

    /* images carousel component JS start */

    // for every slide in carousel, copy the next slide's item in the slide
    $('#idiv-news-carousel.carousel .carousel-item').each(function(){
        var next = $(this).next();

        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').children(':first-child').clone().appendTo($(this).children(':first-child'));

        if (next.next().length>0) {
            next.next().children(':first-child').children(':first-child').clone().appendTo($(this).children(':first-child'));
        } else {
            $(this).siblings(':first').children(':first-child').children(':first-child').clone().appendTo($(this).children(':first-child'));
        }
    });
    /* images carousel component JS end */

    /* videos carousel component JS start */
    $("#idiv-videos-carousel").on("slide.bs.carousel", function() {
        closeVideo();
    });

    // for every slide in carousel, copy the next slide's item in the slide
    $('#idiv-videos-carousel.carousel .carousel-item').each(function(){
        var next = $(this).next();

        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').children(':first-child').clone().appendTo($(this).children(':first-child'));

        if (next.next().length>0) {
            next.next().children(':first-child').children(':first-child').clone().appendTo($(this).children(':first-child'));
        } else {
            $(this).siblings(':first').children(':first-child').children(':first-child').clone().appendTo($(this).children(':first-child'));
        }

        // change size of middle item in each slide
        $(this).children(':first-child').children(':nth-child(2)').removeClass("col-3");
        $(this).children(':first-child').children(':nth-child(2)').addClass("col-6");
        $(this).children(':first-child').children(':nth-child(3)').removeClass("col-6");
        $(this).children(':first-child').children(':nth-child(3)').addClass("col-3");
    });

    // show video and hide its cover
    $(".fa-play-circle").click(function(){
        $(".carousel-item.active .row .cdiv-video-carousel-item:nth-child(2) .cimg-video-cover").hide();
        $(".carousel-item.active .row .cdiv-video-carousel-item:nth-child(2) .cdiv-video-caption").hide();
        $(".carousel-item.active .row .cdiv-video-carousel-item:nth-child(2) video").show();
    });
    /* videos carousel component JS end */

});


/* author: Ahmed Mohamed Ahmed */
/**
 *  when move to another video slide :
 *  hide video if still visible then show its cover again
 *  pause video if it is still play
 */
function closeVideo(){
    // hide video if still visible and show cover again_
    if($(".carousel-item.active .row .cdiv-video-carousel-item:nth-child(2) video").is(':visible')){
        $(".carousel-item.active .row .cdiv-video-carousel-item:nth-child(2) .cimg-video-cover").show();
        $(".carousel-item.active .row .cdiv-video-carousel-item:nth-child(2) .cdiv-video-caption").show();
        $(".carousel-item.active .row .cdiv-video-carousel-item:nth-child(2) video").hide();
    }

    // pause video
    $("video").trigger("pause");
}
