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
	function ConfigController(server, gui, moment) {
		var vm = this;
		
		/** Variables and methods bound to viewmodel */
		vm.buoyGroups = [];
		vm.buoyInstances = [];
		vm.groupBuoys = [];
		vm.commands = [];
		vm.commandTypes = [];
		vm.buoyInstanceSensors = [];
		vm.sensorTypes = [];
		vm.triggers = [];
		vm.selected = { type: 'all', obj: null };
		vm.editName = {};
		vm.editName.on = false;
		vm.editGroup = {};
		vm.editGroup.on = false;
		vm.operators = [ '<', '>', '=' ];
		vm.editingPollRate = false;
		vm.treeOptions = {};
		vm.selectAll = selectAll;
		vm.selectBuoyGroup = selectBuoyGroup;
		vm.selectBuoyInstance = selectBuoyInstance;
		vm.startEditingName = startEditingName;
		vm.finishEditingName = finishEditingName;
		vm.startEditingBuoyGroup = startEditingBuoyGroup;
		vm.finishEditingBuoyGroup = finishEditingBuoyGroup;
		vm.selectNewBuoyGroup = selectNewBuoyGroup;
		vm.saveNewBuoyGroup = saveNewBuoyGroup;
		vm.buoyGroupFilter = buoyGroupFilter;
		vm.commandFilter = commandFilter;
		vm.showBuoyConfig = showBuoyConfig;
		vm.editing = editing;
		vm.cancelEditName = cancelEditName;
		vm.cancelEditGroup = cancelEditGroup;
		vm.toggleBuoyGroup = toggleBuoyGroup;
		vm.queryCommands = queryCommands;
		vm.parseCommands = parseCommands;
		vm.queryTriggers = queryTriggers;
		vm.parseTriggers = parseTriggers;
		vm.triggerFilter = triggerFilter;
		
		activate();
		
		/** Called when controller is instantiated (config page is loaded) */
		function activate() {
			queryBuoyGroups();
			queryBuoyInstances();
			queryCommandTypes();
			queryTriggers();
			queryBuoyInstanceSensors();
			setTreeOptions();
		}

		/** Set the tree options for buoy groups list */
		function setTreeOptions() {
			vm.treeOptions = {
				accept: function(source, dest, destIndex) {
					// if (dest.nodropEnabled) return false;

					if (source.$modelValue.type != "instance") {
						return false;
					} else {
						// prevent instances from being moved out of a group
						if (dest.depth() != 1) return false;
						// prevent instances being dragged into collapsed groups
						if (dest.childNodes()[destIndex] != null) {
							if (dest.childNodes()[destIndex].collapsed) return false;
						}
					}
					return true;
				},
				dropped: function(event) {
					console.log(event);
					var groupId = event.dest.nodesScope.$nodeScope.$modelValue.id;
					var existingName = event.source.nodeScope.$modelValue.name;
					var instanceId = event.source.nodeScope.$modelValue.id;
					server.updateBuoyInstanceGroup(
						instanceId,
						groupId,
						existingName
					).then(function(res) {
						queryBuoyInstances();
						gui.alertSuccess('Buoy group changed.')
					}, function(res) {
						queryBuoyInstances(); // easiest way to undo drag-drop
						gui.alertBadResponse(res);
					});
				}
			};
		}
		
		/** Query buoy groups from the server */
		function queryBuoyGroups() {
			server.getBuoyGroups().then(function(res) {
				vm.buoyGroups = res.data.buoyGroups;
				parseBuoyInstanceDetails();
			}, function(res) {
				gui.alertBadResponse(res);
			});
		}
		
		/** Query buoy instances from the server */
		function queryBuoyInstances() {
			server.getBuoyInstances().then(function(res) {
				vm.buoyInstances = res.data.buoyInstances;
				parseBuoyInstanceDetails()
			}, function(res) {
				gui.alertBadResponse(res);
			});
		}
		
		/** Query command types from the server */
		function queryCommandTypes() {
			server.getCommandTypes().then(function(res) {
				vm.commandTypes = res.data.commandTypes;
				queryCommands();
			}, function(res) {
				gui.alertBadResponse(res);
			});
		}
		
		/** Query buoy commands from the server */
		function queryCommands() {
			server.getCommands().then(function(res) {
				vm.commands = res.data.commands;
				parseCommands();
			}, function(res) {
				gui.alertBadResponse(res);
			});
		}
		
		/** Query warning triggers from the server */
		function queryTriggers() {
			server.getWarningTriggers().then(function(res) {
				vm.triggers = res.data.warningTriggers;
				if (!vm.sensorTypes.length) querySensorTypes();
				parseTriggers();
			}, function(res) {
				gui.alertBadResponse(res);
			});
		}
		
		/** Query sensor types from the server */
		function querySensorTypes() {
			server.getSensorTypes().then(function(res) {
				vm.sensorTypes = res.data.sensorTypes;
				parseTriggers();
			}, function(res) {
				gui.alertBadResponse(res);
			});
		}

		/** Query buoy instance sensors for buoy instance */
		function queryBuoyInstanceSensors(buoyInstanceId) {
			if (vm.selected.type != 'instance') return;
			server.getBuoyInstanceSensors(buoyInstanceId).then(function(res) {
				vm.buoyInstanceSensors = res.data.sensors;
				parseBuoyInstanceSensors();
			}, function(res) {
				gui.alertBadResponse(res);
			});
		}
		
		/** Associate buoy instances with groups */
		function parseBuoyInstanceDetails() {
			resetBuoyGroupInstances();
			vm.buoyInstances.forEach(function(buoyInstance) {
				setBuoyInstanceGroup(buoyInstance);
				buoyInstance.type = 'instance';
				parseBuoyInstanceStatus(buoyInstance);
			});
		}

		function parseBuoyInstanceStatus(buoyInstance) {
			if (buoyInstance.lastPolled.Valid) {
				buoyInstance.lastReceived = buoyInstance.pollRate.Time
			} else {
				buoyInstance.lastReceived = 'Never';
			}
			if (buoyInstance.pollRate == 0) {
				buoyInstance.pollInterval = 0;
				buoyInstance.nextScheduled = 'Never';
			} else {
				var duration = moment.duration(buoyInstance.pollRate, 'seconds');
				buoyInstance.pollInterval = duration.humanize();
				if (buoyInstance.lastPolled.Valid) {
					buoyInstance.nextScheduled = moment(buoyInstance.pollRate.Time,
						'X').add(duration).format("DD/MM/YY HH:mm A");
				} else {
					buoyInstance.nextScheduled = 'Never';
				}
			}
		}
		
		/** Associate sensor and buoy info with warnings */
		function parseTriggers() {
			vm.triggers.forEach(function(trigger) {
				// get buoy name
				for (var i = 0; i < vm.buoyInstances.length; i++) {
					var buoyInstance = vm.buoyInstances[i];
					if (buoyInstance.id == trigger.buoyInstanceId) {
						trigger.buoyName = buoyInstance.name;
						break;
					}
				}
				// get sensor name
				for (var i = 0; i < vm.sensorTypes.length; i++) {
					var sensorType = vm.sensorTypes[i];
					if (sensorType.id == trigger.sensorTypeId) {
						trigger.sensorName = sensorType.name;
						trigger.sensorTypeArchived = sensorType.archived;
						break;
					}
				}
			});
		}

		/** Associate buoy instance sensors with sensor types */
		function parseBuoyInstanceSensors() {
			vm.buoyInstanceSensors.forEach(function(sensor) {
				// get sensor name
				for (var i = 0; i < vm.sensorTypes.length; i++) {
					var sensorType = vm.sensorTypes[i];
					if (sensorType.id == sensor.sensorTypeId) {
						sensor.sensorName = sensorType.name;
						break;
					}
				}
				// parse time
				sensor.recentTime = moment(sensor.lastRecorded.Time,
					'X').format("DD/MM/YY HH:mm A");
			});
		}

		function updatePollRate(buoyInstance) {
			var command = {
				commandTypeId: 1,
				value: buoyInstance.pollRate,
				buoyId: buoyInstance.buoyId
			};
			server.addCommand(command, [buoyInstance.buoyId]);
		}
		
		/**
		 * Determine whether to show command and warning trigger config
		 * @return {bool} show config
		 */
		function showBuoyConfig() {
			if (vm.selected.type == 'instance') return true;
			if (vm.selected.type == 'group' && vm.groupBuoys.length > 0) return true;
			if (vm.selected.type == 'all' && vm.buoyInstances.length > 0) return true;
			return false;
		}
		
		/** Associate buoy instances with buoy groups */
		function updateGroupBuoys() {
			vm.groupBuoys = [];
			vm.buoyInstances.forEach(function(buoyInstance) {
				if (buoyInstance.buoyGroupId == vm.selected.obj.id) {
					vm.groupBuoys.push(buoyInstance);
				}
			});
		}
		
		/** Show config for all buoys */
		function selectAll() {
			stopEditing();
			vm.selected.type = 'all';
		}
		
		/** Close all edit fields */
		function stopEditing() {
			vm.editName.on = false;
			vm.editGroup.on = false;
			vm.newCommand = false;
			vm.newTrigger = false;
		}
		
		/** Show config for selected buoy group */
		function selectBuoyGroup(buoyGroup) {
			stopEditing();
			vm.selected.type = 'group';
			vm.selected.obj = buoyGroup;
			updateGroupBuoys();
		}
		
		/** Show config for selected buoy instance */
		function selectBuoyInstance(buoyInstance) {
			stopEditing();
			vm.selected.type = 'instance';
			vm.selected.obj = buoyInstance;
			updateGroupBuoys();
			queryBuoyInstanceSensors(buoyInstance.id);
		}

		/** Set all buoy groups to have no instances */
		function resetBuoyGroupInstances() {
			vm.buoyGroups.forEach(function(buoyGroup) {
				buoyGroup.type = 'group';
				buoyGroup.buoyInstances = [];
			});
		}

		/** Associate buoy instances with groups */
		function setBuoyInstanceGroup(buoyInstance) {
			vm.buoyGroups.forEach(function(buoyGroup) {
				if (buoyGroup.id == buoyInstance.buoyGroupId) {
					buoyInstance.buoyGroupName = removeEnclosingBrackets(buoyGroup.name);
					buoyGroup.buoyInstances.push(buoyInstance);
					return;
				}
			});
		}

		/** Toggle buoy group in list */
		function toggleBuoyGroup(buoyGroup) {
			buoyGroup.collapsed = !buoyGroup.collapsed;
		}
		
		/** Start editing buoy group or instance name */
		function startEditingName() {
			/* is it better to bind edit value directly to main buoyInstance,
			or wait until it's 'saved' before updating main buoyInstance?
			updating live is cooler */
			// vm.editName.value = vm.selected.obj.name;
			vm.editName.on = true;
		}
		
		/** Save buoy group or instance name to server and update page */
		function finishEditingName() {
			// vm.selected.obj.name = vm.editName.value;
			vm.editName.on = false;
			// update server
			if (vm.selected.type == 'group') {
				server.updateBuoyGroupName(vm.selected.obj.id,
					vm.selected.obj.name).then(function(res) {
						queryBuoyGroups();
						gui.alertSuccess('Name updated.')
					}, function(res) {
						gui.alertBadResponse(res);
					});
			} else if (vm.selected.type == 'instance') {
				server.updateBuoyInstanceName(vm.selected.obj.id,
					vm.selected.obj.name, vm.selected.obj.buoyGroupId).then(function(res) {
						queryBuoyInstances();
						gui.alertSuccess('Name updated.')
					}, function(res) {
						gui.alertBadResponse(res);
					});;
			}
		}
		
		/** Cancel buoy group or instance name editing */
		function cancelEditName() {
			vm.editName.on = false;
		}
		
		/** Start editing the group is a buoy instance is in */
		function startEditingBuoyGroup() {
			vm.editGroup.on = true;
			vm.editGroup.buoyGroupId = vm.selected.obj.buoyGroupId;
		}
		
		/** Save buoy's new group and name to server and update page */
		function finishEditingBuoyGroup() {
			vm.editGroup.on = false;
			// vm.selected.obj.buoyGroupId = vm.editGroup.buoyGroupId;
			// setBuoyGroupName(vm.selected.obj);
			// update server
			server.updateBuoyInstanceGroup(
				vm.selected.obj.id,
				vm.selected.obj.buoyGroupId,
				vm.selected.obj.name
			).then(function(res) {
				queryBuoyInstances();
				gui.alertSuccess('Buoy updated.')
			}, function(res) {
				gui.alertBadResponse(res);
			});
		}
		
		/** Cancel edit of a buoy's group */
		function cancelEditGroup() {
			vm.editGroup.on = false;
		}
		
		/**
		 * Determine whether an edit field is currently open. Used to
		 * ensure that users can only edit one particular thing at once.
		 * @return {bool} edit field is open
		 */
		function editing() {
			if (vm.editName.on) return true;
			if (vm.editGroup.on) return true;
			if (vm.newCommand) return true;
			if (vm.newTrigger) return true;
			return false;
		}
		
		/** Show config for a new buoy group */
		function selectNewBuoyGroup() {
			vm.selected.type = 'newGroup';
			vm.selected.obj = null;
		}
		
		/** Save new buoy group to server and update page */
		function saveNewBuoyGroup() {
			server.newBuoyGroup(vm.editName.value).then(function(res) {
				vm.selected.type = 'all';
				queryBuoyGroups();
				gui.alertSuccess('New group created.')
			}, function(res) {
				gui.alertBadResponse(res);
			});
		}
				
		/** Associate each command with buoy and command info */
		function parseCommands() {
			vm.commands.forEach(function(command) {
				// get buoy name
				for (var i = 0; i < vm.buoyInstances.length; i++) {
					var buoyInstance = vm.buoyInstances[i];
					if (command.buoyId == buoyInstance.buoyId) {
						command.buoyName = buoyInstance.name;
						if (command.buoyName == "") {
							command.buoyName = "(no name)"
						}
						break;
					}
				}
				// get command name and whether command type is archived
				for (var i = 0; i < vm.commandTypes.length; i++) {
					if (command.commandTypeId == vm.commandTypes[i].id) {
						command.commandName = vm.commandTypes[i].name;
						command.commandTypeArchived = vm.commandTypes[i].archived;
						break;
					}
				}
			});
		}
		
		/** 
		 * Filter 'unassigned' out of buoy group list
		 * @param  {object} buoyGroup 
		 * @return {bool}           show buoy group
		 */
		function buoyGroupFilter(buoyGroup) {
			if (buoyGroup.id != 0) return true;
			return false;
		}
		
		/**
		 * Filter commands list based on currently selected buoy/group
		 * @param  {object} command command
		 * @return {bool}         show command
		 */
		function commandFilter(command) {
			if (command.id == -2) return true;
			if (command.commandTypeArchived) return false;
			if (vm.selected.type == 'all') {
				return true;
			} else if (vm.selected.type == 'instance') {
				return buoyInstanceCommandFilter(command);
			} else if (vm.selected.type == 'group') {
				return buoyGroupCommandFilter(command);
			}
			return false;
		}
		
		/**
		 * Helper function for commandFilter
		 * @param  {object} command command
		 * @return {bool}         show command
		 */
		function buoyInstanceCommandFilter(command) {
			if (command.buoyId == vm.selected.obj.buoyId) return true;
			return false;
		}
		
		/**
		 * Helper function for commandFilter
		 * @param  {object} command command
		 * @return {bool}         show command
		 */
		function buoyGroupCommandFilter(command) {
			for (var i = 0; i < vm.buoyInstances.length; i++) {
				var buoyInstance = vm.buoyInstances[i];
				if (buoyInstance.buoyGroupId == vm.selected.obj.id) {
					if (command.buoyId == buoyInstance.buoyId) return true;
				}
			}
			return false;
		}

		/**
		 * Filter warning triggers list based on currently selected buoy/group
		 * @param  {object} trigger warning trigger
		 * @return {bool}         show trigger
		 */
		function triggerFilter(trigger) {
			if (trigger.id == -2) return true;
			// if (trigger.triggerTypeArchived) return false;
			if (vm.selected.type == 'all') {
				return true;
			} else if (vm.selected.type == 'instance') {
				return buoyInstanceTriggerFilter(trigger);
			} else if (vm.selected.type == 'group') {
				return buoyGroupTriggerFilter(trigger);
			}
			return false;
		}
		
		/**
		 * Helper function for triggerFilter
		 * @param  {object} trigger trigger
		 * @return {bool}         show trigger
		 */
		function buoyInstanceTriggerFilter(trigger) {
			if (trigger.buoyInstanceId == vm.selected.obj.id) return true;
			return false;
		}
		
		/**
		 * Helper function for triggerFilter
		 * @param  {object} trigger trigger
		 * @return {bool}         show trigger
		 */
		function buoyGroupTriggerFilter(trigger) {
			for (var i = 0; i < vm.buoyInstances.length; i++) {
				var buoyInstance = vm.buoyInstances[i];
				if (buoyInstance.buoyGroupId == vm.selected.obj.id) {
					if (trigger.buoyInstanceId == buoyInstance.id) return true;
				}
			}
			return false;
		}

		function buoyInstanceSensorFilter(sensor) {
			return true;
		}

		/**
		 * Remove enclosing brackets from a string
		 * @param  {str} str string to operate on
		 * @return {str}     edited string
		 */
		function removeEnclosingBrackets(str) {
			if (str[0] == '(') {
				str = str.substr(1);
			}
			if (str[str.length - 1] == ')') {
				str = str.substr(0, str.length - 1);
			}
			return str;
		}

		/**
		 * Return true if argument is a float. Otherwise make error
		 * and return false
		 */
		function isValueFloat(value) {
			if (isNaN(parseFloat(value))) {
				gui.alertError('Value must be a number.');
				return false;
			} 
			return true;				
		}

	}
})();
