/**
 * Flood Monitoring System
 * Version 0.0.1 (Duyung)
 *
 * Copyright (C) Team Neptune
 * All rights reserved.
 *
 * @author     Andrew Dyer <andrew@dyergroup.com.au>
 * @version    0.0.1
 * @copyright  Team Neptune (2015)
 * @link       https://github.com/aclel/deco3801
 */
(function() {
	'use strict';
	
	angular.module('app.dashboard')
		.factory('map', map);
		
	/**
		* @ngdoc service
		* @name app.dashboard.map
		* @requires dashboard
		* @requires moment
		* @requires google
	**/
	function map(dashboard, moment, google) {
			
		/** Internal variables */
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
		
		/** The service methods to expose */
		return {
			initialiseMap: initialiseMap,
			updateReadings: updateReadings
		};

		/** Setup google map, set styles and listeners */
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
			
			var blueWater = [
				{
					"featureType": "administrative",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#444444"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [
						{
							"color": "#f2f2f2"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "all",
					"stylers": [
						{
							"saturation": -100
						},
						{
							"lightness": 45
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
						{
							"color": "#46bcec"
						},
						{
							"visibility": "on"
						}
					]
				}
			];
			mapOptions.styles = blueWater;
			
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
		}
		
		/** Update map markers based on filtered readings */
		function updateReadings() {
			var readings = dashboard.readings();
		
			// create an array of readings which should be enabled
			var enabledBuoyInstances = [];
			readings.forEach(function(buoyGroup) {
				buoyGroup.buoyInstances.forEach(function(buoyInstance) {
					enabledBuoyInstances.push(buoyInstance.id);
				});
			});
			
			// disable markers which shouldn't be enabled
			for (var key in markers) {
				if (markers.hasOwnProperty(key)) {
					key = parseInt(key, 10);
					if (enabledBuoyInstances.indexOf(key) == -1) {
						disableMarker(key);
					}
				}
			}

			// add or re-enable markers and set opacity
			readings.forEach(function(buoyGroup) {
				buoyGroup.buoyInstances.forEach(function(buoyInstance) {
					buoyInstance.readings.forEach(function(reading) {
						var id = reading.id;
						if (!markers.hasOwnProperty(id)) {
							addMarker(reading, buoyInstance);
						} else {
							// update opacity
							markers[id].setOpacity(calculateOpacity(reading));
							
							// re-enable disabled markers
							if (disabledMarkers.indexOf(id) != -1) {
								enableMarker(id);
							}
						}
					})
				});
			});
		}
		
		/** Add new marker to map */
		function addMarker(reading, buoyInstance) {
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(reading.latitude, reading.longitude),
				map: map,
				// title: 'Buoy ' + reading.buoy + ': reading ' + reading.id,
				opacity: calculateOpacity(reading)
			});
			
			google.maps.event.addListener(marker, 'click', function() {
				openInfoBox(reading, buoyInstance, marker);
			});
			
			markers[reading.id] = marker;
		}
		
		/** Disable marker (hide from map) without deleting it */
		function disableMarker(id) {
			markers[id].setMap(null);
			disabledMarkers.push(id);
			
			// close infobox of disabled marker
			if (infoBoxOpen) {
				if (disabledMarkers.indexOf(currentMarkerId) != -1) {
					closeInfoBox();
				}
			}
		}
		
		/** Re-enable (show on map) disabled marker */
		function enableMarker(id) {
			markers[id].setMap(map);
			disabledMarkers.splice(disabledMarkers.indexOf(id), 1);
		}
		
		/** Get the value to set for marker opacity */
		function calculateOpacity(reading) {
			var age = dashboard.getRelativeAge(reading);
			var minVisibleOpacity = 0.3;
			return age * (1 - minVisibleOpacity) + minVisibleOpacity;
		}
		
		/** Close the infobox (map marker popup) */
		function closeInfoBox() {
			infoBox.close();
			infoBoxOpen = false;
		}
		
		/** Open the infobox, set content based on marker reading details */
		function openInfoBox(reading, buoyInstance, marker) {
			if (infoBoxOpen) {
				closeInfoBox();
				
				if (reading.id == currentMarkerId) {
					return;
				}
			}
			
			var content = popupContent(reading, buoyInstance);
							
			infoBox = new InfoBox({
				content: content,
				pixelOffset: new google.maps.Size(-60, 0),
	            zIndex: null,
	            boxStyle: {
	                // "background": "url('http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/examples/tipbox.gif') no-repeat",
					"color": "white",
					"background-color": "rgb(40, 40, 40)",
					"width": "150px",
					"padding": "10px",
					"border-radius": "10px"
	            },
	            closeBoxMargin: "-6px -6px 2px 2px"
			});
			
			infoBox.open(map, marker);			
			infoBoxOpen = true;
			currentMarkerId = reading.id;
		}
		
		/** 
		 * Determine content to set for marker popup
		 * @param  {object} reading      reading
		 * @param  {object} buoyInstance buoy instance
		 * @return {string}              popup content
		 */
		function popupContent(reading, buoyInstance) {
			var sensors = dashboard.sensorMetadata();
			var formattedTime = moment.unix(reading.timestamp)
										.format('D MMMM h:mm A');
										
			var content = "<div>" +
				"<h5 style='color: white'>" + buoyInstance.name + "</h5>" +
				formattedTime + 
				"<br>---";
			
			reading.sensorReadings.forEach(function(sensorReading) {
				content += "<br>" + 
					sensors[sensorReading.sensorTypeId].name +
					": " + sensorReading.value + " " +
					sensors[sensorReading.sensorTypeId].unit;
			});			
				
			content += "</div>";
				
			return content;
		}
	}
})();