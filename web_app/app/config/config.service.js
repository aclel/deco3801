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
    
    angular.module('app.config')
        .factory('config', configService);
        
    /**
        * @ngdoc service
        * @name app.config.config
        * @description Handles logic for config page
        * @requires $log
        * @requires server
        * @requires moment
    **/
    function configService($rootScope, server, gui, moment) {
        /** Internal variables. These are preserved until page refresh. */
        var newId = Math.pow(2, 32) + 1;
        var buoyGroups = [];
        var buoyInstances = [];
        var groupBuoys = [];
        var commands = [];
        var commandTypes = [];
        var buoyInstanceSensors = [];
        var sensorTypes = [];
        var triggers = [];
        var selected = { type: 'all', obj: null };
        var editName = { on: false };
        var editGroup = { on: false };
        var operators = [ '<', '>', '=' ];
        var editingPollRate = false;
        var treeOptions = {};
        var redeploy = {};
        var newEdit = { command: false, trigger: false };

        /** The service methods to expose */
        return {
            newId: newId,
            buoyGroups: buoyGroups,
            buoyInstances: buoyInstances,
            groupBuoys: groupBuoys,
            commands: commands,
            commandTypes: commandTypes,
            buoyInstanceSensors: buoyInstanceSensors,
            sensorTypes: sensorTypes,
            triggers: triggers,
            selected: selected,
            editName: editName,
            editGroup: editGroup,
            operators: operators,
            editingPollRate: editingPollRate,
            treeOptions: treeOptions,
            redeploy: redeploy,
            newEdit: newEdit,

            refreshData: refreshData,
            selectAll: selectAll,
            selectBuoyGroup: selectBuoyGroup,
            selectBuoyInstance: selectBuoyInstance,
            startEditingName: startEditingName,
            finishEditingName: finishEditingName,
            startEditingBuoyGroup: startEditingBuoyGroup,
            finishEditingBuoyGroup: finishEditingBuoyGroup,
            selectNewBuoyGroup: selectNewBuoyGroup,
            saveNewBuoyGroup: saveNewBuoyGroup,
            buoyGroupFilter: buoyGroupFilter,
            commandFilter: commandFilter,
            showBuoyConfig: showBuoyConfig,
            editing: editing,
            cancelEditName: cancelEditName,
            cancelEditGroup: cancelEditGroup,
            toggleBuoyGroup: toggleBuoyGroup,
            queryCommands: queryCommands,
            parseCommands: parseCommands,
            queryTriggers: queryTriggers,
            parseTriggers: parseTriggers,
            triggerFilter: triggerFilter,
            sensorFilter: sensorFilter,
            sensorsAttached: sensorsAttached,
            redeployBuoy: redeployBuoy,
            redeployShow: redeployShow
        };

        function refreshData() {
            querySensorTypes();
            queryBuoyGroups();
            queryBuoyInstances();
            queryCommandTypes();
            queryTriggers();
            setTreeOptions();
            resetRedeployInput();
        }

        /** Set the tree options for buoy groups list */
        function setTreeOptions() {
            treeOptions.accept = function(source, dest, destIndex) {
                // if (dest.nodropEnabled) return false;

                if (source.$modelValue.type !== 'instance') {
                    return false;
                } else {
                    // prevent instances from being moved out of a group
                    if (dest.depth() !== 1) { return false; }
                    // prevent instances being dragged into collapsed groups
                    if (dest.childNodes()[destIndex] != null) {
                        if (dest.childNodes()[destIndex].collapsed) { return false; }
                    }
                }
                return true;
            };
            treeOptions.dropped = function(event) {
                var groupId = event.dest.nodesScope.$nodeScope.$modelValue.id;
                var existingName = event.source.nodeScope.$modelValue.name;
                var instanceId = event.source.nodeScope.$modelValue.id;
                server.updateBuoyInstanceGroup(
                    instanceId,
                    groupId,
                    existingName
                ).then(function(res) {
                    queryBuoyInstances();
                    gui.alertSuccess('Buoy group changed.');
                }, function(res) {
                    queryBuoyInstances(); // easiest way to undo drag-drop
                    gui.alertBadResponse(res);
                });
            };
        }

        /** Query buoy groups from the server */
        function queryBuoyGroups() {
            server.getBuoyGroups().then(function(res) {
                buoyGroups.length = 0;
                res.data.buoyGroups.forEach(function(buoyGroup) {
                    buoyGroups.push(buoyGroup);
                });
                parseBuoyInstanceDetails();
            }, function(res) {
                gui.alertBadResponse(res);
            });
        }
        
        /** Query buoy instances from the server */
        function queryBuoyInstances() {
            server.getBuoyInstances().then(function(res) {
                buoyInstances.length = 0;
                res.data.buoyInstances.forEach(function(buoyInstance) {
                    buoyInstances.push(buoyInstance);
                });
                parseBuoyInstanceDetails();
                parseTriggers();
            }, function(res) {
                gui.alertBadResponse(res);
            });
        }
        
        /** Query command types from the server */
        function queryCommandTypes() {
            server.getCommandTypes().then(function(res) {
                commandTypes.length = 0;
                res.data.commandTypes.forEach(function(commandType) {
                    commandTypes.push(commandType);
                });
                queryCommands();
            }, function(res) {
                gui.alertBadResponse(res);
            });
        }
        
        /** Query buoy commands from the server */
        function queryCommands() {
            server.getCommands().then(function(res) {
                commands.length = 0;
                res.data.commands.forEach(function(command) {
                    commands.push(command);
                });
                parseCommands();
            }, function(res) {
                gui.alertBadResponse(res);
            });
        }
        
        /** Query warning triggers from the server */
        function queryTriggers() {
            server.getWarningTriggers().then(function(res) {
                triggers.length = 0;
                res.data.warningTriggers.forEach(function(trigger) {
                    triggers.push(trigger);
                });
                if (!sensorTypes.length) { querySensorTypes(); }
                parseTriggers();
            }, function(res) {
                gui.alertBadResponse(res);
            });
        }
        
        /** Query sensor types from the server */
        function querySensorTypes() {
            server.getSensorTypes().then(function(res) {
                sensorTypes.length = 0;
                res.data.sensorTypes.forEach(function(sensorType) {
                    sensorTypes.push(sensorType);
                });
                parseTriggers();
                parseBuoyInstanceSensors();
            }, function(res) {
                gui.alertBadResponse(res);
            });
        }
        
        /** Associate buoy instances with groups */
        function parseBuoyInstanceDetails() {
            resetBuoyGroupInstances();
            buoyInstanceSensors.length = 0;
            buoyInstances.forEach(function(buoyInstance) {
                setBuoyInstanceGroup(buoyInstance);
                buoyInstance.type = 'instance';
                parseBuoyInstanceStatus(buoyInstance);

                // flatten sensors
                buoyInstance.sensors.forEach(function(sensor) {
                    sensor.buoyInstance = buoyInstance;
                    sensor.buoyInstanceId = buoyInstance.id;
                    buoyInstanceSensors.push(sensor);
                });
            });
            parseBuoyInstanceSensors();
        }

        function parseBuoyInstanceStatus(buoyInstance) {
            if (buoyInstance.lastPolled.Valid) {
                buoyInstance.lastReceived = buoyInstance.pollRate.Time;
            } else {
                buoyInstance.lastReceived = 'Never';
            }
            if (buoyInstance.pollRate === 0) {
                buoyInstance.pollInterval = 0;
                buoyInstance.nextScheduled = 'Never';
            } else {
                var duration = moment.duration(buoyInstance.pollRate, 'seconds');
                buoyInstance.pollInterval = duration.humanize();
                if (buoyInstance.lastPolled.Valid) {
                    buoyInstance.nextScheduled = moment(buoyInstance.pollRate.Time)
                        .add(duration).format('DD/MM/YY HH:mm A');
                } else {
                    buoyInstance.nextScheduled = 'Never';
                }
            }
        }
        
        /** Associate sensor and buoy info with warnings */
        function parseTriggers() {
            triggers.forEach(function(trigger) {
                // get buoy name
                var i;
                for (i = 0; i < buoyInstances.length; i++) {
                    var buoyInstance = buoyInstances[i];
                    if (buoyInstance.id === trigger.buoyInstanceId) {
                        trigger.buoyInstanceName = buoyInstance.name;
                        break;
                    }
                }
                // get sensor name
                for (i = 0; i < sensorTypes.length; i++) {
                    var sensorType = sensorTypes[i];
                    if (sensorType.id === trigger.sensorTypeId) {
                        trigger.sensorName = sensorType.name;
                        trigger.sensorTypeArchived = sensorType.archived;
                        break;
                    }
                }
            });
        }

        /** Associate buoy instance sensors with sensor types */
        function parseBuoyInstanceSensors() {
            buoyInstanceSensors.forEach(function(sensor) {
                // get sensor name
                for (var i = 0; i < sensorTypes.length; i++) {
                    var sensorType = sensorTypes[i];
                    if (sensorType.id === sensor.sensorTypeId) {
                        sensor.sensorName = sensorType.name;
                        break;
                    }
                }
                // parse time
                sensor.recentTime = moment(sensor.lastRecorded.Time)
                    .format('DD/MM/YY HH:mm A');
            });
        }

        /** Associate each command with buoy and command info */
        function parseCommands() {
            commands.forEach(function(command) {
                // get buoy name
                var i;
                for (i = 0; i < buoyInstances.length; i++) {
                    var buoyInstance = buoyInstances[i];
                    if (command.buoyId === buoyInstance.buoyId) {
                        command.buoyName = buoyInstance.name;
                        if (command.buoyName === '') {
                            command.buoyName = '(no name)';
                        }
                        break;
                    }
                }
                // get command name and whether command type is archived
                for (i = 0; i < commandTypes.length; i++) {
                    if (command.commandTypeId === commandTypes[i].id) {
                        command.commandName = commandTypes[i].name;
                        command.commandTypeArchived = commandTypes[i].archived;
                        break;
                    }
                }
            });
        }

        function resetRedeployInput() {
            redeploy.show = false;
            redeploy.buoyGroupId = 0;
        }

        function updatePollRate(buoyInstance) {
            var command = {
                commandTypeId: 1,
                value: buoyInstance.pollRate,
                buoyId: buoyInstance.buoyId
            };
            server.addCommand(command, [buoyInstance.buoyId]);
        }
        
        /**
         * Determine whether to show command and warning trigger config
         * @return {bool} show config
         */
        function showBuoyConfig() {
            if (selected.type === 'instance' && !redeploy.show) { return true; }
            if (selected.type === 'group' && groupBuoys.length > 0) { return true; }
            if (selected.type === 'all' && buoyInstances.length > 0) { return true; }
            return false;
        }
        
        /** Associate buoy instances with buoy groups */
        function updateGroupBuoys() {
            groupBuoys.length = 0;
            buoyInstances.forEach(function(buoyInstance) {
                if (buoyInstance.buoyGroupId === selected.obj.id) {
                    groupBuoys.push(buoyInstance);
                }
            });
        }
        
        /** Show config for all buoys */
        function selectAll() {
            stopEditing();
            selected.type = 'all';
        }
        
        /** Close all edit fields */
        function stopEditing() {
            editName.on = false;
            editGroup.on = false;
            newEdit.command = false;
            newEdit.trigger = false;

            redeploy.show = false;
            resetRedeployInput();

            $rootScope.$broadcast('cancelEditing');
        }
        
        /** Show config for selected buoy group */
        function selectBuoyGroup(buoyGroup) {
            stopEditing();
            selected.type = 'group';
            selected.obj = buoyGroup;
            updateGroupBuoys();
        }
        
        /** Show config for selected buoy instance */
        function selectBuoyInstance(buoyInstance) {
            stopEditing();
            selected.type = 'instance';
            selected.obj = buoyInstance;
            updateGroupBuoys();
        }

        /** Set all buoy groups to have no instances */
        function resetBuoyGroupInstances() {
            buoyGroups.forEach(function(buoyGroup) {
                buoyGroup.type = 'group';
                buoyGroup.buoyInstances = [];
            });
        }

        /** Associate buoy instances with groups */
        function setBuoyInstanceGroup(buoyInstance) {
            buoyGroups.forEach(function(buoyGroup) {
                if (buoyGroup.id === buoyInstance.buoyGroupId) {
                    buoyInstance.buoyGroupName = removeEnclosingBrackets(buoyGroup.name);
                    buoyGroup.buoyInstances.push(buoyInstance);
                    return;
                }
            });
        }

        /** Toggle buoy group in list */
        function toggleBuoyGroup(buoyGroup) {
            buoyGroup.collapsed = !buoyGroup.collapsed;
        }
        
        /** Start editing buoy group or instance name */
        function startEditingName() {
            /* is it better to bind edit value directly to main buoyInstance,
            or wait until it's 'saved' before updating main buoyInstance?
            updating live is cooler */
            // editName.value = selected.obj.name;
            editName.on = true;
        }
        
        /** Save buoy group or instance name to server and update page */
        function finishEditingName() {
            // selected.obj.name = editName.value;
            editName.on = false;
            // update server
            if (selected.type === 'group') {
                server.updateBuoyGroupName(selected.obj.id,
                    selected.obj.name).then(function(res) {
                        queryBuoyGroups();
                        gui.alertSuccess('Name updated.');
                    }, function(res) {
                        gui.alertBadResponse(res);
                    });
            } else if (selected.type === 'instance') {
                server.updateBuoyInstanceName(selected.obj.id,
                    selected.obj.name, selected.obj.buoyGroupId).then(function(res) {
                        queryBuoyInstances();
                        gui.alertSuccess('Name updated.');
                    }, function(res) {
                        gui.alertBadResponse(res);
                    });
            }
        }
        
        /** Cancel buoy group or instance name editing */
        function cancelEditName() {
            editName.on = false;
        }
        
        /** Start editing the group is a buoy instance is in */
        function startEditingBuoyGroup() {
            editGroup.on = true;
            editGroup.buoyGroupId = selected.obj.buoyGroupId;
        }
        
        /** Save buoy's new group and name to server and update page */
        function finishEditingBuoyGroup() {
            editGroup.on = false;
            // selected.obj.buoyGroupId = editGroup.buoyGroupId;
            // setBuoyGroupName(selected.obj);
            // update server
            server.updateBuoyInstanceGroup(
                selected.obj.id,
                selected.obj.buoyGroupId,
                selected.obj.name
            ).then(function(res) {
                queryBuoyInstances();
                gui.alertSuccess('Buoy updated.');
            }, function(res) {
                gui.alertBadResponse(res);
            });
        }
        
        /** Cancel edit of a buoy's group */
        function cancelEditGroup() {
            editGroup.on = false;
        }
        
        /**
         * Determine whether an edit field is currently open. Used to
         * ensure that users can only edit one particular thing at once.
         * @return {bool} edit field is open
         */
        function editing() {
            if (editName.on) { return true; }
            if (editGroup.on) { return true; }
            if (newEdit.command) { return true; }
            if (newEdit.trigger) { return true; }
            return false;
        }
        
        /** Show config for a new buoy group */
        function selectNewBuoyGroup() {
            selected.type = 'newGroup';
            selected.obj = null;
        }
        
        /** Save new buoy group to server and update page */
        function saveNewBuoyGroup() {
            server.newBuoyGroup(editName.value).then(function(res) {
                selected.type = 'all';
                queryBuoyGroups();
                gui.alertSuccess('New group created.');
            }, function(res) {
                gui.alertBadResponse(res);
            });
        }

        /** 
         * Filter 'unassigned' out of buoy group list
         * @param  {object} buoyGroup 
         * @return {bool}           show buoy group
         */
        function buoyGroupFilter(buoyGroup) {
            if (buoyGroup.id !== 0) { return true; }
            return false;
        }
        
        /**
         * Filter commands list based on currently selected buoy/group
         * @param  {object} command command
         * @return {bool}         show command
         */
        function commandFilter(command) {
            if (command.id === newId) { return true; }
            if (command.commandTypeArchived) { return false; }
            if (selected.type === 'all') {
                return true;
            } else if (selected.type === 'instance') {
                return buoyInstanceCommandFilter(command);
            } else if (selected.type === 'group') {
                return buoyGroupCommandFilter(command);
            }
            return false;
        }
        
        /**
         * Helper function for commandFilter
         * @param  {object} command command
         * @return {bool}         show command
         */
        function buoyInstanceCommandFilter(command) {
            if (command.buoyId === selected.obj.buoyId) { return true; }
            return false;
        }
        
        /**
         * Helper function for commandFilter
         * @param  {object} command command
         * @return {bool}         show command
         */
        function buoyGroupCommandFilter(command) {
            for (var i = 0; i < buoyInstances.length; i++) {
                var buoyInstance = buoyInstances[i];
                if (buoyInstance.buoyGroupId === selected.obj.id) {
                    if (command.buoyId === buoyInstance.buoyId) { return true; }
                }
            }
            return false;
        }

        /**
         * Filter warning triggers list based on currently selected buoy/group
         * @param  {object} trigger warning trigger
         * @return {bool}         show trigger
         */
        function triggerFilter(trigger) {
            if (trigger.id === newId) { return true; }
            // if (trigger.triggerTypeArchived) return false;
            if (selected.type === 'all') {
                return true;
            } else if (selected.type === 'instance') {
                return buoyInstanceTriggerFilter(trigger);
            } else if (selected.type === 'group') {
                return buoyGroupTriggerFilter(trigger);
            }
            return false;
        }
        
        /**
         * Helper function for triggerFilter
         * @param  {object} trigger trigger
         * @return {bool}         show trigger
         */
        function buoyInstanceTriggerFilter(trigger) {
            if (trigger.buoyInstanceId === selected.obj.id) { return true; }
            return false;
        }
        
        /**
         * Helper function for triggerFilter
         * @param  {object} trigger trigger
         * @return {bool}         show trigger
         */
        function buoyGroupTriggerFilter(trigger) {
            for (var i = 0; i < buoyInstances.length; i++) {
                var buoyInstance = buoyInstances[i];
                if (buoyInstance.buoyGroupId === selected.obj.id) {
                    if (trigger.buoyInstanceId === buoyInstance.id) { return true; }
                }
            }
            return false;
        }

        /**
         * Filter sensors list based on currently selected buoy/group
         * @param  {object} sensor sensor
         * @return {bool}         show sensor
         */
        function sensorFilter(sensor) {
            if (selected.type === 'all') {
                return true;
            } else if (selected.type === 'instance') {
                return buoyInstanceSensorFilter(sensor);
            } else if (selected.type === 'group') {
                return buoyGroupSensorFilter(sensor);
            }
            return false;
        }

        /**
         * Helper function for sensorFilter
         * @param  {object} sensor sensor
         * @return {bool}         show sensor
         */
        function buoyInstanceSensorFilter(sensor) {
            if (sensor.buoyInstance.id === selected.obj.id) { return true; }
            return false;
        }
        
        /**
         * Helper function for sensorFilter
         * @param  {object} sensor sensor
         * @return {bool}         show sensor
         */
        function buoyGroupSensorFilter(sensor) {
            for (var i = 0; i < buoyInstances.length; i++) {
                var buoyInstance = buoyInstances[i];
                if (buoyInstance.buoyGroupId === selected.obj.id) {
                    if (sensor.buoyInstance.id === buoyInstance.id) { return true; }
                }
            }
            return false;
        }

        /**
         * Remove enclosing brackets from a string
         * @param  {str} str string to operate on
         * @return {str}     edited string
         */
        function removeEnclosingBrackets(str) {
            if (str[0] === '(') {
                str = str.substr(1);
            }
            if (str[str.length - 1] === ')') {
                str = str.substr(0, str.length - 1);
            }
            return str;
        }

        /**
         * Return true if argument is a float. Otherwise make error
         * and return false
         */
        function isValueFloat(value) {
            if (isNaN(parseFloat(value))) {
                gui.alertError('Value must be a number.');
                return false;
            } 
            return true;                
        }

        /**
         * Whether there are sensors attached to the selected buoy
         * @return {bool} true if sensors attached, else false
         */
        function sensorsAttached() {
            var i;
            if (selected.type === 'all') {
                for (i = 0; i < buoyInstances.length; i++) {
                    if (buoyInstances[i].sensors.length) { return true; }
                }
            } else if (selected.type === 'instance') {
                if (selected.obj.sensors.length) { return true; }
            } else if (selected.type === 'group') {
                for (i = 0; i < buoyInstances.length; i++) {
                    if (buoyInstances[i].buoyGroupId === selected.obj.id) {
                        if (buoyInstances[i].sensors.length) { return true; }
                    }
                }
            }
            return false;
        }

        function redeployBuoy() {
            var oldName = selected.obj.name;
            var oldBuoyGroupId = selected.obj.buoyGroupId;
            var newName = redeploy.name;
            selected.obj.name = newName;
            selected.obj.buoyGroupId = redeploy.buoyGroupId;
            server.redeployBuoy(selected.obj.buoyId,
                    redeploy.name,
                    redeploy.buoyGroupId).then(function(res) {
                queryBuoyInstances();
                gui.alertSuccess(oldName + ' redeployed as ' + newName);
            }, function(res) {
                gui.alertBadResponse(res);
                selected.obj.name = oldName;
                selected.obj.buoyGroupId = oldBuoyGroupId;
            });
            resetRedeployInput();
        }

        function redeployShow() {
            redeploy.show = true;
            gui.focus('redeploy');
        }
    }
})();
