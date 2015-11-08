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
    
    /** Unit tests for server service */
    describe('Service: server', function() {
        var server, httpBackend, res, auth, log;

        beforeEach(module('app'));

        beforeEach(inject(function($httpBackend, _server_, _auth_, $log) {
            res = { stuff: {} };
            httpBackend = $httpBackend;
            server = _server_;
            log = $log;
            auth = _auth_;
            spyOn(auth, 'currentUserId').and.returnValue(0);
            spyOn(auth, 'logout').and.stub();
        }));

        afterEach(function() {
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });

        describe('HTTP requests', function () {
            it('should request POST /login', function () {
                httpBackend.expectPOST(/\/api\/login/).respond(res);
                server.login('', '');
                httpBackend.flush();
            });

            it('should request PUT /change_password', function () {
                httpBackend.expectPUT(/\/api\/users\/0\/change_password/).respond(res);
                server.changePassword('', '');
                httpBackend.flush();
                expect(auth.currentUserId).toHaveBeenCalled();
            });

            it('should request POST /reset_password', function () {
                httpBackend.expectPOST(/\/api\/reset_password/).respond(res);
                server.resetPassword('', '');
                httpBackend.flush();
            });

            it('should request POST /forgot_password', function () {
                httpBackend.expectPOST(/\/api\/forgot_password/).respond(res);
                server.forgotPassword('');
                httpBackend.flush();
            });

            it('should request GET /readings', function () {
                httpBackend.expectGET(/\/api\/readings/).respond(res);
                server.getReadings(0, 0);
                httpBackend.flush();
            });

            it('should request GET /buoy_groups', function () {
                httpBackend.expectGET(/\/api\/buoy_groups/).respond(res);
                server.getBuoyGroups();
                httpBackend.flush();
            });

            it('should request GET /buoy_instances', function () {
                httpBackend.expectGET(/\/api\/buoy_instances/).respond(res);
                server.getBuoyInstances();
                httpBackend.flush();
            });

            it('should request PUT /buoy_groups', function () {
                httpBackend.expectPUT(/\/api\/buoy_groups\/0/).respond(res);
                server.updateBuoyGroupName(0, '');
                httpBackend.flush();
            });

            it('should request PUT /buoy_instances', function () {
                httpBackend.expectPUT(/\/api\/buoy_instances\/0/).respond(res);
                server.updateBuoyInstanceName(0, '', 0);
                httpBackend.flush();
            });

            it('should request POST /buoy_groups', function () {
                httpBackend.expectPOST(/\/api\/buoy_groups/).respond(res);
                server.newBuoyGroup('');
                httpBackend.flush();
            });

            it('should request POST /buoy_instances', function () {
                httpBackend.expectPOST(/\/api\/buoy_instances/).respond(res);
                server.redeployBuoy(0, '', 0);
                httpBackend.flush();
            });

            it('should request PUT /buoy_instances', function () {
                httpBackend.expectPUT(/\/api\/buoy_instances\/0/).respond(res);
                server.updateBuoyInstanceGroup(0, 0, '');
                httpBackend.flush();
            });

            it('should request GET /command_types', function () {
                httpBackend.expectGET(/\/api\/command_types/).respond(res);
                server.getCommandTypes();
                httpBackend.flush();
            });

            it('should request POST /command_types', function () {
                httpBackend.expectPOST(/\/api\/command_types/).respond(res);
                server.addCommandType({ name: '', description: '' });
                httpBackend.flush();
            });

            it('should request PUT /command_types', function () {
                httpBackend.expectPUT(/\/api\/command_types\/0/).respond(res);
                server.updateCommandType({ id: 0, name: '', description: '' });
                httpBackend.flush();
            });

            it('should request DELETE /command_types', function () {
                httpBackend.expectDELETE(/\/api\/command_types/).respond(res);
                server.deleteCommandType(0);
                httpBackend.flush();
            });

            // PhantomJS can't download files
            // xit('should request POST /readings/export and respond success', function () {
            //     httpBackend.expectPOST(/\/api\/readings\/export/).respond(res);
            //     server.exportData([]);
            //     httpBackend.flush();
            // });

            it('should request POST /readings/export and respond error', function () {
                httpBackend.expectPOST(/\/api\/readings\/export/).respond(404);
                server.exportData([]);
                httpBackend.flush();
                expect(log.assertEmpty).toThrow();
            });

            it('should request GET /buoy_instances/id/sensors', function () {
                httpBackend.expectGET(/\/api\/buoy_instances\/0\/sensors/).respond(res);
                server.getBuoyInstanceSensors(0);
                httpBackend.flush();
            });

            it('should request GET /commands', function () {
                httpBackend.expectGET(/\/api\/commands/).respond(res);
                server.getCommands();
                httpBackend.flush();
            });

            it('should request POST /commands', function () {
                httpBackend.expectPOST(/\/api\/commands/).respond(res);
                server.addCommand({ commandTypeId: 0, value: 20 }, [0]);
                httpBackend.flush();
            });

            it('should request PUT /commands', function () {
                httpBackend.expectPUT(/\/api\/commands\/0/).respond(res);
                server.updateCommand({ id: 0, commandTypeId: 0, value: 20, buoyId: 0 });
                httpBackend.flush();
            });

            it('should request DELETE /commands', function () {
                httpBackend.expectDELETE(/\/api\/commands/).respond(res);
                server.deleteCommand(0);
                httpBackend.flush();
            });

            it('should request GET /warning_triggers', function () {
                httpBackend.expectGET(/\/api\/warning_triggers/).respond(res);
                server.getWarningTriggers();
                httpBackend.flush();
            });

            it('should request POST /warning_triggers', function () {
                httpBackend.expectPOST(/\/api\/warning_triggers/).respond(res);
                server.addWarningTrigger({ buoyInstanceId: 0, sensorTypeId: 0,
                    operator: '<', value: 20, message: '' }, [0]);
                httpBackend.flush();
            });

            it('should request PUT /warning_triggers', function () {
                httpBackend.expectPUT(/\/api\/warning_triggers\/0/).respond(res);
                server.updateWarningTrigger({ id: 0, buoyInstanceId: 0, sensorTypeId: 0,
                    operator: '<', value: 20, message: '' });
                httpBackend.flush();
            });

            it('should request DELETE /warning_triggers', function () {
                httpBackend.expectDELETE(/\/api\/warning_triggers/).respond(res);
                server.deleteWarningTrigger(0);
                httpBackend.flush();
            });

            it('should request GET /warnings', function () {
                httpBackend.expectGET(/\/api\/warnings/).respond(res);
                server.getWarnings();
                httpBackend.flush();
            });

            it('should request GET /sensor_types', function () {
                httpBackend.expectGET(/\/api\/sensor_types/).respond(res);
                server.getSensorTypes();
                httpBackend.flush();
            });

            it('should request POST /sensor_types', function () {
                httpBackend.expectPOST(/\/api\/sensor_types/).respond(res);
                server.addSensorType({ name: '', description: '',
                    unit: '', lowerBound: 0, upperBound: 100 });
                httpBackend.flush();
            });

            it('should request PUT /sensor_types', function () {
                httpBackend.expectPUT(/\/api\/sensor_types\/0/).respond(res);
                server.updateSensorType({ id: 0, name: '', description: '',
                    unit: '', lowerBound: 0, upperBound: 100 });
                httpBackend.flush();
            });

            it('should request DELETE /sensor_types', function () {
                httpBackend.expectDELETE(/\/api\/sensor_types/).respond(res);
                server.deleteSensorType(0);
                httpBackend.flush();
            });

            it('should request GET /users', function () {
                httpBackend.expectGET(/\/api\/users/).respond(res);
                server.getUsers();
                httpBackend.flush();
            });

            it('should request POST /users', function () {
                httpBackend.expectPOST(/\/api\/users/).respond(res);
                server.addUser({ email: '', firstName: '',
                    lastName: '', role: '' });
                httpBackend.flush();
            });

            it('should request PUT /users', function () {
                httpBackend.expectPUT(/\/api\/users\/0/).respond(res);
                server.updateUser({ id: 0, firstName: '',
                    lastName: '', role: '' });
                httpBackend.flush();
            });

            it('should request DELETE /users', function () {
                httpBackend.expectDELETE(/\/api\/users/).respond(res);
                server.deleteUser(0);
                httpBackend.flush();
            });

            it('should request GET /buoys', function () {
                httpBackend.expectGET(/\/api\/buoys/).respond(res);
                server.getBuoys();
                httpBackend.flush();
            });

            it('should request POST /buoys', function () {
                httpBackend.expectPOST(/\/api\/buoys/).respond(res);
                server.addBuoy({ name: '', guid: '' });
                httpBackend.flush();
            });

            it('should request PUT /buoys', function () {
                httpBackend.expectPUT(/\/api\/buoys\/0/).respond(res);
                server.updateBuoy({ id: 0, name: '', guid: '' });
                httpBackend.flush();
            });

            it('should request DELETE /buoys', function () {
                httpBackend.expectDELETE(/\/api\/buoys/).respond(res);
                server.deleteBuoy(0);
                httpBackend.flush();
            });
        });

        describe('logout', function () {
            it('should call auth.logout', function () {
                server.logout();
                expect(auth.logout).toHaveBeenCalled();
            });
        });
    });
})();