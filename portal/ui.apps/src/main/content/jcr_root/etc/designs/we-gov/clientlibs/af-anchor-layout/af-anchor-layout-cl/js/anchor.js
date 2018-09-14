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
(function($) {
    var ancor_scroll = function(anc) {

        if (location.pathname.replace(/^\//, '') == anc.pathname.replace(/^\//, '') && location.hostname == anc.hostname) {

            var target = $(anc.hash);

            target = target.length ? target : $('[name=' + anc.hash.slice(1) + ']');

            if (target.length) {

                if (navigator.userAgent.match(/(iPhone)/)) {
                    var scroll = target.offset().top - 40;
                    window.scrollTo(0, scroll);

                } else {

                    $('body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {});
                }

                return false;

            }
        }
    };

    $(document).on('click.guidetab.data-api', '[data-guide-toggle$="tab"].nav_anchor_layout',
        function(e) {
            ancor_scroll(this);

        }).on('keydown.guidetab.data-api', '[data-guide-toggle$="tab"].nav_anchor_layout',
        function(e) {
            if (e.which === 32) {
                ancor_scroll(this);
            }
        });

    $('body').on('click touchstart', '.data-anchor-nav-toggler',
        function() {
            var toggler = $(this),
                navList = $(this).parents('.guide-tab-stamp-list'),
                panelContainer = navList.parent().children('.anchor-panel-container');
            if (toggler.hasClass('collapse-anchor')) {
                toggler.removeClass('collapse-anchor');
                toggler.addClass('expand-anchor');
                navList.removeClass('col-md-2 col-sm-2');
                navList.addClass('col-md-1 col-sm-1 anchor-navlist-toggle');
                panelContainer.removeClass('col-md-10 col-sm-10');
                panelContainer.addClass('col-md-11 col-sm-11');
            } else {
                toggler.removeClass('expand-anchor');
                toggler.addClass('collapse-anchor');
                navList.removeClass('col-md-1 col-sm-1 anchor-navlist-toggle');
                navList.addClass('col-md-2 col-sm-2');
                panelContainer.removeClass('col-md-11 col-sm-11');
                panelContainer.addClass('col-md-10 col-sm-10');
            }


        });

    $('body').on('click touchstart', '[data-anchor-nav-scroller]',
        function() {
            var navScroller = $(this),
                direction = navScroller.data('anchorNavScroller'),
                scrollDiv = navScroller.parent().siblings('.anchor-nav-list-container'),
                currPos = scrollDiv.scrollTop(),
                newPos;
            if (direction === 'up') {
                newPos = currPos - 100;
                if (newPos <= 0) {
                    $('[data-anchor-nav-scroller="up"]').addClass('hideScroll');
                }
                scrollDiv.scrollTop(newPos);
                $('[data-anchor-nav-scroller="down"]').removeClass('hideScroll');
            } else if (direction === 'down') {
                var contentHeight = $(scrollDiv.children('ul')).height();
                newPos = currPos + 100;
                if (newPos >= contentHeight) {
                    $('[data-anchor-nav-scroller="down"]').addClass('hideScroll');
                }
                scrollDiv.scrollTop(newPos);
                $('[data-anchor-nav-scroller="up"]').removeClass('hideScroll');
            }
        });

    $(window).on('scroll load resize', function() {
        var scrollDiv = $('.anchor-nav-list-container'),
            sdivHeight = scrollDiv.height(),
            contentHeight = $(scrollDiv.children('ul')).height();
        $('.anchorScrollContainer').removeClass('hideScroll');
        $('[data-anchor-nav-scroller="up"]').removeClass('hideScroll');
        $('[data-anchor-nav-scroller="down"]').removeClass('hideScroll');
        if (sdivHeight >= contentHeight) {
            $('[data-anchor-nav-scroller="up"]').addClass('hideScroll');
            $('[data-anchor-nav-scroller="down"]').addClass('hideScroll');
            $('.anchorScrollContainer').addClass('hideScroll');
        } else if (scrollDiv.scrollTop() === 0) {
            $('[data-anchor-nav-scroller="up"]').addClass('hideScroll');
        } else if ((scrollDiv.scrollTop() + sdivHeight) === contentHeight) {
            $('[data-anchor-nav-scroller="down"]').addClass('hideScroll');
        }




    });



}(window.jQuery));




$(function() {



    enableScrollSpy = function() {
        setTimeout(function() {
            $('body').scrollspy({
                target: ".anchor-nav-container"
            });
            $('body').scrollspy('refresh');
        }, 500);
        $('.anchor-nav-container.guide-header-bar > ul li.active').addClass("title-active");
    }

    $('[data-guide-toggle="accordion-tab"]').on('click', function() {
        setTimeout(function() {
            $('body').scrollspy({
                target: '.anchor-nav-container'
            });
            $('body').scrollspy('refresh');
        }, 500);

    });


    $(".anchor-nav-list-container > ul li").on('activate.bs.scrollspy', function() {



        $('.title-active').removeClass('title-active');
        $('.anchor-nav-container.guide-header-bar ' + '#' + this.id).addClass('title-active');


    });

    $(".anchor-nav-list-container > ul li > ul li").on('activate.bs.scrollspy', function() {


        $('.title-active').removeClass('title-active');
        var id = $('#' + this.id).parent().parent().attr('id');
        $('.anchor-nav-container.guide-header-bar ' + '#' + id).addClass('title-active');


    });


    window.addEventListener("elementVisibleChanged", function(evnt) {
        enableScrollSpy();
    });


});
