$(document).ready(function(){


    /*Switching off the swipe gesture!*/
    window.setTimeout(function() {
        
        $('.guideContainerWrapperNode').off('swipeleft');
        $('.guideContainerWrapperNode').off('swiperight');
    }, 1000);
    
 //Changing .on('change') to .on('click')
   $('div.guideRadioButtonItem.fancyRB').on('click', function(){
        // Only remove the class in the specific `box` that contains the radio
        $(this).closest('.guideRadioButtonGroupItems').find(".highlight").removeClass('highlight');
        $(this).closest('.guideRadioButtonItem.fancyRB').addClass('highlight');
    });
    
    /*Initializing few values*/
    $('.navbar-brand').text('child support services').css('font-variant', 'small-caps');
    $(".guidetoolbar.mobileToolbar").addClass("oneCol");
    $("[id$='nextitemnav___guide-item']").find('span.iconButton-label').css('width','52%').css('text-align','');
    $(".guideBody").addClass("checkEligibilityBg").removeClass("passBg applicationFormBg");
    $("[id$='nextitemnav___guide-item']").find('span.iconButton-icon').show();
    
    
    
    /*Starting an event nav change listener*/
    guideBridge.on("elementNavigationChanged",function(event,data){
        changeBg(data.newText);
        toolbarLayout(data.newText);
        var presentPanel = guideBridge.resolveNode(data.newText).name;
        changeText(presentPanel);
    }) ;
    
    
    
    /*Checking and setting toolbar layout based on opened panel*/
    function toolbarLayout(somExp)
    {
        var oneColToolbar = "applicantStatus";
        var twoColToolbar = "checkEligibility";
        var threeColToolbar = "applicationFormRoot" ;
        var tncToolbar="termsAndConditions";
        var ccToolBar="creditCard";
        
        if(somExp.indexOf(oneColToolbar)>= 0)
        {
            $(".guidetoolbar.mobileToolbar").addClass("oneCol").removeClass("threeCol twoCol");
        }
        else if(somExp.indexOf(twoColToolbar)>= 0)
        {
            $(".guidetoolbar.mobileToolbar").addClass("twoCol").removeClass("threeCol oneCol");
        }
        else if(somExp.indexOf(tncToolbar)>= 0)
        {
            $(".guidetoolbar.mobileToolbar").addClass("twoCol").removeClass("threeCol oneCol");
        }
        else if(somExp.indexOf(ccToolBar)>= 0)
        {
            $(".guidetoolbar.mobileToolbar").addClass("twoCol").removeClass("threeCol oneCol");
        }
        else if(somExp.indexOf(threeColToolbar)>= 0)
        {
            $(".guidetoolbar.mobileToolbar").addClass("threeCol").removeClass("twoCol oneCol");
        }
        
    }
    
    function changeBg(somExp)
    {
        var wallpaperContainer = $(".guideBody");
        
        if(somExp.indexOf("eligibilityResultPanel")>=0){
            wallpaperContainer.addClass("passBg").removeClass("checkEligibilityBg applicationFormBg");
        }
        
        else if (somExp.indexOf("applicationFormRoot")>=0){
            wallpaperContainer.addClass("applicationFormBg").removeClass("checkEligibilityBg passBg");
        }
        
        else if(somExp.indexOf("checkEligibility")>=0){
            wallpaperContainer.addClass("checkEligibilityBg").removeClass("passBg applicationFormBg");
        }
        
    }
    
    
    
    function changeText(presentPanel)
    {  
        var prevButton = $("[id$='previtemnav___guide-item']");
        var saveButton = $("[id$='saveGuideDraft___guide-item']");
        var nextButton = $("[id$='nextitemnav___guide-item']");
        var submitButton = $("[id$='submit___guide-item']");
        
        prevButton.css('width','').removeClass('hidden');
        submitButton.addClass('hidden');
        saveButton.css('width','');
        nextButton.css('width','');
        nextButton.find('span.iconButton-label').css('width','52%').css('text-align','');
        $('div.universalFooter').show(); 
        $('.guidetoolbar.mobileToolbar').show();
        
        switch(presentPanel)
        {
            case "applicationStatusPanel":
                nextButton.css('width','100%');
                nextButton.find('span.iconButton-label').css('text-align','right');
                nextButton.find('span.iconButton-icon').show();
                prevButton.addClass('hidden');
                break;
                
            case "page2panel":
                prevButton.removeClass('hidden');
                prevButton.find('span.iconButton-icon').show();
                break;
                
            case "childAgeStatus":
                prevButton.removeClass('hidden');
                prevButton.find('span.iconButton-icon').show();
                nextButton.find('span.iconButton-label').text('Check Eligibility');
                nextButton.find('span.iconButton-icon').hide();
                nextButton.find('span.iconButton-label').css('width','100%').css('text-align','center');
                break;
                
            case "eligibilityResultPanel":
                nextButton.find('span.iconButton-label').text('Start Application');
                nextButton.find('span.iconButton-icon').hide();
                nextButton.find('span.iconButton-label').css('width','100%').css('text-align','center');
                prevButton.removeClass('hidden');
                
                var passText = guideBridge.resolveNode("guide[0].guide1[0].guideRootPanel[0].checkEligibility[0].eligibilityResultPanel[0].passMsg[0]");
                
                if(passText.visible==true) { eligibilityToolbarVisibility("false"); }
                else{ eligibilityToolbarVisibility("true"); }
                break;
                
            case "termsAndConditions":
                nextButton.find('span.iconButton-label').text('I Agree');
                break;
                
            case "creditCard":
                nextButton.find('span.iconButton-label').text('Pay Now');
                break;
                
                
            case "paymentProcess":
                $('.guidetoolbar.mobileToolbar').hide();
                setTimeout(
                   timeout(), 3000);
                function timeout()
                {
                  window.guideBridge.submit();
                }

               /**  setTimeout(
                    function() 
                    {
                        window.guideBridge.submit();
                    }, 3000);  **/

                break;  

            default:
                nextButton.find('span.iconButton-label').text('Next');
                nextButton.find('span.iconButton-icon').show();   
                $('div.universalFooter').show();
                $('.guidetoolbar.mobileToolbar').show();        
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


