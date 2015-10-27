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
        .controller('TriggersController', TriggersController);
    
    /**
        * @ngdoc object
        * @name app.config.controller:TriggersController
        * @description Provides viewmodel for config view
        * @requires server
    **/
    function TriggersController($scope, server, gui) {
        var vm = $scope.vm; // parent controller
        var editVm = this;
        var newId = Math.pow(2, 32) + 1;
        
        /** Variables and methods bound to viewmodel */
        editVm.newId = newId;
        editVm.triggers = [];
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
         * Start editing a trigger type, called on Edit button click
         * @param  {object} trigger type 
         */
        function editExisting(trigger) {
            editVm.editId = trigger.id;
            editVm.editObj = trigger;
            gui.focus('editExisting');
        }

        /**
         * Edits are saved, and server is updated, 
         * called on Save button click
         */
        function editSave() {
            if (editVm.editId != newId) {
                vm.parseTriggers(); // necessary to instantly update dropdown
                server.updateWarningTrigger(editVm.editObj).then(function(res) {
                    vm.queryTriggers();
                    gui.alertSuccess('Warning trigger updated.');
                }, function(res) {
                    gui.alertBadResponse(res);
                });
            } else {
                editVm.editObj.id = -3;
                vm.parseTriggers(); // necessary to instantly update dropdown
                server.addWarningTrigger(editVm.editObj, getAffectedBuoyIds()).then(function(res) {
                    vm.queryTriggers();
                    gui.alertSuccess('Warning trigger added.');
                }, function(res) {
                    gui.alertBadResponse(res);
                    vm.triggers.splice(vm.triggers.length - 1, 1);
                });
            }
            editVm.editId = -1;
        }

        function getAffectedBuoyIds() {
            var ids = [];
            if (vm.selected.type == 'instance') {
                ids.push(vm.selected.obj.id);
            } else if (vm.selected.type == 'group') {
                // send trigger to each buoy in selected group
                vm.buoyInstances.forEach(function(buoyInstance) {
                    if (buoyInstance.buoyGroupId == vm.selected.obj.id) {
                        ids.push(buoyInstance.id);
                    }
                });
            } else if (vm.selected.type == 'all') {
                // send trigger to all buoys
                vm.buoyInstances.forEach(function(buoyInstance) {
                    ids.push(buoyInstance.id);
                });
            }
            return ids;
        }
        
        /**
         * Edits are discarded, called on Cancel button click
         */
        function editCancel() {
            if (editVm.editId == newId) {
                vm.triggers.splice(vm.triggers.length - 1, 1);
            }
            editVm.editId = -1;
        }
        
        /**
         * Warning trigger is deleted, called on Confirm button click in delete modal
         * @param  {object} trigger type to delete
         */
        function confirmDelete(trigger) {
            server.deleteWarningTrigger(trigger.id).then(function(res) {
                vm.queryTriggers();
                gui.alertSuccess('Warning trigger deleted.');
            }, function(res) {
                gui.alertBadResponse(res);
            });
        }

        /**
         * Shows a delete confirmation, called on Delete button click
         * @param  {object} trigger type to edit
         */
        function editDelete(trigger) {
            vm.deleteObject = trigger;
            vm.deleteType = 'trigger';
            vm.deleteName = trigger.buoyName + " " + trigger.sensorName;
            vm.confirmDelete = confirmDelete;
            // vm.deletePostscript = "(This won't affect old readings.)";
            gui.confirmDelete($scope);
        }
        
        /**
         * Determines whether to show delete button for each row
         * @param  {object} trigger type
         * @return {bool}      whether to show delete button
         */
        function showDeleteButton(trigger) {
            return ((editVm.editId == -1 || editVm.editId == trigger.id) &&
                trigger.id != newId);
        }
        
        /**
         * Add new row to table and start editing, 
         * called on Add button click
         */
        function editNew() {
            var temp = { id: newId, sensorTypeId: 1, operator: "<" };
            if (vm.selected.type == 'instance') {
                temp.buoyInstance = vm.selected.obj;
                temp.buoyInstanceId = vm.selected.obj.id;
            }
            vm.triggers.push(temp);
            editExisting(temp);
        }
    }
})();