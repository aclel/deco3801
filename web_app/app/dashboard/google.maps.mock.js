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

    /**
     * Mock of the google maps object, defines fields required by map service
     */
    var google = { maps: {
            LatLng: function(lat, lng) {
                return {
                    latitude: parseFloat(lat),
                    longitude: parseFloat(lng),

                    lat: function() { return this.latitude; },
                    lng: function() { return this.longitude; }
                };
            },
            LatLngBounds: function(ne, sw) {
                return {
                    getSouthWest: function() { return sw; },
                    getNorthEast: function() { return ne; }
                };
            },
            OverlayView: function() {return {}; },
            InfoWindow: function() {return {}; },
            Marker: function() {return {
                    setIcon: function() {},
                    setOpacity: function() {}
                };
            },
            MarkerImage: function() {return {}; },
            Map: function() {return {}; },
            Point: function() {return {}; },
            Size: function() {return {}; },
            MapTypeId: {
                ROADMAP: 0
            },
            MapTypeControlStyle: {
                HORIZONTAL_BAR: 0
            },
            ControlPosition: {
                TOP_CENTER: 0
            },
            event: {
                addListener: function() {return {}; }
            }
        }
    };
    
    // Mock the google maps API
    angular.module('mock.google', [])
        .constant('google', google);
})();