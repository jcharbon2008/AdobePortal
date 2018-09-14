/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2014 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by all applicable intellectual property 
* laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/
$(function () {
    var contentScrollIndicator = function () {
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
            $('[data-content-scroller="down"]').addClass('hideContentScroller');
        } else if ($(window).scrollTop() < $(document).height() - $(window).height()) {
            $('[data-content-scroller="down"]').removeClass('hideContentScroller');
        }

		if ($(window).scrollTop() == 0) {
            $('[data-content-scroller="up"]').addClass('hideContentScroller');
        } else {
            $('[data-content-scroller="up"]').removeClass('hideContentScroller');
        }
    };

    //this should be changed back to $(document).ready(scrollIndicator) instead of windows onload,
    //once jquery version is bumped
    $(window).on('load scroll resize', contentScrollIndicator);

    $('[data-content-scroller="up"]').on("click", function () {
        $('html,body').animate({ scrollTop: 0 }, 'slow');
    });

    $('[data-content-scroller="down"]').on("click", function () {
        var scrollAmount = $(document).height() - $(window).height();
        $("html, body").animate({ scrollTop: scrollAmount }, 'slow');
    });

});
