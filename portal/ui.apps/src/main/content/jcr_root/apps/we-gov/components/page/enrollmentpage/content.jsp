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
<div class="container">
<cq:include path="applicationformheader" resourceType="we-gov/components/applicationformheader" />
</div>
<div class="guideBody">
    <guide:includeGuideContainer/>
</div>

<c:if test="${!isEditMode}">
<script type="text/javascript">

$( document ).ready(function() {
    window.guideBridge.on("elementFocusChanged", function(event, data){
        var panel = window.guideBridge.resolveNode(data.prevText);
        if (panel !== undefined && panel !== null) {
            var prevpanel = panel.parent,
                    subpanel = true,
                    varpanel = false;
            
            if(prevpanel.parent.parent == null )
            {subpanel = false;}
            
            if(subpanel){
                size = 0;
                j=0;
                for(i=0; i < prevpanel.children.length; i++){
                    if(prevpanel.children[i]._visible == true)
                    {
                        if(prevpanel.children[i].className != "guideTextDraw" ){
                            size++;
                            if(prevpanel.children[i].value != null){
                                j++;
                            }
                        }
                    }
                }

                percent = (j/size*100);
                 panelid = (prevpanel.id);
                 progressBarElementSelector ='#'+panelid+'_guide-item-nav'+'>.progress .progress-bar';
                $(progressBarElementSelector).css("width",percent+"%");
                
            } else {

				var currentpanel = prevpanel.parent;
                var size = 0;
                if(currentpanel && currentpanel.children ) {
				    for(i = 0; i < currentpanel.children.length; i++){
                        if(currentpanel.children[i].children){size += currentpanel.children[i].children.length;}
                   }
				}
                var filled = 0;
                if(currentpanel && currentpanel.children ) {
					for(i = 0; i < currentpanel.children.length; i++){
                        if(currentpanel.children[i].children){
                            var subsize = currentpanel.children[i].children.length;
                            var j=0;
                            for(k=0; k< subsize; k++){
                                if(currentpanel.children[i].children[k].value != null){
                                    filled++;
                                }
                            }

                        }                        
                    }
                }
                var percent = (filled/size*100);
                var panelid = (currentpanel.id);
                var progressBarElementSelector ='#'+panelid+'_guide-item-nav'+'>.progress .progress-bar'
                $(progressBarElementSelector).css("width",percent+"%");
            }
        }
     });
  });  

</script>
</c:if>    
