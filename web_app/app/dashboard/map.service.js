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
		* @requires google
	**/
	function map($rootScope, $log, google) {
			
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
		var mapCenter;
		
		/** The service methods to expose */
		return {
			initialiseMap: initialiseMap,
			getCenter: getCenter,
			setCenter: setCenter,
			showMarker: showMarker,
			hideDisabledMarkers: hideDisabledMarkers
		};

		/** Setup google map, set styles and listeners */
		function initialiseMap() {
			mapOptions.styles = stylesBlueWater();
			
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

		    // reset markers
		    markers = {};
			disabledMarkers = [];
		}

		/**
		 * Get the current center of the map
		 * @return {object} center of the map
		 */
		function getCenter() {
			return map.getCenter();
		}

		/**
		 * Set the center of the map
		 * @param {object} center new center
		 */
		function setCenter(center) {
			google.maps.event.trigger(map, "resize");
			map.setCenter(center);
		}


		/**
		 * Show a marker on the map
		 * @param  {object} reading      reading for the marker
		 * @param  {object} buoyInstance buoyInstance the reading is from
		 * @param {string} colour hex colour of the marker
		 */
		function showMarker(reading, buoyInstance, colourIndex, age, content) {
			var id = reading.id;
			if (!markers.hasOwnProperty(id)) {
				// create new marker if it doesn't exist
				addMarker(reading, buoyInstance, content);
			} else {
				if (disabledMarkers.indexOf(id) != -1) {
					// show (re-enable) marker if it already exists
					enableMarker(id);
				}
			}
			markers[id].setIcon(markerColour(colorPalette(colourIndex)));
			markers[id].setOpacity(calculateOpacity(age));
		}
		
		/**
		 * Disable old markers which shouldn't be displayed
		 * @param  {int[]} enabledMarkers list of marker ids which are enabled
		 */
		function hideDisabledMarkers(enabledMarkers) {
			for (var key in markers) {
				if (markers.hasOwnProperty(key)) {
					key = parseInt(key, 10);
					if (enabledMarkers.indexOf(key) == -1) {
						disableMarker(key);
					}
				}
			}
		}

		/** 
		 * Add new marker to map
		 * @param {object} reading      reading for marker
		 * @param {object} buoyInstance buoyInstance the reading is from
		 */
		function addMarker(reading, buoyInstance, content) {
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(reading.latitude, reading.longitude),
				map: map,
				// title: 'Buoy ' + reading.buoy + ': reading ' + reading.id,
			});
			
			google.maps.event.addListener(marker, 'click', function() {
				openInfoBox(reading, buoyInstance, marker, content);
			});
			
			markers[reading.id] = marker;
		}

		function randomisePos(pos) {
			var magnitude = 100000;
			if (Math.random() < 0.5) {
				pos += Math.round(Math.random() * 100) / magnitude;
			} else {
				pos -= Math.round(Math.random() * 100) / magnitude;
			}
			return pos;
		}

		/**
		 * Re-enable (show on map) disabled marker
		 * @param  {int} id id of marker to enable
		 */
		function enableMarker(id) {
			markers[id].setMap(map);
			disabledMarkers.splice(disabledMarkers.indexOf(id), 1);
		}
		
		/** 
		 * Disable marker (hide from map) without deleting it
		 * @param  {int} id id of marker to disable
		 */
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

		/** 
		 * Open the infobox
		 * @param  {object} reading      reading
		 * @param  {object} buoyInstance buoyInstance the reading is for
		 * @param  {object} marker       marker object
		 */
		function openInfoBox(reading, buoyInstance, marker, content) {
			if (infoBoxOpen) {
				closeInfoBox();
				
				if (reading.id == currentMarkerId) {
					return;
				}
			}

			// update charts
			$rootScope.$broadcast('mapMarkerSelected', buoyInstance);
			
			infoBox = new InfoBox({
				content: content,
				pixelOffset: new google.maps.Size(-90, 0),
	            zIndex: null,
	            closeBoxMargin: "-6px -6px 2px 2px"
			});
			
			infoBox.open(map, marker);			
			infoBoxOpen = true;
			currentMarkerId = reading.id;
		}

		/** Close the infobox (map marker popup) */
		function closeInfoBox() {
			infoBox.close();
			infoBoxOpen = false;
		}

		/**
		 * Returns a marker icon with a specified colour
		 * @param  {string} colour colour in hex format
		 * @return {object}        marker icon usable in google maps API
		 */
		function markerColour(colour) {
			// return {
			// 	path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
		 //        fillColor: colour,
		 //        fillOpacity: 1,
		 //        strokeColor: '#000',
		 //        strokeWeight: 1,
		 //        scale: 1
			// };
			
			return (new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + colour.substr(1),
		        new google.maps.Size(21, 34),
		        new google.maps.Point(0, 0),
		        new google.maps.Point(10, 34)
	        ));
		}

		/**
		 * Hardcoded colour palette
		 * @param  {int} n index of colour in palette to get (wraps around)
		 * @return {string}   hex colour
		 */
		function colorPalette(n) {
			// palette generated from http://tools.medialab.sciences-po.fr/iwanthue/
			var palette = [
				"#84CBD1",
				"#CC4B30",
				"#BF54D0",
				"#70D84C",
				"#36362B",
				"#CD4075",
				"#553264",
				"#CBCC92",
				"#D2983C",
				"#6B7AD0",
				"#C78378",
				"#5A8A37",
				"#CCD446",
				"#72DA9E",
				"#598369",
				"#6D292F",
				"#CAB3CC",
				"#785F2A",
				"#596C87",
				"#C471B4"
			];
			return palette[n % palette.length];	
		}

		/**
		 * Generates a random hex colour (not currently used)
		 * @return {string} hex colour
		 */
		function randomColour() {
			return "#" + Math.random().toString(16).slice(2, 8);
		}

		/** 
		 * Get the value to set for marker opacity
		 * @param  {int} relative age to base opacity on
		 * @return {float}         opacity value between 0 and 1
		 */
		function calculateOpacity(age) {
			var minVisibleOpacity = 0.3;
			return age * (1 - minVisibleOpacity) + minVisibleOpacity;
		}

		/**
		 * Map styles to disable points of interest (not currently used)
		 * @return {object} map styles usable by google maps api
		 */
		function stylesNoPoi() {
			return [
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
		}

		/**
		 * Map style blue water style
		 * from https://snazzymaps.com/style/25/blue-water
		 * @return {object} map styles usable by google maps api
		 */
		function stylesBlueWater() {
			return [
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
							"color": "#0B5B91"
						},
						{
							"visibility": "on"
						}
					]
				}
			];
		}
	}
})();