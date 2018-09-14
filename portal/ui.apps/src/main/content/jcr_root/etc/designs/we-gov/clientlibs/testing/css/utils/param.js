;(function(hobs, qe) {

    qe.css = {

        selectors:{

            REVIEW_PANEL           :"guide[0].guide1[0].guideRootPanel[0].applicationFormRoot[0].formPaymentPanel[0].signPanel[0]"
        },

        label:
        {

            FIRST_NAME              :".basicInfoPanel2 .firstName input",
            CHILD_NAME              :".childRepeatablePanel .firstName input",
            BANK_NUMBER             :".bankAccountNumber input",
            EMAIL                   :".emailAddress input",
            LASTNAME                :".lastName input",
            NO_OF_CHILDREN          :"How many children do you want to claim Child Support Services for?",
            BANK_NAME               :".bankName label:contains('Bank name')",
            ESIGN_PASSWORD          :"input[type='password']",
            ESIGN_EMAIL             :"[name$='email']",
            ADMINISTRATOR           :"coral-td-label:contains(Administrator)"
        },
        url:
        {
            CSS_URL                 :"/content/forms/af/we-gov/child-support/css.html?wcmmode=disabled",
            CSS_ASSERT_URL          :"/content/forms/af/we-gov/child-support/css.html",
            GO_TO_MAIN_SITE_URL     :"/content/we-gov/en.html",
            EMAIL_URL               :"/libs/granite/security/content/useradmin.html" ,
            ESIGN_URL               :"/etc/cloudservices/echosign/aem-forms-referencesite-sign.html"

        },
        button:
        {

            NEXT                    :"#guideContainer-toolbar-nextitemnav___widget",
            COME_BACK_LATER         :"div.saveGuideDraft button span:contains('Come back later')",
            START_AGAIN             :".fileattachmentlisting > span.iconButton-label:contains('Start again')" ,
            GO_TO_MAIN_SITE         :".goToMainSite span:contains('Go to main site')",
            SUBMIT                  :".guidebutton .submit" ,
            CHILD_SUPPORT           :"#topnav > li:nth-child(3) > a",
            CHECK_YOUR_ELIGIBILITY  :"#main > div.top_container > div > div.image.parbase.section > div > div.text-overlay.heroTextContainer > input",
            MODAL_SEND_MAIL         :".modal-footer button:contains('Send Email')",
            MODAL_CLOSE             :".close",
            CONNECT_ESIGN           :"button:contains(Connect to Adobe Document Cloud eSignature services)",
            EDIT_KEY                :"button:contains('Edit')",
            ESIGN_OK                :"button:contains(OK):eq(0)",
            ESIGN_CLOSE             :".x-tool.x-tool-close:eq(1)",
            SAVE_ESIGN_EMAIL        :"#shell-propertiespage-saveactivator"
            




        },
        textMsg:
        {
            PASS_MSG                :".passMsg p:contains('You are eligible')",
            FAIL_MSG                :".failMsg p:contains('It seems that you might not be eligible for receiving Child Support Services')" ,
            MODAL_BODY              :"We have saved a draft of the application filled by you." ,
            TOPTAB_TITLE1           :"About Applicant",
            TOPTAB_TITLE2           :"Child Information",
            TOPTAB_TITLE3           :"Payment",
            TOPTAB_TITLE4           :"Fee Payment",
            THANKYOU_MSG            :".thanks-page p:contains('Thank You for submitting Application for Child Support Services.Please note down your Application Tracking Number')",
            PAYMENT_SUCCESS         :".paymentFeeMessage label:contains('Payment of $25 fee is compulsory for your application to get processed.')",
            SUBMISSION_SUCCESS      :".paymentMsg p p:contains('Proceed to application submission.')",
            MODAL_BODY2             :"div.modal-body p:contains('We have sent an email to you with the link to your application draft.')"

        },
        validationmsg:
        {
            MODAL_EMAIL_VALIDATION         :"Please provide your email address to send email with the link to your application draft." ,
            FIRST_NAME_VALIDATION          :".basicInfoPanel2 .firstName input guideFieldError:contains('This is a required field.')",
            CHILD_NAME_VALIDATION          :"childRepeatablePanel .firstName input guideFieldError:contains('This is a required field.')",
            BANK_NUMBER_VALIDATION         :".bankAccountNumber input guideFieldError:contains('This is a required field.')",
            EMAIL_VALIDATION               :".emailAddress input guideFieldError:contains('This is a required field.')",
            LASTNAME_VALIDATION            :".lastName input guideFieldError:contains('This is a required field.')"

        },
        prerequisitesForSuccess:
        {
            PAGE1_DROPDOWN:   "#guideContainer-rootPanel-checkEligibility-applicationStatusPanel-guidedropdownlist__-1_widget",
            PAGE2_CHECKBOX1:  "div.guideCheckBoxItem.childLivingInGX input[type='checkbox']",
            PAGE2_CHECKBOX2:  "div.guideCheckBoxItem.selfLivingInGX input[type='checkbox']",
            PAGE2_DROPDOWN :  "select[name$='page2panel-caringParty___jqName'] option[value='You']" ,
            PAGE3_DROPDOWN:   "#guideContainer-rootPanel-checkEligibility-childAgeStatus__-1_widget"

        },

        prerequisitesForFailure:
        {
            PAGE2_DROPDOWN :"select[name$='page2panel-caringParty___jqName'] option[value='The other party has sole custody']"
        },
        testData:
        {

            FIRST_NAME              :"Sarah",
            CHILD_NAME              :"Michael",
            BANK_NUMBER             :"12WXC34",
            EMAIL                   :"abc@gmail.com",
            LASTNAME                :"Rose",
             ZIPCODE                :"95101" ,
            CITY                    :"San Jose",
            STATE                   :"CA",
            ESIGN_KEY               :"X98DSEK5U2Q2IXX",
            ESIGN_EMAIL             :"hug76386@adobe.com"
        }







    };

}(window.hobs, window.hobs.qe))
