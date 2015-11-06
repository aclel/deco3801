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
        .factory('map', mapService);
        
    /**
        * @ngdoc service
        * @name app.dashboard.map
        * @requires google
    **/
    function mapService($rootScope, $compile, $log, google, InfoBox) {
            
        /** Internal variables */
        var map;
        var mapOptions = {
            zoom: 11,
            center: new google.maps.LatLng(-27.573704, 153.055818),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.TOP_CENTER
            },
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.TOP_CENTER
            },
            scaleControl: true,
            streetViewControl: false,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.TOP_CENTER
            }
        };
        var markers = {};
        var markerBuoyInstances = {};
        var disabledMarkers = [];
        var infoBox;
        var infoBoxOpen = false;
        var currentMarkerId = -1;
        var mapCenter;

        var sensors = {};

        var popupContent = '<div ng-include="\'dashboard/popup.html\'"></div>';
        var popupScope = $rootScope.$new();
        var popupContentCompiled = $compile(popupContent)(popupScope);
        
        /** The service methods to expose */
        return {
            setSensors: setSensors,
            initialiseMap: initialiseMap,
            showMarker: showMarker,
            hideDisabledMarkers: hideDisabledMarkers
        };

        /** Define sensors, called by dashboard */
        function setSensors(data) {
            sensors = data;
        }

        /** Setup google map, set styles and listeners */
        function initialiseMap() {
            mapOptions.styles = stylesBlueWater();
            
            map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); 
            
            google.maps.event.addListener(map, 'zoom_changed', function() {
                mapOptions.zoom = map.getZoom();
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
         * Show a marker on the map
         * @param  {object} reading      reading for the marker
         * @param  {object} buoyInstance buoyInstance the reading is from
         * @param {string} colour hex colour of the marker
         */
        function showMarker(reading, buoyInstance, age) {
            var id = reading.id;
            markerBuoyInstances[id] = buoyInstance;
            if (!markers.hasOwnProperty(id)) {
                // create new marker if it doesn't exist
                addMarker(reading);
            } else {
                if (disabledMarkers.indexOf(id) != -1) {
                    // show (re-enable) marker if it already exists
                    enableMarker(id);
                }
            }
            markers[id].setIcon(markerColour(buoyInstance.colour));
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
         */
        function addMarker(reading) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(reading.latitude, reading.longitude),
                map: map,
                // title: 'Buoy ' + reading.buoy + ': reading ' + reading.id,
            });
            
            google.maps.event.addListener(marker, 'click', function() {
                openInfoBox(reading, marker);
            });
            
            markers[reading.id] = marker;
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
        function openInfoBox(reading, marker) {
            if (infoBoxOpen) {
                closeInfoBox();
                
                if (reading.id === currentMarkerId) {
                    return;
                }
            }

            var buoyInstance = markerBuoyInstances[reading.id];

            // update charts
            $rootScope.$broadcast('mapMarkerSelected', buoyInstance);

            // put data into scope
            popupScope.vm = {
                time: moment.unix(reading.timestamp) .format('D MMMM h:mm A'),
                buoyInstance: buoyInstance,
                reading: reading,
                sensors: sensors
            };
            popupScope.$apply();

            infoBox = new InfoBox({
                content: popupContentCompiled[0].nextSibling.innerHTML,
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
            currentMarkerId = -1;
 
            // update charts to be empty
            $rootScope.$broadcast('mapMarkerSelected', null);
        }

        /**
         * Returns a marker icon with a specified colour
         * @param  {string} colour colour in hex format
         * @return {object}        marker icon usable in google maps API
         */
        function markerColour(colour) {
            return (new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + colour.substr(1),
                new google.maps.Size(21, 34),
                new google.maps.Point(0, 0),
                new google.maps.Point(10, 34)
            ));
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
         * Map style blue water style
         * from https://snazzymaps.com/style/25/blue-water
         * @return {object} map styles usable by google maps api
         */
        function stylesBlueWater() {
            return [
                        {
                            "featureType": "water",
                            "elementType": "geometry.fill",
                            "stylers": [
                              { "color": "#0B5B91" },
                              { "visibility": "on" }
                            ]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "all",
                            "stylers": [
                              { "visibility": "off" }
                            ]
                        },
                        {
                            "featureType": "road",
                            "stylers": [
                              { "saturation": -100 },
                              { "lightness": 45 }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "stylers": [
                              { "visibility": "simplified" }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.icon",
                            "stylers": [
                              { "visibility": "off" }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "geometry",
                            "stylers": [
                              { "color": "#f2f2f2" },
                              { "visibility": "on" }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "stylers": [
                              { "visibility": "off" }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [
                              { "visibility": "on" },
                              { "color": "#E6E6E6" }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels.icon",
                            "stylers": [
                              { "visibility": "off" }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                              { "color": "#333333" },
                              { "gamma": 1.07 },
                              { "lightness": 4 }
                            ]
                        }
                  ];
        }
    }
})();
