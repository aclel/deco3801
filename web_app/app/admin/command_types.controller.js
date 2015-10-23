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
    
    angular.module('app.admin')
        .controller('CommandTypesController', CommandTypesController);
    
    /**
        * @ngdoc object
        * @name app.admin.controller:CommandTypesController
        * @description Provides viewmodel for admin view
        * @requires server
    **/
    function CommandTypesController($scope, server, gui) {
        var vm = this;
        
        /** Variables and methods bound to viewmodel */
        vm.commandTypes = [];
        vm.editId = -1;
        vm.editExisting = editExisting;
        vm.editSave = editSave;
        vm.editDelete = editDelete;
        vm.editCancel = editCancel;
        vm.editNew = editNew;
        vm.showDeleteButton = showDeleteButton;
        vm.confirmDelete  = confirmDelete;
        
        activate();
        
        /** Called when controller is instantiated (admin page is loaded) */
        function activate() {
            queryCommandTypes();
        }

        /**
         * Query command types from the server
         */
        function queryCommandTypes() {
            server.getCommandTypes().then(function(res) {
                vm.commandTypes = res.data.commandTypes;
            }, function(res) {
                gui.alertBadResponse(res);
            });
        }
        
        /**
         * Start editing a command type, called on Edit button click
         * @param  {object} command type 
         */
        function editExisting(commandType) {
            vm.editId = commandType.id;
            vm.editObj = commandType;
            gui.focus('editExisting');
        }

        /**
         * Edits are saved, and server is updated, 
         * called on Save button click
         */
        function editSave() {
            if (vm.editId != -2) {
                server.updateCommandType(vm.editObj).then(function(res) {
                    queryCommandTypes();
                    gui.alertSuccess('Command type updated.');
                }, function(res) {
                    gui.alertBadResponse(res);
                });
            } else {
                vm.editObj.id = -3;
                server.addCommandType(vm.editObj).then(function(res) {
                    queryCommandTypes();
                    gui.alertSuccess('Command type added.');
                }, function(res) {
                    gui.alertBadResponse(res);
                    vm.commandTypes.splice(vm.commandTypes.length - 1, 1);
                });
            }
            vm.editId = -1;
        }
        
        /**
         * Edits are discarded, called on Cancel button click
         */
        function editCancel() {
            if (vm.editId == -2) {
                vm.commandTypes.splice(vm.commandTypes.length - 1, 1);
            }
            vm.editId = -1;
        }
        
        /**
         * Command type is deleted, called on Confirm button click in delete modal
         * @param  {object} command type to delete
         */
        function confirmDelete(commandType) {
            server.deleteCommandType(commandType.id).then(function(res) {
                queryCommandTypes();
                gui.alertSuccess('Command type deleted.');
            }, function(res) {
                gui.alertBadResponse(res);
            });
        }

        /**
         * Shows a delete confirmation, called on Delete button click
         * @param  {object} command type to edit
         */
        function editDelete(commandType) {
            vm.deleteObject = commandType;
            vm.deleteType = 'command type';
            vm.deleteName = commandType.name;
            vm.deletePostscript = "(This won't affect old readings.)";
            gui.confirmDelete($scope);
        }
        
        /**
         * Determines whether to show delete button for each row
         * @param  {object} command type
         * @return {bool}      whether to show delete button
         */
        function showDeleteButton(commandType) {
            return ((vm.editId == -1 || vm.editId == commandType.id) &&
                commandType.id != -2);
        }
        
        /**
         * Add new row to table and start editing, 
         * called on Add button click
         */
        function editNew() {
            var temp = { id: -2, archived: false };
            vm.commandTypes.push(temp);
            editExisting(temp);
        }
    }
})();