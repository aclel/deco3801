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
    function CommandsController($scope, server, gui, config) {
        var vm = this;

        var editOriginal;
        
        /** Variables and methods bound to viewmodel */
        vm.newId = config.newId;
        vm.commands = config.commands;
        vm.commandTypes = config.commandTypes;
        vm.editId = -1;
        vm.selected = config.selected;
        vm.editExisting = editExisting;
        vm.editSave = editSave;
        vm.editDelete = editDelete;
        vm.editCancel = editCancel;
        vm.editNew = editNew;
        vm.showDeleteButton = showDeleteButton;
        vm.confirmDelete  = confirmDelete;
        vm.commandFilter = config.commandFilter;
        

        activate();

        function activate() {
            $scope.$on('cancelEditing', editCancel);
        }

        /**
         * Start editing a command type, called on Edit button click
         * @param  {object} command type 
         */
        function editExisting(command) {
            saveOriginal(command);
            vm.editId = command.id;
            vm.editObj = command;
            gui.focus('editExisting');
        }

        /**
         * Edits are saved, and server is updated, 
         * called on Save button click
         */
        function editSave() {
            if (!inputValid()) { return; }
            if (vm.editId !== vm.newId) {
                config.parseCommands(); // necessary to instantly update dropdown
                server.updateCommand(vm.editObj).then(function(res) {
                    config.queryCommands();
                    gui.alertSuccess('Command updated.');
                }, function(res) {
                    gui.alertBadResponse(res);
                });
            } else {
                vm.editObj.id = -3;
                server.addCommand(vm.editObj, getAffectedBuoyIds()).then(function(res) {
                    config.queryCommands();
                    gui.alertSuccess('Command added.');
                }, function(res) {
                    gui.alertBadResponse(res);
                    config.commands.splice(config.commands.length - 1, 1);
                });
            }
            vm.editId = -1;
        }

        function inputValid() {
            if (!/^\d*\.?\d*$/.test(vm.editObj.value)) { return false; }
            return true;
        }

        function getAffectedBuoyIds() {
            var ids = [];
            if (config.selected.type === 'instance') {
                ids.push(config.selected.obj.buoyId);
            } else if (config.selected.type === 'group') {
                // send command to each buoy in selected group
                config.buoyInstances.forEach(function(buoyInstance) {
                    if (buoyInstance.buoyGroupId === config.selected.obj.id) {
                        ids.push(buoyInstance.buoyId);
                    }
                });
            } else if (config.selected.type === 'all') {
                // send command to all buoys
                config.buoyInstances.forEach(function(buoyInstance) {
                    ids.push(buoyInstance.buoyId);
                });
            }
            return ids;
        }
        
        /**
         * Edits are discarded, called on Cancel button click
         */
        function editCancel() {
            if (vm.editId === vm.newId) {
                config.commands.splice(config.commands.length - 1, 1);
            }
            restoreOriginal();
            vm.editId = -1;
        }
        
        /**
         * Command type is deleted, called on Confirm button click in delete modal
         * @param  {object} command type to delete
         */
        function confirmDelete(command) {
            server.deleteCommand(command.id).then(function(res) {
                config.queryCommands();
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
            vm.deleteName = command.buoyName + ' ' + command.commandName;
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
            return ((vm.editId === -1 || vm.editId === command.id) &&
                command.id !== vm.newId);
        }
        
        /**
         * Add new row to table and start editing, 
         * called on Add button click
         */
        function editNew() {
            var temp = { id: vm.newId, commandTypeId: 1 };
            if (config.selected.type === 'instance') {
                temp.buoyName = config.selected.obj.name;
            }
            config.commands.push(temp);
            editExisting(temp);
        }

        function saveOriginal(obj) {
            // deep copy by value
            console.log(obj);
            editOriginal = JSON.parse(JSON.stringify(obj));
        }

        function restoreOriginal() {
            if (!editOriginal) { return; }
            vm.editObj.commandTypeId = editOriginal.commandTypeId;
            vm.editObj.value = editOriginal.value;
        }
    }
})();