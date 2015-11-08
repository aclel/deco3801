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

    /** Unit tests for sensorTypes controller */
    describe('Controller: SensorTypesController', function() {
        var $controller, ctrl, scope, rootScope, server, deferred, gui, timeout;

        beforeEach(module('app'));
        beforeEach(module('mock.server'));

        // Mock services and spy on methods
        beforeEach(inject(function($q, _server_, _gui_) {
            deferred = $q.defer();
            server = _server_;
            spyOn(server, 'getSensorTypes').and.callThrough();
            spyOn(server, 'addSensorType').and.returnValue(deferred.promise);
            spyOn(server, 'updateSensorType').and.returnValue(deferred.promise);
            spyOn(server, 'deleteSensorType').and.returnValue(deferred.promise);
            gui = _gui_;
            spyOn(gui, 'alertBadResponse').and.callThrough();
            spyOn(gui, 'focus').and.callThrough();
            spyOn(gui, 'confirmDelete').and.callThrough();
            spyOn(gui, 'alertSuccess').and.callThrough();
        }));

        // Initialise the controller
        beforeEach(inject(function($controller, $rootScope, $timeout) {
            scope = $rootScope.$new();
            ctrl = $controller('SensorTypesController', {
                $scope: scope,
            });
            rootScope = $rootScope;
            timeout = $timeout;
        }));

        describe('State', function() {
            it('should exist', function() {
                expect(ctrl).toBeDefined();
            });

            it('should expose stuff', function() {
                expect(angular.isArray(ctrl.sensorTypes)).toBe(true);
                expect(ctrl.editId).toEqual(-1);

                expect(ctrl.editExisting).toBeDefined();
                expect(ctrl.editSave).toBeDefined();
                expect(ctrl.editDelete).toBeDefined();
                expect(ctrl.editCancel).toBeDefined();
                expect(ctrl.editNew).toBeDefined();
                expect(ctrl.showDeleteButton).toBeDefined();
                expect(ctrl.confirmDelete).toBeDefined();
            });
        });

        describe('Activate', function () {
            it('should query sensorTypes', function () {
                expect(server.getSensorTypes).toHaveBeenCalled();
            });
        });

        describe('Resource methods', function () {
            beforeEach(function() {
                scope.$digest();
            });

            it('editExisting should update editObj', function () {
                var sensorType = ctrl.sensorTypes[1];
                ctrl.editExisting(sensorType);
                expect(ctrl.editId).toEqual(sensorType.id);
                expect(ctrl.editObj).toEqual(sensorType);
            });

            it('editCancel should discard temp editObj', function () {
                var len = ctrl.sensorTypes.length;
                ctrl.editCancel();
                expect(ctrl.sensorTypes.length).toEqual(len);
                ctrl.editNew();
                len = ctrl.sensorTypes.length;
                ctrl.editCancel();
                expect(ctrl.sensorTypes.length).toEqual(len - 1);
                expect(ctrl.editId).toEqual(-1);
            });

            it('editCancel should restore existing back to its original state', function () {
                var sensorType = ctrl.sensorTypes[1];
                var original = JSON.stringify(sensorType);
                ctrl.editExisting(sensorType);
                sensorType.upperBound++;
                ctrl.editCancel();
                expect(JSON.stringify(sensorType)).toEqual(original);
                expect(ctrl.editId).toEqual(-1);
            });

            it('editDelete should prepare to delete', function () {
                var sensorType = ctrl.sensorTypes[1];
                ctrl.editDelete(sensorType);
                expect(ctrl.deleteObject).toEqual(sensorType);
                expect(ctrl.deleteType).toEqual('sensor type');
                expect(ctrl.deleteName).toEqual(sensorType.name);
                expect(gui.confirmDelete).toHaveBeenCalled();
            });

            it('editNew should create a temp editObj', function () {
                ctrl.editNew();
                expect(ctrl.editId).toEqual(-2);
                expect(ctrl.sensorTypes[ctrl.sensorTypes.length - 1]).toEqual(ctrl.editObj); 
                expect(gui.focus).toHaveBeenCalled();
                timeout.flush();
            });

            it('showDeleteButton should work', function () {
                var sensorType = ctrl.sensorTypes[1];
                expect(ctrl.showDeleteButton(sensorType)).toBe(true);
                ctrl.editExisting(sensorType);
                expect(ctrl.showDeleteButton(sensorType)).toBe(true);
                ctrl.editExisting(ctrl.sensorTypes[0]);
                expect(ctrl.showDeleteButton(sensorType)).toBe(false);
                ctrl.editNew();
                expect(ctrl.showDeleteButton(sensorType)).toBe(false);
            });

            it('editSave of new should update sensorTypes on success', function () {
                ctrl.editNew();
                ctrl.editObj.name = 'asd';
                ctrl.editObj.unit = '%';
                ctrl.editObj.upperBound = 100;
                ctrl.editObj.lowerBound = 0;
                ctrl.editSave();
                deferred.resolve();
                server.getSensorTypes.calls.reset();
                scope.$digest();
                expect(server.getSensorTypes).toHaveBeenCalled();
                expect(gui.alertSuccess).toHaveBeenCalled();
            });

            it('editSave of existing should update sensorTypes on success', function () {
                ctrl.editExisting(ctrl.sensorTypes[1]);
                ctrl.editSave();
                deferred.resolve();
                server.getSensorTypes.calls.reset();
                scope.$digest();
                expect(server.getSensorTypes).toHaveBeenCalled();
                expect(gui.alertSuccess).toHaveBeenCalled();
            });

            it('editSave of new should revert on failure', function () {
                ctrl.editNew();
                ctrl.editObj.name = 'asd';
                ctrl.editObj.unit = '%';
                ctrl.editObj.upperBound = 100;
                ctrl.editObj.lowerBound = 0;
                ctrl.editSave();
                var len = ctrl.sensorTypes.length;
                deferred.reject({ data: '' });
                scope.$digest();
                expect(gui.alertBadResponse).toHaveBeenCalled();
                expect(ctrl.sensorTypes.length).toEqual(len - 1);
            });

            it('editSave of existing should revert on failure', function () {
                ctrl.editExisting(ctrl.sensorTypes[1]);
                ctrl.editSave();
                deferred.reject({ data: '' });
                scope.$digest();
                expect(gui.alertBadResponse).toHaveBeenCalled();
            });

            it('confirmDelete should delete the sensorType', function () {
                ctrl.confirmDelete(ctrl.sensorTypes[1]);
                deferred.resolve();
                server.getSensorTypes.calls.reset();
                scope.$digest();
                expect(server.getSensorTypes).toHaveBeenCalled();
                expect(gui.alertSuccess).toHaveBeenCalled();
            });

            it('confirmDelete should display an alert on failure', function () {
                ctrl.confirmDelete(ctrl.sensorTypes[1]);
                deferred.reject({ data: '' });
                scope.$digest();
                expect(gui.alertBadResponse).toHaveBeenCalled();
            });
        });

        describe('Input validation', function () {
            beforeEach(function() {
                ctrl.editNew();
            });

            it('should accept valid inputs', function () {
                ctrl.editObj.name = 'asd';
                ctrl.editObj.unit = '%';
                ctrl.editObj.upperBound = 100;
                ctrl.editObj.lowerBound = 0;
                ctrl.editSave();
                expect(ctrl.editObj.id).toEqual(-3);
            });

            it('should reject an empty name', function () {
                ctrl.editObj.name = '';
                ctrl.editObj.unit = '%';
                ctrl.editObj.upperBound = 100;
                ctrl.editObj.lowerBound = 0;
                ctrl.editSave();
                expect(ctrl.editObj.id).toEqual(-2);
            });

            it('should reject an empty unit', function () {
                ctrl.editObj.name = 'asd';
                ctrl.editObj.unit = '';
                ctrl.editObj.upperBound = 100;
                ctrl.editObj.lowerBound = 0;
                ctrl.editSave();
                expect(ctrl.editObj.id).toEqual(-2);
            });

            it('should reject an invalid upperBound', function () {
                ctrl.editObj.name = 'asd';
                ctrl.editObj.unit = '%';
                ctrl.editObj.upperBound = 'asd';
                ctrl.editObj.lowerBound = 0;
                ctrl.editSave();
                expect(ctrl.editObj.id).toEqual(-2);
            });

            it('should reject an invalid lowerBound', function () {
                ctrl.editObj.name = 'asd';
                ctrl.editObj.unit = '%';
                ctrl.editObj.upperBound = 100;
                ctrl.editObj.lowerBound = 'asd';
                ctrl.editSave();
                expect(ctrl.editObj.id).toEqual(-2);
            });
        });
    });

    describe('Controller: SensorTypesController (error handling)', function() {
        var $controller, ctrl, scope, rootScope, server, deferred, gui;

        beforeEach(module('app'));
        beforeEach(module('mock.server'));

        // Mock services and spy on methods
        beforeEach(inject(function($q, _server_, _gui_) {
            deferred = $q.defer();
            server = _server_;
            spyOn(server, 'getSensorTypes').and.returnValue(deferred.promise);
            gui = _gui_;
            spyOn(gui, 'alertBadResponse').and.callThrough();
        }));

        // Initialise the controller
        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('SensorTypesController', {
                $scope: scope,
            });
            rootScope = $rootScope;
        }));

        describe('Activate', function () {
            it('should alert errors', function () {
                deferred.reject('');
                scope.$digest();
                expect(gui.alertBadResponse).toHaveBeenCalled();
            });
        });
    });
})();