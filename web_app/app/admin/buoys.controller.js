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
        .controller('BuoysController', BuoysController);
    
    /**
        * @ngdoc object
        * @name app.admin.controller:BuoysController
        * @description Provides viewmodel for admin view
        * @requires server
    **/
    function BuoysController($scope, server, gui) {
        var vm = this;
        
        /** Variables and methods bound to viewmodel */
        vm.buoys = [];
        vm.buoyInstances = [];
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
            queryBuoys();
            queryBuoyInstances();
        }

        /**
         * Query buoys from the server
         */
        function queryBuoys() {
            server.getBuoys().then(function(res) {
                vm.buoys = res.data.buoys;
                formatBuoys();
            }, function(res) {
                gui.alertBadResponse(res);
            });
        }

        /** Query active buoy instances from the server */
        function queryBuoyInstances() {
            server.getBuoyInstances().then(function(res) {
                vm.buoyInstances = res.data.buoyInstances;
                formatBuoys();
            }, function(res) {
                gui.alertBadResponse(res);
            });
        }
        
        /**
         * Associate each buoy with its active buoy instance
         */
        function formatBuoys() {
            if (!vm.buoys.length || !vm.buoyInstances.length) return;
            for (var i = 0; i < vm.buoys.length; i++) {
                var buoy = vm.buoys[i];
                buoy.name = '(none)';
                for (var j = 0; j < vm.buoyInstances.length; j++) {
                    var buoyInstance = vm.buoyInstances[j];
                    if (buoy.activeBuoyInstanceId == buoyInstance.id) {
                        buoy.name = buoyInstance.name;
                        break;
                    }
                }
            }
        }
        
        /**
         * Start editing a buoy, called on Edit button click
         * @param  {object} buoy 
         */
        function editExisting(buoy) {
            vm.editId = buoy.id;
            vm.editObj = buoy;
        }

        /**
         * Edits are saved, and server is updated, 
         * called on Save button click
         */
        function editSave() {
            server.addBuoy(vm.editObj).then(function(res) {
                queryBuoys();
                queryBuoyInstances();
                gui.alertSuccess('Buoy added.');
            }, function(res) {
                gui.alertBadResponse(res);
            });
            vm.buoys.splice(vm.buoys.length - 1, 1);
            vm.editId = -1;
        }
        
        /**
         * Edits are discarded, called on Cancel button click
         */
        function editCancel() {
            if (vm.editId == -2) {
                vm.buoys.splice(vm.buoys.length - 1, 1);
            }
            vm.editId = -1;
        }
        
        /**
         * Buoy is deleted, called on Confirm button click in delete modal
         * @param  {object} buoy buoy to delete
         */
        function confirmDelete(buoy) {
            server.deleteBuoy(buoy.id).then(function(res) {
                queryBuoys();
                gui.alertSuccess('Buoy deleted.');
            }, function(res) {
                gui.alertBadResponse(res);
            });
        }

        /**
         * Shows a delete confirmation, called on Delete button click
         * @param  {object} buoy buoy to delete
         */
        function editDelete(buoy) {
            vm.deleteObject = buoy;
            vm.deleteType = 'buoy';
            vm.deleteName = buoy.guid;
            gui.confirmDelete($scope);
        }
        
        /**
         * Determines whether to show delete button for each row
         * @param  {object} buoy
         * @return {bool}      whether to show delete button
         */
        function showDeleteButton(buoy) {
            return ((vm.editId == -1 || vm.editId == buoy.id) &&
                buoy.id != -2);
        }
        
        /**
         * Add new row to table and start editing, 
         * called on Add button click
         */
        function editNew() {
            var temp = { id: -2, guid: generateGuid(), archived: false };
            vm.buoys.push(temp);
            editExisting(temp);
        }

        /** Returns a randomly generated GUID */
        function generateGuid() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                return v.toString(16);
            });
        }
    }
})();