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
%><%@include file="/libs/fd/af/components/guidesglobal.jsp" %>
<cq:includeClientLib categories="vgrouped.checkbox"/>
<div class="<%=GuideConstants.GUIDE_FIELD_CHECKBOXGROUP_ITEMS%>">
    <c:forEach items="${guideField.options}" var="option" varStatus="loopCounter">
        <div style="width:100%;" class="guideCheckBoxItem ${guideField.name} ${guideField.cssClassName} reason-request">
            <div  class="<%= GuideConstants.GUIDE_FIELD_WIDGET%> left "  data-id="${loopCounter.count}" style="width:100%;">


                <input type="checkbox"  name="${guideField.name}"  id="${guideField.id}${'_'}${loopCounter.count}${"_widget"}" value="${option.key}" ${option.key == guideField.value ? "checked" : ""} />

                <label class="checkbox" for="${guideField.id}${'_'}${loopCounter.count}${"_widget"}" style="line-height: 15px;">${guide:encodeForHtml(option.value,xssAPI)}</label>


            </div>
        </div>
    </c:forEach>
</div>
