import $ from "jquery";

$(document).ready(function(){
    /* news videos carousel component JS start */

    // for every slide in carousel, copy the next slide's item in the slide
    $('#idiv-news-videos-carousel.carousel .carousel-item').each(function(){
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

    // show video and hide its cover
    $(".cdiv-carousel-item .fa-play-circle").click(function(){
        $(".carousel-item.active .row .cdiv-carousel-item:nth-child(2) .cimg-carousel-image").hide();
        $(".carousel-item.active .row .cdiv-carousel-item:nth-child(2) .cdiv-carousel-item-caption").hide();
        $(".carousel-item.active .row .cdiv-carousel-item:nth-child(2) video").show();
    });

    $("#idiv-news-videos-carousel .carousel-indicators li").click(function(){
        $("#idiv-news-videos-carousel .carousel-item.active .row .cdiv-carousel-item:nth-child(2) video").trigger("pause");
    });
    /* news videos carousel component JS end */
});