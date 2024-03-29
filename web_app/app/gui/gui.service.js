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
        * @requires $modal
        * @requires $log
    **/
	function gui($alert, $modal, $log, $rootScope, $timeout) {
		
		/** The service methods to expose */
		return {
			alertSuccess: alertSuccess,
            alertError: alertError,
            alertInfo: alertInfo,
            alertBadResponse: alertBadResponse,
            confirmDelete: confirmDelete,
            focus: focus
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

        /**
         * Shows an info alert
         * @param  {string} message message to show in the alert
         */
        function alertInfo(message) {
            $alert({content: message, type: 'info' });
        }

        /**
         * Shows an error alert on bad response from the server
         * @param  {object} res http response object
         */
        function alertBadResponse(res) {
            $log.error(res); // for debugging purposes
            alertError(res.data);
            // alertError("An error occured.");
        }

        /**
         * Show a modal which confirms deletion. Uses vm variables from
         * the calling controller.
         * @param  {object} scope scope to bind to the modal
         */
        function confirmDelete(scope) {
            $modal({
                scope: scope,
                templateUrl: 'gui/delete.modal.html',
                show: true
            });
        }

        /**
         * Broadcast a focusOn event with specified argument
         * @param  {object} name event argument
         */
        function focus(name) {
            $timeout(function() {
                $rootScope.$broadcast('focusOn', name);
            });
        }
	}
})();