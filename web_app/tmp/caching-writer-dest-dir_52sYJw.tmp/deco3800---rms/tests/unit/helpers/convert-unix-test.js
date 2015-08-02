define('deco3800---rms/tests/unit/helpers/convert-unix-test', ['deco3800---rms/helpers/convert-unix', 'qunit'], function (convert_unix, qunit) {

  'use strict';

  qunit.module('ConvertUnixHelper');

  // Replace this with your real tests.
  qunit.test('it works', function(assert) {
    var result = convert_unix.convertUnix(42);
    assert.ok(result);
  });

});