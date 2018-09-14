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
%><%@include file="/apps/we-gov/components/global.jsp" %>


		<div class="row assistance nomargin-bottom">
                 <!-- form headings -->
                <div class="col-lg-7 col-md-7 col-sm-6 col-xs-10 nopad-left nopad-right panel-body nobrdbg">
                    <h3 class="col-lg-12 col-md-12 col-sm-12 text-upper text-blue"><%=properties.get("applicationName","Application Name")%></h3>
                    <h4 class="col-lg-12 col-md-12 col-sm-12">(<%= i18n.get("Estimated Duration - Average")%><%=properties.get("applicationCompletionTime","X")%> <%= i18n.get("Mins")%>)</h4>
                </div>
                <!--/ form headings -->

                <!-- CTA's for terms, demo and help -->
                <div class="col-lg-5 col-md-5 col-sm-6 hidden-xs panel-body right-images nobrdbg text-center nopad-right">
                    <div class="row">
                        <div class="col-md-1 col-sm-1 hidden-xs nopad nobrdbg">
                            &nbsp;
                        </div>
                        <div class="col-lg-2 col-sm-2 col-xs-1 hidden-xs col-md-2 nopad">
                            &nbsp;
                        </div>
						<% 
    					if(!"true".equals(properties.get("terms","false")))
						{%>
                        <div class="col-lg-2 col-sm-2 col-xs-3 col-md-2 nopad bg-green bordered tnc">
                            <div>
                                <a data-toggle="modal" class="text-center" id="legal" href="#terms_modal">
                                <div class="terms icon"></div>
                            	<div class="small"><%= i18n.get("Terms")%></div>
                                </a>
                            </div>
                        </div>

                        <%}
                        if(!"true".equals(properties.get("demo","false")))
						{%>
                        <div class="col-lg-2 col-sm-2 col-xs-3 col-md-2 nopad bg-orange bordered demo-content">
                            <div>
                                <a data-toggle="modal" class="text-center" id="demo" href="#demo_modal">
                                    <div class="demo icon"></div>
                                    <div class="small"><%= i18n.get("Demo")%></div>
                                </a>
                            </div>
                           </div>
                        <%}

						if(!"true".equals(properties.get("help","false")))
						{%>
                        <div class="col-lg-2 col-sm-2 col-xs-3 col-md-2 nopad bg-cyan bordered help-content">
                            <div>
                                <a class="text-center form-help" id="help" href="javascript:void(null)" data-original-title="" title="">
                                    <div class="help icon"></div>
                                    <div class="small"><%= i18n.get("Help")%></div>
                                </a>
                            </div>
                            <div class="hidden form-help-text">
                            	<div class="pop-content">
                                	<cq:include path="par" resourceType="foundation/components/parsys" />
                                </div>
                            </div>
                        </div>
                         <%}%>
                        <div class="col-md-1 hidden-sm hidden-xs nopad nobrdbg">
                            &nbsp;
                        </div>
                    </div>

                    <% 
    					if(!"true".equals(properties.get("need","false")))
					{%>
                    <div class="row">
                    	<div class="col-md-11 col-sm-11 nopad nobrdbg text-center">
                            <a class="text-blue need-link" href="#" data-original-title="" title=""><%= i18n.get("What you need...")%></a>
                        </div>
                        <!-- What You Need Content Div -->
                        <div class="hidden need-text text-left">
                            <div class="pop-content">
                                <cq:include path="par_need" resourceType="foundation/components/parsys" />
                            </div>
                        </div>
						<div class="col-md-1 hidden-sm hidden-xs nopad nobrdbg">
                            &nbsp;
                        </div>
                    </div>
                  <%}%>
                </div>
                <!--/ CTA's for terms, demo and help -->

                 <!-- CTA for iPhone steps toggle -->
                 <div id= "detail-toggle" class="col-xs-2 visible-xs pull-right text-right detail-toggle">
                       <div class="toggle icon btn-detail" data-target=".detail-collapse" data-toggle="collapse" id="detail_click"></div>
                 </div>
                 <!--/ CTA for iPhone steps toggle -->
              </div>

			<div class="row hidden-xs slide-container nomargin-bottom">
               		<!-- sub-text -->
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopad-top nopad-bottom panel-body nobrdbg clearfix ipad-pad-right hidden-xs">
                        <p class="lead col-lg-12 col-md-12 nopad nomargin-bottom desc-text ellipsis-text"><%=properties.get("applicationDescription","Application Description")%></p>
                        <span class="col-lg-12 text-right col-md-12 col-sm-12"><a href="#" class="text-blue more-link ipad-nopad-right"><%= i18n.get("Read More")%></a></span>
                    </div>
                    <!--/ sub-text -->                
            </div>

			<div id="detail_menu" class="detail-collapse collapse col-xs-12">         

				<%if(!"true".equals(properties.get("terms","false")))
				{%>
                <ul class="nav navbar-nav navbar-right toggle-menu">
                    <li class="terms-iphone active"><a href="#terms_modal" data-toggle="modal"><%= i18n.get("Terms")%></a></li>

                </ul>
                <%}%>
                <ul class="nav navbar-nav navbar-right toggle-help">
				<%if(!"true".equals(properties.get("demo","false")))
				{%>
                    <li class="demo-iphone toggle-menu"><a href="#demo_modal" data-toggle="modal"><%= i18n.get("Demo")%></a></li>
				<%}%>
                    <li class="menu-iphone"><a href="#"><%= i18n.get("Menu")%></a></li>
                <%if(!"true".equals(properties.get("help","false")))
				{%>
                	<li class="help-iphone"><a href="#"><%= i18n.get("Help")%></a></li>
				<%}%>
				<%if(!"true".equals(properties.get("need","false")))
				{%>
                    <li class="need-iphone active">
                        <a href="#" class="need-link" data-original-title="" title=""><%= i18n.get("What you need")%></a>
					</li>
                <%}%>
                    <li class="need-iphone-text"></li>
                    <li class="help-iphone-text"></li>
                </ul>
             </div>

	<!-- Terms Modal Starts -->
		 <% if(isWCMModeDisabled || isWCMModePreview){ %>
		<div class="modal fade" id="terms_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		 <% }%>

          <div class="modal-dialog text-left">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h3 class="modal-title text-blue" id="myModalLabel"><%= i18n.get("Terms")%></h3>
              </div>
              <div class="modal-body" data-spy="scroll">
				<cq:include path="par_terms" resourceType="foundation/components/parsys" />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary text-upper" data-dismiss="modal"><%= i18n.get("Accept")%></button>
              </div>
            </div>
          </div>
            <% if(isWCMModeDisabled || isWCMModePreview){ %>
            </div>
           <% }%>
        <!-- Terms Modal Ends -->

		<!-- Demo Modal Starts -->
		 <% if(isWCMModeDisabled || isWCMModePreview){ %>
		<div class="modal fade" id="demo_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		 <% }%>

          <div class="modal-dialog text-left">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h3 class="modal-title text-blue" id="myModalLabel"><%= i18n.get("Demo")%></h3>
              </div>
              <div class="modal-body" data-spy="scroll">
				<cq:include path="par_demo" resourceType="foundation/components/parsys" />
              </div>
             </div>
          </div>
            <% if(isWCMModeDisabled || isWCMModePreview){ %>
            </div>
           <% }%>

