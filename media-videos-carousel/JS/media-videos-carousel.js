$(document).ready(function(){
    
    // set carousel interval
    $('.carousel').carousel({
        interval: 50000
    });

    $("#idiv-media-videos-carousel").on("slid.bs.carousel", function() { 
        hideVideo();
    });

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

    // play video
    $(".fa-play-circle").click(function(){
        $(".item.active .cdiv-media-video-item:nth-child(2) .cimg-media-video-cover").hide();
        $(".item.active .cdiv-media-video-item:nth-child(2) .cdiv-media-video-caption").hide();
        $(".item.active .cdiv-media-video-item:nth-child(2) video").show();
    });

});

function hideVideo(){
    if($(".item.active .cdiv-media-video-item:nth-child(2) video").is(':visible')){
        $(".item.active .cdiv-media-video-item:nth-child(2) .cimg-media-video-cover").show();
        $(".item.active .cdiv-media-video-item:nth-child(2) .cdiv-media-video-caption").show();
        $(".item.active .cdiv-media-video-item:nth-child(2) video").hide();
    }
}