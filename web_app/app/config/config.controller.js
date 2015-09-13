(function() {
	'use strict';
	
	angular.module('app.config')
		.controller('ConfigController', ConfigController);
	
	function ConfigController(config, server) {
		var vm = this;
		
		vm.buoyGroups = [];
		vm.buoyInstances = [];
		vm.commands = [];
		vm.selected = { type: 'none', obj: null };
		vm.editName = {};
		vm.editName.on = false;
		vm.editGroup = {};
		vm.editGroup.on = false;
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
		vm.buoyInstanceCommandFilter = buoyInstanceCommandFilter;
		vm.buoyGroupCommandFilter = buoyGroupCommandFilter;
		
		activate();
		
		function activate() {
			config.queryBuoyGroups().then(function() {
				vm.buoyGroups = config.getBuoyGroups();
			});
			
			config.queryBuoyInstances().then(function() {
				vm.buoyInstances = config.getBuoyInstances();
				
				vm.buoyInstances.forEach(function(buoyInstance) {
					setBuoyGroupName(buoyInstance);
				});
			});
			
			server.getCommandTypes().then(function(res) {
				server.getBuoyCommands().then(function(res2) {
					parseCommands(res.data.commandTypes, res2.data.commands);
				}, function(res) {
					console.error(res);
				});
			}, function(res) {
					console.error(res);
			});
		}
		
		function selectAll() {
			vm.selected.type = 'all';
		}
		
		function selectBuoyGroup(buoyGroup) {
			vm.selected.type = 'group';
			vm.selected.obj = buoyGroup;
		}
		
		function selectBuoyInstance(buoyInstance) {
			vm.selected.type = 'instance';
			vm.selected.obj = buoyInstance;
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
				
		function parseCommands(commandTypes, commands) {
			vm.commands = commands;
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
				for (var i = 0; i < commandTypes.length; i++) {
					if (command.commandTypeId == commandTypes[i].id) {
						command.commandName = commandTypes[i].name;
						break;
					}
				}
			});
		}
		
		function buoyGroupFilter(buoyGroup) {
			if (buoyGroup.id != 0) return true;
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