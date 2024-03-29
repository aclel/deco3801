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
        .controller('SensorTypesController', SensorTypesController);
    
    /**
        * @ngdoc object
        * @name app.admin.controller:SensorTypesController
        * @description Provides viewmodel for admin view
        * @requires $scope
        * @requires server
        * @requires gui
    **/
    function SensorTypesController($scope, server, gui) {
        var vm = this;

        /** Internal variables */
        var editOriginal;
        
        /** Variables and methods bound to viewmodel */
        vm.sensorTypes = [];
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
            querySensorTypes();
        }

        /**
         * Query sensor types from the server
         */
        function querySensorTypes() {
            server.getSensorTypes().then(function(res) {
                vm.sensorTypes = res.data.sensorTypes;
            }, function(res) {
                gui.alertBadResponse(res);
            });
        }
        
        /**
         * Start editing a sensor type, called on Edit button click
         * @param  {object} sensor type 
         */
        function editExisting(sensorType) {
            saveOriginal(sensorType);
            vm.editId = sensorType.id;
            vm.editObj = sensorType;
            gui.focus('editExisting');
        }

        /**
         * Edits are saved, and server is updated, 
         * called on Save button click
         */
        function editSave() {
            if (!inputValid()) return;
            if (vm.editId != -2) {
                server.updateSensorType(vm.editObj).then(function(res) {
                    querySensorTypes();
                    gui.alertSuccess('Sensor type updated.');
                }, function(res) {
                    gui.alertBadResponse(res);
                });
            } else {
                vm.editObj.id = -3;
                server.addSensorType(vm.editObj).then(function(res) {
                    querySensorTypes();
                    gui.alertSuccess('Sensor type added.');
                }, function(res) {
                    gui.alertBadResponse(res);
                    vm.sensorTypes.splice(vm.sensorTypes.length - 1, 1);
                });
            }
            vm.editId = -1;
        }

        /**
         * Validate input
         * @return {boolean} true if input is valid, else false
         */
        function inputValid() {
            if (!/^\d*\.?\d*$/.test(vm.editObj.upperBound)) return false;
            if (!/^\d*\.?\d*$/.test(vm.editObj.lowerBound)) return false;
            if (!vm.editObj.name) return false;
            if (!vm.editObj.unit) return false;
            return true;
        }
        
        /**
         * Edits are discarded, called on Cancel button click
         */
        function editCancel() {
            if (vm.editId == -2) {
                vm.sensorTypes.splice(vm.sensorTypes.length - 1, 1);
            }
            restoreOriginal();
            vm.editId = -1;
        }
        
        /**
         * Sensor type is deleted, called on Confirm button click in delete modal
         * @param  {object} sensor type sensor type to delete
         */
        function confirmDelete(sensorType) {
            server.deleteSensorType(sensorType.id).then(function(res) {
                querySensorTypes();
                gui.alertSuccess('Sensor type deleted.');
            }, function(res) {
                gui.alertBadResponse(res);
            });
        }

        /**
         * Shows a delete confirmation, called on Delete button click
         * @param  {object} sensor type sensor type to delete
         */
        function editDelete(sensorType) {
            vm.deleteObject = sensorType;
            vm.deleteType = 'sensor type';
            vm.deleteName = sensorType.name;
            vm.deletePostscript = "(This won't affect old readings.)";
            gui.confirmDelete($scope);
        }
        
        /**
         * Determines whether to show delete button for each row
         * @param  {object} sensor type
         * @return {bool}      whether to show delete button
         */
        function showDeleteButton(sensorType) {
            return ((vm.editId == -1 || vm.editId == sensorType.id) &&
                sensorType.id != -2);
        }
        
        /**
         * Add new row to table and start editing, 
         * called on Add button click
         */
        function editNew() {
            var temp = { id: -2, archived: false };
            vm.sensorTypes.push(temp);
            editExisting(temp);
        }

        /**
         * Save an object details so it can be restored if an edit is cancelled
         * @param  {object} obj object to save
         */
        function saveOriginal(obj) {
            editOriginal = JSON.parse(JSON.stringify(obj));
        }

        /**
         * Restore an object details if an edit was cancelled
         */
        function restoreOriginal() {
            if (!editOriginal) { return; }
            vm.editObj.name = editOriginal.name;
            vm.editObj.description = editOriginal.description;
            vm.editObj.unit = editOriginal.unit;
            vm.editObj.upperBound = editOriginal.upperBound;
            vm.editObj.lowerBound = editOriginal.lowerBound;
        }
    }
})();