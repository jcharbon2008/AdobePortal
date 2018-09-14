/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2014 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by all applicable intellectual property 
* laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/
$( document ).ready(function() {

    var width = $(window).width(); // window width variable for global check
    /*Application Header Ellipsis Functionalities */


    var clientWidth = $('.desc-text').width();
    if($('.desc-text').width()!=null){
    var scrollWidth = $('.desc-text')[0].scrollWidth;
    if(scrollWidth>clientWidth){
        
        $('.more-link').css("display","block");
    }
    else{
        $('.more-link').css("display","none");
    }

    }

// Read more
$('.more-link').on('click', function(){
    $('.popover').popover('hide');
    if(!$(this).hasClass('clicked')){
        $(this).addClass('clicked');
        $('.desc-text').removeClass('ellipsis-text');
        $(this).html('Read Less');
    }else{
        $(this).removeClass('clicked');
        $('.desc-text').addClass('ellipsis-text');
        $(this).html('Read More');
    }
});
// Read more

});
