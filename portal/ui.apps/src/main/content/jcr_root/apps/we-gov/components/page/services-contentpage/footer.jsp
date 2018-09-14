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
%><%@ page import="com.day.cq.i18n.I18n, java.util.Calendar" %>
<%@include file="/libs/foundation/global.jsp" %><%
    I18n i18n = new I18n(slingRequest);
    int year = Calendar.getInstance().get(Calendar.YEAR);
%>
<%--<div id="footer" class="bg-dk-grey hidden-xs">--%>
      <%--<div class="container">--%>
        <%--<p class="text-muted text-center text-white"><%= i18n.get("&copy; {0} We.Gov | All Rights Reserved", null, String.valueOf(year)) %></p>--%>
      <%--</div>--%>
<%--</div>--%>

<cq:include path="footer" resourceType="/apps/we-gov/components/structure/footer"/>