;(function(hobs, qe) {

    qe.enroll = {

        label:
        {
            REF_ID: ".refIDLabel p:contains('Reference ID')",
            BENEFIT : ".benefitsForLabel p:contains('Benefit for the care of')",
            DATE_OF_INITATION: ".initiationDateLabel p:contains('Date of initiation')",
            PAYMENT_AMOUNT: ".creditAccountLabel p:contains('Payment credit account')",
            PAYMENT_FREQ: ".paymentFrequencyLabel p:contains('Payment frequency')",
            PAYMENT_AMOUNT: ".paymentAmountLabel p:contains('Payment amount')"

        },
        url:
        {
            ENROLL_URL                 :"/content/forms/af/we-gov/child-support/css-enrollment-document.html?wcmmode=disabled&useTestData=1",
            ENROLL_ASSERT_URL          :"/content/forms/af/we-gov/child-support/css-enrollment-document.html"

        },

        textMsg:
        {


            ENROLL_TEXT2:".documentDetailsBlock .documentText:contains('You have been enrolled for receiving benefits of Child Support Services by the state of GX. Following are the details of the same.')",
            FOOTER_MSG :"div[id='footerMsg']:contains('If you have questions or find any discrepancies in your Enrollment Document, please contact us via email or our customer service helpline.')",
            EMAIL_FOOTER:"div[id='emailFooter'].img[src='/etc/designs/we-gov/images/mailIcon.png'])",
            PHONE_FOOTER:"div[id='phoneFooter'].img[src='/etc/designs/we-gov/images/callIcon.png'])"
        }

    };

}(window.hobs, window.hobs.qe))
