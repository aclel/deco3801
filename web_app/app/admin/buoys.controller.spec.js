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

    /** Unit tests for buoyLogs controller */
    describe('Controller: BuoysController', function() {
        var $controller, ctrl, scope, rootScope, server, deferred, gui, timeout;

        beforeEach(module('app'));
        beforeEach(module('mock.server'));

        // Mock services and spy on methods
        beforeEach(inject(function($q, _server_, _gui_) {
            deferred = $q.defer();
            server = _server_;
            spyOn(server, 'getBuoys').and.callThrough();
            spyOn(server, 'getBuoyInstances').and.callThrough();
            spyOn(server, 'addBuoy').and.returnValue(deferred.promise);
            spyOn(server, 'deleteBuoy').and.returnValue(deferred.promise);
            gui = _gui_;
            spyOn(gui, 'alertBadResponse').and.callThrough();
            spyOn(gui, 'focus').and.callThrough();
            spyOn(gui, 'confirmDelete').and.callThrough();
            spyOn(gui, 'alertSuccess').and.callThrough();
        }));

        // Initialise the controller
        beforeEach(inject(function($controller, $rootScope, $timeout) {
            scope = $rootScope.$new();
            ctrl = $controller('BuoysController', {
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
                expect(angular.isArray(ctrl.buoys)).toBe(true);
                expect(angular.isArray(ctrl.buoyInstances)).toBe(true);
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
            it('should query buoys', function () {
                expect(server.getBuoys).toHaveBeenCalled();
            });

            it('should query buoyInstances', function () {
                expect(server.getBuoyInstances).toHaveBeenCalled();
            });

            it('should format buoys', function () {
                scope.$digest();
                ctrl.buoys.forEach(function(buoy) {
                    expect(buoy.name).toBeDefined();
                });
            });
        });

        describe('Resource methods', function () {
            beforeEach(function() {
                scope.$digest();
            });

            it('editExisting should update editObj', function () {
                var buoy = ctrl.buoys[1];
                ctrl.editExisting(buoy);
                expect(ctrl.editId).toEqual(buoy.id);
                expect(ctrl.editObj).toEqual(buoy);
            });

            it('editCancel should discard temp editObj', function () {
                var len = ctrl.buoys.length;
                ctrl.editCancel();
                expect(ctrl.buoys.length).toEqual(len);
                ctrl.editNew();
                len = ctrl.buoys.length;
                ctrl.editCancel();
                expect(ctrl.buoys.length).toEqual(len - 1);
                expect(ctrl.editId).toEqual(-1);
            });

            it('editDelete should prepare to delete', function () {
                var buoy = ctrl.buoys[1];
                ctrl.editDelete(buoy);
                expect(ctrl.deleteObject).toEqual(buoy);
                expect(ctrl.deleteType).toEqual('buoy');
                expect(ctrl.deleteName).toEqual(buoy.guid);
                expect(gui.confirmDelete).toHaveBeenCalled();
            });

            it('editNew should create a temp editObj', function () {
                ctrl.editNew();
                expect(ctrl.editId).toEqual(-2);
                expect(ctrl.buoys[ctrl.buoys.length - 1]).toEqual(ctrl.editObj); 
                expect(gui.focus).toHaveBeenCalled();
                timeout.flush();
            });

            it('showDeleteButton should work', function () {
                var buoy = ctrl.buoys[1];
                expect(ctrl.showDeleteButton(buoy)).toBe(true);
                ctrl.editExisting(buoy);
                expect(ctrl.showDeleteButton(buoy)).toBe(true);
                ctrl.editExisting(ctrl.buoys[0]);
                expect(ctrl.showDeleteButton(buoy)).toBe(false);
                ctrl.editNew();
                expect(ctrl.showDeleteButton(buoy)).toBe(false);
            });

            it('editSave should update buoys on success', function () {
                ctrl.editNew();
                ctrl.editObj.name = 'asd';
                ctrl.editSave();
                deferred.resolve();
                server.getBuoys.calls.reset();
                server.getBuoyInstances.calls.reset();
                scope.$digest();
                expect(server.getBuoys).toHaveBeenCalled();
                expect(server.getBuoyInstances).toHaveBeenCalled();
                expect(gui.alertSuccess).toHaveBeenCalled();
            });

            it('editSave should revert on failure', function () {
                ctrl.editNew();
                ctrl.editObj.name = 'asd';
                ctrl.editSave();
                var len = ctrl.buoys.length;
                deferred.reject({ data: '' });
                scope.$digest();
                expect(gui.alertBadResponse).toHaveBeenCalled();
                expect(ctrl.buoys.length).toEqual(len - 1);
            });

            it('confirmDelete should delete the buoy', function () {
                ctrl.confirmDelete(ctrl.buoys[1]);
                deferred.resolve();
                server.getBuoys.calls.reset();
                scope.$digest();
                expect(server.getBuoys).toHaveBeenCalled();
                expect(gui.alertSuccess).toHaveBeenCalled();
            });

            it('confirmDelete should display an alert on failure', function () {
                ctrl.confirmDelete(ctrl.buoys[1]);
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
                ctrl.editObj.guid = 'e2016e55-1f6b-4ecb-9094-7b30a7b94da0';
                ctrl.editObj.name = 'asd';
                ctrl.editSave();
                expect(ctrl.editObj.id).toEqual(-3);
            });

            it('should reject an invalid GUID', function () {
                ctrl.editObj.guid = 'eda0';
                ctrl.editObj.name = 'asd';
                ctrl.editSave();
                expect(ctrl.editObj.id).toEqual(-2);
            });

            it('should reject an empty name', function () {
                ctrl.editObj.guid = 'e2016e55-1f6b-4ecb-9094-7b30a7b94da0';
                ctrl.editObj.name = '';
                ctrl.editSave();
                expect(ctrl.editObj.id).toEqual(-2);
            });
        });

        describe('generateGuid', function () {
            it('should return a valid GUID', function () {
                ctrl.editNew();
                expect(/^\{?[a-fA-F\d]{8}-([a-fA-F\d]{4}-){3}[a-fA-F\d]{12}\}?$/
                    .test(ctrl.editObj.guid)).toBe(true);
            });
        });
    });

    describe('Controller: BuoysController (error handling)', function() {
        var $controller, ctrl, scope, rootScope, server, deferred, gui;

        beforeEach(module('app'));
        beforeEach(module('mock.server'));

        // Mock services and spy on methods
        beforeEach(inject(function($q, _server_, _gui_) {
            deferred = $q.defer();
            server = _server_;
            spyOn(server, 'getBuoys').and.returnValue(deferred.promise);
            spyOn(server, 'getBuoyInstances').and.returnValue(deferred.promise);
            gui = _gui_;
            spyOn(gui, 'alertBadResponse').and.callThrough();
        }));

        // Initialise the controller
        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('BuoysController', {
                $scope: scope,
            });
            rootScope = $rootScope;
        }));

        describe('Activate', function () {
            it('should alert errors', function () {
                deferred.reject('');
                scope.$digest();
                expect(gui.alertBadResponse).toHaveBeenCalled();
                expect(gui.alertBadResponse.calls.count()).toEqual(2);
            });
        });
    });
})();