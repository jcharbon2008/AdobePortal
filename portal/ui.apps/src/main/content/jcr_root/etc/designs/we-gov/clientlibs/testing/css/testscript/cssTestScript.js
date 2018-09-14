;(function(hobs,qe) {


/*Test Suite*/
 var ts= new hobs.TestSuite("We Gov-Child Support Test Script", {
     path: "/etc/designs/we-gov/clientlibs/testing/css/testscript/cssTestScript.js",
     register: false
 })

/*********Child Support Application Starts*********/


///////////////#TestCase 1 /////////////

  ts.addTestCase(new hobs.TestCase("Test for child support navigation")
     .navigateTo(qe.css.url.CSS_URL)
     .asserts.location(qe.css.url.CSS_ASSERT_URL, true)
 )


 ///////////////#TestCase 2 ///////////// 

 ts.addTestCase(new hobs.TestCase("Test for child support Success Case")
     .navigateTo(qe.css.url.CSS_URL)
     .click(qe.css.prerequisitesForSuccess.PAGE1_DROPDOWN)
     .asserts.isTrue(function() {
         return hobs.find("input[id$='guideContainer-rootPanel-checkEligibility-applicationStatusPanel-guidedropdownlist__-1_widget']").attr("checked") == "checked";
     })
     .click(qe.css.button.NEXT)
     .click(qe.css.prerequisitesForSuccess.PAGE2_CHECKBOX1)
     .click(qe.css.prerequisitesForSuccess.PAGE2_CHECKBOX2)
     .execSyncFct(function() {

         hobs.find(qe.css.prerequisitesForSuccess.PAGE2_DROPDOWN).attr("selected", "selected")
     })
     .click(qe.css.button.NEXT)
     .click(qe.css.prerequisitesForSuccess.PAGE3_DROPDOWN)
     .click(qe.css.button.NEXT)
     .asserts.isTrue(function() {
         return hobs.find(qe.css.textMsg.PASS_MSG).is(':visible');
     })
 )


 ///////////////#TestCase 3 //////////////

 ts.addTestCase(new hobs.TestCase("Test for child support navigation failure Case")
     .navigateTo(qe.css.url.CSS_URL)
     .click(qe.css.prerequisitesForSuccess.PAGE1_DROPDOWN)
     .asserts.isTrue(function() {
         return hobs.find("input[id$='guideContainer-rootPanel-checkEligibility-applicationStatusPanel-guidedropdownlist__-1_widget']").attr("checked") == "checked";
     })

     .click(qe.css.button.NEXT)
     .click(qe.css.prerequisitesForSuccess.PAGE2_CHECKBOX1)

     .execSyncFct(function() {
         hobs.find(qe.css.prerequisitesForFailure.PAGE2_DROPDOWN).attr("selected", "selected")

     })
     .click(qe.css.button.NEXT)
     .click(qe.css.prerequisitesForSuccess.PAGE3_DROPDOWN)
     .click(qe.css.button.NEXT)
     .asserts.isTrue(function() {
         return hobs.find(qe.css.textMsg.FAIL_MSG).is(':visible');
     })

 )


 ///////////////#TestCase 4 ////////////// 

 ts.addTestCase(new hobs.TestCase("Check for to main site button")
     .navigateTo(qe.css.url.CSS_URL)
     .click(qe.css.prerequisitesForSuccess.PAGE1_DROPDOWN)
     .asserts.isTrue(function() {
         return hobs.find("input[id$='guideContainer-rootPanel-checkEligibility-applicationStatusPanel-guidedropdownlist__-1_widget']").attr("checked") == "checked";
     })

     .click(qe.css.button.NEXT)
     .click(qe.css.prerequisitesForSuccess.PAGE2_CHECKBOX1)

     .execSyncFct(function() {
         hobs.find(qe.css.prerequisitesForFailure.PAGE2_DROPDOWN).attr("selected", "selected")
         hobs.find(qe.css.prerequisitesForSuccess.PAGE2_DROPDOWN).attr("selected", "selected")
     })
     .click(qe.css.button.NEXT)
     .click(qe.css.prerequisitesForSuccess.PAGE3_DROPDOWN)
     .click(qe.css.button.NEXT)
     .asserts.isTrue(function() {
         return hobs.find(qe.css.textMsg.FAIL_MSG).is(':visible');
     })
     .asserts.isTrue(function() {
         return hobs.find(qe.css.button.GO_TO_MAIN_SITE).is(':visible')
     })
 )

  ///////////////#TestCase 5 ////////////// 

 ts.addTestCase(new hobs.TestCase("Check for to Start again button")
     .navigateTo(qe.css.url.CSS_URL)

     .click(qe.css.prerequisitesForSuccess.PAGE1_DROPDOWN)
     .asserts.isTrue(function() {
         return hobs.find("input[id$='guideContainer-rootPanel-checkEligibility-applicationStatusPanel-guidedropdownlist__-1_widget']").attr("checked") == "checked";
     })

     .click(qe.css.button.NEXT)
     .click(qe.css.prerequisitesForSuccess.PAGE2_CHECKBOX1)

     .execSyncFct(function() {
         hobs.find(qe.css.prerequisitesForFailure.PAGE2_DROPDOWN).attr("selected", "selected")
         hobs.find(qe.css.prerequisitesForSuccess.PAGE2_DROPDOWN).attr("selected", "selected")
     })
     .click(qe.css.button.NEXT)
     .click(qe.css.prerequisitesForSuccess.PAGE3_DROPDOWN)
     .click(qe.css.button.NEXT)
     .asserts.isTrue(function() {
         return hobs.find(qe.css.textMsg.FAIL_MSG).is(':visible');
     })
     .asserts.isTrue(function() {
         return hobs.find(qe.css.button.START_AGAIN).is(':visible')
     })
 )

  ///////////////#TestCase 6 ////////////// 

 ts.addTestCase(new hobs.TestCase("Check Navigation to Main Site")
      .navigateTo(qe.css.url.CSS_URL)


     .click(qe.css.prerequisitesForSuccess.PAGE1_DROPDOWN)
     .asserts.isTrue(function() {
         return hobs.find("input[id$='guideContainer-rootPanel-checkEligibility-applicationStatusPanel-guidedropdownlist__-1_widget']").attr("checked") == "checked";
     })

     .click(qe.css.button.NEXT)
     .click(qe.css.prerequisitesForSuccess.PAGE2_CHECKBOX1)

     .execSyncFct(function() {
         hobs.find(qe.css.prerequisitesForFailure.PAGE2_DROPDOWN).attr("selected", "selected")
         hobs.find(qe.css.prerequisitesForSuccess.PAGE2_DROPDOWN).attr("selected", "selected")
     })
     .click(qe.css.button.NEXT)
     .click(qe.css.prerequisitesForSuccess.PAGE3_DROPDOWN)
      .click(qe.css.button.NEXT)
     .asserts.isTrue(function() {
         return hobs.find(qe.css.textMsg.FAIL_MSG).is(':visible');
     })
     .asserts.isTrue(function() {
         return hobs.find(qe.css.button.GO_TO_MAIN_SITE).is(':visible')
     })
     .click(qe.css.button.GO_TO_MAIN_SITE)
     .asserts.location(qe.css.url.GO_TO_MAIN_SITE_URL, true)          
 )


  ///////////////#TestCase 7 ////////////// 

 ts.addTestCase(new hobs.TestCase("Check navigation with Start Again button")
     .navigateTo(qe.css.url.CSS_URL)


     .click(qe.css.prerequisitesForSuccess.PAGE1_DROPDOWN)
     .asserts.isTrue(function() {
         return hobs.find("input[id$='guideContainer-rootPanel-checkEligibility-applicationStatusPanel-guidedropdownlist__-1_widget']").attr("checked") == "checked";
     })

     .click(qe.css.button.NEXT)
     .click(qe.css.prerequisitesForSuccess.PAGE2_CHECKBOX1)

     .execSyncFct(function() {
         hobs.find(qe.css.prerequisitesForFailure.PAGE2_DROPDOWN).attr("selected", "selected")
         hobs.find(qe.css.prerequisitesForSuccess.PAGE2_DROPDOWN).attr("selected", "selected")
     })
     .click(qe.css.button.NEXT)
     .click(qe.css.prerequisitesForSuccess.PAGE3_DROPDOWN)
     .click("span:contains('Next')")
     .asserts.isTrue(function() {
         return hobs.find(qe.css.textMsg.FAIL_MSG).is(':visible');
     })
     .asserts.isTrue(function() {
         return hobs.find(qe.css.button.START_AGAIN).is(':visible')
     })
     .click(qe.css.button.START_AGAIN)
      .asserts.location(qe.css.url.CSS_ASSERT_URL, true)


 )


  ///////////////#TestCase 8 ////////////// 

ts.addTestCase(new hobs.TestCase("Test for About Application Panel")
     .navigateTo(qe.css.url.CSS_URL)


     .click(qe.css.prerequisitesForSuccess.PAGE1_DROPDOWN)
     .asserts.isTrue(function() {
         return hobs.find("input[id$='guideContainer-rootPanel-checkEligibility-applicationStatusPanel-guidedropdownlist__-1_widget']").attr("checked") == "checked";
     })

     .click(qe.css.button.NEXT)
     .click(qe.css.prerequisitesForSuccess.PAGE2_CHECKBOX1)
     .click(qe.css.prerequisitesForSuccess.PAGE2_CHECKBOX2)
     .execSyncFct(function() {
         //  hobs.find(qe.css.prerequisitesForFailure.PAGE2_DROPDOWN).attr("selected","selected")
         hobs.find(qe.css.prerequisitesForSuccess.PAGE2_DROPDOWN).attr("selected", "selected")
     })
     .click(qe.css.button.NEXT)
     .click(qe.css.prerequisitesForSuccess.PAGE3_DROPDOWN)
     .click(qe.css.button.NEXT)
     .asserts.isTrue(function() {
         return hobs.find(qe.css.textMsg.PASS_MSG).is(':visible');
     })
     .click(qe.css.button.NEXT)
     .click(".applicantInfoPanel_nav span:contains(" +qe.css.textMsg.TOPTAB_TITLE1 + ")")
     .asserts.isTrue(function() {
         return hobs.find(".guidePanelDescription:contains('Basic Information')").is(':visible')
     })
 )


 ///////////////#TestCase 9 ////////////// 

 ts.addTestCase(new hobs.TestCase("Test for Child Information Panel")
      .navigateTo(qe.css.url.CSS_URL)

     .click(qe.css.prerequisitesForSuccess.PAGE1_DROPDOWN)
     .asserts.isTrue(function() {
         return hobs.find("input[id$='guideContainer-rootPanel-checkEligibility-applicationStatusPanel-guidedropdownlist__-1_widget']").attr("checked") == "checked";
     })
     .click(qe.css.button.NEXT)
     .click(qe.css.prerequisitesForSuccess.PAGE2_CHECKBOX1)
     .click(qe.css.prerequisitesForSuccess.PAGE2_CHECKBOX2)
     .execSyncFct(function() {
         hobs.find(qe.css.prerequisitesForSuccess.PAGE2_DROPDOWN).attr("selected", "selected")
     })
     .click(qe.css.button.NEXT)
     .click(qe.css.prerequisitesForSuccess.PAGE3_DROPDOWN)
     .click(qe.css.button.NEXT)
     .asserts.isTrue(function() {
         return hobs.find(qe.css.textMsg.PASS_MSG).is(':visible');
     })
     .click(qe.css.button.NEXT)
     .click(".childInfoPanel_nav span:contains(" +qe.css.textMsg.TOPTAB_TITLE2 + ")")
     .asserts.isTrue(function() {
         return hobs.find(".numOfClaim label:contains(" +qe.css.label.NO_OF_CHILDREN + ")").is(':visible');
     })
 )

  ///////////////#TestCase 10 ////////////// 

 ts.addTestCase(new hobs.TestCase("Test for personal Information Panel")
      .navigateTo(qe.css.url.CSS_URL)

     .click(qe.css.prerequisitesForSuccess.PAGE1_DROPDOWN)
     .asserts.isTrue(function() {
         return hobs.find("input[id$='guideContainer-rootPanel-checkEligibility-applicationStatusPanel-guidedropdownlist__-1_widget']").attr("checked") == "checked";
     })

     .click(qe.css.button.NEXT)
     .click(qe.css.prerequisitesForSuccess.PAGE2_CHECKBOX1)
     .click(qe.css.prerequisitesForSuccess.PAGE2_CHECKBOX2)
     .execSyncFct(function(){
         hobs.find(qe.css.prerequisitesForSuccess.PAGE2_DROPDOWN).attr("selected", "selected")
     })

     .click(qe.css.button.NEXT)
     .click(qe.css.prerequisitesForSuccess.PAGE3_DROPDOWN)
     .click(qe.css.button.NEXT)
     .asserts.isTrue(function() {
         return hobs.find(qe.css.textMsg.PASS_MSG).is(':visible');
     })
     .click(qe.css.button.NEXT)
     .click(".paymentInfoPanel_nav span:contains(" +qe.css.textMsg.TOPTAB_TITLE3 + ")")
     .asserts.isTrue(function() {
         return hobs.find(qe.css.label.BANK_NAME).is(':visible')
     })
     .asserts.isTrue(function() {
         return hobs.find(".guidePanelDescription:contains('Please provide')").is(':visible')
     })
 )

  ///////////////#TestCase 11 ////////////// 

 ts.addTestCase(new hobs.TestCase("Test for Fee Payment Panel")
     .navigateTo(qe.css.url.CSS_URL)

     .click(qe.css.prerequisitesForSuccess.PAGE1_DROPDOWN)
     .asserts.isTrue(function() {
         return hobs.find("input[id$='guideContainer-rootPanel-checkEligibility-applicationStatusPanel-guidedropdownlist__-1_widget']").attr("checked") == "checked";
     })

     .click(qe.css.button.NEXT)

     .click(qe.css.prerequisitesForSuccess.PAGE2_CHECKBOX1)

     .click(qe.css.prerequisitesForSuccess.PAGE2_CHECKBOX2)
     .execSyncFct(function() {
         hobs.find(qe.css.prerequisitesForSuccess.PAGE2_DROPDOWN).attr("selected", "selected")
     })
     .click(qe.css.button.NEXT)
     .click(qe.css.prerequisitesForSuccess.PAGE3_DROPDOWN)
     .click(qe.css.button.NEXT)
     .asserts.isTrue(function() {
         return hobs.find(qe.css.textMsg.PASS_MSG).is(':visible');
     })
     .click(qe.css.button.NEXT)

     .click(".makePaymentPanel_nav span:contains(" +qe.css.textMsg.TOPTAB_TITLE4 + ")")
     .asserts.isTrue(function() {
         return hobs.find(qe.css.textMsg.PAYMENT_SUCCESS).is(':visible')
     })

 )

  ///////////////#TestCase 12 ////////////// 

 ts.addTestCase(new hobs.TestCase("Check for the Modal screen")
     .navigateTo(qe.css.url.CSS_URL)

     .click(qe.css.prerequisitesForSuccess.PAGE1_DROPDOWN)
     .asserts.isTrue(function() {
         return hobs.find("input[id$='guideContainer-rootPanel-checkEligibility-applicationStatusPanel-guidedropdownlist__-1_widget']").attr("checked") == "checked";
     })

     .click(qe.css.button.NEXT)

     .click(qe.css.prerequisitesForSuccess.PAGE2_CHECKBOX1)

     .click(qe.css.prerequisitesForSuccess.PAGE2_CHECKBOX2)
     .execSyncFct(function() {
         hobs.find(qe.css.prerequisitesForSuccess.PAGE2_DROPDOWN).attr("selected", "selected")

     })
     .click(qe.css.button.NEXT)
     .click(qe.css.prerequisitesForSuccess.PAGE3_DROPDOWN)
     .click(qe.css.button.NEXT)
     .asserts.isTrue(function() {
        return hobs.find(qe.css.textMsg.PASS_MSG).is(':visible');
     })
     .click(qe.css.button.NEXT)
     .click(".makePaymentPanel_nav span:contains(" +qe.css.textMsg.TOPTAB_TITLE4 + ")")
     .click(qe.css.button.COME_BACK_LATER)
     .asserts.isTrue(function() {
          return hobs.find("div.modal-body p:contains(" + qe.css.textMsg.MODAL_BODY + ")").is(':visible')
     })
 )


  ///////////////#TestCase 13 ////////////// 

 ts.addTestCase(new hobs.TestCase("Modal screen if email address is not filled")
     .navigateTo(qe.css.url.CSS_URL)

     .click(qe.css.prerequisitesForSuccess.PAGE1_DROPDOWN)
     .asserts.isTrue(function() {
         return hobs.find("input[id$='guideContainer-rootPanel-checkEligibility-applicationStatusPanel-guidedropdownlist__-1_widget']").attr("checked") == "checked";
     })

     .click(qe.css.button.NEXT)

     .click(qe.css.prerequisitesForSuccess.PAGE2_CHECKBOX1)

     .click(qe.css.prerequisitesForSuccess.PAGE2_CHECKBOX2)
     .execSyncFct(function() {
         hobs.find(qe.css.prerequisitesForSuccess.PAGE2_DROPDOWN).attr("selected", "selected")

     })
     .click(qe.css.button.NEXT)
     .click(qe.css.prerequisitesForSuccess.PAGE3_DROPDOWN)
     .click(qe.css.button.NEXT)
     .asserts.isTrue(function() {
         return hobs.find(qe.css.textMsg.PASS_MSG).is(':visible');
     })
     .click(qe.css.button.NEXT)
     .click(".makePaymentPanel_nav span:contains(" +qe.css.textMsg.TOPTAB_TITLE4 + ")")
     .click(qe.css.button.COME_BACK_LATER)
     .asserts.isTrue(function() {
         return hobs.find("div.modal-body p:contains(" + qe.css.textMsg.MODAL_BODY + ")").is(':visible')
     })

     .click(qe.css.button.MODAL_SEND_MAIL)
     .asserts.isTrue(function() {
         return hobs.find("div.modal-body p:contains(" + qe.css.validationmsg.MODAL_EMAIL_VALIDATION + ")").is(':visible')
     })
      .click(qe.css.button.MODAL_CLOSE)          

 )

  ///////////////#TestCase 14 ////////////// 

 ts.addTestCase(new hobs.TestCase("Modal screen if email address is filled")
     .navigateTo(qe.css.url.CSS_URL)

     .click(qe.css.prerequisitesForSuccess.PAGE1_DROPDOWN)
     .asserts.isTrue(function() {
         return hobs.find("input[id$='guideContainer-rootPanel-checkEligibility-applicationStatusPanel-guidedropdownlist__-1_widget']").attr("checked") == "checked";
     })

     .click(qe.css.button.NEXT)


     .click(qe.css.prerequisitesForSuccess.PAGE2_CHECKBOX1)


     .click(qe.css.prerequisitesForSuccess.PAGE2_CHECKBOX2)
     .execSyncFct(function() {

         hobs.find(qe.css.prerequisitesForSuccess.PAGE2_DROPDOWN).attr("selected", "selected")


     })
     .click(qe.css.button.NEXT)
     .click(qe.css.prerequisitesForSuccess.PAGE3_DROPDOWN)
     .click(qe.css.button.NEXT)
     .asserts.isTrue(function() {
         return hobs.find(qe.css.textMsg.PASS_MSG).is(':visible');
     })
     .click(qe.css.button.NEXT)
       //Click next on About Applicant Panel 
     .typeInput(qe.css.label.FIRST_NAME,qe.css.testData.FIRST_NAME) 
      .typeInput(qe.css.label.LASTNAME,qe.css.testData.LASTNAME)
      .typeInput(qe.css.label.EMAIL,qe.css.testData.EMAIL)
     .click(".makePaymentPanel_nav span:contains(" +qe.css.textMsg.TOPTAB_TITLE4 + ")")
     .click(qe.css.button.COME_BACK_LATER)
     .asserts.isTrue(function() {
         return hobs.find("div.modal-body p:contains(" + qe.css.textMsg.MODAL_BODY + ")").is(':visible')
     })

     .click(qe.css.button.MODAL_SEND_MAIL)
     .asserts.isTrue(function() {
         return hobs.find(qe.css.textMsg.MODAL_BODY2).is(':visible')
     })


 )
 ///////////////#TestCase 15 ////////////// 

 ts.addTestCase(new hobs.TestCase("Validation check on clicking Submit button w/o filling the mandate fields")
     .navigateTo(qe.css.url.CSS_URL)

     .click(qe.css.prerequisitesForSuccess.PAGE1_DROPDOWN)

     .click(qe.css.button.NEXT)

     .click(qe.css.prerequisitesForSuccess.PAGE2_CHECKBOX1)

     .click(qe.css.prerequisitesForSuccess.PAGE2_CHECKBOX2)
     .execSyncFct(function() {
         hobs.find(qe.css.prerequisitesForSuccess.PAGE2_DROPDOWN).attr("selected", "selected")})
     .click(qe.css.button.NEXT)
     .click(qe.css.prerequisitesForSuccess.PAGE3_DROPDOWN)
     .click(qe.css.button.NEXT)
     .asserts.isTrue(function() {
         return hobs.find(qe.css.textMsg.PASS_MSG).is(':visible');
     })
     .click(qe.css.button.NEXT)
      //Click next on About Applicant Panel          
     .click(qe.css.button.NEXT)
      //Click next  on Child Information Panel          
     .click(qe.css.button.NEXT)
      //Click next on Payment Panel          
     .click(qe.css.button.NEXT)
      //Clic next on Fee Payment Panel          
     .click(qe.css.button.NEXT)
     //Check validation will fire on mandate field.

     .asserts.isTrue(function(){
           hobs.find(qe.css.validationmsg.FIRST_NAME_VALIDATION).is(':visible')})
     .asserts.isTrue(function(){
           hobs.find(qe.css.validationmsg.LASTNAME_VALIDATION).is(':visible')})
     .asserts.isTrue(function(){
           hobs.find(qe.css.validationmsg.CHILD_NAME_VALIDATION).is(':visible')})
      .asserts.isTrue(function(){
           hobs.find(qe.css.validationmsg.BANK_NUMBER_VALIDATION).is(':visible')})
      .asserts.isTrue(function(){
           hobs.find(qe.css.validationmsg.EMAIL_VALIDATION).is(':visible')})
 )

  ///////////////#TestCase 16 ////////////// 

 ts.addTestCase(new hobs.TestCase("Check For payment Process Page-Once Validation is done")
     .navigateTo(qe.css.url.CSS_URL)

     .click(qe.css.prerequisitesForSuccess.PAGE1_DROPDOWN)

     .click(qe.css.button.NEXT)

     .click(qe.css.prerequisitesForSuccess.PAGE2_CHECKBOX1)

     .click(qe.css.prerequisitesForSuccess.PAGE2_CHECKBOX2)
     .execSyncFct(function() {
         hobs.find(qe.css.prerequisitesForSuccess.PAGE2_DROPDOWN).attr("selected", "selected")})
     .click(qe.css.button.NEXT)
     .click(qe.css.prerequisitesForSuccess.PAGE3_DROPDOWN)
     .click(qe.css.button.NEXT)
     .asserts.isTrue(function() {
         return hobs.find(qe.css.textMsg.PASS_MSG).is(':visible');
     })
     .click(qe.css.button.NEXT)
      //Click next on About Applicant Panel 
     .typeInput(qe.css.label.FIRST_NAME,qe.css.testData.FIRST_NAME) 
      .typeInput(qe.css.label.LASTNAME,qe.css.testData.LASTNAME)
      .typeInput(qe.css.label.EMAIL,qe.css.testData.EMAIL)
     .click(qe.css.button.NEXT)
      //Click next  on Child Information Panel 
      .typeInput(qe.css.label.CHILD_NAME,qe.css.testData.CHILD_NAME)          
     .click(qe.css.button.NEXT)
      //Click next on Payment Panel 
      .typeInput(qe.css.label.BANK_NUMBER,qe.css.testData.BANK_NUMBER)          
     .click(qe.css.button.NEXT)
      //Clic next on Fee Payment Panel          
     .click(qe.css.button.NEXT)
     .asserts.isTrue(function(){
         hobs.find(qe.css.textMsg.PAYMENT_SUCCESS).is('visible')})
  )

  ///////////////#TestCase 17 ////////////// 

 ts.addTestCase(new hobs.TestCase("Check end to end Submit flow for child Support")
     .navigateTo(qe.css.url.CSS_URL)

     .click(qe.css.prerequisitesForSuccess.PAGE1_DROPDOWN)

     .click(qe.css.button.NEXT)

     .click(qe.css.prerequisitesForSuccess.PAGE2_CHECKBOX1)

     .click(qe.css.prerequisitesForSuccess.PAGE2_CHECKBOX2)
     .execSyncFct(function() {
         hobs.find(qe.css.prerequisitesForSuccess.PAGE2_DROPDOWN).attr("selected", "selected")})
     .click(qe.css.button.NEXT)
     .click(qe.css.prerequisitesForSuccess.PAGE3_DROPDOWN)
     .click(qe.css.button.NEXT)
     .asserts.isTrue(function() {
         return hobs.find(qe.css.textMsg.PASS_MSG).is(':visible');
     })
     .click(qe.css.button.NEXT)
      //Click next on About Applicant Panel 
     .typeInput(qe.css.label.FIRST_NAME,qe.css.testData.FIRST_NAME) 
      .typeInput(qe.css.label.LASTNAME,qe.css.testData.LASTNAME)
      .typeInput(qe.css.label.EMAIL,qe.css.testData.EMAIL)
     .click(qe.css.button.NEXT)
      //Click next  on Child Information Panel 
      .typeInput(qe.css.label.CHILD_NAME,qe.css.testData.CHILD_NAME)          
     .click(qe.css.button.NEXT)
      //Click next on Payment Panel 
      .typeInput(qe.css.label.BANK_NUMBER,qe.css.testData.BANK_NUMBER)          
     .click(qe.css.button.NEXT)
      //Clic next on Fee Payment Panel          
     .click(qe.css.button.NEXT)
     .asserts.isTrue(function(){
         hobs.find(qe.css.textMsg.PAYMENT_SUCCESS).is('visible')})
     .wait(4000) 
     .asserts.isTrue(function(){
         hobs.find(qe.css.textMsg.SUBMISSION_SUCCESS)})   
     .click(qe.css.button.SUBMIT)
     .asserts.isTrue(function(){
        hobs.find(qe.hm.textMsg.THANKYOU_MSG).is(':visible')})

  )

   ///////////////#TestCase 18 ////////////// 

 ts.addTestCase(new hobs.TestCase("Check Child Support flow from gov site ")
    .navigateTo(qe.css.url.GO_TO_MAIN_SITE_URL)
    .click(qe.css.button.CHILD_SUPPORT)
    .wait(3000)
    .click(qe.css.button.CHECK_YOUR_ELIGIBILITY)
    .asserts.location(qe.css.url.CSS_ASSERT_URL, true)

)

  //For esign the Application
///////////////#TestCase 19 /////////////
ts.addTestCase(new hobs.TestCase("1: Test to add email ID for Admin User")

      .navigateTo(qe.css.url.EMAIL_URL)
      .click(qe.css.label.ADMINISTRATOR)
      .wait(2000)
      .execSyncFct(function () {
			hobs.find(qe.css.label.ESIGN_EMAIL).val(''); })
      .typeInput(qe.css.label.ESIGN_EMAIL,qe.css.testData.ESIGN_EMAIL)
      .click(qe.css.button.SAVE_ESIGN_EMAIL)
        )

///////////////#TestCase 20 /////////////
ts.addTestCase(new hobs.TestCase("2: Test to add API Key for Esign")

        .navigateTo(qe.css.url.ESIGN_URL)
        .click(qe.css.button.EDIT_KEY)
        .typeInput(qe.css.label.ESIGN_PASSWORD,qe.css.testData.ESIGN_KEY)
        .click(qe.css.button.CONNECT_ESIGN,{delayAfter:5000})
        .wait(5000)
        .asserts.isTrue(function() {
			return hobs.find("span:contains(Success)").length >0
		})

        .click(qe.css.button.ESIGN_CLOSE)
        .execSyncFct(function() {
             hobs.context().window.CQ.cloudservices.getEditOk().enable() })

        .click(qe.css.button.ESIGN_OK)

  )
///////////////#TestCase 21 /////////////

  ts.addTestCase(new hobs.TestCase("Check esign Flow")
     .navigateTo(qe.css.url.CSS_URL)
                  .execSyncFct(function(){
      reviewPanel=hobs.context().window.guideBridge.resolveNode(qe.css.selectors.REVIEW_PANEL)
      reviewPanel.visible="true"
       }) 
    .click(qe.css.prerequisitesForSuccess.PAGE1_DROPDOWN)

     .click(qe.css.button.NEXT)

     .click(qe.css.prerequisitesForSuccess.PAGE2_CHECKBOX1)

     .click(qe.css.prerequisitesForSuccess.PAGE2_CHECKBOX2)
     .execSyncFct(function() {
         hobs.find(qe.css.prerequisitesForSuccess.PAGE2_DROPDOWN).attr("selected", "selected")})
     .click(qe.css.button.NEXT)
     .click(qe.css.prerequisitesForSuccess.PAGE3_DROPDOWN)
     .click(qe.css.button.NEXT)
     .asserts.isTrue(function() {
         return hobs.find(qe.css.textMsg.PASS_MSG).is(':visible');
     })
     .click(qe.css.button.NEXT)
      //Click next on About Applicant Panel 
     .typeInput(qe.css.label.FIRST_NAME,qe.css.testData.FIRST_NAME) 
      .typeInput(qe.css.label.LASTNAME,qe.css.testData.LASTNAME)
      .typeInput(qe.css.label.EMAIL,qe.css.testData.EMAIL)
     .click(qe.css.button.NEXT)
      //Click next  on Child Information Panel 
      .typeInput(qe.css.label.CHILD_NAME,qe.css.testData.CHILD_NAME)          
     .click(qe.css.button.NEXT)
      //Click next on Payment Panel 
      .typeInput(qe.css.label.BANK_NUMBER,qe.css.testData.BANK_NUMBER)          
     .click(qe.css.button.NEXT)
      //Clic next on Fee Payment Panel          
     .click(qe.css.button.NEXT)
     .asserts.isTrue(function(){
         hobs.find(qe.css.textMsg.PAYMENT_SUCCESS).is('visible')})
     .wait(15000)
     .asserts.isTrue(function() { return hobs.context().window.document.getElementById('signable_pdf').src.startsWith("https://secure")})

                 )      


/*********Child Support Application Ends*********/
  window.testsuites.GovTestSuite.add(ts);

  }(window.hobs, window.hobs.qe))
