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
        * @ngdoc overview
        * @name app.module:gui
        * @description Module containing libraries required for gui
    **/
	angular.module('app.gui', [
		// 3rd-party modules
        'ngAnimate', 
		'mgcrea.ngStrap',
		'mgcrea.ngStrap.helpers.dimensions',
		'mgcrea.ngStrap.helpers.dateParser',
		'mgcrea.ngStrap.helpers.parseOptions',
		'mgcrea.ngStrap.tooltip',
		'mgcrea.ngStrap.datepicker',
		'mgcrea.ngStrap.timepicker',
		'mgcrea.ngStrap.button',
		'mgcrea.ngStrap.select',
        'mgcrea.ngStrap.modal',
        'mgcrea.ngStrap.alert',
        'mgcrea.ngStrap.tab'
	]);
})();