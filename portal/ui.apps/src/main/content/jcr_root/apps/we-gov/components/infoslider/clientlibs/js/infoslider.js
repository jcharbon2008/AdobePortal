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
  
$('.plus-icon').on('click', function(e){
    e.preventDefault();	
    $(this).parent().siblings().find('.field-help').slideUp('500');
    $(this).parent().siblings().find('.plus-icon').removeClass('clicked');		
    $(this).next('.field-help').slideToggle('500', function(){

        if($(this).is(":visible")){
            $(this).prev('.plus-icon').addClass('clicked');
        }else{
            $(this).prev('.plus-icon').removeClass('clicked');
        }
    });
    
});

});

