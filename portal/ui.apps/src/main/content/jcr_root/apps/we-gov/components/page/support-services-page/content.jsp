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
<div id="draftModal" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">Save Draft</h4>
            </div>
            <div class="modal-body">
                <p>We have saved a draft of the application filled by you.</p>
                <p class="text-warning"><small>Would you like us to email this draft to you for future reference?</small></p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary sendEmail">Send Email</button>
                <button type="button" class="btn btn-primary closeBox" style="display:none;">Okay</button>
                
            </div>
        </div>
    </div>
</div>
<div class="guideBody">
    <guide:includeGuideContainer/>
</div>

