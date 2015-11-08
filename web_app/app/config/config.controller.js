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
	
	angular.module('app.config')
		.controller('ConfigController', ConfigController);
	
	/**
		* @ngdoc object
		* @name app.config.controller:ConfigController
		* @description Provides viewmodel for config view
		* @requires server
	**/
	function ConfigController(config) {
		var vm = this;

		vm.buoyGroups = config.buoyGroups;
		vm.buoyInstances = config.buoyInstances;
		vm.groupBuoys = config.groupBuoys;
		vm.buoyInstanceSensors = config.buoyInstanceSensors;
		vm.sensorTypes = config.sensorTypes;
		vm.selected = config.selected;
		vm.editName = config.editName;
		vm.editGroup = config.editGroup;
		vm.treeOptions = config.treeOptions;
		vm.redeploy = config.redeploy;

		vm.selectAll = config.selectAll;
		vm.selectBuoyGroup = config.selectBuoyGroup;
		vm.selectBuoyInstance = config.selectBuoyInstance;
		vm.startEditingName = config.startEditingName;
		vm.finishEditingName = config.finishEditingName;
		vm.startEditingBuoyGroup = config.startEditingBuoyGroup;
		vm.finishEditingBuoyGroup = config.finishEditingBuoyGroup;
		vm.selectNewBuoyGroup = config.selectNewBuoyGroup;
		vm.saveNewBuoyGroup = config.saveNewBuoyGroup;
		vm.buoyGroupFilter = config.buoyGroupFilter;
		vm.showBuoyConfig = config.showBuoyConfig;
		vm.editing = config.editing;
		vm.cancelEditName = config.cancelEditName;
		vm.cancelEditGroup = config.cancelEditGroup;
		vm.toggleBuoyGroup = config.toggleBuoyGroup;
		vm.sensorFilter = config.sensorFilter;
		vm.redeployBuoy = config.redeployBuoy;
		vm.redeployShow = config.redeployShow;

		activate();
		
		/** Called when controller is instantiated (config page is loaded) */
		function activate() {
			config.refreshData();
		}
	}
})();
