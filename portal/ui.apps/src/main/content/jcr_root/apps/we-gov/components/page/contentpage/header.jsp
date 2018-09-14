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
<div class="navbar navbar-default navbar-fixed-top bg-blue" role="navigation">
    <div class="container navbar-container">
        <div id="logo-section" class="nopad iphone-pad logoimage">	

            <cq:include path="logo" resourceType="we-gov/components/logo"/>
        </div>


</div>
<div class="hidden user-info-text">
    <div class="pop-content">
        <cq:include path="userinfo_mobile" resourceType="we-gov/components/userinfo"/>
    </div>
</div>


         <div id="mob-userinfo" class="col-md-4 col-xs-6 nopad-left pull-right">
        <div class="nav navbar-nav navbar-right visible-xs">
            <button type="button" class="menu-item-toggle visible-xs pull-right user" data-toggle="collapse" data-target="">
            </button>
        </div>
        <div class="nav navbar-nav navbar-right visible-sm visible-md visible-lg">
            <cq:include path="userinfo" resourceType="we-gov/components/userinfo"/>
        </div>

              <button type="button" class="navbar-toggle customeButton" data-toggle="collapse" id="menu_click" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

    </div>
 <div id= "mobile-navbar" class="navbar-collapse collapse">
                 <div class="nav navbar-nav navbar-left">
                     <cq:include path="topnav" resourceType="we-gov/components/topnav"/>
                 </div>
             </div><!--/.nav-collapse -->

    </div>
<div class="container">
<div class="col-xs-2 pull-right text-left hidden">&nbsp;</div>
</div>
<div class="hidden user-info-text">
    <div class="pop-content">
        <cq:include path="userinfo_mobile" resourceType="we-gov/components/userinfo"/>
    </div>
</div>



