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
/* global saveAs */
(function() {
	'use strict';
	
	angular.module('app')
		.factory('server', server);
	
	/**
		* @ngdoc service
		* @name app.core.server
		* @requires $http
		* @requires $log
		* @requires SERVER_ADDRESS
		* @requires auth
		* @requires moment
	**/
	function server($http, $log, SERVER_ADDRESS, auth, moment) {
		
		/** The service methods to expose */
		return {
			login: login,
			logout: logout,
			changePassword: changePassword,
			resetPassword: resetPassword,
			forgotPassword: forgotPassword,
			getReadings: getReadings,
			getBuoyGroups: getBuoyGroups,
			getBuoyInstances: getBuoyInstances,
			updateBuoyGroupName: updateBuoyGroupName,
			updateBuoyInstanceName: updateBuoyInstanceName,
			newBuoyGroup: newBuoyGroup,
			updateBuoyInstanceGroup: updateBuoyInstanceGroup,
			getCommandTypes: getCommandTypes,
			addCommandType: addCommandType,
			updateCommandType: updateCommandType,
			deleteCommandType: deleteCommandType,
			exportData: exportData,
			getBuoyInstanceSensors: getBuoyInstanceSensors,
			getWarnings: getWarnings,
			getSensorTypes: getSensorTypes,
			addSensorType: addSensorType,
			updateSensorType: updateSensorType,
			deleteSensorType: deleteSensorType,
			getCommands: getCommands,
			addCommand: addCommand,
			updateCommand: updateCommand,
			deleteCommand: deleteCommand,
			getWarningTriggers: getWarningTriggers,
			addWarningTrigger: addWarningTrigger,
			updateWarningTrigger: updateWarningTrigger,
			deleteWarningTrigger: deleteWarningTrigger,
			getUsers: getUsers,
			addUser: addUser,
			updateUser: updateUser,
			deleteUser: deleteUser,
			getBuoys: getBuoys,
			addBuoy: addBuoy,
			updateBuoy: updateBuoy,
			deleteBuoy: deleteBuoy,
			redeployBuoy: redeployBuoy,
			getBuoyLogsAddress: getBuoyLogsAddress
		};
		
		/** 
		 * Create a config object containing empty headers
		 * @return {object} request config
		 */
		function headers() {
			return {
				headers: {}
			};
		}
		
		/**
		 * Add JWT token to request headers
		 * @param {object} config request config
		 */
		function addToken(config) {
			config.headers['Authorization'] = 'Bearer ' + auth.getToken();
			return config;
		}
		
		/**
		 * Set request content type to JSON
		 * @param {object} config request config
		 */
		function setJson(config) {
			config.headers['Content-Type'] = 'application/json';
			return config;
		}
		
		/**
		 * Request login
		 * POST /api/login
		 * @param  {string} email    email
		 * @param  {string} password password
		 * @return {promise}          request promise
		 */
		function login(email, password) {
			var data = {
				email: email,
				password: password
			};
			var promise = $http.post(SERVER_ADDRESS + '/api/login', data);
			promise.then(function(res) {
				auth.saveUser(res.data);
			});
			return promise;
		}
		
		/** Logout */
		function logout() {
			auth.logout();
		}
		
		/**
		 * Request password change
		 * POST /api/changepassword
		 * @param  {string} password password
		 * @return {promise}          request promise
		 */
		function changePassword(currentPassword, newPassword) {
			var config = addToken(headers());
			var data = {
				currentPassword: currentPassword,
				newPassword: newPassword
			};
			var id = auth.currentUserId();
			return $http.put(SERVER_ADDRESS + '/api/users/' +
				id + '/change_password', data, config);
		}

		function resetPassword(token, newPassword) {
			var data = {
				newPassword: newPassword
			};
			var params = '?token=' + token;
			return $http.post(SERVER_ADDRESS + '/api/reset_password' + params, data);
		}
		
		/** 
		 * Request forgot password
		 * POST /api/forgotpsasword
		 * @param  {string} email email
		 * @return {promise}       request promise
		 */
		function forgotPassword(email) {
			var data = {
				email: email
			};
			return $http.post(SERVER_ADDRESS + '/api/forgot_password', data);
		}
		
		/**
		 * Request readings
		 * GET /api/readings?start_time=&end_time=
		 * @param  {int} from unix timestamp
		 * @param  {int} to   unix timestamp
		 * @return {promise}      request promise
		 */
		function getReadings(from, to) {
			var config = addToken(headers());
			var params = '?start_time=' + from + '&end_time=' + to;
			return $http.get(SERVER_ADDRESS + '/api/readings' + params, config);
		}
		
		/**
		 * Request buoy groups
		 * GET /api/buoy_groups
		 * @return {promise} request promise
		 */
		function getBuoyGroups() {
			var config = addToken(headers());
			return $http.get(SERVER_ADDRESS + '/api/buoy_groups', config);
		}
		
		/**
		 * Request active buoy instances
		 * GET /api/buoy_instances?active=true
		 * @return {[type]} [description]
		 */
		function getBuoyInstances() {
			var config = addToken(headers());
			return $http.get(SERVER_ADDRESS + '/api/buoy_instances?active=true', config);
		}
		
		/**
		 * Request update buoy group
		 * PUT /api/buoy_groups/:id
		 * @param  {int} id   buoyGroup id
		 * @param  {string} name new name
		 * @return {promise}      request promise
		 */
		function updateBuoyGroupName(id, name) {
			var config = setJson(addToken(headers()));
			var data = { 
				name: name
			};
			return $http.put(SERVER_ADDRESS + '/api/buoy_groups/' + id, 
					data, config);
		}
		
		/**
		 * Request update buoy instance 
		 * PUT /api/buoy_instances/:id
		 * @param  {int} id          buoyInstance id
		 * @param  {string} name        new name
		 * @param  {int} buoyGroupId buoyGroup id of instance
		 * @return {promise}             request promise
		 */
		function updateBuoyInstanceName(id, name, buoyGroupId) {
			var config = setJson(addToken(headers()));
			var data = { 
				name: name,
				buoyGroupId: buoyGroupId
			};
			return $http.put(SERVER_ADDRESS + '/api/buoy_instances/' + id, 
					data, config);
		}
		
		/**
		 * Request create new buoy group
		 * POST /api/buoy_groups
		 * @param  {string} name new group name
		 * @return {promise}      request promise
		 */
		function newBuoyGroup(name) {
			var config = setJson(addToken(headers()));
			var data = {
				name: name
			};
			return $http.post(SERVER_ADDRESS + '/api/buoy_groups',
					data, config);
		}

		function redeployBuoy(buoyId, name, groupId) {
			var config = setJson(addToken(headers()));
			var data = {
				name: name,
				buoyId: buoyId,
				buoyGroupId: groupId
			};
			return $http.post(SERVER_ADDRESS + '/api/buoy_instances', 
				data, config);
		}
		
		/**
		 * Request update buoy instance in group
		 * PUT /api/buoy_instances/:id
		 * @param  {int} instanceId  buoy id
		 * @param  {int} groupId new group id
		 * @param  {string} name    new name
		 * @return {promise}         request promise
		 */
		function updateBuoyInstanceGroup(instanceId, groupId, name) {
			var config = setJson(addToken(headers()));
			var data = {
				name: name,
				buoyGroupId: groupId
			};
			return $http.put(SERVER_ADDRESS + '/api/buoy_instances/' + instanceId,
					data, config);
		}
		
		/**
		 * Request command types
		 * GET /api/command_types
		 * @return {promise} request promise
		 */
		function getCommandTypes() {
			var config = addToken(headers());
			return $http.get(SERVER_ADDRESS + '/api/command_types', config);
		}

		/**
		 * Request create sensor type
		 * POST /api/sensor_types
		 * @param {object} sensor type new sensor type
		 * @return {promise} request promise
		 */
		function addCommandType(commandType) {
			var config = setJson(addToken(headers()));
			var data = {
				name: commandType.name,
				description: commandType.description
			};
			return $http.post(SERVER_ADDRESS + '/api/command_types', 
				data, config);
		}
		
		/**
		 * Request update command type
		 * PUT /api/command_types/:id
		 * @param  {object} command type updated command type
		 * @return {promise}      request promise
		 */
		function updateCommandType(commandType) {
			var config = setJson(addToken(headers()));
			var data = {
				name: commandType.name,
				description: commandType.description
			};
			return $http.put(SERVER_ADDRESS + '/api/command_types/' + commandType.id, 
				data, config);
		}
		
		/**
		 * Request delete command type
		 * DELETE /api/command_types/:id
		 * @param  {int} id command type Id
		 * @return {promise}    request promise
		 */
		function deleteCommandType(id) {
			var config = addToken(headers());
			return $http.delete(SERVER_ADDRESS + '/api/command_types/' + id, config);
		}
		
		/**
		 * Request export data and download CSV in response
		 * GET/api/export?readings=:ids
		 * @param  {int[]} readings list of reading Ids
		 * @return {promise}          request promise
		 */
		function exportData(readings) {
			var config = addToken(headers());
			config.responseType = 'arraybuffer';
			config.headers['Accept'] = 'application/zip';
			var data = {
				readings: readings
			};
			
			var promise = $http.post(SERVER_ADDRESS + '/api/readings/export', 
				data, config);
				
			promise.then(function(res) {
				var time = moment().format('DD-MM-YY-HHmmss');
				var filename = 'export-' + time + '.zip';
				openSaveAsDialog(filename, res.data, 'application/zip');
			}, function(res) {
				$log.error(res);
			});
			
			return promise;
		}
		
		/** Extract file from response and save it
		 *  saveAs is from FileSaver.js, a cross browser solution
		 */
		function openSaveAsDialog(filename, content, mediaType) {
			var blob = new Blob([content], {type: mediaType});
			saveAs(blob, filename);
		}

		/**
		 * Request sensors for buoy instance
		 * GET /api/buoy_instances/id/sensors
		 * @param {int} buoyInstanceId Id of the Buoy Instance
		 * @return {promise}         request promise 
		 */
		function getBuoyInstanceSensors(buoyInstanceId) {
			var config = addToken(headers());
			return $http.get(SERVER_ADDRESS + '/api/buoy_instances/' + buoyInstanceId + '/sensors', config);
		}

		/**
		 * Request pending commands
		 * GET /api/commands?sent=false
		 * @return {promise} request promise
		 */
		function getCommands() {
			var config = addToken(headers());
			return $http.get(SERVER_ADDRESS + '/api/commands?sent=false', config);
		}
		
		/**
		 * Request new command for buoys
		 * POST /api/commands
		 * @param  {object} command command
		 * @param  {int[]} buoyIds list of buoy Ids to send command for
		 * @return {promise}         request promise
		 */
		function addCommand(command, buoyIds) {
			var config = setJson(addToken(headers()));
			var data = {
				commands: []
			};
			buoyIds.forEach(function(buoyId) {
				data.commands.push({
					commandTypeId: command.commandTypeId,
					value: parseInt(command.value, 10),
					buoyId: buoyId
				});
			});
			return $http.post(SERVER_ADDRESS + '/api/commands', 
				data, config);
		}

		/**
		 * Request update command for buoys
		 * PUT /api/commands/:id
		 * @param  {object} command updated command
		 * @return {promise}      request promise
		 */
		function updateCommand(command) {
			var config = setJson(addToken(headers()));
			var data = {
				commandTypeId: command.commandTypeId,
				value: parseInt(command.value, 10),
				buoyId: command.buoyId
			};
			return $http.put(SERVER_ADDRESS + '/api/commands/' + command.id, 
				data, config);
		}
		
		/**
		 * Request delete command
		 * @param  {int} id  command id
		 * @return {promise}         request promise
		 */
		function deleteCommand(id) {
			var config = addToken(headers());
			return $http.delete(SERVER_ADDRESS + '/api/commands/' + id, config);
		}
		
		/**
		 * Request warning triggers for active buoy instances
		 * GET /api/warning_triggers?active_instances=true
		 * @return {promise} request promise
		 */
		function getWarningTriggers() {
			var config = addToken(headers());
			return $http.get(SERVER_ADDRESS + '/api/warning_triggers?active_instances=true', config);
		}

		/**
		 * Request create warning triggers for buoy instances
		 * POST /api/warning_triggers
		 * @param {object} trigger         new trigger
		 * @param {int[]} buoyInstanceIds list of buoy instance Ids
		 * @return {promise} request promise
		 */
		function addWarningTrigger(trigger, buoyInstanceIds) {
			var config = setJson(addToken(headers()));
			var data = {
				warningTriggers: []
			};
			buoyInstanceIds.forEach(function(buoyInstanceId) {
				data.warningTriggers.push({
					buoyInstanceId: buoyInstanceId,
					sensorTypeId: trigger.sensorTypeId,
					operator: trigger.operator,
					value: parseInt(trigger.value, 10),
					message: trigger.message
				});
			});
			return $http.post(SERVER_ADDRESS + '/api/warning_triggers', 
				data, config);
		}

		/**
		 * Request update warning trigger for buoys
		 * PUT /api/warning_triggers/:id
		 * @param  {object} trigger updated warning trigger
		 * @return {promise}      request promise
		 */
		function updateWarningTrigger(trigger) {
			var config = setJson(addToken(headers()));
			var data = {
					buoyInstanceId: trigger.buoyInstanceId,
					sensorTypeId: trigger.sensorTypeId,
					operator: trigger.operator,
					value: parseInt(trigger.value, 10),
					message: trigger.message
			};
			return $http.put(SERVER_ADDRESS + '/api/warning_triggers/' + trigger.id, 
				data, config);
		}
		
		/**
		 * Request delete warning trigger
		 * @param  {int} id  warning trigger id
		 * @return {promise}         request promise
		 */
		function deleteWarningTrigger(id) {
			var config = addToken(headers());
			return $http.delete(SERVER_ADDRESS + '/api/warning_triggers/' + id, config);
		}
		
		/**
		 * Request warnings
		 * GET /api/warnings
		 * @return {promise} request promise
		 */
		function getWarnings() {
			var config = addToken(headers());
			return $http.get(SERVER_ADDRESS + '/api/warnings', config);
		}
		
		/**
		 * Request sensor types
		 * GET /api/sensor_types
		 * @return {promise} request promise
		 */
		function getSensorTypes() {
			var config = addToken(headers());
			return $http.get(SERVER_ADDRESS + '/api/sensor_types', config);
		}

		/**
		 * Request create sensor type
		 * POST /api/sensor_types
		 * @param {object} sensor type new sensor type
		 * @return {promise} request promise
		 */
		function addSensorType(sensorType) {
			var config = setJson(addToken(headers()));
			var data = {
				name: sensorType.name,
				description: sensorType.description,
				unit: sensorType.unit,
				lowerBound: parseInt(sensorType.lowerBound, 10),
				upperBound: parseInt(sensorType.upperBound, 10)
			};
			return $http.post(SERVER_ADDRESS + '/api/sensor_types', 
				data, config);
		}
		
		/**
		 * Request update sensor type
		 * PUT /api/sensor_types/:id
		 * @param  {object} sensor type updated sensor type
		 * @return {promise}      request promise
		 */
		function updateSensorType(sensorType) {
			var config = setJson(addToken(headers()));
			var data = {
				name: sensorType.name,
				description: sensorType.description,
				unit: sensorType.unit,
				lowerBound: parseInt(sensorType.lowerBound, 10),
				upperBound: parseInt(sensorType.upperBound, 10)
			};
			return $http.put(SERVER_ADDRESS + '/api/sensor_types/' + sensorType.id, 
				data, config);
		}
		
		/**
		 * Request delete sensor type
		 * DELETE /api/sensor_types/:id
		 * @param  {int} id sensor type Id
		 * @return {promise}    request promise
		 */
		function deleteSensorType(id) {
			var config = addToken(headers());
			return $http.delete(SERVER_ADDRESS + '/api/sensor_types/' + id, config);
		}
		
		/**
		 * Request users
		 * GET /api/users
		 * @return {promise} request promise
		 */
		function getUsers() {
			var config = addToken(headers());
			return $http.get(SERVER_ADDRESS + '/api/users', config);
		}
		
		/**
		 * Request create user
		 * POST /api/users
		 * @param {object} user new user
		 * @return {promise} request promise
		 */
		function addUser(user) {
			var config = setJson(addToken(headers()));
			var data = {
				email: user.email,
				firstName: user.firstName,
				lastName: user.lastName,
				role: user.role
			};
			return $http.post(SERVER_ADDRESS + '/api/users', 
				data, config);
		}
		
		/**
		 * Request update user
		 * PUT /api/users/:id
		 * @param  {object} user updated user
		 * @return {promise}      request promise
		 */
		function updateUser(user) {
			var config = setJson(addToken(headers()));
			var data = {
				firstName: user.firstName,
				lastName: user.lastName,
				role: user.role
			};
			return $http.put(SERVER_ADDRESS + '/api/users/' + user.id, 
				data, config);
		}
		
		/**
		 * Request delete user
		 * DELETE /api/users/:id
		 * @param  {int} id user Id
		 * @return {promise}    request promise
		 */
		function deleteUser(id) {
			var config = addToken(headers());
			return $http.delete(SERVER_ADDRESS + '/api/users/' + id, config);
		}

		/**
		 * Request buoys
		 * GET /api/buoys
		 * @return {promise} request promise
		 */
		function getBuoys() {
			var config = addToken(headers());
			return $http.get(SERVER_ADDRESS + '/api/buoys', config);
		}
		
		/**
		 * Request create buoy
		 * POST /api/buoys
		 * @param {object} buoy new buoy
		 * @return {promise} request promise
		 */
		function addBuoy(buoy) {
			var config = setJson(addToken(headers()));
			var data = {
				name: buoy.name,
				guid: buoy.guid
			};
			return $http.post(SERVER_ADDRESS + '/api/buoys', 
				data, config);
		}
		
		/**
		 * Request update buoy (NOT USED)
		 * PUT /api/buoys/:id
		 * @param  {object} buoy updated buoy
		 * @return {promise}      request promise
		 */
		function updateBuoy(buoy) {
			var config = setJson(addToken(headers()));
			var data = {
				name: buoy.name,
				guid: buoy.guid
			};
			return $http.put(SERVER_ADDRESS + '/api/buoys/' + buoy.id, 
				data, config);
		}
		
		/**
		 * Request delete buoy
		 * DELETE /api/buoys/:id
		 * @param  {int} id buoy Id
		 * @return {promise}    request promise
		 */
		function deleteBuoy(id) {
			var config = addToken(headers());
			return $http.delete(SERVER_ADDRESS + '/api/buoys/' + id, config);
		}

		/**
		 * Get the address for the buoy logs websocket
		 * Used in buoyLog service
		 * @return {string} buoy logs websocket address
		 */
		function getBuoyLogsAddress() {
			return (SERVER_ADDRESS + '/api/buoy_logs').replace('https', 'wss');
		}
	}
})();