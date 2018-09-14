<%@page session="false"%><%--
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
<guide:initializeBean name="guidePanel" className="com.adobe.aemds.guide.common.GuidePanel" resourcePath="<%= resource.getPath() + "/guideContainer/rootPanel" %>" restoreOnExit="true">
    <div class="container">
        <ul class="upperNavigation clearfix">
            <c:forEach items="${guidePanel.items}" var="panelItem">
                <li data-guide-id="${panelItem.id}_guide-item-nav" title="${panelItem.navTitle}" data-path="${panelItem.path}"  >
					<div class="progress">
                        <a id="${panelItem.id}_guide-item-nav-progress" class=" progress-bar progress-bar-warning" role="progressbar" aria-valuenow="00" aria-valuemin="0" aria-valuemax="100" style="width:0%;min-width:0.1%;padding:0px" data-guide-toggle="tab">

                    </a>
                        </div>
                        <div style="position:relative;top:-37px;">
                        <a class="${panelItem.cssClassName}_external_nav"><span style="">${panelItem.navTitle}</span></a>
                    	</div>


                </li>
                <!--span style="width:100%">${panelItem.navTitle}</span-->
            </c:forEach>
        </ul>
    </div>
</guide:initializeBean>

<c:if test="${!isEditMode}">
    <script type="text/javascript">

$( document ).ready(function() {
window.guideBridge.on("elementNavigationChanged", function(event, data)
	  {
		  
		  var prevpanel = (window.guideBridge.resolveNode(data.prevText)),
		   subpanel = true,
		   varpanel = false;

           if (prevpanel.parent.parent !== undefined && prevpanel.parent.parent !== null) {
		  if(prevpanel.parent.parent.parent == null ){subpanel = false;}
          }    
		  if(!subpanel){

			  var size = 0;

			  var j=0;
			  for(i=0; i < prevpanel.children.length; i++){
				  if(prevpanel.children[i].name != "textdraw"){
					  size++;
					  if(!isEmpty(prevpanel.children[i])){
						  j++;
					  }
				  }
			  }
			 
			  var percent = (j/size*100);
			  var panelid = (prevpanel.id),
              navBarProgress = document.getElementById(panelid + "_guide-item-nav-progress");
			  if(navBarProgress) {
				document.getElementById(panelid + "_guide-item-nav-progress").style.width=percent + "%";
              }

			  for(i=1; i < prevpanel.children.length; i+=2){
				  
				  if( prevpanel.children[i].children.length!== undefined && prevpanel.children[i].children.length!== null){varpanel = true;}
			  }
			  if(varpanel){
				  
				  for(i=1; i < prevpanel.children.length; i+=2){
					  var size = prevpanel.children[i].children.length;
				  }
				  for(i=1; i < prevpanel.children.length; i+=2){
					  j = 0;
					  base = 0;					  
					  
					  for(k = 0; k < prevpanel.children[i].children.length; k++ ){
						  if(prevpanel.children[i].children[k].className != "guideTextDraw" ){
							  base++;
							  if(!isEmpty(prevpanel.children[i].children[k])){j++;}
						  }
					  }
				  }
				  percent = (j/base*100);				  
				  panelid = (prevpanel.id);
				  navBarProgress = document.getElementById(panelid + "_guide-item-nav-progress");
                  if(navBarProgress) {
				   document.getElementById(panelid + "_guide-item-nav-progress").style.width=percent + "%";
                  }
			  }
		  }
		  else{
			  
			  
			  var currentpanel = prevpanel.parent;
			  
			  var size = 0;
			  if(currentpanel && currentpanel.children) {
				for(i = 0; i < currentpanel.children.length; i++){
                      if(currentpanel.children[i].children){size += currentpanel.children[i].children.length;}
                  }
			  }
			  var filled = 0;
			  if( currentpanel && currentpanel.children ) {
			  for(i = 0; i < currentpanel.children.length; i++){
                      if(currentpanel.children[i].children){
                      var subsize = currentpanel.children[i].children.length;
                      var base = 0;
					  j=0;
					   for(k=0; k< subsize; k++){
                              if(currentpanel.children[i].children[k].className != "guideTextDraw"){
                                  base++;
                                  if(!isEmpty(currentpanel.children[i].children[k])){
                                      filled++;
                                  }
                              }
                          }

                      }
                  }
			  }
			  percent = (filled/size*100);
			  panelid = (currentpanel.id);
			   navBarProgress = document.getElementById(panelid + "_guide-item-nav-progress");
              if(navBarProgress) {
				document.getElementById(panelid + "_guide-item-nav-progress").style.width=percent + "%";
              }
		  }
		  
		  	  
		  
	  })


       function isEmpty(element){
			var result = true;
            if(element.value == null || element.value == undefined){
                result = true;
            }else
                result = false;
            if(element.className ==='guideFileUpload' && element.fileList !== undefined){
                if(element.fileList.length == 0){    
                    result = true;
                }else
                    result = false;               }
            return result;
        }


});  

</script>
</c:if>
