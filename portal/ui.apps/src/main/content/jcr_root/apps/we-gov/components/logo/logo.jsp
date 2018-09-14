<%@page session="false"%><%--
  Copyright 1997-2008 Day Management AG
  Barfuesserplatz 6, 4001 Basel, Switzerland
  All Rights Reserved.

  This software is the confidential and proprietary information of
  Day Management AG, ("Confidential Information"). You shall not
  disclose such Confidential Information and shall use it only in
  accordance with the terms of the license agreement you entered into
  with Day.

  ==============================================================================

  Logo component

  Includes an image from the design and draws a link to the home page.

--%><%@include file="/libs/foundation/global.jsp"%>
	<%@include file="/apps/we-gov/components/util/afutil.jsp" %><%
%><%@ page import="com.day.text.Text,
                   com.day.cq.wcm.foundation.Image,
				   org.apache.sling.api.resource.ResourceResolver,
                   com.day.cq.commons.Doctype" %><%

    int absParent = currentStyle.get("absParent", 2L).intValue();
    Page homePage = currentPage.getAbsoluteParent(absParent);
	//Fix for adaptive form page rendition. AF doesn't have parent page, so creating current page as home page.
	if(homePage==null){

        homePage=currentPage;
    }
    String home = homePage != null ? homePage.getPath() : Text.getAbsoluteParent(currentPage.getPath(), absParent);

	//Fix for Naviagtion of adaptive form
    if(home.contains(afHome))
        {
            home = getSiteRootForAF(home,afHome,resourceResolver);
        }
    if(home.contains(afMetadataHome))
        {
            home = getSiteRootForAF(home,afMetadataHome,resourceResolver);
        }

    Resource res = currentStyle.getDefiningResource("imageReference");
    if (res == null) {
        res = currentStyle.getDefiningResource("image");
    }
    %><a href="<%= xssAPI.getValidHref(home) %>.html"><%
    if (res == null) {
        %>Home<%
    } else {
        Image img = new Image(res);
        img.setItemName(Image.NN_FILE, "image");
        img.setItemName(Image.PN_REFERENCE, "imageReference");
        img.setSelector("img");
        img.setDoctype(Doctype.fromRequest(request));
        img.setAlt("Home");
        img.draw(out);
    }
    %></a>
