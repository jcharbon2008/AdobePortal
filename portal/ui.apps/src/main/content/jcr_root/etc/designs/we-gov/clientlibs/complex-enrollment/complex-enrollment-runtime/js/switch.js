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

 /* To be Removed Form Here and adding to runtime lib for switch */
	window.guideBridge.on('elementValueChanged', function(event, data)
	  {
          	var id = data.target.id;
          	var rb = $('#'+id);

            rbGp = rb.find('.guideRadioButtonGroupItems');
    
            if (data.newText == 2) {
              rbGp.removeClass('switch_fancy_radio');
            } else {
              rbGp.addClass('switch_fancy_radio');
            }

    });
});    
