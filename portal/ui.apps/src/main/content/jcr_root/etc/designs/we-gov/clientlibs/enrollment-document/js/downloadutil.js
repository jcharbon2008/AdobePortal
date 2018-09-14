$(function(){
var templateID = "/content/apps/cm/correspondence/letters/1001/Enrollmentdocument";
var resourceID = "/content/forms/af/we-gov/css-enrollment-document/jcr:content/guideContainer";
var dataRef = getUrlParameters("dataRef","",true);  
if(dataRef){

 $.ajax({
    type: 'GET',
    url: '/content/we-gov-data/generatepdf/jcr:content.json',
     data: { templateID:templateID,resourceID:resourceID,dataXMLFilePath:dataRef},
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
            success: function (data) {
                $(".download a").html("<a href="+data.pdfRenditionPath+ " download=\"Enrollment.pdf\">Download</a>");
            }    
});

    }


});

function getUrlParameters(parameter, staticURL, decode){
   
   var currentLocation = (staticURL.length)? staticURL : window.location.search,
       parameterArr = currentLocation.split("?")[1].split("&"),
       returnBool = true;
   
   for(var i = 0; i < parameterArr.length; i++){
        parr = parameterArr[i].split("=");
        if(parr[0] == parameter){
            return (decode) ? decodeURIComponent(parr[1]) : parr[1];
            returnBool = true;
        }else{
            returnBool = false;            
        }
   }
      if(!returnBool) return false;  
}
