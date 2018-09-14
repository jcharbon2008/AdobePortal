/*************************************************************************

ADOBE SYSTEMS INCORPORATED
 Copyright [2015] Adobe Systems Incorporated
 All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the 
terms of the Adobe license agreement accompanying it.  If you have received this file from a 
source other than Adobe, then your use, modification, or distribution of it requires the prior 
written permission of Adobe.

 **************************************************************************/
$(function() {

	var draftModal = '<div id=\"draftModal\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" style=\"color:black;\">&times;</button><h4 class=\"modal-title\">Draft Saved</h4></div><div class=\"modal-body\"><p>We have saved a draft of the application filled by you.</p><p class=\"text-warning\">Would you like us to email this draft to you for future reference?</p></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-primary sendEmail moveNext\" style=\"padding:16px 12px;\">Send Email</button><button type=\"button\" class=\"btn btn-primary closeBox moveNext\" style=\"display:none;\">Okay</button></div></div></div></div>';
    $('body').append(draftModal);

       $("#draftModal .sendEmail").on('click', function() {
        console.log('In sendEmail section')
        var draftID = guideBridge.customContextProperty('draftID')
        var afPath = "css";
        var email = guideBridge.resolveNode("guide[0].guide1[0].guideRootPanel[0].applicationFormRoot[0].formDetailsPanel[0].section1-ApplicantInformation[0].section1-1-BasicInformation[0].emailAddress[0]").value;
        var givenName = guideBridge.resolveNode("guide[0].guide1[0].guideRootPanel[0].applicationFormRoot[0].formDetailsPanel[0].section1-ApplicantInformation[0].section1-1-BasicInformation[0].firstName[0]").value;
        var emailTemplatePath = "/content/campaigns/we-gov/e-mails/saved-form-draft-aem"   
        var url = "/content/aemforms-refsite/save.json?draftID=" + draftID + "&afPath=" + afPath + "&email=" + email + "&givenName=" + givenName + "&emailTemplatePath="+emailTemplatePath;

           if(email==null){

                $('#draftModal .modal-body').html('<p>Please provide your email address to send email with the link to your application draft.</p>')
                $('.modal-title').html('<h4 class="modal-title">Message</h4>')
                $(".btn-primary.sendEmail").css('display', 'none');
				guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].applicationFormRoot[0].formDetailsPanel[0].section1-ApplicantInformation[0].section1-1-BasicInformation[0].emailAddress[0]");

           }else{

                $.ajax(url, {
                    dataType: "text",
                    success: function(rawData, status, xhr) {
                        var serverResponse;
                        try {
                            serverResponse = $.parseJSON(rawData);

                            if (serverResponse.status == 'success') {
								$('#draftModal .modal-body').html('<p>We have sent an email to you with the link to your application draft. <br>This draft will expire after 15 days.</p>')
              					$('.modal-title').html('<h4 class="modal-title">Draft Email Sent</h4>')
                                $('.btn-primary.closeBox').css('display', '').css('padding','16px 12px');
                                $(".btn-primary.sendEmail").css('display', 'none');
                            }else{

                                $('#draftModal .modal-body').html('<p>Email with the link to your application draft has been sent already.</p>')
                                $('.modal-title').html('<h4 class="modal-title">Message</h4>')
                                $(".btn-primary.sendEmail").css('display', 'none');

                            }
        
        
                        } catch (err) {
                            failure(err);
                        }
                    },
                    error: function(xhr, status, err) {
                        failure(err);
                    }
                });
           }


    });

        $('.modal-header > .close').on('click', function() {
			  $('#draftModal .modal-body').html('<p>We have saved a draft of the application filled by you.</p><p class="text-warning">Would you like us to email this draft to you for future reference?</p>')
              $('.modal-title').html('<h4 class="modal-title">Draft Saved</h4>')
              $('.btn-primary.closeBox').css('display', 'none');
              $(".btn-primary.sendEmail").css('display', '');
   		});

     $(".btn-primary.closeBox").on('click', function() {
           $('.modal-header > .close').click();

   	});

});
