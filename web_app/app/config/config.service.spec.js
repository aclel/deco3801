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
    
    /** Unit tests for config service */
    describe('Service: config', function() {
        var config, server, deferred, scope, log, gui;

        beforeEach(module('app'));
        beforeEach(module('mock.server'));

        beforeEach(inject(function($q, $rootScope, $log, _config_, _server_, _gui_) {
            scope = $rootScope.$new();
            deferred = $q.defer();
            log = $log;
            spyOn(log, 'error').and.callThrough();
            server = _server_;
            spyOn(server, 'getBuoyGroups').and.callThrough();
            spyOn(server, 'getBuoyInstances').and.callThrough();
            spyOn(server, 'getCommandTypes').and.callThrough();
            spyOn(server, 'getCommands').and.callThrough();
            spyOn(server, 'getWarningTriggers').and.callThrough();
            spyOn(server, 'getSensorTypes').and.callThrough();
            config = _config_;
            gui = _gui_;
            spyOn(gui, 'alertSuccess').and.callThrough();
            spyOn(gui, 'alertBadResponse').and.callThrough();
            spyOn(gui, 'focus').and.callThrough();
        }));

        describe('Getting config', function() {
            beforeEach(function() {
                config.refreshData();
                scope.$digest();
            });

            it('should query the server', function() {
                expect(server.getBuoyGroups).toHaveBeenCalled();
                expect(server.getBuoyInstances).toHaveBeenCalled();
                expect(server.getCommandTypes).toHaveBeenCalled();
                expect(server.getCommands).toHaveBeenCalled();
                expect(server.getWarningTriggers).toHaveBeenCalled();
                expect(server.getSensorTypes).toHaveBeenCalled();
            });

            it('should query sensorTypes again if necessary', function () {
                config.sensorTypes.length = 0;
                config.queryTriggers();
                scope.$digest();
                expect(server.getSensorTypes).toHaveBeenCalled();
            });

            it('should update config', function() {
                expect(config.buoyGroups.length).not.toEqual(0);
                expect(config.buoyInstances.length).not.toEqual(0);
                expect(config.commandTypes.length).not.toEqual(0);
                expect(config.commands.length).not.toEqual(0);
                expect(config.triggers.length).not.toEqual(0);
                expect(config.sensorTypes.length).not.toEqual(0);
            });

            it('should parse buoyInstanceSensors', function() {
                expect(config.buoyInstanceSensors.length).not.toEqual(0);
            });

            it('should parse buoyInstances', function() {
                config.buoyInstances.forEach(function(buoyInstance) {
                    expect(buoyInstance.lastReceived).toBeDefined();
                    expect(buoyInstance.pollRate).toBeDefined();
                    expect(buoyInstance.nextScheduled).toBeDefined();
                });
            });

            it('should parse triggers', function() {
                config.triggers.forEach(function(trigger) {
                    expect(trigger.buoyInstanceName).toBeDefined();
                    expect(trigger.sensorName).toBeDefined();
                    expect(trigger.sensorTypeArchived).toBeDefined();
                });
            });

            it('should parse commands', function() {
                config.commands.forEach(function(command) {
                    expect(command.buoyName).toBeDefined();
                    expect(command.commandName).toBeDefined();
                    expect(command.commandTypeArchived).toBeDefined();
                });
            });
        });

        describe('Failing to get config', function() {
            // spy server methods to return promise which will be rejected
            beforeEach(function() {
                server.getBuoyGroups.and.returnValue(deferred.promise);
                server.getBuoyInstances.and.returnValue(deferred.promise);
                server.getCommandTypes.and.returnValue(deferred.promise);
                server.getCommands.and.returnValue(deferred.promise);
                server.getWarningTriggers.and.returnValue(deferred.promise);
                server.getSensorTypes.and.returnValue(deferred.promise);
            });

            it('Should not have config', function() {
                config.refreshData();
                deferred.reject({ data: '' });
                scope.$digest();
                expect(config.buoyGroups.length).toEqual(0);
                expect(config.buoyInstances.length).toEqual(0);
                expect(config.commandTypes.length).toEqual(0);
                expect(config.commands.length).toEqual(0);
                expect(config.triggers.length).toEqual(0);
                expect(config.sensorTypes.length).toEqual(0);
            });

            it('Should log errors', function() {
                config.refreshData();
                deferred.reject({ data: '' });
                scope.$digest();
                expect(log.error).toHaveBeenCalled();
                expect(log.assertEmpty).toThrow();
                expect(log.error.logs.length).toEqual(6);                
            });
        });

        describe('Tree options', function () {
            it('should not allow dragging groups', function () {
                var source = { $modelValue : { type: 'group' } };
                expect(config.treeOptions.accept(source)).toBe(false);
            });

            it('should not allow instances to be dragged out of a group', function () {
                var source = { $modelValue : { type: 'instance' } };
                var dest = { 
                    depth: function() { return 0; },
                };
                expect(config.treeOptions.accept(source, dest)).toBe(false);
            });

            it('should allow instances to be dragged to an empty group', function () {
                var source = { $modelValue : { type: 'instance' } };
                var dest = { 
                    depth: function() { return 1; },
                    childNodes: function() { return [null]; } 
                };
                var destIndex = 0;
                expect(config.treeOptions.accept(source, dest, destIndex)).toBe(true);
            });

            it('should not allow instances to be dragged into a collapsed group', function () {
                var source = { $modelValue : { type: 'instance' } };
                var dest = { 
                    depth: function() { return 1; },
                    childNodes: function() { return [{ collapsed: true }]; } 
                };
                var destIndex = 0;
                expect(config.treeOptions.accept(source, dest, destIndex)).toBe(false);
            });

            it('should not allow instances to be dragged into a group', function () {
                var source = { $modelValue : { type: 'instance' } };
                var dest = { 
                    depth: function() { return 1; },
                    childNodes: function() { return [{ collapsed: false }]; } 
                };
                var destIndex = 0;
                expect(config.treeOptions.accept(source, dest, destIndex)).toBe(true);
            });

            it('should not change buoy group if dropped into same group', function () {
                var event = {
                    source: { nodeScope: { $modelValue: {
                        buoyGroupId: 0,
                        name: 'asd',
                        id: 11
                    }}},
                    dest: { nodesScope: { $nodeScope: { $modelValue: {
                        id: 0
                    }}}}
                };
                spyOn(server, 'updateBuoyInstanceGroup').and.returnValue(deferred.promise);
                server.updateBuoyInstanceGroup.calls.reset();
                config.treeOptions.dropped(event);
                expect(server.updateBuoyInstanceGroup).not.toHaveBeenCalled();
            });

            it('should update buoy group if dropped into same group', function () {
                var event = {
                    source: { nodeScope: { $modelValue: {
                        buoyGroupId: 0,
                        name: 'asd',
                        id: 11
                    }}},
                    dest: { nodesScope: { $nodeScope: { $modelValue: {
                        id: 1
                    }}}}
                };
                spyOn(server, 'updateBuoyInstanceGroup').and.returnValue(deferred.promise);
                server.updateBuoyInstanceGroup.calls.reset();
                config.treeOptions.dropped(event);
                expect(server.updateBuoyInstanceGroup).toHaveBeenCalled();
                deferred.resolve();
                scope.$digest();
                expect(server.getBuoyInstances).toHaveBeenCalled();
                expect(gui.alertSuccess).toHaveBeenCalled();
            });

            it('should update buoy group and log errors', function () {
                var event = {
                    source: { nodeScope: { $modelValue: {
                        buoyGroupId: 0,
                        name: 'asd',
                        id: 11
                    }}},
                    dest: { nodesScope: { $nodeScope: { $modelValue: {
                        id: 1
                    }}}}
                };
                spyOn(server, 'updateBuoyInstanceGroup').and.returnValue(deferred.promise);
                server.updateBuoyInstanceGroup.calls.reset();
                config.treeOptions.dropped(event);
                expect(server.updateBuoyInstanceGroup).toHaveBeenCalled();
                deferred.reject({ data: '' });
                scope.$digest();
                expect(server.getBuoyInstances).toHaveBeenCalled();
                expect(gui.alertBadResponse).toHaveBeenCalled();
            });
        });

        describe('data reliant methods', function () {
            beforeEach(function() {
                config.refreshData();
                scope.$digest();
            });

            describe('showBuoyConfig', function () {
                it('should return true if all selected', function () {
                    config.selected.type = 'all';
                    expect(config.showBuoyConfig()).toBe(true);
                    config.buoyInstances.length = 0;
                    expect(config.showBuoyConfig()).toBe(false);
                });

                it('should handle group selected', function () {
                    config.selected.type = 'group';
                    config.groupBuoys.push(1);
                    expect(config.showBuoyConfig()).toBe(true);
                    config.groupBuoys.length = 0;
                    expect(config.showBuoyConfig()).toBe(false);
                });

                it('should handle instance selected', function () {
                    config.selected.type = 'instance';
                    expect(config.showBuoyConfig()).toBe(true);
                    config.redeploy.show = true;
                    expect(config.showBuoyConfig()).toBe(false);
                });
            });

            describe('selecting', function () {
                it('selectAll should work', function () {
                    config.selected.type = '';
                    config.selectAll();
                    expect(config.selected.type).toEqual('all');
                });

                it('selectBuoyGroup should work', function () {
                    config.selected.type = '';
                    config.selectBuoyGroup(config.buoyGroups[2]);
                    expect(config.selected.type).toEqual('group');
                    expect(config.selected.obj).toEqual(config.buoyGroups[2]);
                });

                it('selectBuoyInstance should work', function () {
                    config.selected.type = '';
                    config.selectBuoyInstance(config.buoyInstances[0]);
                    expect(config.selected.type).toEqual('instance');
                    expect(config.selected.obj).toEqual(config.buoyInstances[0]);
                });
            });

            describe('toggleBuoyGroup', function () {
                it('should update collapsed', function () {
                    var collapsed = config.buoyGroups[2].collapsed;
                    config.toggleBuoyGroup(config.buoyGroups[2]);
                    expect(config.buoyGroups[2].collapsed).toBe(!collapsed);
                });
            });

            describe('Editing name', function () {
                it('startEditingName should set editName', function () {
                    config.startEditingName();
                    expect(config.editName.on).toBe(true);
                });

                it('cancelEditName should set editName', function () {
                    config.cancelEditName();
                    expect(config.editName.on).toBe(false);
                });

                it('finishEditingName for group success', function () {
                    spyOn(server, 'updateBuoyGroupName').and.returnValue(deferred.promise);
                    config.selectBuoyGroup(config.buoyGroups[2]);
                    config.finishEditingName();
                    expect(config.editName.on).toBe(false);
                    deferred.resolve();
                    scope.$digest();
                    expect(gui.alertSuccess).toHaveBeenCalled();
                    expect(server.getBuoyGroups).toHaveBeenCalled();
                });

                it('finishEditingName for group error', function () {
                    spyOn(server, 'updateBuoyGroupName').and.returnValue(deferred.promise);
                    config.selectBuoyGroup(config.buoyGroups[2]);
                    config.finishEditingName();
                    expect(config.editName.on).toBe(false);
                    deferred.reject({ data: '' });
                    scope.$digest();
                    expect(gui.alertBadResponse).toHaveBeenCalled();
                });

                it('finishEditingName for instance success', function () {
                    spyOn(server, 'updateBuoyInstanceName').and.returnValue(deferred.promise);
                    config.selectBuoyInstance(config.buoyInstances[0]);
                    config.finishEditingName();
                    expect(config.editName.on).toBe(false);
                    deferred.resolve();
                    scope.$digest();
                    expect(gui.alertSuccess).toHaveBeenCalled();
                    expect(server.getBuoyInstances).toHaveBeenCalled();
                });

                it('finishEditingName for instance error', function () {
                    spyOn(server, 'updateBuoyInstanceName').and.returnValue(deferred.promise);
                    config.selectBuoyInstance(config.buoyInstances[0]);
                    config.finishEditingName();
                    expect(config.editName.on).toBe(false);
                    deferred.reject({ data: '' });
                    scope.$digest();
                    expect(gui.alertBadResponse).toHaveBeenCalled();
                });
            });

            describe('finishEditingBuoyGroup', function () {
                it('success', function () {
                    spyOn(server, 'updateBuoyInstanceGroup').and.returnValue(deferred.promise);
                    config.selectBuoyInstance(config.buoyInstances[0]);
                    config.finishEditingBuoyGroup();
                    expect(config.editGroup.on).toBe(false);
                    deferred.resolve();
                    scope.$digest();
                    expect(gui.alertSuccess).toHaveBeenCalled();
                    expect(server.getBuoyInstances).toHaveBeenCalled();
                });

                it('error', function () {
                    spyOn(server, 'updateBuoyInstanceGroup').and.returnValue(deferred.promise);
                    config.selectBuoyInstance(config.buoyInstances[0]);
                    config.finishEditingBuoyGroup();
                    expect(config.editGroup.on).toBe(false);
                    deferred.reject({ data: '' });
                    scope.$digest();
                    expect(gui.alertBadResponse).toHaveBeenCalled();
                });
            });

            describe('editing', function () {
                it('should work', function () {
                    expect(config.editing()).toBe(false);
                    config.editName.on = true;
                    expect(config.editing()).toBe(true);
                    config.editName.on = false;
                    config.editGroup.on = true;
                    expect(config.editing()).toBe(true);
                });
            });

            describe('new buoy group', function () {
                it('selectNewBuoyGroup', function () {
                    config.selectNewBuoyGroup();
                    expect(config.selected.type).toEqual('newGroup');
                    expect(config.selected.obj).toBeNull();
                });

                it('saveNewBuoyGroup success', function () {
                    spyOn(server, 'newBuoyGroup').and.returnValue(deferred.promise);
                    config.saveNewBuoyGroup();
                    expect(server.newBuoyGroup).toHaveBeenCalled();
                    deferred.resolve();
                    scope.$digest();
                    expect(gui.alertSuccess).toHaveBeenCalled();
                    expect(server.getBuoyGroups).toHaveBeenCalled();
                });

                it('saveNewBuoyGroup error', function () {
                    spyOn(server, 'newBuoyGroup').and.returnValue(deferred.promise);
                    config.saveNewBuoyGroup();
                    expect(server.newBuoyGroup).toHaveBeenCalled();
                    deferred.reject({ data: '' });
                    scope.$digest();
                    expect(gui.alertBadResponse).toHaveBeenCalled();
                });
            });

            describe('filters', function () {
                it('buoyGroupFilter', function () {
                    expect(config.buoyGroupFilter({ id: 0 })).toBe(false);
                    expect(config.buoyGroupFilter({ id: 1 })).toBe(true);
                });

                it('commandFilter', function () {
                    var command = {
                        id: 0,
                        commandTypeArchived: false,
                        buoyId: 50
                    };
                    command.id = config.newId;
                    expect(config.commandFilter(command)).toBe(true);
                    command.id = 0;
                    command.commandTypeArchived = true;
                    expect(config.commandFilter(command)).toBe(false);
                    command.commandTypeArchived = false;
                    config.selectAll();
                    expect(config.commandFilter(command)).toBe(true);
                    config.selectBuoyGroup(config.buoyGroups[0]);
                    expect(config.commandFilter(command)).toBe(false);
                    config.selectBuoyGroup(config.buoyGroups[2]);
                    expect(config.commandFilter(command)).toBe(true);
                    config.selectBuoyInstance(config.buoyInstances[1]);
                    expect(config.commandFilter(command)).toBe(false);
                    config.selectBuoyInstance(config.buoyInstances[0]);
                    expect(config.commandFilter(command)).toBe(true);
                });

                it('triggerFilter', function () {
                    var trigger = {
                        id: 0,
                        buoyInstanceId: 117
                    };
                    trigger.id = config.newId;
                    expect(config.triggerFilter(trigger)).toBe(true);
                    trigger.id = 0;
                    config.selectAll();
                    expect(config.triggerFilter(trigger)).toBe(true);
                    config.selectBuoyGroup(config.buoyGroups[0]);
                    expect(config.triggerFilter(trigger)).toBe(false);
                    config.selectBuoyGroup(config.buoyGroups[2]);
                    expect(config.triggerFilter(trigger)).toBe(true);
                    config.selectBuoyInstance(config.buoyInstances[1]);
                    expect(config.triggerFilter(trigger)).toBe(false);
                    config.selectBuoyInstance(config.buoyInstances[0]);
                    expect(config.triggerFilter(trigger)).toBe(true);
                });

                it('sensorFilter', function () {
                    var sensor = {
                        buoyInstance: { id: 117 }
                    };
                    config.selectAll();
                    expect(config.sensorFilter(sensor)).toBe(true);
                    config.selectBuoyGroup(config.buoyGroups[0]);
                    expect(config.sensorFilter(sensor)).toBe(false);
                    config.selectBuoyGroup(config.buoyGroups[2]);
                    expect(config.sensorFilter(sensor)).toBe(true);
                    config.selectBuoyInstance(config.buoyInstances[1]);
                    expect(config.sensorFilter(sensor)).toBe(false);
                    config.selectBuoyInstance(config.buoyInstances[0]);
                    expect(config.sensorFilter(sensor)).toBe(true);
                });
            });

            describe('sensorsAttached', function () {
                it('should handle all selected', function () {
                    config.selectAll();
                    expect(config.sensorsAttached()).toBe(true);
                    config.buoyInstances.length = 0;
                    expect(config.sensorsAttached()).toBe(false);
                });

                it('should handle group selected', function () {
                    config.selectBuoyGroup(config.buoyGroups[0]);
                    expect(config.sensorsAttached()).toBe(true);
                    config.selectBuoyGroup(config.buoyGroups[1]);
                    expect(config.sensorsAttached()).toBe(false);
                });

                it('should handle instance selected', function () {
                    config.selectBuoyInstance(config.buoyInstances[1]);
                    expect(config.sensorsAttached()).toBe(true);
                    config.selectBuoyInstance(config.buoyInstances[0]);
                    expect(config.sensorsAttached()).toBe(false);
                });
            });

            describe('redeploying buoy', function () {
                it('redeployBuoy success', function () {
                    spyOn(server, 'redeployBuoy').and.returnValue(deferred.promise);
                    server.getBuoyInstances.calls.reset();
                    config.selectBuoyInstance(config.buoyInstances[0]);
                    config.redeployBuoy();
                    expect(server.redeployBuoy).toHaveBeenCalled();
                    deferred.resolve();
                    scope.$digest();
                    expect(gui.alertSuccess).toHaveBeenCalled();
                    expect(server.getBuoyInstances).toHaveBeenCalled();
                });

                it('redeployBuoy error', function () {
                    spyOn(server, 'redeployBuoy').and.returnValue(deferred.promise);
                    config.selectBuoyInstance(config.buoyInstances[0]);
                    var oldName = config.selected.obj.name;
                    var oldGroupId = config.selected.obj.buoyGroupId;
                    config.redeployBuoy();
                    expect(server.redeployBuoy).toHaveBeenCalled();
                    deferred.reject({ data: '' });
                    scope.$digest();
                    expect(gui.alertBadResponse).toHaveBeenCalled();
                    expect(config.selected.obj.name).toEqual(oldName);
                    expect(config.selected.obj.buoyGroupId).toEqual(oldGroupId);
                });

                it('redeployShow', function () {
                    config.redeployShow();
                    expect(config.redeploy.show).toBe(true);
                    expect(gui.focus).toHaveBeenCalled();
                });
            });
        });
    });
})();