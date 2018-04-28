$("html , .modal").niceScroll({
    cursorcolor:"rgb(0, 25, 255)",
    zindex:10000,
    cursorborder:"1px solid #FFF",
    cursoropacitymin:0.2,
    horizrailenabled:false
});

$(".meetings , .scrollableContainer").niceScroll({
    cursorcolor: "rgb(0, 25, 255)",
    zindex: 1,
    cursorborder: "1px solid #FFF",
    cursoropacitymin: 0.2,
    horizrailenabled: false
});

$("*").on("click", function () {
    $("html").getNiceScroll().resize();
    $(".modal").getNiceScroll().resize();
    $(".meetings").getNiceScroll().resize();
    $(".scrollableContainer").getNiceScroll().resize();
});