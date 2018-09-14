
//custom functions
function computePanelTitle(ddVal)
{
    var namedTitle=ddVal+"'s Information";
    var commonTitle="Child's Information";
    if(ddVal != null && ddVal.trim()!=""  )
      {
     return namedTitle;
      }
     return commonTitle;
}

function navigationToMainSite()
{
   window.open("/content/we-gov/en.html","_self");
}

function navigationToCss()
{
   window.open("/content/dam/formsanddocuments/we-gov/child-support/css/jcr:content?wcmmode=disabled","_self");
}
function calcRepeatPanel(ddVal)
{

   var rPanel = guideBridge.resolveNode("guide[0].guide1[0].guideRootPanel[0].applicationFormRoot[0].formDetailsPanel[0].section2-ChildInformation[0].multipleChildInfo[0].childRepeatablePanel[0]");
   var rPanelCount = rPanel.panel.instanceManager.instanceCount;
 
    if(rPanelCount<ddVal){
        for(var i=rPanelCount; i<ddVal; i++){
            rPanel.panel.instanceManager.addInstance();
          
        }
    }
    else if(rPanelCount>ddVal){
        for(var j=rPanelCount; j>ddVal; j--){
            rPanel.panel.instanceManager.removeInstance(rPanel.panel.instanceManager.instanceCount-1);
          
        };
    }


 //return guideBridge.resolveNode("guide[0].guide1[0].guideRootPanel[0].applicationFormRoot[0].formDetailsPanel[0].section2-ChildInformation[0].multipleChildInfo[0].childRepeatablePanel[0]").value=ddVal;

}

//for showing Main site Button

$(document).ready(function(){
    


    /*Switching off the swipe gesture!*/
    window.setTimeout(function() {
        
        $('.guideContainerWrapperNode').off('swipeleft');
        $('.guideContainerWrapperNode').off('swiperight');
    }, 1000);



    /*Starting an event nav change listener*/
    guideBridge.on("elementNavigationChanged",function(event,data){
       
        presentPanel = guideBridge.resolveNode(data.newText).name;
        changeText(presentPanel);

    }) ;

function changeText(presentPanel)
    {  
       backbtn = guideBridge.resolveNode("guide[0].guide1[0].toolbar[0].previtemnav[0]");
       var nextButton = $("[id$='nextitemnav___guide-item']");
       if(presentPanel=="eligibilityResultPanel")
	   {
                
                var passText = guideBridge.resolveNode("guide[0].guide1[0].guideRootPanel[0].checkEligibility[0].eligibilityResultPanel[0].passMsg[0]");
                if(passText.visible==true) { eligibilityToolbarVisibility("false"); }
                else{ eligibilityToolbarVisibility("true"); }
                
                
           
        }
        else if(presentPanel=="creditCard"){

                nextButton.find('span.iconButton-label').text('Pay Now');

        }
        else if(presentPanel=="paymentProcess")
        {

            if(guideBridge.validate()){

            $('.guidetoolbar.mobileToolbar').hide();

            setTimeout(timeInterval,3000);

             function timeInterval()
               {
                 $('.guidetoolbar.mobileToolbar').show();
                    var toolbar = guideBridge.resolveNode("guide[0].guide1[0].toolbar[0]");
                    toolbar.saveGuideDraft.visible = false;
                    toolbar.nextitemnav.visible = false;
                    toolbar.previtemnav.visible = false;
                  /*  toolbar.submit.visible=true;  */ 


				if(guideBridge.resolveNode("guide[0].guide1[0].guideRootPanel[0].applicationFormRoot[0].formPaymentPanel[0].signPanel[0]").visible == false){

					var referenceID = Math.floor((Math.random() * 10000000000) + 1);
					var transactionID = Math.floor((Math.random() * 100000000000000) + 1);
					guideBridge.resolveNode("guide[0].guide1[0].guideRootPanel[0].applicationFormRoot[0].formPaymentPanel[0].paymentProcess[0].paymentMsg[0]").value = 		"<table class=\"table table-hover\" style=\"font-size:16px;text-align:left;\">"+"\n"+                   
                    "<tbody>"+"\n"+ 
                        "<tr>"+"\n"+ 
                            "<td class=\"col-md-9\"><em>Payment Reference ID</em></h4></td>"+"\n"+                             
                            "<td class=\"col-md-1 text-right\">"+referenceID+"</td>"+"\n"+ 
                        "</tr>"+"\n"+ 
                        "<tr>"+"\n"+ 
                            "<td class=\"col-md-9\"><em>Response Message</em></h4></td>"+"\n"+ 
                            "<td class=\"col-md-1 text-right\">Successful</td>"+"\n"+ 
                        "</tr>"+"\n"+ 
                        "<tr>"+"\n"+ 
                            "<td class=\"col-md-9\"><em>Payment Transaction ID</em></h4></td>"+"\n"+ 
                            "<td class=\"col-md-1 text-right\">"+transactionID+"</td>"+"\n"+                 
                        "</tr>"+"\n"+                         
                    "</tbody>"+"\n"+ 
                "</table>"+"\n"+ 
		"<p style=\"font-size:16px;\">Proceed to application submission.</p>"
                    guideBridge.resolveNode("guide[0].guide1[0].guideRootPanel[0].applicationFormRoot[0].formPaymentPanel[0].paymentProcess[0].spinner[0]").visible = false;

                    }else{
                        window.guideBridge.setFocus({somExpression: null,focusOption: 'nextItemDeep',  runCompletionScript: false, skipFieldFocus: true});
					 } 

                }
            }
        }
        else if(presentPanel=="summaryPanel"){

               $('.guidetoolbar.mobileToolbar').hide();

        }
         else if(presentPanel=="signPanel"){

               //$('.guidetoolbar.mobileToolbar').hide();
              //backbtn.enabled = false;

        }
        else{

          $('.guidetoolbar.mobileToolbar').show();
          backbtn.enabled = true;
          nextButton.find('span.iconButton-label').text('Next');

    }

           }
 });

function eligibilityToolbarVisibility(status)
{
    if(status==="true")
    {
        $('div.eligibilityToolbar').show();
        $('div.universalFooter').hide();
    }

    else
    {
        $('div.eligibilityToolbar').hide();
        $('div.universalFooter').show();
    }
}

 function isValidationRequiredAtThisStep(panelName){

        if(presentPanel == panelName ){

            return true;
        }else{
            return false;
        }

    
}
