<%@page session="false"%><%--
    -----------------------
    ADOBE SYSTEMS INCORPORATED
    Copyright [2015] Adobe Systems Incorporated
    All Rights Reserved.
    
    NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the 
        terms of the Adobe license agreement accompanying it.  If you have received this file from a 
        source other than Adobe, then your use, modification, or distribution of it requires the prior 
            written permission of Adobe.
            -----------------------
            --%><%
            %>

<%@include file="/libs/fd/af/components/guidesglobal.jsp"%>

<body class="container">
    <cq:include script="header.jsp"/>
    <cq:include script="content.jsp"/>
    <cq:include script="footer.jsp"/>

    <c:if test="${isEditMode}">
        <link rel="stylesheet" href="/etc/clientlibs/fd/adaddon/adtheme/ad/less/author.css" type="text/css">
    </c:if>
    <cq:include path="cloudservices" resourceType="cq/cloudserviceconfigs/components/servicecomponents"/>

</body>

