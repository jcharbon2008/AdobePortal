<%@page session="false"%><%--
  Copyright 1997-2008 Day Management AG
  Barfuesserplatz 6, 4001 Basel, Switzerland
  All Rights Reserved.

  This software is the confidential and proprietary information of
  Day Management AG, ("Confidential Information"). You shall not
  disclose such Confidential Information and shall use it only in
  accordance with the terms of the license agreement you entered into
  with Day.

  ==============================================================================

  Image component

  Draws an image. 

--%><%@ page import="com.day.cq.commons.Doctype,
    com.day.cq.wcm.api.components.DropTarget,
    com.day.cq.wcm.foundation.Image, com.day.cq.wcm.foundation.Placeholder" %><%
%><%@include file="/libs/foundation/global.jsp"%><%
    Image image = new Image(resource);
    image.setIsInUITouchMode(Placeholder.isAuthoringUIModeTouch(slingRequest));

    //drop target css class = dd prefix + name of the drop target in the edit config
    image.addCssClass(DropTarget.CSS_CLASS_PREFIX + "image");
    image.loadStyleData(currentStyle);
    image.setSelector(".img"); // use image script
    image.setDoctype(Doctype.fromRequest(request));
    // add design information if not default (i.e. for reference paras)
    if (!currentDesign.equals(resourceDesign)) {
        image.setSuffix(currentDesign.getId());
    }
    String divId = "cq-image-jsp-" + resource.getPath();
%><div class="text-overlay-image <%=properties.get("cssClass","")%>" style="position: relative;z-index:0" >
	<div class="text-overlay heroTextContainer" style="position: relative;  z-index: 100; height:0px;">
	<div class="text">        
    <cq:text property="text" placeholder="<%= Placeholder.getDefaultPlaceholder(slingRequest, component, null)%>"/>
    </div><%
    if(properties.get("buttonTitle")!=null){%>        
        <input type="button" class="overlayImageButton" value="<%=properties.get("buttonTitle")%>" style="background-color:#<%=properties.get("buttonColor","17b38d")%>;color: <%=properties.get("buttonFontColor","white")%>;border: none;border-radius: <%=properties.get("buttonBorderRadius","2px")%>;font-size: <%=properties.get("buttonFontSize","16px")%>;" onClick="location.href='<%=properties.get("buttonLink","#")%>.html'"/>
    <%}%>
	</div>
<div id="<%= xssAPI.encodeForHTMLAttr(divId) %>" class="heroImageContainer" style="background: -moz-linear-gradient(<%=properties.get("linearGradient")%>);background: -ms-linear-gradient(<%=properties.get("linearGradient")%>);background: -webkit-linear-gradient(<%=properties.get("linearGradient")%>);"><% image.draw(out); %></div><%
    %><cq:text property="jcr:description" placeholder="" tagName="small" escapeXml="true"/>
	</div>

    <%@include file="/libs/foundation/components/image/tracking-js.jsp"%>

<style>
    .text-overlay-image img{
        position: relative;
        z-index: -1;
    }    
    @media(max-width:667px) {
    .top_container .heroTextContainer {
        padding: 0 10px;
        top: 40px;
    }

    .top_container .heroImageContainer {
        height: 200px;
        overflow: hidden !important;
        width: 100%;
    }
    
    .top_container .heroImageContainer>img {
        height: 200px;
        width: auto !important;
        margin-left: -170px;
    }
}
</style>    
