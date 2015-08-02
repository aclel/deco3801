define('deco3800---rms/tests/unit/routes/config-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:config', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function(assert) {
    var route = this.subject();
    assert.ok(route);
  });

});