import Ember from 'ember';

export default Ember.Controller.extend({
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
