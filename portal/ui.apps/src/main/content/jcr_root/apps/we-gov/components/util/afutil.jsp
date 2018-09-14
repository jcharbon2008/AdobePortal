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
--%><%@include file="/libs/foundation/global.jsp"%><%
%><%@ page import="org.apache.sling.api.resource.ResourceResolver,
      			    org.apache.sling.api.resource.ResourceUtil" %><%

	String afHome = "/content/forms/af/";
	String afMetadataHome = "/content/dam/formsanddocuments/";


%>    
<%!
    public String getSiteRootForAF(String afPath,String fixedPath,ResourceResolver resourceResolver){
    //Setting default root page as We Gov Root page
    String siteRootPagePath = "/content/we-gov/en";
	String relativePath = afPath.replaceFirst(fixedPath,"");
    String pathElements[] = relativePath.split("/");
    
        if(pathElements.length > 1){
            //Adaptive form is contained within a folder
			String probableSiteRootPagePath = "/content/" + pathElements[0]+"/en";
            for(int i = 0; i<pathElements.length-2;i++){
                probableSiteRootPagePath = probableSiteRootPagePath+"/"+pathElements[i+1];

            }

            ResourceUtil resourceUtil = new ResourceUtil();
            Boolean isSiteRootPageExists = !resourceUtil.isNonExistingResource(resourceResolver.resolve(probableSiteRootPagePath));
            if(isSiteRootPageExists){
                //Site exists corresponding to adaptive form folder name. Making the specific site as site root page.
				siteRootPagePath = probableSiteRootPagePath;

            }
        }

     return siteRootPagePath;
    }

%>
