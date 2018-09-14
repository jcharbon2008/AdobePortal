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
%>
<%@include file="/libs/foundation/global.jsp" %>
<%@include file="/libs/fd/af/components/guidesglobal.jsp" %>
<cq:includeClientLib categories="qna.lib"/>
<!--<script data-sly-clientlib="qna.lib"></script>-->
<div class="<%=GuideConstants.GUIDE_FIELD_RADIOBUTTONGROUP_ITEMS%> qnaItems">
    <div class="<%=GuideConstants.GUIDE_FIELD_LABEL%> qnaLabel"  ${guideField.hideTitle ? "style=\"display:none\"" : "style=\"float:left\""} >
    <label for="${guideid}${"_widget"}">  ${guideField.title} </label>
	</div>
    <c:forEach items="${guideField.options}" var="option" varStatus="loopCounter">
        <div class="guideRadioButtonItem ${guideField.name} ${guideField.cssClassName} qna">
            <div class="<%= GuideConstants.GUIDE_FIELD_WIDGET%> left" data-id="${loopCounter.count}">
                <input type="radio" id="${guideField.id}${'-'}${loopCounter.count}${"_widget"}"
                       name="${guideField.name}" value="${option.key}" ${contains ? "checked" : ""} />
                 <label for="${guideField.id}${'-'}${loopCounter.count}${"_widget"}"></label>
            </div>
            <!--<div class="<%=GuideConstants.GUIDE_WIDGET_LABEL%> right"-->

            <!--/div> -->
        </div>
    </c:forEach>
</div>
