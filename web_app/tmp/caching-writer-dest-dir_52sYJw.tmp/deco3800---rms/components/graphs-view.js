define('deco3800---rms/components/graphs-view', ['exports', 'ember', 'deco3800---rms/templates/components/graphs-view'], function (exports, Ember, layout) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    initialise: function() {
    	this.setupGraphs();
    }.on("didinsertelement"),

    howmanythings: [1, 2, 3],

    setupGraphs: function() {
    	//setup data
    },
    
    updateGraphs: function() {

    }.observes("model", "howmanythings.@each")
  });

});