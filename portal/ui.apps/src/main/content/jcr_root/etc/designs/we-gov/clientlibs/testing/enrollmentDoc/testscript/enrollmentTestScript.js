;(function(hobs,qe) {


/*Test Suite*/
 var ts= new hobs.TestSuite("We Gov-Enrollment Test Script", {
     path: "/etc/designs/we-gov/clientlibs/testing/css/testscript/enrollmentTestScript.js",
     register: false
 })

/*********Enrollmet Document Starts*********/


  ///////////////#TestCase 1 /////////////

  ts.addTestCase(new hobs.TestCase("Test Enrollment Document navigation")
     .navigateTo(qe.enroll.url.ENROLL_URL)
     .asserts.location(qe.enroll.url.ENROLL_ASSERT_URL, true)
 )


 ///////////////#TestCase 2 ///////////// 

 ts.addTestCase(new hobs.TestCase("Test for child support Success Case")
     .navigateTo(qe.enroll.url.ENROLL_URL)
                .asserts.isTrue(function(){
                    hobs.find(qe.enroll.label.REF_ID).is(':visible')
                    hobs.find(qe.enroll.label.BENEFIT).is(':visible')
                    hobs.find(qe.enroll.label.DATE_OF_INITATION).is(':visible')
                    hobs.find(qe.enroll.label.PAYMENT_AMOUNT).is(':visible')
                    hobs.find(qe.enroll.label.PAYMENT_FREQ).is(':visible')
                    hobs.find(qe.enroll.label.PAYMENT_AMOUNT).is(':visible')
                    hobs.find(qe.enroll.label.PAYMENT_FREQ).is(':visible')
                    hobs.find(qe.enroll.textMsg.ENROLL_TEXT2).is(':visible')
                    hobs.find(qe.enroll.textMsg.FOOTER_MSG).is(':visible')
                             })

)
/*********Enrollment Document Ends*********/
  window.testsuites.GovTestSuite.add(ts);

  }(window.hobs, window.hobs.qe))
