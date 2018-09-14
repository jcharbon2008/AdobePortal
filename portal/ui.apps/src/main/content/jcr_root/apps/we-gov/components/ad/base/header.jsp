<%@page session="false"%><%---------------------------------------------------------------------
    ~  ADOBE CONFIDENTIAL
    ~  __________________
    ~
    ~  Copyright 2014 Adobe Systems Incorporated
    ~  All Rights Reserved.
    ~
    ~  NOTICE:  All information contained herein is, and remains
        ~  the property of Adobe Systems Incorporated and its suppliers,
~  if any.  The intellectual and technical concepts contained
    ~  herein are proprietary to Adobe Systems Incorporated and its
    ~  suppliers and may be covered by U.S. and Foreign Patents,
    ~  patents in process, and are protected by trade secret or copyright law.
        ~  Dissemination of this information or reproduction of this material
        ~  is strictly forbidden unless prior written permission is obtained
        ~  from Adobe Systems Incorporated.
        --------------------------------------------------------------------------%>
        
        <%@include file="/libs/fd/af/components/guidesglobal.jsp"%>
<div class="ad-page-head">
    <div class="ad-head-top row">
        <a href="/content/we-gov/en/departments/child-support-services.html"> <div class="ad-logo col-xs-8 col-sm-9 col-md-9"></div></a>
        <div class="download">
            <a href=# download="Statement.pdf">
                <span id="icon">
                    <img src="/etc/designs/we-gov/images/downloadIcon.png"/>
                </span>
                <span id="text">Download</span>
            </a>
        </div>
    </div>
    
</div>
<style>
    .ad-logo {
        background-image: url("/etc/designs/we-gov/images/childSupportServicesLogo.png");
        display: inline-block;
        width: 196px;
        height: 60px;
        background-position: 0px 15px;
        margin-top: 0;
        background-repeat: no-repeat;
        background-size: contain;
    }

    .ad-page-head {
        height: 65px;
        background: #2D62AC!important;
        padding: 0 6%;
    }
    
    .ad-head-top {
        min-height: 40px;
    }
    
    
    div.download {
        line-height: 60px;
        display: inline-block;
        width: auto;
        text-align: right;
        font-size: 14px;
        float: right;
    }
    div.download a
    {
        color: #fffafa !important;
    }
    
    div.download span#text {
        font-weight: 300;
        font-family: 'Open Sans', sans-serif;
    }
    
    @media(max-width:667px){
    .ad-page-head {
            height: 60px;
            background: #2D62AC!important;
            padding: 0px 15px;
        }
        
    }
    
</style>    
