define('deco3800---rms/components/maps-view', ['exports', 'ember', 'deco3800---rms/templates/components/maps-view'], function (exports, Ember, layout) {

	'use strict';

	exports['default'] = Ember['default'].Component.extend({
		// Initialising the map
		initialise: function() {
			this.setupMap();
		}.on("didInsertElement"),

		map: null, //General pointer to the map object
		markers: [], //List of all of the markers

		// Defining map pin colours
		iconsForColors: {
			red: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
			green: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
			blue: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
			yellow: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
			orange: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
		},

		// Delegating map pin colours
		getIconForColor: function(colorString) {
			var colors = this.iconsForColors;

			switch(colorString) {
				case 'red':
					return colors.red;
				case 'blue':
					return colors.blue;
				case 'green':
					return colors.green;
				case 'yellow':
					return colors.yellow;
				default:
					return colors.orange;
			}
		},

		// Initialise the Google Map
		setupMap: function() {
			var map;
			var mapOptions = {
	          zoom: 11,
	          center: new google.maps.LatLng(-27.473704, 153.025818),
	          mapTypeId: google.maps.MapTypeId.ROADMAP
	        };

	        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	        this.map = map; //Keep a global pointer to the map for later
	        //this.addClickListener();

	        this.updateReadings(); //Initial update of readings
		},

		// SEMESTER 2 - Implement the map pin pop-over here
		addClickListener: function() {
			var map = this.map;

			google.maps.event.addListener(map, 'click', function(event) {
	        	alert("Lat:" + event.latLng.lat() + " Lng:" + event.latLng.lng());
	        });
		},

		// Update map pins based on changes in model
		// This function observer the model, and will run each time the model updates
		updateReadings: function() {
			this.removeAllMarkers();

			//The model for the map is the filtered model provided by the filtering pane
			var model = this.get("model"); //Get the filtered model from the filter pane

			if (model != null) { //If it is not null, plot all of the pins
				for (var i = 0; i < model.length; i++) { //for each element in the filtered model
					this.addMarker(model[i]); //Add it to the map
				}
			}
		}.observes('model'),

		// Add a map pin to the map
		addMarker: function(reading) {
			var map = this.map; //Get a handle on the map

			var position = new google.maps.LatLng(reading.lat, reading.lng);
			var icon = this.getIconForColor(reading.color);
			var title = reading.sensorname + ": " + reading.reading;

	        var marker = new google.maps.Marker({
	          position: position,
	          map: map,
	          icon: icon,
	          title: title
	        });

	        this.markers.push(marker);
		},

		// Remove all map pins from the map
		removeAllMarkers: function() {
			var markers = this.markers;

			for (var i = 0; i < markers.length; i++) {
			    markers[i].setMap(null);
			}

			markers = []
		},



	});

});