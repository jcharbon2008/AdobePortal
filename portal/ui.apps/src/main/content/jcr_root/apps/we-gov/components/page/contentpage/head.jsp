<%@page session="false" %><%--
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
%><%@include file="/libs/foundation/global.jsp" %><%
%>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1.0"/>

    <title><%= xssAPI.encodeForHTML( currentPage.getTitle() == null ? currentPage.getName() : currentPage.getTitle() ) %></title>
    <% currentDesign.writeCssIncludes(pageContext); %>
	<cq:includeClientLib categories="personalization.kernel"/>
	<cq:include path="config" resourceType="cq/personalization/components/clientcontext_optimized/config"/>
    <cq:include script="/libs/wcm/core/components/init/init.jsp"/>
    <cq:include script="/libs/foundation/components/page/stats.jsp"/>
    <cq:include script="/libs/wcm/mobile/components/simulator/simulator.jsp"/>
    <cq:includeClientLib categories="jquery"/>
	<link rel="stylesheet" href="/etc/clientlibs/fd/af/third-party/css/bootstrap.css" type="text/css">
	<cq:include script="include.jsp"/>
</head>
