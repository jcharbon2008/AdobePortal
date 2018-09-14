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
<!DOCTYPE html>
<head>
    <title><%= currentPage.getTitle() == null ? xssAPI.encodeForHTML(currentPage.getName()) : xssAPI.encodeForHTML(currentPage.getTitle()) %></title>
    <meta http-equiv="X-UA-Compatible" content="IE=10,edge,chrome=1"/>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0,  maximum-scale=1.0, user-scalable=no" />
	<cq:includeClientLib categories="personalization.kernel"/>
	<cq:include path="config" resourceType="cq/personalization/components/clientcontext_optimized/config"/>
    <cq:include script="/libs/wcm/core/components/init/init.jsp" />
    <c:if test="${isEditMode || isPreviewMode}">
        <cq:include script="/libs/wcm/mobile/components/simulator/simulator.jsp"/>
    </c:if>
    <cq:include script="include.jsp"/>
    <cq:include script="library.jsp"/>
</head>
