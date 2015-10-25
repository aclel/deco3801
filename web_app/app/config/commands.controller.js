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
        .controller('CommandsController', CommandsController);
    
    /**
        * @ngdoc object
        * @name app.config.controller:CommandsController
        * @description Provides viewmodel for config view
        * @requires server
    **/
    function CommandsController($scope, server, gui) {
        var vm = $scope.vm; // parent controller
        var editVm = this;
        
        /** Variables and methods bound to viewmodel */
        editVm.commands = [];
        editVm.editId = -1;
        editVm.editExisting = editExisting;
        editVm.editSave = editSave;
        editVm.editDelete = editDelete;
        editVm.editCancel = editCancel;
        editVm.editNew = editNew;
        editVm.showDeleteButton = showDeleteButton;
        editVm.confirmDelete  = confirmDelete;
        
        activate();
        
        /** Called when controller is instantiated (admin page is loaded) */
        function activate() {
            // queryCommands();
        }

        /**
         * Query command types from the server
         */
        function queryCommands() {
            server.getBuoyCommands().then(function(res) {
                vm.commands = res.data.commands;
                parseCommands();
            }, function(res) {
                gui.alertBadResponse(res);
            });
        }

        /** Associate each command with buoy and command info */
        function parseCommands() {
            vm.commands.forEach(function(command) {
                // get buoy name
                for (var i = 0; i < editVm.buoyInstances.length; i++) {
                    var buoyInstance = editVm.buoyInstances[i];
                    if (command.buoyId == buoyInstance.buoyId) {
                        command.buoyName = buoyInstance.name;
                        if (command.buoyName == "") {
                            command.buoyName = "(no name)"
                        }
                        break;
                    }
                }
                // get command name
                for (var i = 0; i < editVm.commandTypes.length; i++) {
                    if (command.commandTypeId == editVm.commandTypes[i].id) {
                        command.commandName = editVm.commandTypes[i].name;
                        break;
                    }
                }
            });
        }
        
        /**
         * Start editing a command type, called on Edit button click
         * @param  {object} command type 
         */
        function editExisting(command) {
            editVm.editId = command.id;
            editVm.editObj = command;
            gui.focus('editExisting');
        }

        /**
         * Edits are saved, and server is updated, 
         * called on Save button click
         */
        function editSave() {
            if (editVm.editId != -2) {
                vm.parseCommands(); // necessary to instantly update dropdown
                server.updateCommand(editVm.editObj).then(function(res) {
                    vm.queryCommands();
                    gui.alertSuccess('Command type updated.');
                }, function(res) {
                    gui.alertBadResponse(res);
                });
            } else {
                editVm.editObj.id = -3;
                server.addCommand(editVm.editObj, getAffectedBuoyIds()).then(function(res) {
                    vm.queryCommands();
                    gui.alertSuccess('Command type added.');
                }, function(res) {
                    gui.alertBadResponse(res);
                    vm.commands.splice(vm.commands.length - 1, 1);
                });
            }
            editVm.editId = -1;
        }

        function getAffectedBuoyIds() {
            var ids = [];
            if (vm.selected.type == 'instance') {
                ids.push(vm.selected.obj.buoyId);
            } else if (vm.selected.type == 'group') {
                // send command to each buoy in selected group
                vm.buoyInstances.forEach(function(buoyInstance) {
                    if (buoyInstance.buoyGroupId == vm.selected.obj.id) {
                        ids.push(buoyInstance.buoyId);
                    }
                });
            } else if (vm.selected.type == 'all') {
                // send command to all buoys
                vm.buoyInstances.forEach(function(buoyInstance) {
                    ids.push(buoyInstance.buoyId);
                });
            }
            return ids;
        }
        
        /**
         * Edits are discarded, called on Cancel button click
         */
        function editCancel() {
            if (editVm.editId == -2) {
                vm.commands.splice(vm.commands.length - 1, 1);
            }
            editVm.editId = -1;
        }
        
        /**
         * Command type is deleted, called on Confirm button click in delete modal
         * @param  {object} command type to delete
         */
        function confirmDelete(command) {
            server.deleteCommand(command.id).then(function(res) {
                vm.queryCommands();
                gui.alertSuccess('Command deleted.');
            }, function(res) {
                gui.alertBadResponse(res);
            });
        }

        /**
         * Shows a delete confirmation, called on Delete button click
         * @param  {object} command type to edit
         */
        function editDelete(command) {
            vm.deleteObject = command;
            vm.deleteType = 'command';
            vm.deleteName = command.buoyName + " " + command.commandName;
            vm.confirmDelete = confirmDelete;
            // vm.deletePostscript = "(This won't affect old readings.)";
            gui.confirmDelete($scope);
        }
        
        /**
         * Determines whether to show delete button for each row
         * @param  {object} command type
         * @return {bool}      whether to show delete button
         */
        function showDeleteButton(command) {
            return ((editVm.editId == -1 || editVm.editId == command.id) &&
                command.id != -2);
        }
        
        /**
         * Add new row to table and start editing, 
         * called on Add button click
         */
        function editNew() {
            var temp = { id: -2, commandTypeId: 1 };
            if (vm.selected.type == 'instance') {
                temp.buoyName = vm.selected.obj.name;
            }
            vm.commands.push(temp);
            editExisting(temp);
        }
    }
})();