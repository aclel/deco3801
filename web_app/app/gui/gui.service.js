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
	
	angular.module('app.gui')
		.factory('gui', gui);
	
    /**
        * @ngdoc service
        * @name app.gui.gui
        * @requires $alert
    **/
	function gui($alert) {
		
		/** The service methods to expose */
		return {
			alertSuccess: alertSuccess,
            alertError: alertError
		};
		
        /**
         * Shows a success alert
         * @param  {string} message message to show in the alert
         */
		function alertSuccess(message) {
            $alert({title: 'Success!', content: message, type: 'success' });
        }

        /**
         * Shows an error alert
         * @param  {string} message message to show in the alert
         */
        function alertError(message) {
            $alert({title: 'Error:', content: message, type: 'danger' });
        }
	}
})();