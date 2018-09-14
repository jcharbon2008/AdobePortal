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
$(function () {

    window.guideBridge.on("elementVisibleChanged", function(event, data)
	  {
          if(data.newText==false){
          if(data.target.className=='guidePanel'){
			  reset(data.target)
          }

          reset =function(target){
			_.each(target._children, function (childNode) {
                if(childNode.className=='guidePanel' || childNode.className=='guideInstanceManager'){
					reset(childNode);
                }else{
                childNode.value=childNode.jsonModel["{default}"];
                }
            });
          }
          }
}); 

    $('.anchorToolbar').hide();
    $('.panel2').hide();

});


