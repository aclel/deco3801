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
/* global google */
/* global moment */
(function() {
	'use strict';
	
    /** Define globals from third-party libraries so they can be injected */
	angular.module('app')
		.constant('moment', moment)
		.constant('google', google)
        .constant('InfoBox', InfoBox);
})();