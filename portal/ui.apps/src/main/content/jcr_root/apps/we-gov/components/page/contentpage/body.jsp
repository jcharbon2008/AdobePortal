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
<body>
<cq:include path="clientcontext" resourceType="cq/personalization/components/clientcontext_optimized"/>
<cq:includeClientLib css ="apps.we-gov"/>
<div id="wrap" style="padding-bottom:60px;">
<cq:include script="header.jsp"/>
<cq:include script="content.jsp"/>
</div>
<cq:include script="footer.jsp"/>

<cq:includeClientLib js ="apps.we-gov"/>
<div id="sign-in" class="signin-popup">
    <div class="cqlogin">
        <cq:include script="/apps/we-gov/components/userinfo/cqlogin.jsp"/>
    </div>
</div>
</body>
