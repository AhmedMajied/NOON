/* Author: Ahmed Hussein */

$(document).ready(function () {
    $('.cspn-show-on-hover').hover(
        /**
         * handles the hover event on images to show/hide image date
         */
        function(){
            $(this).find('.cfgr-show-on-hover').css('display','table-cell');
        },
        function(){
            $(this).find('.cfgr-show-on-hover').css('display','none');
        },
    );
});