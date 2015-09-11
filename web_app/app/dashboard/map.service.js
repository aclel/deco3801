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
		
	function map(dashboard, moment, google) {
				
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
			// var readings = dashboard.readings();
			// // for (var i = 0; i < readings.length; i++) {
			// 	// addMarker(readings[i]);
			// // }
			
			// readings.forEach(function(buoyGroup) {
			// 	buoyGroup.buoyInstances.forEach(function(buoyInstance) {
			// 		buoyInstance.readings.forEach(function(reading) {
			// 			console.log(reading);
			// 		})
			// 	});
			// });
			
		}
		
		function updateReadings() {
			var readings = dashboard.readings();
			
			// readings.forEach(function(buoyGroup) {
			// 	buoyGroup.buoyInstances.forEach(function(buoyInstance) {
			// 		buoyInstance.readings.forEach(function(reading) {
			// 			console.log(reading);
			// 		})
			// 	});
			// });
			
			// create an array of readings which should be enabled
			var enabledBuoyInstances = [];
			// for (var i = 0; i < readings.length; i++) {
			// 	enabledReadings.push(readings[i].id);
			// }
			readings.forEach(function(buoyGroup) {
				buoyGroup.buoyInstances.forEach(function(buoyInstance) {
					// buoyInstance.readings.forEach(function(reading) {
					// 	enabledReadings.push(readings.id);
					// })
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
			
			// add and re-enable markers
			// for (var i = 0; i < readings.length; i++) {
			// 	var id = readings[i].id;
			// 	if (!markers.hasOwnProperty(id)) {
			// 		addMarker(readings[i]);
			// 	} else {
			// 		// update opacity
			// 		markers[id].setOpacity(calculateOpacity(readings[i]));
					
			// 		// re-enable disabled markers
			// 		if (disabledMarkers.indexOf(id) != -1) {
			// 			enableMarker(id);
			// 		}
			// 	}
			// }
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
		
		function enableMarker(id) {
			markers[id].setMap(map);
			disabledMarkers.splice(disabledMarkers.indexOf(id), 1);
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
		
		function popupContent(reading, buoyInstance) {
			var formattedTime = moment.unix(reading.timestamp)
										.format('D MMMM h:mm A');
										
			var content = "<div>" +
				"<h5 style='color: white'>" + buoyInstance.name + "</h5>" +
				formattedTime + 
				"<br>---";
			
			reading.sensorReadings.forEach(function(sensorReading) {
				content += "<br>" + sensorReading.sensorTypeId +
							": " + sensorReading.value;
			});			
				
			content += "</div>";
				
			return content;
		}
	}
})();