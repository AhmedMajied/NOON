$(document).ready(function () {
    $('.cspn-show-on-hover').hover(
        function(){
            $(this).find('.cfgr-show-on-hover').css('display','table-cell');
        },
        function(){
            $(this).find('.cfgr-show-on-hover').css('display','none');
        },
    );
});