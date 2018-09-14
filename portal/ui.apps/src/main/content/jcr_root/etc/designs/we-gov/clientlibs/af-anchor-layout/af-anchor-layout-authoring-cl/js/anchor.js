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
(function ($) {
    var ancor_scroll = function(anc) {

			    if (location.pathname.replace(/^\//, '') == anc.pathname.replace(/^\//, '') && location.hostname == anc.hostname) {

			      var target = $(anc.hash);			      
			      target = target.length ? target : $('[name=' + anc.hash.slice(1) + ']');

				  if (target.length) {

				          $('html,body').animate({
				              scrollTop: target.offset().top
				          }, 1000, function(){});

                          return false;

				  }
				}
			};

    $(window).on("guideDomModified", function(e) {
		//re-registering listeners

        $('[data-spy="affix"]').each(function () {
              var $spy = $(this)
              var data = $spy.data()

              data.offset = data.offset || {}

              if (data.offsetBottom) data.offset.bottom = data.offsetBottom
              if (data.offsetTop)    data.offset.top    = data.offsetTop

              $spy.affix(data)
            });

        $(document).off('click.guidetab.data-api').off('keydown.guidetab.data-api');
        $(document).on('click.guidetab.data-api', '[data-guide-toggle$="tab"].nav_anchor_layout',
            function (e) {
                       ancor_scroll(this);
            }).on('keydown.guidetab.data-api', '[data-guide-toggle$="tab"].nav_anchor_layout',
            function (e) {
                if (e.which === 32) {
                    ancor_scroll(this);
                }
            });
    });


}(window.jQuery));
