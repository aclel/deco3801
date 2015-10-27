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
        var newId = Math.pow(2, 32) + 1;
        
        /** Variables and methods bound to viewmodel */
        editVm.newId = newId;
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
            if (!inputValid()) return;
            if (editVm.editId != newId) {
                vm.parseCommands(); // necessary to instantly update dropdown
                server.updateCommand(editVm.editObj).then(function(res) {
                    vm.queryCommands();
                    gui.alertSuccess('Command updated.');
                }, function(res) {
                    gui.alertBadResponse(res);
                });
            } else {
                editVm.editObj.id = -3;
                server.addCommand(editVm.editObj, getAffectedBuoyIds()).then(function(res) {
                    vm.queryCommands();
                    gui.alertSuccess('Command added.');
                }, function(res) {
                    gui.alertBadResponse(res);
                    vm.commands.splice(vm.commands.length - 1, 1);
                });
            }
            editVm.editId = -1;
        }

        function inputValid() {
            if (!/^\d*\.?\d*$/.test(editVm.editObj.value)) return false;
            return true;
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
            if (editVm.editId == newId) {
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
                command.id != newId);
        }
        
        /**
         * Add new row to table and start editing, 
         * called on Add button click
         */
        function editNew() {
            var temp = { id: newId, commandTypeId: 1 };
            if (vm.selected.type == 'instance') {
                temp.buoyName = vm.selected.obj.name;
            }
            vm.commands.push(temp);
            editExisting(temp);
        }
    }
})();