/* global moment */
/* global google */
(function() {
	'use strict';
	
	angular.module('app.dashboard')
		.factory('map', map);
		
	function map(dashboard) {
				
		var map;
		var mapZoom = 11;
		var mapCenter = new google.maps.LatLng(-27.573704, 153.055818);
		var mapType = google.maps.MapTypeId.ROADMAP;
		var markers = {};
		var disabledMarkers = [];
		var infoBox;
		var infoBoxOpen = false;
		var currentMarkerId = -1;
		
		return {
			initialiseMap: initialiseMap,
			updateReadings: updateReadings,
			markReadings: markReadings
		};

		function initialiseMap() {
			var mapOptions = {
				zoom: mapZoom,
				center: mapCenter,
				mapTypeId: mapType
	        };
			
			map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); 
			
			google.maps.event.addListener(map, 'zoom_changed', function() {
				mapZoom = map.getZoom();
			});
			
			google.maps.event.addListener(map, 'center_changed', function() {
				mapCenter = map.getCenter();
			});
			
			google.maps.event.addListener(map, 'maptypeid_changed', function() {
				mapType = map.getMapTypeId();
			});
			
		    google.maps.event.addListener(map, 'click', function() {
		        if (infoBoxOpen) {
					infoBox.close();
					infoBoxOpen = false;
				}
		    });
			
			
		}
		
		function markReadings() {
			// call this when view is loaded
			// updateReadings has a bug that markers aren't shown when changing tab?
			var rd = dashboard.readings();
			for (var i = 0; i < rd.length; i++) {
				addMarker(rd[i]);
			}
		}
		
		function updateReadings() {
			var readings = dashboard.readings();
			
			// create an array of readings which should be enabled
			var enabledReadings = [];
			for (var i = 0; i < readings.length; i++) {
				enabledReadings.push(readings[i].readingId);
			}
			
			for (var key in markers) {
				if (markers.hasOwnProperty(key)) {
					key = parseInt(key, 10);
					if (enabledReadings.indexOf(key) == -1) {
						// disable markers which aren't in enabledReadings array
						disableMarker(key);
						disabledMarkers.push(key);
					}
				}
			}
			
			// add and re-enable markers
			for (var i = 0; i < readings.length; i++) {
				if (!markers.hasOwnProperty(readings[i].readingId)) {
					addMarker(readings[i]);
				} else {
					if (disabledMarkers.indexOf(readings[i].readingId) != -1) {
						enableMarker(readings[i].readingId);
						disabledMarkers.splice(disabledMarkers.indexOf(readings[i].readingId), 1);
					}
				}
			}
			
			// close infobox of disabled marker
			if (infoBoxOpen) {
				if (disabledMarkers.indexOf(currentMarkerId) != -1) {
					infoBox.close();
					infoBoxOpen = false;
				}
			}
		}
		
		function addMarker(reading) {
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(reading.latitude, reading.longitude),
				map: map,
				title: 'Buoy ' + reading.buoy + ': reading ' + reading.readingId,
				opacity: calculateOpacity(reading)
			});
			
			google.maps.event.addListener(marker, 'click', function() {
				openInfoBox(reading, marker);
			});
			
			markers[reading.readingId] = marker;
		}
		
		function disableMarker(readingId) {
			markers[readingId].setMap(null);
		}
		
		function enableMarker(readingId) {
			markers[readingId].setMap(map);
		}
		
		function calculateOpacity(reading) {
			// calculate opacity of marker based on age
			// should be dependent on time filters
			// for now let's just say 1 day is 5%
			var markerMoment = moment.unix(reading.timestamp);
			var daysAgo = moment().diff(markerMoment, 'days');
			return Math.max(1.00 - (daysAgo * 0.05), 0);
		}
		
		
		function openInfoBox(reading, marker) {
			if (infoBoxOpen) {
				infoBox.close();
				infoBoxOpen = false;
				
				if (reading.readingId == currentMarkerId) {
					return;
				}
			}
			
			var formattedTime = moment.unix(reading.timestamp)
										.format('D MMMM h:mm A');
			
			var content = "<div>" +
							"<h5 style='color: white'>Buoy " + reading.buoy + "</h5>" +
							formattedTime + 
							"<br>---" +
							"<br>Battery: " + reading.readings[1] +
							"<br>Turbidity: " + reading.readings[2] +
							"<br>Temperature: " + reading.readings[3] +
							"</div>";
							
			infoBox = new InfoBox({
				content: content,
				pixelOffset: new google.maps.Size(-60, 0),
	            zIndex: null,
	            boxStyle: {
	                // "background": "url('http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/examples/tipbox.gif') no-repeat",
					"color": "white",
					"background-color": "rgb(40, 40, 40)",
					"width": "120px",
					"padding": "10px",
					"border-radius": "10px"
	            },
	            closeBoxMargin: "-6px -6px 2px 2px"
			});
			
			infoBox.open(map, marker);			
			infoBoxOpen = true;
			currentMarkerId = reading.readingId;
		}
	}
})();