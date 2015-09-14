(function() {
	'use strict';
	
	angular.module('app.config')
		.controller('ConfigController', ConfigController);
	
	function ConfigController(config, server) {
		var vm = this;
		
		vm.buoyGroups = [];
		vm.buoyInstances = [];
		vm.groupBuoys = [];
		vm.commands = [];
		vm.commandTypes = [];
		vm.command = { id: -1, value: '' };
		vm.selected = { type: 'none', obj: null };
		vm.editName = {};
		vm.editName.on = false;
		vm.editGroup = {};
		vm.editGroup.on = false;
		vm.newCommand = false;
		vm.newTrigger = false;
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
		vm.showBuoyConfig = showBuoyConfig;
		
		activate();
		
		function activate() {
			queryBuoyGroups();
			queryBuoyInstances();
			queryCommandTypes();
		}
		
		function queryBuoyGroups() {
			config.queryBuoyGroups().then(function() {
				vm.buoyGroups = config.getBuoyGroups();
			});
		}
		
		function queryBuoyInstances() {
			config.queryBuoyInstances().then(function() {
				vm.buoyInstances = config.getBuoyInstances();
				
				vm.buoyInstances.forEach(function(buoyInstance) {
					setBuoyGroupName(buoyInstance);
				});
			});
		}
		
		function queryCommandTypes() {
			server.getCommandTypes().then(function(res) {
				vm.commandTypes = res.data.commandTypes;
				queryCommands();
			}, function(res) {
				console.error(res);
			});
		}
		
		function queryCommands() {
			server.getBuoyCommands().then(function(res) {
				vm.commands = res.data.commands;
				parseCommands();
			}, function(res) {
				console.error(res);
			});
		}
		
		function showBuoyConfig() {
			if (vm.selected.type == 'instance') return true;
			if (vm.selected.type == 'group' && vm.groupBuoys.length > 0) return true;
			if (vm.selected.type == 'all' && vm.buoyInstances.length > 0) return true;
			return false;
		}
		
		function updateGroupBuoys() {
			vm.groupBuoys = [];
			vm.buoyInstances.forEach(function(buoyInstance) {
				if (buoyInstance.buoyGroupId == vm.selected.obj.id) {
					vm.groupBuoys.push(buoyInstance);
				}
			});
		}
		
		function selectAll() {
			stopEditing();
			vm.selected.type = 'all';
		}
		
		function stopEditing() {
			vm.editName.on = false;
			vm.editGroup.on = false;
			vm.newCommand = false;
			vm.newTrigger = false;
		}
		
		function selectBuoyGroup(buoyGroup) {
			stopEditing();
			vm.selected.type = 'group';
			vm.selected.obj = buoyGroup;
			updateGroupBuoys();
		}
		
		function selectBuoyInstance(buoyInstance) {
			stopEditing();
			vm.selected.type = 'instance';
			vm.selected.obj = buoyInstance;
			updateGroupBuoys();
		}
		
		function setBuoyGroupName(buoyInstance) {
			vm.buoyGroups.forEach(function(buoyGroup) {
				if (buoyGroup.id == buoyInstance.buoyGroupId) {
					buoyInstance.buoyGroupName = buoyGroup.name;
					return;
				}
			});
		}	
		
		function startEditingName() {
			/* is it better to bind edit value directly to main buoyInstance,
			or wait until it's 'saved' before updating main buoyInstance?
			updating live is cooler */
			// vm.editName.value = vm.selected.obj.name;
			vm.editName.on = true;
		}
		
		function finishEditingName() {
			// vm.selected.obj.name = vm.editName.value;
			vm.editName.on = false;
			// update server
			if (vm.selected.type == 'group') {
				server.updateBuoyGroupName(vm.selected.obj.id,
					vm.selected.obj.name);
			} else if (vm.selected.type == 'instance') {
				server.updateBuoyInstanceName(vm.selected.obj.id,
					vm.selected.obj.name, vm.selected.obj.buoyGroupId);
			}
		}
		
		function startEditingBuoyGroup() {
			vm.editGroup.on = true;
			vm.editGroup.buoyGroupId = vm.selected.obj.buoyGroupId;
		}
		
		function finishEditingBuoyGroup() {
			vm.editGroup.on = false;
			vm.selected.obj.buoyGroupId = vm.editGroup.buoyGroupId;
			setBuoyGroupName(vm.selected.obj);
			// update server
			server.updateBuoyInstanceGroup(
				vm.selected.obj.buoyId,
				vm.editGroup.buoyGroupId,
				vm.editGroup.name).then(function(res) {
				console.info(res);
			}, function(res) {
				console.error(res);
			});
			 
		}
		
		function selectNewBuoyGroup() {
			vm.selected.type = 'newGroup';
			vm.selected.obj = null;
		}
		
		function saveNewBuoyGroup() {
			server.newBuoyGroup(vm.editName.value).then(function(res) {
				vm.selected.type = 'all';
				// vm.selected.obj = res.data.
				console.info(res);
			}, function(res) {
				console.error(res);
			});
		}
				
		function parseCommands() {
			vm.commands.forEach(function(command) {
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
				for (var i = 0; i < vm.commandTypes.length; i++) {
					if (command.commandTypeId == vm.commandTypes[i].id) {
						command.commandName = vm.commandTypes[i].name;
						break;
					}
				}
			});
		}
		
		function sendCommand() {
			if (vm.command.id === -1 || vm.command.value == '') return;
			vm.newCommand = false;	
			var buoyIds = [];
			if (vm.selected.type == 'instance') {
				buoyIds.push(vm.selected.obj.buoyId);
			} else if (vm.selected.type == 'group') {
				vm.buoyInstances.forEach(function(buoyInstance) {
					if (buoyInstance.buoyGroupId == vm.selected.obj.id) {
						buoyIds.push(buoyInstance.buoyId);
					}
				});
			} else if (vm.selected.type == 'all') {
				vm.buoyInstances.forEach(function(buoyInstance) {
					buoyIds.push(buoyInstance.buoyId);
				});
			}
			sendCommands(buoyIds);			
			vm.command.id = -1;
			vm.command.value = '';
		}
		
		function sendCommands(buoyIds) {
			server.sendBuoyCommand(vm.command, buoyIds).then(function(res) {
				queryCommands();
			}, function(res) {
				console.error(res);
			});
		}
		
		function buoyGroupFilter(buoyGroup) {
			if (buoyGroup.id != 0) return true;
			return false;
		}
		
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
		
		function buoyInstanceCommandFilter(command) {
			if (command.buoyId == vm.selected.obj.buoyId) return true;
			return false;
		}
		
		function buoyGroupCommandFilter(command) {
			for (var i = 0; i < vm.buoyInstances.length; i++) {
				var buoyInstance = vm.buoyInstances[i];
				if (buoyInstance.buoyGroupId == vm.selected.obj.id) {
					if (command.buoyId == buoyInstance.buoyId) return true;
				}
			}
			return false;
		}
	}
})();