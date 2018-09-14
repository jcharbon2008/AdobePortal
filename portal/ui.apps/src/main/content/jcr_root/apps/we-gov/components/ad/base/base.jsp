<%--
-----------------------
ADOBE SYSTEMS INCORPORATED
 Copyright [2015] Adobe Systems Incorporated
 All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the 
terms of the Adobe license agreement accompanying it.  If you have received this file from a 
source other than Adobe, then your use, modification, or distribution of it requires the prior 
written permission of Adobe.
-----------------------
--%><%
%><%@include file="/libs/fd/af/components/guidesglobal.jsp" %>
<%@page session="false" %>
<%
	String guideContainerPath = GuideELUtils.getGuideContainerPath(slingRequest, resource);
	Resource guideContainerResource = resourceResolver.resolve(guideContainerPath);
	String lang = GuideELUtils.getLocale(slingRequest, guideContainerResource);
%>
<!DOCTYPE html>
<html lang="<%= lang %>">
    <cq:include script="head.jsp"/>
    <cq:include script="body.jsp"/>
</html>
