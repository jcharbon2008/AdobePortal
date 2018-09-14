<%@page session="false"
    import="java.net.*"%><%--
  ADOBE CONFIDENTIAL
  __________________

   Copyright 2016 Adobe Systems Incorporated
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
%><%@include file="/apps/we-gov/components/global.jsp" %>
<div class="container">

<%
	 String formName = slingRequest.getRequestParameter("formName").getString();
	 String submitID = slingRequest.getRequestParameter("submitID").getString();
	 String link = "/content/forms/portal/render.dor.pdf/"+submitID;

    if(formName==null){
    formName="Application";
    }
	if(submitID==null){
    submitID="############";
    link = "";
    }

%>
             <div class="row col-lg-12 col-xs-12 thanks-page">
             	<!-- CTA for iPhone full screen toggle -->
                <div class="col-xs-2 hidden pull-right text-left iphone-collapse fullscreen-toggle">
                    &nbsp;
                </div>

                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12 nopad nobrdbg">
                    <!-- left container -->
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad nobrdbg">
                            <!-- content panel -->
                            <div class="col-lg-12 col-sm-12 col-xs-12 nopad si-docs-container clearfix">

                                <p><%= i18n.get("Thank You for submitting ")%><%=formName%><%=i18n.get(".Please note down your Application Tracking Number ")%><%=submitID%><br>
                                    <%= i18n.get("Submitted form can be downloaded from the ") %><a target="_blank" href="<%=link%>"><%= i18n.get("Link") %></a>.</p>


                            </div>

                    </div>
                    <!--/ left container -->
                    <!-- empty right container -->
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 nobrdbg text-center">
                       &nbsp; 
                    </div>
                    <!--/ empty right container -->
                </div>              
                <!-- /row  -->
             </div>	
        </div>

		<style>
			html,body{
				height:100%;
			}
		</style>    
