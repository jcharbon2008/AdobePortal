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
%><%@include file="/libs/foundation/global.jsp" %>
<cq:includeClientLib categories="apps.we-gov.homepage"/>

<main role="main" property="mainContentOfPage" class="container">
    <div class="top_container">
        <cq:include path="parsys_top" resourceType="foundation/components/parsys"/>
    </div>
    <div class="bottom_container container">
        <cq:include path="parsys_bottom" resourceType="foundation/components/parsys"/>
    </div>
    <div class="clear"></div>
</main>