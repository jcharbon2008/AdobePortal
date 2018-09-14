<%@page session="false"%>	<%--
  ADOBE CONFIDENTIAL
  __________________

   Copyright 2014 Adobe Systems Incorporated
   All Rights Reserved.

  NOTICE:  All information contained herein is, and remains
  the property of Adobe Systems Incorporated and its suppliers,
  if any.  The intellectual and technical concepts contained
  herein are proprietary to Adobe Systems Incorporated and its
  suppliers and are protected by trade secret or copyright law.
  Dissemination of this information or reproduction of this material
  is strictly forbidden unless prior written permission is obtained
  from Adobe Systems Incorporated.
--%><%
%><%@include file="/libs/fd/af/components/guidesglobal.jsp"%>
<%@ page import="com.adobe.aemds.guide.utils.StyleUtils" %>
<div class="progressmeter col-md-10 col-sm-10">
    <%-- navigation tabs --%>
      <img class="progressmeterdown"/>

    <ol id="${guidePanel.id}_guide-item-nav-container"
        class="wizard-navigators bottom-navigators ${guideLayoutContext.layoutNavigatorClasses} hidden-xs"
        data-guide-panel-edit="reorderItems" role="tablist">
    	<c:set var="liWidth" value="23"/>
    	<c:set var="liItemsLength" value="${fn:length(guidePanel.items)}"/>
		<c:if test="${liItemsLength > 0 && (94 / liItemsLength) > liWidth}">
            <c:set var="liWidth" value="${94 / liItemsLength}"/>
        </c:if>
        <c:forEach items="${guidePanel.items}" var="panelItem">

            <li id="${panelItem.id}_guide-item-nav" title="${guide:encodeForHtmlAttr(panelItem.navTitle,xssAPI)}" data-path="${panelItem.path}" role="tab" aria-controls="${panelItem.id}_guide-item"
            style="width:${liWidth}%;">
            <div class="progress bottomProgressMeter">
                  <div id="${panelItem.id}_guide-item-nav-progress" class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="0"
                       aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
                      <span class="sr-only">0% Complete</span>
                    </div>
            </div>
            <span>${guide:encodeForHtml(panelItem.navTitle,xssAPI)}</span>
			<div class="indicator"></div>
            </li>
        </c:forEach>
    </ol>
</div>
<img class="progressmeterup"/>

<c:if test="${!isEditMode}">
    <script type="text/javascript">

$( document ).ready(function() {

window.guideBridge.on("elementNavigationChanged", function(event, data)
	  {


		var dataPanelSomExpression = 'guide[0].guide1[0].guideRootPanel[0].fill[0]'
        var dataCapturePanelSomExpression = 'guide[0].guide1[0].guideRootPanel[0].fill[0].panel2[0]'
        var verifyPanelSomExpression = 'guide[0].guide1[0].guideRootPanel[0].verify[0]'
        var signPanelSomExpression = 'guide[0].guide1[0].guideRootPanel[0].sign_submit[0]'
        var summaryPanelSomExpression = 'guide[0].guide1[0].guideRootPanel[0].summary[0]'    
		var dataCapturePanelpanel = window.guideBridge.resolveNode(dataCapturePanelSomExpression);
        var verifyPanel = window.guideBridge.resolveNode(verifyPanelSomExpression);
        var signPanel = window.guideBridge.resolveNode(signPanelSomExpression);
        var summaryPanel = window.guideBridge.resolveNode(summaryPanelSomExpression);  

		if(data.newText.indexOf(dataCapturePanelSomExpression)>-1 || data.newText.indexOf(verifyPanelSomExpression)>-1)
          {
          var inputFields = ['guideCheckBox','guideDatePicker','guideDropDownList','esign','guideFileUpload','guideNumericBox','guidePasswordBox','guideRadioButton','guideScribble','guideTextBox','verify'];
          var totalInputFields =0;
          var filledInputFields=0;

          dataCapturePanelpanel.visit(function (n)
              {
                  if(inputFields.indexOf(n.className)>-1)
                  {


                   if(n.enabled==true && n.visible==true && n.mandatory==true)
                   {
					   totalInputFields++;
                       if(n.value!=null)
                       {
                       filledInputFields++;
                       }

                     }
                  }                      

              });



          var dataCapturePanel = (window.guideBridge.resolveNode(dataPanelSomExpression))
		  var dataCapturePanelId = dataCapturePanel.id
          var dataCaptureProgressBarId = dataCapturePanelId + '_guide-item-nav-progress'
          var progressPercentage = (filledInputFields/totalInputFields*100);
		  $('#'+dataCaptureProgressBarId).css('width',progressPercentage+'%');
		  defaultText = $('#'+dataCaptureProgressBarId).parent().next('span').text()
          var res = defaultText.split(' ')
          panelName = res[0]
          percentage = res[1]
          updatedText = panelName +' '+ '('+progressPercentage.toPrecision(3)+'%)'
          $('#'+dataCaptureProgressBarId).parent().next('span').text(updatedText);



        }

          if(data.prevText.indexOf(verifyPanelSomExpression)>-1){
		  var verifyPanelId = verifyPanel.id
          var verifyPanelProgressBarId = verifyPanelId + '_guide-item-nav-progress'
          var progressPercentage = '100%'
          $('#'+verifyPanelProgressBarId).css('width',progressPercentage+'%');
		  defaultText = $('#'+verifyPanelProgressBarId).parent().next('span').text()
		  var res = defaultText.split(' ')
          panelName = res[0]
          percentage = res[1]
          updatedText = panelName +' '+ '(100%)'
          $('#'+verifyPanelProgressBarId).parent().next('span').text(updatedText);
          }

		  if(data.prevText.indexOf(signPanelSomExpression)>-1){

		  var signPanelId = signPanel.id
          var signPanelProgressBarId = signPanelId + '_guide-item-nav-progress'
          var progressPercentage = '100%'
          $('#'+signPanelProgressBarId).css('width',progressPercentage+'%');
		  defaultText = $('#'+signPanelProgressBarId).parent().next('span').text()
		  var res = defaultText.split(' ')
          panelName = res[0]
          percentage = res[1]
          updatedText = panelName +' '+ '(100%)'
          $('#'+signPanelProgressBarId).parent().next('span').text(updatedText);
          }

          if(data.newText.indexOf(summaryPanelSomExpression)>-1){

		  var summaryPanelId = summaryPanel.id
          var summaryPanelProgressBarId = summaryPanelId + '_guide-item-nav-progress'
          var progressPercentage = '100%'
          $('#'+summaryPanelProgressBarId).css('width',progressPercentage+'%');
		  defaultText = $('#'+summaryPanelProgressBarId).parent().next('span').text()
		  var res = defaultText.split(' ')
          panelName = res[0]
          percentage = res[1]
          updatedText = panelName +' '+ '(100%)'
          $('#'+summaryPanelProgressBarId).parent().next('span').text(updatedText);
          }


	  });
});  

</script>
</c:if>
