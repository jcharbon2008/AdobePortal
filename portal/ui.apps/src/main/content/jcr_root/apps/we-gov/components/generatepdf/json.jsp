<%@page session="false" %>
<%@ page session="false" import="com.adobe.aemfd.docmanager.Document,
                                 java.io.InputStream,
                                 org.apache.sling.commons.json.io.*,
                                 java.util.*,
                                 org.apache.sling.jcr.api.SlingRepository,
                                 javax.jcr.Session,
                                 javax.jcr.Node,
                                 javax.jcr.Property,
                                 javax.jcr.Binary,
                                 com.day.cq.commons.jcr.JcrUtil,
                                 org.osgi.service.cm.Configuration,
                                 java.lang.Boolean,
                                 java.io.*,
                                 com.adobe.aem.we.gov.RightsManagementUtil,
                                 com.adobe.aemforms.refsite.commons.util.BatchGenerationUtil" %>
<%
%>
<%@taglib prefix="sling" uri="http://sling.apache.org/taglibs/sling/1.0" %>
<%
%><sling:defineObjects/><%
%><%

    String dataXMLFilePath = sling.getRequest().getParameter("dataXMLFilePath").replace("crx:///", "/");
    String templateID = sling.getRequest().getParameter("templateID");
    String resourceID = sling.getRequest().getParameter("resourceID");
    String recordId = "recordID";
    String enrollmentPdfFileName = "enrollment.pdf";

    BatchGenerationUtil batchGenerationUtil = sling.getService(BatchGenerationUtil.class);
    Map<String, String> renditionPaths = batchGenerationUtil.generateBatchOutPut(templateID, resourceID, dataXMLFilePath, recordId, enrollmentPdfFileName);


    String pdfRenditionPath = renditionPaths.get("pdfRenditionPath");
    String htmlRenditionPath = renditionPaths.get("htmlRenditionPath");


    SlingRepository repos = sling.getService(SlingRepository.class);
    Session session = ConntentUtils.getFnDServiceUserSession(repos);
    Node batchPdfNode = session.getNode(pdfRenditionPath);
    Property p = batchPdfNode.getNode("jcr:content").getProperty("jcr:data");

    Node parentNode = batchPdfNode.getParent();
    Node pdfNode = parentNode.addNode("enrollment.pdf", "nt:file");
    pdfRenditionPath = pdfNode.getPath();
    Node pdfJcrNode = pdfNode.addNode("jcr:content", "nt:resource");

    Configuration conf = sling.getService(org.osgi.service.cm.ConfigurationAdmin.class).getConfiguration("com.adobe.aem.we.gov.WeGovConfiguration");
    Boolean jeeServerEnabled = (Boolean) conf.getProperties().get("wegov.jeeserver");
    Boolean docSecurityAuthenticatedUserEnabled = (Boolean) conf.getProperties().get("wegov.docsecurity.authenticateduser");

    if (jeeServerEnabled.booleanValue()) {

        RightsManagementUtil rightsManagementUtil = sling.getService(RightsManagementUtil.class);
        InputStream inputStream = p.getBinary().getStream();
        InputStream protectedDocStream = null;
        if (docSecurityAuthenticatedUserEnabled.booleanValue()) {
            protectedDocStream = rightsManagementUtil.applyPolicy(inputStream, "We_Gov_Authenticated_User_Policy", "enrollment.pdf");
        } else {
            protectedDocStream = rightsManagementUtil.applyPolicy(inputStream, "We_Gov_Anonymous_User_Policy", "enrollment.pdf");
        }

        Binary protectedPdfBinary = pdfNode.getSession().getValueFactory().createBinary(protectedDocStream);
        p.setValue(protectedPdfBinary);


        JcrUtil.copy(p, pdfJcrNode, "jcr:data");

        session.save();
        session.logout();

    }
    response.setContentType("application/json");
    response.setCharacterEncoding("utf-8");
    JSONWriter writer = new JSONWriter(response.getWriter());
    writer.object();
    writer.key("pdfRenditionPath");
    writer.value(pdfRenditionPath);
    writer.endObject();

%>

