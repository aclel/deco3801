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

    /** Unit tests for commands controller */
    describe('Controller: CommandsController', function() {
        var $controller, ctrl, scope, rootScope, server, deferred, gui, timeout;
        var config;

        beforeEach(module('app'));
        beforeEach(module('mock.server'));

        // Mock services and spy on methods
        beforeEach(inject(function($q, _server_, _gui_, _config_) {
            deferred = $q.defer();
            server = _server_;
            spyOn(server, 'getCommands').and.callThrough();
            spyOn(server, 'addCommand').and.returnValue(deferred.promise);
            spyOn(server, 'updateCommand').and.returnValue(deferred.promise);
            spyOn(server, 'deleteCommand').and.returnValue(deferred.promise);
            gui = _gui_;
            spyOn(gui, 'alertBadResponse').and.callThrough();
            spyOn(gui, 'focus').and.callThrough();
            spyOn(gui, 'confirmDelete').and.callThrough();
            spyOn(gui, 'alertSuccess').and.callThrough();
            config = _config_;
            spyOn(config, 'queryCommands').and.callThrough();
            config.refreshData();
        }));

        // Initialise the controller
        beforeEach(inject(function($controller, $rootScope, $timeout) {
            scope = $rootScope.$new();
            ctrl = $controller('CommandsController', {
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
                expect(angular.isArray(ctrl.commands)).toBe(true);
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
            
        });

        describe('Resource methods', function () {
            beforeEach(function() {
                scope.$digest();
            });

            it('editExisting should update editObj', function () {
                var command = ctrl.commands[1];
                ctrl.editExisting(command);
                expect(ctrl.editId).toEqual(command.id);
                expect(ctrl.editObj).toEqual(command);
            });

            it('editCancel should discard temp editObj', function () {
                var len = ctrl.commands.length;
                ctrl.editCancel();
                expect(ctrl.commands.length).toEqual(len);
                ctrl.editNew();
                len = ctrl.commands.length;
                ctrl.editCancel();
                expect(ctrl.commands.length).toEqual(len - 1);
                expect(ctrl.editId).toEqual(-1);
            });

            it('editCancel should restore existing back to its original state', function () {
                var command = ctrl.commands[1];
                var original = JSON.stringify(command);
                ctrl.editExisting(command);
                command.value++;
                ctrl.editCancel();
                expect(JSON.stringify(command)).toEqual(original);
                expect(ctrl.editId).toEqual(-1);
            });

            it('editDelete should prepare to delete', function () {
                var command = ctrl.commands[1];
                ctrl.editDelete(command);
                expect(ctrl.deleteObject).toEqual(command);
                expect(ctrl.deleteType).toEqual('command');
                expect(ctrl.deleteName).toEqual(command.buoyName + ' ' + command.commandName);
                expect(gui.confirmDelete).toHaveBeenCalled();
            });

            it('editNew should create a temp editObj', function () {
                ctrl.editNew();
                expect(ctrl.editId).toEqual(config.newId);
                expect(ctrl.commands[ctrl.commands.length - 1]).toEqual(ctrl.editObj); 
                expect(gui.focus).toHaveBeenCalled();
                timeout.flush();
            });

            it('showDeleteButton should work', function () {
                var command = ctrl.commands[1];
                expect(ctrl.showDeleteButton(command)).toBe(true);
                ctrl.editExisting(command);
                expect(ctrl.showDeleteButton(command)).toBe(true);
                ctrl.editExisting(ctrl.commands[0]);
                expect(ctrl.showDeleteButton(command)).toBe(false);
                ctrl.editNew();
                expect(ctrl.showDeleteButton(command)).toBe(false);
            });

            it('editSave of new should update commands on success', function () {
                ctrl.editNew();
                ctrl.editObj.value = 23;
                ctrl.editSave();
                deferred.resolve();
                config.queryCommands.calls.reset();
                scope.$digest();
                expect(config.queryCommands).toHaveBeenCalled();
                expect(gui.alertSuccess).toHaveBeenCalled();
            });

            it('editSave of existing should update commands on success', function () {
                ctrl.editExisting(ctrl.commands[1]);
                ctrl.editSave();
                deferred.resolve();
                config.queryCommands.calls.reset();
                scope.$digest();
                expect(config.queryCommands).toHaveBeenCalled();
                expect(gui.alertSuccess).toHaveBeenCalled();
            });

            it('editSave of new should revert on failure', function () {
                ctrl.editNew();
                ctrl.editObj.value = 23;
                ctrl.editSave();
                var len = ctrl.commands.length;
                deferred.reject({ data: '' });
                scope.$digest();
                expect(gui.alertBadResponse).toHaveBeenCalled();
                expect(ctrl.commands.length).toEqual(len - 1);
            });

            it('editSave of existing should revert on failure', function () {
                ctrl.editExisting(ctrl.commands[1]);
                ctrl.editSave();
                deferred.reject({ data: '' });
                scope.$digest();
                expect(gui.alertBadResponse).toHaveBeenCalled();
            });

            it('confirmDelete should delete the command', function () {
                ctrl.confirmDelete(ctrl.commands[1]);
                deferred.resolve();
                config.queryCommands.calls.reset();
                scope.$digest();
                expect(config.queryCommands).toHaveBeenCalled();
                expect(gui.alertSuccess).toHaveBeenCalled();
            });

            it('confirmDelete should display an alert on failure', function () {
                ctrl.confirmDelete(ctrl.commands[1]);
                deferred.reject({ data: '' });
                scope.$digest();
                expect(gui.alertBadResponse).toHaveBeenCalled();
            });
        });

        describe('Batch queries', function () {
            beforeEach(function() {
                scope.$digest();
            });

            it('all selected should send command to all buoys', function () {
                ctrl.selected.type = 'all';
                ctrl.editNew();
                ctrl.editObj.value = 23;
                ctrl.editSave();
                expect(server.addCommand).toHaveBeenCalled();
                var args1 = [50, 51, 19];
                expect(server.addCommand.calls.mostRecent().args[1]).toEqual(args1);
                deferred.resolve();
                config.queryCommands.calls.reset();
                scope.$digest();
                expect(config.queryCommands).toHaveBeenCalled();
                expect(gui.alertSuccess).toHaveBeenCalled();
            });

            it('group selected should send command to group buoys', function () {
                ctrl.selected.type = 'group';
                ctrl.selected.obj = config.buoyGroups[2];
                ctrl.editNew();
                ctrl.editObj.value = 23;
                ctrl.editSave();
                expect(server.addCommand).toHaveBeenCalled();
                var args1 = [50];
                expect(server.addCommand.calls.mostRecent().args[1]).toEqual(args1);
                deferred.resolve();
                config.queryCommands.calls.reset();
                scope.$digest();
                expect(config.queryCommands).toHaveBeenCalled();
                expect(gui.alertSuccess).toHaveBeenCalled();
            });

            it('instance selected should send command to instance', function () {
                ctrl.selected.type = 'instance';
                ctrl.selected.obj = config.buoyInstances[1];
                ctrl.editNew();
                ctrl.editObj.value = 23;
                ctrl.editSave();
                expect(server.addCommand).toHaveBeenCalled();
                var args1 = [51];
                expect(server.addCommand.calls.mostRecent().args[1]).toEqual(args1);
                deferred.resolve();
                config.queryCommands.calls.reset();
                scope.$digest();
                expect(config.queryCommands).toHaveBeenCalled();
                expect(gui.alertSuccess).toHaveBeenCalled();
            });

            it('nothing selected should not send to any', function () {
                ctrl.selected.type = '';
                ctrl.selected.obj = config.buoyInstances[1];
                ctrl.editNew();
                ctrl.editObj.value = 23;
                ctrl.editSave();
                expect(server.addCommand).toHaveBeenCalled();
                var args1 = [];
                expect(server.addCommand.calls.mostRecent().args[1]).toEqual(args1);
            });
        });

        describe('Input validation', function () {
            beforeEach(function() {
                ctrl.editNew();
            });

            it('should accept valid inputs', function () {
                ctrl.editObj.value = 23;
                ctrl.editSave();
                expect(ctrl.editObj.id).toEqual(-3);
            });

            it('should reject an invalid value', function () {
                ctrl.editObj.value = 'asd';
                ctrl.editSave();
                expect(ctrl.editObj.id).toEqual(config.newId);
                ctrl.editObj.value = null;
                ctrl.editSave();
                expect(ctrl.editObj.id).toEqual(config.newId);
            });
        });
    });
})();