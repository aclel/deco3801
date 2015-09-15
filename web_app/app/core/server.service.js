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
	
	function server($http, $log, SERVER_ADDRESS, auth, moment) {
		
		return {
			login: login,
			logout: logout,
			changePassword: changePassword,
			forgotPassword: forgotPassword,
			getReadings: getReadings,
			getSensors: getSensors,
			getBuoyGroups: getBuoyGroups,
			getBuoyInstances: getBuoyInstances,
			updateBuoyGroupName: updateBuoyGroupName,
			updateBuoyInstanceName: updateBuoyInstanceName,
			newBuoyGroup: newBuoyGroup,
			updateBuoyInstanceGroup: updateBuoyInstanceGroup,
			getCommandTypes: getCommandTypes,
			getBuoyCommands: getBuoyCommands,
			exportData: exportData,
			sendBuoyCommand: sendBuoyCommand,
			getWarningTriggers: getWarningTriggers,
			addWarningTriggers: addWarningTriggers,
			getWarnings: getWarnings,
			getSensorTypes: getSensorTypes,
			getUsers: getUsers,
			addUser: addUser,
			updateUser: updateUser,
			deleteUser: deleteUser,
			deleteBuoyCommand: deleteBuoyCommand,
			addBuoy: addBuoy
		};
		
		function headers() {
			return {
				headers: {}
			};
		}
		
		function addToken(config) {
			config.headers['Authorization'] = 'Bearer ' + auth.getToken();
			return config;
		}
		
		function setJson(config) {
			config.headers['Content-Type'] = 'application/json';
			return config;
		}
		
		function login(email, password) {
			var data = {
				email: email,
				password: password
			};
			return $http.post(SERVER_ADDRESS + '/api/login', JSON.stringify(data));
		}
		
		function logout() {
			auth.logout();
		}
		
		function changePassword(password) {
			var data = {
				email: auth.currentUser(),
				password: password
			};
			return $http.post(SERVER_ADDRESS + '/api/changepassword', JSON.stringify(data));
		}
		
		function forgotPassword(email) {
			var data = {
				email: email
			};
			return $http.post(SERVER_ADDRESS + '/api/forgotpassword', JSON.stringify(data));
		}
		
		function getReadings(from, to) {
			var config = addToken(headers());
			var params = "?start_time=" + from + "&end_time=" + to;
			return $http.get(SERVER_ADDRESS + '/api/readings' + params, config);
		}
		
		function getSensors() {
			var config = addToken(headers());
			return $http.get(SERVER_ADDRESS + '/api/sensor_types', config);
		}
		
		function getBuoyGroups() {
			var config = addToken(headers());
			return $http.get(SERVER_ADDRESS + '/api/buoy_groups', config);
		}
		
		function getBuoyInstances() {
			var config = addToken(headers());
			return $http.get(SERVER_ADDRESS + '/api/buoy_instances?active=true', config);
		}
		
		function updateBuoyGroupName(id, name) {
			var config = setJson(addToken(headers()));
			var data = { 
				name: name
			};
			return $http.put(SERVER_ADDRESS + '/api/buoy_groups/' + id, 
					JSON.stringify(data), config);
		}
		
		function updateBuoyInstanceName(id, name, buoyGroupId) {
			var config = setJson(addToken(headers()));
			var data = { 
				name: name,
				buoyGroupId: buoyGroupId
			};
			return $http.put(SERVER_ADDRESS + '/api/buoy_instances/' + id, 
					JSON.stringify(data), config);
		}
		
		function newBuoyGroup(name) {
			var config = setJson(addToken(headers()));
			var data = {
				name: name
			};
			return $http.post(SERVER_ADDRESS + '/api/buoy_groups',
					JSON.stringify(data), config);
		}
		
		function updateBuoyInstanceGroup(buoyId, groupId, name) {
			var config = setJson(addToken(headers()));
			var data = {
				name: name,
				buoyId: buoyId,
				buoyGroupId: groupId
			};
			return $http.post(SERVER_ADDRESS + '/api/buoy_instances',
					JSON.stringify(data), config);
		}
		
		function getCommandTypes() {
			var config = addToken(headers());
			return $http.get(SERVER_ADDRESS + '/api/command_types', config);
		}
		
		function getBuoyCommands() {
			var config = addToken(headers());
			return $http.get(SERVER_ADDRESS + '/api/commands?sent=false', config);
		}
		
		function exportData(readings) {
			var config = addToken(headers());
			config.responseType = 'arraybuffer';
			config.headers['Accept'] = 'text/csv';
			
			var promise = $http.get(SERVER_ADDRESS + '/api/export?readings=' +
				readings.join(), config);
				
			promise.then(function(res) {
				var time = moment().format("DD-MM-YY-HHmmss");
				var filename = 'export-' + time + '.csv';
				openSaveAsDialog(filename, res.data, 'text/csv');
			}, function(res) {
				$log.error(res);
			});
			
			return promise;
		}
		
		function openSaveAsDialog(filename, content, mediaType) {
			var blob = new Blob([content], {type: mediaType});
			saveAs(blob, filename);
		}
		
		function sendBuoyCommand(command, buoyIds) {
			var config = setJson(addToken(headers()));
			var data = {
				commands: []
			};
			buoyIds.forEach(function(buoyId) {
				data.commands.push({
					commandTypeId: command.id,
					value: parseInt(command.value, 10),
					buoyId: buoyId
				});
			});
			return $http.post(SERVER_ADDRESS + '/api/commands', 
				JSON.stringify(data), config);
		}
		
		function deleteBuoyCommand(buoyId, command) {
			
		}
		
		function getWarningTriggers() {
			var config = addToken(headers());
			return $http.get(SERVER_ADDRESS + '/api/warning_triggers?active_instances=true', config);
		}
		
		function addWarningTriggers(trigger, buoyInstanceIds) {
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
				JSON.stringify(data), config);
		}
		
		function getWarnings() {
			var config = addToken(headers());
			return $http.get(SERVER_ADDRESS + '/api/warnings', config);
		}
		
		function getSensorTypes() {
			var config = addToken(headers());
			return $http.get(SERVER_ADDRESS + '/api/sensor_types', config);
		}
		
		function getUsers() {
			var config = addToken(headers());
			return $http.get(SERVER_ADDRESS + '/api/users', config);
		}
		
		function addUser(user) {
			var config = setJson(addToken(headers()));
			var data = {
				email: user.email,
				firstName: user.firstName,
				lastName: user.lastName,
				role: user.role
			};
			return $http.post(SERVER_ADDRESS + '/api/users', 
				JSON.stringify(data), config);
		}
		
		function updateUser(user) {
			var config = setJson(addToken(headers()));
			var data = {
				firstName: user.firstName,
				lastName: user.lastName,
				role: user.role
			};
			return $http.put(SERVER_ADDRESS + '/api/users/' + user.id, 
				JSON.stringify(data), config);
		}
		
		function deleteUser(id) {
			var config = addToken(headers());
			return $http.delete(SERVER_ADDRESS + '/api/users/' + id, config);
		}
		
		function addBuoy(name, guid) {
			var config = setJson(addToken(headers()));
			var data = {
				guid: guid,
				name: name
			};
			return $http.post(SERVER_ADDRESS + '/api/buoys', 
				JSON.stringify(data), config);
		}
	}
})();