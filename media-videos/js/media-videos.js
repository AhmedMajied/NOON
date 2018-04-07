/* Author: Ahmed Hussein */

$(document).ready(function () {
    $('.cspn-show-on-hover').hover(
        /**
         * handles the hover event on videos to show/hide video duration
         */   
        function(){
            $(this).find('.cfgr-show-on-hover').css('display','table-cell');
        },
        function(){
            $(this).find('.cfgr-show-on-hover').css('display','none');
        },
    );
});