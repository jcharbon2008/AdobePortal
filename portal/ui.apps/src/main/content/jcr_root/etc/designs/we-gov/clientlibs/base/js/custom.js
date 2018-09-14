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
$(function(){

    		var width = $(window).width(); // window width variable for global check
			
			// For field level help
			$('.help-tip').popover({
				content: function(){return $(this).parent().next().html();},
				placement: 'right',
				html:true,
				trigger: 'click',
				template:'<div class="popover"><div class="arrow"></div><div class="popover-content"></div></div>'
			}).click(function(e) {
				$('.help-tip').popover('hide');
				$('#help').popover('hide');
				if($(this).next('.popover').css("opacity") == 0){
					if (width > 767) {
						$(this).popover('show');
					} else {
						$(this).parent().next().slideToggle('500');
						$('.popover').hide();
					}
					$('.section-help').slideUp('500', function(){
						$('.help-slide').removeClass('activated');
					});
				}
				var helpFooterDistance = $(this).offset().top-$('#footer').offset().top;
				var popoverHeight = $(this).next().height();
				if(popoverHeight > Math.abs(helpFooterDistance)){
					$(this).next().css({top:helpFooterDistance});
					$(this).next().children('.arrow').css({top:'82%'});
				}else{
					if($(this).next().height() < 100 ){
						$(this).next().css({top:'-14px'});
						$(this).next().children('.arrow').css({top:'19%'});
					}else{
						$(this).next().css({top:'-12px'});
						$(this).next().children('.arrow').css({top:'8%'});
					}
				}
				e.preventDefault();
			});
			// For field level help

			// For section level help
			$('.help-slide').on('click', function(){
				$('.help-tip').popover('hide');
				$('.field-help').slideUp('500');
				$('.section-help').slideToggle('500', function(){
					if($(this).is(":visible")){
						$('.help-slide').addClass('activated');
					}else{
						$('.help-slide').removeClass('activated');
					}
				});
			});
			// For section level help

			// For form level help
			$('.form-help').popover({
				content: function(){return $(this).parent().next().html();},
				title: 'Help <button type="button" class="close" data-dismiss="popover" aria-hidden="true">&times;</button>',
				placement: 'bottom',
				html:true,
				trigger: 'click',
				template:'<div class="popover form-help"><div class="arrow"></div><h3 class="popover-title text-upper"></h3><div class="popover-content"></div></div>'
			}).click(function(e) {
				//$('.form-horizontal .fade.in').css('opacity', 0);
				$('.help-tip').popover('hide');
                $('.need-link').popover('hide');
				$('.section-help').slideUp('500', function(){
					$('.help-slide').removeClass('activated');
				});
				var posLeft = $(this).next().position().left*2;
				//if(Math.abs(posLeft) < 200){
				//	$(this).next().css({left:posLeft});
				//}
				$(this).next().css({left:'auto', right:0});
				e.preventDefault();
			});
			// For form level help
			

			// For user info popup
			$('.user').popover({
				content: function(){return $(this).parent().next().html();},
				title: 'User',
				placement: 'bottom',
				html:true,
				trigger: 'click',
				template:'<div class="popover user-info"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
			}).click(function(e) {
				$('.help-tip').popover('hide');
				$('.section-help').slideUp('500', function(){
					$('.help-slide').removeClass('activated');
				});
				var posLeft = $(this).next().position().left*2;
				//if(Math.abs(posLeft) < 200){
				//	$(this).next().css({left:posLeft});
				//}
				$(this).next().css({left:'auto', right:0});
				e.preventDefault();
			});

			// For user info popup		

			// For What you need...
			$('.need-link').popover({
				content: function(){return $('.need-text').html();},
				title: '',
				placement: 'bottom',
				html:true,
				trigger: 'click',
				template:'<div class="popover need-popup"><div class="arrow"></div><div class="popover-content"></div></div>'
			}).click(function(e) {
				//$('.form-horizontal .fade.in').css('opacity', 0);
				if(!$(this).hasClass('clicked')){
					$(this).addClass('clicked');
				}else{
					$(this).removeClass('clicked');
				}
				$('.form-help').popover('hide');
				$('.help-tip').popover('hide');
				$('.section-help').slideUp('500', function(){
					$('.help-slide').removeClass('activated');
				});				
				if(width < 480 ){
					$(this).next().css({left:'-65px', right:'0%'});

				}else if(width < 768 ){
					$(this).next().css({left:'auto', right:'50%'});
				}else{
					$(this).next().css({left:'auto', right:0});
				}
				e.preventDefault();
			});
			// For What you need...
			
			// to hide any other field help on focus to a different field
			$('.form-control').on('focus', function(){
				if($(this).parent().parent().find('.in').length == 0){
					$('.help-tip').popover('hide');
				}
				if(!$(this).parent().parent().find('.field-help').is(":visible")){
					$('.field-help').slideUp('500');
				}
				$('.section-help').slideUp('500', function(){
					$('.help-slide').removeClass('activated');
				});
			});
			// to hide any other field help on focus to a different field

			// closing form help popover			
			$('html').on('click', '[data-dismiss="popover"]', function (e) {
				$('.form-help').popover('hide');
				e.preventDefault();
			});			
			// closing form 
			
			// Detail steps icon click
			
			$('#detail_click').on('click', function(){
				$('.help-tip').popover('hide');
				$('.section-help').slideUp('500', function(){
					$('.help-slide').removeClass('activated');
				});
				$('.toggle-menu').slideDown('500');
				$('.help-iphone-text').html('').css({height:'0'});
			});
			
			// Detail steps icon click
			
			// For form level help for iPhone
			$('.help-iphone a, .menu-iphone a').on('click', function(){

				if($('.help-iphone-text').html().length > 0 ){
					$('.toggle-menu').slideDown('500');
					$('.menu-iphone').css({visibility: 'hidden', height:'0'});
					$('.help-iphone-text').html('').css({height:'0'});
				}else{
					$('.help-iphone-text').html($('.form-help-text').html()).css({height:'225px'});
					//$('.help-iphone-text').slideDown('500');
					$('.toggle-menu').slideUp('500');
					$('.menu-iphone').css({visibility: 'visible', height:'100%'});
				}
			});
			// For form level help for iPhone
			

			// for terms modal
			$('.modal').modal({
				show: false,
				keyboard: false,
				backdrop: 'static'
			});
			// for terms modal

    		// for demo modal
			$('#demo_modal').modal({
				show: false,
				keyboard: false,
				backdrop: 'static'
			});
			// for demo modal

			// for error modal
			$('#error_modal').modal({
				show: true,
				keyboard: false,
				backdrop: 'static'
			});
			// for error modal

			/** closing error modal **/

			$('#error_modal a').on('click', function(){
				$('#error_modal').modal('hide');
			});

			/** closing error modal **/


			// for screen scroll
			$('.screen-toggle').removeClass('hidden');
			$(window).scroll(function () {
			   if ($(window).scrollTop() == $(document).height() - $(window).height()) {
				   $('.screen-toggle').addClass('hidden');
			   }
			   else if ($(window).scrollTop() < $(document).height() - $(window).height()) {
				   $('.screen-toggle').removeClass('hidden');
			   }
			});
			// for screen scroll

			 	 
			//Highlighting Active link on Navigation bar

              function stripTrailingSlash(str) {

                return str;
              }
            
              var url = window.location.pathname;  
              var activePage = stripTrailingSlash(url);


              $('#topnav>li').children().each(function(){  
                var currentPage = stripTrailingSlash($(this).attr('href'));
                if (activePage == currentPage) {
                  $(this).parent().addClass('active'); 
                } 
              });

                $('.navigator-toggle').on('click', function () {
                    var actives = $('.collapse.in');
                    var hasData;

                    if (actives && actives.length) {
                        hasData = actives.data('collapse')
                        if (hasData && hasData.transitioning) return
                        actives.collapse('hide')
                        hasData || actives.data('collapse', null)
                    }
                })


                $('#detail_click').on('click', function () {
                    var actives = $('.collapse.in');
                    var hasData;

                    if (actives && actives.length) {
                        hasData = actives.data('collapse')
                        if (hasData && hasData.transitioning) return
                        actives.collapse('hide')
                        hasData || actives.data('collapse', null)
                    }
                })

                $('#menu_click').on('click', function () {
                    var actives = $('.collapse.in');
                    var hasData;

                    if (actives && actives.length) {
                        hasData = actives.data('collapse')
                        if (hasData && hasData.transitioning) return
                        actives.collapse('hide')
                        hasData || actives.data('collapse', null)
                    }
                })


                //Adding Navigation behavior

           $('#topnav').each(function() {
    
                function getSubnav(ele) {
                    if (ele.nodeName.toLowerCase() == 'li') {
                        var subnav = $('> ul', ele);
                        return subnav.length ? subnav[0] : null;
                    } else {
                        return ele;
                    }
                }
    
                function hide() {
                    var subnav = getSubnav(this);
                    if (subnav) {
                        $(subnav).hide();
                    }
                }
    
                function show() {
                    var subnav = getSubnav(this);
                    if (subnav) {
                        $(subnav).show();
                    }
                }
    
                $('ul, li', this).hover(show, hide);
                $('li', this).hover(
                        function() {
                            $(this).addClass('hover');
                        },
                        function() {
                            $(this).removeClass('hover');
                        }
                        );
            });



});
