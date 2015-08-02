define('deco3800---rms/router', ['exports', 'ember', 'deco3800---rms/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function() {
    this.route('config');
    this.route('warnings');
  });

  exports['default'] = Router;

});