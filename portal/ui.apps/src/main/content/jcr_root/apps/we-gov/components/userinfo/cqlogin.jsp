<%@page session="false"%><%--
/*************************************************************************
*
* ADOBE CONFIDENTIAL
* __________________
*
*  Copyright 2014 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by trade secret or copyright law.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/
--%>

<%@ page import="com.day.cq.i18n.I18n,
com.day.cq.wcm.api.WCMMode,
com.day.cq.wcm.commons.WCMUtils,
com.day.text.Text,
com.day.cq.wcm.foundation.forms.FormsHelper" %>

<%@include file="/libs/foundation/global.jsp" %>



<%
final String id = Text.getName(resource.getPath());
I18n i18n = new I18n(slingRequest);
final String action = currentPage.getPath() + "/j_security_check";
final String validationFunctionName = "cq5forms_validate_";
String signupPagePath = WCMUtils.getInheritedProperty(currentPage, resourceResolver, "cq:signupPage");
if (signupPagePath != null) signupPagePath = resourceResolver.map(signupPagePath);
String defaultRedirect = currentPage.getPath();
if (!defaultRedirect.endsWith(".html")) {
defaultRedirect += ".html";
}
boolean isDisabled = WCMMode.fromRequest(request).equals(WCMMode.DISABLED);
%>

<script type="text/javascript">
function <%=validationFunctionName%>() {
	if (CQ_Analytics) {
		var u = document.forms['<%=id%>']['j_username'].value;
		if (CQ_Analytics.Sitecatalyst) {
			CQ_Analytics.record({ event:"loginAttempt", values:{
				username:u,
				loginPage:"${currentPage.path}.html",
				destinationPage:"<%= xssAPI.encodeForJSString(defaultRedirect) %>"
			}, componentPath:'<%=resource.getResourceType()%>'});
			if (CQ_Analytics.ClickstreamcloudUI && CQ_Analytics.ClickstreamcloudUI.isVisible()) {
				return false;
			}
		}
		<% if ( !isDisabled ) {
final String contextPath = slingRequest.getContextPath();
final String authorRedirect = contextPath + defaultRedirect; %>
			if (CQ_Analytics.ProfileDataMgr) {
				if (u) {
					/*
					* AdobePatentID="B1393"
					*/
					var loaded = CQ_Analytics.ProfileDataMgr.loadProfile(u);
					if (loaded) {
						var url = CQ.shared.HTTP.noCaching("<%= xssAPI.encodeForJSString(authorRedirect) %>");
						CQ.shared.Util.load(url);
					} else {
						alert("<%=i18n.get("The user could not be found.")%>");
					}
					return false;
				}
			}
		return true;
		<% } else { %>
			if (CQ_Analytics.ProfileDataMgr) {
				CQ_Analytics.ProfileDataMgr.clear();
			}
		return true;
		<% } %>
	}
	}

	// for login modal
	$('#login_modal').modal({
		show: false,
		keyboard: false,
		backdrop: 'static'
	});

    $(function(){
            $("body").on("change",".userType",function() {
                if($(this).is(":checked")) {
                    $(".redirect").val("/content/we-gov/en/application-dashboard.html");
                }
                else {
                $(".redirect").val(document.location.href);
                }
            });
        });

</script>

<%
final String jReason = request.getParameter("j_reason");
if (null != jReason) {
%>
<div class="loginerror"><%=xssAPI.encodeForHTML(i18n.getVar(jReason))%>
</div>
<%
}
%>

<!-- Signin Modal Starts -->

<div class="modal fade" id="login_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
<div class="modal-dialog text-left">
	<div class="modal-content">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			<h3 class="modal-title" id="signinModalLabel"><%= i18n.get("Sign In")%></h3>
		</div>
		<div class="modal-body" data-spy="scroll">
			<div class="parsys_column colctrl-2c">
				<div class="parsys_column colctrl-2c-c0">
					<div class="parbase login section">
						<script type="text/javascript">
							function cq5forms_validate_login() {
								console.log("some validation will happen here.");
							}
						</script>

                        <div class="col-lg-12 col-sm-12 sv-social">
                                <h4 class="text-center">Connect with</h4>
                                <ul>
                                        <li>
                                                <a href="#" class="facebook">
                                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 155.139 155.139" style="enable-background:new 0 0 155.139 155.139;" xml:space="preserve">
                                                        <path id="f_1_" style="fill:#ffffff;" d="M89.584,155.139V84.378h23.742l3.562-27.585H89.584V39.184   c0-7.984,2.208-13.425,13.67-13.425l14.595-0.006V1.08C115.325,0.752,106.661,0,96.577,0C75.52,0,61.104,12.853,61.104,36.452   v20.341H37.29v27.585h23.814v70.761H89.584z"/>
                                                        </svg>
                                                </a>
                                        </li>
                                        <li>
                                                <a href="#" class="twitter">
                                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">
                                                        <path style="fill:#ffffff;" d="M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411    c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513    c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101    c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104    c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194    c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485    c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z"/>
                                                        </svg>
                                                </a>
                                        </li>
                                        <li>
                                                <a href="#" class="google-plus">
                                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 458.246 458.246" style="enable-background:new 0 0 458.246 458.246;" xml:space="preserve">
                                                        <path style="fill:#ffffff;" d="M160.777,259.368h71.594c-12.567,35.53-46.603,61.004-86.45,60.71   c-48.349-0.357-88.327-39.035-90.204-87.349c-2.012-51.789,39.537-94.563,90.887-94.563c23.479,0,44.905,8.946,61.058,23.605   c3.826,3.473,9.65,3.495,13.413-0.047l26.296-24.749c4.112-3.871,4.127-10.408,0.027-14.292   c-25.617-24.269-59.981-39.396-97.876-40.136C68.696,80.969,0.567,147.238,0.004,228.078   c-0.568,81.447,65.285,147.649,146.6,147.649c78.199,0,142.081-61.229,146.36-138.358c0.114-0.967,0.189-33.648,0.189-33.648   H160.777c-5.426,0-9.824,4.398-9.824,9.824v35.999C150.953,254.97,155.352,259.368,160.777,259.368z"/>
                                                        <path style="fill:#ffffff;" d="M414.464,206.99v-35.173c0-4.755-3.854-8.609-8.609-8.609h-29.604c-4.755,0-8.609,3.854-8.609,8.609   v35.173h-35.173c-4.755,0-8.609,3.854-8.609,8.609v29.604c0,4.755,3.854,8.609,8.609,8.609h35.173v35.173   c0,4.755,3.854,8.609,8.609,8.609h29.604c4.755,0,8.609-3.854,8.609-8.609v-35.173h35.173c4.755,0,8.609-3.854,8.609-8.609v-29.604   c0-4.755-3.854-8.609-8.609-8.609L414.464,206.99L414.464,206.99z"/>
                                                        </svg>
                                                </a>
                                        </li>
                                </ul>
                                <div class="divider">
                                        <span>or</span>
                                </div>
                        </div>



						<form class="col-lg-12 col-sm-12" role="form"
                                method="POST"
                                action="<%= xssAPI.getValidHref(action) %>"
                                id="<%= xssAPI.encodeForHTMLAttr(id) %>"
                                name="<%= xssAPI.encodeForHTMLAttr(id) %>"
                                enctype="multipart/form-data"
                                onsubmit="return <%=validationFunctionName%>();">

							<input type="hidden" name="resource" class="redirect" value="<%= xssAPI.encodeForHTMLAttr(defaultRedirect) %>">
							<input type="hidden" name="_charset_" value="UTF-8"/>

							<div class="form-group">
								<label for="<%= xssAPI.encodeForHTMLAttr(id + "_username")%>" class="control-label"><%= xssAPI.encodeForHTML(i18n.get("Username")) %></label>
                                <input id="<%= xssAPI.encodeForHTMLAttr(id + "_username")%>" class="form-control cqusername form_field form_field_text login_username"
                                    type="text" name="j_username" placeholder="Username" tabindex="9990" autocapitalize="off"/>
							</div>
							<div class="form-group">
								<label for="<%= xssAPI.encodeForHTMLAttr(id + "_password")%>" class="control-label"><%= xssAPI.encodeForHTML(i18n.get("Password")) %> </label>
                                <input id="<%= xssAPI.encodeForHTMLAttr(id + "_password")%>"
                                    class="form-control form_field form_field_text login_password cqpassword" type="password" autocomplete="off"
                                    name="j_password" placeholder="Password" tabindex="9991"/>
							</div>
							<div class="form-group">
                                <button type="submit" id="login_submit" class="btn btn-primary btn-block form_button_submit" onclick="$CQ('#<%= xssAPI.encodeForHTMLAttr(id) %>').submit()"
                                    tabindex="9992"><%=i18n.get("Sign In")%></button>
							</div>
                            <div class="form-group">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" class="userType" value="representative"><%=i18n.get("Login as representative")%></input>
                                    </label>
                                </div>
							</div>
						</form>

                        <div class="text-muted text-small text-right">Don't have an account? <a href="#">Sign up</a></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</div>

<!-- Signin Modal Ends -->





