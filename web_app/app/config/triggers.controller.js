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
    function TriggersController($scope, server, gui, config) {
        var vm = this;

        var editOriginal;
        
        /** Variables and methods bound to viewmodel */
        vm.newId = config.newId;
        vm.triggers = config.triggers;
        vm.editId = -1;
        vm.selected = config.selected;
        vm.buoyInstanceSensors = config.buoyInstanceSensors;
        vm.operators = config.operators;
        vm.editExisting = editExisting;
        vm.editSave = editSave;
        vm.editDelete = editDelete;
        vm.editCancel = editCancel;
        vm.editNew = editNew;
        vm.showDeleteButton = showDeleteButton;
        vm.confirmDelete  = confirmDelete;
        vm.triggerFilter = config.triggerFilter;
        vm.sensorsAttached = config.sensorsAttached;


        activate();

        function activate() {
            $scope.$on('cancelEditing', editCancel);
        }

        /**
         * Start editing a trigger type, called on Edit button click
         * @param  {object} trigger type 
         */
        function editExisting(trigger) {
            saveOriginal(trigger);
            vm.editId = trigger.id;
            vm.editObj = trigger;
            gui.focus('editExisting');
        }

        /**
         * Edits are saved, and server is updated, 
         * called on Save button click
         */
        function editSave() {
            if (!inputValid()) { return; }
            if (vm.editId !== vm.newId) {
                config.parseTriggers(); // necessary to instantly update dropdown
                server.updateWarningTrigger(vm.editObj).then(function(res) {
                    config.queryTriggers();
                    gui.alertSuccess('Warning trigger updated.');
                }, function(res) {
                    gui.alertBadResponse(res);
                });
            } else {
                vm.editObj.id = -3;
                config.parseTriggers(); // necessary to instantly update dropdown
                server.addWarningTrigger(vm.editObj, getAffectedBuoyIds()).then(function(res) {
                    config.queryTriggers();
                    gui.alertSuccess('Warning trigger added.');
                }, function(res) {
                    gui.alertBadResponse(res);
                    config.triggers.splice(config.triggers.length - 1, 1);
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
                ids.push(config.selected.obj.id);
            } else if (config.selected.type === 'group') {
                // send trigger to each buoy in selected group
                config.buoyInstances.forEach(function(buoyInstance) {
                    if (buoyInstance.buoyGroupId === config.selected.obj.id) {
                        ids.push(buoyInstance.id);
                    }
                });
            } else if (config.selected.type === 'all') {
                // send trigger to all buoys
                config.buoyInstances.forEach(function(buoyInstance) {
                    ids.push(buoyInstance.id);
                });
            }
            return ids;
        }
        
        /**
         * Edits are discarded, called on Cancel button click
         */
        function editCancel() {
            if (vm.editId === vm.newId) {
                config.triggers.splice(config.triggers.length - 1, 1);
            }
            restoreOriginal();
            vm.editId = -1;
        }
        
        /**
         * Warning trigger is deleted, called on Confirm button click in delete modal
         * @param  {object} trigger type to delete
         */
        function confirmDelete(trigger) {
            server.deleteWarningTrigger(trigger.id).then(function(res) {
                config.queryTriggers();
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
            vm.deleteName = trigger.buoyName + ' ' + trigger.sensorName;
            vm.confirmDelete = confirmDelete;
            // vm.deletePostscript = '(This won't affect old readings.)';
            gui.confirmDelete($scope);
        }
        
        /**
         * Determines whether to show delete button for each row
         * @param  {object} trigger type
         * @return {bool}      whether to show delete button
         */
        function showDeleteButton(trigger) {
            return ((vm.editId === -1 || vm.editId === trigger.id) &&
                trigger.id !== vm.newId);
        }
        
        /**
         * Add new row to table and start editing, 
         * called on Add button click
         */
        function editNew() {
            var temp = { id: vm.newId, sensorTypeId: 1, operator: '<' };
            if (config.selected.type === 'instance') {
                temp.buoyInstanceName = config.selected.obj.name;
                temp.buoyInstanceId = config.selected.obj.id;
            }
            config.triggers.push(temp);
            editExisting(temp);
        }

        function saveOriginal(obj) {
            // deep copy by value
            console.log(obj);
            editOriginal = JSON.parse(JSON.stringify(obj));
        }

        function restoreOriginal() {
            if (!editOriginal) { return; }
            vm.editObj.sensorTypeId = editOriginal.sensorTypeId;
            vm.editObj.operator = editOriginal.operator;
            vm.editObj.value = editOriginal.value;
            vm.editObj.message = editOriginal.message;
        }
    }
})();