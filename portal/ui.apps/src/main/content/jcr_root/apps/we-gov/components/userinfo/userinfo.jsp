<%--

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
--%><%@include file="/apps/we-gov/components/global.jsp" %><%
%><%@page session="false" import="
          org.apache.sling.api.resource.ResourceResolver,
          com.day.cq.wcm.commons.WCMUtils,
		  com.day.cq.wcm.api.WCMMode, org.apache.sling.api.auth.Authenticator"%>


              <%
%><%@taglib prefix="personalization" uri="http://www.day.com/taglibs/cq/personalization/1.0" %><%

    final ResourceResolver resolver = resource.getResourceResolver();
    final boolean isAnonymous = resolver.getUserID().equals("anonymous");
%>

        <%
    if (!isAnonymous) { %>
    <li class="username">
        <a href="<%= resourceResolver.map(request, "/content/we-gov/en/community/profile") %>.html"><%= i18n.get("Profile") %></a>
    </li>
    <li class="signout">
        <a href="<%= resourceResolver.map(request, "/system/sling/logout") %>.html?<%= Authenticator.LOGIN_RESOURCE %>=<%= resourceResolver.map(currentPage.getPath()) %>.html"><%= i18n.get("Sign Out") %></a>
    </li>
        <% }
    if (isAnonymous) { %>
    <li class="signin"><a href="<%= resourceResolver.map(request, "/content/we-gov/en/community/signin") %>.html"><%= i18n.get("Sign In") %></a></li>

        <% }
    %>
