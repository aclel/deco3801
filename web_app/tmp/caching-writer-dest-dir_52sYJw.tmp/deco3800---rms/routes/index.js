define('deco3800---rms/routes/index', ['exports'], function (exports) {

	'use strict';

	exports['default'] = Ember.Route.extend({
		model: function() {
			// SEMESTER 2 - use this code to hook up with the location of your server
			// return Ember.RSVP.hash({
			// 	readings: $.get('/api/v1/readings'),
			// 	sensor: $.get('/api/v1/sensor')
			// });


			//but for now have some dummy data
			return [
				{
					readingID: 1,
					buoy: 1,
					timestamp: 1430626500,
					lat: -27.44613423,
					lng: 153.07834625,
					readings : {
						1: 30,
						2: 40,
						3: 50,
						4: 60
					}
				}, {
					readingID: 2, 
					buoy: 2,
					timestamp: 1430712900,
					lat: -27.42693772,
					lng: 153.20674896,
					readings : {
						1: 30,
						2: 40,
						3: 50,
						4: 60
					}
				}, {
					readingID: 3, 
					buoy: 3,
					timestamp: 1430712900,
					lat: -27.491475, 
					lng: 153.006655,
					readings : {
						1: 30,
						2: 40,
						3: 50,
						4: 60
					}
				}, {
					readingID: 4, 
					buoy: 4,
					timestamp: 1430712900,
					lat: -27.400357, 
					lng: 153.177995,
					readings : {
						1: 30,
						2: 40,
						3: 50,
						4: 60
					}
				}
			];

			// sensors [{
			// 	1: {
			// 		name: 
			// 	}
			// }];
		}
	});

});