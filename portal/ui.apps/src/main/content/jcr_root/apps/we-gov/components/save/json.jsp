<%--
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
%><%@page session="false" %>
<%@include file="/libs/foundation/global.jsp" %>
<%@ page import="org.apache.sling.commons.json.io.*" %>
<%@ page import="javax.jcr.Repository" %>
<%@ page import="javax.jcr.Session" %> 
<%@ page import="javax.jcr.SimpleCredentials" %> 
<%@ page import="javax.jcr.Node" %> 
<%@ page import="org.apache.sling.jcr.api.SlingRepository" %>
<%@ page import="org.apache.jackrabbit.commons.JcrUtils" %>

<% 

response.setContentType("application/json");
response.setCharacterEncoding("utf-8");
JSONWriter writer = new JSONWriter(response.getWriter());
writer.object();    

String draftID = request.getParameter("draftID");
String email = request.getParameter("email");
String afPath = request.getParameter("afPath");
if(draftID!=null && email!=null &&afPath!=null){


    String draftURL = "dataRef="+draftID;


try { 
 
  //Get Sling repository
  org.apache.sling.jcr.api.SlingRepository repository = sling.getService(SlingRepository.class);

  //Create a Session
  javax.jcr.Session session = repository.login(new SimpleCredentials("admin", "admin".toCharArray()));

  //Create a node that represents the root node
  Node root = session.getRootNode(); 



  // Store content 
  Node draftData = null;
    Node fp = root.getNode("content/usergenerated");
    if(!fp.hasNode("wegov-drafts-email-notification")){
        draftData = fp.addNode("wegov-drafts-email-notification");
    }else
        draftData = fp.getNode("wegov-drafts-email-notification");

  //Save draft ID
    Node draftIDNode = draftData.addNode(draftID,"nt:unstructured");
    draftIDNode.setProperty("email",email);
	draftIDNode.setProperty("draftURL",draftURL);
    draftIDNode.setProperty("afPath",afPath);


  // Save the session changes and log out
  session.save(); 
  session.logout();

  writer.key("status");
  writer.value("success");

  }
 catch(Exception e){
  	writer.key("status");
    writer.value("failure: "+ e);
    e.printStackTrace();
  }
}
else{
    writer.key("status");
	writer.value("required parameters are not passed");
}
writer.endObject();
%>
