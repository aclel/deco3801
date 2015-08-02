define('deco3800---rms/routes/config', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		model: function() {
			// SEMESTER 2 - use this code to hook up with the location of your server
			// return Ember.RSVP.hash({
			// 	sensor: $.get('http://syrah.timhadwen.com:33332/sensor_types')
			// });

			// dummy data version
			return {
				sensors: [
					Ember['default'].Object.create({
						"ID":0,
						"new":0,
						"colour":99,
						"better_low":0,
						"name":"Battery Level",
						"description":"The % battery remaining of the buoy",
						"unit":"Percent",
						"is_public":1,
						"bound_upper":100,
						"bound_lower":0
					}),
					Ember['default'].Object.create({
						"ID":1,
						"new":0,
						"colour":888,
						"better_low":1,
						"name":"Internal Humidity",
						"description":"The temperature in celcius currently inside the buoy",
						"unit":"Percent",
						"is_public":0,
						"bound_upper":0,
						"bound_lower":100
					}),
					Ember['default'].Object.create({
						"ID":2,
						"new":1,
						"colour":16711680,
						"better_low":1,
						"name":"Turbidity",
						"description":"Indicates how dirty the water is",
						"unit":"NTU",
						"is_public":1,
						"bound_upper":10000,
						"bound_lower":0
					})
				],
				buoys: [
					Ember['default'].Object.create({
						"ID": 1,
						"name": "Buoy 1",
						"last_ping": 1430626500
					}),
					Ember['default'].Object.create({
						"ID": 2,
						"name": "Buoy 2",
						"last_ping": 1430626500
					}),
					Ember['default'].Object.create({
						"ID": 3,
						"name": "Buoy 3",
						"last_ping": 1430626500
					}),
					Ember['default'].Object.create({
						"ID": 4,
						"name": "Buoy 4",
						"last_ping": 1430626500
					}),
					
				]
			}

			//dummy data version
			// return [
			// 	{
			// 		sensor: 1,
			// 		name: 'temperature',
			// 		description: 'The temperature in celcius currently inside the buoy',
			// 		metric: 'degrees'
			// 	}, {
			// 		sensor: 2,
			// 		name: 'turbidity',
			// 		description: 'How dirty the water is',
			// 		metric: 'g/ml'
			// 	}
				
			// ];
		}
	});

});