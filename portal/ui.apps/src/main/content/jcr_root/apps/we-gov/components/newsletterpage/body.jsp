<%@page session="false"%><%--
   ==============================================================================
   
   Newsletter body script.
   
   ==============================================================================
   --%>
<%@page import="com.adobe.granite.ui.clientlibs.HtmlLibraryManager" %>
<%@include file="/libs/foundation/global.jsp" %>
 <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<body marginwidth="0" marginheight="0" topmargin="0" leftmargin="0" offset="0" style="font-family:Myriad Pro">
   <cq:include path="clickstreamcloud" resourceType="cq/personalization/components/clientcontext"/>
   <div id="wrapper">
      <table id="ac-body-table" width="100%" height="100%" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; height: 100%; width: 100%; margin: 0; padding: 0; background-color: #F2F2F2;">
         <tr>
            <td height="0">
               <cq:include script="actionstoolbar.jsp"/>
            </td>
         </tr>
         <tr>
            <td align="center" valign="top" id="ac-body-cell" style="padding: 30px 30px 0px 30px; font-size: 16px;">
                <table id="ac-content-table" border="0" cellpadding="0" cellspacing="0" style="">
                  <tr>
                     <td width="100%" height="10px" style="background-color:#293948;"></td>
                  </tr>
                  <tr>
                     <td class="ac-logoimage-par-cell" valign="top" style="padding: 20px 0px 20px 30px;background-color: #2D62AC;text-align:left">
                        <cq:include path="toplogopar" resourceType="mcm/components/newsletter/parsys"/>
                     </td>
                  </tr>
                  <tr>
                     <td class="ac-content-cell" valign="top" style="text-align: left; font-size: 13px;line-height: 170%;padding:0 50px;">
                        <cq:include path="par" resourceType="mcm/components/newsletter/parsys"/>
                     </td>
                  </tr>
                  <tr>
                     <td valign="top" id="ac-footer-cell" style="padding: 20px 20px 20px 20px; font-size: 10px; color: #808080; line-height: 170%;">
                        <table id="desktop-footer" align="center" style="color: #999999;font-size: 14px;line-height: 24px;font: 14px Myriad Regular, Adobe Clean, Arial;">
                           <tbody style="display:block;">
                              <tr>
                                 <td>We.Gov | Toll free 1800 000 0000 | Follow us on</td>
                                 <td>
                                    <img align="center" style="height:20px; text-align:center;" src="/content/dam/we-gov/facebook-icon.png">
                                 </td>
                                 <td>
                                    <img align="center" style="height:20px; text-align:center;" src="/content/dam/we-gov/twitter-icon.png">
                                 </td>
                              </tr>
                              <tr>
                                 <td align="center">*Terms and conditions apply</td>
                              </tr>
                           </tbody>
                        </table>
                        <table id="mobile-footer" align="center" style="color: #999999;font: 14px Myriad Regular, Adobe Clean, Arial;font-size: 12px;line-height: 17px;">
                           <tbody style="display:none;">
                              <tr align="center">
                                 <td>We.Gov</td>
                              </tr>
                              <tr align="center">
                                 <td>Toll free 1800 000 0000</td>
                              </tr>
                              <tr align="center">
                                 <td>Follow us on
                                    <img class="icon" align="center" style="margin-left: 5px;text-align: center;height: 15px;width: 15px;" src="/content/dam/we-gov/facebook-icon.png">
                                    <img class="icon" align="center" style="margin-left: 5px;text-align: center;height: 15px;width: 15px;" src="/content/dam/we-gov/twitter-icon.png">
                                 </td>
                              </tr>
                              <tr align="center">
                                 <td align="center">*Terms and conditions apply.</td>
                              </tr>
                           </tbody>
                        </table>
                     </td>
                  </tr>
               </table>
               <table style="text-align:center;">
                  <tbody>
                     <tr>
                        <td style="text-align: right; padding-bottom:20px; padding-top:20px; font: 11px Myriad Pro, Adobe Clean, Arial;width: 20%;color:#000000;">
                           <img class="aemLogoImg" align="center" src="/content/dam/we-gov/AEMForms-logo.png" style="height: 30px; width: 30px;">
                        </td>
                        <td style="width: 65%;text-align: left;    padding-bottom: 20px;    padding-top: 20px;    font: 11px Myriad Pro, Adobe Clean, Arial;    width: 50%;    color: #000000;">
                           <span style="vertical-align:middle; line-height:30px;">Powered by Adobe AEM Forms</span>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </td>
         </tr>
      </table>
   </div>
   <cq:include path="cloudservices" resourceType="cq/cloudserviceconfigs/components/servicecomponents"/>
</body>
<style type="text/css">
   /* styles to account for Outlook/Hotmail peculiarities */
   .ExternalClass {
   width: 100%;
   }
   .ExternalClass,
   .ExternalClass p,
   .ExternalClass span,
   .ExternalClass font,
   .ExternalClass td,
   .ExternalClass div {
   line-height: 100%;
   }
   table {
   mso-table-lspace: 0pt;
   mso-table-rspace: 0pt;
   }
   img {
   -ms-interpolation-mode: bicubic;
   }
   /* triggers "view in browser" link in Outlook */
   #outlook a {
   padding: 0;
   }
   /* template styles */
   .ac-content-cell img {
   max-width: 100%;
   padding-bottom: 10px;
   }
        .ac-logoimage-par-cell .image>img {
  height: 25px;
  width: auto;
}
   p {
   margin: 0;
   }
   .ac-content-cell p {
   margin-bottom: 10px;
   }
   #ac-body-cell {
   padding: 10px 10px 0px 10px !important;
   }
    #ac-content-table {
        max-width: 600px !important;
        width: 100% !important;
        text-align:center;
        border-collapse: collapse;
        max-width: 600px; 
        width:100%; 
        background-color: white;
    }
   /*.ac-content-cell img {
   width: 100% !important;
   }*/
   .ac-column-cell {
   display: block !important;
   width: auto !important;
    }

   table td.ac-content-cell {
   padding: 0 50px;
   }
   .fsiText {
   font: 16px Myriad Pro, Adobe Clean, Arial;
   color: #666666;
   line-height: 24px;
   }
   .fsiTextHeading {
   font: 18px Myriad Pro, Adobe Clean, Arial;
   color: #2995C9;
   line-height: 24px;
   }
   hr.fsiSeperator {
   height: 5px;
   background: #293948;
   color: black;
   width: 10%;
   padding: 0px;
   }
   .fsipwdTable {
   table-layout: fixed;
   width: 100%;
   text-align: center;
   }
   .fsipwdTable th {
   font-weight: normal;
   font: 14px Myriad Pro, Adobe Clean, Arial;
   }
   .fsipwdTable td {
   font-weight: bold;
   font: 16px Myriad Pro, Adobe Clean, Arial;
   }
   .applybutton {
   height: 50px;
   width: 195px;
   border: 1px solid #2995C9;
   }
   .applybutton a {
   font: 21px Myriad Pro, Adobe Clean, Arial;
   color: #2995C9;
   line-height: 50px;
   }
   .applybutton a span{
   color:#2995C9 !important;     
   }
   .logoImage {
   height: 50px;
   width: 183px;
   }
   .frontImage {
   height: auto;
   width: 100%;
   padding: 0px !important;
   }
   .iconImage {
   height: 50px;
   width: 50px;
   }
   #desktop-footer tbody {
   display: block;
   }
   #desktop-footer {
   font: 14px Myriad Regular, Adobe Clean, Arial;
   color: #999999;
   line-height: 24px;
   }
   #mobile-footer tbody {
   display: none;
   }
   span.title{
   line-height:14px;
   font-size: 16px;
   color: rgb(41,149,201);
   }
   .main-title{
   font: 16px Myriad Pro, Adobe Clean, Arial;
   color:#2995C9;
   line-height:24px;
   margin-bottom: 0 !important;
   }
   .content{
   font: 16px Myriad Pro, Adobe Clean, Arial;
   colour:#666666;
   line-height:24px;
   } 
   .center {
   text-align: center;
   }
   /******Media query starts********/
   @media(max-width:667px) {

      #ac-content-table {
        width: 100% !important;
        text-align:center;
        border-collapse: collapse;
        max-width: 375px !important; 
        width:100%; 
        background-color: white;
    }
   .main-title {
   font: 15px Myriad Pro, Adobe Clean, Arial;
   }
   .fsipwdTable th{
   font-weight:normal;
   font: 12px Myriad Pro, Adobe Clean, Arial;
   }
   table td.ac-content-cell {
   padding: 0 15px !important;
   }
   .ac-logoimage-par-cell {
   padding: 10px 0px 10px 15px !important;
   }
   .ac-images-par-cell {
   display: none;
   }
   .fsiButton {
   padding: 30px 0px !important;
   }
   .fsiText {
   font: 15px Myriad Pro, Adobe Clean, Arial;
   color: #666666;
   line-height: 21px
   }
   .fsiTextHeading {
   font: 16px Myriad Pro, Adobe Clean, Arial;
   color: #2995C9;
   line-height: 21px
   }
   .applybutton {
   height: 40px;
   width: 150px;
   }
   .applybutton>a {
   font: 16px Myriad Pro, Adobe Clean, Arial !important;
   line-height: 40px !important;
   }
   hr.fsiSeperator {
   height: 2.5px;
   }
   .logoImage {
   height: 27px;
   width: 100px;
   }
   .frontImage {
   height: auto;
   width: 100%;
   padding: 0px !important;
   }
   .iconImage {
   height: 30px;
   width: 32px;
   }
   #mobile-footer tbody {
   display: block  !important;
   }
   #mobile-footer .icon {
   height: 15px;
   width: 15px;
   }
   #mobile-footer {
   font: 14px Myriad Regular, Adobe Clean, Arial;
   font-size: 12px;
   line-height: 17px;
   }
   #desktop-footer tbody {
   display: none !important;
   }
   .aemLogoImg {
   height: 30px;
   width: 30px;
   }
   }
</style>
