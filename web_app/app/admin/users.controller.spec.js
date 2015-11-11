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

    /** Unit tests for users controller */
    describe('Controller: UsersController', function() {
        var $controller, ctrl, scope, rootScope, server, 
            deferred, gui, timeout, auth;

        beforeEach(module('app'));
        beforeEach(module('mock.server'));

        // Mock services and spy on methods
        beforeEach(inject(function($q, _server_, _gui_, _auth_) {
            deferred = $q.defer();
            server = _server_;
            spyOn(server, 'getUsers').and.callThrough();
            spyOn(server, 'addUser').and.returnValue(deferred.promise);
            spyOn(server, 'updateUser').and.returnValue(deferred.promise);
            spyOn(server, 'deleteUser').and.returnValue(deferred.promise);
            gui = _gui_;
            spyOn(gui, 'alertBadResponse').and.callThrough();
            spyOn(gui, 'focus').and.callThrough();
            spyOn(gui, 'confirmDelete').and.callThrough();
            spyOn(gui, 'alertSuccess').and.callThrough();
            auth = _auth_;
            spyOn(auth, 'currentUser').and.returnValue('');
        }));

        // Initialise the controller
        beforeEach(inject(function($controller, $rootScope, $timeout) {
            scope = $rootScope.$new();
            ctrl = $controller('UsersController', {
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
                expect(angular.isArray(ctrl.users)).toBe(true);
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
            it('should query users', function () {
                expect(server.getUsers).toHaveBeenCalled();
            });

            it('should format last login', function () {
                scope.$digest();
                ctrl.users.forEach(function(user) {
                    expect(user.lastLogin.text).toBeDefined();
                    if (!user.lastLogin.Valid) {
                        expect(user.lastLogin.text).toEqual('Never');
                    }
                });
            });
        });

        describe('Resource methods', function () {
            beforeEach(function() {
                scope.$digest();
            });

            it('editExisting should update editObj', function () {
                var user = ctrl.users[1];
                ctrl.editExisting(user);
                expect(ctrl.editId).toEqual(user.id);
                expect(ctrl.editObj).toEqual(user);
            });

            it('editCancel should discard temp editObj', function () {
                var len = ctrl.users.length;
                ctrl.editCancel();
                expect(ctrl.users.length).toEqual(len);
                ctrl.editNew();
                len = ctrl.users.length;
                ctrl.editCancel();
                expect(ctrl.users.length).toEqual(len - 1);
                expect(ctrl.editId).toEqual(-1);
            });

            it('editCancel should restore existing back to its original state', function () {
                var user = ctrl.users[1];
                var original = JSON.stringify(user);
                ctrl.editExisting(user);
                user.firstName = 'loser';
                ctrl.editCancel();
                expect(JSON.stringify(user)).toEqual(original);
                expect(ctrl.editId).toEqual(-1);
            });

            it('editDelete should prepare to delete', function () {
                var user = ctrl.users[1];
                ctrl.editDelete(user);
                expect(ctrl.deleteObject).toEqual(user);
                expect(ctrl.deleteType).toEqual('user');
                expect(ctrl.deleteName).toEqual(user.email);
                expect(gui.confirmDelete).toHaveBeenCalled();
            });

            it('editNew should create a temp editObj', function () {
                ctrl.editNew();
                expect(ctrl.editId).toEqual(-2);
                expect(ctrl.users[ctrl.users.length - 1]).toEqual(ctrl.editObj); 
                expect(gui.focus).toHaveBeenCalled();
                timeout.flush();
            });

            it('showDeleteButton should work', function () {
                var user = ctrl.users[1];
                expect(ctrl.showDeleteButton(user)).toBe(true);
                ctrl.editExisting(user);
                expect(ctrl.showDeleteButton(user)).toBe(true);
                ctrl.editExisting(ctrl.users[0]);
                expect(ctrl.showDeleteButton(user)).toBe(false);
                ctrl.editNew();
                expect(ctrl.showDeleteButton(user)).toBe(false);
            });

            it('editSave of new should update users on success', function () {
                ctrl.editNew();
                ctrl.editObj.email = 'john@aol.com';
                ctrl.editSave();
                deferred.resolve();
                server.getUsers.calls.reset();
                scope.$digest();
                expect(server.getUsers).toHaveBeenCalled();
                expect(gui.alertSuccess).toHaveBeenCalled();
            });

            it('editSave of existing should update users on success', function () {
                ctrl.editExisting(ctrl.users[1]);
                ctrl.editSave();
                deferred.resolve();
                server.getUsers.calls.reset();
                scope.$digest();
                expect(server.getUsers).toHaveBeenCalled();
                expect(gui.alertSuccess).toHaveBeenCalled();
            });

            it('editSave of new should revert on failure', function () {
                ctrl.editNew();
                ctrl.editObj.email = 'john@aol.com';
                ctrl.editSave();
                var len = ctrl.users.length;
                deferred.reject({ data: '' });
                scope.$digest();
                expect(gui.alertBadResponse).toHaveBeenCalled();
                expect(ctrl.users.length).toEqual(len - 1);
            });

            it('editSave of existing should revert on failure', function () {
                ctrl.editExisting(ctrl.users[1]);
                ctrl.editSave();
                deferred.reject({ data: '' });
                scope.$digest();
                expect(gui.alertBadResponse).toHaveBeenCalled();
            });

            it('confirmDelete should delete the user', function () {
                ctrl.confirmDelete(ctrl.users[1]);
                deferred.resolve();
                server.getUsers.calls.reset();
                scope.$digest();
                expect(server.getUsers).toHaveBeenCalled();
                expect(gui.alertSuccess).toHaveBeenCalled();
            });

            it('confirmDelete should display an alert on failure', function () {
                ctrl.confirmDelete(ctrl.users[1]);
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
                ctrl.editObj.email = 'john@aol.com';
                ctrl.editSave();
                expect(ctrl.editObj.id).toEqual(-3);
            });

            it('should reject an invalid email', function () {
                ctrl.editObj.email = '';
                ctrl.editSave();
                expect(ctrl.editObj.id).toEqual(-2);
                ctrl.editObj.email = 'asd';
                ctrl.editSave();
                expect(ctrl.editObj.id).toEqual(-2);
            });

        });
    });

    describe('Controller: UsersController (error handling)', function() {
        var $controller, ctrl, scope, rootScope, server, 
            deferred, gui, timeout, auth;

        beforeEach(module('app'));
        beforeEach(module('mock.server'));

        // Mock services and spy on methods
        beforeEach(inject(function($q, _server_, _gui_, _auth_) {
            deferred = $q.defer();
            server = _server_;
            spyOn(server, 'getUsers').and.returnValue(deferred.promise);
            spyOn(server, 'addUser').and.returnValue(deferred.promise);
            spyOn(server, 'updateUser').and.returnValue(deferred.promise);
            spyOn(server, 'deleteUser').and.returnValue(deferred.promise);
            gui = _gui_;
            spyOn(gui, 'alertBadResponse').and.callThrough();
            spyOn(gui, 'focus').and.callThrough();
            spyOn(gui, 'confirmDelete').and.callThrough();
            spyOn(gui, 'alertSuccess').and.callThrough();
            auth = _auth_;
            spyOn(auth, 'currentUser').and.returnValue('andrew@dyergroup.com.au');
        }));

        // Initialise the controller
        beforeEach(inject(function($controller, $rootScope, $timeout) {
            scope = $rootScope.$new();
            ctrl = $controller('UsersController', {
                $scope: scope,
            });
            rootScope = $rootScope;
            timeout = $timeout;
        }));

        describe('Activate', function () {
            it('should alert errors', function () {
                deferred.reject('');
                scope.$digest();
                expect(gui.alertBadResponse).toHaveBeenCalled();
            });
        });

        describe('Edge cases', function () {
            beforeEach(function() {
                var data = { data: { 'users': [
                    {
                      'id': 23,
                      'email': 'andrew@dyergroup.com.au',
                      'password': '$2a$10$0y7AQ5gESxnkl4CovBf0W.ROl/im/JhWGCgsSUhTc/ocsHIx4IGLW',
                      'firstName': 'Andrew',
                      'lastName': 'Dyer',
                      'lastLogin': {
                        'Time': '2015-11-07T12:33:20Z',
                        'Valid': true
                      },
                      'role': 'system_admin',
                      'token': ''
                    }
                ]}};
                deferred.resolve(data);
                scope.$digest();
            });

            it('editSave of currently logged in user should update users on success', function () {
                ctrl.editExisting(ctrl.users[0]);
                ctrl.editSave();
                deferred.resolve();
                server.getUsers.calls.reset();
                scope.$digest();
                expect(server.getUsers).toHaveBeenCalled();
                expect(gui.alertSuccess).toHaveBeenCalled();
            });
        });
    });
})();