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
	function ConfigController(server, gui) {
		var vm = this;
		
		/** Variables and methods bound to viewmodel */
		vm.buoyGroups = [];
		vm.buoyInstances = [];
		vm.groupBuoys = [];
		vm.commands = [];
		vm.commandTypes = [];
		vm.sensorTypes = [];
		vm.warningTriggers = [];
		vm.command = { id: -1, value: '' };
		vm.selected = { type: 'all', obj: null };
		vm.editName = {};
		vm.editName.on = false;
		vm.editGroup = {};
		vm.editGroup.on = false;
		vm.newCommand = false;
		vm.newTrigger = false;
		vm.operators = [ '<', '>', '=' ];
		vm.trigger = {};
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
		vm.sendCommand = sendCommand;
		vm.deleteCommand = deleteCommand;
		vm.showBuoyConfig = showBuoyConfig;
		vm.addTrigger = addTrigger;
		vm.cancelNewCommand = cancelNewCommand;
		vm.cancelNewTrigger = cancelNewTrigger;
		vm.editing = editing;
		vm.cancelEditName = cancelEditName;
		vm.cancelEditGroup = cancelEditGroup;
		vm.toggleBuoyGroup = toggleBuoyGroup;
		
		activate();
		
		/** Called when controller is instantiated (config page is loaded) */
		function activate() {
			queryBuoyGroups();
			queryBuoyInstances();
			queryCommandTypes();
			queryWarningTriggers();
			resetNewTrigger();
			setTreeOptions();
		}

		/** Set the tree options for buoy groups list */
		function setTreeOptions() {
			vm.treeOptions = {
				accept: function(source, dest, destIndex) {
					// if (dest.nodropEnabled) return false;

					if (source.$modelValue.type != "instance") {
						// prevent groups from being moved into groups
						if (dest.depth() > 0) return false;
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
					// console.log(event);
				},
				dragStart: function(event) {
					// select buoy group/instance when it's clicked
					//  (dragging overrides ng-click event)
					var source = event.source.nodeScope;
					if (source.$modelValue.type == "group") {
						selectBuoyGroup(source.$modelValue);
					} else {
						selectBuoyInstance(source.$modelValue);
					}
				}
			};
		}
		
		/** Query buoy groups from the server */
		function queryBuoyGroups() {
			server.getBuoyGroups().then(function(res) {
				vm.buoyGroups = res.data.buoyGroups;
				parseGroupNames()
			}, function(res) {
				gui.alertBadResponse(res);
			});
		}
		
		/** Query buoy instances from the server */
		function queryBuoyInstances() {
			server.getBuoyInstances().then(function(res) {
				vm.buoyInstances = res.data.buoyInstances;
				parseGroupNames()
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
			server.getBuoyCommands().then(function(res) {
				vm.commands = res.data.commands;
				parseCommands();
			}, function(res) {
				gui.alertBadResponse(res);
			});
		}
		
		/** Query warning triggers from the server */
		function queryWarningTriggers() {
			server.getWarningTriggers().then(function(res) {
				vm.warningTriggers = res.data.warningTriggers;
				querySensorTypes();
			}, function(res) {
				gui.alertBadResponse(res);
			});
		}
		
		/** Query sensor types from the server */
		function querySensorTypes() {
			server.getSensorTypes().then(function(res) {
				vm.sensorTypes = res.data.sensorTypes;
				parseWarningSensors();
			}, function(res) {
				gui.alertBadResponse(res);
			});
		}
		
		/** Associate buoy instances with groups */
		function parseGroupNames() {
			resetBuoyGroupInstances();
			vm.buoyInstances.forEach(function(buoyInstance) {
				setBuoyInstanceGroup(buoyInstance);
				buoyInstance.type = 'instance';
			});
		}
		
		/** Associate sensor and buoy info with warnings */
		function parseWarningSensors() {
			vm.warningTriggers.forEach(function(trigger) {
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
						break;
					}
				}
			});
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
			vm.selected.obj.buoyGroupId = vm.editGroup.buoyGroupId;
			setBuoyGroupName(vm.selected.obj);
			// update server
			server.updateBuoyInstanceGroup(
				vm.selected.obj.buoyId,
				vm.editGroup.buoyGroupId,
				vm.editGroup.name
			).then(function(res) {
				queryBuoyInstances();
				gui.alertSuccess('New buoy instance created.')
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
				// get command name
				for (var i = 0; i < vm.commandTypes.length; i++) {
					if (command.commandTypeId == vm.commandTypes[i].id) {
						command.commandName = vm.commandTypes[i].name;
						break;
					}
				}
			});
		}
		
		/** Prepare to send new command(s) to server */
		function sendCommand() {
			if (vm.command.id == -1 || vm.command.value == '') return;
			vm.newCommand = false;
			var buoyIds = []; // buoys to send command for
			if (vm.selected.type == 'instance') {
				buoyIds.push(vm.selected.obj.buoyId);
			} else if (vm.selected.type == 'group') {
				// send command to each buoy in selected group
				vm.buoyInstances.forEach(function(buoyInstance) {
					if (buoyInstance.buoyGroupId == vm.selected.obj.id) {
						buoyIds.push(buoyInstance.buoyId);
					}
				});
			} else if (vm.selected.type == 'all') {
				// send command to all buoys
				vm.buoyInstances.forEach(function(buoyInstance) {
					buoyIds.push(buoyInstance.buoyId);
				});
			}
			sendCommands(buoyIds);			
			resetNewCommand();
		}
		
		/** Clear command input fields */
		function resetNewCommand() {
			vm.command.id = -1;
			vm.command.value = '';
		}
		
		/** Cancel editing of new command */
		function cancelNewCommand() {
			vm.newCommand = false;
			resetNewCommand();
		}
		
		/** Send command(s) for buoy(s) to server and update page */
		function sendCommands(buoyIds) {
			server.sendBuoyCommand(vm.command, buoyIds).then(function(res) {
				queryCommands();
				gui.alertSuccess('Command queued.')
			}, function(res) {
				gui.alertBadResponse(res);
			});
		}
		
		/** Delete command(s) for buoy(s) and update server */
		function deleteCommand(command) {
			
		}
		
		/** Prepare to add new trigger warning for buoy or group */
		function addTrigger() {
			if (vm.trigger.sensorTypeId == -1 || vm.trigger.value == '') return;
			vm.newTrigger = false;
			var buoyInstanceIds = []; // buoys instances to add trigger for
			if (vm.selected.type == 'instance') {
				buoyInstanceIds.push(vm.selected.obj.id);
			} else if (vm.selected.type == 'group') {
				// add trigger for each buoy in group
				vm.buoyInstances.forEach(function(buoyInstance) {
					if (buoyInstance.buoyGroupId == vm.selected.obj.id) {
						buoyInstanceIds.push(buoyInstance.id);
					}
				});
			} else if (vm.selected.type == 'all') {
				// add trigger for all buoys
				vm.buoyInstances.forEach(function(buoyInstance) {
					buoyInstanceIds.push(buoyInstance.id);
				});
			}
			sendTriggers(buoyInstanceIds);
			resetNewTrigger();
		}
		
		/** Send new warning triggers to server and update page */
		function sendTriggers(buoyIds) {
			server.addWarningTriggers(vm.trigger, buoyIds).then(function(res) {
				queryWarningTriggers();
				gui.alertSuccess('Warning trigger added.')
			}, function(res) {
				gui.alertBadResponse(res);
			});
		}
		
		/** Clear trigger inputs */
		function resetNewTrigger() {
			vm.trigger = {
				sensorTypeId: -1,
				operator: '<',
				value: '',
				message: ''
			};
		}
		
		/** Cancel creation of a new trigger */
		function cancelNewTrigger() {
			vm.newTrigger = false;
			resetNewTrigger();
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
	}
})();