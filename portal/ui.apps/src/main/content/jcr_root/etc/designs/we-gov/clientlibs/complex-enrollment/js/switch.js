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
$(function(){

    var count =0;
    var count1=0;
    $('body').on('click', '.fancy_radio', function () {
            var rb = $(this);
            rbGp = rb.parents('.guideRadioButtonGroupItems');
    
            if (rbGp.find("input[value=1]").length == 0) {
              rbGp.removeClass('switch_fancy_radio');
            } else {
              rbGp.addClass('switch_fancy_radio');
            }

    });




    $(window).bind('load',function () {

       $('.fancy_radio').each(function(index, Element) {

            var elm = $(Element);
            if (elm.hasClass('guideRadioButtonGroup')) {

                var rgGp = elm.find('.guideRadioButtonGroupItems');

                if(elm.find('input[value="2"]').length != 0 || elm.find('input[value="1"]').length != 0){
                if (elm.find('input[value="2"]').length == 0){
					rgGp.addClass('switch_fancy_radio');
                }
                if (elm.find('input[value="1"]').length == 0) {
					
                    rgGp.removeClass('switch_fancy_radio');

                }
                }                    

            }
      });
	});



});    

