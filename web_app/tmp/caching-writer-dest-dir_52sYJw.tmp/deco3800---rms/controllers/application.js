define('deco3800---rms/controllers/application', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({
		actions: {

			// Styles the active menu element
			changeActiveMenu: function(a) {
				var element = $("#" + a)
				// console.log(element);
				$(".menuLink").removeClass("active");
				element.addClass("active");
			}
		}
	});

});