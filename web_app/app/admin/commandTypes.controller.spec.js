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

    /** Unit tests for commandTypes controller */
    describe('Controller: CommandTypesController', function() {
        var $controller, ctrl, scope, rootScope, server, deferred, gui, timeout;

        beforeEach(module('app'));
        beforeEach(module('mock.server'));

        // Mock services and spy on methods
        beforeEach(inject(function($q, _server_, _gui_) {
            deferred = $q.defer();
            server = _server_;
            spyOn(server, 'getCommandTypes').and.callThrough();
            spyOn(server, 'addCommandType').and.returnValue(deferred.promise);
            spyOn(server, 'updateCommandType').and.returnValue(deferred.promise);
            spyOn(server, 'deleteCommandType').and.returnValue(deferred.promise);
            gui = _gui_;
            spyOn(gui, 'alertBadResponse').and.callThrough();
            spyOn(gui, 'focus').and.callThrough();
            spyOn(gui, 'confirmDelete').and.callThrough();
            spyOn(gui, 'alertSuccess').and.callThrough();
        }));

        // Initialise the controller
        beforeEach(inject(function($controller, $rootScope, $timeout) {
            scope = $rootScope.$new();
            ctrl = $controller('CommandTypesController', {
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
                expect(angular.isArray(ctrl.commandTypes)).toBe(true);
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
            it('should query commandTypes', function () {
                expect(server.getCommandTypes).toHaveBeenCalled();
            });
        });

        describe('Resource methods', function () {
            beforeEach(function() {
                scope.$digest();
            });

            it('editExisting should update editObj', function () {
                var commandType = ctrl.commandTypes[1];
                ctrl.editExisting(commandType);
                expect(ctrl.editId).toEqual(commandType.id);
                expect(ctrl.editObj).toEqual(commandType);
            });

            it('editCancel should discard temp editObj', function () {
                var len = ctrl.commandTypes.length;
                ctrl.editCancel();
                expect(ctrl.commandTypes.length).toEqual(len);
                ctrl.editNew();
                len = ctrl.commandTypes.length;
                ctrl.editCancel();
                expect(ctrl.commandTypes.length).toEqual(len - 1);
                expect(ctrl.editId).toEqual(-1);
            });

            it('editCancel should restore existing back to its original state', function () {
                var commandType = ctrl.commandTypes[1];
                var original = JSON.stringify(commandType);
                ctrl.editExisting(commandType);
                commandType.name += 'asda';
                ctrl.editCancel();
                expect(JSON.stringify(commandType)).toEqual(original);
                expect(ctrl.editId).toEqual(-1);
            });

            it('editDelete should prepare to delete', function () {
                var commandType = ctrl.commandTypes[1];
                ctrl.editDelete(commandType);
                expect(ctrl.deleteObject).toEqual(commandType);
                expect(ctrl.deleteType).toEqual('command type');
                expect(ctrl.deleteName).toEqual(commandType.name);
                expect(gui.confirmDelete).toHaveBeenCalled();
            });

            it('editNew should create a temp editObj', function () {
                ctrl.editNew();
                expect(ctrl.editId).toEqual(-2);
                expect(ctrl.commandTypes[ctrl.commandTypes.length - 1]).toEqual(ctrl.editObj); 
                expect(gui.focus).toHaveBeenCalled();
                timeout.flush();
            });

            it('showDeleteButton should work', function () {
                var commandType = ctrl.commandTypes[1];
                expect(ctrl.showDeleteButton(commandType)).toBe(true);
                ctrl.editExisting(commandType);
                expect(ctrl.showDeleteButton(commandType)).toBe(true);
                ctrl.editExisting(ctrl.commandTypes[0]);
                expect(ctrl.showDeleteButton(commandType)).toBe(false);
                ctrl.editNew();
                expect(ctrl.showDeleteButton(commandType)).toBe(false);
            });

            it('editSave of new should update commandTypes on success', function () {
                ctrl.editNew();
                ctrl.editObj.name = 'asd';
                ctrl.editSave();
                deferred.resolve();
                server.getCommandTypes.calls.reset();
                scope.$digest();
                expect(server.getCommandTypes).toHaveBeenCalled();
                expect(gui.alertSuccess).toHaveBeenCalled();
            });

            it('editSave of existing should update commandTypes on success', function () {
                ctrl.editExisting(ctrl.commandTypes[1]);
                ctrl.editSave();
                deferred.resolve();
                server.getCommandTypes.calls.reset();
                scope.$digest();
                expect(server.getCommandTypes).toHaveBeenCalled();
                expect(gui.alertSuccess).toHaveBeenCalled();
            });

            it('editSave of new should revert on failure', function () {
                ctrl.editNew();
                ctrl.editObj.name = 'asd';
                ctrl.editSave();
                var len = ctrl.commandTypes.length;
                deferred.reject({ data: '' });
                scope.$digest();
                expect(gui.alertBadResponse).toHaveBeenCalled();
                expect(ctrl.commandTypes.length).toEqual(len - 1);
            });

            it('editSave of existing should revert on failure', function () {
                ctrl.editExisting(ctrl.commandTypes[1]);
                ctrl.editSave();
                deferred.reject({ data: '' });
                scope.$digest();
                expect(gui.alertBadResponse).toHaveBeenCalled();
            });

            it('confirmDelete should delete the commandType', function () {
                ctrl.confirmDelete(ctrl.commandTypes[1]);
                deferred.resolve();
                server.getCommandTypes.calls.reset();
                scope.$digest();
                expect(server.getCommandTypes).toHaveBeenCalled();
                expect(gui.alertSuccess).toHaveBeenCalled();
            });

            it('confirmDelete should display an alert on failure', function () {
                ctrl.confirmDelete(ctrl.commandTypes[1]);
                deferred.reject({ data: '' });
                scope.$digest();
                expect(gui.alertBadResponse).toHaveBeenCalled();
            });
        });

        describe('Input validation', function () {
            beforeEach(function() {
                ctrl.editNew();
            });

            it('should accept a valid name', function () {
                ctrl.editObj.name = 'asd';
                ctrl.editSave();
                expect(ctrl.editObj.id).toEqual(-3);
            });

            it('should reject an empty name', function () {
                ctrl.editObj.name = '';
                ctrl.editSave();
                expect(ctrl.editObj.id).toEqual(-2);
            });
        });
    });

    describe('Controller: CommandTypesController (error handling)', function() {
        var $controller, ctrl, scope, rootScope, server, deferred, gui;

        beforeEach(module('app'));
        beforeEach(module('mock.server'));

        // Mock services and spy on methods
        beforeEach(inject(function($q, _server_, _gui_) {
            deferred = $q.defer();
            server = _server_;
            spyOn(server, 'getCommandTypes').and.returnValue(deferred.promise);
            gui = _gui_;
            spyOn(gui, 'alertBadResponse').and.callThrough();
        }));

        // Initialise the controller
        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('CommandTypesController', {
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