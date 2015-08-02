/* jshint ignore:start */

define('deco3800---rms/config/environment', ['ember'], function(Ember) {
  var prefix = 'deco3800---rms';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("deco3800---rms/tests/test-helper");
} else {
  require("deco3800---rms/app")["default"].create({"name":"deco3800---rms","version":"0.0.0."});
}

/* jshint ignore:end */
