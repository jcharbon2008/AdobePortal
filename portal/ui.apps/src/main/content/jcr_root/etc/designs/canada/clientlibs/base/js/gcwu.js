/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * v4.0.26 - 2017-08-15
 *
 */
!function () {
	"use strict";
	window["wb-data-ajax"] = {
		corsFallback: function (a) {
			return a.url = a.url.replace(".html", ".htmlp"), a
		}
	}
}(jQuery, wb);