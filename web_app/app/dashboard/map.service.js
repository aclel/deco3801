/* global moment */
/* global google */
(function() {
	'use strict';
	
	angular.module('app.dashboard')
		.factory('map', map);
		
	function map(dashboard) {
				
		var map;
		var mapOptions = {
			zoom: 11,
			center: new google.maps.LatLng(-27.573704, 153.055818),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var markers = {};
		var disabledMarkers = [];
		var infoBox;
		var infoBoxOpen = false;
		var currentMarkerId = -1;
		
		return {
			initialiseMap: initialiseMap,
			updateReadings: updateReadings
		};

		function initialiseMap() {
			// disable points of interest
			var noPoi = [
			    {
			        featureType: "poi",
			        elementType: "labels",
			        stylers: [
			              { visibility: "off" }
			        ]
			    },
				{
			        featureType: "transit.station",
			        elementType: "labels",
			        stylers: [
			              { visibility: "off" }
			        ]
			    }
			];
			mapOptions.styles = noPoi;
			
			map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); 
			
			
			google.maps.event.addListener(map, 'zoom_changed', function() {
				mapOptions.zoom = map.getZoom();
			});
			
			google.maps.event.addListener(map, 'center_changed', function() {
				mapOptions.center = map.getCenter();
			});
			
			google.maps.event.addListener(map, 'maptypeid_changed', function() {
				mapOptions.mapTypeId = map.getMapTypeId();
			});
			
		    google.maps.event.addListener(map, 'click', function() {
		        if (infoBoxOpen) {
					closeInfoBox();
				}
		    });
			
			// mark readings
			var readings = dashboard.readings();
			for (var i = 0; i < readings.length; i++) {
				addMarker(readings[i]);
			}
		}
		
		function updateReadings() {
			var readings = dashboard.readings();
			
			// create an array of readings which should be enabled
			var enabledReadings = [];
			for (var i = 0; i < readings.length; i++) {
				enabledReadings.push(readings[i].readingId);
			}
			
			// disable markers which shouldn't be enabled
			for (var key in markers) {
				if (markers.hasOwnProperty(key)) {
					key = parseInt(key, 10);
					if (enabledReadings.indexOf(key) == -1) {
						disableMarker(key);
					}
				}
			}
			
			// add and re-enable markers
			for (var i = 0; i < readings.length; i++) {
				var readingId = readings[i].readingId;
				if (!markers.hasOwnProperty(readingId)) {
					addMarker(readings[i]);
				} else {
					// update opacity
					markers[readingId].setOpacity(calculateOpacity(readings[i]));
					
					// re-enable disabled markers
					if (disabledMarkers.indexOf(readingId) != -1) {
						enableMarker(readingId);
					}
				}
			}
		}
		
		function addMarker(reading) {
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(reading.latitude, reading.longitude),
				map: map,
				// title: 'Buoy ' + reading.buoy + ': reading ' + reading.readingId,
				opacity: calculateOpacity(reading)
			});
			
			google.maps.event.addListener(marker, 'click', function() {
				openInfoBox(reading, marker);
			});
			
			markers[reading.readingId] = marker;
		}
		
		function disableMarker(readingId) {
			markers[readingId].setMap(null);
			disabledMarkers.push(readingId);
			
			// close infobox of disabled marker
			if (infoBoxOpen) {
				if (disabledMarkers.indexOf(currentMarkerId) != -1) {
					closeInfoBox();
				}
			}
		}
		
		function enableMarker(readingId) {
			markers[readingId].setMap(map);
			disabledMarkers.splice(disabledMarkers.indexOf(readingId), 1);
		}
		
		function calculateOpacity(reading) {
			var age = dashboard.getRelativeAge(reading);
			var minVisibleOpacity = 0.3;
			return age * (1 - minVisibleOpacity) + minVisibleOpacity;
		}
		
		function closeInfoBox() {
			infoBox.close();
			infoBoxOpen = false;
		}
		
		function openInfoBox(reading, marker) {
			if (infoBoxOpen) {
				closeInfoBox();
				
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
							"<br>Battery: " + reading.readings.battery +
							"<br>Pressure: " + reading.readings.pressure +
							"<br>Sea level: " + reading.readings.sealevel +
							"<br>Turbidity: " + reading.readings.turbidity +
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