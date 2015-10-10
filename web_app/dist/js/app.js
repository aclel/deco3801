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
    
    /**
        * @ngdoc overview
        * @name app.module
        * @description App module, ties together all submodules
    **/
    angular.module('app', [
        // Shared modules
        'app.core',
        'app.gui',
        'app.auth',
        'app.nav',
        
        // Feature modules        
        'app.dashboard',
        'app.config',
        'app.warnings',
        'app.admin'
    ]);
})();
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
	
    /**
        * @ngdoc overview
        * @name app.module:admin
        * @description Module for admin page
    **/
	angular.module('app.admin', [
		// Shared modules
		'app.core',
		'app.gui'
	]);
})();
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
	
	/**
        * @ngdoc overview
        * @name app.module:auth
        * @description Module for authentication across app
    **/
	angular.module('app.auth', []);
})();
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
	
    /**
        * @ngdoc overview
        * @name app.module:config
        * @description Module for config page
    **/
	angular.module('app.config', [
		// Shared modules
		'app.core',
		'app.gui',

        // 3rd-party modules
        'ui.tree'
	]);
})();
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
	
    /**
        * @ngdoc overview
        * @name app.module:core
        * @description Module for core application components
    **/
	angular.module('app.core', [
		// 3rd party modules
		'ui.router'
	]);
})();
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
	
	/**
        * @ngdoc overview
        * @name app.module:dashboard
        * @description Module for dashboard page
    **/
	angular.module('app.dashboard', [
		// Shared modules
		'app.core',
		'app.gui',
		
		// 3rd-party modules
		'chart.js',
		'ui.indeterminate'
	]);
})();
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
	
	/**
        * @ngdoc overview
        * @name app.module:gui
        * @description Module containing libraries required for gui
    **/
	angular.module('app.gui', [
		// 3rd-party modules
        'ngAnimate', 
		'mgcrea.ngStrap',
		'mgcrea.ngStrap.helpers.dimensions',
		'mgcrea.ngStrap.helpers.dateParser',
		'mgcrea.ngStrap.helpers.parseOptions',
		'mgcrea.ngStrap.tooltip',
		'mgcrea.ngStrap.datepicker',
		'mgcrea.ngStrap.timepicker',
		'mgcrea.ngStrap.button',
		'mgcrea.ngStrap.select',
        'mgcrea.ngStrap.modal',
        'mgcrea.ngStrap.alert',
        'mgcrea.ngStrap.tab',
        'mgcrea.ngStrap.dropdown'
	]);
})();
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
	
    /**
        * @ngdoc overview
        * @name app.module:nav
        * @description Module for app navigation
    **/
	angular.module('app.nav', [
		// Shared modules
		'app.core',
		'app.auth',
        'app.gui'
	]);
})();
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
	
    /**
        * @ngdoc overview
        * @name app.module:warnings
        * @description Module for warnings page
    **/
	angular.module('app.warnings', [
		// Shared modules
		'app.core',
		'app.gui'
	]);
})();
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
/* global google */
/* global moment */
(function() {
	'use strict';
	
    /** Define globals from third-party libraries so they can be injected */
	angular.module('app')
		.constant('moment', moment)
		.constant('google', google);
})();
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
    
    /** Define environment variables here */
    angular.module('app')
        .constant('SERVER_ADDRESS', 'http://teamneptune.co/dev');
})();
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
	
	angular.module('app.admin')
		.controller('AdminController', AdminController);
	
	/**
		* @ngdoc object
		* @name app.admin.controller:AdminController
		* @description Provides viewmodel for admin view
		* @requires server
	**/
	function AdminController($scope, server, gui) {
		var vm = this;
		
		/** Variables and methods bound to viewmodel */
		vm.users = [];
		vm.editUserId = -1;
		vm.newBuoyName = '';
		vm.roles = ['user', 'power_user', 'system_admin'];
		vm.confirmDelete  = confirmDeleteUser;
		vm.startEditingUser = startEditingUser;
		vm.finishEditingUser = finishEditingUser;
		vm.deleteUser = deleteUser;
		vm.cancelEditingUser = cancelEditingUser;
		vm.startAddingUser = startAddingUser;
		vm.showDeleteButton = showDeleteButton;
		vm.addBuoy = addBuoy;
		
		// vm.sensors = server.getSensorTypes();
		// vm.sensorsEdit = [];
		// vm.toggleEdit = toggleEdit;
		// vm.sensorValid = sensorValid;
		
		activate();
		
		/** Called when controller is instantiated (admin page is loaded) */
		function activate() {
			queryUsers();
		}

		/**
		 * Query users from the server
		 */
		function queryUsers() {
			server.getUsers().then(function(res) {
				vm.users = res.data.users;
				formatLastLogin();
			}, function(res) {
				gui.alertBadResponse(res);
			});
		}
		
		/**
		 * Format last login time and add it to users array
		 */
		function formatLastLogin() {
			vm.users.forEach(function(user) {
				if (!user.lastLogin.Valid) {
					user.lastLogin.text = 'Never';
				} else {
					user.lastLogin.text = moment(user.lastLogin.Time).fromNow();
				}
			});
		}
		
		/**
		 * Start editing a user, called on Edit button click
		 * @param  {object} user 
		 */
		function startEditingUser(user) {
			vm.editUserId = user.id;
			vm.editUser = user;
		}

		/**
		 * User edits are saved, and server is updated, 
		 * called on Save button click
		 */
		function finishEditingUser() {
			if (vm.editUserId != -2) {
				server.updateUser(vm.editUser).then(function(res) {
					queryUsers();
					gui.alertSuccess('User updated.');
				}, function(res) {
					gui.alertBadResponse(res);
				});
			} else {
				server.addUser(vm.editUser).then(function(res) {
					queryUsers();
					gui.alertSuccess('User added.');
				}, function(res) {
					gui.alertBadResponse(res);
				});
				vm.users.splice(vm.users.length - 1, 1);
			}
			vm.editUserId = -1;
		}
		
		/**
		 * User edits are discarded, called on Cancel button click
		 */
		function cancelEditingUser() {
			if (vm.editUserId == -2) {
				vm.users.splice(vm.users.length - 1, 1);
			}
			vm.editUserId = -1;
		}
		
		/**
		 * User is deleted, called on Confirm button click in delete modal
		 * @param  {object} user user to delete
		 */
		function confirmDeleteUser(user) {
			server.deleteUser(user.id).then(function(res) {
				queryUsers();
				gui.alertSuccess('User deleted.');
			}, function(res) {
				gui.alertBadResponse(res);
			});
		}

		/**
		 * Shows a delete confirmation, called on Delete button click
		 * @param  {object} user user to delete
		 */
		function deleteUser(user) {
			vm.deleteObject = user;
			vm.deleteType = 'user';
			vm.deleteName = user.email;
			gui.confirmDelete($scope);
		}
		
		/**
		 * Determines whether to show delete button for each user row
		 * @param  {object} user
		 * @return {bool}      whether to show delete button
		 */
		function showDeleteButton(user) {
			return ((vm.editUserId == -1 || vm.editUserId == user.id) &&
				user.id != -2);
		}
		
		/**
		 * Add new row to users table and start editing, 
		 * called on Add User button click
		 */
		function startAddingUser() {
			var tempUser = { id: -2, role: vm.roles[0] };
			vm.users.push(tempUser);
			startEditingUser(tempUser);
		}
		
		/**
		 * Add new Buoy, update server, called on Add button click
		 */
		function addBuoy() {
			if (vm.newBuoyName == '') return;
			var guid = generateGuid();
			server.addBuoy(vm.newBuoyName, guid).then(function(res) {
				gui.alertSuccess('Buoy created.');
			}, function(res) {
				gui.alertBadResponse(res);
			});
			vm.newBuoyName = '';
		}
		
		/** Returns a GUID */
		function generateGuid() {
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
				var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
				return v.toString(16);
			});
		}
		
		
		
		// for (var i = 0; i < vm.sensors.length; i++) {
		// 	vm.sensorsEdit.push(false);
		// }
		
		// function toggleEdit(index) {
		// 	if (vm.sensorsEdit[index]) {
		// 		vm.sensors[index].unconfigured = false;
		// 	}
		// 	vm.sensorsEdit[index] = !vm.sensorsEdit[index];
		// }
		
		// function sensorValid(sensor) {
		// 	if (!sensor.name || !sensor.units) {
		// 		return false;
		// 	}			
		// 	return true;
		// }
	}
	AdminController.$inject = ["$scope", "server", "gui"];
})();
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
	
	angular.module('app.admin')
		.run(setRoutes);
		
	/** Define routes for admin module */
	function setRoutes(routerHelper) {
		routerHelper.configureStates(getStates());
	}
	setRoutes.$inject = ["routerHelper"];
	
	function getStates() {
		return [
			{
				state: 'admin',
				config: {
					url: '/admin',
					controller: 'AdminController',
					controllerAs: 'vm',
					templateUrl: '/app/admin/admin.html',
					data: {
						access: 'system_admin'
					}
				}
			}
		];
	}
})();
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
	
	angular.module('app.auth')
		.run(authRoute)
		
	/** Setup route authentication restrictions */
	function authRoute($rootScope, $state, auth) {
		$rootScope.$on('$stateChangeStart', stateChange);
		
		function stateChange(event, toState, toParams,
				fromState, fromParams) {
				
			if (!auth.checkUser(toState.data.access)) {
				event.preventDefault();
				
				// only redirect if page was just loaded
				if (fromState.url === '^') {
					if (auth.loggedIn()) {
						$state.go('dashboard');
					} else {
						$state.go('login');
					}
				}
			}			
		}
	}
	authRoute.$inject = ["$rootScope", "$state", "auth"];
})();
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
	
	angular.module('app.auth')
		.controller('AuthController', AuthController);
	
	/**
		* @ngdoc object
		* @name app.auth.controller:AuthController
		* @description Controller for authentication across entire app
		* @requires $scope
		* @requires $state
		* @requires $stateParams
		* @requires auth
		* @requires server
		* @requires routeHelper
	**/
	function AuthController($scope, $state, $stateParams, auth, server, routerHelper) {
		var vm = this;
		
		/** Variables and methods bound to viewmodel */
		vm.firstLogin = false;
		vm.login = login;
		vm.forgotResponse =- 1;
		vm.changePasswordResponse = -1;
		vm.waiting = false;
		vm.changePassword = changePassword;
		vm.forgotPassword = forgotPassword;
		vm.resetPassword = resetPassword;
		
		activate();
		
		/** Called when controller is instantiated */
		function activate() {
			resetLoginForm();
			$scope.$on('$stateChangeSuccess', stateLoaded);
		}

		/** Called when a state is loaded, used to reset views */
		function stateLoaded() {
			if ($state.is('change_password') ||
					$state.is('reset_password') ||
					$state.is('forgot_password')) {
				vm.changePasswordResponse = -1;
				vm.forgotResponse = -1;
				vm.waiting = false;
				resetPasswordForm();
				resetLoginForm();
			}
		}
		
		/** Send login request to server, called on Login button click */	
		function login() {
			server.login(vm.email, vm.password).then(
			function(res) {
				console.log(res);
				if (auth.loggedIn()) {
					if (!res.data.lastLogin.Valid) {
						$state.go('reset_password');
						vm.firstLogin = true;
					} else {
						$state.go('dashboard');
					}
					resetLoginForm();
				}
				
			},
			function(res) {
				alert('Invalid email or password');
			});
		}
		
		/** Send change password request to server */
		function changePassword() {
			vm.waiting = true;
			// need to validate input
			if (vm.newPassword != "" && vm.newPassword == vm.confirmPassword) {
				server.changePassword(vm.currentPassword, vm.newPassword).then(function(res) {
					vm.changePasswordResponse = 0;
				}, function(res) {
					vm.changePasswordResponse = 1;
				});
			} else {
				alert("Invalid password");
			}
		}

		/** Send reset password request to server */
		function resetPassword() {
			vm.waiting = true;
			if (vm.newPassword != "" && vm.newPassword == vm.confirmPassword) {
				server.resetPassword($stateParams.token + "=", vm.newPassword).then(function(res) {
					vm.changePasswordResponse = 0;
					vm.firstLogin = false;
				}, function(res) {
					vm.changePasswordResponse = 1;
				});
			} else {
				alert("Invalid password");
			}
		}
		
		/** Send forgot password request to server */
		function forgotPassword() {
			vm.waiting = true;
			server.forgotPassword(vm.email).then(function(res) {
				vm.forgotResponse = 0;
			}, function(res) {
				vm.forgotResponse = 1;
			});
		}
		
		/** Reset login form */
		function resetLoginForm() {
			vm.email = ""; // placeholder
			vm.password = "";
		}

		/** Reset change password form */
		function resetPasswordForm() {
			vm.currentPassword = "";
			vm.newPassword = "";
			vm.confirmPassword = "";
		}
	}
	AuthController.$inject = ["$scope", "$state", "$stateParams", "auth", "server", "routerHelper"];
})();
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
	
	angular.module('app.auth')
		.run(setRoutes);
		
	/** Define routes for auth module */
	function setRoutes(routerHelper) {
		routerHelper.configureStates(getStates());
	}
	setRoutes.$inject = ["routerHelper"];
	
	function getStates() {
		return [
			{
				state: 'login',
				config: {
					url: '/login',
					// controller: 'AuthController', now uses parent controller
					// controllerAs: 'vm',
					templateUrl: '/app/auth/login.html',
					data: {
						access: 'unauthed'
					}
				}
			},
			{
				state: 'change_password',
				config: {
					url: '/change_password',
					// controller: 'AuthController', now uses parent controller
					// controllerAs: 'vm',
					templateUrl: '/app/auth/change_password.html',
					data: {
						access: 'authed'
					}
				}
			},
			{
				state: 'reset_password',
				config: {
					url: '/reset_password?token',
					// controller: 'AuthController', now uses parent controller
					// controllerAs: 'vm',
					templateUrl: '/app/auth/reset_password.html',
					data: {
						access: 'unauthed'
					}
				}
			},
			{
				state: 'forgot_password',
				config: {
					url: '/forgot_password',
					// controller: 'AuthController', now uses parent controller
					// controllerAs: 'vm',
					templateUrl: '/app/auth/forgot_password.html',
					data: {
						access: 'unauthed'
					}
				}
			}
		];
	}
})();
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
	
	angular.module('app.auth')
		.factory('auth', auth);
	
	/**
		* @ngdoc service
		* @name app.auth.auth
		* @requires $window
		* @requires moment
	**/
	function auth($window, moment) {
		
		/** The service methods to expose */
		return {
			logout: logout,
			loggedIn: loggedIn,
			getToken: getToken,
			saveToken: saveToken,
			currentUser: currentUser,
			checkUser: checkUser
		};
		
		/** Logout by removing user token from localStorage */
		function logout() {
			$window.localStorage.removeItem('token');
		}
		
		/**
		 * Returns whether currently logged in or not
		 * @return {bool} loggedIn
		 */
		function loggedIn() {
			var token = getToken();
			if(token) {
				var params = parseJwt(token);
				return (moment().unix() <= params.exp);
			} else {
				return false;
			}
		}
		
		/**
		 * Save JWT token to localStorage, to preserve session
		 * @param  {string} token JWT token
		 */
		function saveToken(token) {
			$window.localStorage['token'] = token;
		}
		
		/**
		 * Get JWT Token from localStorage
		 * @return {string}       JWT token
		 */
		function getToken() {
			return $window.localStorage['token'];
		}
		
		/**
		 * Returns current user
		 * User details are contained in JWT token
		 * @return {string} email
		 */
		function currentUser() {
			return parseJwt(getToken()).sub;
		}
		
		/**
		 * Returns current user role
		 * User details are contained in JWT token
		 * @return {string} role
		 */
		function currentUserRole() {
			var token = getToken();
			if (token == null) {
				return 'unauthed';
			}
			return parseJwt(token).role;
		}
		
		/**
		 * Returns whether a user is is authorised based on their role
		 * @param  {string} role role
		 * @return {bool}      authorised
		 */
		function checkUser(role) {
			var roles = {
				'unauthed': 0,
				'authed': 1,
				'user': 1,
				'power_user': 2,
				'system_admin': 3,
				'andrew': 99999
			};
			
			if (role == 'any') return true;
			
			if (role == 'unauthed') {
				if (loggedIn()) {
					return false;
				}
			} else {
				if (!loggedIn()) {
					return false;
				}
			}
			
			return (roles[currentUserRole()] >= roles[role]);
		}
		
		/**
		 * Parses a JWT token
		 * @param  {string} token JWT token
		 * @return {object}       parsed token
		 */
		function parseJwt(token) {
			var base64Url = token.split('.')[1];
			var base64 = base64Url.replace('-', '+').replace('_', '/');
			return JSON.parse($window.atob(base64));
		}
	}
	auth.$inject = ["$window", "moment"];
})();
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
	
	angular.module('app.auth')
		.factory('authInterceptor', authInterceptor);
	
	/**
		* @ngdoc service
		* @name module.authInterceptor
		* @requires auth
		* @description intercepts all requests and responses,
		*              saves incoming authentication tokens
	**/
	function authInterceptor(auth) {
		
		/** The service methods to expose */
		return {
			request: request,
			response: response
		};
		
		/** Requests are not modified */
		function request(config) {
			return config;
		}
		
		/** If a response contains a token, save it */
		function response(res) {
			if (res.data.token) {
				auth.saveToken(res.data.token);
			}
			return res;
		}
	}
	authInterceptor.$inject = ["auth"];
})();
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
		.controller('ConfigController', ConfigController);
	
	/**
		* @ngdoc object
		* @name app.config.controller:ConfigController
		* @description Provides viewmodel for config view
		* @requires server
	**/
	function ConfigController(server, gui) {
		var vm = this;
		
		/** Variables and methods bound to viewmodel */
		vm.buoyGroups = [];
		vm.buoyInstances = [];
		vm.groupBuoys = [];
		vm.commands = [];
		vm.commandTypes = [];
		vm.sensorTypes = [];
		vm.warningTriggers = [];
		vm.command = { id: -1, value: '' };
		vm.selected = { type: 'all', obj: null };
		vm.editName = {};
		vm.editName.on = false;
		vm.editGroup = {};
		vm.editGroup.on = false;
		vm.newCommand = false;
		vm.newTrigger = false;
		vm.operators = [ '<', '>', '=' ];
		vm.trigger = {};
		vm.treeOptions = {};
		vm.selectAll = selectAll;
		vm.selectBuoyGroup = selectBuoyGroup;
		vm.selectBuoyInstance = selectBuoyInstance;
		vm.startEditingName = startEditingName;
		vm.finishEditingName = finishEditingName;
		vm.startEditingBuoyGroup = startEditingBuoyGroup;
		vm.finishEditingBuoyGroup = finishEditingBuoyGroup;
		vm.selectNewBuoyGroup = selectNewBuoyGroup;
		vm.saveNewBuoyGroup = saveNewBuoyGroup;
		vm.buoyGroupFilter = buoyGroupFilter;
		vm.commandFilter = commandFilter;
		vm.sendCommand = sendCommand;
		vm.deleteCommand = deleteCommand;
		vm.showBuoyConfig = showBuoyConfig;
		vm.addTrigger = addTrigger;
		vm.cancelNewCommand = cancelNewCommand;
		vm.cancelNewTrigger = cancelNewTrigger;
		vm.editing = editing;
		vm.cancelEditName = cancelEditName;
		vm.cancelEditGroup = cancelEditGroup;
		vm.toggleBuoyGroup = toggleBuoyGroup;
		
		activate();
		
		/** Called when controller is instantiated (config page is loaded) */
		function activate() {
			queryBuoyGroups();
			queryBuoyInstances();
			queryCommandTypes();
			queryWarningTriggers();
			resetNewTrigger();
			setTreeOptions();
		}

		/** Set the tree options for buoy groups list */
		function setTreeOptions() {
			vm.treeOptions = {
				accept: function(source, dest, destIndex) {
					// if (dest.nodropEnabled) return false;

					if (source.$modelValue.type != "instance") {
						// prevent groups from being moved into groups
						if (dest.depth() > 0) return false;
					} else {
						// prevent instances from being moved out of a group
						if (dest.depth() != 1) return false;
						// prevent instances being dragged into collapsed groups
						if (dest.childNodes()[destIndex] != null) {
							if (dest.childNodes()[destIndex].collapsed) return false;
						}
					}
					return true;
				},
				dropped: function(event) {
					// console.log(event);
				},
				dragStart: function(event) {
					// select buoy group/instance when it's clicked
					//  (dragging overrides ng-click event)
					var source = event.source.nodeScope;
					if (source.$modelValue.type == "group") {
						selectBuoyGroup(source.$modelValue);
					} else {
						selectBuoyInstance(source.$modelValue);
					}
				}
			};
		}
		
		/** Query buoy groups from the server */
		function queryBuoyGroups() {
			server.getBuoyGroups().then(function(res) {
				vm.buoyGroups = res.data.buoyGroups;
				parseGroupNames()
			}, function(res) {
				gui.alertBadResponse(res);
			});
		}
		
		/** Query buoy instances from the server */
		function queryBuoyInstances() {
			server.getBuoyInstances().then(function(res) {
				vm.buoyInstances = res.data.buoyInstances;
				parseGroupNames()
			}, function(res) {
				gui.alertBadResponse(res);
			});
		}
		
		/** Query command types from the server */
		function queryCommandTypes() {
			server.getCommandTypes().then(function(res) {
				vm.commandTypes = res.data.commandTypes;
				queryCommands();
			}, function(res) {
				gui.alertBadResponse(res);
			});
		}
		
		/** Query buoy commands from the server */
		function queryCommands() {
			server.getBuoyCommands().then(function(res) {
				vm.commands = res.data.commands;
				parseCommands();
			}, function(res) {
				gui.alertBadResponse(res);
			});
		}
		
		/** Query warning triggers from the server */
		function queryWarningTriggers() {
			server.getWarningTriggers().then(function(res) {
				vm.warningTriggers = res.data.warningTriggers;
				querySensorTypes();
			}, function(res) {
				gui.alertBadResponse(res);
			});
		}
		
		/** Query sensor types from the server */
		function querySensorTypes() {
			server.getSensorTypes().then(function(res) {
				vm.sensorTypes = res.data.sensorTypes;
				parseWarningSensors();
			}, function(res) {
				gui.alertBadResponse(res);
			});
		}
		
		/** Associate buoy instances with groups */
		function parseGroupNames() {
			resetBuoyGroupInstances();
			vm.buoyInstances.forEach(function(buoyInstance) {
				setBuoyInstanceGroup(buoyInstance);
				buoyInstance.type = 'instance';
			});
		}
		
		/** Associate sensor and buoy info with warnings */
		function parseWarningSensors() {
			vm.warningTriggers.forEach(function(trigger) {
				// get buoy name
				for (var i = 0; i < vm.buoyInstances.length; i++) {
					var buoyInstance = vm.buoyInstances[i];
					if (buoyInstance.id == trigger.buoyInstanceId) {
						trigger.buoyName = buoyInstance.name;
						break;
					}
				}
				// get sensor name
				for (var i = 0; i < vm.sensorTypes.length; i++) {
					var sensorType = vm.sensorTypes[i];
					if (sensorType.id == trigger.sensorTypeId) {
						trigger.sensorName = sensorType.name;
						break;
					}
				}
			});
		}
		
		/**
		 * Determine whether to show command and warning trigger config
		 * @return {bool} show config
		 */
		function showBuoyConfig() {
			if (vm.selected.type == 'instance') return true;
			if (vm.selected.type == 'group' && vm.groupBuoys.length > 0) return true;
			if (vm.selected.type == 'all' && vm.buoyInstances.length > 0) return true;
			return false;
		}
		
		/** Associate buoy instances with buoy groups */
		function updateGroupBuoys() {
			vm.groupBuoys = [];
			vm.buoyInstances.forEach(function(buoyInstance) {
				if (buoyInstance.buoyGroupId == vm.selected.obj.id) {
					vm.groupBuoys.push(buoyInstance);
				}
			});
		}
		
		/** Show config for all buoys */
		function selectAll() {
			stopEditing();
			vm.selected.type = 'all';
		}
		
		/** Close all edit fields */
		function stopEditing() {
			vm.editName.on = false;
			vm.editGroup.on = false;
			vm.newCommand = false;
			vm.newTrigger = false;
		}
		
		/** Show config for selected buoy group */
		function selectBuoyGroup(buoyGroup) {
			stopEditing();
			vm.selected.type = 'group';
			vm.selected.obj = buoyGroup;
			updateGroupBuoys();
		}
		
		/** Show config for selected buoy instance */
		function selectBuoyInstance(buoyInstance) {
			stopEditing();
			vm.selected.type = 'instance';
			vm.selected.obj = buoyInstance;
			updateGroupBuoys();
		}

		/** Set all buoy groups to have no instances */
		function resetBuoyGroupInstances() {
			vm.buoyGroups.forEach(function(buoyGroup) {
				buoyGroup.type = 'group';
				buoyGroup.buoyInstances = [];
			});
		}

		/** Associate buoy instances with groups */
		function setBuoyInstanceGroup(buoyInstance) {
			vm.buoyGroups.forEach(function(buoyGroup) {
				if (buoyGroup.id == buoyInstance.buoyGroupId) {
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
			// vm.editName.value = vm.selected.obj.name;
			vm.editName.on = true;
		}
		
		/** Save buoy group or instance name to server and update page */
		function finishEditingName() {
			// vm.selected.obj.name = vm.editName.value;
			vm.editName.on = false;
			// update server
			if (vm.selected.type == 'group') {
				server.updateBuoyGroupName(vm.selected.obj.id,
					vm.selected.obj.name).then(function(res) {
						queryBuoyGroups();
						gui.alertSuccess('Name updated.')
					}, function(res) {
						gui.alertBadResponse(res);
					});
			} else if (vm.selected.type == 'instance') {
				server.updateBuoyInstanceName(vm.selected.obj.id,
					vm.selected.obj.name, vm.selected.obj.buoyGroupId).then(function(res) {
						queryBuoyInstances();
						gui.alertSuccess('Name updated.')
					}, function(res) {
						gui.alertBadResponse(res);
					});;
			}
		}
		
		/** Cancel buoy group or instance name editing */
		function cancelEditName() {
			vm.editName.on = false;
		}
		
		/** Start editing the group is a buoy instance is in */
		function startEditingBuoyGroup() {
			vm.editGroup.on = true;
			vm.editGroup.buoyGroupId = vm.selected.obj.buoyGroupId;
		}
		
		/** Save buoy's new group and name to server and update page */
		function finishEditingBuoyGroup() {
			vm.editGroup.on = false;
			vm.selected.obj.buoyGroupId = vm.editGroup.buoyGroupId;
			setBuoyGroupName(vm.selected.obj);
			// update server
			server.updateBuoyInstanceGroup(
				vm.selected.obj.buoyId,
				vm.editGroup.buoyGroupId,
				vm.editGroup.name
			).then(function(res) {
				queryBuoyInstances();
				gui.alertSuccess('New buoy instance created.')
			}, function(res) {
				gui.alertBadResponse(res);
			});
		}
		
		/** Cancel edit of a buoy's group */
		function cancelEditGroup() {
			vm.editGroup.on = false;
		}
		
		/**
		 * Determine whether an edit field is currently open. Used to
		 * ensure that users can only edit one particular thing at once.
		 * @return {bool} edit field is open
		 */
		function editing() {
			if (vm.editName.on) return true;
			if (vm.editGroup.on) return true;
			if (vm.newCommand) return true;
			if (vm.newTrigger) return true;
			return false;
		}
		
		/** Show config for a new buoy group */
		function selectNewBuoyGroup() {
			vm.selected.type = 'newGroup';
			vm.selected.obj = null;
		}
		
		/** Save new buoy group to server and update page */
		function saveNewBuoyGroup() {
			server.newBuoyGroup(vm.editName.value).then(function(res) {
				vm.selected.type = 'all';
				queryBuoyGroups();
				gui.alertSuccess('New group created.')
			}, function(res) {
				gui.alertBadResponse(res);
			});
		}
				
		/** Associate each command with buoy and command info */
		function parseCommands() {
			vm.commands.forEach(function(command) {
				// get buoy name
				for (var i = 0; i < vm.buoyInstances.length; i++) {
					var buoyInstance = vm.buoyInstances[i];
					if (command.buoyId == buoyInstance.buoyId) {
						command.buoyName = buoyInstance.name;
						if (command.buoyName == "") {
							command.buoyName = "(no name)"
						}
						break;
					}
				}
				// get command name
				for (var i = 0; i < vm.commandTypes.length; i++) {
					if (command.commandTypeId == vm.commandTypes[i].id) {
						command.commandName = vm.commandTypes[i].name;
						break;
					}
				}
			});
		}
		
		/** Prepare to send new command(s) to server */
		function sendCommand() {
			if (vm.command.id == -1 || vm.command.value == '') return;
			vm.newCommand = false;
			var buoyIds = []; // buoys to send command for
			if (vm.selected.type == 'instance') {
				buoyIds.push(vm.selected.obj.buoyId);
			} else if (vm.selected.type == 'group') {
				// send command to each buoy in selected group
				vm.buoyInstances.forEach(function(buoyInstance) {
					if (buoyInstance.buoyGroupId == vm.selected.obj.id) {
						buoyIds.push(buoyInstance.buoyId);
					}
				});
			} else if (vm.selected.type == 'all') {
				// send command to all buoys
				vm.buoyInstances.forEach(function(buoyInstance) {
					buoyIds.push(buoyInstance.buoyId);
				});
			}
			sendCommands(buoyIds);			
			resetNewCommand();
		}
		
		/** Clear command input fields */
		function resetNewCommand() {
			vm.command.id = -1;
			vm.command.value = '';
		}
		
		/** Cancel editing of new command */
		function cancelNewCommand() {
			vm.newCommand = false;
			resetNewCommand();
		}
		
		/** Send command(s) for buoy(s) to server and update page */
		function sendCommands(buoyIds) {
			server.sendBuoyCommand(vm.command, buoyIds).then(function(res) {
				queryCommands();
				gui.alertSuccess('Command queued.')
			}, function(res) {
				gui.alertBadResponse(res);
			});
		}
		
		/** Delete command(s) for buoy(s) and update server */
		function deleteCommand(command) {
			
		}
		
		/** Prepare to add new trigger warning for buoy or group */
		function addTrigger() {
			if (vm.trigger.sensorTypeId == -1 || vm.trigger.value == '') return;
			vm.newTrigger = false;
			var buoyInstanceIds = []; // buoys instances to add trigger for
			if (vm.selected.type == 'instance') {
				buoyInstanceIds.push(vm.selected.obj.id);
			} else if (vm.selected.type == 'group') {
				// add trigger for each buoy in group
				vm.buoyInstances.forEach(function(buoyInstance) {
					if (buoyInstance.buoyGroupId == vm.selected.obj.id) {
						buoyInstanceIds.push(buoyInstance.id);
					}
				});
			} else if (vm.selected.type == 'all') {
				// add trigger for all buoys
				vm.buoyInstances.forEach(function(buoyInstance) {
					buoyInstanceIds.push(buoyInstance.id);
				});
			}
			sendTriggers(buoyInstanceIds);
			resetNewTrigger();
		}
		
		/** Send new warning triggers to server and update page */
		function sendTriggers(buoyIds) {
			server.addWarningTriggers(vm.trigger, buoyIds).then(function(res) {
				queryWarningTriggers();
				gui.alertSuccess('Warning trigger added.')
			}, function(res) {
				gui.alertBadResponse(res);
			});
		}
		
		/** Clear trigger inputs */
		function resetNewTrigger() {
			vm.trigger = {
				sensorTypeId: -1,
				operator: '<',
				value: '',
				message: ''
			};
		}
		
		/** Cancel creation of a new trigger */
		function cancelNewTrigger() {
			vm.newTrigger = false;
			resetNewTrigger();
		}
		
		/** 
		 * Filter 'unassigned' out of buoy group list
		 * @param  {object} buoyGroup 
		 * @return {bool}           show buoy group
		 */
		function buoyGroupFilter(buoyGroup) {
			if (buoyGroup.id != 0) return true;
			return false;
		}
		
		/**
		 * Filter commands list based on currently selected buoy/group
		 * @param  {object} command command
		 * @return {bool}         show command
		 */
		function commandFilter(command) {
			if (vm.selected.type == 'all') {
				return true;
			} else if (vm.selected.type == 'instance') {
				return buoyInstanceCommandFilter(command);
			} else if (vm.selected.type == 'group') {
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
			if (command.buoyId == vm.selected.obj.buoyId) return true;
			return false;
		}
		
		/**
		 * Helper function for commandFilter
		 * @param  {object} command command
		 * @return {bool}         show command
		 */
		function buoyGroupCommandFilter(command) {
			for (var i = 0; i < vm.buoyInstances.length; i++) {
				var buoyInstance = vm.buoyInstances[i];
				if (buoyInstance.buoyGroupId == vm.selected.obj.id) {
					if (command.buoyId == buoyInstance.buoyId) return true;
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
			if (str[0] == '(') {
				str = str.substr(1);
			}
			if (str[str.length - 1] == ')') {
				str = str.substr(0, str.length - 1);
			}
			return str;
		}
	}
	ConfigController.$inject = ["server", "gui"];
})();
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
		.run(setRoutes);
	
	/** Define routes for config module */
	function setRoutes(routerHelper) {
		routerHelper.configureStates(getStates());
	}
	setRoutes.$inject = ["routerHelper"];
	
	function getStates() {
		return [
			{
				state: 'config',
				config: {
					url: '/config',
					controller: 'ConfigController',
					controllerAs: 'vm',
					templateUrl: '/app/config/config.html',
					data: {
						access: 'power_user'
					}
				}
			}
		];
	}
})();
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
	
	angular.module('app.core')
		.run(setRoutes);
		
	/** Define routes for core module */
	function setRoutes(routerHelper) {
		var otherwisePath = '/hello';
		routerHelper.configureStates(getStates(), otherwisePath);
	}
	setRoutes.$inject = ["routerHelper"];
	
	function getStates() {
		return [
			{
				state: 'hello',
				config: {
					url: '/hello',
					controller: 'HelloController',
					data: {
						access: 'any'
					}
				}
			}
		];
	}
})();
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
	
	angular.module('app.core')
		.controller('HelloController', HelloController);
	
	/**
		* @ngdoc object
		* @name app.core.controller:HelloController
		* @description Provides a landing page which doesn't have any
		*              authentication requirements, to prevent routing loop
		* @requires $state
		* @requires $log
	**/
	function HelloController($state, $log) {
		var vm = this;
		
		activate();
		
		/** Called when controller is instantiated (hello page is loaded)
		 *  Immediately redirects user to dashboard, and if that fails
		 *  (because user isn't logged in), redirects to login page.
		 */
		function activate() {
			$log.debug('howdy');
		
			// go to dashboard
			$state.go('dashboard');
			
			// if that didn't work, go to login
			if ($state.includes('hello')) {
				$state.go('login');
			}
		}
	}
	HelloController.$inject = ["$state", "$log"];
})();
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
	
	angular.module('app.core')
		.provider('routerHelper', routerHelperProvider);
	
	/**
		* @ngdoc provider
		* @name app.core.routerHelper
		* @requires $locationProvider
		* @requires $stateProvider
		* @requires $urlRouterProvider
		* @description Provides some helper functions for roting
	**/
	function routerHelperProvider($locationProvider, 
		$stateProvider, $urlRouterProvider) {
		
		this.$get = RouterHelper;
		
		function RouterHelper($state) {
			var hasOtherwise = false;
			
			/** The provider methods to expose */
			return {
				configureStates: configureStates,
				getStates: getStates,
				stateActive: stateActive
			};
			
			/** Allows the caller to add a new route (state) to the app */
			function configureStates(states, otherwisePath) {
				states.forEach(function(state) {
					$stateProvider.state(state.state, state.config);
				});
				/* otherwisePath is a fallback route */
				if (otherwisePath && !hasOtherwise) {
					hasOtherwise = true;
					$urlRouterProvider.otherwise(otherwisePath);
				}
			}
			
			/**
			 * Return app routes
			 * @return {object} routes
			 */
			function getStates() {
				return $state.get();
			}
			
			/**
			 * Return whether a state is active or not
			 * @param  {string} name state name
			 * @return {bool}      state is active
			 */
			function stateActive(name) {
				return $state.includes(name);
			}
		}
		RouterHelper.$inject = ["$state"];
	}
	routerHelperProvider.$inject = ["$locationProvider", "$stateProvider", "$urlRouterProvider"];
})();
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
			return $http.post(SERVER_ADDRESS + '/api/login', JSON.stringify(data));
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
			var email = auth.currentUser();
			return $http.put(SERVER_ADDRESS + '/api/users/' +
				email + '/change_password', JSON.stringify(data), config);
		}

		function resetPassword(token, newPassword) {
			var data = {
				newPassword: newPassword
			};
			var params = '?token=' + token;
			return $http.post(SERVER_ADDRESS + '/api/reset_password' + params, JSON.stringify(data));
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
			return $http.post(SERVER_ADDRESS + '/api/forgot_password', JSON.stringify(data));
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
			var params = "?start_time=" + from + "&end_time=" + to;
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
		 * GET /api/buoyinstances?active=true
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
					JSON.stringify(data), config);
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
					JSON.stringify(data), config);
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
					JSON.stringify(data), config);
		}
		
		/**
		 * Request create new buoy instance in group
		 * POST /api/buoy_instances
		 * @param  {int} buoyId  buoy id
		 * @param  {int} groupId new group id
		 * @param  {string} name    new name
		 * @return {promise}         request promise
		 */
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
		 * Request pending commands
		 * GET /api/commands?sent=false
		 * @return {promise} request promise
		 */
		function getBuoyCommands() {
			var config = addToken(headers());
			return $http.get(SERVER_ADDRESS + '/api/commands?sent=false', config);
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
			config.headers['Accept'] = 'text/csv';
			var data = {
				readings: readings
			};
			
			var promise = $http.post(SERVER_ADDRESS + '/api/readings/export', 
				JSON.stringify(data), config);
				
			promise.then(function(res) {
				var time = moment().format("DD-MM-YY-HHmmss");
				var filename = 'export-' + time + '.csv';
				openSaveAsDialog(filename, res.data, 'text/csv');
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
		 * Request new command for buoys
		 * POST /api/commands
		 * @param  {object} command command
		 * @param  {int[]} buoyIds list of buoy Ids to send command for
		 * @return {promise}         request promise
		 */
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
		
		/**
		 * Request delete buoy command
		 * @param  {int} buoyId  buoy id
		 * @return {promise}         request promise
		 */
		function deleteBuoyCommand(buoyId) {
			
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
				JSON.stringify(data), config);
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
				JSON.stringify(data), config);
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
		 * Request create buoy
		 * @param {string} name buoy name
		 * @param {string} guid buoy GUID
		 * @return {promise} request promise
		 */
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
	server.$inject = ["$http", "$log", "SERVER_ADDRESS", "auth", "moment"];
})();
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
	
	angular.module('mock.server', [])
		.factory('server', server);
	
	/**
		* @ngdoc service
		* @name mock.server
		* @description Mock of server service for testing
	**/
	function server() {
		
		/** The mock service methods to expose */
		return {
			getReadings: getReadings,
			getSensors: getSensors,
			login: login,
			logout: logout
		};
		
		/** Dummy reading data */
		function getReadings() {
			return [
				{
					id: 1,
					buoy: 1,
					timestamp: 1438933614,
					latitude: -27.44613423,
					longitude: 153.07834625,
					readings : {
						battery: 90,
						pressure: 140,
						sealevel: 21,
						turbidity: 14
					}
				}, {
					id: 2, 
					buoy: 2,
					timestamp: 1438588117,
					latitude: -27.42693772,
					longitude: 153.20674896,
					readings : {
						battery: 70,
						pressure: 122,
						sealevel: 44,
						turbidity: 4
					}
				}, {
					id: 3, 
					buoy: 2,
					timestamp: 1438760876,
					latitude: -27.491475, 
					longitude: 153.006655,
					readings : {
						battery: 45,
						pressure: 85,
						sealevel: 15,
						turbidity: 45
					}
				}, {
					id: 4, 
					buoy: 4,
					timestamp: 1438847291,
					latitude: -27.400357, 
					longitude: 153.177995,
					readings : {
						battery: 75,
						pressure: 97,
						sealevel: 33,
						turbidity: 66
					}
				}, {
					id: 77, 
					buoy: 1,
					timestamp: 1438328839,
					latitude: -27.44713423,
					longitude: 153.09234625,
					readings : {
						battery: 83,
						pressure: 118,
						sealevel: 24.5,
						turbidity: 8
					}
				}
			];
		}
		
		/** Dummy sensor data */
		function getSensors() {
			return [
				{
					id: "battery",
					name: "Battery",
					description: "Battery level of buoy",
					colour: "",
					units: "%",
					lowerBound: 0,
					upperBound: 100,
					display: true,
					unconfigured: false				
				},
				{
					id: "turbidity",
					name: "Turbidity",
					description: "Water quality around buoy",
					colour: "",
					units: "g/ml",
					lowerBound: 0,
					upperBound: 70,
					display: true,
					unconfigured: false				
				},
				{
					id: "pressure",
					name: "",
					description: "",
					colour: "",
					units: "",
					lowerBound: -1,
					upperBound: -1,
					display: false,
					unconfigured: true				
				}
			];
		}
		
		/** Mocked login function */
		function login() {
			// return 0;
		}
		
		/** Mocked logout function */
		function logout() {
			
		}
	}
})();
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
    
    /** Set chart defaults */
    angular.module('app.dashboard')
        .config(["ChartJsProvider", function(ChartJsProvider) {
            ChartJsProvider.setOptions({
                responsive: true
            });
        }]);
})();
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
	
	angular.module('app.dashboard')
		.controller('DashboardController', DashboardController);
	
	/**
		* @ngdoc object
		* @name app.dashboard.controller:DashboardController
		* @description Provides viewmodel for dashboard view
		* @requires $document
		* @requires dashboard
		* @requires map
	**/	
	function DashboardController($log, $document, $scope, dashboard, map) {
		var vm = this;
		
		/** Used to determine when initial requests have returned */
		var resolved = 0;
		var chartObj;

		/** Variables and methods bound to viewmodel */
		vm.loading = false;
		vm.showGraphs = false;
		vm.buoys = dashboard.buoys(); // binds reference
		vm.times = dashboard.times(); // binds reference
		vm.sensors = dashboard.sensors(); // binds reference
		vm.chart = dashboard.chart(); // binds reference
		vm.selectBuoyGroup = dashboard.selectBuoyGroup;
		vm.selectBuoyInstance = dashboard.selectBuoyInstance;
		vm.updateSensors = dashboard.updateSensors;
		vm.updateTimes = updateTimes;
		vm.exportData = dashboard.exportData;
		vm.toggleGraphs = toggleGraphs;
		
		activate();

		/** Called when controller is instantiated (dashboard page is loaded) */
		function activate() {
			vm.loading = true;
			resolved = 0;

			queryReadings();
			querySensors();

			// set up chart listeners
			$scope.$on('displayChartInstance', function(event, buoyInstance) {
				$scope.$apply(function() {
					if (!vm.showGraphs) {
						toggleGraphs();
					}
					dashboard.displayChartInstance(buoyInstance.name);
				});
			});
			$scope.$on('create', function(event, chart) {
				chartObj = chart;
			});
		}

		/** Query readings and update display */
		function queryReadings() {
			dashboard.queryReadings().then(function() {
				checkLoaded();
			});
		}

		/** Bind sensor information to vm */
		function querySensors() {
			dashboard.querySensors().then(function() {
				vm.sensors = dashboard.sensors();
				checkLoaded();
			});
		}
		
		/** Update time filters, handle loading */
		function updateTimes() {
			vm.loading = true;
			dashboard.updateTimes().then(function() {
				vm.loading = false;
			});
		}
		
		/** Check whether the dashboard has finished loading */
		function checkLoaded() {
			if (++resolved == 2) {
				vm.loading = false;
			}
		}
		
		/** Expand/contract graphs pane and update map */
		function toggleGraphs() {
			vm.showGraphs = !vm.showGraphs;
			var center = map.getCenter();
			angular.element(
				document.getElementsByClassName('dashboard-panel'))
				.one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
					map.setCenter(center);
					chartObj.resize(chartObj.render)
			});
		}
			
		/** Initialise google map when document is loaded */
		$document.ready(function() {
			map.initialiseMap();
		});
	}
	DashboardController.$inject = ["$log", "$document", "$scope", "dashboard", "map"];
})();
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
	
	angular.module('app.dashboard')
		.run(setRoutes);
		
	/** Define routes for dashboard module */
	function setRoutes(routerHelper) {
		var otherwisePath = '/dashboard';
		routerHelper.configureStates(getStates(), otherwisePath);
	}
	setRoutes.$inject = ["routerHelper"];
	
	function getStates() {
		return [
			{
				state: 'dashboard',
				config: {
					url: '/dashboard',
					controller: 'DashboardController',
					controllerAs: 'vm',
					templateUrl: '/app/dashboard/dashboard.html',
					data: {
						access: 'authed'
					}
				}
			}
		];
	}
})();
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
	
	angular.module('app.dashboard')
		.factory('dashboard', dashboard);
		
	/**
		* @ngdoc service
		* @name app.dashboard.dashboard
		* @requires $log
		* @requires server
		* @requires map
		* @requires moment
	**/
	function dashboard($log, $q, server, map, moment) {
		/** Internal variables. These are preserved until page refresh. */
		var readings = [];
		var filteredReadings = [];
		var sensors = {};
		var buoys = [];
		var times = {};
		var chart = {};

		var dateFormat = "D/M/YY";
		var timeFormat = "h:mm A";

		initialiseTimes();
		initialiseChart();

		/** The service methods to expose */
		return {
			buoys: getBuoys,
			times: getTimes,
			sensors: getSensors,
			chart: getChart,
			queryReadings: queryReadings,
			querySensors: querySensors,
			selectBuoyGroup: selectBuoyGroup,
			selectBuoyInstance: selectBuoyInstance,
			updateTimes: updateTimes,
			updateSensors: updateSensors,
			exportData: exportData,
			displayChartInstance: displayChartInstance
		};

		/**
		 * Return buoy input data structures
		 * @return {object} buoys filters and inputs
		 */
		function getBuoys() {
			return buoys;
		}
		
		/**
		 * Return time input data structures
		 * @return {object} time inputs
		 */
		function getTimes() {
			return times;
		}
		
		/**
		 * Return sensor input data structures
		 * @return {object} sensor inputs and filters
		 */
		function getSensors() {
			return sensors;
		}

		/**
		 * Return chart data structure
		 * @return {object} chart data
		 */
		function getChart() {
			return chart;
		}
		
		/**
		 * Query readings from server and update internal data structures
		 * @param  {int} from unix timestamp from time
		 * @param  {int} to   unix timestamp to time
		 * @return {promise}      request promise
		 */
		function queryReadings(from, to) {
			if (!from) {
				from = moment().subtract(times.inputs.since.value,
					 times.inputs.since.quantifier).unix();
				to = moment().unix();
			}
			var promise = server.getReadings(from, to);
			promise.then(function(res) {
				readings = res.data.buoyGroups;
				populateBuoys();
				updateFilters();
			}, function(res) {
				$log.error(res);
			});
			return promise;
		}
		
		/**
		 * Query sensors from server and update internal data structures
		 * @return {promise} request promise
		 */
		function querySensors() {
			var promise = server.getSensorTypes();
			promise.then(function(res) {
				populateSensors(res.data.sensorTypes);
				updateFilters();
			}, function(res) {
				$log.error(res);
			});
			return promise;
		}
		
		/** Initialise filters and inputs */
		function initialiseTimes() {
			times = {
				type: "since",
				range: { from: null, to: null }, // from and to contain moments
				point: null,
				pointReadings: [], // contains list of closest readings to point
				inputs: {
					since: { value: 4, quantifier: "weeks", options: [
						"hours", "days", "weeks", "months"
					] },
					range: {
						from: { date: "", time: "" },
						to: { date: "", time: "" },
					},
					point: { date: "", time: "" },
				}
			}
		}

		/** Initialise charts */
		function initialiseChart() {
			chart.series = [];
			chart.labels = [];
			chart.data = [
				[null]
			];
		}
		
		/** Populate buoys filter */
		function populateBuoys() {	
			if (!readings) return;

			var groups = [];
			var instances = [];

			// add groups
			for (var i = 0; i < readings.length; i++) {
				var buoyGroup = readings[i];
				groups.push(buoyGroup.id);
				var group = buoysFilterAddGroup(buoyGroup);

				// add instances
				for (var j = 0; j < buoyGroup.buoyInstances.length; j++) {
					var buoyInstance = buoyGroup.buoyInstances[j];
					instances.push(buoyInstance.id);
					buoysFilterAddInstance(buoyInstance, group);
				}
			}		

			// remove old buoys
			buoysFilterRemoveOldGroups(groups);
			buoysFilterRemoveOldInstances(instances);
		}

		/** Populate sensor input data */
		function populateSensors(data) {
			for (var i = 0; i < data.length; i++) {
				var sensor = data[i];
				
				if (sensors.hasOwnProperty(sensor.id)) continue;

				sensor.inputs = {
					enabled: false,
					options: [">", "<", "="],
					selected: ">",
					value: ""
				};

				sensors[sensor.id] = sensor;	
			}
		}

		/**
		 * Add buoy group to buoys filter array, don't overwrite existing groups
		 * 
		 * @param {object} buoyGroup buoyGroup to add
		 * @return {object} reference to added group
		 */
		function buoysFilterAddGroup(buoyGroup) {
			var group = {};
			var gIndex = buoysFilterGroupIndex(buoyGroup.id);
			if (gIndex != -1) {
				group = buoys[gIndex];
			} else {
				group.id = buoyGroup.id;
				group.name = buoyGroup.name;
				group.enabled = true;
				group.collapsed = false;
				group.indeterminate = false;
				group.buoyInstances = [];
				buoys.push(group);
			}
			group.name = buoyGroup.name; // always update name in case it was changed in config page
			return group;
		}

		/**
		 * Add buoy instance to a buoy group, don't overwrite existing instances
		 * @param {object} buoyInstance buoyInstance to add
		 * @param {object} group        buoyGroup to add the instance to
		 * @return {object} reference to added instance
		 */
		function buoysFilterAddInstance(buoyInstance, group) {
			var instance = {};
			var gIndex = buoysFilterGroupIndex(group.id);
			var iIndex = buoysFilterInstanceIndex(buoyInstance.id, group.id);
			if (iIndex != -1) {
				instance = buoys[gIndex].buoyInstances[iIndex];
			} else {
				instance.id = buoyInstance.id;
				instance.enabled = true;
				group.buoyInstances.push(instance);
			}
			instance.name = buoyInstance.name; // always update name in case it was changed in config page
			return instance;
		}

		/**
		 * Find out index of buoyGroup in buoys array
		 * @param  {int} id id of buoyGroup
		 * @return {int}    index or -1 if not found
		 */
		function buoysFilterGroupIndex(id) {
			for (var i = 0; i < buoys.length; i++) {
				if (buoys[i].id == id) {
					return i;
				}
			}
			return -1;
		}

		/**
		 * Find out index of buoyInstance in buoyGroup in buoys array
		 * @param  {int} id  id of buoyInstance to find
		 * @param  {int} gId id of buoyGroup
		 * @return {int}     index of buoyInstance or -1 if not found
		 */
		function buoysFilterInstanceIndex(id, gId) {
			var gIndex = buoysFilterGroupIndex(gId);
			if (gIndex == -1) return -1;
			for (var i = 0; i < buoys[gIndex].buoyInstances.length; i++) {
				if (buoys[gIndex].buoyInstances[i].id == id) {
					return i;
				}
			}
			return -1;
		}

		/**
		 * Remove buoyGroup from buoys list
		 * @param  {int[]} keep array of buoyGroup IDs not to remove
		 */
		function buoysFilterRemoveOldGroups(keep) {
			var remove = [];
			for (var i = 0; i < buoys.length; i++) {
				var group = buoys[i];
				if (keep.indexOf(group.id) == -1) {
					remove.push(i);
				}
			}
			for (var i = 0; i < remove.length; i++) {
				buoys.splice(remove[i], 1);
			}
		}

		/**
		 * Remove buoyInstance from buoys list
		 * @param  {int[]} keep array of buoyInstance IDs not to remove
		 */
		function buoysFilterRemoveOldInstances(keep) {
			// if (!buoys.length) return; doesn't do anything?
			var remove = [];
			for (var i = 0; i < buoys.length; i++) {
				var group = buoys[i];
				for (var j = 0; j < group.buoyInstances.length; j++) {
					var instance = group.buoyInstances[j];
					if (keep.indexOf(instance.id) == -1) {
						remove.push({ group: i, instance: j });
					}
				}
			}
			for (var i = 0; i < remove.length; i++) {
				buoys[remove[i].group].splice(remove[i].instance, 1);
			}
		}


		/** Update whether buoy group filter is enabled */
		function selectBuoyGroup(buoyGroup) {
			buoyGroup.buoyInstances.forEach(function(buoyInstance) {
				buoyInstance.enabled = buoyGroup.enabled;
			});
			updateFilters();
		}

		/** Update whether buoy instance filter is enabled */
		function selectBuoyInstance(buoyGroup) {
			updateBuoyGroupSelectState(buoyGroup);			
			updateFilters();
		}

		/** Also handle display of indeterminate checkbox for group */
		function updateBuoyGroupSelectState(buoyGroup) {
			var allTrue = true;
			var allFalse = true;
			
			buoyGroup.buoyInstances.forEach(function(instance) {
				if (instance.enabled) {
					allFalse = false;
				} else {
					allTrue = false;
				}
			});
			
			if (allFalse) {
				buoyGroup.enabled = false;
			} else {
				buoyGroup.enabled = true;
			}
			
			if (allFalse || allTrue) {
				buoyGroup.indeterminate = false;
			} else {
				buoyGroup.indeterminate = true;
			}
		}

		/** Update filters and map when time filters are changed */
		function updateTimes() {
			var defer = $q.defer();
			// convert input strings to moments 
			// and update vm.times, which updates reference in dashboard service
			if (timesInputsValid()) {
				var momentFormat = dateFormat + " " + timeFormat;
				
				if (times.type == 'range') {
					times.range.from = moment(times.inputs.range.from.date
						+ " " + times.inputs.range.from.time, momentFormat);
					times.range.to = moment(times.inputs.range.to.date
						+ " " + times.inputs.range.to.time, momentFormat);
				}
				
				else if (times.type == 'point') {
					times.point = moment(times.inputs.point.date
						+ " " + times.inputs.point.time, momentFormat);
				}
				
				queryReadingTimes().then(function() {
					defer.resolve();	
				}, function() {
					defer.reject();
				});
			}
			return defer.promise;
		}

		/** Basic validation of times inputs */
		function timesInputsValid() {
			if (times.type == 'since') {
				if (times.inputs.since.value) {
					return true;
				}
			}
			if (times.type == 'range') {
				// valid combinations: all filled, dates filled, times filled
				var fromDate = times.inputs.range.from.date;
				var fromTime = times.inputs.range.from.time;
				var toDate = times.inputs.range.to.date;
				var toTime = times.inputs.range.to.time;
				
				if (fromDate && fromTime && toDate && toTime) return true;
				if (fromDate && !fromTime && toDate && !toTime) return true;
			}
			if (times.type == 'point') {
				// must have date, time is optional
				if (times.inputs.point.date) {
					return true;
				}
			}
			
			return false;
		}
		
		/** Update internal filtered readings when time filters changes */
		function queryReadingTimes() {
			// query server for new times
			var from, to;
			
			if (times.type == 'since') {
				from = moment().subtract(times.inputs.since.value,
					 times.inputs.since.quantifier).unix();
				to = moment().unix();
			} else if (times.type == 'all') {
				from = 0;
				to = moment().unix();
			} else if (times.type == 'range') {
				from = times.range.from.unix();
				to = times.range.to.unix();
			} else if (times.type == 'point') {
				from = times.point.clone().subtract(2, 'weeks').unix();
				to = times.point.clone().add(2, 'weeks').unix();
			}
			
			var promise = queryReadings(from, to);
			promise.then(function() {
				if (times.type == 'point') {
					calculatePointReadings();
				}
			});
			return promise;
		}
		
		/** Update internal filtered readings when sensor filters changed */
		function updateSensors() {
			updateFilters();
		}
		
		/** Calculate readings closest to specified time */
		function calculatePointReadings() {
			times.pointReadings = [];
			if (!readings) return;

			readings.forEach(function(buoyGroup) {
				buoyGroup.buoyInstances.forEach(function(buoyInstance) {
					var closest = {
						id: buoyInstance.readings[0].id,
						timestamp: buoyInstance.readings[0].timestamp
					};
					buoyInstance.readings.forEach(function(reading) {
						var diffOld = moment.unix(closest.timestamp).diff(times.point);
						var diffNew = moment.unix(reading.timestamp).diff(times.point);
						if (Math.abs(diffNew) < Math.abs(diffOld)) {
							closest.id = reading.id;
							closest.timestamp = reading.timestamp;
						}
					});
					times.pointReadings.push(closest.id);
				});
			});
		}
		
		/** Re-filter readings based on updated filters */
		function updateFilters() {
			filteredReadings = [];
			if (!readings.length || !Object.keys(sensors).length) return;

			for (var i = 0; i < readings.length; i++) {
				var buoyGroup = readings[i];
				if (!buoyGroupEnabled(buoyGroup.id)) continue;
				var group = addBuoyGroup(buoyGroup);

				for (var j = 0; j < buoyGroup.buoyInstances.length; j++) {
					var buoyInstance = buoyGroup.buoyInstances[j];
					if (!buoyInstanceEnabled(buoyInstance.id, buoyGroup.id)) continue;
					var instance = addBuoyInstance(buoyInstance, group);

					for (var k = 0; k < buoyInstance.readings.length; k++) {
						var reading = buoyInstance.readings[k];
						if (!showReading(reading)) continue;
						instance.readings.push(reading);
					}
				}
			}
			updateMap();
		}

		/**
		 * Check whether a buoy group should be shown
		 * @param  {int} id id of buoy group to check
		 * @return {bool}    true if it should be shown, false if not
		 */
		function buoyGroupEnabled(id) {
			return buoys[buoysFilterGroupIndex(id)].enabled;
		}

		/**
		 * Check whether a buoy instance should be shown
		 * @param  {int} id id of buoy instance to check
		 * @param {int} gId id of group instance is in
		 * @return {bool}    true if it should be shown, false if not
		 */
		function buoyInstanceEnabled(id, gId) {
			var gIndex = buoysFilterGroupIndex(gId);
			var iIndex = buoysFilterInstanceIndex(id, gId);
			return buoys[gIndex].buoyInstances[iIndex].enabled;
		}

		/**
		 * Add a buoy group to filtered readings
		 * @param {object} buoyGroup buoy group to add
		 * @return {object} reference to added group
		 */
		function addBuoyGroup(buoyGroup) {
			var group = {};
			filteredReadings.push(group);
			group.id = buoyGroup.id;
			group.name = buoyGroup.name;
			group.buoyInstances = [];
			return group;
		}

		/**
		 * Add a buoy instance to filtered readings
		 * @param {object} buoyInstance buoy instance to add
		 * @param {object} group the group it should be added to
		 * @return {object} reference to added instance
		 */
		function addBuoyInstance(buoyInstance, group) {
			var instance = {};
			group.buoyInstances.push(instance);
			instance.id = buoyInstance.id;
			instance.name = buoyInstance.name;
			instance.readings = [];
			return instance;
		}

		/**
		 * Check whether or not to show a reading based on other filters
		 * @param  {object} reading reading to check
		 * @return {bool}         true if the reading should be show, else false
		 */
		function showReading(reading) {
			if (!filterTimes(reading)) return false;
			if (!filterSensors(reading)) return false;
			return true;
		}
		
		/**
		 * Filter readings based on timestamp
		 * @param  {object} reading reading
		 * @return {bool}         include reading
		 */
		function filterTimes(reading) {
			if (times.type == 'since') {
				var since = moment().subtract(times.inputs.since.value,
					 times.inputs.since.quantifier);
				var time = moment.unix(reading.timestamp);
				if (!time.isAfter(since)) {
					return false;
				}
			} else if (times.type == 'range') {
				var time = moment.unix(reading.timestamp);
				if (!time.isBetween(times.range.from, times.range.to)) {
					return false;
				}
			} else if (times.type == 'point') {
				if (times.pointReadings.indexOf(reading.id) == -1) {
					return false;
				}
			}
			return true;
		}
		
		/**
		 * Filter readings based on sensor filters
		 * @param  {object} reading reading
		 * @return {bool}         include reading
		 */
		function filterSensors(reading) {
			if (Object.keys(sensors).length === 0) {
				return true;
			}
			
			for (var i = 0; i < reading.sensorReadings.length; i++) {
				if (!filterSensor(reading.sensorReadings[i])) {
					return false;
				}
			}
			return true;
		}
		
		/**
		 * Filter reading based on specific sensor
		 * @param  {object} sReading sensor reading
		 * @return {bool}          include reading
		 */
		function filterSensor(sReading) {
			var sensor = sensors[sReading.sensorTypeId].inputs;
			
			if (!sensor.enabled) {
				return true;
			}
			var value = parseInt(sensor.value, 10);
			if (sensor.selected == ">") {
				if (sReading.value <= value) {
					return false;
				}
			} else if (sensor.selected == "<") {
				if (sReading.value >= value) {
					return false;
				}
			} else if (sensor.selected == "=") {
				if (sReading.value != value) {
					return false;
				}
			}
			return true;
		}
		
		/**
		 * Return 0-1 depending where reading timestamp falls based on time filters
		 * @param  {object} reading reading
		 * @return {float}         age (0 is old, 1 is new)
		 */
		function getRelativeAge(reading) {
			// returns age between 0 and 1, based on a range determined as seen below
			var time = moment.unix(reading.timestamp);
			
			if (times.type == 'all') {
				// range: from 2 weeks ago until now
				var max = moment();
				var min = max.clone().subtract(2, 'weeks');
			
			} else if (times.type == 'since') {
				var max = moment();
				var min = moment().subtract(times.inputs.since.value,
					 times.inputs.since.quantifier);
					
			} else if (times.type == 'range') {
				// range: range of time filters
				var max = times.range.to;
				var min = times.range.from;
			
			}  else if (times.type == 'point') {
				// range: from two weeks before point until point
				if (times.point === null) {
					return 1.0;
				}
				var max = times.point;
				var min = max.clone().subtract(2, 'weeks');
			}
			return calculateAgeInRange(time, min, max);
		}
		
		/** 
		 * Calculate where number falls in range
		 * @param  {int} time time
		 * @param  {int} min  min time
		 * @param  {int} max  max time
		 * @return {float}      0-1, where time falls in range
		 */
		function calculateAgeInRange(time, min, max) {
			if (time.isBefore(min)) {
				return 0;
			} else if (!time.isBefore(max)) {
				return 1.0;
			}
			return (time.diff(min) / max.diff(min));
		}
		
		/** Export filtered readings, query server for file */
		function exportData() {
			var readingIds = [];
			filteredReadings.forEach(function(buoyGroup) {
				buoyGroup.buoyInstances.forEach(function(buoyInstance) {
					buoyInstance.readings.forEach(function(reading) {
						readingIds.push(reading.id);
					});
				});
			});
			server.exportData(readingIds);
		}

		/** 
		 * Determine content to set for marker popup
		 * @param  {object} reading      reading
		 * @param  {object} buoyInstance buoy instance
		 * @return {string}              popup content
		 */
		function popupContent(reading, buoyInstance) {
			var formattedTime = moment.unix(reading.timestamp)
										.format('D MMMM h:mm A');
										
			var content = "<div>" +
				"<h5><strong>" + buoyInstance.name + "</strong></h5>" +
				"<em>" + formattedTime + "</em><br>" +
				"<table class='popup-table'><tbody>";
			

			reading.sensorReadings.forEach(function(sensorReading) {
				content += "<tr><td>" + 
					sensors[sensorReading.sensorTypeId].name +
					": </td><td class='right'>" + sensorReading.value + " " +
					sensors[sensorReading.sensorTypeId].unit + "</td></tr>";
			});			
				
			content += "</tbody></table></div>";
				
			return content;
		}

		/**
		 * Update the map to show markers for filtered readings
		 */
		function updateMap() {
			var enabledMarkers = [];
			var insNum = 0;

			// show a marker for every reading
			filteredReadings.forEach(function(buoyGroup) {
				buoyGroup.buoyInstances.forEach(function(buoyInstance) {
					buoyInstance.readings.forEach(function(reading) {
						enabledMarkers.push(reading.id);
						map.showMarker(reading, buoyInstance,
							insNum, getRelativeAge(reading),
							popupContent(reading, buoyInstance));
					});
					insNum++;
				});
			});
			map.hideDisabledMarkers(enabledMarkers);
		}


		function setupReadings() {

			var chartArray = [];
			
			var readingsList = filteredReadings;

			for (var p = 0; p < readingsList.length; p++) {
				for (var i = 0; i < readingsList[p].buoyInstances.length; i++) {
					var chartData = {};

					chartData.name = readingsList[p].buoyInstances[i].name;
					var chartReadings = [];
					for(var q = 0; q < readingsList[p].buoyInstances[i].readings.length; q ++){
						
						for (var z = 0; z < readingsList[p].buoyInstances[i].readings[q].sensorReadings.length; z ++){
							
							if (readingsList[p].buoyInstances[i].readings[q].sensorReadings[z].sensorTypeId == 1){
								


								var timeStamp = readingsList[p].buoyInstances[i].readings[q].timestamp;
								
								var niceTime = moment.unix(timeStamp).format("D/M h:mma")
								var turbidity = readingsList[p].buoyInstances[i].readings[q].sensorReadings[z].value;
								//sets a max value on turbidity due to chart limitations 
								if (turbidity > 200){
									turbidity = 200;
								}
								chartReadings.push({timeStamp: niceTime,turbidity: turbidity});

							}

						}
						
					}
				
				chartData.readings = chartReadings;

				chartArray.push(chartData);

				}
			
			}
			console.log(chartArray);
			return chartArray;
			
		}

		function displayChartInstance(instanceName){
			
			var instanceReadings = setupReadings();

			var tempData = [];
			var tempLabels = [];
			var tempName;
			for (var i = 0; i < instanceReadings.length; i++){
				if (instanceReadings[i].name == instanceName){

					tempName = [instanceReadings[i].name ];
					// var date = new Date();
					for(var q = 0; q < instanceReadings[i].readings.length; q++){
					


						// date = instanceReadings[i].readings[q].timeStamp
						tempLabels.push(instanceReadings[i].readings[q].timeStamp);
						tempData.push(instanceReadings[i].readings[q].turbidity);
					}
				}

			}
			if (tempLabels.length > 100){
				tempLabels = tempLabels.slice(0,101);
				var division = Math.floor(tempLabels.length/10);
				console.log(division);
				chart.labels.unshift("");
				for (var i = 1; i < tempLabels.length; i++){
					if (i % division != 0){
						tempLabels[i] = "";
					}
				console.log(tempLabels);

				}
			} 
			chart.series = tempName;
			chart.labels = tempLabels;
			chart.labels.unshift("");
			chart.data = [tempData];

			chart.data[0].unshift(tempData[0]);

			

		}
	}
	dashboard.$inject = ["$log", "$q", "server", "map", "moment"];
})();
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
	
	angular.module('app.dashboard')
		.factory('map', map);
		
	/**
		* @ngdoc service
		* @name app.dashboard.map
		* @requires google
	**/
	function map($rootScope, $log, google) {
			
		/** Internal variables */
		var map;
		var mapOptions = {
			zoom: 11,
			center: new google.maps.LatLng(-27.573704, 153.055818),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var markers = {};
		var disabledMarkers = [];
		var infoBox;
		var infoBoxOpen = false;
		var currentMarkerId = -1;
		var mapCenter;
		
		/** The service methods to expose */
		return {
			initialiseMap: initialiseMap,
			getCenter: getCenter,
			setCenter: setCenter,
			showMarker: showMarker,
			hideDisabledMarkers: hideDisabledMarkers
		};

		/** Setup google map, set styles and listeners */
		function initialiseMap() {
			mapOptions.styles = stylesBlueWater();
			
			map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); 
			
			google.maps.event.addListener(map, 'zoom_changed', function() {
				mapOptions.zoom = map.getZoom();
			});
			
			google.maps.event.addListener(map, 'center_changed', function() {
				mapOptions.center = map.getCenter();
			});
			
			google.maps.event.addListener(map, 'maptypeid_changed', function() {
				mapOptions.mapTypeId = map.getMapTypeId();
			});
			
		    google.maps.event.addListener(map, 'click', function() {
		        if (infoBoxOpen) {
					closeInfoBox();
				}
		    });

		    // reset markers
		    markers = {};
			disabledMarkers = [];
		}

		/**
		 * Get the current center of the map
		 * @return {object} center of the map
		 */
		function getCenter() {
			return map.getCenter();
		}

		/**
		 * Set the center of the map
		 * @param {object} center new center
		 */
		function setCenter(center) {
			google.maps.event.trigger(map, "resize");
			map.setCenter(center);
		}


		/**
		 * Show a marker on the map
		 * @param  {object} reading      reading for the marker
		 * @param  {object} buoyInstance buoyInstance the reading is from
		 * @param {string} colour hex colour of the marker
		 */
		function showMarker(reading, buoyInstance, colourIndex, age, content) {
			var id = reading.id;
			if (!markers.hasOwnProperty(id)) {
				// create new marker if it doesn't exist
				addMarker(reading, buoyInstance, content);
			} else {
				if (disabledMarkers.indexOf(id) != -1) {
					// show (re-enable) marker if it already exists
					enableMarker(id);
				}
			}
			markers[id].setIcon(markerColour(colorPalette(colourIndex)));
			markers[id].setOpacity(calculateOpacity(age));
		}
		
		/**
		 * Disable old markers which shouldn't be displayed
		 * @param  {int[]} enabledMarkers list of marker ids which are enabled
		 */
		function hideDisabledMarkers(enabledMarkers) {
			for (var key in markers) {
				if (markers.hasOwnProperty(key)) {
					key = parseInt(key, 10);
					if (enabledMarkers.indexOf(key) == -1) {
						disableMarker(key);
					}
				}
			}
		}

		/** 
		 * Add new marker to map
		 * @param {object} reading      reading for marker
		 * @param {object} buoyInstance buoyInstance the reading is from
		 */
		function addMarker(reading, buoyInstance, content) {
			var lat = randomisePos(reading.latitude);
			var long = randomisePos(reading.longitude);

			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(lat, long),
				map: map,
				// title: 'Buoy ' + reading.buoy + ': reading ' + reading.id,
			});
			
			google.maps.event.addListener(marker, 'click', function() {
				openInfoBox(reading, buoyInstance, marker, content);
			});
			
			markers[reading.id] = marker;
		}

		function randomisePos(pos) {
			var magnitude = 100000;
			if (Math.random() < 0.5) {
				pos += Math.round(Math.random() * 100) / magnitude;
			} else {
				pos -= Math.round(Math.random() * 100) / magnitude;
			}
			return pos;
		}

		/**
		 * Re-enable (show on map) disabled marker
		 * @param  {int} id id of marker to enable
		 */
		function enableMarker(id) {
			markers[id].setMap(map);
			disabledMarkers.splice(disabledMarkers.indexOf(id), 1);
		}
		
		/** 
		 * Disable marker (hide from map) without deleting it
		 * @param  {int} id id of marker to disable
		 */
		function disableMarker(id) {
			markers[id].setMap(null);
			disabledMarkers.push(id);
			
			// close infobox of disabled marker
			if (infoBoxOpen) {
				if (disabledMarkers.indexOf(currentMarkerId) != -1) {
					closeInfoBox();
				}
			}
		}

		/** 
		 * Open the infobox
		 * @param  {object} reading      reading
		 * @param  {object} buoyInstance buoyInstance the reading is for
		 * @param  {object} marker       marker object
		 */
		function openInfoBox(reading, buoyInstance, marker, content) {
			if (infoBoxOpen) {
				closeInfoBox();
				
				if (reading.id == currentMarkerId) {
					return;
				}
			}

			// update charts
			$rootScope.$broadcast('displayChartInstance', buoyInstance);
			
			infoBox = new InfoBox({
				content: content,
				pixelOffset: new google.maps.Size(-90, 0),
	            zIndex: null,
	            closeBoxMargin: "-6px -6px 2px 2px"
			});
			
			infoBox.open(map, marker);			
			infoBoxOpen = true;
			currentMarkerId = reading.id;
		}

		/** Close the infobox (map marker popup) */
		function closeInfoBox() {
			infoBox.close();
			infoBoxOpen = false;
		}

		/**
		 * Returns a marker icon with a specified colour
		 * @param  {string} colour colour in hex format
		 * @return {object}        marker icon usable in google maps API
		 */
		function markerColour(colour) {
			// return {
			// 	path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
		 //        fillColor: colour,
		 //        fillOpacity: 1,
		 //        strokeColor: '#000',
		 //        strokeWeight: 1,
		 //        scale: 1
			// };
			
			return (new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + colour.substr(1),
		        new google.maps.Size(21, 34),
		        new google.maps.Point(0, 0),
		        new google.maps.Point(10, 34)
	        ));
		}

		/**
		 * Hardcoded colour palette
		 * @param  {int} n index of colour in palette to get (wraps around)
		 * @return {string}   hex colour
		 */
		function colorPalette(n) {
			// palette generated from http://tools.medialab.sciences-po.fr/iwanthue/
			var palette = [
				"#84CBD1",
				"#CC4B30",
				"#BF54D0",
				"#70D84C",
				"#36362B",
				"#CD4075",
				"#553264",
				"#CBCC92",
				"#D2983C",
				"#6B7AD0",
				"#C78378",
				"#5A8A37",
				"#CCD446",
				"#72DA9E",
				"#598369",
				"#6D292F",
				"#CAB3CC",
				"#785F2A",
				"#596C87",
				"#C471B4"
			];
			return palette[n % palette.length];	
		}

		/**
		 * Generates a random hex colour (not currently used)
		 * @return {string} hex colour
		 */
		function randomColour() {
			return "#" + Math.random().toString(16).slice(2, 8);
		}

		/** 
		 * Get the value to set for marker opacity
		 * @param  {int} relative age to base opacity on
		 * @return {float}         opacity value between 0 and 1
		 */
		function calculateOpacity(age) {
			var minVisibleOpacity = 0.3;
			return age * (1 - minVisibleOpacity) + minVisibleOpacity;
		}

		/**
		 * Map styles to disable points of interest (not currently used)
		 * @return {object} map styles usable by google maps api
		 */
		function stylesNoPoi() {
			return [
			    {
			        featureType: "poi",
			        elementType: "labels",
			        stylers: [
			              { visibility: "off" }
			        ]
			    },
				{
			        featureType: "transit.station",
			        elementType: "labels",
			        stylers: [
			              { visibility: "off" }
			        ]
			    }
			];
		}

		/**
		 * Map style blue water style
		 * from https://snazzymaps.com/style/25/blue-water
		 * @return {object} map styles usable by google maps api
		 */
		function stylesBlueWater() {
			return [
				{
					"featureType": "administrative",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#444444"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [
						{
							"color": "#f2f2f2"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "all",
					"stylers": [
						{
							"saturation": -100
						},
						{
							"lightness": 45
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
						{
							"color": "#0B5B91"
						},
						{
							"visibility": "on"
						}
					]
				}
			];
		}
	}
	map.$inject = ["$rootScope", "$log", "google"];
})();
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
	
	/** Set timepicker and datepicker defaults */
	angular.module('app.gui')
		.config(["$datepickerProvider", "$timepickerProvider", "$httpProvider", "$alertProvider", function($datepickerProvider, $timepickerProvider,
						$httpProvider, $alertProvider) {
		
			// intercept all requests to check for token	
			$httpProvider.interceptors.push('authInterceptor');
			
			// default settings for datepicker
			angular.extend($datepickerProvider.defaults, {
				autoclose: true,
				dateFormat: 'dd/MM/yy',
				modelDateFormat: 'dd/MM/yy',
				dateType: 'string',
				startWeek: 1
			});
			
			// default settings for timepicker
			angular.extend($timepickerProvider.defaults, {
				autoclose: false,
				timeFormat: 'h:mm a',
				modelTimeFormat: 'h:mm a',
				timeType: 'string'
			});

			// default settings for alerts
			angular.extend($alertProvider.defaults, {
				placement: 'alert-placement',
				duration: 3,
				container: '#page',
				show: true
			});
		}]);
})();
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
	
	angular.module('app.gui')
		.factory('gui', gui);
	
    /**
        * @ngdoc service
        * @name app.gui.gui
        * @requires $alert
        * @requires $modal
        * @requires $log
    **/
	function gui($alert, $modal, $log) {
		
		/** The service methods to expose */
		return {
			alertSuccess: alertSuccess,
            alertError: alertError,
            alertBadResponse: alertBadResponse,
            confirmDelete: confirmDelete
		};
		
        /**
         * Shows a success alert
         * @param  {string} message message to show in the alert
         */
		function alertSuccess(message) {
            $alert({title: 'Success!', content: message, type: 'success' });
        }

        /**
         * Shows an error alert
         * @param  {string} message message to show in the alert
         */
        function alertError(message) {
            $alert({title: 'Error:', content: message, type: 'danger' });
        }

        /**
         * Shows an error alert on bad response from the server
         * @param  {object} res http response object
         */
        function alertBadResponse(res) {
            $log.error(res); // for debugging purposes
            alertError(res.data + '(' + res.status + ')');
        }

        /**
         * Show a modal which confirms deletion. Uses vm variables from
         * the calling controller.
         * @param  {object} scope scope to bind to the modal
         */
        function confirmDelete(scope) {
            $modal({
                scope: scope,
                templateUrl: '/app/gui/delete.modal.html',
                show: true
            });
        }
	}
	gui.$inject = ["$alert", "$modal", "$log"];
})();
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
	
	angular.module('app.nav')
		.controller('NavController', NavController);
	
	/**
		* @ngdoc object
		* @name app.nav.controller:NavController
		* @description Provides viewmodel for navigation template
		* @requires $rootScope
		* @requires $state
		* @requires routerHelper
		* @requires auth
	**/
	function NavController($rootScope, $state, routerHelper, auth) {
		var vm = this;
		
		/** Internal variables */
		var loggedIn = auth.loggedIn();
		
		/** Variables and methods bound to viewmodel */
		vm.accountMenu = [
			{ text: "Change password", click: "vm.changePassword()" },
			{ text: "Logout", click: "vm.logout()" }
		];
		vm.checkShowNav = checkShowNav;
		vm.stateActive = stateActive;
		vm.logout = logout;
		vm.changePassword = changePassword;
		
		activate();
		
		/** Called when controller is instantiated (navbar is loaded) */
		function activate() {
			// after navigating to a new panel, check still logged in
			$rootScope.$on('$stateChangeSuccess', function() {
				loggedIn = auth.loggedIn();
			});
		}
		
		/** 
		 * Check whether a state is active
		 * @param  {string} name state name
		 * @return {bool}      state is active
		 */
		function stateActive(name) {
			return routerHelper.stateActive(name);
		}
		
		/**
		 * Check whether to show navigation link based on authentication
		 * @param  {string} nav nav link element
		 * @return {bool}     show nav element
		 */
		function checkShowNav(nav) {
			switch(nav) {
				case 'dashboard':
					return loggedIn;
				case 'config':
					return auth.checkUser('power_user');
				case 'warnings':
					return loggedIn;
				case 'admin':
					return auth.checkUser('system_admin');
				case 'logout':
					return loggedIn;
				case 'account':
					return loggedIn;
				default:
					return false;
			}
		}
		
		/** Logout user and redirect to login page */
		function logout() {
			auth.logout();
			loggedIn = false;
			$state.go('login');	
		}

		/** Redirect user to change password page */
		function changePassword() {
			$state.go('change_password');
		}
	}
	NavController.$inject = ["$rootScope", "$state", "routerHelper", "auth"];
})();
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
	
	angular.module('app.warnings')
		.controller('WarningsController', WarningsController);
	
	/**
		* @ngdoc object
		* @name app.warnings.controller:WarningsController
		* @description Provides viewmodel for warnings view
		* @requires $log
		* @requires server
		* @requires moment
	**/
	function WarningsController($log, server, moment) {
		var vm = this;

		var resolved = 0; // used to determine when data is received
		
		/** Variables and methods bound to viewmodel */
		vm.loading = false;
		vm.warnings = [];
		vm.buoyInstances = [];
		vm.sensorTypes = [];
		
		activate();
		
		/** Called when controller is instantiated (warnings page is loaded) */
		function activate() {
			vm.loading = true;
			queryWarnings();
			queryBuoyInstances();
			querySensorTypes();
		}
		
		/** Query warnings from server and update viewmodel */
		function queryWarnings() {
			server.getWarnings().then(function(res) {
				vm.warnings = res.data.warnings;
				resolved++;
				parseWarnings();
			}, function(res) {
				$log.error(res);
			});
		}
		
		/** Query buoy instances from server and update viewmodel */
		function queryBuoyInstances() {
			server.getBuoyInstances().then(function(res) {
				vm.buoyInstances = res.data.buoyInstances;
				resolved++;
				parseWarnings();
			}, function(res) {
				$log.error(res);
			});
		}

		/** Query sensor types from server and parse warnings */
		function querySensorTypes() {
			server.getSensorTypes().then(function(res) {
				vm.sensorTypes = res.data.sensorTypes;
				resolved++;
				parseWarnings();
			}, function(res) {
				$log.error(res);
			});
		}
		
		/** Associate buoy, sensor and time info with warnings */
		function parseWarnings() {
			if (resolved < 3) return; // wait until all data has been received from server
			vm.loading = false;

			vm.warnings.forEach(function(warning) {
				// parse time
				warning.readingTime = moment(warning.readingTimestamp,
					'X').format("DD/MM/YY HH:mm A");
				// get buoy name
				for (var i = 0; i < vm.buoyInstances.length; i++) {
					var buoyInstance = vm.buoyInstances[i];
					if (buoyInstance.id == warning.warningTrigger.buoyInstanceId) {
						warning.buoyName = buoyInstance.name;
						break;
					}
				}
				// get sensor name
				for (var i = 0; i < vm.sensorTypes.length; i++) {
					var sensorType = vm.sensorTypes[i];
					if (sensorType.id == warning.warningTrigger.sensorTypeId) {
						warning.sensorName = sensorType.name;
						break;
					}
				}
				// format sensor, operator and value
				warning.warning = warning.sensorName + " " +
					warning.warningTrigger.operator + " " +
					warning.warningTrigger.value;
			});
		}
	}
	WarningsController.$inject = ["$log", "server", "moment"];
})();
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
	
	angular.module('app.warnings')
		.run(setRoutes);
	
	/** Define routes for warnings page */
	function setRoutes(routerHelper) {
		routerHelper.configureStates(getStates());
	}
	setRoutes.$inject = ["routerHelper"];
	
	function getStates() {
		return [
			{
				state: 'warnings',
				config: {
					url: '/warnings',
					controller: 'WarningsController',
					controllerAs: 'vm',
					templateUrl: '/app/warnings/warnings.html',
					data: {
						access: 'authed'
					}
				}
			}
		];
	}
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJhZG1pbi9hZG1pbi5tb2R1bGUuanMiLCJhdXRoL2F1dGgubW9kdWxlLmpzIiwiY29uZmlnL2NvbmZpZy5tb2R1bGUuanMiLCJjb3JlL2NvcmUubW9kdWxlLmpzIiwiZGFzaGJvYXJkL2Rhc2hib2FyZC5tb2R1bGUuanMiLCJndWkvZ3VpLm1vZHVsZS5qcyIsIm5hdi9uYXYubW9kdWxlLmpzIiwid2FybmluZ3Mvd2FybmluZ3MubW9kdWxlLmpzIiwiYXBwLmdsb2JhbHMuanMiLCJlbnYuanMiLCJhZG1pbi9hZG1pbi5jb250cm9sbGVyLmpzIiwiYWRtaW4vYWRtaW4ucm91dGVzLmpzIiwiYXV0aC9hdXRoLmNvbmZpZy5qcyIsImF1dGgvYXV0aC5jb250cm9sbGVyLmpzIiwiYXV0aC9hdXRoLnJvdXRlcy5qcyIsImF1dGgvYXV0aC5zZXJ2aWNlLmpzIiwiYXV0aC9hdXRoSW50ZXJjZXB0b3Iuc2VydmljZS5qcyIsImNvbmZpZy9jb25maWcuY29udHJvbGxlci5qcyIsImNvbmZpZy9jb25maWcucm91dGVzLmpzIiwiY29yZS9jb3JlLnJvdXRlcy5qcyIsImNvcmUvaGVsbG8uY29udHJvbGxlci5qcyIsImNvcmUvcm91dGVySGVscGVyLnByb3ZpZGVyLmpzIiwiY29yZS9zZXJ2ZXIuc2VydmljZS5qcyIsImNvcmUvc2VydmVyLnNlcnZpY2UubW9jay5qcyIsImRhc2hib2FyZC9kYXNoYm9hcmQuY29uZmlnLmpzIiwiZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzIiwiZGFzaGJvYXJkL2Rhc2hib2FyZC5yb3V0ZXMuanMiLCJkYXNoYm9hcmQvZGFzaGJvYXJkLnNlcnZpY2UuanMiLCJkYXNoYm9hcmQvbWFwLnNlcnZpY2UuanMiLCJndWkvZ3VpLmNvbmZpZy5qcyIsImd1aS9ndWkuc2VydmljZS5qcyIsIm5hdi9uYXYuY29udHJvbGxlci5qcyIsIndhcm5pbmdzL3dhcm5pbmdzLmNvbnRyb2xsZXIuanMiLCJ3YXJuaW5ncy93YXJuaW5ncy5yb3V0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQVlBLENBQUEsV0FBQTtJQUNBOzs7Ozs7O0lBT0EsUUFBQSxPQUFBLE9BQUE7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQkEsQ0FBQSxXQUFBO0NBQ0E7Ozs7Ozs7Q0FPQSxRQUFBLE9BQUEsYUFBQTs7RUFFQTtFQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNYQSxDQUFBLFdBQUE7Q0FDQTs7Ozs7OztDQU9BLFFBQUEsT0FBQSxZQUFBOzs7Ozs7Ozs7Ozs7OztBQ1JBLENBQUEsV0FBQTtDQUNBOzs7Ozs7O0NBT0EsUUFBQSxPQUFBLGNBQUE7O0VBRUE7RUFDQTs7O1FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLENBQUEsV0FBQTtDQUNBOzs7Ozs7O0NBT0EsUUFBQSxPQUFBLFlBQUE7O0VBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBLENBQUEsV0FBQTtDQUNBOzs7Ozs7O0NBT0EsUUFBQSxPQUFBLGlCQUFBOztFQUVBO0VBQ0E7OztFQUdBO0VBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBLENBQUEsV0FBQTtDQUNBOzs7Ozs7O0NBT0EsUUFBQSxPQUFBLFdBQUE7O1FBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBLENBQUEsV0FBQTtDQUNBOzs7Ozs7O0NBT0EsUUFBQSxPQUFBLFdBQUE7O0VBRUE7RUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNaQSxDQUFBLFdBQUE7Q0FDQTs7Ozs7OztDQU9BLFFBQUEsT0FBQSxnQkFBQTs7RUFFQTtFQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBLENBQUEsV0FBQTtDQUNBOzs7Q0FHQSxRQUFBLE9BQUE7R0FDQSxTQUFBLFVBQUE7R0FDQSxTQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7O0FDUkEsQ0FBQSxXQUFBO0lBQ0E7OztJQUdBLFFBQUEsT0FBQTtTQUNBLFNBQUEsa0JBQUE7Ozs7Ozs7Ozs7Ozs7O0FDTEEsQ0FBQSxXQUFBO0NBQ0E7O0NBRUEsUUFBQSxPQUFBO0dBQ0EsV0FBQSxtQkFBQTs7Ozs7Ozs7Q0FRQSxTQUFBLGdCQUFBLFFBQUEsUUFBQSxLQUFBO0VBQ0EsSUFBQSxLQUFBOzs7RUFHQSxHQUFBLFFBQUE7RUFDQSxHQUFBLGFBQUEsQ0FBQTtFQUNBLEdBQUEsY0FBQTtFQUNBLEdBQUEsUUFBQSxDQUFBLFFBQUEsY0FBQTtFQUNBLEdBQUEsaUJBQUE7RUFDQSxHQUFBLG1CQUFBO0VBQ0EsR0FBQSxvQkFBQTtFQUNBLEdBQUEsYUFBQTtFQUNBLEdBQUEsb0JBQUE7RUFDQSxHQUFBLGtCQUFBO0VBQ0EsR0FBQSxtQkFBQTtFQUNBLEdBQUEsVUFBQTs7Ozs7OztFQU9BOzs7RUFHQSxTQUFBLFdBQUE7R0FDQTs7Ozs7O0VBTUEsU0FBQSxhQUFBO0dBQ0EsT0FBQSxXQUFBLEtBQUEsU0FBQSxLQUFBO0lBQ0EsR0FBQSxRQUFBLElBQUEsS0FBQTtJQUNBO01BQ0EsU0FBQSxLQUFBO0lBQ0EsSUFBQSxpQkFBQTs7Ozs7OztFQU9BLFNBQUEsa0JBQUE7R0FDQSxHQUFBLE1BQUEsUUFBQSxTQUFBLE1BQUE7SUFDQSxJQUFBLENBQUEsS0FBQSxVQUFBLE9BQUE7S0FDQSxLQUFBLFVBQUEsT0FBQTtXQUNBO0tBQ0EsS0FBQSxVQUFBLE9BQUEsT0FBQSxLQUFBLFVBQUEsTUFBQTs7Ozs7Ozs7O0VBU0EsU0FBQSxpQkFBQSxNQUFBO0dBQ0EsR0FBQSxhQUFBLEtBQUE7R0FDQSxHQUFBLFdBQUE7Ozs7Ozs7RUFPQSxTQUFBLG9CQUFBO0dBQ0EsSUFBQSxHQUFBLGNBQUEsQ0FBQSxHQUFBO0lBQ0EsT0FBQSxXQUFBLEdBQUEsVUFBQSxLQUFBLFNBQUEsS0FBQTtLQUNBO0tBQ0EsSUFBQSxhQUFBO09BQ0EsU0FBQSxLQUFBO0tBQ0EsSUFBQSxpQkFBQTs7VUFFQTtJQUNBLE9BQUEsUUFBQSxHQUFBLFVBQUEsS0FBQSxTQUFBLEtBQUE7S0FDQTtLQUNBLElBQUEsYUFBQTtPQUNBLFNBQUEsS0FBQTtLQUNBLElBQUEsaUJBQUE7O0lBRUEsR0FBQSxNQUFBLE9BQUEsR0FBQSxNQUFBLFNBQUEsR0FBQTs7R0FFQSxHQUFBLGFBQUEsQ0FBQTs7Ozs7O0VBTUEsU0FBQSxvQkFBQTtHQUNBLElBQUEsR0FBQSxjQUFBLENBQUEsR0FBQTtJQUNBLEdBQUEsTUFBQSxPQUFBLEdBQUEsTUFBQSxTQUFBLEdBQUE7O0dBRUEsR0FBQSxhQUFBLENBQUE7Ozs7Ozs7RUFPQSxTQUFBLGtCQUFBLE1BQUE7R0FDQSxPQUFBLFdBQUEsS0FBQSxJQUFBLEtBQUEsU0FBQSxLQUFBO0lBQ0E7SUFDQSxJQUFBLGFBQUE7TUFDQSxTQUFBLEtBQUE7SUFDQSxJQUFBLGlCQUFBOzs7Ozs7OztFQVFBLFNBQUEsV0FBQSxNQUFBO0dBQ0EsR0FBQSxlQUFBO0dBQ0EsR0FBQSxhQUFBO0dBQ0EsR0FBQSxhQUFBLEtBQUE7R0FDQSxJQUFBLGNBQUE7Ozs7Ozs7O0VBUUEsU0FBQSxpQkFBQSxNQUFBO0dBQ0EsUUFBQSxDQUFBLEdBQUEsY0FBQSxDQUFBLEtBQUEsR0FBQSxjQUFBLEtBQUE7SUFDQSxLQUFBLE1BQUEsQ0FBQTs7Ozs7OztFQU9BLFNBQUEsa0JBQUE7R0FDQSxJQUFBLFdBQUEsRUFBQSxJQUFBLENBQUEsR0FBQSxNQUFBLEdBQUEsTUFBQTtHQUNBLEdBQUEsTUFBQSxLQUFBO0dBQ0EsaUJBQUE7Ozs7OztFQU1BLFNBQUEsVUFBQTtHQUNBLElBQUEsR0FBQSxlQUFBLElBQUE7R0FDQSxJQUFBLE9BQUE7R0FDQSxPQUFBLFFBQUEsR0FBQSxhQUFBLE1BQUEsS0FBQSxTQUFBLEtBQUE7SUFDQSxJQUFBLGFBQUE7TUFDQSxTQUFBLEtBQUE7SUFDQSxJQUFBLGlCQUFBOztHQUVBLEdBQUEsY0FBQTs7OztFQUlBLFNBQUEsZUFBQTtHQUNBLE9BQUEsdUNBQUEsUUFBQSxTQUFBLFNBQUEsR0FBQTtJQUNBLElBQUEsSUFBQSxLQUFBLFNBQUEsR0FBQSxHQUFBLElBQUEsS0FBQSxNQUFBLEtBQUEsRUFBQSxJQUFBO0lBQ0EsT0FBQSxFQUFBLFNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0tBLENBQUEsV0FBQTtDQUNBOztDQUVBLFFBQUEsT0FBQTtHQUNBLElBQUE7OztDQUdBLFNBQUEsVUFBQSxjQUFBO0VBQ0EsYUFBQSxnQkFBQTs7OztDQUdBLFNBQUEsWUFBQTtFQUNBLE9BQUE7R0FDQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0tBQ0EsS0FBQTtLQUNBLFlBQUE7S0FDQSxjQUFBO0tBQ0EsYUFBQTtLQUNBLE1BQUE7TUFDQSxRQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBLENBQUEsV0FBQTtDQUNBOztDQUVBLFFBQUEsT0FBQTtHQUNBLElBQUE7OztDQUdBLFNBQUEsVUFBQSxZQUFBLFFBQUEsTUFBQTtFQUNBLFdBQUEsSUFBQSxxQkFBQTs7RUFFQSxTQUFBLFlBQUEsT0FBQSxTQUFBO0lBQ0EsV0FBQSxZQUFBOztHQUVBLElBQUEsQ0FBQSxLQUFBLFVBQUEsUUFBQSxLQUFBLFNBQUE7SUFDQSxNQUFBOzs7SUFHQSxJQUFBLFVBQUEsUUFBQSxLQUFBO0tBQ0EsSUFBQSxLQUFBLFlBQUE7TUFDQSxPQUFBLEdBQUE7WUFDQTtNQUNBLE9BQUEsR0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkEsQ0FBQSxXQUFBO0NBQ0E7O0NBRUEsUUFBQSxPQUFBO0dBQ0EsV0FBQSxrQkFBQTs7Ozs7Ozs7Ozs7OztDQWFBLFNBQUEsZUFBQSxRQUFBLFFBQUEsY0FBQSxNQUFBLFFBQUEsY0FBQTtFQUNBLElBQUEsS0FBQTs7O0VBR0EsR0FBQSxhQUFBO0VBQ0EsR0FBQSxRQUFBO0VBQ0EsR0FBQSxnQkFBQSxFQUFBO0VBQ0EsR0FBQSx5QkFBQSxDQUFBO0VBQ0EsR0FBQSxVQUFBO0VBQ0EsR0FBQSxpQkFBQTtFQUNBLEdBQUEsaUJBQUE7RUFDQSxHQUFBLGdCQUFBOztFQUVBOzs7RUFHQSxTQUFBLFdBQUE7R0FDQTtHQUNBLE9BQUEsSUFBQSx1QkFBQTs7OztFQUlBLFNBQUEsY0FBQTtHQUNBLElBQUEsT0FBQSxHQUFBO0tBQ0EsT0FBQSxHQUFBO0tBQ0EsT0FBQSxHQUFBLG9CQUFBO0lBQ0EsR0FBQSx5QkFBQSxDQUFBO0lBQ0EsR0FBQSxpQkFBQSxDQUFBO0lBQ0EsR0FBQSxVQUFBO0lBQ0E7SUFDQTs7Ozs7RUFLQSxTQUFBLFFBQUE7R0FDQSxPQUFBLE1BQUEsR0FBQSxPQUFBLEdBQUEsVUFBQTtHQUNBLFNBQUEsS0FBQTtJQUNBLFFBQUEsSUFBQTtJQUNBLElBQUEsS0FBQSxZQUFBO0tBQ0EsSUFBQSxDQUFBLElBQUEsS0FBQSxVQUFBLE9BQUE7TUFDQSxPQUFBLEdBQUE7TUFDQSxHQUFBLGFBQUE7WUFDQTtNQUNBLE9BQUEsR0FBQTs7S0FFQTs7OztHQUlBLFNBQUEsS0FBQTtJQUNBLE1BQUE7Ozs7O0VBS0EsU0FBQSxpQkFBQTtHQUNBLEdBQUEsVUFBQTs7R0FFQSxJQUFBLEdBQUEsZUFBQSxNQUFBLEdBQUEsZUFBQSxHQUFBLGlCQUFBO0lBQ0EsT0FBQSxlQUFBLEdBQUEsaUJBQUEsR0FBQSxhQUFBLEtBQUEsU0FBQSxLQUFBO0tBQ0EsR0FBQSx5QkFBQTtPQUNBLFNBQUEsS0FBQTtLQUNBLEdBQUEseUJBQUE7O1VBRUE7SUFDQSxNQUFBOzs7OztFQUtBLFNBQUEsZ0JBQUE7R0FDQSxHQUFBLFVBQUE7R0FDQSxJQUFBLEdBQUEsZUFBQSxNQUFBLEdBQUEsZUFBQSxHQUFBLGlCQUFBO0lBQ0EsT0FBQSxjQUFBLGFBQUEsUUFBQSxLQUFBLEdBQUEsYUFBQSxLQUFBLFNBQUEsS0FBQTtLQUNBLEdBQUEseUJBQUE7S0FDQSxHQUFBLGFBQUE7T0FDQSxTQUFBLEtBQUE7S0FDQSxHQUFBLHlCQUFBOztVQUVBO0lBQ0EsTUFBQTs7Ozs7RUFLQSxTQUFBLGlCQUFBO0dBQ0EsR0FBQSxVQUFBO0dBQ0EsT0FBQSxlQUFBLEdBQUEsT0FBQSxLQUFBLFNBQUEsS0FBQTtJQUNBLEdBQUEsaUJBQUE7TUFDQSxTQUFBLEtBQUE7SUFDQSxHQUFBLGlCQUFBOzs7OztFQUtBLFNBQUEsaUJBQUE7R0FDQSxHQUFBLFFBQUE7R0FDQSxHQUFBLFdBQUE7Ozs7RUFJQSxTQUFBLG9CQUFBO0dBQ0EsR0FBQSxrQkFBQTtHQUNBLEdBQUEsY0FBQTtHQUNBLEdBQUEsa0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUhBLENBQUEsV0FBQTtDQUNBOztDQUVBLFFBQUEsT0FBQTtHQUNBLElBQUE7OztDQUdBLFNBQUEsVUFBQSxjQUFBO0VBQ0EsYUFBQSxnQkFBQTs7OztDQUdBLFNBQUEsWUFBQTtFQUNBLE9BQUE7R0FDQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0tBQ0EsS0FBQTs7O0tBR0EsYUFBQTtLQUNBLE1BQUE7TUFDQSxRQUFBOzs7O0dBSUE7SUFDQSxPQUFBO0lBQ0EsUUFBQTtLQUNBLEtBQUE7OztLQUdBLGFBQUE7S0FDQSxNQUFBO01BQ0EsUUFBQTs7OztHQUlBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7S0FDQSxLQUFBOzs7S0FHQSxhQUFBO0tBQ0EsTUFBQTtNQUNBLFFBQUE7Ozs7R0FJQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0tBQ0EsS0FBQTs7O0tBR0EsYUFBQTtLQUNBLE1BQUE7TUFDQSxRQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRBLENBQUEsV0FBQTtDQUNBOztDQUVBLFFBQUEsT0FBQTtHQUNBLFFBQUEsUUFBQTs7Ozs7Ozs7Q0FRQSxTQUFBLEtBQUEsU0FBQSxRQUFBOzs7RUFHQSxPQUFBO0dBQ0EsUUFBQTtHQUNBLFVBQUE7R0FDQSxVQUFBO0dBQ0EsV0FBQTtHQUNBLGFBQUE7R0FDQSxXQUFBOzs7O0VBSUEsU0FBQSxTQUFBO0dBQ0EsUUFBQSxhQUFBLFdBQUE7Ozs7Ozs7RUFPQSxTQUFBLFdBQUE7R0FDQSxJQUFBLFFBQUE7R0FDQSxHQUFBLE9BQUE7SUFDQSxJQUFBLFNBQUEsU0FBQTtJQUNBLFFBQUEsU0FBQSxVQUFBLE9BQUE7VUFDQTtJQUNBLE9BQUE7Ozs7Ozs7O0VBUUEsU0FBQSxVQUFBLE9BQUE7R0FDQSxRQUFBLGFBQUEsV0FBQTs7Ozs7OztFQU9BLFNBQUEsV0FBQTtHQUNBLE9BQUEsUUFBQSxhQUFBOzs7Ozs7OztFQVFBLFNBQUEsY0FBQTtHQUNBLE9BQUEsU0FBQSxZQUFBOzs7Ozs7OztFQVFBLFNBQUEsa0JBQUE7R0FDQSxJQUFBLFFBQUE7R0FDQSxJQUFBLFNBQUEsTUFBQTtJQUNBLE9BQUE7O0dBRUEsT0FBQSxTQUFBLE9BQUE7Ozs7Ozs7O0VBUUEsU0FBQSxVQUFBLE1BQUE7R0FDQSxJQUFBLFFBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLFFBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxVQUFBOzs7R0FHQSxJQUFBLFFBQUEsT0FBQSxPQUFBOztHQUVBLElBQUEsUUFBQSxZQUFBO0lBQ0EsSUFBQSxZQUFBO0tBQ0EsT0FBQTs7VUFFQTtJQUNBLElBQUEsQ0FBQSxZQUFBO0tBQ0EsT0FBQTs7OztHQUlBLFFBQUEsTUFBQSxzQkFBQSxNQUFBOzs7Ozs7OztFQVFBLFNBQUEsU0FBQSxPQUFBO0dBQ0EsSUFBQSxZQUFBLE1BQUEsTUFBQSxLQUFBO0dBQ0EsSUFBQSxTQUFBLFVBQUEsUUFBQSxLQUFBLEtBQUEsUUFBQSxLQUFBO0dBQ0EsT0FBQSxLQUFBLE1BQUEsUUFBQSxLQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIQSxDQUFBLFdBQUE7Q0FDQTs7Q0FFQSxRQUFBLE9BQUE7R0FDQSxRQUFBLG1CQUFBOzs7Ozs7Ozs7Q0FTQSxTQUFBLGdCQUFBLE1BQUE7OztFQUdBLE9BQUE7R0FDQSxTQUFBO0dBQ0EsVUFBQTs7OztFQUlBLFNBQUEsUUFBQSxRQUFBO0dBQ0EsT0FBQTs7OztFQUlBLFNBQUEsU0FBQSxLQUFBO0dBQ0EsSUFBQSxJQUFBLEtBQUEsT0FBQTtJQUNBLEtBQUEsVUFBQSxJQUFBLEtBQUE7O0dBRUEsT0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkEsQ0FBQSxXQUFBO0NBQ0E7O0NBRUEsUUFBQSxPQUFBO0dBQ0EsV0FBQSxvQkFBQTs7Ozs7Ozs7Q0FRQSxTQUFBLGlCQUFBLFFBQUEsS0FBQTtFQUNBLElBQUEsS0FBQTs7O0VBR0EsR0FBQSxhQUFBO0VBQ0EsR0FBQSxnQkFBQTtFQUNBLEdBQUEsYUFBQTtFQUNBLEdBQUEsV0FBQTtFQUNBLEdBQUEsZUFBQTtFQUNBLEdBQUEsY0FBQTtFQUNBLEdBQUEsa0JBQUE7RUFDQSxHQUFBLFVBQUEsRUFBQSxJQUFBLENBQUEsR0FBQSxPQUFBO0VBQ0EsR0FBQSxXQUFBLEVBQUEsTUFBQSxPQUFBLEtBQUE7RUFDQSxHQUFBLFdBQUE7RUFDQSxHQUFBLFNBQUEsS0FBQTtFQUNBLEdBQUEsWUFBQTtFQUNBLEdBQUEsVUFBQSxLQUFBO0VBQ0EsR0FBQSxhQUFBO0VBQ0EsR0FBQSxhQUFBO0VBQ0EsR0FBQSxZQUFBLEVBQUEsS0FBQSxLQUFBO0VBQ0EsR0FBQSxVQUFBO0VBQ0EsR0FBQSxjQUFBO0VBQ0EsR0FBQSxZQUFBO0VBQ0EsR0FBQSxrQkFBQTtFQUNBLEdBQUEscUJBQUE7RUFDQSxHQUFBLG1CQUFBO0VBQ0EsR0FBQSxvQkFBQTtFQUNBLEdBQUEsd0JBQUE7RUFDQSxHQUFBLHlCQUFBO0VBQ0EsR0FBQSxxQkFBQTtFQUNBLEdBQUEsbUJBQUE7RUFDQSxHQUFBLGtCQUFBO0VBQ0EsR0FBQSxnQkFBQTtFQUNBLEdBQUEsY0FBQTtFQUNBLEdBQUEsZ0JBQUE7RUFDQSxHQUFBLGlCQUFBO0VBQ0EsR0FBQSxhQUFBO0VBQ0EsR0FBQSxtQkFBQTtFQUNBLEdBQUEsbUJBQUE7RUFDQSxHQUFBLFVBQUE7RUFDQSxHQUFBLGlCQUFBO0VBQ0EsR0FBQSxrQkFBQTtFQUNBLEdBQUEsa0JBQUE7O0VBRUE7OztFQUdBLFNBQUEsV0FBQTtHQUNBO0dBQ0E7R0FDQTtHQUNBO0dBQ0E7R0FDQTs7OztFQUlBLFNBQUEsaUJBQUE7R0FDQSxHQUFBLGNBQUE7SUFDQSxRQUFBLFNBQUEsUUFBQSxNQUFBLFdBQUE7OztLQUdBLElBQUEsT0FBQSxZQUFBLFFBQUEsWUFBQTs7TUFFQSxJQUFBLEtBQUEsVUFBQSxHQUFBLE9BQUE7WUFDQTs7TUFFQSxJQUFBLEtBQUEsV0FBQSxHQUFBLE9BQUE7O01BRUEsSUFBQSxLQUFBLGFBQUEsY0FBQSxNQUFBO09BQ0EsSUFBQSxLQUFBLGFBQUEsV0FBQSxXQUFBLE9BQUE7OztLQUdBLE9BQUE7O0lBRUEsU0FBQSxTQUFBLE9BQUE7OztJQUdBLFdBQUEsU0FBQSxPQUFBOzs7S0FHQSxJQUFBLFNBQUEsTUFBQSxPQUFBO0tBQ0EsSUFBQSxPQUFBLFlBQUEsUUFBQSxTQUFBO01BQ0EsZ0JBQUEsT0FBQTtZQUNBO01BQ0EsbUJBQUEsT0FBQTs7Ozs7OztFQU9BLFNBQUEsa0JBQUE7R0FDQSxPQUFBLGdCQUFBLEtBQUEsU0FBQSxLQUFBO0lBQ0EsR0FBQSxhQUFBLElBQUEsS0FBQTtJQUNBO01BQ0EsU0FBQSxLQUFBO0lBQ0EsSUFBQSxpQkFBQTs7Ozs7RUFLQSxTQUFBLHFCQUFBO0dBQ0EsT0FBQSxtQkFBQSxLQUFBLFNBQUEsS0FBQTtJQUNBLEdBQUEsZ0JBQUEsSUFBQSxLQUFBO0lBQ0E7TUFDQSxTQUFBLEtBQUE7SUFDQSxJQUFBLGlCQUFBOzs7OztFQUtBLFNBQUEsb0JBQUE7R0FDQSxPQUFBLGtCQUFBLEtBQUEsU0FBQSxLQUFBO0lBQ0EsR0FBQSxlQUFBLElBQUEsS0FBQTtJQUNBO01BQ0EsU0FBQSxLQUFBO0lBQ0EsSUFBQSxpQkFBQTs7Ozs7RUFLQSxTQUFBLGdCQUFBO0dBQ0EsT0FBQSxrQkFBQSxLQUFBLFNBQUEsS0FBQTtJQUNBLEdBQUEsV0FBQSxJQUFBLEtBQUE7SUFDQTtNQUNBLFNBQUEsS0FBQTtJQUNBLElBQUEsaUJBQUE7Ozs7O0VBS0EsU0FBQSx1QkFBQTtHQUNBLE9BQUEscUJBQUEsS0FBQSxTQUFBLEtBQUE7SUFDQSxHQUFBLGtCQUFBLElBQUEsS0FBQTtJQUNBO01BQ0EsU0FBQSxLQUFBO0lBQ0EsSUFBQSxpQkFBQTs7Ozs7RUFLQSxTQUFBLG1CQUFBO0dBQ0EsT0FBQSxpQkFBQSxLQUFBLFNBQUEsS0FBQTtJQUNBLEdBQUEsY0FBQSxJQUFBLEtBQUE7SUFDQTtNQUNBLFNBQUEsS0FBQTtJQUNBLElBQUEsaUJBQUE7Ozs7O0VBS0EsU0FBQSxrQkFBQTtHQUNBO0dBQ0EsR0FBQSxjQUFBLFFBQUEsU0FBQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxhQUFBLE9BQUE7Ozs7O0VBS0EsU0FBQSxzQkFBQTtHQUNBLEdBQUEsZ0JBQUEsUUFBQSxTQUFBLFNBQUE7O0lBRUEsS0FBQSxJQUFBLElBQUEsR0FBQSxJQUFBLEdBQUEsY0FBQSxRQUFBLEtBQUE7S0FDQSxJQUFBLGVBQUEsR0FBQSxjQUFBO0tBQ0EsSUFBQSxhQUFBLE1BQUEsUUFBQSxnQkFBQTtNQUNBLFFBQUEsV0FBQSxhQUFBO01BQ0E7Ozs7SUFJQSxLQUFBLElBQUEsSUFBQSxHQUFBLElBQUEsR0FBQSxZQUFBLFFBQUEsS0FBQTtLQUNBLElBQUEsYUFBQSxHQUFBLFlBQUE7S0FDQSxJQUFBLFdBQUEsTUFBQSxRQUFBLGNBQUE7TUFDQSxRQUFBLGFBQUEsV0FBQTtNQUNBOzs7Ozs7Ozs7O0VBVUEsU0FBQSxpQkFBQTtHQUNBLElBQUEsR0FBQSxTQUFBLFFBQUEsWUFBQSxPQUFBO0dBQ0EsSUFBQSxHQUFBLFNBQUEsUUFBQSxXQUFBLEdBQUEsV0FBQSxTQUFBLEdBQUEsT0FBQTtHQUNBLElBQUEsR0FBQSxTQUFBLFFBQUEsU0FBQSxHQUFBLGNBQUEsU0FBQSxHQUFBLE9BQUE7R0FDQSxPQUFBOzs7O0VBSUEsU0FBQSxtQkFBQTtHQUNBLEdBQUEsYUFBQTtHQUNBLEdBQUEsY0FBQSxRQUFBLFNBQUEsY0FBQTtJQUNBLElBQUEsYUFBQSxlQUFBLEdBQUEsU0FBQSxJQUFBLElBQUE7S0FDQSxHQUFBLFdBQUEsS0FBQTs7Ozs7O0VBTUEsU0FBQSxZQUFBO0dBQ0E7R0FDQSxHQUFBLFNBQUEsT0FBQTs7OztFQUlBLFNBQUEsY0FBQTtHQUNBLEdBQUEsU0FBQSxLQUFBO0dBQ0EsR0FBQSxVQUFBLEtBQUE7R0FDQSxHQUFBLGFBQUE7R0FDQSxHQUFBLGFBQUE7Ozs7RUFJQSxTQUFBLGdCQUFBLFdBQUE7R0FDQTtHQUNBLEdBQUEsU0FBQSxPQUFBO0dBQ0EsR0FBQSxTQUFBLE1BQUE7R0FDQTs7OztFQUlBLFNBQUEsbUJBQUEsY0FBQTtHQUNBO0dBQ0EsR0FBQSxTQUFBLE9BQUE7R0FDQSxHQUFBLFNBQUEsTUFBQTtHQUNBOzs7O0VBSUEsU0FBQSwwQkFBQTtHQUNBLEdBQUEsV0FBQSxRQUFBLFNBQUEsV0FBQTtJQUNBLFVBQUEsT0FBQTtJQUNBLFVBQUEsZ0JBQUE7Ozs7O0VBS0EsU0FBQSxxQkFBQSxjQUFBO0dBQ0EsR0FBQSxXQUFBLFFBQUEsU0FBQSxXQUFBO0lBQ0EsSUFBQSxVQUFBLE1BQUEsYUFBQSxhQUFBO0tBQ0EsYUFBQSxnQkFBQSx3QkFBQSxVQUFBO0tBQ0EsVUFBQSxjQUFBLEtBQUE7S0FDQTs7Ozs7O0VBTUEsU0FBQSxnQkFBQSxXQUFBO0dBQ0EsVUFBQSxZQUFBLENBQUEsVUFBQTs7OztFQUlBLFNBQUEsbUJBQUE7Ozs7O0dBS0EsR0FBQSxTQUFBLEtBQUE7Ozs7RUFJQSxTQUFBLG9CQUFBOztHQUVBLEdBQUEsU0FBQSxLQUFBOztHQUVBLElBQUEsR0FBQSxTQUFBLFFBQUEsU0FBQTtJQUNBLE9BQUEsb0JBQUEsR0FBQSxTQUFBLElBQUE7S0FDQSxHQUFBLFNBQUEsSUFBQSxNQUFBLEtBQUEsU0FBQSxLQUFBO01BQ0E7TUFDQSxJQUFBLGFBQUE7UUFDQSxTQUFBLEtBQUE7TUFDQSxJQUFBLGlCQUFBOztVQUVBLElBQUEsR0FBQSxTQUFBLFFBQUEsWUFBQTtJQUNBLE9BQUEsdUJBQUEsR0FBQSxTQUFBLElBQUE7S0FDQSxHQUFBLFNBQUEsSUFBQSxNQUFBLEdBQUEsU0FBQSxJQUFBLGFBQUEsS0FBQSxTQUFBLEtBQUE7TUFDQTtNQUNBLElBQUEsYUFBQTtRQUNBLFNBQUEsS0FBQTtNQUNBLElBQUEsaUJBQUE7UUFDQTs7Ozs7RUFLQSxTQUFBLGlCQUFBO0dBQ0EsR0FBQSxTQUFBLEtBQUE7Ozs7RUFJQSxTQUFBLHdCQUFBO0dBQ0EsR0FBQSxVQUFBLEtBQUE7R0FDQSxHQUFBLFVBQUEsY0FBQSxHQUFBLFNBQUEsSUFBQTs7OztFQUlBLFNBQUEseUJBQUE7R0FDQSxHQUFBLFVBQUEsS0FBQTtHQUNBLEdBQUEsU0FBQSxJQUFBLGNBQUEsR0FBQSxVQUFBO0dBQ0EsaUJBQUEsR0FBQSxTQUFBOztHQUVBLE9BQUE7SUFDQSxHQUFBLFNBQUEsSUFBQTtJQUNBLEdBQUEsVUFBQTtJQUNBLEdBQUEsVUFBQTtLQUNBLEtBQUEsU0FBQSxLQUFBO0lBQ0E7SUFDQSxJQUFBLGFBQUE7TUFDQSxTQUFBLEtBQUE7SUFDQSxJQUFBLGlCQUFBOzs7OztFQUtBLFNBQUEsa0JBQUE7R0FDQSxHQUFBLFVBQUEsS0FBQTs7Ozs7Ozs7RUFRQSxTQUFBLFVBQUE7R0FDQSxJQUFBLEdBQUEsU0FBQSxJQUFBLE9BQUE7R0FDQSxJQUFBLEdBQUEsVUFBQSxJQUFBLE9BQUE7R0FDQSxJQUFBLEdBQUEsWUFBQSxPQUFBO0dBQ0EsSUFBQSxHQUFBLFlBQUEsT0FBQTtHQUNBLE9BQUE7Ozs7RUFJQSxTQUFBLHFCQUFBO0dBQ0EsR0FBQSxTQUFBLE9BQUE7R0FDQSxHQUFBLFNBQUEsTUFBQTs7OztFQUlBLFNBQUEsbUJBQUE7R0FDQSxPQUFBLGFBQUEsR0FBQSxTQUFBLE9BQUEsS0FBQSxTQUFBLEtBQUE7SUFDQSxHQUFBLFNBQUEsT0FBQTtJQUNBO0lBQ0EsSUFBQSxhQUFBO01BQ0EsU0FBQSxLQUFBO0lBQ0EsSUFBQSxpQkFBQTs7Ozs7RUFLQSxTQUFBLGdCQUFBO0dBQ0EsR0FBQSxTQUFBLFFBQUEsU0FBQSxTQUFBOztJQUVBLEtBQUEsSUFBQSxJQUFBLEdBQUEsSUFBQSxHQUFBLGNBQUEsUUFBQSxLQUFBO0tBQ0EsSUFBQSxlQUFBLEdBQUEsY0FBQTtLQUNBLElBQUEsUUFBQSxVQUFBLGFBQUEsUUFBQTtNQUNBLFFBQUEsV0FBQSxhQUFBO01BQ0EsSUFBQSxRQUFBLFlBQUEsSUFBQTtPQUNBLFFBQUEsV0FBQTs7TUFFQTs7OztJQUlBLEtBQUEsSUFBQSxJQUFBLEdBQUEsSUFBQSxHQUFBLGFBQUEsUUFBQSxLQUFBO0tBQ0EsSUFBQSxRQUFBLGlCQUFBLEdBQUEsYUFBQSxHQUFBLElBQUE7TUFDQSxRQUFBLGNBQUEsR0FBQSxhQUFBLEdBQUE7TUFDQTs7Ozs7OztFQU9BLFNBQUEsY0FBQTtHQUNBLElBQUEsR0FBQSxRQUFBLE1BQUEsQ0FBQSxLQUFBLEdBQUEsUUFBQSxTQUFBLElBQUE7R0FDQSxHQUFBLGFBQUE7R0FDQSxJQUFBLFVBQUE7R0FDQSxJQUFBLEdBQUEsU0FBQSxRQUFBLFlBQUE7SUFDQSxRQUFBLEtBQUEsR0FBQSxTQUFBLElBQUE7VUFDQSxJQUFBLEdBQUEsU0FBQSxRQUFBLFNBQUE7O0lBRUEsR0FBQSxjQUFBLFFBQUEsU0FBQSxjQUFBO0tBQ0EsSUFBQSxhQUFBLGVBQUEsR0FBQSxTQUFBLElBQUEsSUFBQTtNQUNBLFFBQUEsS0FBQSxhQUFBOzs7VUFHQSxJQUFBLEdBQUEsU0FBQSxRQUFBLE9BQUE7O0lBRUEsR0FBQSxjQUFBLFFBQUEsU0FBQSxjQUFBO0tBQ0EsUUFBQSxLQUFBLGFBQUE7OztHQUdBLGFBQUE7R0FDQTs7OztFQUlBLFNBQUEsa0JBQUE7R0FDQSxHQUFBLFFBQUEsS0FBQSxDQUFBO0dBQ0EsR0FBQSxRQUFBLFFBQUE7Ozs7RUFJQSxTQUFBLG1CQUFBO0dBQ0EsR0FBQSxhQUFBO0dBQ0E7Ozs7RUFJQSxTQUFBLGFBQUEsU0FBQTtHQUNBLE9BQUEsZ0JBQUEsR0FBQSxTQUFBLFNBQUEsS0FBQSxTQUFBLEtBQUE7SUFDQTtJQUNBLElBQUEsYUFBQTtNQUNBLFNBQUEsS0FBQTtJQUNBLElBQUEsaUJBQUE7Ozs7O0VBS0EsU0FBQSxjQUFBLFNBQUE7Ozs7O0VBS0EsU0FBQSxhQUFBO0dBQ0EsSUFBQSxHQUFBLFFBQUEsZ0JBQUEsQ0FBQSxLQUFBLEdBQUEsUUFBQSxTQUFBLElBQUE7R0FDQSxHQUFBLGFBQUE7R0FDQSxJQUFBLGtCQUFBO0dBQ0EsSUFBQSxHQUFBLFNBQUEsUUFBQSxZQUFBO0lBQ0EsZ0JBQUEsS0FBQSxHQUFBLFNBQUEsSUFBQTtVQUNBLElBQUEsR0FBQSxTQUFBLFFBQUEsU0FBQTs7SUFFQSxHQUFBLGNBQUEsUUFBQSxTQUFBLGNBQUE7S0FDQSxJQUFBLGFBQUEsZUFBQSxHQUFBLFNBQUEsSUFBQSxJQUFBO01BQ0EsZ0JBQUEsS0FBQSxhQUFBOzs7VUFHQSxJQUFBLEdBQUEsU0FBQSxRQUFBLE9BQUE7O0lBRUEsR0FBQSxjQUFBLFFBQUEsU0FBQSxjQUFBO0tBQ0EsZ0JBQUEsS0FBQSxhQUFBOzs7R0FHQSxhQUFBO0dBQ0E7Ozs7RUFJQSxTQUFBLGFBQUEsU0FBQTtHQUNBLE9BQUEsbUJBQUEsR0FBQSxTQUFBLFNBQUEsS0FBQSxTQUFBLEtBQUE7SUFDQTtJQUNBLElBQUEsYUFBQTtNQUNBLFNBQUEsS0FBQTtJQUNBLElBQUEsaUJBQUE7Ozs7O0VBS0EsU0FBQSxrQkFBQTtHQUNBLEdBQUEsVUFBQTtJQUNBLGNBQUEsQ0FBQTtJQUNBLFVBQUE7SUFDQSxPQUFBO0lBQ0EsU0FBQTs7Ozs7RUFLQSxTQUFBLG1CQUFBO0dBQ0EsR0FBQSxhQUFBO0dBQ0E7Ozs7Ozs7O0VBUUEsU0FBQSxnQkFBQSxXQUFBO0dBQ0EsSUFBQSxVQUFBLE1BQUEsR0FBQSxPQUFBO0dBQ0EsT0FBQTs7Ozs7Ozs7RUFRQSxTQUFBLGNBQUEsU0FBQTtHQUNBLElBQUEsR0FBQSxTQUFBLFFBQUEsT0FBQTtJQUNBLE9BQUE7VUFDQSxJQUFBLEdBQUEsU0FBQSxRQUFBLFlBQUE7SUFDQSxPQUFBLDBCQUFBO1VBQ0EsSUFBQSxHQUFBLFNBQUEsUUFBQSxTQUFBO0lBQ0EsT0FBQSx1QkFBQTs7R0FFQSxPQUFBOzs7Ozs7OztFQVFBLFNBQUEsMEJBQUEsU0FBQTtHQUNBLElBQUEsUUFBQSxVQUFBLEdBQUEsU0FBQSxJQUFBLFFBQUEsT0FBQTtHQUNBLE9BQUE7Ozs7Ozs7O0VBUUEsU0FBQSx1QkFBQSxTQUFBO0dBQ0EsS0FBQSxJQUFBLElBQUEsR0FBQSxJQUFBLEdBQUEsY0FBQSxRQUFBLEtBQUE7SUFDQSxJQUFBLGVBQUEsR0FBQSxjQUFBO0lBQ0EsSUFBQSxhQUFBLGVBQUEsR0FBQSxTQUFBLElBQUEsSUFBQTtLQUNBLElBQUEsUUFBQSxVQUFBLGFBQUEsUUFBQSxPQUFBOzs7R0FHQSxPQUFBOzs7Ozs7OztFQVFBLFNBQUEsd0JBQUEsS0FBQTtHQUNBLElBQUEsSUFBQSxNQUFBLEtBQUE7SUFDQSxNQUFBLElBQUEsT0FBQTs7R0FFQSxJQUFBLElBQUEsSUFBQSxTQUFBLE1BQUEsS0FBQTtJQUNBLE1BQUEsSUFBQSxPQUFBLEdBQUEsSUFBQSxTQUFBOztHQUVBLE9BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMWlCQSxDQUFBLFdBQUE7Q0FDQTs7Q0FFQSxRQUFBLE9BQUE7R0FDQSxJQUFBOzs7Q0FHQSxTQUFBLFVBQUEsY0FBQTtFQUNBLGFBQUEsZ0JBQUE7Ozs7Q0FHQSxTQUFBLFlBQUE7RUFDQSxPQUFBO0dBQ0E7SUFDQSxPQUFBO0lBQ0EsUUFBQTtLQUNBLEtBQUE7S0FDQSxZQUFBO0tBQ0EsY0FBQTtLQUNBLGFBQUE7S0FDQSxNQUFBO01BQ0EsUUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQSxDQUFBLFdBQUE7Q0FDQTs7Q0FFQSxRQUFBLE9BQUE7R0FDQSxJQUFBOzs7Q0FHQSxTQUFBLFVBQUEsY0FBQTtFQUNBLElBQUEsZ0JBQUE7RUFDQSxhQUFBLGdCQUFBLGFBQUE7Ozs7Q0FHQSxTQUFBLFlBQUE7RUFDQSxPQUFBO0dBQ0E7SUFDQSxPQUFBO0lBQ0EsUUFBQTtLQUNBLEtBQUE7S0FDQSxZQUFBO0tBQ0EsTUFBQTtNQUNBLFFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsQ0FBQSxXQUFBO0NBQ0E7O0NBRUEsUUFBQSxPQUFBO0dBQ0EsV0FBQSxtQkFBQTs7Ozs7Ozs7OztDQVVBLFNBQUEsZ0JBQUEsUUFBQSxNQUFBO0VBQ0EsSUFBQSxLQUFBOztFQUVBOzs7Ozs7RUFNQSxTQUFBLFdBQUE7R0FDQSxLQUFBLE1BQUE7OztHQUdBLE9BQUEsR0FBQTs7O0dBR0EsSUFBQSxPQUFBLFNBQUEsVUFBQTtJQUNBLE9BQUEsR0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBLENBQUEsV0FBQTtDQUNBOztDQUVBLFFBQUEsT0FBQTtHQUNBLFNBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Q0FVQSxTQUFBLHFCQUFBO0VBQ0EsZ0JBQUEsb0JBQUE7O0VBRUEsS0FBQSxPQUFBOztFQUVBLFNBQUEsYUFBQSxRQUFBO0dBQ0EsSUFBQSxlQUFBOzs7R0FHQSxPQUFBO0lBQ0EsaUJBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTs7OztHQUlBLFNBQUEsZ0JBQUEsUUFBQSxlQUFBO0lBQ0EsT0FBQSxRQUFBLFNBQUEsT0FBQTtLQUNBLGVBQUEsTUFBQSxNQUFBLE9BQUEsTUFBQTs7O0lBR0EsSUFBQSxpQkFBQSxDQUFBLGNBQUE7S0FDQSxlQUFBO0tBQ0EsbUJBQUEsVUFBQTs7Ozs7Ozs7R0FRQSxTQUFBLFlBQUE7SUFDQSxPQUFBLE9BQUE7Ozs7Ozs7O0dBUUEsU0FBQSxZQUFBLE1BQUE7SUFDQSxPQUFBLE9BQUEsU0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REEsQ0FBQSxXQUFBO0NBQ0E7O0NBRUEsUUFBQSxPQUFBO0dBQ0EsUUFBQSxVQUFBOzs7Ozs7Ozs7OztDQVdBLFNBQUEsT0FBQSxPQUFBLE1BQUEsZ0JBQUEsTUFBQSxRQUFBOzs7RUFHQSxPQUFBO0dBQ0EsT0FBQTtHQUNBLFFBQUE7R0FDQSxnQkFBQTtHQUNBLGVBQUE7R0FDQSxnQkFBQTtHQUNBLGFBQUE7R0FDQSxlQUFBO0dBQ0Esa0JBQUE7R0FDQSxxQkFBQTtHQUNBLHdCQUFBO0dBQ0EsY0FBQTtHQUNBLHlCQUFBO0dBQ0EsaUJBQUE7R0FDQSxpQkFBQTtHQUNBLFlBQUE7R0FDQSxpQkFBQTtHQUNBLG9CQUFBO0dBQ0Esb0JBQUE7R0FDQSxhQUFBO0dBQ0EsZ0JBQUE7R0FDQSxVQUFBO0dBQ0EsU0FBQTtHQUNBLFlBQUE7R0FDQSxZQUFBO0dBQ0EsbUJBQUE7R0FDQSxTQUFBOzs7Ozs7O0VBT0EsU0FBQSxVQUFBO0dBQ0EsT0FBQTtJQUNBLFNBQUE7Ozs7Ozs7O0VBUUEsU0FBQSxTQUFBLFFBQUE7R0FDQSxPQUFBLFFBQUEsbUJBQUEsWUFBQSxLQUFBO0dBQ0EsT0FBQTs7Ozs7OztFQU9BLFNBQUEsUUFBQSxRQUFBO0dBQ0EsT0FBQSxRQUFBLGtCQUFBO0dBQ0EsT0FBQTs7Ozs7Ozs7OztFQVVBLFNBQUEsTUFBQSxPQUFBLFVBQUE7R0FDQSxJQUFBLE9BQUE7SUFDQSxPQUFBO0lBQ0EsVUFBQTs7R0FFQSxPQUFBLE1BQUEsS0FBQSxpQkFBQSxjQUFBLEtBQUEsVUFBQTs7OztFQUlBLFNBQUEsU0FBQTtHQUNBLEtBQUE7Ozs7Ozs7OztFQVNBLFNBQUEsZUFBQSxpQkFBQSxhQUFBO0dBQ0EsSUFBQSxTQUFBLFNBQUE7R0FDQSxJQUFBLE9BQUE7SUFDQSxpQkFBQTtJQUNBLGFBQUE7O0dBRUEsSUFBQSxRQUFBLEtBQUE7R0FDQSxPQUFBLE1BQUEsSUFBQSxpQkFBQTtJQUNBLFFBQUEsb0JBQUEsS0FBQSxVQUFBLE9BQUE7OztFQUdBLFNBQUEsY0FBQSxPQUFBLGFBQUE7R0FDQSxJQUFBLE9BQUE7SUFDQSxhQUFBOztHQUVBLElBQUEsU0FBQSxZQUFBO0dBQ0EsT0FBQSxNQUFBLEtBQUEsaUJBQUEsd0JBQUEsUUFBQSxLQUFBLFVBQUE7Ozs7Ozs7OztFQVNBLFNBQUEsZUFBQSxPQUFBO0dBQ0EsSUFBQSxPQUFBO0lBQ0EsT0FBQTs7R0FFQSxPQUFBLE1BQUEsS0FBQSxpQkFBQSx3QkFBQSxLQUFBLFVBQUE7Ozs7Ozs7Ozs7RUFVQSxTQUFBLFlBQUEsTUFBQSxJQUFBO0dBQ0EsSUFBQSxTQUFBLFNBQUE7R0FDQSxJQUFBLFNBQUEsaUJBQUEsT0FBQSxlQUFBO0dBQ0EsT0FBQSxNQUFBLElBQUEsaUJBQUEsa0JBQUEsUUFBQTs7Ozs7Ozs7RUFRQSxTQUFBLGdCQUFBO0dBQ0EsSUFBQSxTQUFBLFNBQUE7R0FDQSxPQUFBLE1BQUEsSUFBQSxpQkFBQSxvQkFBQTs7Ozs7Ozs7RUFRQSxTQUFBLG1CQUFBO0dBQ0EsSUFBQSxTQUFBLFNBQUE7R0FDQSxPQUFBLE1BQUEsSUFBQSxpQkFBQSxtQ0FBQTs7Ozs7Ozs7OztFQVVBLFNBQUEsb0JBQUEsSUFBQSxNQUFBO0dBQ0EsSUFBQSxTQUFBLFFBQUEsU0FBQTtHQUNBLElBQUEsT0FBQTtJQUNBLE1BQUE7O0dBRUEsT0FBQSxNQUFBLElBQUEsaUJBQUEsc0JBQUE7S0FDQSxLQUFBLFVBQUEsT0FBQTs7Ozs7Ozs7Ozs7RUFXQSxTQUFBLHVCQUFBLElBQUEsTUFBQSxhQUFBO0dBQ0EsSUFBQSxTQUFBLFFBQUEsU0FBQTtHQUNBLElBQUEsT0FBQTtJQUNBLE1BQUE7SUFDQSxhQUFBOztHQUVBLE9BQUEsTUFBQSxJQUFBLGlCQUFBLHlCQUFBO0tBQ0EsS0FBQSxVQUFBLE9BQUE7Ozs7Ozs7OztFQVNBLFNBQUEsYUFBQSxNQUFBO0dBQ0EsSUFBQSxTQUFBLFFBQUEsU0FBQTtHQUNBLElBQUEsT0FBQTtJQUNBLE1BQUE7O0dBRUEsT0FBQSxNQUFBLEtBQUEsaUJBQUE7S0FDQSxLQUFBLFVBQUEsT0FBQTs7Ozs7Ozs7Ozs7RUFXQSxTQUFBLHdCQUFBLFFBQUEsU0FBQSxNQUFBO0dBQ0EsSUFBQSxTQUFBLFFBQUEsU0FBQTtHQUNBLElBQUEsT0FBQTtJQUNBLE1BQUE7SUFDQSxRQUFBO0lBQ0EsYUFBQTs7R0FFQSxPQUFBLE1BQUEsS0FBQSxpQkFBQTtLQUNBLEtBQUEsVUFBQSxPQUFBOzs7Ozs7OztFQVFBLFNBQUEsa0JBQUE7R0FDQSxJQUFBLFNBQUEsU0FBQTtHQUNBLE9BQUEsTUFBQSxJQUFBLGlCQUFBLHNCQUFBOzs7Ozs7OztFQVFBLFNBQUEsa0JBQUE7R0FDQSxJQUFBLFNBQUEsU0FBQTtHQUNBLE9BQUEsTUFBQSxJQUFBLGlCQUFBLDRCQUFBOzs7Ozs7Ozs7RUFTQSxTQUFBLFdBQUEsVUFBQTtHQUNBLElBQUEsU0FBQSxTQUFBO0dBQ0EsT0FBQSxlQUFBO0dBQ0EsT0FBQSxRQUFBLFlBQUE7R0FDQSxJQUFBLE9BQUE7SUFDQSxVQUFBOzs7R0FHQSxJQUFBLFVBQUEsTUFBQSxLQUFBLGlCQUFBO0lBQ0EsS0FBQSxVQUFBLE9BQUE7O0dBRUEsUUFBQSxLQUFBLFNBQUEsS0FBQTtJQUNBLElBQUEsT0FBQSxTQUFBLE9BQUE7SUFDQSxJQUFBLFdBQUEsWUFBQSxPQUFBO0lBQ0EsaUJBQUEsVUFBQSxJQUFBLE1BQUE7TUFDQSxTQUFBLEtBQUE7SUFDQSxLQUFBLE1BQUE7OztHQUdBLE9BQUE7Ozs7OztFQU1BLFNBQUEsaUJBQUEsVUFBQSxTQUFBLFdBQUE7R0FDQSxJQUFBLE9BQUEsSUFBQSxLQUFBLENBQUEsVUFBQSxDQUFBLE1BQUE7R0FDQSxPQUFBLE1BQUE7Ozs7Ozs7Ozs7RUFVQSxTQUFBLGdCQUFBLFNBQUEsU0FBQTtHQUNBLElBQUEsU0FBQSxRQUFBLFNBQUE7R0FDQSxJQUFBLE9BQUE7SUFDQSxVQUFBOztHQUVBLFFBQUEsUUFBQSxTQUFBLFFBQUE7SUFDQSxLQUFBLFNBQUEsS0FBQTtLQUNBLGVBQUEsUUFBQTtLQUNBLE9BQUEsU0FBQSxRQUFBLE9BQUE7S0FDQSxRQUFBOzs7R0FHQSxPQUFBLE1BQUEsS0FBQSxpQkFBQTtJQUNBLEtBQUEsVUFBQSxPQUFBOzs7Ozs7OztFQVFBLFNBQUEsa0JBQUEsUUFBQTs7Ozs7Ozs7O0VBU0EsU0FBQSxxQkFBQTtHQUNBLElBQUEsU0FBQSxTQUFBO0dBQ0EsT0FBQSxNQUFBLElBQUEsaUJBQUEsK0NBQUE7Ozs7Ozs7Ozs7O0VBV0EsU0FBQSxtQkFBQSxTQUFBLGlCQUFBO0dBQ0EsSUFBQSxTQUFBLFFBQUEsU0FBQTtHQUNBLElBQUEsT0FBQTtJQUNBLGlCQUFBOztHQUVBLGdCQUFBLFFBQUEsU0FBQSxnQkFBQTtJQUNBLEtBQUEsZ0JBQUEsS0FBQTtLQUNBLGdCQUFBO0tBQ0EsY0FBQSxRQUFBO0tBQ0EsVUFBQSxRQUFBO0tBQ0EsT0FBQSxTQUFBLFFBQUEsT0FBQTtLQUNBLFNBQUEsUUFBQTs7O0dBR0EsT0FBQSxNQUFBLEtBQUEsaUJBQUE7SUFDQSxLQUFBLFVBQUEsT0FBQTs7Ozs7Ozs7RUFRQSxTQUFBLGNBQUE7R0FDQSxJQUFBLFNBQUEsU0FBQTtHQUNBLE9BQUEsTUFBQSxJQUFBLGlCQUFBLGlCQUFBOzs7Ozs7OztFQVFBLFNBQUEsaUJBQUE7R0FDQSxJQUFBLFNBQUEsU0FBQTtHQUNBLE9BQUEsTUFBQSxJQUFBLGlCQUFBLHFCQUFBOzs7Ozs7OztFQVFBLFNBQUEsV0FBQTtHQUNBLElBQUEsU0FBQSxTQUFBO0dBQ0EsT0FBQSxNQUFBLElBQUEsaUJBQUEsY0FBQTs7Ozs7Ozs7O0VBU0EsU0FBQSxRQUFBLE1BQUE7R0FDQSxJQUFBLFNBQUEsUUFBQSxTQUFBO0dBQ0EsSUFBQSxPQUFBO0lBQ0EsT0FBQSxLQUFBO0lBQ0EsV0FBQSxLQUFBO0lBQ0EsVUFBQSxLQUFBO0lBQ0EsTUFBQSxLQUFBOztHQUVBLE9BQUEsTUFBQSxLQUFBLGlCQUFBO0lBQ0EsS0FBQSxVQUFBLE9BQUE7Ozs7Ozs7OztFQVNBLFNBQUEsV0FBQSxNQUFBO0dBQ0EsSUFBQSxTQUFBLFFBQUEsU0FBQTtHQUNBLElBQUEsT0FBQTtJQUNBLFdBQUEsS0FBQTtJQUNBLFVBQUEsS0FBQTtJQUNBLE1BQUEsS0FBQTs7R0FFQSxPQUFBLE1BQUEsSUFBQSxpQkFBQSxnQkFBQSxLQUFBO0lBQ0EsS0FBQSxVQUFBLE9BQUE7Ozs7Ozs7OztFQVNBLFNBQUEsV0FBQSxJQUFBO0dBQ0EsSUFBQSxTQUFBLFNBQUE7R0FDQSxPQUFBLE1BQUEsT0FBQSxpQkFBQSxnQkFBQSxJQUFBOzs7Ozs7Ozs7RUFTQSxTQUFBLFFBQUEsTUFBQSxNQUFBO0dBQ0EsSUFBQSxTQUFBLFFBQUEsU0FBQTtHQUNBLElBQUEsT0FBQTtJQUNBLE1BQUE7SUFDQSxNQUFBOztHQUVBLE9BQUEsTUFBQSxLQUFBLGlCQUFBO0lBQ0EsS0FBQSxVQUFBLE9BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaGNBLENBQUEsV0FBQTtDQUNBOztDQUVBLFFBQUEsT0FBQSxlQUFBO0dBQ0EsUUFBQSxVQUFBOzs7Ozs7O0NBT0EsU0FBQSxTQUFBOzs7RUFHQSxPQUFBO0dBQ0EsYUFBQTtHQUNBLFlBQUE7R0FDQSxPQUFBO0dBQ0EsUUFBQTs7OztFQUlBLFNBQUEsY0FBQTtHQUNBLE9BQUE7SUFDQTtLQUNBLElBQUE7S0FDQSxNQUFBO0tBQ0EsV0FBQTtLQUNBLFVBQUEsQ0FBQTtLQUNBLFdBQUE7S0FDQSxXQUFBO01BQ0EsU0FBQTtNQUNBLFVBQUE7TUFDQSxVQUFBO01BQ0EsV0FBQTs7T0FFQTtLQUNBLElBQUE7S0FDQSxNQUFBO0tBQ0EsV0FBQTtLQUNBLFVBQUEsQ0FBQTtLQUNBLFdBQUE7S0FDQSxXQUFBO01BQ0EsU0FBQTtNQUNBLFVBQUE7TUFDQSxVQUFBO01BQ0EsV0FBQTs7T0FFQTtLQUNBLElBQUE7S0FDQSxNQUFBO0tBQ0EsV0FBQTtLQUNBLFVBQUEsQ0FBQTtLQUNBLFdBQUE7S0FDQSxXQUFBO01BQ0EsU0FBQTtNQUNBLFVBQUE7TUFDQSxVQUFBO01BQ0EsV0FBQTs7T0FFQTtLQUNBLElBQUE7S0FDQSxNQUFBO0tBQ0EsV0FBQTtLQUNBLFVBQUEsQ0FBQTtLQUNBLFdBQUE7S0FDQSxXQUFBO01BQ0EsU0FBQTtNQUNBLFVBQUE7TUFDQSxVQUFBO01BQ0EsV0FBQTs7T0FFQTtLQUNBLElBQUE7S0FDQSxNQUFBO0tBQ0EsV0FBQTtLQUNBLFVBQUEsQ0FBQTtLQUNBLFdBQUE7S0FDQSxXQUFBO01BQ0EsU0FBQTtNQUNBLFVBQUE7TUFDQSxVQUFBO01BQ0EsV0FBQTs7Ozs7OztFQU9BLFNBQUEsYUFBQTtHQUNBLE9BQUE7SUFDQTtLQUNBLElBQUE7S0FDQSxNQUFBO0tBQ0EsYUFBQTtLQUNBLFFBQUE7S0FDQSxPQUFBO0tBQ0EsWUFBQTtLQUNBLFlBQUE7S0FDQSxTQUFBO0tBQ0EsY0FBQTs7SUFFQTtLQUNBLElBQUE7S0FDQSxNQUFBO0tBQ0EsYUFBQTtLQUNBLFFBQUE7S0FDQSxPQUFBO0tBQ0EsWUFBQTtLQUNBLFlBQUE7S0FDQSxTQUFBO0tBQ0EsY0FBQTs7SUFFQTtLQUNBLElBQUE7S0FDQSxNQUFBO0tBQ0EsYUFBQTtLQUNBLFFBQUE7S0FDQSxPQUFBO0tBQ0EsWUFBQSxDQUFBO0tBQ0EsWUFBQSxDQUFBO0tBQ0EsU0FBQTtLQUNBLGNBQUE7Ozs7OztFQU1BLFNBQUEsUUFBQTs7Ozs7RUFLQSxTQUFBLFNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcklBLENBQUEsV0FBQTtJQUNBOzs7SUFHQSxRQUFBLE9BQUE7U0FDQSwyQkFBQSxTQUFBLGlCQUFBO1lBQ0EsZ0JBQUEsV0FBQTtnQkFDQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDUEEsQ0FBQSxXQUFBO0NBQ0E7O0NBRUEsUUFBQSxPQUFBO0dBQ0EsV0FBQSx1QkFBQTs7Ozs7Ozs7OztDQVVBLFNBQUEsb0JBQUEsTUFBQSxXQUFBLFFBQUEsV0FBQSxLQUFBO0VBQ0EsSUFBQSxLQUFBOzs7RUFHQSxJQUFBLFdBQUE7RUFDQSxJQUFBOzs7RUFHQSxHQUFBLFVBQUE7RUFDQSxHQUFBLGFBQUE7RUFDQSxHQUFBLFFBQUEsVUFBQTtFQUNBLEdBQUEsUUFBQSxVQUFBO0VBQ0EsR0FBQSxVQUFBLFVBQUE7RUFDQSxHQUFBLFFBQUEsVUFBQTtFQUNBLEdBQUEsa0JBQUEsVUFBQTtFQUNBLEdBQUEscUJBQUEsVUFBQTtFQUNBLEdBQUEsZ0JBQUEsVUFBQTtFQUNBLEdBQUEsY0FBQTtFQUNBLEdBQUEsYUFBQSxVQUFBO0VBQ0EsR0FBQSxlQUFBOztFQUVBOzs7RUFHQSxTQUFBLFdBQUE7R0FDQSxHQUFBLFVBQUE7R0FDQSxXQUFBOztHQUVBO0dBQ0E7OztHQUdBLE9BQUEsSUFBQSx3QkFBQSxTQUFBLE9BQUEsY0FBQTtJQUNBLE9BQUEsT0FBQSxXQUFBO0tBQ0EsSUFBQSxDQUFBLEdBQUEsWUFBQTtNQUNBOztLQUVBLFVBQUEscUJBQUEsYUFBQTs7O0dBR0EsT0FBQSxJQUFBLFVBQUEsU0FBQSxPQUFBLE9BQUE7SUFDQSxXQUFBOzs7OztFQUtBLFNBQUEsZ0JBQUE7R0FDQSxVQUFBLGdCQUFBLEtBQUEsV0FBQTtJQUNBOzs7OztFQUtBLFNBQUEsZUFBQTtHQUNBLFVBQUEsZUFBQSxLQUFBLFdBQUE7SUFDQSxHQUFBLFVBQUEsVUFBQTtJQUNBOzs7OztFQUtBLFNBQUEsY0FBQTtHQUNBLEdBQUEsVUFBQTtHQUNBLFVBQUEsY0FBQSxLQUFBLFdBQUE7SUFDQSxHQUFBLFVBQUE7Ozs7O0VBS0EsU0FBQSxjQUFBO0dBQ0EsSUFBQSxFQUFBLFlBQUEsR0FBQTtJQUNBLEdBQUEsVUFBQTs7Ozs7RUFLQSxTQUFBLGVBQUE7R0FDQSxHQUFBLGFBQUEsQ0FBQSxHQUFBO0dBQ0EsSUFBQSxTQUFBLElBQUE7R0FDQSxRQUFBO0lBQ0EsU0FBQSx1QkFBQTtLQUNBLElBQUEsb0VBQUEsV0FBQTtLQUNBLElBQUEsVUFBQTtLQUNBLFNBQUEsT0FBQSxTQUFBOzs7OztFQUtBLFVBQUEsTUFBQSxXQUFBO0dBQ0EsSUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2R0EsQ0FBQSxXQUFBO0NBQ0E7O0NBRUEsUUFBQSxPQUFBO0dBQ0EsSUFBQTs7O0NBR0EsU0FBQSxVQUFBLGNBQUE7RUFDQSxJQUFBLGdCQUFBO0VBQ0EsYUFBQSxnQkFBQSxhQUFBOzs7O0NBR0EsU0FBQSxZQUFBO0VBQ0EsT0FBQTtHQUNBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7S0FDQSxLQUFBO0tBQ0EsWUFBQTtLQUNBLGNBQUE7S0FDQSxhQUFBO0tBQ0EsTUFBQTtNQUNBLFFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkEsQ0FBQSxXQUFBO0NBQ0E7O0NBRUEsUUFBQSxPQUFBO0dBQ0EsUUFBQSxhQUFBOzs7Ozs7Ozs7O0NBVUEsU0FBQSxVQUFBLE1BQUEsSUFBQSxRQUFBLEtBQUEsUUFBQTs7RUFFQSxJQUFBLFdBQUE7RUFDQSxJQUFBLG1CQUFBO0VBQ0EsSUFBQSxVQUFBO0VBQ0EsSUFBQSxRQUFBO0VBQ0EsSUFBQSxRQUFBO0VBQ0EsSUFBQSxRQUFBOztFQUVBLElBQUEsYUFBQTtFQUNBLElBQUEsYUFBQTs7RUFFQTtFQUNBOzs7RUFHQSxPQUFBO0dBQ0EsT0FBQTtHQUNBLE9BQUE7R0FDQSxTQUFBO0dBQ0EsT0FBQTtHQUNBLGVBQUE7R0FDQSxjQUFBO0dBQ0EsaUJBQUE7R0FDQSxvQkFBQTtHQUNBLGFBQUE7R0FDQSxlQUFBO0dBQ0EsWUFBQTtHQUNBLHNCQUFBOzs7Ozs7O0VBT0EsU0FBQSxXQUFBO0dBQ0EsT0FBQTs7Ozs7OztFQU9BLFNBQUEsV0FBQTtHQUNBLE9BQUE7Ozs7Ozs7RUFPQSxTQUFBLGFBQUE7R0FDQSxPQUFBOzs7Ozs7O0VBT0EsU0FBQSxXQUFBO0dBQ0EsT0FBQTs7Ozs7Ozs7O0VBU0EsU0FBQSxjQUFBLE1BQUEsSUFBQTtHQUNBLElBQUEsQ0FBQSxNQUFBO0lBQ0EsT0FBQSxTQUFBLFNBQUEsTUFBQSxPQUFBLE1BQUE7TUFDQSxNQUFBLE9BQUEsTUFBQSxZQUFBO0lBQ0EsS0FBQSxTQUFBOztHQUVBLElBQUEsVUFBQSxPQUFBLFlBQUEsTUFBQTtHQUNBLFFBQUEsS0FBQSxTQUFBLEtBQUE7SUFDQSxXQUFBLElBQUEsS0FBQTtJQUNBO0lBQ0E7TUFDQSxTQUFBLEtBQUE7SUFDQSxLQUFBLE1BQUE7O0dBRUEsT0FBQTs7Ozs7OztFQU9BLFNBQUEsZUFBQTtHQUNBLElBQUEsVUFBQSxPQUFBO0dBQ0EsUUFBQSxLQUFBLFNBQUEsS0FBQTtJQUNBLGdCQUFBLElBQUEsS0FBQTtJQUNBO01BQ0EsU0FBQSxLQUFBO0lBQ0EsS0FBQSxNQUFBOztHQUVBLE9BQUE7Ozs7RUFJQSxTQUFBLGtCQUFBO0dBQ0EsUUFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBLEVBQUEsTUFBQSxNQUFBLElBQUE7SUFDQSxPQUFBO0lBQ0EsZUFBQTtJQUNBLFFBQUE7S0FDQSxPQUFBLEVBQUEsT0FBQSxHQUFBLFlBQUEsU0FBQSxTQUFBO01BQ0EsU0FBQSxRQUFBLFNBQUE7O0tBRUEsT0FBQTtNQUNBLE1BQUEsRUFBQSxNQUFBLElBQUEsTUFBQTtNQUNBLElBQUEsRUFBQSxNQUFBLElBQUEsTUFBQTs7S0FFQSxPQUFBLEVBQUEsTUFBQSxJQUFBLE1BQUE7Ozs7OztFQU1BLFNBQUEsa0JBQUE7R0FDQSxNQUFBLFNBQUE7R0FDQSxNQUFBLFNBQUE7R0FDQSxNQUFBLE9BQUE7SUFDQSxDQUFBOzs7OztFQUtBLFNBQUEsZ0JBQUE7R0FDQSxJQUFBLENBQUEsVUFBQTs7R0FFQSxJQUFBLFNBQUE7R0FDQSxJQUFBLFlBQUE7OztHQUdBLEtBQUEsSUFBQSxJQUFBLEdBQUEsSUFBQSxTQUFBLFFBQUEsS0FBQTtJQUNBLElBQUEsWUFBQSxTQUFBO0lBQ0EsT0FBQSxLQUFBLFVBQUE7SUFDQSxJQUFBLFFBQUEsb0JBQUE7OztJQUdBLEtBQUEsSUFBQSxJQUFBLEdBQUEsSUFBQSxVQUFBLGNBQUEsUUFBQSxLQUFBO0tBQ0EsSUFBQSxlQUFBLFVBQUEsY0FBQTtLQUNBLFVBQUEsS0FBQSxhQUFBO0tBQ0EsdUJBQUEsY0FBQTs7Ozs7R0FLQSwyQkFBQTtHQUNBLDhCQUFBOzs7O0VBSUEsU0FBQSxnQkFBQSxNQUFBO0dBQ0EsS0FBQSxJQUFBLElBQUEsR0FBQSxJQUFBLEtBQUEsUUFBQSxLQUFBO0lBQ0EsSUFBQSxTQUFBLEtBQUE7O0lBRUEsSUFBQSxRQUFBLGVBQUEsT0FBQSxLQUFBOztJQUVBLE9BQUEsU0FBQTtLQUNBLFNBQUE7S0FDQSxTQUFBLENBQUEsS0FBQSxLQUFBO0tBQ0EsVUFBQTtLQUNBLE9BQUE7OztJQUdBLFFBQUEsT0FBQSxNQUFBOzs7Ozs7Ozs7O0VBVUEsU0FBQSxvQkFBQSxXQUFBO0dBQ0EsSUFBQSxRQUFBO0dBQ0EsSUFBQSxTQUFBLHNCQUFBLFVBQUE7R0FDQSxJQUFBLFVBQUEsQ0FBQSxHQUFBO0lBQ0EsUUFBQSxNQUFBO1VBQ0E7SUFDQSxNQUFBLEtBQUEsVUFBQTtJQUNBLE1BQUEsT0FBQSxVQUFBO0lBQ0EsTUFBQSxVQUFBO0lBQ0EsTUFBQSxZQUFBO0lBQ0EsTUFBQSxnQkFBQTtJQUNBLE1BQUEsZ0JBQUE7SUFDQSxNQUFBLEtBQUE7O0dBRUEsTUFBQSxPQUFBLFVBQUE7R0FDQSxPQUFBOzs7Ozs7Ozs7RUFTQSxTQUFBLHVCQUFBLGNBQUEsT0FBQTtHQUNBLElBQUEsV0FBQTtHQUNBLElBQUEsU0FBQSxzQkFBQSxNQUFBO0dBQ0EsSUFBQSxTQUFBLHlCQUFBLGFBQUEsSUFBQSxNQUFBO0dBQ0EsSUFBQSxVQUFBLENBQUEsR0FBQTtJQUNBLFdBQUEsTUFBQSxRQUFBLGNBQUE7VUFDQTtJQUNBLFNBQUEsS0FBQSxhQUFBO0lBQ0EsU0FBQSxVQUFBO0lBQ0EsTUFBQSxjQUFBLEtBQUE7O0dBRUEsU0FBQSxPQUFBLGFBQUE7R0FDQSxPQUFBOzs7Ozs7OztFQVFBLFNBQUEsc0JBQUEsSUFBQTtHQUNBLEtBQUEsSUFBQSxJQUFBLEdBQUEsSUFBQSxNQUFBLFFBQUEsS0FBQTtJQUNBLElBQUEsTUFBQSxHQUFBLE1BQUEsSUFBQTtLQUNBLE9BQUE7OztHQUdBLE9BQUEsQ0FBQTs7Ozs7Ozs7O0VBU0EsU0FBQSx5QkFBQSxJQUFBLEtBQUE7R0FDQSxJQUFBLFNBQUEsc0JBQUE7R0FDQSxJQUFBLFVBQUEsQ0FBQSxHQUFBLE9BQUEsQ0FBQTtHQUNBLEtBQUEsSUFBQSxJQUFBLEdBQUEsSUFBQSxNQUFBLFFBQUEsY0FBQSxRQUFBLEtBQUE7SUFDQSxJQUFBLE1BQUEsUUFBQSxjQUFBLEdBQUEsTUFBQSxJQUFBO0tBQ0EsT0FBQTs7O0dBR0EsT0FBQSxDQUFBOzs7Ozs7O0VBT0EsU0FBQSwyQkFBQSxNQUFBO0dBQ0EsSUFBQSxTQUFBO0dBQ0EsS0FBQSxJQUFBLElBQUEsR0FBQSxJQUFBLE1BQUEsUUFBQSxLQUFBO0lBQ0EsSUFBQSxRQUFBLE1BQUE7SUFDQSxJQUFBLEtBQUEsUUFBQSxNQUFBLE9BQUEsQ0FBQSxHQUFBO0tBQ0EsT0FBQSxLQUFBOzs7R0FHQSxLQUFBLElBQUEsSUFBQSxHQUFBLElBQUEsT0FBQSxRQUFBLEtBQUE7SUFDQSxNQUFBLE9BQUEsT0FBQSxJQUFBOzs7Ozs7OztFQVFBLFNBQUEsOEJBQUEsTUFBQTs7R0FFQSxJQUFBLFNBQUE7R0FDQSxLQUFBLElBQUEsSUFBQSxHQUFBLElBQUEsTUFBQSxRQUFBLEtBQUE7SUFDQSxJQUFBLFFBQUEsTUFBQTtJQUNBLEtBQUEsSUFBQSxJQUFBLEdBQUEsSUFBQSxNQUFBLGNBQUEsUUFBQSxLQUFBO0tBQ0EsSUFBQSxXQUFBLE1BQUEsY0FBQTtLQUNBLElBQUEsS0FBQSxRQUFBLFNBQUEsT0FBQSxDQUFBLEdBQUE7TUFDQSxPQUFBLEtBQUEsRUFBQSxPQUFBLEdBQUEsVUFBQTs7OztHQUlBLEtBQUEsSUFBQSxJQUFBLEdBQUEsSUFBQSxPQUFBLFFBQUEsS0FBQTtJQUNBLE1BQUEsT0FBQSxHQUFBLE9BQUEsT0FBQSxPQUFBLEdBQUEsVUFBQTs7Ozs7O0VBTUEsU0FBQSxnQkFBQSxXQUFBO0dBQ0EsVUFBQSxjQUFBLFFBQUEsU0FBQSxjQUFBO0lBQ0EsYUFBQSxVQUFBLFVBQUE7O0dBRUE7Ozs7RUFJQSxTQUFBLG1CQUFBLFdBQUE7R0FDQSwyQkFBQTtHQUNBOzs7O0VBSUEsU0FBQSwyQkFBQSxXQUFBO0dBQ0EsSUFBQSxVQUFBO0dBQ0EsSUFBQSxXQUFBOztHQUVBLFVBQUEsY0FBQSxRQUFBLFNBQUEsVUFBQTtJQUNBLElBQUEsU0FBQSxTQUFBO0tBQ0EsV0FBQTtXQUNBO0tBQ0EsVUFBQTs7OztHQUlBLElBQUEsVUFBQTtJQUNBLFVBQUEsVUFBQTtVQUNBO0lBQ0EsVUFBQSxVQUFBOzs7R0FHQSxJQUFBLFlBQUEsU0FBQTtJQUNBLFVBQUEsZ0JBQUE7VUFDQTtJQUNBLFVBQUEsZ0JBQUE7Ozs7O0VBS0EsU0FBQSxjQUFBO0dBQ0EsSUFBQSxRQUFBLEdBQUE7OztHQUdBLElBQUEsb0JBQUE7SUFDQSxJQUFBLGVBQUEsYUFBQSxNQUFBOztJQUVBLElBQUEsTUFBQSxRQUFBLFNBQUE7S0FDQSxNQUFBLE1BQUEsT0FBQSxPQUFBLE1BQUEsT0FBQSxNQUFBLEtBQUE7UUFDQSxNQUFBLE1BQUEsT0FBQSxNQUFBLEtBQUEsTUFBQTtLQUNBLE1BQUEsTUFBQSxLQUFBLE9BQUEsTUFBQSxPQUFBLE1BQUEsR0FBQTtRQUNBLE1BQUEsTUFBQSxPQUFBLE1BQUEsR0FBQSxNQUFBOzs7U0FHQSxJQUFBLE1BQUEsUUFBQSxTQUFBO0tBQ0EsTUFBQSxRQUFBLE9BQUEsTUFBQSxPQUFBLE1BQUE7UUFDQSxNQUFBLE1BQUEsT0FBQSxNQUFBLE1BQUE7OztJQUdBLG9CQUFBLEtBQUEsV0FBQTtLQUNBLE1BQUE7T0FDQSxXQUFBO0tBQ0EsTUFBQTs7O0dBR0EsT0FBQSxNQUFBOzs7O0VBSUEsU0FBQSxtQkFBQTtHQUNBLElBQUEsTUFBQSxRQUFBLFNBQUE7SUFDQSxJQUFBLE1BQUEsT0FBQSxNQUFBLE9BQUE7S0FDQSxPQUFBOzs7R0FHQSxJQUFBLE1BQUEsUUFBQSxTQUFBOztJQUVBLElBQUEsV0FBQSxNQUFBLE9BQUEsTUFBQSxLQUFBO0lBQ0EsSUFBQSxXQUFBLE1BQUEsT0FBQSxNQUFBLEtBQUE7SUFDQSxJQUFBLFNBQUEsTUFBQSxPQUFBLE1BQUEsR0FBQTtJQUNBLElBQUEsU0FBQSxNQUFBLE9BQUEsTUFBQSxHQUFBOztJQUVBLElBQUEsWUFBQSxZQUFBLFVBQUEsUUFBQSxPQUFBO0lBQ0EsSUFBQSxZQUFBLENBQUEsWUFBQSxVQUFBLENBQUEsUUFBQSxPQUFBOztHQUVBLElBQUEsTUFBQSxRQUFBLFNBQUE7O0lBRUEsSUFBQSxNQUFBLE9BQUEsTUFBQSxNQUFBO0tBQ0EsT0FBQTs7OztHQUlBLE9BQUE7Ozs7RUFJQSxTQUFBLG9CQUFBOztHQUVBLElBQUEsTUFBQTs7R0FFQSxJQUFBLE1BQUEsUUFBQSxTQUFBO0lBQ0EsT0FBQSxTQUFBLFNBQUEsTUFBQSxPQUFBLE1BQUE7TUFDQSxNQUFBLE9BQUEsTUFBQSxZQUFBO0lBQ0EsS0FBQSxTQUFBO1VBQ0EsSUFBQSxNQUFBLFFBQUEsT0FBQTtJQUNBLE9BQUE7SUFDQSxLQUFBLFNBQUE7VUFDQSxJQUFBLE1BQUEsUUFBQSxTQUFBO0lBQ0EsT0FBQSxNQUFBLE1BQUEsS0FBQTtJQUNBLEtBQUEsTUFBQSxNQUFBLEdBQUE7VUFDQSxJQUFBLE1BQUEsUUFBQSxTQUFBO0lBQ0EsT0FBQSxNQUFBLE1BQUEsUUFBQSxTQUFBLEdBQUEsU0FBQTtJQUNBLEtBQUEsTUFBQSxNQUFBLFFBQUEsSUFBQSxHQUFBLFNBQUE7OztHQUdBLElBQUEsVUFBQSxjQUFBLE1BQUE7R0FDQSxRQUFBLEtBQUEsV0FBQTtJQUNBLElBQUEsTUFBQSxRQUFBLFNBQUE7S0FDQTs7O0dBR0EsT0FBQTs7OztFQUlBLFNBQUEsZ0JBQUE7R0FDQTs7OztFQUlBLFNBQUEseUJBQUE7R0FDQSxNQUFBLGdCQUFBO0dBQ0EsSUFBQSxDQUFBLFVBQUE7O0dBRUEsU0FBQSxRQUFBLFNBQUEsV0FBQTtJQUNBLFVBQUEsY0FBQSxRQUFBLFNBQUEsY0FBQTtLQUNBLElBQUEsVUFBQTtNQUNBLElBQUEsYUFBQSxTQUFBLEdBQUE7TUFDQSxXQUFBLGFBQUEsU0FBQSxHQUFBOztLQUVBLGFBQUEsU0FBQSxRQUFBLFNBQUEsU0FBQTtNQUNBLElBQUEsVUFBQSxPQUFBLEtBQUEsUUFBQSxXQUFBLEtBQUEsTUFBQTtNQUNBLElBQUEsVUFBQSxPQUFBLEtBQUEsUUFBQSxXQUFBLEtBQUEsTUFBQTtNQUNBLElBQUEsS0FBQSxJQUFBLFdBQUEsS0FBQSxJQUFBLFVBQUE7T0FDQSxRQUFBLEtBQUEsUUFBQTtPQUNBLFFBQUEsWUFBQSxRQUFBOzs7S0FHQSxNQUFBLGNBQUEsS0FBQSxRQUFBOzs7Ozs7RUFNQSxTQUFBLGdCQUFBO0dBQ0EsbUJBQUE7R0FDQSxJQUFBLENBQUEsU0FBQSxVQUFBLENBQUEsT0FBQSxLQUFBLFNBQUEsUUFBQTs7R0FFQSxLQUFBLElBQUEsSUFBQSxHQUFBLElBQUEsU0FBQSxRQUFBLEtBQUE7SUFDQSxJQUFBLFlBQUEsU0FBQTtJQUNBLElBQUEsQ0FBQSxpQkFBQSxVQUFBLEtBQUE7SUFDQSxJQUFBLFFBQUEsYUFBQTs7SUFFQSxLQUFBLElBQUEsSUFBQSxHQUFBLElBQUEsVUFBQSxjQUFBLFFBQUEsS0FBQTtLQUNBLElBQUEsZUFBQSxVQUFBLGNBQUE7S0FDQSxJQUFBLENBQUEsb0JBQUEsYUFBQSxJQUFBLFVBQUEsS0FBQTtLQUNBLElBQUEsV0FBQSxnQkFBQSxjQUFBOztLQUVBLEtBQUEsSUFBQSxJQUFBLEdBQUEsSUFBQSxhQUFBLFNBQUEsUUFBQSxLQUFBO01BQ0EsSUFBQSxVQUFBLGFBQUEsU0FBQTtNQUNBLElBQUEsQ0FBQSxZQUFBLFVBQUE7TUFDQSxTQUFBLFNBQUEsS0FBQTs7OztHQUlBOzs7Ozs7OztFQVFBLFNBQUEsaUJBQUEsSUFBQTtHQUNBLE9BQUEsTUFBQSxzQkFBQSxLQUFBOzs7Ozs7Ozs7RUFTQSxTQUFBLG9CQUFBLElBQUEsS0FBQTtHQUNBLElBQUEsU0FBQSxzQkFBQTtHQUNBLElBQUEsU0FBQSx5QkFBQSxJQUFBO0dBQ0EsT0FBQSxNQUFBLFFBQUEsY0FBQSxRQUFBOzs7Ozs7OztFQVFBLFNBQUEsYUFBQSxXQUFBO0dBQ0EsSUFBQSxRQUFBO0dBQ0EsaUJBQUEsS0FBQTtHQUNBLE1BQUEsS0FBQSxVQUFBO0dBQ0EsTUFBQSxPQUFBLFVBQUE7R0FDQSxNQUFBLGdCQUFBO0dBQ0EsT0FBQTs7Ozs7Ozs7O0VBU0EsU0FBQSxnQkFBQSxjQUFBLE9BQUE7R0FDQSxJQUFBLFdBQUE7R0FDQSxNQUFBLGNBQUEsS0FBQTtHQUNBLFNBQUEsS0FBQSxhQUFBO0dBQ0EsU0FBQSxPQUFBLGFBQUE7R0FDQSxTQUFBLFdBQUE7R0FDQSxPQUFBOzs7Ozs7OztFQVFBLFNBQUEsWUFBQSxTQUFBO0dBQ0EsSUFBQSxDQUFBLFlBQUEsVUFBQSxPQUFBO0dBQ0EsSUFBQSxDQUFBLGNBQUEsVUFBQSxPQUFBO0dBQ0EsT0FBQTs7Ozs7Ozs7RUFRQSxTQUFBLFlBQUEsU0FBQTtHQUNBLElBQUEsTUFBQSxRQUFBLFNBQUE7SUFDQSxJQUFBLFFBQUEsU0FBQSxTQUFBLE1BQUEsT0FBQSxNQUFBO01BQ0EsTUFBQSxPQUFBLE1BQUE7SUFDQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFFBQUE7SUFDQSxJQUFBLENBQUEsS0FBQSxRQUFBLFFBQUE7S0FDQSxPQUFBOztVQUVBLElBQUEsTUFBQSxRQUFBLFNBQUE7SUFDQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFFBQUE7SUFDQSxJQUFBLENBQUEsS0FBQSxVQUFBLE1BQUEsTUFBQSxNQUFBLE1BQUEsTUFBQSxLQUFBO0tBQ0EsT0FBQTs7VUFFQSxJQUFBLE1BQUEsUUFBQSxTQUFBO0lBQ0EsSUFBQSxNQUFBLGNBQUEsUUFBQSxRQUFBLE9BQUEsQ0FBQSxHQUFBO0tBQ0EsT0FBQTs7O0dBR0EsT0FBQTs7Ozs7Ozs7RUFRQSxTQUFBLGNBQUEsU0FBQTtHQUNBLElBQUEsT0FBQSxLQUFBLFNBQUEsV0FBQSxHQUFBO0lBQ0EsT0FBQTs7O0dBR0EsS0FBQSxJQUFBLElBQUEsR0FBQSxJQUFBLFFBQUEsZUFBQSxRQUFBLEtBQUE7SUFDQSxJQUFBLENBQUEsYUFBQSxRQUFBLGVBQUEsS0FBQTtLQUNBLE9BQUE7OztHQUdBLE9BQUE7Ozs7Ozs7O0VBUUEsU0FBQSxhQUFBLFVBQUE7R0FDQSxJQUFBLFNBQUEsUUFBQSxTQUFBLGNBQUE7O0dBRUEsSUFBQSxDQUFBLE9BQUEsU0FBQTtJQUNBLE9BQUE7O0dBRUEsSUFBQSxRQUFBLFNBQUEsT0FBQSxPQUFBO0dBQ0EsSUFBQSxPQUFBLFlBQUEsS0FBQTtJQUNBLElBQUEsU0FBQSxTQUFBLE9BQUE7S0FDQSxPQUFBOztVQUVBLElBQUEsT0FBQSxZQUFBLEtBQUE7SUFDQSxJQUFBLFNBQUEsU0FBQSxPQUFBO0tBQ0EsT0FBQTs7VUFFQSxJQUFBLE9BQUEsWUFBQSxLQUFBO0lBQ0EsSUFBQSxTQUFBLFNBQUEsT0FBQTtLQUNBLE9BQUE7OztHQUdBLE9BQUE7Ozs7Ozs7O0VBUUEsU0FBQSxlQUFBLFNBQUE7O0dBRUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxRQUFBOztHQUVBLElBQUEsTUFBQSxRQUFBLE9BQUE7O0lBRUEsSUFBQSxNQUFBO0lBQ0EsSUFBQSxNQUFBLElBQUEsUUFBQSxTQUFBLEdBQUE7O1VBRUEsSUFBQSxNQUFBLFFBQUEsU0FBQTtJQUNBLElBQUEsTUFBQTtJQUNBLElBQUEsTUFBQSxTQUFBLFNBQUEsTUFBQSxPQUFBLE1BQUE7TUFDQSxNQUFBLE9BQUEsTUFBQTs7VUFFQSxJQUFBLE1BQUEsUUFBQSxTQUFBOztJQUVBLElBQUEsTUFBQSxNQUFBLE1BQUE7SUFDQSxJQUFBLE1BQUEsTUFBQSxNQUFBOztXQUVBLElBQUEsTUFBQSxRQUFBLFNBQUE7O0lBRUEsSUFBQSxNQUFBLFVBQUEsTUFBQTtLQUNBLE9BQUE7O0lBRUEsSUFBQSxNQUFBLE1BQUE7SUFDQSxJQUFBLE1BQUEsSUFBQSxRQUFBLFNBQUEsR0FBQTs7R0FFQSxPQUFBLG9CQUFBLE1BQUEsS0FBQTs7Ozs7Ozs7OztFQVVBLFNBQUEsb0JBQUEsTUFBQSxLQUFBLEtBQUE7R0FDQSxJQUFBLEtBQUEsU0FBQSxNQUFBO0lBQ0EsT0FBQTtVQUNBLElBQUEsQ0FBQSxLQUFBLFNBQUEsTUFBQTtJQUNBLE9BQUE7O0dBRUEsUUFBQSxLQUFBLEtBQUEsT0FBQSxJQUFBLEtBQUE7Ozs7RUFJQSxTQUFBLGFBQUE7R0FDQSxJQUFBLGFBQUE7R0FDQSxpQkFBQSxRQUFBLFNBQUEsV0FBQTtJQUNBLFVBQUEsY0FBQSxRQUFBLFNBQUEsY0FBQTtLQUNBLGFBQUEsU0FBQSxRQUFBLFNBQUEsU0FBQTtNQUNBLFdBQUEsS0FBQSxRQUFBOzs7O0dBSUEsT0FBQSxXQUFBOzs7Ozs7Ozs7RUFTQSxTQUFBLGFBQUEsU0FBQSxjQUFBO0dBQ0EsSUFBQSxnQkFBQSxPQUFBLEtBQUEsUUFBQTtXQUNBLE9BQUE7O0dBRUEsSUFBQSxVQUFBO0lBQ0EsaUJBQUEsYUFBQSxPQUFBO0lBQ0EsU0FBQSxnQkFBQTtJQUNBOzs7R0FHQSxRQUFBLGVBQUEsUUFBQSxTQUFBLGVBQUE7SUFDQSxXQUFBO0tBQ0EsUUFBQSxjQUFBLGNBQUE7S0FDQSw4QkFBQSxjQUFBLFFBQUE7S0FDQSxRQUFBLGNBQUEsY0FBQSxPQUFBOzs7R0FHQSxXQUFBOztHQUVBLE9BQUE7Ozs7OztFQU1BLFNBQUEsWUFBQTtHQUNBLElBQUEsaUJBQUE7R0FDQSxJQUFBLFNBQUE7OztHQUdBLGlCQUFBLFFBQUEsU0FBQSxXQUFBO0lBQ0EsVUFBQSxjQUFBLFFBQUEsU0FBQSxjQUFBO0tBQ0EsYUFBQSxTQUFBLFFBQUEsU0FBQSxTQUFBO01BQ0EsZUFBQSxLQUFBLFFBQUE7TUFDQSxJQUFBLFdBQUEsU0FBQTtPQUNBLFFBQUEsZUFBQTtPQUNBLGFBQUEsU0FBQTs7S0FFQTs7O0dBR0EsSUFBQSxvQkFBQTs7OztFQUlBLFNBQUEsZ0JBQUE7O0dBRUEsSUFBQSxhQUFBOztHQUVBLElBQUEsZUFBQTs7R0FFQSxLQUFBLElBQUEsSUFBQSxHQUFBLElBQUEsYUFBQSxRQUFBLEtBQUE7SUFDQSxLQUFBLElBQUEsSUFBQSxHQUFBLElBQUEsYUFBQSxHQUFBLGNBQUEsUUFBQSxLQUFBO0tBQ0EsSUFBQSxZQUFBOztLQUVBLFVBQUEsT0FBQSxhQUFBLEdBQUEsY0FBQSxHQUFBO0tBQ0EsSUFBQSxnQkFBQTtLQUNBLElBQUEsSUFBQSxJQUFBLEdBQUEsSUFBQSxhQUFBLEdBQUEsY0FBQSxHQUFBLFNBQUEsUUFBQSxLQUFBOztNQUVBLEtBQUEsSUFBQSxJQUFBLEdBQUEsSUFBQSxhQUFBLEdBQUEsY0FBQSxHQUFBLFNBQUEsR0FBQSxlQUFBLFFBQUEsS0FBQTs7T0FFQSxJQUFBLGFBQUEsR0FBQSxjQUFBLEdBQUEsU0FBQSxHQUFBLGVBQUEsR0FBQSxnQkFBQSxFQUFBOzs7O1FBSUEsSUFBQSxZQUFBLGFBQUEsR0FBQSxjQUFBLEdBQUEsU0FBQSxHQUFBOztRQUVBLElBQUEsV0FBQSxPQUFBLEtBQUEsV0FBQSxPQUFBO1FBQ0EsSUFBQSxZQUFBLGFBQUEsR0FBQSxjQUFBLEdBQUEsU0FBQSxHQUFBLGVBQUEsR0FBQTs7UUFFQSxJQUFBLFlBQUEsSUFBQTtTQUNBLFlBQUE7O1FBRUEsY0FBQSxLQUFBLENBQUEsV0FBQSxTQUFBLFdBQUE7Ozs7Ozs7O0lBUUEsVUFBQSxXQUFBOztJQUVBLFdBQUEsS0FBQTs7Ozs7R0FLQSxRQUFBLElBQUE7R0FDQSxPQUFBOzs7O0VBSUEsU0FBQSxxQkFBQSxhQUFBOztHQUVBLElBQUEsbUJBQUE7O0dBRUEsSUFBQSxXQUFBO0dBQ0EsSUFBQSxhQUFBO0dBQ0EsSUFBQTtHQUNBLEtBQUEsSUFBQSxJQUFBLEdBQUEsSUFBQSxpQkFBQSxRQUFBLElBQUE7SUFDQSxJQUFBLGlCQUFBLEdBQUEsUUFBQSxhQUFBOztLQUVBLFdBQUEsQ0FBQSxpQkFBQSxHQUFBOztLQUVBLElBQUEsSUFBQSxJQUFBLEdBQUEsSUFBQSxpQkFBQSxHQUFBLFNBQUEsUUFBQSxJQUFBOzs7OztNQUtBLFdBQUEsS0FBQSxpQkFBQSxHQUFBLFNBQUEsR0FBQTtNQUNBLFNBQUEsS0FBQSxpQkFBQSxHQUFBLFNBQUEsR0FBQTs7Ozs7R0FLQSxJQUFBLFdBQUEsU0FBQSxJQUFBO0lBQ0EsYUFBQSxXQUFBLE1BQUEsRUFBQTtJQUNBLElBQUEsV0FBQSxLQUFBLE1BQUEsV0FBQSxPQUFBO0lBQ0EsUUFBQSxJQUFBO0lBQ0EsTUFBQSxPQUFBLFFBQUE7SUFDQSxLQUFBLElBQUEsSUFBQSxHQUFBLElBQUEsV0FBQSxRQUFBLElBQUE7S0FDQSxJQUFBLElBQUEsWUFBQSxFQUFBO01BQ0EsV0FBQSxLQUFBOztJQUVBLFFBQUEsSUFBQTs7OztHQUlBLE1BQUEsU0FBQTtHQUNBLE1BQUEsU0FBQTtHQUNBLE1BQUEsT0FBQSxRQUFBO0dBQ0EsTUFBQSxPQUFBLENBQUE7O0dBRUEsTUFBQSxLQUFBLEdBQUEsUUFBQSxTQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ256QkEsQ0FBQSxXQUFBO0NBQ0E7O0NBRUEsUUFBQSxPQUFBO0dBQ0EsUUFBQSxPQUFBOzs7Ozs7O0NBT0EsU0FBQSxJQUFBLFlBQUEsTUFBQSxRQUFBOzs7RUFHQSxJQUFBO0VBQ0EsSUFBQSxhQUFBO0dBQ0EsTUFBQTtHQUNBLFFBQUEsSUFBQSxPQUFBLEtBQUEsT0FBQSxDQUFBLFdBQUE7R0FDQSxXQUFBLE9BQUEsS0FBQSxVQUFBOztFQUVBLElBQUEsVUFBQTtFQUNBLElBQUEsa0JBQUE7RUFDQSxJQUFBO0VBQ0EsSUFBQSxjQUFBO0VBQ0EsSUFBQSxrQkFBQSxDQUFBO0VBQ0EsSUFBQTs7O0VBR0EsT0FBQTtHQUNBLGVBQUE7R0FDQSxXQUFBO0dBQ0EsV0FBQTtHQUNBLFlBQUE7R0FDQSxxQkFBQTs7OztFQUlBLFNBQUEsZ0JBQUE7R0FDQSxXQUFBLFNBQUE7O0dBRUEsTUFBQSxJQUFBLE9BQUEsS0FBQSxJQUFBLFNBQUEsZUFBQSxlQUFBOztHQUVBLE9BQUEsS0FBQSxNQUFBLFlBQUEsS0FBQSxnQkFBQSxXQUFBO0lBQ0EsV0FBQSxPQUFBLElBQUE7OztHQUdBLE9BQUEsS0FBQSxNQUFBLFlBQUEsS0FBQSxrQkFBQSxXQUFBO0lBQ0EsV0FBQSxTQUFBLElBQUE7OztHQUdBLE9BQUEsS0FBQSxNQUFBLFlBQUEsS0FBQSxxQkFBQSxXQUFBO0lBQ0EsV0FBQSxZQUFBLElBQUE7OztNQUdBLE9BQUEsS0FBQSxNQUFBLFlBQUEsS0FBQSxTQUFBLFdBQUE7VUFDQSxJQUFBLGFBQUE7S0FDQTs7Ozs7TUFLQSxVQUFBO0dBQ0Esa0JBQUE7Ozs7Ozs7RUFPQSxTQUFBLFlBQUE7R0FDQSxPQUFBLElBQUE7Ozs7Ozs7RUFPQSxTQUFBLFVBQUEsUUFBQTtHQUNBLE9BQUEsS0FBQSxNQUFBLFFBQUEsS0FBQTtHQUNBLElBQUEsVUFBQTs7Ozs7Ozs7OztFQVVBLFNBQUEsV0FBQSxTQUFBLGNBQUEsYUFBQSxLQUFBLFNBQUE7R0FDQSxJQUFBLEtBQUEsUUFBQTtHQUNBLElBQUEsQ0FBQSxRQUFBLGVBQUEsS0FBQTs7SUFFQSxVQUFBLFNBQUEsY0FBQTtVQUNBO0lBQ0EsSUFBQSxnQkFBQSxRQUFBLE9BQUEsQ0FBQSxHQUFBOztLQUVBLGFBQUE7OztHQUdBLFFBQUEsSUFBQSxRQUFBLGFBQUEsYUFBQTtHQUNBLFFBQUEsSUFBQSxXQUFBLGlCQUFBOzs7Ozs7O0VBT0EsU0FBQSxvQkFBQSxnQkFBQTtHQUNBLEtBQUEsSUFBQSxPQUFBLFNBQUE7SUFDQSxJQUFBLFFBQUEsZUFBQSxNQUFBO0tBQ0EsTUFBQSxTQUFBLEtBQUE7S0FDQSxJQUFBLGVBQUEsUUFBQSxRQUFBLENBQUEsR0FBQTtNQUNBLGNBQUE7Ozs7Ozs7Ozs7O0VBV0EsU0FBQSxVQUFBLFNBQUEsY0FBQSxTQUFBO0dBQ0EsSUFBQSxNQUFBLGFBQUEsUUFBQTtHQUNBLElBQUEsT0FBQSxhQUFBLFFBQUE7O0dBRUEsSUFBQSxTQUFBLElBQUEsT0FBQSxLQUFBLE9BQUE7SUFDQSxVQUFBLElBQUEsT0FBQSxLQUFBLE9BQUEsS0FBQTtJQUNBLEtBQUE7Ozs7R0FJQSxPQUFBLEtBQUEsTUFBQSxZQUFBLFFBQUEsU0FBQSxXQUFBO0lBQ0EsWUFBQSxTQUFBLGNBQUEsUUFBQTs7O0dBR0EsUUFBQSxRQUFBLE1BQUE7OztFQUdBLFNBQUEsYUFBQSxLQUFBO0dBQ0EsSUFBQSxZQUFBO0dBQ0EsSUFBQSxLQUFBLFdBQUEsS0FBQTtJQUNBLE9BQUEsS0FBQSxNQUFBLEtBQUEsV0FBQSxPQUFBO1VBQ0E7SUFDQSxPQUFBLEtBQUEsTUFBQSxLQUFBLFdBQUEsT0FBQTs7R0FFQSxPQUFBOzs7Ozs7O0VBT0EsU0FBQSxhQUFBLElBQUE7R0FDQSxRQUFBLElBQUEsT0FBQTtHQUNBLGdCQUFBLE9BQUEsZ0JBQUEsUUFBQSxLQUFBOzs7Ozs7O0VBT0EsU0FBQSxjQUFBLElBQUE7R0FDQSxRQUFBLElBQUEsT0FBQTtHQUNBLGdCQUFBLEtBQUE7OztHQUdBLElBQUEsYUFBQTtJQUNBLElBQUEsZ0JBQUEsUUFBQSxvQkFBQSxDQUFBLEdBQUE7S0FDQTs7Ozs7Ozs7Ozs7RUFXQSxTQUFBLFlBQUEsU0FBQSxjQUFBLFFBQUEsU0FBQTtHQUNBLElBQUEsYUFBQTtJQUNBOztJQUVBLElBQUEsUUFBQSxNQUFBLGlCQUFBO0tBQ0E7Ozs7O0dBS0EsV0FBQSxXQUFBLHdCQUFBOztHQUVBLFVBQUEsSUFBQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLGFBQUEsSUFBQSxPQUFBLEtBQUEsS0FBQSxDQUFBLElBQUE7YUFDQSxRQUFBO2FBQ0EsZ0JBQUE7OztHQUdBLFFBQUEsS0FBQSxLQUFBO0dBQ0EsY0FBQTtHQUNBLGtCQUFBLFFBQUE7Ozs7RUFJQSxTQUFBLGVBQUE7R0FDQSxRQUFBO0dBQ0EsY0FBQTs7Ozs7Ozs7RUFRQSxTQUFBLGFBQUEsUUFBQTs7Ozs7Ozs7OztHQVVBLFFBQUEsSUFBQSxPQUFBLEtBQUEsWUFBQSw2RUFBQSxPQUFBLE9BQUE7VUFDQSxJQUFBLE9BQUEsS0FBQSxLQUFBLElBQUE7VUFDQSxJQUFBLE9BQUEsS0FBQSxNQUFBLEdBQUE7VUFDQSxJQUFBLE9BQUEsS0FBQSxNQUFBLElBQUE7Ozs7Ozs7OztFQVNBLFNBQUEsYUFBQSxHQUFBOztHQUVBLElBQUEsVUFBQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0dBRUEsT0FBQSxRQUFBLElBQUEsUUFBQTs7Ozs7OztFQU9BLFNBQUEsZUFBQTtHQUNBLE9BQUEsTUFBQSxLQUFBLFNBQUEsU0FBQSxJQUFBLE1BQUEsR0FBQTs7Ozs7Ozs7RUFRQSxTQUFBLGlCQUFBLEtBQUE7R0FDQSxJQUFBLG9CQUFBO0dBQ0EsT0FBQSxPQUFBLElBQUEscUJBQUE7Ozs7Ozs7RUFPQSxTQUFBLGNBQUE7R0FDQSxPQUFBO09BQ0E7V0FDQSxhQUFBO1dBQ0EsYUFBQTtXQUNBLFNBQUE7aUJBQ0EsRUFBQSxZQUFBOzs7SUFHQTtXQUNBLGFBQUE7V0FDQSxhQUFBO1dBQ0EsU0FBQTtpQkFDQSxFQUFBLFlBQUE7Ozs7Ozs7Ozs7O0VBV0EsU0FBQSxrQkFBQTtHQUNBLE9BQUE7SUFDQTtLQUNBLGVBQUE7S0FDQSxlQUFBO0tBQ0EsV0FBQTtNQUNBO09BQ0EsU0FBQTs7OztJQUlBO0tBQ0EsZUFBQTtLQUNBLGVBQUE7S0FDQSxXQUFBO01BQ0E7T0FDQSxTQUFBOzs7O0lBSUE7S0FDQSxlQUFBO0tBQ0EsZUFBQTtLQUNBLFdBQUE7TUFDQTtPQUNBLGNBQUE7Ozs7SUFJQTtLQUNBLGVBQUE7S0FDQSxlQUFBO0tBQ0EsV0FBQTtNQUNBO09BQ0EsY0FBQSxDQUFBOztNQUVBO09BQ0EsYUFBQTs7OztJQUlBO0tBQ0EsZUFBQTtLQUNBLGVBQUE7S0FDQSxXQUFBO01BQ0E7T0FDQSxjQUFBOzs7O0lBSUE7S0FDQSxlQUFBO0tBQ0EsZUFBQTtLQUNBLFdBQUE7TUFDQTtPQUNBLGNBQUE7Ozs7SUFJQTtLQUNBLGVBQUE7S0FDQSxlQUFBO0tBQ0EsV0FBQTtNQUNBO09BQ0EsY0FBQTs7OztJQUlBO0tBQ0EsZUFBQTtLQUNBLGVBQUE7S0FDQSxXQUFBO01BQ0E7T0FDQSxTQUFBOztNQUVBO09BQ0EsY0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcFlBLENBQUEsV0FBQTtDQUNBOzs7Q0FHQSxRQUFBLE9BQUE7R0FDQSx5RkFBQSxTQUFBLHFCQUFBO01BQ0EsZUFBQSxnQkFBQTs7O0dBR0EsY0FBQSxhQUFBLEtBQUE7OztHQUdBLFFBQUEsT0FBQSxvQkFBQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBOzs7O0dBSUEsUUFBQSxPQUFBLG9CQUFBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0EsVUFBQTs7OztHQUlBLFFBQUEsT0FBQSxlQUFBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxNQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakNBLENBQUEsV0FBQTtDQUNBOztDQUVBLFFBQUEsT0FBQTtHQUNBLFFBQUEsT0FBQTs7Ozs7Ozs7O0NBU0EsU0FBQSxJQUFBLFFBQUEsUUFBQSxNQUFBOzs7RUFHQSxPQUFBO0dBQ0EsY0FBQTtZQUNBLFlBQUE7WUFDQSxrQkFBQTtZQUNBLGVBQUE7Ozs7Ozs7RUFPQSxTQUFBLGFBQUEsU0FBQTtZQUNBLE9BQUEsQ0FBQSxPQUFBLFlBQUEsU0FBQSxTQUFBLE1BQUE7Ozs7Ozs7UUFPQSxTQUFBLFdBQUEsU0FBQTtZQUNBLE9BQUEsQ0FBQSxPQUFBLFVBQUEsU0FBQSxTQUFBLE1BQUE7Ozs7Ozs7UUFPQSxTQUFBLGlCQUFBLEtBQUE7WUFDQSxLQUFBLE1BQUE7WUFDQSxXQUFBLElBQUEsT0FBQSxNQUFBLElBQUEsU0FBQTs7Ozs7Ozs7UUFRQSxTQUFBLGNBQUEsT0FBQTtZQUNBLE9BQUE7Z0JBQ0EsT0FBQTtnQkFDQSxhQUFBO2dCQUNBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEQSxDQUFBLFdBQUE7Q0FDQTs7Q0FFQSxRQUFBLE9BQUE7R0FDQSxXQUFBLGlCQUFBOzs7Ozs7Ozs7OztDQVdBLFNBQUEsY0FBQSxZQUFBLFFBQUEsY0FBQSxNQUFBO0VBQ0EsSUFBQSxLQUFBOzs7RUFHQSxJQUFBLFdBQUEsS0FBQTs7O0VBR0EsR0FBQSxjQUFBO0dBQ0EsRUFBQSxNQUFBLG1CQUFBLE9BQUE7R0FDQSxFQUFBLE1BQUEsVUFBQSxPQUFBOztFQUVBLEdBQUEsZUFBQTtFQUNBLEdBQUEsY0FBQTtFQUNBLEdBQUEsU0FBQTtFQUNBLEdBQUEsaUJBQUE7O0VBRUE7OztFQUdBLFNBQUEsV0FBQTs7R0FFQSxXQUFBLElBQUEsdUJBQUEsV0FBQTtJQUNBLFdBQUEsS0FBQTs7Ozs7Ozs7O0VBU0EsU0FBQSxZQUFBLE1BQUE7R0FDQSxPQUFBLGFBQUEsWUFBQTs7Ozs7Ozs7RUFRQSxTQUFBLGFBQUEsS0FBQTtHQUNBLE9BQUE7SUFDQSxLQUFBO0tBQ0EsT0FBQTtJQUNBLEtBQUE7S0FDQSxPQUFBLEtBQUEsVUFBQTtJQUNBLEtBQUE7S0FDQSxPQUFBO0lBQ0EsS0FBQTtLQUNBLE9BQUEsS0FBQSxVQUFBO0lBQ0EsS0FBQTtLQUNBLE9BQUE7SUFDQSxLQUFBO0tBQ0EsT0FBQTtJQUNBO0tBQ0EsT0FBQTs7Ozs7RUFLQSxTQUFBLFNBQUE7R0FDQSxLQUFBO0dBQ0EsV0FBQTtHQUNBLE9BQUEsR0FBQTs7OztFQUlBLFNBQUEsaUJBQUE7R0FDQSxPQUFBLEdBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZBLENBQUEsV0FBQTtDQUNBOztDQUVBLFFBQUEsT0FBQTtHQUNBLFdBQUEsc0JBQUE7Ozs7Ozs7Ozs7Q0FVQSxTQUFBLG1CQUFBLE1BQUEsUUFBQSxRQUFBO0VBQ0EsSUFBQSxLQUFBOztFQUVBLElBQUEsV0FBQTs7O0VBR0EsR0FBQSxVQUFBO0VBQ0EsR0FBQSxXQUFBO0VBQ0EsR0FBQSxnQkFBQTtFQUNBLEdBQUEsY0FBQTs7RUFFQTs7O0VBR0EsU0FBQSxXQUFBO0dBQ0EsR0FBQSxVQUFBO0dBQ0E7R0FDQTtHQUNBOzs7O0VBSUEsU0FBQSxnQkFBQTtHQUNBLE9BQUEsY0FBQSxLQUFBLFNBQUEsS0FBQTtJQUNBLEdBQUEsV0FBQSxJQUFBLEtBQUE7SUFDQTtJQUNBO01BQ0EsU0FBQSxLQUFBO0lBQ0EsS0FBQSxNQUFBOzs7OztFQUtBLFNBQUEscUJBQUE7R0FDQSxPQUFBLG1CQUFBLEtBQUEsU0FBQSxLQUFBO0lBQ0EsR0FBQSxnQkFBQSxJQUFBLEtBQUE7SUFDQTtJQUNBO01BQ0EsU0FBQSxLQUFBO0lBQ0EsS0FBQSxNQUFBOzs7OztFQUtBLFNBQUEsbUJBQUE7R0FDQSxPQUFBLGlCQUFBLEtBQUEsU0FBQSxLQUFBO0lBQ0EsR0FBQSxjQUFBLElBQUEsS0FBQTtJQUNBO0lBQ0E7TUFDQSxTQUFBLEtBQUE7SUFDQSxLQUFBLE1BQUE7Ozs7O0VBS0EsU0FBQSxnQkFBQTtHQUNBLElBQUEsV0FBQSxHQUFBO0dBQ0EsR0FBQSxVQUFBOztHQUVBLEdBQUEsU0FBQSxRQUFBLFNBQUEsU0FBQTs7SUFFQSxRQUFBLGNBQUEsT0FBQSxRQUFBO0tBQ0EsS0FBQSxPQUFBOztJQUVBLEtBQUEsSUFBQSxJQUFBLEdBQUEsSUFBQSxHQUFBLGNBQUEsUUFBQSxLQUFBO0tBQ0EsSUFBQSxlQUFBLEdBQUEsY0FBQTtLQUNBLElBQUEsYUFBQSxNQUFBLFFBQUEsZUFBQSxnQkFBQTtNQUNBLFFBQUEsV0FBQSxhQUFBO01BQ0E7Ozs7SUFJQSxLQUFBLElBQUEsSUFBQSxHQUFBLElBQUEsR0FBQSxZQUFBLFFBQUEsS0FBQTtLQUNBLElBQUEsYUFBQSxHQUFBLFlBQUE7S0FDQSxJQUFBLFdBQUEsTUFBQSxRQUFBLGVBQUEsY0FBQTtNQUNBLFFBQUEsYUFBQSxXQUFBO01BQ0E7Ozs7SUFJQSxRQUFBLFVBQUEsUUFBQSxhQUFBO0tBQ0EsUUFBQSxlQUFBLFdBQUE7S0FDQSxRQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hHQSxDQUFBLFdBQUE7Q0FDQTs7Q0FFQSxRQUFBLE9BQUE7R0FDQSxJQUFBOzs7Q0FHQSxTQUFBLFVBQUEsY0FBQTtFQUNBLGFBQUEsZ0JBQUE7Ozs7Q0FHQSxTQUFBLFlBQUE7RUFDQSxPQUFBO0dBQ0E7SUFDQSxPQUFBO0lBQ0EsUUFBQTtLQUNBLEtBQUE7S0FDQSxZQUFBO0tBQ0EsY0FBQTtLQUNBLGFBQUE7S0FDQSxNQUFBO01BQ0EsUUFBQTs7Ozs7O0tBTUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEZsb29kIE1vbml0b3JpbmcgU3lzdGVtXHJcbiAqIFZlcnNpb24gMC4wLjEgKER1eXVuZylcclxuICpcclxuICogQ29weXJpZ2h0IChDKSBUZWFtIE5lcHR1bmVcclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogQGF1dGhvciAgICAgQW5kcmV3IER5ZXIgPGFuZHJld0BkeWVyZ3JvdXAuY29tLmF1PlxyXG4gKiBAdmVyc2lvbiAgICAwLjAuMVxyXG4gKiBAY29weXJpZ2h0ICBUZWFtIE5lcHR1bmUgKDIwMTUpXHJcbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hY2xlbC9kZWNvMzgwMVxyXG4gKi9cclxuKGZ1bmN0aW9uKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAgICAqIEBuZ2RvYyBvdmVydmlld1xyXG4gICAgICAgICogQG5hbWUgYXBwLm1vZHVsZVxyXG4gICAgICAgICogQGRlc2NyaXB0aW9uIEFwcCBtb2R1bGUsIHRpZXMgdG9nZXRoZXIgYWxsIHN1Ym1vZHVsZXNcclxuICAgICoqL1xyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtcclxuICAgICAgICAvLyBTaGFyZWQgbW9kdWxlc1xyXG4gICAgICAgICdhcHAuY29yZScsXHJcbiAgICAgICAgJ2FwcC5ndWknLFxyXG4gICAgICAgICdhcHAuYXV0aCcsXHJcbiAgICAgICAgJ2FwcC5uYXYnLFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEZlYXR1cmUgbW9kdWxlcyAgICAgICAgXHJcbiAgICAgICAgJ2FwcC5kYXNoYm9hcmQnLFxyXG4gICAgICAgICdhcHAuY29uZmlnJyxcclxuICAgICAgICAnYXBwLndhcm5pbmdzJyxcclxuICAgICAgICAnYXBwLmFkbWluJ1xyXG4gICAgXSk7XHJcbn0pKCk7IiwiLyoqXHJcbiAqIEZsb29kIE1vbml0b3JpbmcgU3lzdGVtXHJcbiAqIFZlcnNpb24gMC4wLjEgKER1eXVuZylcclxuICpcclxuICogQ29weXJpZ2h0IChDKSBUZWFtIE5lcHR1bmVcclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogQGF1dGhvciAgICAgQW5kcmV3IER5ZXIgPGFuZHJld0BkeWVyZ3JvdXAuY29tLmF1PlxyXG4gKiBAdmVyc2lvbiAgICAwLjAuMVxyXG4gKiBAY29weXJpZ2h0ICBUZWFtIE5lcHR1bmUgKDIwMTUpXHJcbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hY2xlbC9kZWNvMzgwMVxyXG4gKi9cclxuKGZ1bmN0aW9uKCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHRcclxuICAgIC8qKlxyXG4gICAgICAgICogQG5nZG9jIG92ZXJ2aWV3XHJcbiAgICAgICAgKiBAbmFtZSBhcHAubW9kdWxlOmFkbWluXHJcbiAgICAgICAgKiBAZGVzY3JpcHRpb24gTW9kdWxlIGZvciBhZG1pbiBwYWdlXHJcbiAgICAqKi9cclxuXHRhbmd1bGFyLm1vZHVsZSgnYXBwLmFkbWluJywgW1xyXG5cdFx0Ly8gU2hhcmVkIG1vZHVsZXNcclxuXHRcdCdhcHAuY29yZScsXHJcblx0XHQnYXBwLmd1aSdcclxuXHRdKTtcclxufSkoKTsiLCIvKipcclxuICogRmxvb2QgTW9uaXRvcmluZyBTeXN0ZW1cclxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKEMpIFRlYW0gTmVwdHVuZVxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgICBBbmRyZXcgRHllciA8YW5kcmV3QGR5ZXJncm91cC5jb20uYXU+XHJcbiAqIEB2ZXJzaW9uICAgIDAuMC4xXHJcbiAqIEBjb3B5cmlnaHQgIFRlYW0gTmVwdHVuZSAoMjAxNSlcclxuICogQGxpbmsgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FjbGVsL2RlY28zODAxXHJcbiAqL1xyXG4oZnVuY3Rpb24oKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdFxyXG5cdC8qKlxyXG4gICAgICAgICogQG5nZG9jIG92ZXJ2aWV3XHJcbiAgICAgICAgKiBAbmFtZSBhcHAubW9kdWxlOmF1dGhcclxuICAgICAgICAqIEBkZXNjcmlwdGlvbiBNb2R1bGUgZm9yIGF1dGhlbnRpY2F0aW9uIGFjcm9zcyBhcHBcclxuICAgICoqL1xyXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAuYXV0aCcsIFtdKTtcclxufSkoKTsiLCIvKipcclxuICogRmxvb2QgTW9uaXRvcmluZyBTeXN0ZW1cclxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKEMpIFRlYW0gTmVwdHVuZVxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgICBBbmRyZXcgRHllciA8YW5kcmV3QGR5ZXJncm91cC5jb20uYXU+XHJcbiAqIEB2ZXJzaW9uICAgIDAuMC4xXHJcbiAqIEBjb3B5cmlnaHQgIFRlYW0gTmVwdHVuZSAoMjAxNSlcclxuICogQGxpbmsgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FjbGVsL2RlY28zODAxXHJcbiAqL1xyXG4oZnVuY3Rpb24oKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdFxyXG4gICAgLyoqXHJcbiAgICAgICAgKiBAbmdkb2Mgb3ZlcnZpZXdcclxuICAgICAgICAqIEBuYW1lIGFwcC5tb2R1bGU6Y29uZmlnXHJcbiAgICAgICAgKiBAZGVzY3JpcHRpb24gTW9kdWxlIGZvciBjb25maWcgcGFnZVxyXG4gICAgKiovXHJcblx0YW5ndWxhci5tb2R1bGUoJ2FwcC5jb25maWcnLCBbXHJcblx0XHQvLyBTaGFyZWQgbW9kdWxlc1xyXG5cdFx0J2FwcC5jb3JlJyxcclxuXHRcdCdhcHAuZ3VpJyxcclxuXHJcbiAgICAgICAgLy8gM3JkLXBhcnR5IG1vZHVsZXNcclxuICAgICAgICAndWkudHJlZSdcclxuXHRdKTtcclxufSkoKTsiLCIvKipcclxuICogRmxvb2QgTW9uaXRvcmluZyBTeXN0ZW1cclxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKEMpIFRlYW0gTmVwdHVuZVxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgICBBbmRyZXcgRHllciA8YW5kcmV3QGR5ZXJncm91cC5jb20uYXU+XHJcbiAqIEB2ZXJzaW9uICAgIDAuMC4xXHJcbiAqIEBjb3B5cmlnaHQgIFRlYW0gTmVwdHVuZSAoMjAxNSlcclxuICogQGxpbmsgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FjbGVsL2RlY28zODAxXHJcbiAqL1xyXG4oZnVuY3Rpb24oKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdFxyXG4gICAgLyoqXHJcbiAgICAgICAgKiBAbmdkb2Mgb3ZlcnZpZXdcclxuICAgICAgICAqIEBuYW1lIGFwcC5tb2R1bGU6Y29yZVxyXG4gICAgICAgICogQGRlc2NyaXB0aW9uIE1vZHVsZSBmb3IgY29yZSBhcHBsaWNhdGlvbiBjb21wb25lbnRzXHJcbiAgICAqKi9cclxuXHRhbmd1bGFyLm1vZHVsZSgnYXBwLmNvcmUnLCBbXHJcblx0XHQvLyAzcmQgcGFydHkgbW9kdWxlc1xyXG5cdFx0J3VpLnJvdXRlcidcclxuXHRdKTtcclxufSkoKTsiLCIvKipcclxuICogRmxvb2QgTW9uaXRvcmluZyBTeXN0ZW1cclxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKEMpIFRlYW0gTmVwdHVuZVxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgICBBbmRyZXcgRHllciA8YW5kcmV3QGR5ZXJncm91cC5jb20uYXU+XHJcbiAqIEB2ZXJzaW9uICAgIDAuMC4xXHJcbiAqIEBjb3B5cmlnaHQgIFRlYW0gTmVwdHVuZSAoMjAxNSlcclxuICogQGxpbmsgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FjbGVsL2RlY28zODAxXHJcbiAqL1xyXG4oZnVuY3Rpb24oKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdFxyXG5cdC8qKlxyXG4gICAgICAgICogQG5nZG9jIG92ZXJ2aWV3XHJcbiAgICAgICAgKiBAbmFtZSBhcHAubW9kdWxlOmRhc2hib2FyZFxyXG4gICAgICAgICogQGRlc2NyaXB0aW9uIE1vZHVsZSBmb3IgZGFzaGJvYXJkIHBhZ2VcclxuICAgICoqL1xyXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAuZGFzaGJvYXJkJywgW1xyXG5cdFx0Ly8gU2hhcmVkIG1vZHVsZXNcclxuXHRcdCdhcHAuY29yZScsXHJcblx0XHQnYXBwLmd1aScsXHJcblx0XHRcclxuXHRcdC8vIDNyZC1wYXJ0eSBtb2R1bGVzXHJcblx0XHQnY2hhcnQuanMnLFxyXG5cdFx0J3VpLmluZGV0ZXJtaW5hdGUnXHJcblx0XSk7XHJcbn0pKCk7IiwiLyoqXHJcbiAqIEZsb29kIE1vbml0b3JpbmcgU3lzdGVtXHJcbiAqIFZlcnNpb24gMC4wLjEgKER1eXVuZylcclxuICpcclxuICogQ29weXJpZ2h0IChDKSBUZWFtIE5lcHR1bmVcclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogQGF1dGhvciAgICAgQW5kcmV3IER5ZXIgPGFuZHJld0BkeWVyZ3JvdXAuY29tLmF1PlxyXG4gKiBAdmVyc2lvbiAgICAwLjAuMVxyXG4gKiBAY29weXJpZ2h0ICBUZWFtIE5lcHR1bmUgKDIwMTUpXHJcbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hY2xlbC9kZWNvMzgwMVxyXG4gKi9cclxuKGZ1bmN0aW9uKCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHRcclxuXHQvKipcclxuICAgICAgICAqIEBuZ2RvYyBvdmVydmlld1xyXG4gICAgICAgICogQG5hbWUgYXBwLm1vZHVsZTpndWlcclxuICAgICAgICAqIEBkZXNjcmlwdGlvbiBNb2R1bGUgY29udGFpbmluZyBsaWJyYXJpZXMgcmVxdWlyZWQgZm9yIGd1aVxyXG4gICAgKiovXHJcblx0YW5ndWxhci5tb2R1bGUoJ2FwcC5ndWknLCBbXHJcblx0XHQvLyAzcmQtcGFydHkgbW9kdWxlc1xyXG4gICAgICAgICduZ0FuaW1hdGUnLCBcclxuXHRcdCdtZ2NyZWEubmdTdHJhcCcsXHJcblx0XHQnbWdjcmVhLm5nU3RyYXAuaGVscGVycy5kaW1lbnNpb25zJyxcclxuXHRcdCdtZ2NyZWEubmdTdHJhcC5oZWxwZXJzLmRhdGVQYXJzZXInLFxyXG5cdFx0J21nY3JlYS5uZ1N0cmFwLmhlbHBlcnMucGFyc2VPcHRpb25zJyxcclxuXHRcdCdtZ2NyZWEubmdTdHJhcC50b29sdGlwJyxcclxuXHRcdCdtZ2NyZWEubmdTdHJhcC5kYXRlcGlja2VyJyxcclxuXHRcdCdtZ2NyZWEubmdTdHJhcC50aW1lcGlja2VyJyxcclxuXHRcdCdtZ2NyZWEubmdTdHJhcC5idXR0b24nLFxyXG5cdFx0J21nY3JlYS5uZ1N0cmFwLnNlbGVjdCcsXHJcbiAgICAgICAgJ21nY3JlYS5uZ1N0cmFwLm1vZGFsJyxcclxuICAgICAgICAnbWdjcmVhLm5nU3RyYXAuYWxlcnQnLFxyXG4gICAgICAgICdtZ2NyZWEubmdTdHJhcC50YWInLFxyXG4gICAgICAgICdtZ2NyZWEubmdTdHJhcC5kcm9wZG93bidcclxuXHRdKTtcclxufSkoKTsiLCIvKipcclxuICogRmxvb2QgTW9uaXRvcmluZyBTeXN0ZW1cclxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKEMpIFRlYW0gTmVwdHVuZVxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgICBBbmRyZXcgRHllciA8YW5kcmV3QGR5ZXJncm91cC5jb20uYXU+XHJcbiAqIEB2ZXJzaW9uICAgIDAuMC4xXHJcbiAqIEBjb3B5cmlnaHQgIFRlYW0gTmVwdHVuZSAoMjAxNSlcclxuICogQGxpbmsgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FjbGVsL2RlY28zODAxXHJcbiAqL1xyXG4oZnVuY3Rpb24oKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdFxyXG4gICAgLyoqXHJcbiAgICAgICAgKiBAbmdkb2Mgb3ZlcnZpZXdcclxuICAgICAgICAqIEBuYW1lIGFwcC5tb2R1bGU6bmF2XHJcbiAgICAgICAgKiBAZGVzY3JpcHRpb24gTW9kdWxlIGZvciBhcHAgbmF2aWdhdGlvblxyXG4gICAgKiovXHJcblx0YW5ndWxhci5tb2R1bGUoJ2FwcC5uYXYnLCBbXHJcblx0XHQvLyBTaGFyZWQgbW9kdWxlc1xyXG5cdFx0J2FwcC5jb3JlJyxcclxuXHRcdCdhcHAuYXV0aCcsXHJcbiAgICAgICAgJ2FwcC5ndWknXHJcblx0XSk7XHJcbn0pKCk7IiwiLyoqXHJcbiAqIEZsb29kIE1vbml0b3JpbmcgU3lzdGVtXHJcbiAqIFZlcnNpb24gMC4wLjEgKER1eXVuZylcclxuICpcclxuICogQ29weXJpZ2h0IChDKSBUZWFtIE5lcHR1bmVcclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogQGF1dGhvciAgICAgQW5kcmV3IER5ZXIgPGFuZHJld0BkeWVyZ3JvdXAuY29tLmF1PlxyXG4gKiBAdmVyc2lvbiAgICAwLjAuMVxyXG4gKiBAY29weXJpZ2h0ICBUZWFtIE5lcHR1bmUgKDIwMTUpXHJcbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hY2xlbC9kZWNvMzgwMVxyXG4gKi9cclxuKGZ1bmN0aW9uKCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHRcclxuICAgIC8qKlxyXG4gICAgICAgICogQG5nZG9jIG92ZXJ2aWV3XHJcbiAgICAgICAgKiBAbmFtZSBhcHAubW9kdWxlOndhcm5pbmdzXHJcbiAgICAgICAgKiBAZGVzY3JpcHRpb24gTW9kdWxlIGZvciB3YXJuaW5ncyBwYWdlXHJcbiAgICAqKi9cclxuXHRhbmd1bGFyLm1vZHVsZSgnYXBwLndhcm5pbmdzJywgW1xyXG5cdFx0Ly8gU2hhcmVkIG1vZHVsZXNcclxuXHRcdCdhcHAuY29yZScsXHJcblx0XHQnYXBwLmd1aSdcclxuXHRdKTtcclxufSkoKTsiLCIvKipcclxuICogRmxvb2QgTW9uaXRvcmluZyBTeXN0ZW1cclxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKEMpIFRlYW0gTmVwdHVuZVxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgICBBbmRyZXcgRHllciA8YW5kcmV3QGR5ZXJncm91cC5jb20uYXU+XHJcbiAqIEB2ZXJzaW9uICAgIDAuMC4xXHJcbiAqIEBjb3B5cmlnaHQgIFRlYW0gTmVwdHVuZSAoMjAxNSlcclxuICogQGxpbmsgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FjbGVsL2RlY28zODAxXHJcbiAqL1xyXG4vKiBnbG9iYWwgZ29vZ2xlICovXHJcbi8qIGdsb2JhbCBtb21lbnQgKi9cclxuKGZ1bmN0aW9uKCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHRcclxuICAgIC8qKiBEZWZpbmUgZ2xvYmFscyBmcm9tIHRoaXJkLXBhcnR5IGxpYnJhcmllcyBzbyB0aGV5IGNhbiBiZSBpbmplY3RlZCAqL1xyXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG5cdFx0LmNvbnN0YW50KCdtb21lbnQnLCBtb21lbnQpXHJcblx0XHQuY29uc3RhbnQoJ2dvb2dsZScsIGdvb2dsZSk7XHJcbn0pKCk7IiwiLyoqXHJcbiAqIEZsb29kIE1vbml0b3JpbmcgU3lzdGVtXHJcbiAqIFZlcnNpb24gMC4wLjEgKER1eXVuZylcclxuICpcclxuICogQ29weXJpZ2h0IChDKSBUZWFtIE5lcHR1bmVcclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogQGF1dGhvciAgICAgQW5kcmV3IER5ZXIgPGFuZHJld0BkeWVyZ3JvdXAuY29tLmF1PlxyXG4gKiBAdmVyc2lvbiAgICAwLjAuMVxyXG4gKiBAY29weXJpZ2h0ICBUZWFtIE5lcHR1bmUgKDIwMTUpXHJcbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hY2xlbC9kZWNvMzgwMVxyXG4gKi9cclxuKGZ1bmN0aW9uKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgXHJcbiAgICAvKiogRGVmaW5lIGVudmlyb25tZW50IHZhcmlhYmxlcyBoZXJlICovXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAgICAgICAuY29uc3RhbnQoJ1NFUlZFUl9BRERSRVNTJywgJ2h0dHA6Ly90ZWFtbmVwdHVuZS5jby9kZXYnKTtcclxufSkoKTsiLCIvKipcclxuICogRmxvb2QgTW9uaXRvcmluZyBTeXN0ZW1cclxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKEMpIFRlYW0gTmVwdHVuZVxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgICBBbmRyZXcgRHllciA8YW5kcmV3QGR5ZXJncm91cC5jb20uYXU+XHJcbiAqIEB2ZXJzaW9uICAgIDAuMC4xXHJcbiAqIEBjb3B5cmlnaHQgIFRlYW0gTmVwdHVuZSAoMjAxNSlcclxuICogQGxpbmsgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FjbGVsL2RlY28zODAxXHJcbiAqL1xyXG4oZnVuY3Rpb24oKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdFxyXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAuYWRtaW4nKVxyXG5cdFx0LmNvbnRyb2xsZXIoJ0FkbWluQ29udHJvbGxlcicsIEFkbWluQ29udHJvbGxlcik7XHJcblx0XHJcblx0LyoqXHJcblx0XHQqIEBuZ2RvYyBvYmplY3RcclxuXHRcdCogQG5hbWUgYXBwLmFkbWluLmNvbnRyb2xsZXI6QWRtaW5Db250cm9sbGVyXHJcblx0XHQqIEBkZXNjcmlwdGlvbiBQcm92aWRlcyB2aWV3bW9kZWwgZm9yIGFkbWluIHZpZXdcclxuXHRcdCogQHJlcXVpcmVzIHNlcnZlclxyXG5cdCoqL1xyXG5cdGZ1bmN0aW9uIEFkbWluQ29udHJvbGxlcigkc2NvcGUsIHNlcnZlciwgZ3VpKSB7XHJcblx0XHR2YXIgdm0gPSB0aGlzO1xyXG5cdFx0XHJcblx0XHQvKiogVmFyaWFibGVzIGFuZCBtZXRob2RzIGJvdW5kIHRvIHZpZXdtb2RlbCAqL1xyXG5cdFx0dm0udXNlcnMgPSBbXTtcclxuXHRcdHZtLmVkaXRVc2VySWQgPSAtMTtcclxuXHRcdHZtLm5ld0J1b3lOYW1lID0gJyc7XHJcblx0XHR2bS5yb2xlcyA9IFsndXNlcicsICdwb3dlcl91c2VyJywgJ3N5c3RlbV9hZG1pbiddO1xyXG5cdFx0dm0uY29uZmlybURlbGV0ZSAgPSBjb25maXJtRGVsZXRlVXNlcjtcclxuXHRcdHZtLnN0YXJ0RWRpdGluZ1VzZXIgPSBzdGFydEVkaXRpbmdVc2VyO1xyXG5cdFx0dm0uZmluaXNoRWRpdGluZ1VzZXIgPSBmaW5pc2hFZGl0aW5nVXNlcjtcclxuXHRcdHZtLmRlbGV0ZVVzZXIgPSBkZWxldGVVc2VyO1xyXG5cdFx0dm0uY2FuY2VsRWRpdGluZ1VzZXIgPSBjYW5jZWxFZGl0aW5nVXNlcjtcclxuXHRcdHZtLnN0YXJ0QWRkaW5nVXNlciA9IHN0YXJ0QWRkaW5nVXNlcjtcclxuXHRcdHZtLnNob3dEZWxldGVCdXR0b24gPSBzaG93RGVsZXRlQnV0dG9uO1xyXG5cdFx0dm0uYWRkQnVveSA9IGFkZEJ1b3k7XHJcblx0XHRcclxuXHRcdC8vIHZtLnNlbnNvcnMgPSBzZXJ2ZXIuZ2V0U2Vuc29yVHlwZXMoKTtcclxuXHRcdC8vIHZtLnNlbnNvcnNFZGl0ID0gW107XHJcblx0XHQvLyB2bS50b2dnbGVFZGl0ID0gdG9nZ2xlRWRpdDtcclxuXHRcdC8vIHZtLnNlbnNvclZhbGlkID0gc2Vuc29yVmFsaWQ7XHJcblx0XHRcclxuXHRcdGFjdGl2YXRlKCk7XHJcblx0XHRcclxuXHRcdC8qKiBDYWxsZWQgd2hlbiBjb250cm9sbGVyIGlzIGluc3RhbnRpYXRlZCAoYWRtaW4gcGFnZSBpcyBsb2FkZWQpICovXHJcblx0XHRmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcclxuXHRcdFx0cXVlcnlVc2VycygpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUXVlcnkgdXNlcnMgZnJvbSB0aGUgc2VydmVyXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIHF1ZXJ5VXNlcnMoKSB7XHJcblx0XHRcdHNlcnZlci5nZXRVc2VycygpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0dm0udXNlcnMgPSByZXMuZGF0YS51c2VycztcclxuXHRcdFx0XHRmb3JtYXRMYXN0TG9naW4oKTtcclxuXHRcdFx0fSwgZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0Z3VpLmFsZXJ0QmFkUmVzcG9uc2UocmVzKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogRm9ybWF0IGxhc3QgbG9naW4gdGltZSBhbmQgYWRkIGl0IHRvIHVzZXJzIGFycmF5XHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIGZvcm1hdExhc3RMb2dpbigpIHtcclxuXHRcdFx0dm0udXNlcnMuZm9yRWFjaChmdW5jdGlvbih1c2VyKSB7XHJcblx0XHRcdFx0aWYgKCF1c2VyLmxhc3RMb2dpbi5WYWxpZCkge1xyXG5cdFx0XHRcdFx0dXNlci5sYXN0TG9naW4udGV4dCA9ICdOZXZlcic7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHVzZXIubGFzdExvZ2luLnRleHQgPSBtb21lbnQodXNlci5sYXN0TG9naW4uVGltZSkuZnJvbU5vdygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogU3RhcnQgZWRpdGluZyBhIHVzZXIsIGNhbGxlZCBvbiBFZGl0IGJ1dHRvbiBjbGlja1xyXG5cdFx0ICogQHBhcmFtICB7b2JqZWN0fSB1c2VyIFxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBzdGFydEVkaXRpbmdVc2VyKHVzZXIpIHtcclxuXHRcdFx0dm0uZWRpdFVzZXJJZCA9IHVzZXIuaWQ7XHJcblx0XHRcdHZtLmVkaXRVc2VyID0gdXNlcjtcclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFVzZXIgZWRpdHMgYXJlIHNhdmVkLCBhbmQgc2VydmVyIGlzIHVwZGF0ZWQsIFxyXG5cdFx0ICogY2FsbGVkIG9uIFNhdmUgYnV0dG9uIGNsaWNrXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIGZpbmlzaEVkaXRpbmdVc2VyKCkge1xyXG5cdFx0XHRpZiAodm0uZWRpdFVzZXJJZCAhPSAtMikge1xyXG5cdFx0XHRcdHNlcnZlci51cGRhdGVVc2VyKHZtLmVkaXRVc2VyKS50aGVuKGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0cXVlcnlVc2VycygpO1xyXG5cdFx0XHRcdFx0Z3VpLmFsZXJ0U3VjY2VzcygnVXNlciB1cGRhdGVkLicpO1xyXG5cdFx0XHRcdH0sIGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0Z3VpLmFsZXJ0QmFkUmVzcG9uc2UocmVzKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXJ2ZXIuYWRkVXNlcih2bS5lZGl0VXNlcikudGhlbihmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdHF1ZXJ5VXNlcnMoKTtcclxuXHRcdFx0XHRcdGd1aS5hbGVydFN1Y2Nlc3MoJ1VzZXIgYWRkZWQuJyk7XHJcblx0XHRcdFx0fSwgZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRndWkuYWxlcnRCYWRSZXNwb25zZShyZXMpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHZtLnVzZXJzLnNwbGljZSh2bS51c2Vycy5sZW5ndGggLSAxLCAxKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR2bS5lZGl0VXNlcklkID0gLTE7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogVXNlciBlZGl0cyBhcmUgZGlzY2FyZGVkLCBjYWxsZWQgb24gQ2FuY2VsIGJ1dHRvbiBjbGlja1xyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBjYW5jZWxFZGl0aW5nVXNlcigpIHtcclxuXHRcdFx0aWYgKHZtLmVkaXRVc2VySWQgPT0gLTIpIHtcclxuXHRcdFx0XHR2bS51c2Vycy5zcGxpY2Uodm0udXNlcnMubGVuZ3RoIC0gMSwgMSk7XHJcblx0XHRcdH1cclxuXHRcdFx0dm0uZWRpdFVzZXJJZCA9IC0xO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFVzZXIgaXMgZGVsZXRlZCwgY2FsbGVkIG9uIENvbmZpcm0gYnV0dG9uIGNsaWNrIGluIGRlbGV0ZSBtb2RhbFxyXG5cdFx0ICogQHBhcmFtICB7b2JqZWN0fSB1c2VyIHVzZXIgdG8gZGVsZXRlXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIGNvbmZpcm1EZWxldGVVc2VyKHVzZXIpIHtcclxuXHRcdFx0c2VydmVyLmRlbGV0ZVVzZXIodXNlci5pZCkudGhlbihmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRxdWVyeVVzZXJzKCk7XHJcblx0XHRcdFx0Z3VpLmFsZXJ0U3VjY2VzcygnVXNlciBkZWxldGVkLicpO1xyXG5cdFx0XHR9LCBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRndWkuYWxlcnRCYWRSZXNwb25zZShyZXMpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFNob3dzIGEgZGVsZXRlIGNvbmZpcm1hdGlvbiwgY2FsbGVkIG9uIERlbGV0ZSBidXR0b24gY2xpY2tcclxuXHRcdCAqIEBwYXJhbSAge29iamVjdH0gdXNlciB1c2VyIHRvIGRlbGV0ZVxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBkZWxldGVVc2VyKHVzZXIpIHtcclxuXHRcdFx0dm0uZGVsZXRlT2JqZWN0ID0gdXNlcjtcclxuXHRcdFx0dm0uZGVsZXRlVHlwZSA9ICd1c2VyJztcclxuXHRcdFx0dm0uZGVsZXRlTmFtZSA9IHVzZXIuZW1haWw7XHJcblx0XHRcdGd1aS5jb25maXJtRGVsZXRlKCRzY29wZSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHNob3cgZGVsZXRlIGJ1dHRvbiBmb3IgZWFjaCB1c2VyIHJvd1xyXG5cdFx0ICogQHBhcmFtICB7b2JqZWN0fSB1c2VyXHJcblx0XHQgKiBAcmV0dXJuIHtib29sfSAgICAgIHdoZXRoZXIgdG8gc2hvdyBkZWxldGUgYnV0dG9uXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIHNob3dEZWxldGVCdXR0b24odXNlcikge1xyXG5cdFx0XHRyZXR1cm4gKCh2bS5lZGl0VXNlcklkID09IC0xIHx8IHZtLmVkaXRVc2VySWQgPT0gdXNlci5pZCkgJiZcclxuXHRcdFx0XHR1c2VyLmlkICE9IC0yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBBZGQgbmV3IHJvdyB0byB1c2VycyB0YWJsZSBhbmQgc3RhcnQgZWRpdGluZywgXHJcblx0XHQgKiBjYWxsZWQgb24gQWRkIFVzZXIgYnV0dG9uIGNsaWNrXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIHN0YXJ0QWRkaW5nVXNlcigpIHtcclxuXHRcdFx0dmFyIHRlbXBVc2VyID0geyBpZDogLTIsIHJvbGU6IHZtLnJvbGVzWzBdIH07XHJcblx0XHRcdHZtLnVzZXJzLnB1c2godGVtcFVzZXIpO1xyXG5cdFx0XHRzdGFydEVkaXRpbmdVc2VyKHRlbXBVc2VyKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBBZGQgbmV3IEJ1b3ksIHVwZGF0ZSBzZXJ2ZXIsIGNhbGxlZCBvbiBBZGQgYnV0dG9uIGNsaWNrXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIGFkZEJ1b3koKSB7XHJcblx0XHRcdGlmICh2bS5uZXdCdW95TmFtZSA9PSAnJykgcmV0dXJuO1xyXG5cdFx0XHR2YXIgZ3VpZCA9IGdlbmVyYXRlR3VpZCgpO1xyXG5cdFx0XHRzZXJ2ZXIuYWRkQnVveSh2bS5uZXdCdW95TmFtZSwgZ3VpZCkudGhlbihmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRndWkuYWxlcnRTdWNjZXNzKCdCdW95IGNyZWF0ZWQuJyk7XHJcblx0XHRcdH0sIGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdGd1aS5hbGVydEJhZFJlc3BvbnNlKHJlcyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR2bS5uZXdCdW95TmFtZSA9ICcnO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKiogUmV0dXJucyBhIEdVSUQgKi9cclxuXHRcdGZ1bmN0aW9uIGdlbmVyYXRlR3VpZCgpIHtcclxuXHRcdFx0cmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24oYykge1xyXG5cdFx0XHRcdHZhciByID0gTWF0aC5yYW5kb20oKSoxNnwwLCB2ID0gYyA9PSAneCcgPyByIDogKHImMHgzfDB4OCk7XHJcblx0XHRcdFx0cmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0XHJcblx0XHRcclxuXHRcdC8vIGZvciAodmFyIGkgPSAwOyBpIDwgdm0uc2Vuc29ycy5sZW5ndGg7IGkrKykge1xyXG5cdFx0Ly8gXHR2bS5zZW5zb3JzRWRpdC5wdXNoKGZhbHNlKTtcclxuXHRcdC8vIH1cclxuXHRcdFxyXG5cdFx0Ly8gZnVuY3Rpb24gdG9nZ2xlRWRpdChpbmRleCkge1xyXG5cdFx0Ly8gXHRpZiAodm0uc2Vuc29yc0VkaXRbaW5kZXhdKSB7XHJcblx0XHQvLyBcdFx0dm0uc2Vuc29yc1tpbmRleF0udW5jb25maWd1cmVkID0gZmFsc2U7XHJcblx0XHQvLyBcdH1cclxuXHRcdC8vIFx0dm0uc2Vuc29yc0VkaXRbaW5kZXhdID0gIXZtLnNlbnNvcnNFZGl0W2luZGV4XTtcclxuXHRcdC8vIH1cclxuXHRcdFxyXG5cdFx0Ly8gZnVuY3Rpb24gc2Vuc29yVmFsaWQoc2Vuc29yKSB7XHJcblx0XHQvLyBcdGlmICghc2Vuc29yLm5hbWUgfHwgIXNlbnNvci51bml0cykge1xyXG5cdFx0Ly8gXHRcdHJldHVybiBmYWxzZTtcclxuXHRcdC8vIFx0fVx0XHRcdFxyXG5cdFx0Ly8gXHRyZXR1cm4gdHJ1ZTtcclxuXHRcdC8vIH1cclxuXHR9XHJcbn0pKCk7IiwiLyoqXHJcbiAqIEZsb29kIE1vbml0b3JpbmcgU3lzdGVtXHJcbiAqIFZlcnNpb24gMC4wLjEgKER1eXVuZylcclxuICpcclxuICogQ29weXJpZ2h0IChDKSBUZWFtIE5lcHR1bmVcclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogQGF1dGhvciAgICAgQW5kcmV3IER5ZXIgPGFuZHJld0BkeWVyZ3JvdXAuY29tLmF1PlxyXG4gKiBAdmVyc2lvbiAgICAwLjAuMVxyXG4gKiBAY29weXJpZ2h0ICBUZWFtIE5lcHR1bmUgKDIwMTUpXHJcbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hY2xlbC9kZWNvMzgwMVxyXG4gKi9cclxuKGZ1bmN0aW9uKCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHRcclxuXHRhbmd1bGFyLm1vZHVsZSgnYXBwLmFkbWluJylcclxuXHRcdC5ydW4oc2V0Um91dGVzKTtcclxuXHRcdFxyXG5cdC8qKiBEZWZpbmUgcm91dGVzIGZvciBhZG1pbiBtb2R1bGUgKi9cclxuXHRmdW5jdGlvbiBzZXRSb3V0ZXMocm91dGVySGVscGVyKSB7XHJcblx0XHRyb3V0ZXJIZWxwZXIuY29uZmlndXJlU3RhdGVzKGdldFN0YXRlcygpKTtcclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gZ2V0U3RhdGVzKCkge1xyXG5cdFx0cmV0dXJuIFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHN0YXRlOiAnYWRtaW4nLFxyXG5cdFx0XHRcdGNvbmZpZzoge1xyXG5cdFx0XHRcdFx0dXJsOiAnL2FkbWluJyxcclxuXHRcdFx0XHRcdGNvbnRyb2xsZXI6ICdBZG1pbkNvbnRyb2xsZXInLFxyXG5cdFx0XHRcdFx0Y29udHJvbGxlckFzOiAndm0nLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvYXBwL2FkbWluL2FkbWluLmh0bWwnLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRhY2Nlc3M6ICdzeXN0ZW1fYWRtaW4nXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRdO1xyXG5cdH1cclxufSkoKTsiLCIvKipcclxuICogRmxvb2QgTW9uaXRvcmluZyBTeXN0ZW1cclxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKEMpIFRlYW0gTmVwdHVuZVxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgICBBbmRyZXcgRHllciA8YW5kcmV3QGR5ZXJncm91cC5jb20uYXU+XHJcbiAqIEB2ZXJzaW9uICAgIDAuMC4xXHJcbiAqIEBjb3B5cmlnaHQgIFRlYW0gTmVwdHVuZSAoMjAxNSlcclxuICogQGxpbmsgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FjbGVsL2RlY28zODAxXHJcbiAqL1xyXG4oZnVuY3Rpb24oKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdFxyXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAuYXV0aCcpXHJcblx0XHQucnVuKGF1dGhSb3V0ZSlcclxuXHRcdFxyXG5cdC8qKiBTZXR1cCByb3V0ZSBhdXRoZW50aWNhdGlvbiByZXN0cmljdGlvbnMgKi9cclxuXHRmdW5jdGlvbiBhdXRoUm91dGUoJHJvb3RTY29wZSwgJHN0YXRlLCBhdXRoKSB7XHJcblx0XHQkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCBzdGF0ZUNoYW5nZSk7XHJcblx0XHRcclxuXHRcdGZ1bmN0aW9uIHN0YXRlQ2hhbmdlKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcyxcclxuXHRcdFx0XHRmcm9tU3RhdGUsIGZyb21QYXJhbXMpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0aWYgKCFhdXRoLmNoZWNrVXNlcih0b1N0YXRlLmRhdGEuYWNjZXNzKSkge1xyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8gb25seSByZWRpcmVjdCBpZiBwYWdlIHdhcyBqdXN0IGxvYWRlZFxyXG5cdFx0XHRcdGlmIChmcm9tU3RhdGUudXJsID09PSAnXicpIHtcclxuXHRcdFx0XHRcdGlmIChhdXRoLmxvZ2dlZEluKCkpIHtcclxuXHRcdFx0XHRcdFx0JHN0YXRlLmdvKCdkYXNoYm9hcmQnKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdCRzdGF0ZS5nbygnbG9naW4nKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcbn0pKCk7IiwiLyoqXHJcbiAqIEZsb29kIE1vbml0b3JpbmcgU3lzdGVtXHJcbiAqIFZlcnNpb24gMC4wLjEgKER1eXVuZylcclxuICpcclxuICogQ29weXJpZ2h0IChDKSBUZWFtIE5lcHR1bmVcclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogQGF1dGhvciAgICAgQW5kcmV3IER5ZXIgPGFuZHJld0BkeWVyZ3JvdXAuY29tLmF1PlxyXG4gKiBAdmVyc2lvbiAgICAwLjAuMVxyXG4gKiBAY29weXJpZ2h0ICBUZWFtIE5lcHR1bmUgKDIwMTUpXHJcbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hY2xlbC9kZWNvMzgwMVxyXG4gKi9cclxuKGZ1bmN0aW9uKCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHRcclxuXHRhbmd1bGFyLm1vZHVsZSgnYXBwLmF1dGgnKVxyXG5cdFx0LmNvbnRyb2xsZXIoJ0F1dGhDb250cm9sbGVyJywgQXV0aENvbnRyb2xsZXIpO1xyXG5cdFxyXG5cdC8qKlxyXG5cdFx0KiBAbmdkb2Mgb2JqZWN0XHJcblx0XHQqIEBuYW1lIGFwcC5hdXRoLmNvbnRyb2xsZXI6QXV0aENvbnRyb2xsZXJcclxuXHRcdCogQGRlc2NyaXB0aW9uIENvbnRyb2xsZXIgZm9yIGF1dGhlbnRpY2F0aW9uIGFjcm9zcyBlbnRpcmUgYXBwXHJcblx0XHQqIEByZXF1aXJlcyAkc2NvcGVcclxuXHRcdCogQHJlcXVpcmVzICRzdGF0ZVxyXG5cdFx0KiBAcmVxdWlyZXMgJHN0YXRlUGFyYW1zXHJcblx0XHQqIEByZXF1aXJlcyBhdXRoXHJcblx0XHQqIEByZXF1aXJlcyBzZXJ2ZXJcclxuXHRcdCogQHJlcXVpcmVzIHJvdXRlSGVscGVyXHJcblx0KiovXHJcblx0ZnVuY3Rpb24gQXV0aENvbnRyb2xsZXIoJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgYXV0aCwgc2VydmVyLCByb3V0ZXJIZWxwZXIpIHtcclxuXHRcdHZhciB2bSA9IHRoaXM7XHJcblx0XHRcclxuXHRcdC8qKiBWYXJpYWJsZXMgYW5kIG1ldGhvZHMgYm91bmQgdG8gdmlld21vZGVsICovXHJcblx0XHR2bS5maXJzdExvZ2luID0gZmFsc2U7XHJcblx0XHR2bS5sb2dpbiA9IGxvZ2luO1xyXG5cdFx0dm0uZm9yZ290UmVzcG9uc2UgPS0gMTtcclxuXHRcdHZtLmNoYW5nZVBhc3N3b3JkUmVzcG9uc2UgPSAtMTtcclxuXHRcdHZtLndhaXRpbmcgPSBmYWxzZTtcclxuXHRcdHZtLmNoYW5nZVBhc3N3b3JkID0gY2hhbmdlUGFzc3dvcmQ7XHJcblx0XHR2bS5mb3Jnb3RQYXNzd29yZCA9IGZvcmdvdFBhc3N3b3JkO1xyXG5cdFx0dm0ucmVzZXRQYXNzd29yZCA9IHJlc2V0UGFzc3dvcmQ7XHJcblx0XHRcclxuXHRcdGFjdGl2YXRlKCk7XHJcblx0XHRcclxuXHRcdC8qKiBDYWxsZWQgd2hlbiBjb250cm9sbGVyIGlzIGluc3RhbnRpYXRlZCAqL1xyXG5cdFx0ZnVuY3Rpb24gYWN0aXZhdGUoKSB7XHJcblx0XHRcdHJlc2V0TG9naW5Gb3JtKCk7XHJcblx0XHRcdCRzY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN1Y2Nlc3MnLCBzdGF0ZUxvYWRlZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqIENhbGxlZCB3aGVuIGEgc3RhdGUgaXMgbG9hZGVkLCB1c2VkIHRvIHJlc2V0IHZpZXdzICovXHJcblx0XHRmdW5jdGlvbiBzdGF0ZUxvYWRlZCgpIHtcclxuXHRcdFx0aWYgKCRzdGF0ZS5pcygnY2hhbmdlX3Bhc3N3b3JkJykgfHxcclxuXHRcdFx0XHRcdCRzdGF0ZS5pcygncmVzZXRfcGFzc3dvcmQnKSB8fFxyXG5cdFx0XHRcdFx0JHN0YXRlLmlzKCdmb3Jnb3RfcGFzc3dvcmQnKSkge1xyXG5cdFx0XHRcdHZtLmNoYW5nZVBhc3N3b3JkUmVzcG9uc2UgPSAtMTtcclxuXHRcdFx0XHR2bS5mb3Jnb3RSZXNwb25zZSA9IC0xO1xyXG5cdFx0XHRcdHZtLndhaXRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRyZXNldFBhc3N3b3JkRm9ybSgpO1xyXG5cdFx0XHRcdHJlc2V0TG9naW5Gb3JtKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqIFNlbmQgbG9naW4gcmVxdWVzdCB0byBzZXJ2ZXIsIGNhbGxlZCBvbiBMb2dpbiBidXR0b24gY2xpY2sgKi9cdFxyXG5cdFx0ZnVuY3Rpb24gbG9naW4oKSB7XHJcblx0XHRcdHNlcnZlci5sb2dpbih2bS5lbWFpbCwgdm0ucGFzc3dvcmQpLnRoZW4oXHJcblx0XHRcdGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0aWYgKGF1dGgubG9nZ2VkSW4oKSkge1xyXG5cdFx0XHRcdFx0aWYgKCFyZXMuZGF0YS5sYXN0TG9naW4uVmFsaWQpIHtcclxuXHRcdFx0XHRcdFx0JHN0YXRlLmdvKCdyZXNldF9wYXNzd29yZCcpO1xyXG5cdFx0XHRcdFx0XHR2bS5maXJzdExvZ2luID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdCRzdGF0ZS5nbygnZGFzaGJvYXJkJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXNldExvZ2luRm9ybSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0ZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0YWxlcnQoJ0ludmFsaWQgZW1haWwgb3IgcGFzc3dvcmQnKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKiBTZW5kIGNoYW5nZSBwYXNzd29yZCByZXF1ZXN0IHRvIHNlcnZlciAqL1xyXG5cdFx0ZnVuY3Rpb24gY2hhbmdlUGFzc3dvcmQoKSB7XHJcblx0XHRcdHZtLndhaXRpbmcgPSB0cnVlO1xyXG5cdFx0XHQvLyBuZWVkIHRvIHZhbGlkYXRlIGlucHV0XHJcblx0XHRcdGlmICh2bS5uZXdQYXNzd29yZCAhPSBcIlwiICYmIHZtLm5ld1Bhc3N3b3JkID09IHZtLmNvbmZpcm1QYXNzd29yZCkge1xyXG5cdFx0XHRcdHNlcnZlci5jaGFuZ2VQYXNzd29yZCh2bS5jdXJyZW50UGFzc3dvcmQsIHZtLm5ld1Bhc3N3b3JkKS50aGVuKGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0dm0uY2hhbmdlUGFzc3dvcmRSZXNwb25zZSA9IDA7XHJcblx0XHRcdFx0fSwgZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHR2bS5jaGFuZ2VQYXNzd29yZFJlc3BvbnNlID0gMTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRhbGVydChcIkludmFsaWQgcGFzc3dvcmRcIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvKiogU2VuZCByZXNldCBwYXNzd29yZCByZXF1ZXN0IHRvIHNlcnZlciAqL1xyXG5cdFx0ZnVuY3Rpb24gcmVzZXRQYXNzd29yZCgpIHtcclxuXHRcdFx0dm0ud2FpdGluZyA9IHRydWU7XHJcblx0XHRcdGlmICh2bS5uZXdQYXNzd29yZCAhPSBcIlwiICYmIHZtLm5ld1Bhc3N3b3JkID09IHZtLmNvbmZpcm1QYXNzd29yZCkge1xyXG5cdFx0XHRcdHNlcnZlci5yZXNldFBhc3N3b3JkKCRzdGF0ZVBhcmFtcy50b2tlbiArIFwiPVwiLCB2bS5uZXdQYXNzd29yZCkudGhlbihmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdHZtLmNoYW5nZVBhc3N3b3JkUmVzcG9uc2UgPSAwO1xyXG5cdFx0XHRcdFx0dm0uZmlyc3RMb2dpbiA9IGZhbHNlO1xyXG5cdFx0XHRcdH0sIGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0dm0uY2hhbmdlUGFzc3dvcmRSZXNwb25zZSA9IDE7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0YWxlcnQoXCJJbnZhbGlkIHBhc3N3b3JkXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKiBTZW5kIGZvcmdvdCBwYXNzd29yZCByZXF1ZXN0IHRvIHNlcnZlciAqL1xyXG5cdFx0ZnVuY3Rpb24gZm9yZ290UGFzc3dvcmQoKSB7XHJcblx0XHRcdHZtLndhaXRpbmcgPSB0cnVlO1xyXG5cdFx0XHRzZXJ2ZXIuZm9yZ290UGFzc3dvcmQodm0uZW1haWwpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0dm0uZm9yZ290UmVzcG9uc2UgPSAwO1xyXG5cdFx0XHR9LCBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHR2bS5mb3Jnb3RSZXNwb25zZSA9IDE7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKiogUmVzZXQgbG9naW4gZm9ybSAqL1xyXG5cdFx0ZnVuY3Rpb24gcmVzZXRMb2dpbkZvcm0oKSB7XHJcblx0XHRcdHZtLmVtYWlsID0gXCJcIjsgLy8gcGxhY2Vob2xkZXJcclxuXHRcdFx0dm0ucGFzc3dvcmQgPSBcIlwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKiBSZXNldCBjaGFuZ2UgcGFzc3dvcmQgZm9ybSAqL1xyXG5cdFx0ZnVuY3Rpb24gcmVzZXRQYXNzd29yZEZvcm0oKSB7XHJcblx0XHRcdHZtLmN1cnJlbnRQYXNzd29yZCA9IFwiXCI7XHJcblx0XHRcdHZtLm5ld1Bhc3N3b3JkID0gXCJcIjtcclxuXHRcdFx0dm0uY29uZmlybVBhc3N3b3JkID0gXCJcIjtcclxuXHRcdH1cclxuXHR9XHJcbn0pKCk7IiwiLyoqXHJcbiAqIEZsb29kIE1vbml0b3JpbmcgU3lzdGVtXHJcbiAqIFZlcnNpb24gMC4wLjEgKER1eXVuZylcclxuICpcclxuICogQ29weXJpZ2h0IChDKSBUZWFtIE5lcHR1bmVcclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogQGF1dGhvciAgICAgQW5kcmV3IER5ZXIgPGFuZHJld0BkeWVyZ3JvdXAuY29tLmF1PlxyXG4gKiBAdmVyc2lvbiAgICAwLjAuMVxyXG4gKiBAY29weXJpZ2h0ICBUZWFtIE5lcHR1bmUgKDIwMTUpXHJcbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hY2xlbC9kZWNvMzgwMVxyXG4gKi9cclxuKGZ1bmN0aW9uKCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHRcclxuXHRhbmd1bGFyLm1vZHVsZSgnYXBwLmF1dGgnKVxyXG5cdFx0LnJ1bihzZXRSb3V0ZXMpO1xyXG5cdFx0XHJcblx0LyoqIERlZmluZSByb3V0ZXMgZm9yIGF1dGggbW9kdWxlICovXHJcblx0ZnVuY3Rpb24gc2V0Um91dGVzKHJvdXRlckhlbHBlcikge1xyXG5cdFx0cm91dGVySGVscGVyLmNvbmZpZ3VyZVN0YXRlcyhnZXRTdGF0ZXMoKSk7XHJcblx0fVxyXG5cdFxyXG5cdGZ1bmN0aW9uIGdldFN0YXRlcygpIHtcclxuXHRcdHJldHVybiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzdGF0ZTogJ2xvZ2luJyxcclxuXHRcdFx0XHRjb25maWc6IHtcclxuXHRcdFx0XHRcdHVybDogJy9sb2dpbicsXHJcblx0XHRcdFx0XHQvLyBjb250cm9sbGVyOiAnQXV0aENvbnRyb2xsZXInLCBub3cgdXNlcyBwYXJlbnQgY29udHJvbGxlclxyXG5cdFx0XHRcdFx0Ly8gY29udHJvbGxlckFzOiAndm0nLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvYXBwL2F1dGgvbG9naW4uaHRtbCcsXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdGFjY2VzczogJ3VuYXV0aGVkJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHN0YXRlOiAnY2hhbmdlX3Bhc3N3b3JkJyxcclxuXHRcdFx0XHRjb25maWc6IHtcclxuXHRcdFx0XHRcdHVybDogJy9jaGFuZ2VfcGFzc3dvcmQnLFxyXG5cdFx0XHRcdFx0Ly8gY29udHJvbGxlcjogJ0F1dGhDb250cm9sbGVyJywgbm93IHVzZXMgcGFyZW50IGNvbnRyb2xsZXJcclxuXHRcdFx0XHRcdC8vIGNvbnRyb2xsZXJBczogJ3ZtJyxcclxuXHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnL2FwcC9hdXRoL2NoYW5nZV9wYXNzd29yZC5odG1sJyxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0YWNjZXNzOiAnYXV0aGVkJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHN0YXRlOiAncmVzZXRfcGFzc3dvcmQnLFxyXG5cdFx0XHRcdGNvbmZpZzoge1xyXG5cdFx0XHRcdFx0dXJsOiAnL3Jlc2V0X3Bhc3N3b3JkP3Rva2VuJyxcclxuXHRcdFx0XHRcdC8vIGNvbnRyb2xsZXI6ICdBdXRoQ29udHJvbGxlcicsIG5vdyB1c2VzIHBhcmVudCBjb250cm9sbGVyXHJcblx0XHRcdFx0XHQvLyBjb250cm9sbGVyQXM6ICd2bScsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9hcHAvYXV0aC9yZXNldF9wYXNzd29yZC5odG1sJyxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0YWNjZXNzOiAndW5hdXRoZWQnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3RhdGU6ICdmb3Jnb3RfcGFzc3dvcmQnLFxyXG5cdFx0XHRcdGNvbmZpZzoge1xyXG5cdFx0XHRcdFx0dXJsOiAnL2ZvcmdvdF9wYXNzd29yZCcsXHJcblx0XHRcdFx0XHQvLyBjb250cm9sbGVyOiAnQXV0aENvbnRyb2xsZXInLCBub3cgdXNlcyBwYXJlbnQgY29udHJvbGxlclxyXG5cdFx0XHRcdFx0Ly8gY29udHJvbGxlckFzOiAndm0nLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvYXBwL2F1dGgvZm9yZ290X3Bhc3N3b3JkLmh0bWwnLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRhY2Nlc3M6ICd1bmF1dGhlZCdcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdF07XHJcblx0fVxyXG59KSgpOyIsIi8qKlxyXG4gKiBGbG9vZCBNb25pdG9yaW5nIFN5c3RlbVxyXG4gKiBWZXJzaW9uIDAuMC4xIChEdXl1bmcpXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoQykgVGVhbSBOZXB0dW5lXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgIEFuZHJldyBEeWVyIDxhbmRyZXdAZHllcmdyb3VwLmNvbS5hdT5cclxuICogQHZlcnNpb24gICAgMC4wLjFcclxuICogQGNvcHlyaWdodCAgVGVhbSBOZXB0dW5lICgyMDE1KVxyXG4gKiBAbGluayAgICAgICBodHRwczovL2dpdGh1Yi5jb20vYWNsZWwvZGVjbzM4MDFcclxuICovXHJcbihmdW5jdGlvbigpIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblx0XHJcblx0YW5ndWxhci5tb2R1bGUoJ2FwcC5hdXRoJylcclxuXHRcdC5mYWN0b3J5KCdhdXRoJywgYXV0aCk7XHJcblx0XHJcblx0LyoqXHJcblx0XHQqIEBuZ2RvYyBzZXJ2aWNlXHJcblx0XHQqIEBuYW1lIGFwcC5hdXRoLmF1dGhcclxuXHRcdCogQHJlcXVpcmVzICR3aW5kb3dcclxuXHRcdCogQHJlcXVpcmVzIG1vbWVudFxyXG5cdCoqL1xyXG5cdGZ1bmN0aW9uIGF1dGgoJHdpbmRvdywgbW9tZW50KSB7XHJcblx0XHRcclxuXHRcdC8qKiBUaGUgc2VydmljZSBtZXRob2RzIHRvIGV4cG9zZSAqL1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bG9nb3V0OiBsb2dvdXQsXHJcblx0XHRcdGxvZ2dlZEluOiBsb2dnZWRJbixcclxuXHRcdFx0Z2V0VG9rZW46IGdldFRva2VuLFxyXG5cdFx0XHRzYXZlVG9rZW46IHNhdmVUb2tlbixcclxuXHRcdFx0Y3VycmVudFVzZXI6IGN1cnJlbnRVc2VyLFxyXG5cdFx0XHRjaGVja1VzZXI6IGNoZWNrVXNlclxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0LyoqIExvZ291dCBieSByZW1vdmluZyB1c2VyIHRva2VuIGZyb20gbG9jYWxTdG9yYWdlICovXHJcblx0XHRmdW5jdGlvbiBsb2dvdXQoKSB7XHJcblx0XHRcdCR3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogUmV0dXJucyB3aGV0aGVyIGN1cnJlbnRseSBsb2dnZWQgaW4gb3Igbm90XHJcblx0XHQgKiBAcmV0dXJuIHtib29sfSBsb2dnZWRJblxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBsb2dnZWRJbigpIHtcclxuXHRcdFx0dmFyIHRva2VuID0gZ2V0VG9rZW4oKTtcclxuXHRcdFx0aWYodG9rZW4pIHtcclxuXHRcdFx0XHR2YXIgcGFyYW1zID0gcGFyc2VKd3QodG9rZW4pO1xyXG5cdFx0XHRcdHJldHVybiAobW9tZW50KCkudW5peCgpIDw9IHBhcmFtcy5leHApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFNhdmUgSldUIHRva2VuIHRvIGxvY2FsU3RvcmFnZSwgdG8gcHJlc2VydmUgc2Vzc2lvblxyXG5cdFx0ICogQHBhcmFtICB7c3RyaW5nfSB0b2tlbiBKV1QgdG9rZW5cclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gc2F2ZVRva2VuKHRva2VuKSB7XHJcblx0XHRcdCR3aW5kb3cubG9jYWxTdG9yYWdlWyd0b2tlbiddID0gdG9rZW47XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogR2V0IEpXVCBUb2tlbiBmcm9tIGxvY2FsU3RvcmFnZVxyXG5cdFx0ICogQHJldHVybiB7c3RyaW5nfSAgICAgICBKV1QgdG9rZW5cclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gZ2V0VG9rZW4oKSB7XHJcblx0XHRcdHJldHVybiAkd2luZG93LmxvY2FsU3RvcmFnZVsndG9rZW4nXTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXR1cm5zIGN1cnJlbnQgdXNlclxyXG5cdFx0ICogVXNlciBkZXRhaWxzIGFyZSBjb250YWluZWQgaW4gSldUIHRva2VuXHJcblx0XHQgKiBAcmV0dXJuIHtzdHJpbmd9IGVtYWlsXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIGN1cnJlbnRVc2VyKCkge1xyXG5cdFx0XHRyZXR1cm4gcGFyc2VKd3QoZ2V0VG9rZW4oKSkuc3ViO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFJldHVybnMgY3VycmVudCB1c2VyIHJvbGVcclxuXHRcdCAqIFVzZXIgZGV0YWlscyBhcmUgY29udGFpbmVkIGluIEpXVCB0b2tlblxyXG5cdFx0ICogQHJldHVybiB7c3RyaW5nfSByb2xlXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIGN1cnJlbnRVc2VyUm9sZSgpIHtcclxuXHRcdFx0dmFyIHRva2VuID0gZ2V0VG9rZW4oKTtcclxuXHRcdFx0aWYgKHRva2VuID09IG51bGwpIHtcclxuXHRcdFx0XHRyZXR1cm4gJ3VuYXV0aGVkJztcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcGFyc2VKd3QodG9rZW4pLnJvbGU7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogUmV0dXJucyB3aGV0aGVyIGEgdXNlciBpcyBpcyBhdXRob3Jpc2VkIGJhc2VkIG9uIHRoZWlyIHJvbGVcclxuXHRcdCAqIEBwYXJhbSAge3N0cmluZ30gcm9sZSByb2xlXHJcblx0XHQgKiBAcmV0dXJuIHtib29sfSAgICAgIGF1dGhvcmlzZWRcclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gY2hlY2tVc2VyKHJvbGUpIHtcclxuXHRcdFx0dmFyIHJvbGVzID0ge1xyXG5cdFx0XHRcdCd1bmF1dGhlZCc6IDAsXHJcblx0XHRcdFx0J2F1dGhlZCc6IDEsXHJcblx0XHRcdFx0J3VzZXInOiAxLFxyXG5cdFx0XHRcdCdwb3dlcl91c2VyJzogMixcclxuXHRcdFx0XHQnc3lzdGVtX2FkbWluJzogMyxcclxuXHRcdFx0XHQnYW5kcmV3JzogOTk5OTlcclxuXHRcdFx0fTtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChyb2xlID09ICdhbnknKSByZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChyb2xlID09ICd1bmF1dGhlZCcpIHtcclxuXHRcdFx0XHRpZiAobG9nZ2VkSW4oKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAoIWxvZ2dlZEluKCkpIHtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiAocm9sZXNbY3VycmVudFVzZXJSb2xlKCldID49IHJvbGVzW3JvbGVdKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBQYXJzZXMgYSBKV1QgdG9rZW5cclxuXHRcdCAqIEBwYXJhbSAge3N0cmluZ30gdG9rZW4gSldUIHRva2VuXHJcblx0XHQgKiBAcmV0dXJuIHtvYmplY3R9ICAgICAgIHBhcnNlZCB0b2tlblxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBwYXJzZUp3dCh0b2tlbikge1xyXG5cdFx0XHR2YXIgYmFzZTY0VXJsID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcclxuXHRcdFx0dmFyIGJhc2U2NCA9IGJhc2U2NFVybC5yZXBsYWNlKCctJywgJysnKS5yZXBsYWNlKCdfJywgJy8nKTtcclxuXHRcdFx0cmV0dXJuIEpTT04ucGFyc2UoJHdpbmRvdy5hdG9iKGJhc2U2NCkpO1xyXG5cdFx0fVxyXG5cdH1cclxufSkoKTsiLCIvKipcclxuICogRmxvb2QgTW9uaXRvcmluZyBTeXN0ZW1cclxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKEMpIFRlYW0gTmVwdHVuZVxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgICBBbmRyZXcgRHllciA8YW5kcmV3QGR5ZXJncm91cC5jb20uYXU+XHJcbiAqIEB2ZXJzaW9uICAgIDAuMC4xXHJcbiAqIEBjb3B5cmlnaHQgIFRlYW0gTmVwdHVuZSAoMjAxNSlcclxuICogQGxpbmsgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FjbGVsL2RlY28zODAxXHJcbiAqL1xyXG4oZnVuY3Rpb24oKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdFxyXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAuYXV0aCcpXHJcblx0XHQuZmFjdG9yeSgnYXV0aEludGVyY2VwdG9yJywgYXV0aEludGVyY2VwdG9yKTtcclxuXHRcclxuXHQvKipcclxuXHRcdCogQG5nZG9jIHNlcnZpY2VcclxuXHRcdCogQG5hbWUgbW9kdWxlLmF1dGhJbnRlcmNlcHRvclxyXG5cdFx0KiBAcmVxdWlyZXMgYXV0aFxyXG5cdFx0KiBAZGVzY3JpcHRpb24gaW50ZXJjZXB0cyBhbGwgcmVxdWVzdHMgYW5kIHJlc3BvbnNlcyxcclxuXHRcdCogICAgICAgICAgICAgIHNhdmVzIGluY29taW5nIGF1dGhlbnRpY2F0aW9uIHRva2Vuc1xyXG5cdCoqL1xyXG5cdGZ1bmN0aW9uIGF1dGhJbnRlcmNlcHRvcihhdXRoKSB7XHJcblx0XHRcclxuXHRcdC8qKiBUaGUgc2VydmljZSBtZXRob2RzIHRvIGV4cG9zZSAqL1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cmVxdWVzdDogcmVxdWVzdCxcclxuXHRcdFx0cmVzcG9uc2U6IHJlc3BvbnNlXHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHQvKiogUmVxdWVzdHMgYXJlIG5vdCBtb2RpZmllZCAqL1xyXG5cdFx0ZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcclxuXHRcdFx0cmV0dXJuIGNvbmZpZztcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqIElmIGEgcmVzcG9uc2UgY29udGFpbnMgYSB0b2tlbiwgc2F2ZSBpdCAqL1xyXG5cdFx0ZnVuY3Rpb24gcmVzcG9uc2UocmVzKSB7XHJcblx0XHRcdGlmIChyZXMuZGF0YS50b2tlbikge1xyXG5cdFx0XHRcdGF1dGguc2F2ZVRva2VuKHJlcy5kYXRhLnRva2VuKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcmVzO1xyXG5cdFx0fVxyXG5cdH1cclxufSkoKTsiLCIvKipcclxuICogRmxvb2QgTW9uaXRvcmluZyBTeXN0ZW1cclxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKEMpIFRlYW0gTmVwdHVuZVxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgICBBbmRyZXcgRHllciA8YW5kcmV3QGR5ZXJncm91cC5jb20uYXU+XHJcbiAqIEB2ZXJzaW9uICAgIDAuMC4xXHJcbiAqIEBjb3B5cmlnaHQgIFRlYW0gTmVwdHVuZSAoMjAxNSlcclxuICogQGxpbmsgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FjbGVsL2RlY28zODAxXHJcbiAqL1xyXG4oZnVuY3Rpb24oKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdFxyXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAuY29uZmlnJylcclxuXHRcdC5jb250cm9sbGVyKCdDb25maWdDb250cm9sbGVyJywgQ29uZmlnQ29udHJvbGxlcik7XHJcblx0XHJcblx0LyoqXHJcblx0XHQqIEBuZ2RvYyBvYmplY3RcclxuXHRcdCogQG5hbWUgYXBwLmNvbmZpZy5jb250cm9sbGVyOkNvbmZpZ0NvbnRyb2xsZXJcclxuXHRcdCogQGRlc2NyaXB0aW9uIFByb3ZpZGVzIHZpZXdtb2RlbCBmb3IgY29uZmlnIHZpZXdcclxuXHRcdCogQHJlcXVpcmVzIHNlcnZlclxyXG5cdCoqL1xyXG5cdGZ1bmN0aW9uIENvbmZpZ0NvbnRyb2xsZXIoc2VydmVyLCBndWkpIHtcclxuXHRcdHZhciB2bSA9IHRoaXM7XHJcblx0XHRcclxuXHRcdC8qKiBWYXJpYWJsZXMgYW5kIG1ldGhvZHMgYm91bmQgdG8gdmlld21vZGVsICovXHJcblx0XHR2bS5idW95R3JvdXBzID0gW107XHJcblx0XHR2bS5idW95SW5zdGFuY2VzID0gW107XHJcblx0XHR2bS5ncm91cEJ1b3lzID0gW107XHJcblx0XHR2bS5jb21tYW5kcyA9IFtdO1xyXG5cdFx0dm0uY29tbWFuZFR5cGVzID0gW107XHJcblx0XHR2bS5zZW5zb3JUeXBlcyA9IFtdO1xyXG5cdFx0dm0ud2FybmluZ1RyaWdnZXJzID0gW107XHJcblx0XHR2bS5jb21tYW5kID0geyBpZDogLTEsIHZhbHVlOiAnJyB9O1xyXG5cdFx0dm0uc2VsZWN0ZWQgPSB7IHR5cGU6ICdhbGwnLCBvYmo6IG51bGwgfTtcclxuXHRcdHZtLmVkaXROYW1lID0ge307XHJcblx0XHR2bS5lZGl0TmFtZS5vbiA9IGZhbHNlO1xyXG5cdFx0dm0uZWRpdEdyb3VwID0ge307XHJcblx0XHR2bS5lZGl0R3JvdXAub24gPSBmYWxzZTtcclxuXHRcdHZtLm5ld0NvbW1hbmQgPSBmYWxzZTtcclxuXHRcdHZtLm5ld1RyaWdnZXIgPSBmYWxzZTtcclxuXHRcdHZtLm9wZXJhdG9ycyA9IFsgJzwnLCAnPicsICc9JyBdO1xyXG5cdFx0dm0udHJpZ2dlciA9IHt9O1xyXG5cdFx0dm0udHJlZU9wdGlvbnMgPSB7fTtcclxuXHRcdHZtLnNlbGVjdEFsbCA9IHNlbGVjdEFsbDtcclxuXHRcdHZtLnNlbGVjdEJ1b3lHcm91cCA9IHNlbGVjdEJ1b3lHcm91cDtcclxuXHRcdHZtLnNlbGVjdEJ1b3lJbnN0YW5jZSA9IHNlbGVjdEJ1b3lJbnN0YW5jZTtcclxuXHRcdHZtLnN0YXJ0RWRpdGluZ05hbWUgPSBzdGFydEVkaXRpbmdOYW1lO1xyXG5cdFx0dm0uZmluaXNoRWRpdGluZ05hbWUgPSBmaW5pc2hFZGl0aW5nTmFtZTtcclxuXHRcdHZtLnN0YXJ0RWRpdGluZ0J1b3lHcm91cCA9IHN0YXJ0RWRpdGluZ0J1b3lHcm91cDtcclxuXHRcdHZtLmZpbmlzaEVkaXRpbmdCdW95R3JvdXAgPSBmaW5pc2hFZGl0aW5nQnVveUdyb3VwO1xyXG5cdFx0dm0uc2VsZWN0TmV3QnVveUdyb3VwID0gc2VsZWN0TmV3QnVveUdyb3VwO1xyXG5cdFx0dm0uc2F2ZU5ld0J1b3lHcm91cCA9IHNhdmVOZXdCdW95R3JvdXA7XHJcblx0XHR2bS5idW95R3JvdXBGaWx0ZXIgPSBidW95R3JvdXBGaWx0ZXI7XHJcblx0XHR2bS5jb21tYW5kRmlsdGVyID0gY29tbWFuZEZpbHRlcjtcclxuXHRcdHZtLnNlbmRDb21tYW5kID0gc2VuZENvbW1hbmQ7XHJcblx0XHR2bS5kZWxldGVDb21tYW5kID0gZGVsZXRlQ29tbWFuZDtcclxuXHRcdHZtLnNob3dCdW95Q29uZmlnID0gc2hvd0J1b3lDb25maWc7XHJcblx0XHR2bS5hZGRUcmlnZ2VyID0gYWRkVHJpZ2dlcjtcclxuXHRcdHZtLmNhbmNlbE5ld0NvbW1hbmQgPSBjYW5jZWxOZXdDb21tYW5kO1xyXG5cdFx0dm0uY2FuY2VsTmV3VHJpZ2dlciA9IGNhbmNlbE5ld1RyaWdnZXI7XHJcblx0XHR2bS5lZGl0aW5nID0gZWRpdGluZztcclxuXHRcdHZtLmNhbmNlbEVkaXROYW1lID0gY2FuY2VsRWRpdE5hbWU7XHJcblx0XHR2bS5jYW5jZWxFZGl0R3JvdXAgPSBjYW5jZWxFZGl0R3JvdXA7XHJcblx0XHR2bS50b2dnbGVCdW95R3JvdXAgPSB0b2dnbGVCdW95R3JvdXA7XHJcblx0XHRcclxuXHRcdGFjdGl2YXRlKCk7XHJcblx0XHRcclxuXHRcdC8qKiBDYWxsZWQgd2hlbiBjb250cm9sbGVyIGlzIGluc3RhbnRpYXRlZCAoY29uZmlnIHBhZ2UgaXMgbG9hZGVkKSAqL1xyXG5cdFx0ZnVuY3Rpb24gYWN0aXZhdGUoKSB7XHJcblx0XHRcdHF1ZXJ5QnVveUdyb3VwcygpO1xyXG5cdFx0XHRxdWVyeUJ1b3lJbnN0YW5jZXMoKTtcclxuXHRcdFx0cXVlcnlDb21tYW5kVHlwZXMoKTtcclxuXHRcdFx0cXVlcnlXYXJuaW5nVHJpZ2dlcnMoKTtcclxuXHRcdFx0cmVzZXROZXdUcmlnZ2VyKCk7XHJcblx0XHRcdHNldFRyZWVPcHRpb25zKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqIFNldCB0aGUgdHJlZSBvcHRpb25zIGZvciBidW95IGdyb3VwcyBsaXN0ICovXHJcblx0XHRmdW5jdGlvbiBzZXRUcmVlT3B0aW9ucygpIHtcclxuXHRcdFx0dm0udHJlZU9wdGlvbnMgPSB7XHJcblx0XHRcdFx0YWNjZXB0OiBmdW5jdGlvbihzb3VyY2UsIGRlc3QsIGRlc3RJbmRleCkge1xyXG5cdFx0XHRcdFx0Ly8gaWYgKGRlc3Qubm9kcm9wRW5hYmxlZCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdGlmIChzb3VyY2UuJG1vZGVsVmFsdWUudHlwZSAhPSBcImluc3RhbmNlXCIpIHtcclxuXHRcdFx0XHRcdFx0Ly8gcHJldmVudCBncm91cHMgZnJvbSBiZWluZyBtb3ZlZCBpbnRvIGdyb3Vwc1xyXG5cdFx0XHRcdFx0XHRpZiAoZGVzdC5kZXB0aCgpID4gMCkgcmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Ly8gcHJldmVudCBpbnN0YW5jZXMgZnJvbSBiZWluZyBtb3ZlZCBvdXQgb2YgYSBncm91cFxyXG5cdFx0XHRcdFx0XHRpZiAoZGVzdC5kZXB0aCgpICE9IDEpIHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdFx0Ly8gcHJldmVudCBpbnN0YW5jZXMgYmVpbmcgZHJhZ2dlZCBpbnRvIGNvbGxhcHNlZCBncm91cHNcclxuXHRcdFx0XHRcdFx0aWYgKGRlc3QuY2hpbGROb2RlcygpW2Rlc3RJbmRleF0gIT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChkZXN0LmNoaWxkTm9kZXMoKVtkZXN0SW5kZXhdLmNvbGxhcHNlZCkgcmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGRyb3BwZWQ6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhldmVudCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRkcmFnU3RhcnQ6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHQvLyBzZWxlY3QgYnVveSBncm91cC9pbnN0YW5jZSB3aGVuIGl0J3MgY2xpY2tlZFxyXG5cdFx0XHRcdFx0Ly8gIChkcmFnZ2luZyBvdmVycmlkZXMgbmctY2xpY2sgZXZlbnQpXHJcblx0XHRcdFx0XHR2YXIgc291cmNlID0gZXZlbnQuc291cmNlLm5vZGVTY29wZTtcclxuXHRcdFx0XHRcdGlmIChzb3VyY2UuJG1vZGVsVmFsdWUudHlwZSA9PSBcImdyb3VwXCIpIHtcclxuXHRcdFx0XHRcdFx0c2VsZWN0QnVveUdyb3VwKHNvdXJjZS4kbW9kZWxWYWx1ZSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRzZWxlY3RCdW95SW5zdGFuY2Uoc291cmNlLiRtb2RlbFZhbHVlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKiBRdWVyeSBidW95IGdyb3VwcyBmcm9tIHRoZSBzZXJ2ZXIgKi9cclxuXHRcdGZ1bmN0aW9uIHF1ZXJ5QnVveUdyb3VwcygpIHtcclxuXHRcdFx0c2VydmVyLmdldEJ1b3lHcm91cHMoKS50aGVuKGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdHZtLmJ1b3lHcm91cHMgPSByZXMuZGF0YS5idW95R3JvdXBzO1xyXG5cdFx0XHRcdHBhcnNlR3JvdXBOYW1lcygpXHJcblx0XHRcdH0sIGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdGd1aS5hbGVydEJhZFJlc3BvbnNlKHJlcyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKiogUXVlcnkgYnVveSBpbnN0YW5jZXMgZnJvbSB0aGUgc2VydmVyICovXHJcblx0XHRmdW5jdGlvbiBxdWVyeUJ1b3lJbnN0YW5jZXMoKSB7XHJcblx0XHRcdHNlcnZlci5nZXRCdW95SW5zdGFuY2VzKCkudGhlbihmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHR2bS5idW95SW5zdGFuY2VzID0gcmVzLmRhdGEuYnVveUluc3RhbmNlcztcclxuXHRcdFx0XHRwYXJzZUdyb3VwTmFtZXMoKVxyXG5cdFx0XHR9LCBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRndWkuYWxlcnRCYWRSZXNwb25zZShyZXMpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqIFF1ZXJ5IGNvbW1hbmQgdHlwZXMgZnJvbSB0aGUgc2VydmVyICovXHJcblx0XHRmdW5jdGlvbiBxdWVyeUNvbW1hbmRUeXBlcygpIHtcclxuXHRcdFx0c2VydmVyLmdldENvbW1hbmRUeXBlcygpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0dm0uY29tbWFuZFR5cGVzID0gcmVzLmRhdGEuY29tbWFuZFR5cGVzO1xyXG5cdFx0XHRcdHF1ZXJ5Q29tbWFuZHMoKTtcclxuXHRcdFx0fSwgZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0Z3VpLmFsZXJ0QmFkUmVzcG9uc2UocmVzKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKiBRdWVyeSBidW95IGNvbW1hbmRzIGZyb20gdGhlIHNlcnZlciAqL1xyXG5cdFx0ZnVuY3Rpb24gcXVlcnlDb21tYW5kcygpIHtcclxuXHRcdFx0c2VydmVyLmdldEJ1b3lDb21tYW5kcygpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0dm0uY29tbWFuZHMgPSByZXMuZGF0YS5jb21tYW5kcztcclxuXHRcdFx0XHRwYXJzZUNvbW1hbmRzKCk7XHJcblx0XHRcdH0sIGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdGd1aS5hbGVydEJhZFJlc3BvbnNlKHJlcyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKiogUXVlcnkgd2FybmluZyB0cmlnZ2VycyBmcm9tIHRoZSBzZXJ2ZXIgKi9cclxuXHRcdGZ1bmN0aW9uIHF1ZXJ5V2FybmluZ1RyaWdnZXJzKCkge1xyXG5cdFx0XHRzZXJ2ZXIuZ2V0V2FybmluZ1RyaWdnZXJzKCkudGhlbihmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHR2bS53YXJuaW5nVHJpZ2dlcnMgPSByZXMuZGF0YS53YXJuaW5nVHJpZ2dlcnM7XHJcblx0XHRcdFx0cXVlcnlTZW5zb3JUeXBlcygpO1xyXG5cdFx0XHR9LCBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRndWkuYWxlcnRCYWRSZXNwb25zZShyZXMpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqIFF1ZXJ5IHNlbnNvciB0eXBlcyBmcm9tIHRoZSBzZXJ2ZXIgKi9cclxuXHRcdGZ1bmN0aW9uIHF1ZXJ5U2Vuc29yVHlwZXMoKSB7XHJcblx0XHRcdHNlcnZlci5nZXRTZW5zb3JUeXBlcygpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0dm0uc2Vuc29yVHlwZXMgPSByZXMuZGF0YS5zZW5zb3JUeXBlcztcclxuXHRcdFx0XHRwYXJzZVdhcm5pbmdTZW5zb3JzKCk7XHJcblx0XHRcdH0sIGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdGd1aS5hbGVydEJhZFJlc3BvbnNlKHJlcyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKiogQXNzb2NpYXRlIGJ1b3kgaW5zdGFuY2VzIHdpdGggZ3JvdXBzICovXHJcblx0XHRmdW5jdGlvbiBwYXJzZUdyb3VwTmFtZXMoKSB7XHJcblx0XHRcdHJlc2V0QnVveUdyb3VwSW5zdGFuY2VzKCk7XHJcblx0XHRcdHZtLmJ1b3lJbnN0YW5jZXMuZm9yRWFjaChmdW5jdGlvbihidW95SW5zdGFuY2UpIHtcclxuXHRcdFx0XHRzZXRCdW95SW5zdGFuY2VHcm91cChidW95SW5zdGFuY2UpO1xyXG5cdFx0XHRcdGJ1b3lJbnN0YW5jZS50eXBlID0gJ2luc3RhbmNlJztcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKiBBc3NvY2lhdGUgc2Vuc29yIGFuZCBidW95IGluZm8gd2l0aCB3YXJuaW5ncyAqL1xyXG5cdFx0ZnVuY3Rpb24gcGFyc2VXYXJuaW5nU2Vuc29ycygpIHtcclxuXHRcdFx0dm0ud2FybmluZ1RyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24odHJpZ2dlcikge1xyXG5cdFx0XHRcdC8vIGdldCBidW95IG5hbWVcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZtLmJ1b3lJbnN0YW5jZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdHZhciBidW95SW5zdGFuY2UgPSB2bS5idW95SW5zdGFuY2VzW2ldO1xyXG5cdFx0XHRcdFx0aWYgKGJ1b3lJbnN0YW5jZS5pZCA9PSB0cmlnZ2VyLmJ1b3lJbnN0YW5jZUlkKSB7XHJcblx0XHRcdFx0XHRcdHRyaWdnZXIuYnVveU5hbWUgPSBidW95SW5zdGFuY2UubmFtZTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIGdldCBzZW5zb3IgbmFtZVxyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdm0uc2Vuc29yVHlwZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdHZhciBzZW5zb3JUeXBlID0gdm0uc2Vuc29yVHlwZXNbaV07XHJcblx0XHRcdFx0XHRpZiAoc2Vuc29yVHlwZS5pZCA9PSB0cmlnZ2VyLnNlbnNvclR5cGVJZCkge1xyXG5cdFx0XHRcdFx0XHR0cmlnZ2VyLnNlbnNvck5hbWUgPSBzZW5zb3JUeXBlLm5hbWU7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogRGV0ZXJtaW5lIHdoZXRoZXIgdG8gc2hvdyBjb21tYW5kIGFuZCB3YXJuaW5nIHRyaWdnZXIgY29uZmlnXHJcblx0XHQgKiBAcmV0dXJuIHtib29sfSBzaG93IGNvbmZpZ1xyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBzaG93QnVveUNvbmZpZygpIHtcclxuXHRcdFx0aWYgKHZtLnNlbGVjdGVkLnR5cGUgPT0gJ2luc3RhbmNlJykgcmV0dXJuIHRydWU7XHJcblx0XHRcdGlmICh2bS5zZWxlY3RlZC50eXBlID09ICdncm91cCcgJiYgdm0uZ3JvdXBCdW95cy5sZW5ndGggPiAwKSByZXR1cm4gdHJ1ZTtcclxuXHRcdFx0aWYgKHZtLnNlbGVjdGVkLnR5cGUgPT0gJ2FsbCcgJiYgdm0uYnVveUluc3RhbmNlcy5sZW5ndGggPiAwKSByZXR1cm4gdHJ1ZTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKiogQXNzb2NpYXRlIGJ1b3kgaW5zdGFuY2VzIHdpdGggYnVveSBncm91cHMgKi9cclxuXHRcdGZ1bmN0aW9uIHVwZGF0ZUdyb3VwQnVveXMoKSB7XHJcblx0XHRcdHZtLmdyb3VwQnVveXMgPSBbXTtcclxuXHRcdFx0dm0uYnVveUluc3RhbmNlcy5mb3JFYWNoKGZ1bmN0aW9uKGJ1b3lJbnN0YW5jZSkge1xyXG5cdFx0XHRcdGlmIChidW95SW5zdGFuY2UuYnVveUdyb3VwSWQgPT0gdm0uc2VsZWN0ZWQub2JqLmlkKSB7XHJcblx0XHRcdFx0XHR2bS5ncm91cEJ1b3lzLnB1c2goYnVveUluc3RhbmNlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKiogU2hvdyBjb25maWcgZm9yIGFsbCBidW95cyAqL1xyXG5cdFx0ZnVuY3Rpb24gc2VsZWN0QWxsKCkge1xyXG5cdFx0XHRzdG9wRWRpdGluZygpO1xyXG5cdFx0XHR2bS5zZWxlY3RlZC50eXBlID0gJ2FsbCc7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKiBDbG9zZSBhbGwgZWRpdCBmaWVsZHMgKi9cclxuXHRcdGZ1bmN0aW9uIHN0b3BFZGl0aW5nKCkge1xyXG5cdFx0XHR2bS5lZGl0TmFtZS5vbiA9IGZhbHNlO1xyXG5cdFx0XHR2bS5lZGl0R3JvdXAub24gPSBmYWxzZTtcclxuXHRcdFx0dm0ubmV3Q29tbWFuZCA9IGZhbHNlO1xyXG5cdFx0XHR2bS5uZXdUcmlnZ2VyID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKiBTaG93IGNvbmZpZyBmb3Igc2VsZWN0ZWQgYnVveSBncm91cCAqL1xyXG5cdFx0ZnVuY3Rpb24gc2VsZWN0QnVveUdyb3VwKGJ1b3lHcm91cCkge1xyXG5cdFx0XHRzdG9wRWRpdGluZygpO1xyXG5cdFx0XHR2bS5zZWxlY3RlZC50eXBlID0gJ2dyb3VwJztcclxuXHRcdFx0dm0uc2VsZWN0ZWQub2JqID0gYnVveUdyb3VwO1xyXG5cdFx0XHR1cGRhdGVHcm91cEJ1b3lzKCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKiBTaG93IGNvbmZpZyBmb3Igc2VsZWN0ZWQgYnVveSBpbnN0YW5jZSAqL1xyXG5cdFx0ZnVuY3Rpb24gc2VsZWN0QnVveUluc3RhbmNlKGJ1b3lJbnN0YW5jZSkge1xyXG5cdFx0XHRzdG9wRWRpdGluZygpO1xyXG5cdFx0XHR2bS5zZWxlY3RlZC50eXBlID0gJ2luc3RhbmNlJztcclxuXHRcdFx0dm0uc2VsZWN0ZWQub2JqID0gYnVveUluc3RhbmNlO1xyXG5cdFx0XHR1cGRhdGVHcm91cEJ1b3lzKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqIFNldCBhbGwgYnVveSBncm91cHMgdG8gaGF2ZSBubyBpbnN0YW5jZXMgKi9cclxuXHRcdGZ1bmN0aW9uIHJlc2V0QnVveUdyb3VwSW5zdGFuY2VzKCkge1xyXG5cdFx0XHR2bS5idW95R3JvdXBzLmZvckVhY2goZnVuY3Rpb24oYnVveUdyb3VwKSB7XHJcblx0XHRcdFx0YnVveUdyb3VwLnR5cGUgPSAnZ3JvdXAnO1xyXG5cdFx0XHRcdGJ1b3lHcm91cC5idW95SW5zdGFuY2VzID0gW107XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKiBBc3NvY2lhdGUgYnVveSBpbnN0YW5jZXMgd2l0aCBncm91cHMgKi9cclxuXHRcdGZ1bmN0aW9uIHNldEJ1b3lJbnN0YW5jZUdyb3VwKGJ1b3lJbnN0YW5jZSkge1xyXG5cdFx0XHR2bS5idW95R3JvdXBzLmZvckVhY2goZnVuY3Rpb24oYnVveUdyb3VwKSB7XHJcblx0XHRcdFx0aWYgKGJ1b3lHcm91cC5pZCA9PSBidW95SW5zdGFuY2UuYnVveUdyb3VwSWQpIHtcclxuXHRcdFx0XHRcdGJ1b3lJbnN0YW5jZS5idW95R3JvdXBOYW1lID0gcmVtb3ZlRW5jbG9zaW5nQnJhY2tldHMoYnVveUdyb3VwLm5hbWUpO1xyXG5cdFx0XHRcdFx0YnVveUdyb3VwLmJ1b3lJbnN0YW5jZXMucHVzaChidW95SW5zdGFuY2UpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqIFRvZ2dsZSBidW95IGdyb3VwIGluIGxpc3QgKi9cclxuXHRcdGZ1bmN0aW9uIHRvZ2dsZUJ1b3lHcm91cChidW95R3JvdXApIHtcclxuXHRcdFx0YnVveUdyb3VwLmNvbGxhcHNlZCA9ICFidW95R3JvdXAuY29sbGFwc2VkO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKiogU3RhcnQgZWRpdGluZyBidW95IGdyb3VwIG9yIGluc3RhbmNlIG5hbWUgKi9cclxuXHRcdGZ1bmN0aW9uIHN0YXJ0RWRpdGluZ05hbWUoKSB7XHJcblx0XHRcdC8qIGlzIGl0IGJldHRlciB0byBiaW5kIGVkaXQgdmFsdWUgZGlyZWN0bHkgdG8gbWFpbiBidW95SW5zdGFuY2UsXHJcblx0XHRcdG9yIHdhaXQgdW50aWwgaXQncyAnc2F2ZWQnIGJlZm9yZSB1cGRhdGluZyBtYWluIGJ1b3lJbnN0YW5jZT9cclxuXHRcdFx0dXBkYXRpbmcgbGl2ZSBpcyBjb29sZXIgKi9cclxuXHRcdFx0Ly8gdm0uZWRpdE5hbWUudmFsdWUgPSB2bS5zZWxlY3RlZC5vYmoubmFtZTtcclxuXHRcdFx0dm0uZWRpdE5hbWUub24gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKiogU2F2ZSBidW95IGdyb3VwIG9yIGluc3RhbmNlIG5hbWUgdG8gc2VydmVyIGFuZCB1cGRhdGUgcGFnZSAqL1xyXG5cdFx0ZnVuY3Rpb24gZmluaXNoRWRpdGluZ05hbWUoKSB7XHJcblx0XHRcdC8vIHZtLnNlbGVjdGVkLm9iai5uYW1lID0gdm0uZWRpdE5hbWUudmFsdWU7XHJcblx0XHRcdHZtLmVkaXROYW1lLm9uID0gZmFsc2U7XHJcblx0XHRcdC8vIHVwZGF0ZSBzZXJ2ZXJcclxuXHRcdFx0aWYgKHZtLnNlbGVjdGVkLnR5cGUgPT0gJ2dyb3VwJykge1xyXG5cdFx0XHRcdHNlcnZlci51cGRhdGVCdW95R3JvdXBOYW1lKHZtLnNlbGVjdGVkLm9iai5pZCxcclxuXHRcdFx0XHRcdHZtLnNlbGVjdGVkLm9iai5uYW1lKS50aGVuKGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRxdWVyeUJ1b3lHcm91cHMoKTtcclxuXHRcdFx0XHRcdFx0Z3VpLmFsZXJ0U3VjY2VzcygnTmFtZSB1cGRhdGVkLicpXHJcblx0XHRcdFx0XHR9LCBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0Z3VpLmFsZXJ0QmFkUmVzcG9uc2UocmVzKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHZtLnNlbGVjdGVkLnR5cGUgPT0gJ2luc3RhbmNlJykge1xyXG5cdFx0XHRcdHNlcnZlci51cGRhdGVCdW95SW5zdGFuY2VOYW1lKHZtLnNlbGVjdGVkLm9iai5pZCxcclxuXHRcdFx0XHRcdHZtLnNlbGVjdGVkLm9iai5uYW1lLCB2bS5zZWxlY3RlZC5vYmouYnVveUdyb3VwSWQpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdHF1ZXJ5QnVveUluc3RhbmNlcygpO1xyXG5cdFx0XHRcdFx0XHRndWkuYWxlcnRTdWNjZXNzKCdOYW1lIHVwZGF0ZWQuJylcclxuXHRcdFx0XHRcdH0sIGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRndWkuYWxlcnRCYWRSZXNwb25zZShyZXMpO1xyXG5cdFx0XHRcdFx0fSk7O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKiBDYW5jZWwgYnVveSBncm91cCBvciBpbnN0YW5jZSBuYW1lIGVkaXRpbmcgKi9cclxuXHRcdGZ1bmN0aW9uIGNhbmNlbEVkaXROYW1lKCkge1xyXG5cdFx0XHR2bS5lZGl0TmFtZS5vbiA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKiogU3RhcnQgZWRpdGluZyB0aGUgZ3JvdXAgaXMgYSBidW95IGluc3RhbmNlIGlzIGluICovXHJcblx0XHRmdW5jdGlvbiBzdGFydEVkaXRpbmdCdW95R3JvdXAoKSB7XHJcblx0XHRcdHZtLmVkaXRHcm91cC5vbiA9IHRydWU7XHJcblx0XHRcdHZtLmVkaXRHcm91cC5idW95R3JvdXBJZCA9IHZtLnNlbGVjdGVkLm9iai5idW95R3JvdXBJZDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqIFNhdmUgYnVveSdzIG5ldyBncm91cCBhbmQgbmFtZSB0byBzZXJ2ZXIgYW5kIHVwZGF0ZSBwYWdlICovXHJcblx0XHRmdW5jdGlvbiBmaW5pc2hFZGl0aW5nQnVveUdyb3VwKCkge1xyXG5cdFx0XHR2bS5lZGl0R3JvdXAub24gPSBmYWxzZTtcclxuXHRcdFx0dm0uc2VsZWN0ZWQub2JqLmJ1b3lHcm91cElkID0gdm0uZWRpdEdyb3VwLmJ1b3lHcm91cElkO1xyXG5cdFx0XHRzZXRCdW95R3JvdXBOYW1lKHZtLnNlbGVjdGVkLm9iaik7XHJcblx0XHRcdC8vIHVwZGF0ZSBzZXJ2ZXJcclxuXHRcdFx0c2VydmVyLnVwZGF0ZUJ1b3lJbnN0YW5jZUdyb3VwKFxyXG5cdFx0XHRcdHZtLnNlbGVjdGVkLm9iai5idW95SWQsXHJcblx0XHRcdFx0dm0uZWRpdEdyb3VwLmJ1b3lHcm91cElkLFxyXG5cdFx0XHRcdHZtLmVkaXRHcm91cC5uYW1lXHJcblx0XHRcdCkudGhlbihmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRxdWVyeUJ1b3lJbnN0YW5jZXMoKTtcclxuXHRcdFx0XHRndWkuYWxlcnRTdWNjZXNzKCdOZXcgYnVveSBpbnN0YW5jZSBjcmVhdGVkLicpXHJcblx0XHRcdH0sIGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdGd1aS5hbGVydEJhZFJlc3BvbnNlKHJlcyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKiogQ2FuY2VsIGVkaXQgb2YgYSBidW95J3MgZ3JvdXAgKi9cclxuXHRcdGZ1bmN0aW9uIGNhbmNlbEVkaXRHcm91cCgpIHtcclxuXHRcdFx0dm0uZWRpdEdyb3VwLm9uID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogRGV0ZXJtaW5lIHdoZXRoZXIgYW4gZWRpdCBmaWVsZCBpcyBjdXJyZW50bHkgb3Blbi4gVXNlZCB0b1xyXG5cdFx0ICogZW5zdXJlIHRoYXQgdXNlcnMgY2FuIG9ubHkgZWRpdCBvbmUgcGFydGljdWxhciB0aGluZyBhdCBvbmNlLlxyXG5cdFx0ICogQHJldHVybiB7Ym9vbH0gZWRpdCBmaWVsZCBpcyBvcGVuXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIGVkaXRpbmcoKSB7XHJcblx0XHRcdGlmICh2bS5lZGl0TmFtZS5vbikgcmV0dXJuIHRydWU7XHJcblx0XHRcdGlmICh2bS5lZGl0R3JvdXAub24pIHJldHVybiB0cnVlO1xyXG5cdFx0XHRpZiAodm0ubmV3Q29tbWFuZCkgcmV0dXJuIHRydWU7XHJcblx0XHRcdGlmICh2bS5uZXdUcmlnZ2VyKSByZXR1cm4gdHJ1ZTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKiogU2hvdyBjb25maWcgZm9yIGEgbmV3IGJ1b3kgZ3JvdXAgKi9cclxuXHRcdGZ1bmN0aW9uIHNlbGVjdE5ld0J1b3lHcm91cCgpIHtcclxuXHRcdFx0dm0uc2VsZWN0ZWQudHlwZSA9ICduZXdHcm91cCc7XHJcblx0XHRcdHZtLnNlbGVjdGVkLm9iaiA9IG51bGw7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKiBTYXZlIG5ldyBidW95IGdyb3VwIHRvIHNlcnZlciBhbmQgdXBkYXRlIHBhZ2UgKi9cclxuXHRcdGZ1bmN0aW9uIHNhdmVOZXdCdW95R3JvdXAoKSB7XHJcblx0XHRcdHNlcnZlci5uZXdCdW95R3JvdXAodm0uZWRpdE5hbWUudmFsdWUpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0dm0uc2VsZWN0ZWQudHlwZSA9ICdhbGwnO1xyXG5cdFx0XHRcdHF1ZXJ5QnVveUdyb3VwcygpO1xyXG5cdFx0XHRcdGd1aS5hbGVydFN1Y2Nlc3MoJ05ldyBncm91cCBjcmVhdGVkLicpXHJcblx0XHRcdH0sIGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdGd1aS5hbGVydEJhZFJlc3BvbnNlKHJlcyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0LyoqIEFzc29jaWF0ZSBlYWNoIGNvbW1hbmQgd2l0aCBidW95IGFuZCBjb21tYW5kIGluZm8gKi9cclxuXHRcdGZ1bmN0aW9uIHBhcnNlQ29tbWFuZHMoKSB7XHJcblx0XHRcdHZtLmNvbW1hbmRzLmZvckVhY2goZnVuY3Rpb24oY29tbWFuZCkge1xyXG5cdFx0XHRcdC8vIGdldCBidW95IG5hbWVcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZtLmJ1b3lJbnN0YW5jZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdHZhciBidW95SW5zdGFuY2UgPSB2bS5idW95SW5zdGFuY2VzW2ldO1xyXG5cdFx0XHRcdFx0aWYgKGNvbW1hbmQuYnVveUlkID09IGJ1b3lJbnN0YW5jZS5idW95SWQpIHtcclxuXHRcdFx0XHRcdFx0Y29tbWFuZC5idW95TmFtZSA9IGJ1b3lJbnN0YW5jZS5uYW1lO1xyXG5cdFx0XHRcdFx0XHRpZiAoY29tbWFuZC5idW95TmFtZSA9PSBcIlwiKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29tbWFuZC5idW95TmFtZSA9IFwiKG5vIG5hbWUpXCJcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gZ2V0IGNvbW1hbmQgbmFtZVxyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdm0uY29tbWFuZFR5cGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRpZiAoY29tbWFuZC5jb21tYW5kVHlwZUlkID09IHZtLmNvbW1hbmRUeXBlc1tpXS5pZCkge1xyXG5cdFx0XHRcdFx0XHRjb21tYW5kLmNvbW1hbmROYW1lID0gdm0uY29tbWFuZFR5cGVzW2ldLm5hbWU7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKiBQcmVwYXJlIHRvIHNlbmQgbmV3IGNvbW1hbmQocykgdG8gc2VydmVyICovXHJcblx0XHRmdW5jdGlvbiBzZW5kQ29tbWFuZCgpIHtcclxuXHRcdFx0aWYgKHZtLmNvbW1hbmQuaWQgPT0gLTEgfHwgdm0uY29tbWFuZC52YWx1ZSA9PSAnJykgcmV0dXJuO1xyXG5cdFx0XHR2bS5uZXdDb21tYW5kID0gZmFsc2U7XHJcblx0XHRcdHZhciBidW95SWRzID0gW107IC8vIGJ1b3lzIHRvIHNlbmQgY29tbWFuZCBmb3JcclxuXHRcdFx0aWYgKHZtLnNlbGVjdGVkLnR5cGUgPT0gJ2luc3RhbmNlJykge1xyXG5cdFx0XHRcdGJ1b3lJZHMucHVzaCh2bS5zZWxlY3RlZC5vYmouYnVveUlkKTtcclxuXHRcdFx0fSBlbHNlIGlmICh2bS5zZWxlY3RlZC50eXBlID09ICdncm91cCcpIHtcclxuXHRcdFx0XHQvLyBzZW5kIGNvbW1hbmQgdG8gZWFjaCBidW95IGluIHNlbGVjdGVkIGdyb3VwXHJcblx0XHRcdFx0dm0uYnVveUluc3RhbmNlcy5mb3JFYWNoKGZ1bmN0aW9uKGJ1b3lJbnN0YW5jZSkge1xyXG5cdFx0XHRcdFx0aWYgKGJ1b3lJbnN0YW5jZS5idW95R3JvdXBJZCA9PSB2bS5zZWxlY3RlZC5vYmouaWQpIHtcclxuXHRcdFx0XHRcdFx0YnVveUlkcy5wdXNoKGJ1b3lJbnN0YW5jZS5idW95SWQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHZtLnNlbGVjdGVkLnR5cGUgPT0gJ2FsbCcpIHtcclxuXHRcdFx0XHQvLyBzZW5kIGNvbW1hbmQgdG8gYWxsIGJ1b3lzXHJcblx0XHRcdFx0dm0uYnVveUluc3RhbmNlcy5mb3JFYWNoKGZ1bmN0aW9uKGJ1b3lJbnN0YW5jZSkge1xyXG5cdFx0XHRcdFx0YnVveUlkcy5wdXNoKGJ1b3lJbnN0YW5jZS5idW95SWQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdHNlbmRDb21tYW5kcyhidW95SWRzKTtcdFx0XHRcclxuXHRcdFx0cmVzZXROZXdDb21tYW5kKCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKiBDbGVhciBjb21tYW5kIGlucHV0IGZpZWxkcyAqL1xyXG5cdFx0ZnVuY3Rpb24gcmVzZXROZXdDb21tYW5kKCkge1xyXG5cdFx0XHR2bS5jb21tYW5kLmlkID0gLTE7XHJcblx0XHRcdHZtLmNvbW1hbmQudmFsdWUgPSAnJztcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqIENhbmNlbCBlZGl0aW5nIG9mIG5ldyBjb21tYW5kICovXHJcblx0XHRmdW5jdGlvbiBjYW5jZWxOZXdDb21tYW5kKCkge1xyXG5cdFx0XHR2bS5uZXdDb21tYW5kID0gZmFsc2U7XHJcblx0XHRcdHJlc2V0TmV3Q29tbWFuZCgpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKiogU2VuZCBjb21tYW5kKHMpIGZvciBidW95KHMpIHRvIHNlcnZlciBhbmQgdXBkYXRlIHBhZ2UgKi9cclxuXHRcdGZ1bmN0aW9uIHNlbmRDb21tYW5kcyhidW95SWRzKSB7XHJcblx0XHRcdHNlcnZlci5zZW5kQnVveUNvbW1hbmQodm0uY29tbWFuZCwgYnVveUlkcykudGhlbihmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRxdWVyeUNvbW1hbmRzKCk7XHJcblx0XHRcdFx0Z3VpLmFsZXJ0U3VjY2VzcygnQ29tbWFuZCBxdWV1ZWQuJylcclxuXHRcdFx0fSwgZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0Z3VpLmFsZXJ0QmFkUmVzcG9uc2UocmVzKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKiBEZWxldGUgY29tbWFuZChzKSBmb3IgYnVveShzKSBhbmQgdXBkYXRlIHNlcnZlciAqL1xyXG5cdFx0ZnVuY3Rpb24gZGVsZXRlQ29tbWFuZChjb21tYW5kKSB7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKiogUHJlcGFyZSB0byBhZGQgbmV3IHRyaWdnZXIgd2FybmluZyBmb3IgYnVveSBvciBncm91cCAqL1xyXG5cdFx0ZnVuY3Rpb24gYWRkVHJpZ2dlcigpIHtcclxuXHRcdFx0aWYgKHZtLnRyaWdnZXIuc2Vuc29yVHlwZUlkID09IC0xIHx8IHZtLnRyaWdnZXIudmFsdWUgPT0gJycpIHJldHVybjtcclxuXHRcdFx0dm0ubmV3VHJpZ2dlciA9IGZhbHNlO1xyXG5cdFx0XHR2YXIgYnVveUluc3RhbmNlSWRzID0gW107IC8vIGJ1b3lzIGluc3RhbmNlcyB0byBhZGQgdHJpZ2dlciBmb3JcclxuXHRcdFx0aWYgKHZtLnNlbGVjdGVkLnR5cGUgPT0gJ2luc3RhbmNlJykge1xyXG5cdFx0XHRcdGJ1b3lJbnN0YW5jZUlkcy5wdXNoKHZtLnNlbGVjdGVkLm9iai5pZCk7XHJcblx0XHRcdH0gZWxzZSBpZiAodm0uc2VsZWN0ZWQudHlwZSA9PSAnZ3JvdXAnKSB7XHJcblx0XHRcdFx0Ly8gYWRkIHRyaWdnZXIgZm9yIGVhY2ggYnVveSBpbiBncm91cFxyXG5cdFx0XHRcdHZtLmJ1b3lJbnN0YW5jZXMuZm9yRWFjaChmdW5jdGlvbihidW95SW5zdGFuY2UpIHtcclxuXHRcdFx0XHRcdGlmIChidW95SW5zdGFuY2UuYnVveUdyb3VwSWQgPT0gdm0uc2VsZWN0ZWQub2JqLmlkKSB7XHJcblx0XHRcdFx0XHRcdGJ1b3lJbnN0YW5jZUlkcy5wdXNoKGJ1b3lJbnN0YW5jZS5pZCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSBpZiAodm0uc2VsZWN0ZWQudHlwZSA9PSAnYWxsJykge1xyXG5cdFx0XHRcdC8vIGFkZCB0cmlnZ2VyIGZvciBhbGwgYnVveXNcclxuXHRcdFx0XHR2bS5idW95SW5zdGFuY2VzLmZvckVhY2goZnVuY3Rpb24oYnVveUluc3RhbmNlKSB7XHJcblx0XHRcdFx0XHRidW95SW5zdGFuY2VJZHMucHVzaChidW95SW5zdGFuY2UuaWQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdHNlbmRUcmlnZ2VycyhidW95SW5zdGFuY2VJZHMpO1xyXG5cdFx0XHRyZXNldE5ld1RyaWdnZXIoKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqIFNlbmQgbmV3IHdhcm5pbmcgdHJpZ2dlcnMgdG8gc2VydmVyIGFuZCB1cGRhdGUgcGFnZSAqL1xyXG5cdFx0ZnVuY3Rpb24gc2VuZFRyaWdnZXJzKGJ1b3lJZHMpIHtcclxuXHRcdFx0c2VydmVyLmFkZFdhcm5pbmdUcmlnZ2Vycyh2bS50cmlnZ2VyLCBidW95SWRzKS50aGVuKGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdHF1ZXJ5V2FybmluZ1RyaWdnZXJzKCk7XHJcblx0XHRcdFx0Z3VpLmFsZXJ0U3VjY2VzcygnV2FybmluZyB0cmlnZ2VyIGFkZGVkLicpXHJcblx0XHRcdH0sIGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdGd1aS5hbGVydEJhZFJlc3BvbnNlKHJlcyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKiogQ2xlYXIgdHJpZ2dlciBpbnB1dHMgKi9cclxuXHRcdGZ1bmN0aW9uIHJlc2V0TmV3VHJpZ2dlcigpIHtcclxuXHRcdFx0dm0udHJpZ2dlciA9IHtcclxuXHRcdFx0XHRzZW5zb3JUeXBlSWQ6IC0xLFxyXG5cdFx0XHRcdG9wZXJhdG9yOiAnPCcsXHJcblx0XHRcdFx0dmFsdWU6ICcnLFxyXG5cdFx0XHRcdG1lc3NhZ2U6ICcnXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKiBDYW5jZWwgY3JlYXRpb24gb2YgYSBuZXcgdHJpZ2dlciAqL1xyXG5cdFx0ZnVuY3Rpb24gY2FuY2VsTmV3VHJpZ2dlcigpIHtcclxuXHRcdFx0dm0ubmV3VHJpZ2dlciA9IGZhbHNlO1xyXG5cdFx0XHRyZXNldE5ld1RyaWdnZXIoKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqIFxyXG5cdFx0ICogRmlsdGVyICd1bmFzc2lnbmVkJyBvdXQgb2YgYnVveSBncm91cCBsaXN0XHJcblx0XHQgKiBAcGFyYW0gIHtvYmplY3R9IGJ1b3lHcm91cCBcclxuXHRcdCAqIEByZXR1cm4ge2Jvb2x9ICAgICAgICAgICBzaG93IGJ1b3kgZ3JvdXBcclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gYnVveUdyb3VwRmlsdGVyKGJ1b3lHcm91cCkge1xyXG5cdFx0XHRpZiAoYnVveUdyb3VwLmlkICE9IDApIHJldHVybiB0cnVlO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogRmlsdGVyIGNvbW1hbmRzIGxpc3QgYmFzZWQgb24gY3VycmVudGx5IHNlbGVjdGVkIGJ1b3kvZ3JvdXBcclxuXHRcdCAqIEBwYXJhbSAge29iamVjdH0gY29tbWFuZCBjb21tYW5kXHJcblx0XHQgKiBAcmV0dXJuIHtib29sfSAgICAgICAgIHNob3cgY29tbWFuZFxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBjb21tYW5kRmlsdGVyKGNvbW1hbmQpIHtcclxuXHRcdFx0aWYgKHZtLnNlbGVjdGVkLnR5cGUgPT0gJ2FsbCcpIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIGlmICh2bS5zZWxlY3RlZC50eXBlID09ICdpbnN0YW5jZScpIHtcclxuXHRcdFx0XHRyZXR1cm4gYnVveUluc3RhbmNlQ29tbWFuZEZpbHRlcihjb21tYW5kKTtcclxuXHRcdFx0fSBlbHNlIGlmICh2bS5zZWxlY3RlZC50eXBlID09ICdncm91cCcpIHtcclxuXHRcdFx0XHRyZXR1cm4gYnVveUdyb3VwQ29tbWFuZEZpbHRlcihjb21tYW5kKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogSGVscGVyIGZ1bmN0aW9uIGZvciBjb21tYW5kRmlsdGVyXHJcblx0XHQgKiBAcGFyYW0gIHtvYmplY3R9IGNvbW1hbmQgY29tbWFuZFxyXG5cdFx0ICogQHJldHVybiB7Ym9vbH0gICAgICAgICBzaG93IGNvbW1hbmRcclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gYnVveUluc3RhbmNlQ29tbWFuZEZpbHRlcihjb21tYW5kKSB7XHJcblx0XHRcdGlmIChjb21tYW5kLmJ1b3lJZCA9PSB2bS5zZWxlY3RlZC5vYmouYnVveUlkKSByZXR1cm4gdHJ1ZTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIEhlbHBlciBmdW5jdGlvbiBmb3IgY29tbWFuZEZpbHRlclxyXG5cdFx0ICogQHBhcmFtICB7b2JqZWN0fSBjb21tYW5kIGNvbW1hbmRcclxuXHRcdCAqIEByZXR1cm4ge2Jvb2x9ICAgICAgICAgc2hvdyBjb21tYW5kXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIGJ1b3lHcm91cENvbW1hbmRGaWx0ZXIoY29tbWFuZCkge1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZtLmJ1b3lJbnN0YW5jZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR2YXIgYnVveUluc3RhbmNlID0gdm0uYnVveUluc3RhbmNlc1tpXTtcclxuXHRcdFx0XHRpZiAoYnVveUluc3RhbmNlLmJ1b3lHcm91cElkID09IHZtLnNlbGVjdGVkLm9iai5pZCkge1xyXG5cdFx0XHRcdFx0aWYgKGNvbW1hbmQuYnVveUlkID09IGJ1b3lJbnN0YW5jZS5idW95SWQpIHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZW1vdmUgZW5jbG9zaW5nIGJyYWNrZXRzIGZyb20gYSBzdHJpbmdcclxuXHRcdCAqIEBwYXJhbSAge3N0cn0gc3RyIHN0cmluZyB0byBvcGVyYXRlIG9uXHJcblx0XHQgKiBAcmV0dXJuIHtzdHJ9ICAgICBlZGl0ZWQgc3RyaW5nXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIHJlbW92ZUVuY2xvc2luZ0JyYWNrZXRzKHN0cikge1xyXG5cdFx0XHRpZiAoc3RyWzBdID09ICcoJykge1xyXG5cdFx0XHRcdHN0ciA9IHN0ci5zdWJzdHIoMSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHN0cltzdHIubGVuZ3RoIC0gMV0gPT0gJyknKSB7XHJcblx0XHRcdFx0c3RyID0gc3RyLnN1YnN0cigwLCBzdHIubGVuZ3RoIC0gMSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHN0cjtcclxuXHRcdH1cclxuXHR9XHJcbn0pKCk7IiwiLyoqXHJcbiAqIEZsb29kIE1vbml0b3JpbmcgU3lzdGVtXHJcbiAqIFZlcnNpb24gMC4wLjEgKER1eXVuZylcclxuICpcclxuICogQ29weXJpZ2h0IChDKSBUZWFtIE5lcHR1bmVcclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogQGF1dGhvciAgICAgQW5kcmV3IER5ZXIgPGFuZHJld0BkeWVyZ3JvdXAuY29tLmF1PlxyXG4gKiBAdmVyc2lvbiAgICAwLjAuMVxyXG4gKiBAY29weXJpZ2h0ICBUZWFtIE5lcHR1bmUgKDIwMTUpXHJcbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hY2xlbC9kZWNvMzgwMVxyXG4gKi9cclxuKGZ1bmN0aW9uKCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHRcclxuXHRhbmd1bGFyLm1vZHVsZSgnYXBwLmNvbmZpZycpXHJcblx0XHQucnVuKHNldFJvdXRlcyk7XHJcblx0XHJcblx0LyoqIERlZmluZSByb3V0ZXMgZm9yIGNvbmZpZyBtb2R1bGUgKi9cclxuXHRmdW5jdGlvbiBzZXRSb3V0ZXMocm91dGVySGVscGVyKSB7XHJcblx0XHRyb3V0ZXJIZWxwZXIuY29uZmlndXJlU3RhdGVzKGdldFN0YXRlcygpKTtcclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gZ2V0U3RhdGVzKCkge1xyXG5cdFx0cmV0dXJuIFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHN0YXRlOiAnY29uZmlnJyxcclxuXHRcdFx0XHRjb25maWc6IHtcclxuXHRcdFx0XHRcdHVybDogJy9jb25maWcnLFxyXG5cdFx0XHRcdFx0Y29udHJvbGxlcjogJ0NvbmZpZ0NvbnRyb2xsZXInLFxyXG5cdFx0XHRcdFx0Y29udHJvbGxlckFzOiAndm0nLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvYXBwL2NvbmZpZy9jb25maWcuaHRtbCcsXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdGFjY2VzczogJ3Bvd2VyX3VzZXInXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRdO1xyXG5cdH1cclxufSkoKTsiLCIvKipcclxuICogRmxvb2QgTW9uaXRvcmluZyBTeXN0ZW1cclxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKEMpIFRlYW0gTmVwdHVuZVxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgICBBbmRyZXcgRHllciA8YW5kcmV3QGR5ZXJncm91cC5jb20uYXU+XHJcbiAqIEB2ZXJzaW9uICAgIDAuMC4xXHJcbiAqIEBjb3B5cmlnaHQgIFRlYW0gTmVwdHVuZSAoMjAxNSlcclxuICogQGxpbmsgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FjbGVsL2RlY28zODAxXHJcbiAqL1xyXG4oZnVuY3Rpb24oKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdFxyXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAuY29yZScpXHJcblx0XHQucnVuKHNldFJvdXRlcyk7XHJcblx0XHRcclxuXHQvKiogRGVmaW5lIHJvdXRlcyBmb3IgY29yZSBtb2R1bGUgKi9cclxuXHRmdW5jdGlvbiBzZXRSb3V0ZXMocm91dGVySGVscGVyKSB7XHJcblx0XHR2YXIgb3RoZXJ3aXNlUGF0aCA9ICcvaGVsbG8nO1xyXG5cdFx0cm91dGVySGVscGVyLmNvbmZpZ3VyZVN0YXRlcyhnZXRTdGF0ZXMoKSwgb3RoZXJ3aXNlUGF0aCk7XHJcblx0fVxyXG5cdFxyXG5cdGZ1bmN0aW9uIGdldFN0YXRlcygpIHtcclxuXHRcdHJldHVybiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzdGF0ZTogJ2hlbGxvJyxcclxuXHRcdFx0XHRjb25maWc6IHtcclxuXHRcdFx0XHRcdHVybDogJy9oZWxsbycsXHJcblx0XHRcdFx0XHRjb250cm9sbGVyOiAnSGVsbG9Db250cm9sbGVyJyxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0YWNjZXNzOiAnYW55J1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XTtcclxuXHR9XHJcbn0pKCk7IiwiLyoqXHJcbiAqIEZsb29kIE1vbml0b3JpbmcgU3lzdGVtXHJcbiAqIFZlcnNpb24gMC4wLjEgKER1eXVuZylcclxuICpcclxuICogQ29weXJpZ2h0IChDKSBUZWFtIE5lcHR1bmVcclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogQGF1dGhvciAgICAgQW5kcmV3IER5ZXIgPGFuZHJld0BkeWVyZ3JvdXAuY29tLmF1PlxyXG4gKiBAdmVyc2lvbiAgICAwLjAuMVxyXG4gKiBAY29weXJpZ2h0ICBUZWFtIE5lcHR1bmUgKDIwMTUpXHJcbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hY2xlbC9kZWNvMzgwMVxyXG4gKi9cclxuKGZ1bmN0aW9uKCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHRcclxuXHRhbmd1bGFyLm1vZHVsZSgnYXBwLmNvcmUnKVxyXG5cdFx0LmNvbnRyb2xsZXIoJ0hlbGxvQ29udHJvbGxlcicsIEhlbGxvQ29udHJvbGxlcik7XHJcblx0XHJcblx0LyoqXHJcblx0XHQqIEBuZ2RvYyBvYmplY3RcclxuXHRcdCogQG5hbWUgYXBwLmNvcmUuY29udHJvbGxlcjpIZWxsb0NvbnRyb2xsZXJcclxuXHRcdCogQGRlc2NyaXB0aW9uIFByb3ZpZGVzIGEgbGFuZGluZyBwYWdlIHdoaWNoIGRvZXNuJ3QgaGF2ZSBhbnlcclxuXHRcdCogICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uIHJlcXVpcmVtZW50cywgdG8gcHJldmVudCByb3V0aW5nIGxvb3BcclxuXHRcdCogQHJlcXVpcmVzICRzdGF0ZVxyXG5cdFx0KiBAcmVxdWlyZXMgJGxvZ1xyXG5cdCoqL1xyXG5cdGZ1bmN0aW9uIEhlbGxvQ29udHJvbGxlcigkc3RhdGUsICRsb2cpIHtcclxuXHRcdHZhciB2bSA9IHRoaXM7XHJcblx0XHRcclxuXHRcdGFjdGl2YXRlKCk7XHJcblx0XHRcclxuXHRcdC8qKiBDYWxsZWQgd2hlbiBjb250cm9sbGVyIGlzIGluc3RhbnRpYXRlZCAoaGVsbG8gcGFnZSBpcyBsb2FkZWQpXHJcblx0XHQgKiAgSW1tZWRpYXRlbHkgcmVkaXJlY3RzIHVzZXIgdG8gZGFzaGJvYXJkLCBhbmQgaWYgdGhhdCBmYWlsc1xyXG5cdFx0ICogIChiZWNhdXNlIHVzZXIgaXNuJ3QgbG9nZ2VkIGluKSwgcmVkaXJlY3RzIHRvIGxvZ2luIHBhZ2UuXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xyXG5cdFx0XHQkbG9nLmRlYnVnKCdob3dkeScpO1xyXG5cdFx0XHJcblx0XHRcdC8vIGdvIHRvIGRhc2hib2FyZFxyXG5cdFx0XHQkc3RhdGUuZ28oJ2Rhc2hib2FyZCcpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gaWYgdGhhdCBkaWRuJ3Qgd29yaywgZ28gdG8gbG9naW5cclxuXHRcdFx0aWYgKCRzdGF0ZS5pbmNsdWRlcygnaGVsbG8nKSkge1xyXG5cdFx0XHRcdCRzdGF0ZS5nbygnbG9naW4nKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSkoKTsiLCIvKipcclxuICogRmxvb2QgTW9uaXRvcmluZyBTeXN0ZW1cclxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKEMpIFRlYW0gTmVwdHVuZVxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgICBBbmRyZXcgRHllciA8YW5kcmV3QGR5ZXJncm91cC5jb20uYXU+XHJcbiAqIEB2ZXJzaW9uICAgIDAuMC4xXHJcbiAqIEBjb3B5cmlnaHQgIFRlYW0gTmVwdHVuZSAoMjAxNSlcclxuICogQGxpbmsgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FjbGVsL2RlY28zODAxXHJcbiAqL1xyXG4oZnVuY3Rpb24oKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdFxyXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAuY29yZScpXHJcblx0XHQucHJvdmlkZXIoJ3JvdXRlckhlbHBlcicsIHJvdXRlckhlbHBlclByb3ZpZGVyKTtcclxuXHRcclxuXHQvKipcclxuXHRcdCogQG5nZG9jIHByb3ZpZGVyXHJcblx0XHQqIEBuYW1lIGFwcC5jb3JlLnJvdXRlckhlbHBlclxyXG5cdFx0KiBAcmVxdWlyZXMgJGxvY2F0aW9uUHJvdmlkZXJcclxuXHRcdCogQHJlcXVpcmVzICRzdGF0ZVByb3ZpZGVyXHJcblx0XHQqIEByZXF1aXJlcyAkdXJsUm91dGVyUHJvdmlkZXJcclxuXHRcdCogQGRlc2NyaXB0aW9uIFByb3ZpZGVzIHNvbWUgaGVscGVyIGZ1bmN0aW9ucyBmb3Igcm90aW5nXHJcblx0KiovXHJcblx0ZnVuY3Rpb24gcm91dGVySGVscGVyUHJvdmlkZXIoJGxvY2F0aW9uUHJvdmlkZXIsIFxyXG5cdFx0JHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG5cdFx0XHJcblx0XHR0aGlzLiRnZXQgPSBSb3V0ZXJIZWxwZXI7XHJcblx0XHRcclxuXHRcdGZ1bmN0aW9uIFJvdXRlckhlbHBlcigkc3RhdGUpIHtcclxuXHRcdFx0dmFyIGhhc090aGVyd2lzZSA9IGZhbHNlO1xyXG5cdFx0XHRcclxuXHRcdFx0LyoqIFRoZSBwcm92aWRlciBtZXRob2RzIHRvIGV4cG9zZSAqL1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGNvbmZpZ3VyZVN0YXRlczogY29uZmlndXJlU3RhdGVzLFxyXG5cdFx0XHRcdGdldFN0YXRlczogZ2V0U3RhdGVzLFxyXG5cdFx0XHRcdHN0YXRlQWN0aXZlOiBzdGF0ZUFjdGl2ZVxyXG5cdFx0XHR9O1xyXG5cdFx0XHRcclxuXHRcdFx0LyoqIEFsbG93cyB0aGUgY2FsbGVyIHRvIGFkZCBhIG5ldyByb3V0ZSAoc3RhdGUpIHRvIHRoZSBhcHAgKi9cclxuXHRcdFx0ZnVuY3Rpb24gY29uZmlndXJlU3RhdGVzKHN0YXRlcywgb3RoZXJ3aXNlUGF0aCkge1xyXG5cdFx0XHRcdHN0YXRlcy5mb3JFYWNoKGZ1bmN0aW9uKHN0YXRlKSB7XHJcblx0XHRcdFx0XHQkc3RhdGVQcm92aWRlci5zdGF0ZShzdGF0ZS5zdGF0ZSwgc3RhdGUuY29uZmlnKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHQvKiBvdGhlcndpc2VQYXRoIGlzIGEgZmFsbGJhY2sgcm91dGUgKi9cclxuXHRcdFx0XHRpZiAob3RoZXJ3aXNlUGF0aCAmJiAhaGFzT3RoZXJ3aXNlKSB7XHJcblx0XHRcdFx0XHRoYXNPdGhlcndpc2UgPSB0cnVlO1xyXG5cdFx0XHRcdFx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZShvdGhlcndpc2VQYXRoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiBSZXR1cm4gYXBwIHJvdXRlc1xyXG5cdFx0XHQgKiBAcmV0dXJuIHtvYmplY3R9IHJvdXRlc1xyXG5cdFx0XHQgKi9cclxuXHRcdFx0ZnVuY3Rpb24gZ2V0U3RhdGVzKCkge1xyXG5cdFx0XHRcdHJldHVybiAkc3RhdGUuZ2V0KCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiBSZXR1cm4gd2hldGhlciBhIHN0YXRlIGlzIGFjdGl2ZSBvciBub3RcclxuXHRcdFx0ICogQHBhcmFtICB7c3RyaW5nfSBuYW1lIHN0YXRlIG5hbWVcclxuXHRcdFx0ICogQHJldHVybiB7Ym9vbH0gICAgICBzdGF0ZSBpcyBhY3RpdmVcclxuXHRcdFx0ICovXHJcblx0XHRcdGZ1bmN0aW9uIHN0YXRlQWN0aXZlKG5hbWUpIHtcclxuXHRcdFx0XHRyZXR1cm4gJHN0YXRlLmluY2x1ZGVzKG5hbWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59KSgpOyIsIi8qKlxyXG4gKiBGbG9vZCBNb25pdG9yaW5nIFN5c3RlbVxyXG4gKiBWZXJzaW9uIDAuMC4xIChEdXl1bmcpXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoQykgVGVhbSBOZXB0dW5lXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgIEFuZHJldyBEeWVyIDxhbmRyZXdAZHllcmdyb3VwLmNvbS5hdT5cclxuICogQHZlcnNpb24gICAgMC4wLjFcclxuICogQGNvcHlyaWdodCAgVGVhbSBOZXB0dW5lICgyMDE1KVxyXG4gKiBAbGluayAgICAgICBodHRwczovL2dpdGh1Yi5jb20vYWNsZWwvZGVjbzM4MDFcclxuICovXHJcbi8qIGdsb2JhbCBzYXZlQXMgKi9cclxuKGZ1bmN0aW9uKCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHRcclxuXHRhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuXHRcdC5mYWN0b3J5KCdzZXJ2ZXInLCBzZXJ2ZXIpO1xyXG5cdFxyXG5cdC8qKlxyXG5cdFx0KiBAbmdkb2Mgc2VydmljZVxyXG5cdFx0KiBAbmFtZSBhcHAuY29yZS5zZXJ2ZXJcclxuXHRcdCogQHJlcXVpcmVzICRodHRwXHJcblx0XHQqIEByZXF1aXJlcyAkbG9nXHJcblx0XHQqIEByZXF1aXJlcyBTRVJWRVJfQUREUkVTU1xyXG5cdFx0KiBAcmVxdWlyZXMgYXV0aFxyXG5cdFx0KiBAcmVxdWlyZXMgbW9tZW50XHJcblx0KiovXHJcblx0ZnVuY3Rpb24gc2VydmVyKCRodHRwLCAkbG9nLCBTRVJWRVJfQUREUkVTUywgYXV0aCwgbW9tZW50KSB7XHJcblx0XHRcclxuXHRcdC8qKiBUaGUgc2VydmljZSBtZXRob2RzIHRvIGV4cG9zZSAqL1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bG9naW46IGxvZ2luLFxyXG5cdFx0XHRsb2dvdXQ6IGxvZ291dCxcclxuXHRcdFx0Y2hhbmdlUGFzc3dvcmQ6IGNoYW5nZVBhc3N3b3JkLFxyXG5cdFx0XHRyZXNldFBhc3N3b3JkOiByZXNldFBhc3N3b3JkLFxyXG5cdFx0XHRmb3Jnb3RQYXNzd29yZDogZm9yZ290UGFzc3dvcmQsXHJcblx0XHRcdGdldFJlYWRpbmdzOiBnZXRSZWFkaW5ncyxcclxuXHRcdFx0Z2V0QnVveUdyb3VwczogZ2V0QnVveUdyb3VwcyxcclxuXHRcdFx0Z2V0QnVveUluc3RhbmNlczogZ2V0QnVveUluc3RhbmNlcyxcclxuXHRcdFx0dXBkYXRlQnVveUdyb3VwTmFtZTogdXBkYXRlQnVveUdyb3VwTmFtZSxcclxuXHRcdFx0dXBkYXRlQnVveUluc3RhbmNlTmFtZTogdXBkYXRlQnVveUluc3RhbmNlTmFtZSxcclxuXHRcdFx0bmV3QnVveUdyb3VwOiBuZXdCdW95R3JvdXAsXHJcblx0XHRcdHVwZGF0ZUJ1b3lJbnN0YW5jZUdyb3VwOiB1cGRhdGVCdW95SW5zdGFuY2VHcm91cCxcclxuXHRcdFx0Z2V0Q29tbWFuZFR5cGVzOiBnZXRDb21tYW5kVHlwZXMsXHJcblx0XHRcdGdldEJ1b3lDb21tYW5kczogZ2V0QnVveUNvbW1hbmRzLFxyXG5cdFx0XHRleHBvcnREYXRhOiBleHBvcnREYXRhLFxyXG5cdFx0XHRzZW5kQnVveUNvbW1hbmQ6IHNlbmRCdW95Q29tbWFuZCxcclxuXHRcdFx0Z2V0V2FybmluZ1RyaWdnZXJzOiBnZXRXYXJuaW5nVHJpZ2dlcnMsXHJcblx0XHRcdGFkZFdhcm5pbmdUcmlnZ2VyczogYWRkV2FybmluZ1RyaWdnZXJzLFxyXG5cdFx0XHRnZXRXYXJuaW5nczogZ2V0V2FybmluZ3MsXHJcblx0XHRcdGdldFNlbnNvclR5cGVzOiBnZXRTZW5zb3JUeXBlcyxcclxuXHRcdFx0Z2V0VXNlcnM6IGdldFVzZXJzLFxyXG5cdFx0XHRhZGRVc2VyOiBhZGRVc2VyLFxyXG5cdFx0XHR1cGRhdGVVc2VyOiB1cGRhdGVVc2VyLFxyXG5cdFx0XHRkZWxldGVVc2VyOiBkZWxldGVVc2VyLFxyXG5cdFx0XHRkZWxldGVCdW95Q29tbWFuZDogZGVsZXRlQnVveUNvbW1hbmQsXHJcblx0XHRcdGFkZEJ1b3k6IGFkZEJ1b3lcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdC8qKiBcclxuXHRcdCAqIENyZWF0ZSBhIGNvbmZpZyBvYmplY3QgY29udGFpbmluZyBlbXB0eSBoZWFkZXJzXHJcblx0XHQgKiBAcmV0dXJuIHtvYmplY3R9IHJlcXVlc3QgY29uZmlnXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIGhlYWRlcnMoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aGVhZGVyczoge31cclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBBZGQgSldUIHRva2VuIHRvIHJlcXVlc3QgaGVhZGVyc1xyXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyByZXF1ZXN0IGNvbmZpZ1xyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBhZGRUb2tlbihjb25maWcpIHtcclxuXHRcdFx0Y29uZmlnLmhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9ICdCZWFyZXIgJyArIGF1dGguZ2V0VG9rZW4oKTtcclxuXHRcdFx0cmV0dXJuIGNvbmZpZztcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBTZXQgcmVxdWVzdCBjb250ZW50IHR5cGUgdG8gSlNPTlxyXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyByZXF1ZXN0IGNvbmZpZ1xyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBzZXRKc29uKGNvbmZpZykge1xyXG5cdFx0XHRjb25maWcuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XHJcblx0XHRcdHJldHVybiBjb25maWc7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogUmVxdWVzdCBsb2dpblxyXG5cdFx0ICogUE9TVCAvYXBpL2xvZ2luXHJcblx0XHQgKiBAcGFyYW0gIHtzdHJpbmd9IGVtYWlsICAgIGVtYWlsXHJcblx0XHQgKiBAcGFyYW0gIHtzdHJpbmd9IHBhc3N3b3JkIHBhc3N3b3JkXHJcblx0XHQgKiBAcmV0dXJuIHtwcm9taXNlfSAgICAgICAgICByZXF1ZXN0IHByb21pc2VcclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gbG9naW4oZW1haWwsIHBhc3N3b3JkKSB7XHJcblx0XHRcdHZhciBkYXRhID0ge1xyXG5cdFx0XHRcdGVtYWlsOiBlbWFpbCxcclxuXHRcdFx0XHRwYXNzd29yZDogcGFzc3dvcmRcclxuXHRcdFx0fTtcclxuXHRcdFx0cmV0dXJuICRodHRwLnBvc3QoU0VSVkVSX0FERFJFU1MgKyAnL2FwaS9sb2dpbicsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqIExvZ291dCAqL1xyXG5cdFx0ZnVuY3Rpb24gbG9nb3V0KCkge1xyXG5cdFx0XHRhdXRoLmxvZ291dCgpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFJlcXVlc3QgcGFzc3dvcmQgY2hhbmdlXHJcblx0XHQgKiBQT1NUIC9hcGkvY2hhbmdlcGFzc3dvcmRcclxuXHRcdCAqIEBwYXJhbSAge3N0cmluZ30gcGFzc3dvcmQgcGFzc3dvcmRcclxuXHRcdCAqIEByZXR1cm4ge3Byb21pc2V9ICAgICAgICAgIHJlcXVlc3QgcHJvbWlzZVxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBjaGFuZ2VQYXNzd29yZChjdXJyZW50UGFzc3dvcmQsIG5ld1Bhc3N3b3JkKSB7XHJcblx0XHRcdHZhciBjb25maWcgPSBhZGRUb2tlbihoZWFkZXJzKCkpO1xyXG5cdFx0XHR2YXIgZGF0YSA9IHtcclxuXHRcdFx0XHRjdXJyZW50UGFzc3dvcmQ6IGN1cnJlbnRQYXNzd29yZCxcclxuXHRcdFx0XHRuZXdQYXNzd29yZDogbmV3UGFzc3dvcmRcclxuXHRcdFx0fTtcclxuXHRcdFx0dmFyIGVtYWlsID0gYXV0aC5jdXJyZW50VXNlcigpO1xyXG5cdFx0XHRyZXR1cm4gJGh0dHAucHV0KFNFUlZFUl9BRERSRVNTICsgJy9hcGkvdXNlcnMvJyArXHJcblx0XHRcdFx0ZW1haWwgKyAnL2NoYW5nZV9wYXNzd29yZCcsIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBjb25maWcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHJlc2V0UGFzc3dvcmQodG9rZW4sIG5ld1Bhc3N3b3JkKSB7XHJcblx0XHRcdHZhciBkYXRhID0ge1xyXG5cdFx0XHRcdG5ld1Bhc3N3b3JkOiBuZXdQYXNzd29yZFxyXG5cdFx0XHR9O1xyXG5cdFx0XHR2YXIgcGFyYW1zID0gJz90b2tlbj0nICsgdG9rZW47XHJcblx0XHRcdHJldHVybiAkaHR0cC5wb3N0KFNFUlZFUl9BRERSRVNTICsgJy9hcGkvcmVzZXRfcGFzc3dvcmQnICsgcGFyYW1zLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKiBcclxuXHRcdCAqIFJlcXVlc3QgZm9yZ290IHBhc3N3b3JkXHJcblx0XHQgKiBQT1NUIC9hcGkvZm9yZ290cHNhc3dvcmRcclxuXHRcdCAqIEBwYXJhbSAge3N0cmluZ30gZW1haWwgZW1haWxcclxuXHRcdCAqIEByZXR1cm4ge3Byb21pc2V9ICAgICAgIHJlcXVlc3QgcHJvbWlzZVxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBmb3Jnb3RQYXNzd29yZChlbWFpbCkge1xyXG5cdFx0XHR2YXIgZGF0YSA9IHtcclxuXHRcdFx0XHRlbWFpbDogZW1haWxcclxuXHRcdFx0fTtcclxuXHRcdFx0cmV0dXJuICRodHRwLnBvc3QoU0VSVkVSX0FERFJFU1MgKyAnL2FwaS9mb3Jnb3RfcGFzc3dvcmQnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogUmVxdWVzdCByZWFkaW5nc1xyXG5cdFx0ICogR0VUIC9hcGkvcmVhZGluZ3M/c3RhcnRfdGltZT0mZW5kX3RpbWU9XHJcblx0XHQgKiBAcGFyYW0gIHtpbnR9IGZyb20gdW5peCB0aW1lc3RhbXBcclxuXHRcdCAqIEBwYXJhbSAge2ludH0gdG8gICB1bml4IHRpbWVzdGFtcFxyXG5cdFx0ICogQHJldHVybiB7cHJvbWlzZX0gICAgICByZXF1ZXN0IHByb21pc2VcclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gZ2V0UmVhZGluZ3MoZnJvbSwgdG8pIHtcclxuXHRcdFx0dmFyIGNvbmZpZyA9IGFkZFRva2VuKGhlYWRlcnMoKSk7XHJcblx0XHRcdHZhciBwYXJhbXMgPSBcIj9zdGFydF90aW1lPVwiICsgZnJvbSArIFwiJmVuZF90aW1lPVwiICsgdG87XHJcblx0XHRcdHJldHVybiAkaHR0cC5nZXQoU0VSVkVSX0FERFJFU1MgKyAnL2FwaS9yZWFkaW5ncycgKyBwYXJhbXMsIGNvbmZpZyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogUmVxdWVzdCBidW95IGdyb3Vwc1xyXG5cdFx0ICogR0VUIC9hcGkvYnVveV9ncm91cHNcclxuXHRcdCAqIEByZXR1cm4ge3Byb21pc2V9IHJlcXVlc3QgcHJvbWlzZVxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBnZXRCdW95R3JvdXBzKCkge1xyXG5cdFx0XHR2YXIgY29uZmlnID0gYWRkVG9rZW4oaGVhZGVycygpKTtcclxuXHRcdFx0cmV0dXJuICRodHRwLmdldChTRVJWRVJfQUREUkVTUyArICcvYXBpL2J1b3lfZ3JvdXBzJywgY29uZmlnKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXF1ZXN0IGFjdGl2ZSBidW95IGluc3RhbmNlc1xyXG5cdFx0ICogR0VUIC9hcGkvYnVveWluc3RhbmNlcz9hY3RpdmU9dHJ1ZVxyXG5cdFx0ICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIGdldEJ1b3lJbnN0YW5jZXMoKSB7XHJcblx0XHRcdHZhciBjb25maWcgPSBhZGRUb2tlbihoZWFkZXJzKCkpO1xyXG5cdFx0XHRyZXR1cm4gJGh0dHAuZ2V0KFNFUlZFUl9BRERSRVNTICsgJy9hcGkvYnVveV9pbnN0YW5jZXM/YWN0aXZlPXRydWUnLCBjb25maWcpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFJlcXVlc3QgdXBkYXRlIGJ1b3kgZ3JvdXBcclxuXHRcdCAqIFBVVCAvYXBpL2J1b3lfZ3JvdXBzLzppZFxyXG5cdFx0ICogQHBhcmFtICB7aW50fSBpZCAgIGJ1b3lHcm91cCBpZFxyXG5cdFx0ICogQHBhcmFtICB7c3RyaW5nfSBuYW1lIG5ldyBuYW1lXHJcblx0XHQgKiBAcmV0dXJuIHtwcm9taXNlfSAgICAgIHJlcXVlc3QgcHJvbWlzZVxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiB1cGRhdGVCdW95R3JvdXBOYW1lKGlkLCBuYW1lKSB7XHJcblx0XHRcdHZhciBjb25maWcgPSBzZXRKc29uKGFkZFRva2VuKGhlYWRlcnMoKSkpO1xyXG5cdFx0XHR2YXIgZGF0YSA9IHsgXHJcblx0XHRcdFx0bmFtZTogbmFtZVxyXG5cdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4gJGh0dHAucHV0KFNFUlZFUl9BRERSRVNTICsgJy9hcGkvYnVveV9ncm91cHMvJyArIGlkLCBcclxuXHRcdFx0XHRcdEpTT04uc3RyaW5naWZ5KGRhdGEpLCBjb25maWcpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFJlcXVlc3QgdXBkYXRlIGJ1b3kgaW5zdGFuY2UgXHJcblx0XHQgKiBQVVQgL2FwaS9idW95X2luc3RhbmNlcy86aWRcclxuXHRcdCAqIEBwYXJhbSAge2ludH0gaWQgICAgICAgICAgYnVveUluc3RhbmNlIGlkXHJcblx0XHQgKiBAcGFyYW0gIHtzdHJpbmd9IG5hbWUgICAgICAgIG5ldyBuYW1lXHJcblx0XHQgKiBAcGFyYW0gIHtpbnR9IGJ1b3lHcm91cElkIGJ1b3lHcm91cCBpZCBvZiBpbnN0YW5jZVxyXG5cdFx0ICogQHJldHVybiB7cHJvbWlzZX0gICAgICAgICAgICAgcmVxdWVzdCBwcm9taXNlXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIHVwZGF0ZUJ1b3lJbnN0YW5jZU5hbWUoaWQsIG5hbWUsIGJ1b3lHcm91cElkKSB7XHJcblx0XHRcdHZhciBjb25maWcgPSBzZXRKc29uKGFkZFRva2VuKGhlYWRlcnMoKSkpO1xyXG5cdFx0XHR2YXIgZGF0YSA9IHsgXHJcblx0XHRcdFx0bmFtZTogbmFtZSxcclxuXHRcdFx0XHRidW95R3JvdXBJZDogYnVveUdyb3VwSWRcclxuXHRcdFx0fTtcclxuXHRcdFx0cmV0dXJuICRodHRwLnB1dChTRVJWRVJfQUREUkVTUyArICcvYXBpL2J1b3lfaW5zdGFuY2VzLycgKyBpZCwgXHJcblx0XHRcdFx0XHRKU09OLnN0cmluZ2lmeShkYXRhKSwgY29uZmlnKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXF1ZXN0IGNyZWF0ZSBuZXcgYnVveSBncm91cFxyXG5cdFx0ICogUE9TVCAvYXBpL2J1b3lfZ3JvdXBzXHJcblx0XHQgKiBAcGFyYW0gIHtzdHJpbmd9IG5hbWUgbmV3IGdyb3VwIG5hbWVcclxuXHRcdCAqIEByZXR1cm4ge3Byb21pc2V9ICAgICAgcmVxdWVzdCBwcm9taXNlXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIG5ld0J1b3lHcm91cChuYW1lKSB7XHJcblx0XHRcdHZhciBjb25maWcgPSBzZXRKc29uKGFkZFRva2VuKGhlYWRlcnMoKSkpO1xyXG5cdFx0XHR2YXIgZGF0YSA9IHtcclxuXHRcdFx0XHRuYW1lOiBuYW1lXHJcblx0XHRcdH07XHJcblx0XHRcdHJldHVybiAkaHR0cC5wb3N0KFNFUlZFUl9BRERSRVNTICsgJy9hcGkvYnVveV9ncm91cHMnLFxyXG5cdFx0XHRcdFx0SlNPTi5zdHJpbmdpZnkoZGF0YSksIGNvbmZpZyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogUmVxdWVzdCBjcmVhdGUgbmV3IGJ1b3kgaW5zdGFuY2UgaW4gZ3JvdXBcclxuXHRcdCAqIFBPU1QgL2FwaS9idW95X2luc3RhbmNlc1xyXG5cdFx0ICogQHBhcmFtICB7aW50fSBidW95SWQgIGJ1b3kgaWRcclxuXHRcdCAqIEBwYXJhbSAge2ludH0gZ3JvdXBJZCBuZXcgZ3JvdXAgaWRcclxuXHRcdCAqIEBwYXJhbSAge3N0cmluZ30gbmFtZSAgICBuZXcgbmFtZVxyXG5cdFx0ICogQHJldHVybiB7cHJvbWlzZX0gICAgICAgICByZXF1ZXN0IHByb21pc2VcclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gdXBkYXRlQnVveUluc3RhbmNlR3JvdXAoYnVveUlkLCBncm91cElkLCBuYW1lKSB7XHJcblx0XHRcdHZhciBjb25maWcgPSBzZXRKc29uKGFkZFRva2VuKGhlYWRlcnMoKSkpO1xyXG5cdFx0XHR2YXIgZGF0YSA9IHtcclxuXHRcdFx0XHRuYW1lOiBuYW1lLFxyXG5cdFx0XHRcdGJ1b3lJZDogYnVveUlkLFxyXG5cdFx0XHRcdGJ1b3lHcm91cElkOiBncm91cElkXHJcblx0XHRcdH07XHJcblx0XHRcdHJldHVybiAkaHR0cC5wb3N0KFNFUlZFUl9BRERSRVNTICsgJy9hcGkvYnVveV9pbnN0YW5jZXMnLFxyXG5cdFx0XHRcdFx0SlNPTi5zdHJpbmdpZnkoZGF0YSksIGNvbmZpZyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogUmVxdWVzdCBjb21tYW5kIHR5cGVzXHJcblx0XHQgKiBHRVQgL2FwaS9jb21tYW5kX3R5cGVzXHJcblx0XHQgKiBAcmV0dXJuIHtwcm9taXNlfSByZXF1ZXN0IHByb21pc2VcclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gZ2V0Q29tbWFuZFR5cGVzKCkge1xyXG5cdFx0XHR2YXIgY29uZmlnID0gYWRkVG9rZW4oaGVhZGVycygpKTtcclxuXHRcdFx0cmV0dXJuICRodHRwLmdldChTRVJWRVJfQUREUkVTUyArICcvYXBpL2NvbW1hbmRfdHlwZXMnLCBjb25maWcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmVxdWVzdCBwZW5kaW5nIGNvbW1hbmRzXHJcblx0XHQgKiBHRVQgL2FwaS9jb21tYW5kcz9zZW50PWZhbHNlXHJcblx0XHQgKiBAcmV0dXJuIHtwcm9taXNlfSByZXF1ZXN0IHByb21pc2VcclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gZ2V0QnVveUNvbW1hbmRzKCkge1xyXG5cdFx0XHR2YXIgY29uZmlnID0gYWRkVG9rZW4oaGVhZGVycygpKTtcclxuXHRcdFx0cmV0dXJuICRodHRwLmdldChTRVJWRVJfQUREUkVTUyArICcvYXBpL2NvbW1hbmRzP3NlbnQ9ZmFsc2UnLCBjb25maWcpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFJlcXVlc3QgZXhwb3J0IGRhdGEgYW5kIGRvd25sb2FkIENTViBpbiByZXNwb25zZVxyXG5cdFx0ICogR0VUL2FwaS9leHBvcnQ/cmVhZGluZ3M9Omlkc1xyXG5cdFx0ICogQHBhcmFtICB7aW50W119IHJlYWRpbmdzIGxpc3Qgb2YgcmVhZGluZyBJZHNcclxuXHRcdCAqIEByZXR1cm4ge3Byb21pc2V9ICAgICAgICAgIHJlcXVlc3QgcHJvbWlzZVxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBleHBvcnREYXRhKHJlYWRpbmdzKSB7XHJcblx0XHRcdHZhciBjb25maWcgPSBhZGRUb2tlbihoZWFkZXJzKCkpO1xyXG5cdFx0XHRjb25maWcucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcclxuXHRcdFx0Y29uZmlnLmhlYWRlcnNbJ0FjY2VwdCddID0gJ3RleHQvY3N2JztcclxuXHRcdFx0dmFyIGRhdGEgPSB7XHJcblx0XHRcdFx0cmVhZGluZ3M6IHJlYWRpbmdzXHJcblx0XHRcdH07XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgcHJvbWlzZSA9ICRodHRwLnBvc3QoU0VSVkVSX0FERFJFU1MgKyAnL2FwaS9yZWFkaW5ncy9leHBvcnQnLCBcclxuXHRcdFx0XHRKU09OLnN0cmluZ2lmeShkYXRhKSwgY29uZmlnKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0cHJvbWlzZS50aGVuKGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdHZhciB0aW1lID0gbW9tZW50KCkuZm9ybWF0KFwiREQtTU0tWVktSEhtbXNzXCIpO1xyXG5cdFx0XHRcdHZhciBmaWxlbmFtZSA9ICdleHBvcnQtJyArIHRpbWUgKyAnLmNzdic7XHJcblx0XHRcdFx0b3BlblNhdmVBc0RpYWxvZyhmaWxlbmFtZSwgcmVzLmRhdGEsICd0ZXh0L2NzdicpO1xyXG5cdFx0XHR9LCBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHQkbG9nLmVycm9yKHJlcyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIHByb21pc2U7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKiBFeHRyYWN0IGZpbGUgZnJvbSByZXNwb25zZSBhbmQgc2F2ZSBpdFxyXG5cdFx0ICogIHNhdmVBcyBpcyBmcm9tIEZpbGVTYXZlci5qcywgYSBjcm9zcyBicm93c2VyIHNvbHV0aW9uXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIG9wZW5TYXZlQXNEaWFsb2coZmlsZW5hbWUsIGNvbnRlbnQsIG1lZGlhVHlwZSkge1xyXG5cdFx0XHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjb250ZW50XSwge3R5cGU6IG1lZGlhVHlwZX0pO1xyXG5cdFx0XHRzYXZlQXMoYmxvYiwgZmlsZW5hbWUpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFJlcXVlc3QgbmV3IGNvbW1hbmQgZm9yIGJ1b3lzXHJcblx0XHQgKiBQT1NUIC9hcGkvY29tbWFuZHNcclxuXHRcdCAqIEBwYXJhbSAge29iamVjdH0gY29tbWFuZCBjb21tYW5kXHJcblx0XHQgKiBAcGFyYW0gIHtpbnRbXX0gYnVveUlkcyBsaXN0IG9mIGJ1b3kgSWRzIHRvIHNlbmQgY29tbWFuZCBmb3JcclxuXHRcdCAqIEByZXR1cm4ge3Byb21pc2V9ICAgICAgICAgcmVxdWVzdCBwcm9taXNlXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIHNlbmRCdW95Q29tbWFuZChjb21tYW5kLCBidW95SWRzKSB7XHJcblx0XHRcdHZhciBjb25maWcgPSBzZXRKc29uKGFkZFRva2VuKGhlYWRlcnMoKSkpO1xyXG5cdFx0XHR2YXIgZGF0YSA9IHtcclxuXHRcdFx0XHRjb21tYW5kczogW11cclxuXHRcdFx0fTtcclxuXHRcdFx0YnVveUlkcy5mb3JFYWNoKGZ1bmN0aW9uKGJ1b3lJZCkge1xyXG5cdFx0XHRcdGRhdGEuY29tbWFuZHMucHVzaCh7XHJcblx0XHRcdFx0XHRjb21tYW5kVHlwZUlkOiBjb21tYW5kLmlkLFxyXG5cdFx0XHRcdFx0dmFsdWU6IHBhcnNlSW50KGNvbW1hbmQudmFsdWUsIDEwKSxcclxuXHRcdFx0XHRcdGJ1b3lJZDogYnVveUlkXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gJGh0dHAucG9zdChTRVJWRVJfQUREUkVTUyArICcvYXBpL2NvbW1hbmRzJywgXHJcblx0XHRcdFx0SlNPTi5zdHJpbmdpZnkoZGF0YSksIGNvbmZpZyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogUmVxdWVzdCBkZWxldGUgYnVveSBjb21tYW5kXHJcblx0XHQgKiBAcGFyYW0gIHtpbnR9IGJ1b3lJZCAgYnVveSBpZFxyXG5cdFx0ICogQHJldHVybiB7cHJvbWlzZX0gICAgICAgICByZXF1ZXN0IHByb21pc2VcclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gZGVsZXRlQnVveUNvbW1hbmQoYnVveUlkKSB7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFJlcXVlc3Qgd2FybmluZyB0cmlnZ2VycyBmb3IgYWN0aXZlIGJ1b3kgaW5zdGFuY2VzXHJcblx0XHQgKiBHRVQgL2FwaS93YXJuaW5nX3RyaWdnZXJzP2FjdGl2ZV9pbnN0YW5jZXM9dHJ1ZVxyXG5cdFx0ICogQHJldHVybiB7cHJvbWlzZX0gcmVxdWVzdCBwcm9taXNlXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIGdldFdhcm5pbmdUcmlnZ2VycygpIHtcclxuXHRcdFx0dmFyIGNvbmZpZyA9IGFkZFRva2VuKGhlYWRlcnMoKSk7XHJcblx0XHRcdHJldHVybiAkaHR0cC5nZXQoU0VSVkVSX0FERFJFU1MgKyAnL2FwaS93YXJuaW5nX3RyaWdnZXJzP2FjdGl2ZV9pbnN0YW5jZXM9dHJ1ZScsIGNvbmZpZyk7XHJcblx0XHR9XHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmVxdWVzdCBjcmVhdGUgd2FybmluZyB0cmlnZ2VycyBmb3IgYnVveSBpbnN0YW5jZXNcclxuXHRcdCAqIFBPU1QgL2FwaS93YXJuaW5nX3RyaWdnZXJzXHJcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gdHJpZ2dlciAgICAgICAgIG5ldyB0cmlnZ2VyXHJcblx0XHQgKiBAcGFyYW0ge2ludFtdfSBidW95SW5zdGFuY2VJZHMgbGlzdCBvZiBidW95IGluc3RhbmNlIElkc1xyXG5cdFx0ICogQHJldHVybiB7cHJvbWlzZX0gcmVxdWVzdCBwcm9taXNlXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIGFkZFdhcm5pbmdUcmlnZ2Vycyh0cmlnZ2VyLCBidW95SW5zdGFuY2VJZHMpIHtcclxuXHRcdFx0dmFyIGNvbmZpZyA9IHNldEpzb24oYWRkVG9rZW4oaGVhZGVycygpKSk7XHJcblx0XHRcdHZhciBkYXRhID0ge1xyXG5cdFx0XHRcdHdhcm5pbmdUcmlnZ2VyczogW11cclxuXHRcdFx0fTtcclxuXHRcdFx0YnVveUluc3RhbmNlSWRzLmZvckVhY2goZnVuY3Rpb24oYnVveUluc3RhbmNlSWQpIHtcclxuXHRcdFx0XHRkYXRhLndhcm5pbmdUcmlnZ2Vycy5wdXNoKHtcclxuXHRcdFx0XHRcdGJ1b3lJbnN0YW5jZUlkOiBidW95SW5zdGFuY2VJZCxcclxuXHRcdFx0XHRcdHNlbnNvclR5cGVJZDogdHJpZ2dlci5zZW5zb3JUeXBlSWQsXHJcblx0XHRcdFx0XHRvcGVyYXRvcjogdHJpZ2dlci5vcGVyYXRvcixcclxuXHRcdFx0XHRcdHZhbHVlOiBwYXJzZUludCh0cmlnZ2VyLnZhbHVlLCAxMCksXHJcblx0XHRcdFx0XHRtZXNzYWdlOiB0cmlnZ2VyLm1lc3NhZ2VcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiAkaHR0cC5wb3N0KFNFUlZFUl9BRERSRVNTICsgJy9hcGkvd2FybmluZ190cmlnZ2VycycsIFxyXG5cdFx0XHRcdEpTT04uc3RyaW5naWZ5KGRhdGEpLCBjb25maWcpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFJlcXVlc3Qgd2FybmluZ3NcclxuXHRcdCAqIEdFVCAvYXBpL3dhcm5pbmdzXHJcblx0XHQgKiBAcmV0dXJuIHtwcm9taXNlfSByZXF1ZXN0IHByb21pc2VcclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gZ2V0V2FybmluZ3MoKSB7XHJcblx0XHRcdHZhciBjb25maWcgPSBhZGRUb2tlbihoZWFkZXJzKCkpO1xyXG5cdFx0XHRyZXR1cm4gJGh0dHAuZ2V0KFNFUlZFUl9BRERSRVNTICsgJy9hcGkvd2FybmluZ3MnLCBjb25maWcpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFJlcXVlc3Qgc2Vuc29yIHR5cGVzXHJcblx0XHQgKiBHRVQgL2FwaS9zZW5zb3JfdHlwZXNcclxuXHRcdCAqIEByZXR1cm4ge3Byb21pc2V9IHJlcXVlc3QgcHJvbWlzZVxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBnZXRTZW5zb3JUeXBlcygpIHtcclxuXHRcdFx0dmFyIGNvbmZpZyA9IGFkZFRva2VuKGhlYWRlcnMoKSk7XHJcblx0XHRcdHJldHVybiAkaHR0cC5nZXQoU0VSVkVSX0FERFJFU1MgKyAnL2FwaS9zZW5zb3JfdHlwZXMnLCBjb25maWcpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFJlcXVlc3QgdXNlcnNcclxuXHRcdCAqIEdFVCAvYXBpL3VzZXJzXHJcblx0XHQgKiBAcmV0dXJuIHtwcm9taXNlfSByZXF1ZXN0IHByb21pc2VcclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gZ2V0VXNlcnMoKSB7XHJcblx0XHRcdHZhciBjb25maWcgPSBhZGRUb2tlbihoZWFkZXJzKCkpO1xyXG5cdFx0XHRyZXR1cm4gJGh0dHAuZ2V0KFNFUlZFUl9BRERSRVNTICsgJy9hcGkvdXNlcnMnLCBjb25maWcpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFJlcXVlc3QgY3JlYXRlIHVzZXJcclxuXHRcdCAqIFBPU1QgL2FwaS91c2Vyc1xyXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IHVzZXIgbmV3IHVzZXJcclxuXHRcdCAqIEByZXR1cm4ge3Byb21pc2V9IHJlcXVlc3QgcHJvbWlzZVxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBhZGRVc2VyKHVzZXIpIHtcclxuXHRcdFx0dmFyIGNvbmZpZyA9IHNldEpzb24oYWRkVG9rZW4oaGVhZGVycygpKSk7XHJcblx0XHRcdHZhciBkYXRhID0ge1xyXG5cdFx0XHRcdGVtYWlsOiB1c2VyLmVtYWlsLFxyXG5cdFx0XHRcdGZpcnN0TmFtZTogdXNlci5maXJzdE5hbWUsXHJcblx0XHRcdFx0bGFzdE5hbWU6IHVzZXIubGFzdE5hbWUsXHJcblx0XHRcdFx0cm9sZTogdXNlci5yb2xlXHJcblx0XHRcdH07XHJcblx0XHRcdHJldHVybiAkaHR0cC5wb3N0KFNFUlZFUl9BRERSRVNTICsgJy9hcGkvdXNlcnMnLCBcclxuXHRcdFx0XHRKU09OLnN0cmluZ2lmeShkYXRhKSwgY29uZmlnKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXF1ZXN0IHVwZGF0ZSB1c2VyXHJcblx0XHQgKiBQVVQgL2FwaS91c2Vycy86aWRcclxuXHRcdCAqIEBwYXJhbSAge29iamVjdH0gdXNlciB1cGRhdGVkIHVzZXJcclxuXHRcdCAqIEByZXR1cm4ge3Byb21pc2V9ICAgICAgcmVxdWVzdCBwcm9taXNlXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIHVwZGF0ZVVzZXIodXNlcikge1xyXG5cdFx0XHR2YXIgY29uZmlnID0gc2V0SnNvbihhZGRUb2tlbihoZWFkZXJzKCkpKTtcclxuXHRcdFx0dmFyIGRhdGEgPSB7XHJcblx0XHRcdFx0Zmlyc3ROYW1lOiB1c2VyLmZpcnN0TmFtZSxcclxuXHRcdFx0XHRsYXN0TmFtZTogdXNlci5sYXN0TmFtZSxcclxuXHRcdFx0XHRyb2xlOiB1c2VyLnJvbGVcclxuXHRcdFx0fTtcclxuXHRcdFx0cmV0dXJuICRodHRwLnB1dChTRVJWRVJfQUREUkVTUyArICcvYXBpL3VzZXJzLycgKyB1c2VyLmlkLCBcclxuXHRcdFx0XHRKU09OLnN0cmluZ2lmeShkYXRhKSwgY29uZmlnKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXF1ZXN0IGRlbGV0ZSB1c2VyXHJcblx0XHQgKiBERUxFVEUgL2FwaS91c2Vycy86aWRcclxuXHRcdCAqIEBwYXJhbSAge2ludH0gaWQgdXNlciBJZFxyXG5cdFx0ICogQHJldHVybiB7cHJvbWlzZX0gICAgcmVxdWVzdCBwcm9taXNlXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIGRlbGV0ZVVzZXIoaWQpIHtcclxuXHRcdFx0dmFyIGNvbmZpZyA9IGFkZFRva2VuKGhlYWRlcnMoKSk7XHJcblx0XHRcdHJldHVybiAkaHR0cC5kZWxldGUoU0VSVkVSX0FERFJFU1MgKyAnL2FwaS91c2Vycy8nICsgaWQsIGNvbmZpZyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKlxyXG5cdFx0ICogUmVxdWVzdCBjcmVhdGUgYnVveVxyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgYnVveSBuYW1lXHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gZ3VpZCBidW95IEdVSURcclxuXHRcdCAqIEByZXR1cm4ge3Byb21pc2V9IHJlcXVlc3QgcHJvbWlzZVxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBhZGRCdW95KG5hbWUsIGd1aWQpIHtcclxuXHRcdFx0dmFyIGNvbmZpZyA9IHNldEpzb24oYWRkVG9rZW4oaGVhZGVycygpKSk7XHJcblx0XHRcdHZhciBkYXRhID0ge1xyXG5cdFx0XHRcdGd1aWQ6IGd1aWQsXHJcblx0XHRcdFx0bmFtZTogbmFtZVxyXG5cdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4gJGh0dHAucG9zdChTRVJWRVJfQUREUkVTUyArICcvYXBpL2J1b3lzJywgXHJcblx0XHRcdFx0SlNPTi5zdHJpbmdpZnkoZGF0YSksIGNvbmZpZyk7XHJcblx0XHR9XHJcblx0fVxyXG59KSgpOyIsIi8qKlxyXG4gKiBGbG9vZCBNb25pdG9yaW5nIFN5c3RlbVxyXG4gKiBWZXJzaW9uIDAuMC4xIChEdXl1bmcpXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoQykgVGVhbSBOZXB0dW5lXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgIEFuZHJldyBEeWVyIDxhbmRyZXdAZHllcmdyb3VwLmNvbS5hdT5cclxuICogQHZlcnNpb24gICAgMC4wLjFcclxuICogQGNvcHlyaWdodCAgVGVhbSBOZXB0dW5lICgyMDE1KVxyXG4gKiBAbGluayAgICAgICBodHRwczovL2dpdGh1Yi5jb20vYWNsZWwvZGVjbzM4MDFcclxuICovXHJcbihmdW5jdGlvbigpIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblx0XHJcblx0YW5ndWxhci5tb2R1bGUoJ21vY2suc2VydmVyJywgW10pXHJcblx0XHQuZmFjdG9yeSgnc2VydmVyJywgc2VydmVyKTtcclxuXHRcclxuXHQvKipcclxuXHRcdCogQG5nZG9jIHNlcnZpY2VcclxuXHRcdCogQG5hbWUgbW9jay5zZXJ2ZXJcclxuXHRcdCogQGRlc2NyaXB0aW9uIE1vY2sgb2Ygc2VydmVyIHNlcnZpY2UgZm9yIHRlc3RpbmdcclxuXHQqKi9cclxuXHRmdW5jdGlvbiBzZXJ2ZXIoKSB7XHJcblx0XHRcclxuXHRcdC8qKiBUaGUgbW9jayBzZXJ2aWNlIG1ldGhvZHMgdG8gZXhwb3NlICovXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRnZXRSZWFkaW5nczogZ2V0UmVhZGluZ3MsXHJcblx0XHRcdGdldFNlbnNvcnM6IGdldFNlbnNvcnMsXHJcblx0XHRcdGxvZ2luOiBsb2dpbixcclxuXHRcdFx0bG9nb3V0OiBsb2dvdXRcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdC8qKiBEdW1teSByZWFkaW5nIGRhdGEgKi9cclxuXHRcdGZ1bmN0aW9uIGdldFJlYWRpbmdzKCkge1xyXG5cdFx0XHRyZXR1cm4gW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAxLFxyXG5cdFx0XHRcdFx0YnVveTogMSxcclxuXHRcdFx0XHRcdHRpbWVzdGFtcDogMTQzODkzMzYxNCxcclxuXHRcdFx0XHRcdGxhdGl0dWRlOiAtMjcuNDQ2MTM0MjMsXHJcblx0XHRcdFx0XHRsb25naXR1ZGU6IDE1My4wNzgzNDYyNSxcclxuXHRcdFx0XHRcdHJlYWRpbmdzIDoge1xyXG5cdFx0XHRcdFx0XHRiYXR0ZXJ5OiA5MCxcclxuXHRcdFx0XHRcdFx0cHJlc3N1cmU6IDE0MCxcclxuXHRcdFx0XHRcdFx0c2VhbGV2ZWw6IDIxLFxyXG5cdFx0XHRcdFx0XHR0dXJiaWRpdHk6IDE0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0aWQ6IDIsIFxyXG5cdFx0XHRcdFx0YnVveTogMixcclxuXHRcdFx0XHRcdHRpbWVzdGFtcDogMTQzODU4ODExNyxcclxuXHRcdFx0XHRcdGxhdGl0dWRlOiAtMjcuNDI2OTM3NzIsXHJcblx0XHRcdFx0XHRsb25naXR1ZGU6IDE1My4yMDY3NDg5NixcclxuXHRcdFx0XHRcdHJlYWRpbmdzIDoge1xyXG5cdFx0XHRcdFx0XHRiYXR0ZXJ5OiA3MCxcclxuXHRcdFx0XHRcdFx0cHJlc3N1cmU6IDEyMixcclxuXHRcdFx0XHRcdFx0c2VhbGV2ZWw6IDQ0LFxyXG5cdFx0XHRcdFx0XHR0dXJiaWRpdHk6IDRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRpZDogMywgXHJcblx0XHRcdFx0XHRidW95OiAyLFxyXG5cdFx0XHRcdFx0dGltZXN0YW1wOiAxNDM4NzYwODc2LFxyXG5cdFx0XHRcdFx0bGF0aXR1ZGU6IC0yNy40OTE0NzUsIFxyXG5cdFx0XHRcdFx0bG9uZ2l0dWRlOiAxNTMuMDA2NjU1LFxyXG5cdFx0XHRcdFx0cmVhZGluZ3MgOiB7XHJcblx0XHRcdFx0XHRcdGJhdHRlcnk6IDQ1LFxyXG5cdFx0XHRcdFx0XHRwcmVzc3VyZTogODUsXHJcblx0XHRcdFx0XHRcdHNlYWxldmVsOiAxNSxcclxuXHRcdFx0XHRcdFx0dHVyYmlkaXR5OiA0NVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdGlkOiA0LCBcclxuXHRcdFx0XHRcdGJ1b3k6IDQsXHJcblx0XHRcdFx0XHR0aW1lc3RhbXA6IDE0Mzg4NDcyOTEsXHJcblx0XHRcdFx0XHRsYXRpdHVkZTogLTI3LjQwMDM1NywgXHJcblx0XHRcdFx0XHRsb25naXR1ZGU6IDE1My4xNzc5OTUsXHJcblx0XHRcdFx0XHRyZWFkaW5ncyA6IHtcclxuXHRcdFx0XHRcdFx0YmF0dGVyeTogNzUsXHJcblx0XHRcdFx0XHRcdHByZXNzdXJlOiA5NyxcclxuXHRcdFx0XHRcdFx0c2VhbGV2ZWw6IDMzLFxyXG5cdFx0XHRcdFx0XHR0dXJiaWRpdHk6IDY2XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0aWQ6IDc3LCBcclxuXHRcdFx0XHRcdGJ1b3k6IDEsXHJcblx0XHRcdFx0XHR0aW1lc3RhbXA6IDE0MzgzMjg4MzksXHJcblx0XHRcdFx0XHRsYXRpdHVkZTogLTI3LjQ0NzEzNDIzLFxyXG5cdFx0XHRcdFx0bG9uZ2l0dWRlOiAxNTMuMDkyMzQ2MjUsXHJcblx0XHRcdFx0XHRyZWFkaW5ncyA6IHtcclxuXHRcdFx0XHRcdFx0YmF0dGVyeTogODMsXHJcblx0XHRcdFx0XHRcdHByZXNzdXJlOiAxMTgsXHJcblx0XHRcdFx0XHRcdHNlYWxldmVsOiAyNC41LFxyXG5cdFx0XHRcdFx0XHR0dXJiaWRpdHk6IDhcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdF07XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKiBEdW1teSBzZW5zb3IgZGF0YSAqL1xyXG5cdFx0ZnVuY3Rpb24gZ2V0U2Vuc29ycygpIHtcclxuXHRcdFx0cmV0dXJuIFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogXCJiYXR0ZXJ5XCIsXHJcblx0XHRcdFx0XHRuYW1lOiBcIkJhdHRlcnlcIixcclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBcIkJhdHRlcnkgbGV2ZWwgb2YgYnVveVwiLFxyXG5cdFx0XHRcdFx0Y29sb3VyOiBcIlwiLFxyXG5cdFx0XHRcdFx0dW5pdHM6IFwiJVwiLFxyXG5cdFx0XHRcdFx0bG93ZXJCb3VuZDogMCxcclxuXHRcdFx0XHRcdHVwcGVyQm91bmQ6IDEwMCxcclxuXHRcdFx0XHRcdGRpc3BsYXk6IHRydWUsXHJcblx0XHRcdFx0XHR1bmNvbmZpZ3VyZWQ6IGZhbHNlXHRcdFx0XHRcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiBcInR1cmJpZGl0eVwiLFxyXG5cdFx0XHRcdFx0bmFtZTogXCJUdXJiaWRpdHlcIixcclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBcIldhdGVyIHF1YWxpdHkgYXJvdW5kIGJ1b3lcIixcclxuXHRcdFx0XHRcdGNvbG91cjogXCJcIixcclxuXHRcdFx0XHRcdHVuaXRzOiBcImcvbWxcIixcclxuXHRcdFx0XHRcdGxvd2VyQm91bmQ6IDAsXHJcblx0XHRcdFx0XHR1cHBlckJvdW5kOiA3MCxcclxuXHRcdFx0XHRcdGRpc3BsYXk6IHRydWUsXHJcblx0XHRcdFx0XHR1bmNvbmZpZ3VyZWQ6IGZhbHNlXHRcdFx0XHRcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiBcInByZXNzdXJlXCIsXHJcblx0XHRcdFx0XHRuYW1lOiBcIlwiLFxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IFwiXCIsXHJcblx0XHRcdFx0XHRjb2xvdXI6IFwiXCIsXHJcblx0XHRcdFx0XHR1bml0czogXCJcIixcclxuXHRcdFx0XHRcdGxvd2VyQm91bmQ6IC0xLFxyXG5cdFx0XHRcdFx0dXBwZXJCb3VuZDogLTEsXHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmYWxzZSxcclxuXHRcdFx0XHRcdHVuY29uZmlndXJlZDogdHJ1ZVx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKiogTW9ja2VkIGxvZ2luIGZ1bmN0aW9uICovXHJcblx0XHRmdW5jdGlvbiBsb2dpbigpIHtcclxuXHRcdFx0Ly8gcmV0dXJuIDA7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKiBNb2NrZWQgbG9nb3V0IGZ1bmN0aW9uICovXHJcblx0XHRmdW5jdGlvbiBsb2dvdXQoKSB7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxufSkoKTsiLCIvKipcclxuICogRmxvb2QgTW9uaXRvcmluZyBTeXN0ZW1cclxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKEMpIFRlYW0gTmVwdHVuZVxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgICBBbmRyZXcgRHllciA8YW5kcmV3QGR5ZXJncm91cC5jb20uYXU+XHJcbiAqIEB2ZXJzaW9uICAgIDAuMC4xXHJcbiAqIEBjb3B5cmlnaHQgIFRlYW0gTmVwdHVuZSAoMjAxNSlcclxuICogQGxpbmsgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FjbGVsL2RlY28zODAxXHJcbiAqL1xyXG4oZnVuY3Rpb24oKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICBcclxuICAgIC8qKiBTZXQgY2hhcnQgZGVmYXVsdHMgKi9cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAuZGFzaGJvYXJkJylcclxuICAgICAgICAuY29uZmlnKGZ1bmN0aW9uKENoYXJ0SnNQcm92aWRlcikge1xyXG4gICAgICAgICAgICBDaGFydEpzUHJvdmlkZXIuc2V0T3B0aW9ucyh7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG59KSgpOyIsIi8qKlxyXG4gKiBGbG9vZCBNb25pdG9yaW5nIFN5c3RlbVxyXG4gKiBWZXJzaW9uIDAuMC4xIChEdXl1bmcpXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoQykgVGVhbSBOZXB0dW5lXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgIEFuZHJldyBEeWVyIDxhbmRyZXdAZHllcmdyb3VwLmNvbS5hdT5cclxuICogQHZlcnNpb24gICAgMC4wLjFcclxuICogQGNvcHlyaWdodCAgVGVhbSBOZXB0dW5lICgyMDE1KVxyXG4gKiBAbGluayAgICAgICBodHRwczovL2dpdGh1Yi5jb20vYWNsZWwvZGVjbzM4MDFcclxuICovXHJcbihmdW5jdGlvbigpIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblx0XHJcblx0YW5ndWxhci5tb2R1bGUoJ2FwcC5kYXNoYm9hcmQnKVxyXG5cdFx0LmNvbnRyb2xsZXIoJ0Rhc2hib2FyZENvbnRyb2xsZXInLCBEYXNoYm9hcmRDb250cm9sbGVyKTtcclxuXHRcclxuXHQvKipcclxuXHRcdCogQG5nZG9jIG9iamVjdFxyXG5cdFx0KiBAbmFtZSBhcHAuZGFzaGJvYXJkLmNvbnRyb2xsZXI6RGFzaGJvYXJkQ29udHJvbGxlclxyXG5cdFx0KiBAZGVzY3JpcHRpb24gUHJvdmlkZXMgdmlld21vZGVsIGZvciBkYXNoYm9hcmQgdmlld1xyXG5cdFx0KiBAcmVxdWlyZXMgJGRvY3VtZW50XHJcblx0XHQqIEByZXF1aXJlcyBkYXNoYm9hcmRcclxuXHRcdCogQHJlcXVpcmVzIG1hcFxyXG5cdCoqL1x0XHJcblx0ZnVuY3Rpb24gRGFzaGJvYXJkQ29udHJvbGxlcigkbG9nLCAkZG9jdW1lbnQsICRzY29wZSwgZGFzaGJvYXJkLCBtYXApIHtcclxuXHRcdHZhciB2bSA9IHRoaXM7XHJcblx0XHRcclxuXHRcdC8qKiBVc2VkIHRvIGRldGVybWluZSB3aGVuIGluaXRpYWwgcmVxdWVzdHMgaGF2ZSByZXR1cm5lZCAqL1xyXG5cdFx0dmFyIHJlc29sdmVkID0gMDtcclxuXHRcdHZhciBjaGFydE9iajtcclxuXHJcblx0XHQvKiogVmFyaWFibGVzIGFuZCBtZXRob2RzIGJvdW5kIHRvIHZpZXdtb2RlbCAqL1xyXG5cdFx0dm0ubG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0dm0uc2hvd0dyYXBocyA9IGZhbHNlO1xyXG5cdFx0dm0uYnVveXMgPSBkYXNoYm9hcmQuYnVveXMoKTsgLy8gYmluZHMgcmVmZXJlbmNlXHJcblx0XHR2bS50aW1lcyA9IGRhc2hib2FyZC50aW1lcygpOyAvLyBiaW5kcyByZWZlcmVuY2VcclxuXHRcdHZtLnNlbnNvcnMgPSBkYXNoYm9hcmQuc2Vuc29ycygpOyAvLyBiaW5kcyByZWZlcmVuY2VcclxuXHRcdHZtLmNoYXJ0ID0gZGFzaGJvYXJkLmNoYXJ0KCk7IC8vIGJpbmRzIHJlZmVyZW5jZVxyXG5cdFx0dm0uc2VsZWN0QnVveUdyb3VwID0gZGFzaGJvYXJkLnNlbGVjdEJ1b3lHcm91cDtcclxuXHRcdHZtLnNlbGVjdEJ1b3lJbnN0YW5jZSA9IGRhc2hib2FyZC5zZWxlY3RCdW95SW5zdGFuY2U7XHJcblx0XHR2bS51cGRhdGVTZW5zb3JzID0gZGFzaGJvYXJkLnVwZGF0ZVNlbnNvcnM7XHJcblx0XHR2bS51cGRhdGVUaW1lcyA9IHVwZGF0ZVRpbWVzO1xyXG5cdFx0dm0uZXhwb3J0RGF0YSA9IGRhc2hib2FyZC5leHBvcnREYXRhO1xyXG5cdFx0dm0udG9nZ2xlR3JhcGhzID0gdG9nZ2xlR3JhcGhzO1xyXG5cdFx0XHJcblx0XHRhY3RpdmF0ZSgpO1xyXG5cclxuXHRcdC8qKiBDYWxsZWQgd2hlbiBjb250cm9sbGVyIGlzIGluc3RhbnRpYXRlZCAoZGFzaGJvYXJkIHBhZ2UgaXMgbG9hZGVkKSAqL1xyXG5cdFx0ZnVuY3Rpb24gYWN0aXZhdGUoKSB7XHJcblx0XHRcdHZtLmxvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHRyZXNvbHZlZCA9IDA7XHJcblxyXG5cdFx0XHRxdWVyeVJlYWRpbmdzKCk7XHJcblx0XHRcdHF1ZXJ5U2Vuc29ycygpO1xyXG5cclxuXHRcdFx0Ly8gc2V0IHVwIGNoYXJ0IGxpc3RlbmVyc1xyXG5cdFx0XHQkc2NvcGUuJG9uKCdkaXNwbGF5Q2hhcnRJbnN0YW5jZScsIGZ1bmN0aW9uKGV2ZW50LCBidW95SW5zdGFuY2UpIHtcclxuXHRcdFx0XHQkc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKCF2bS5zaG93R3JhcGhzKSB7XHJcblx0XHRcdFx0XHRcdHRvZ2dsZUdyYXBocygpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZGFzaGJvYXJkLmRpc3BsYXlDaGFydEluc3RhbmNlKGJ1b3lJbnN0YW5jZS5uYW1lKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdCRzY29wZS4kb24oJ2NyZWF0ZScsIGZ1bmN0aW9uKGV2ZW50LCBjaGFydCkge1xyXG5cdFx0XHRcdGNoYXJ0T2JqID0gY2hhcnQ7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKiBRdWVyeSByZWFkaW5ncyBhbmQgdXBkYXRlIGRpc3BsYXkgKi9cclxuXHRcdGZ1bmN0aW9uIHF1ZXJ5UmVhZGluZ3MoKSB7XHJcblx0XHRcdGRhc2hib2FyZC5xdWVyeVJlYWRpbmdzKCkudGhlbihmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRjaGVja0xvYWRlZCgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHQvKiogQmluZCBzZW5zb3IgaW5mb3JtYXRpb24gdG8gdm0gKi9cclxuXHRcdGZ1bmN0aW9uIHF1ZXJ5U2Vuc29ycygpIHtcclxuXHRcdFx0ZGFzaGJvYXJkLnF1ZXJ5U2Vuc29ycygpLnRoZW4oZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dm0uc2Vuc29ycyA9IGRhc2hib2FyZC5zZW5zb3JzKCk7XHJcblx0XHRcdFx0Y2hlY2tMb2FkZWQoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKiBVcGRhdGUgdGltZSBmaWx0ZXJzLCBoYW5kbGUgbG9hZGluZyAqL1xyXG5cdFx0ZnVuY3Rpb24gdXBkYXRlVGltZXMoKSB7XHJcblx0XHRcdHZtLmxvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHRkYXNoYm9hcmQudXBkYXRlVGltZXMoKS50aGVuKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZtLmxvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKiBDaGVjayB3aGV0aGVyIHRoZSBkYXNoYm9hcmQgaGFzIGZpbmlzaGVkIGxvYWRpbmcgKi9cclxuXHRcdGZ1bmN0aW9uIGNoZWNrTG9hZGVkKCkge1xyXG5cdFx0XHRpZiAoKytyZXNvbHZlZCA9PSAyKSB7XHJcblx0XHRcdFx0dm0ubG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKiBFeHBhbmQvY29udHJhY3QgZ3JhcGhzIHBhbmUgYW5kIHVwZGF0ZSBtYXAgKi9cclxuXHRcdGZ1bmN0aW9uIHRvZ2dsZUdyYXBocygpIHtcclxuXHRcdFx0dm0uc2hvd0dyYXBocyA9ICF2bS5zaG93R3JhcGhzO1xyXG5cdFx0XHR2YXIgY2VudGVyID0gbWFwLmdldENlbnRlcigpO1xyXG5cdFx0XHRhbmd1bGFyLmVsZW1lbnQoXHJcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGFzaGJvYXJkLXBhbmVsJykpXHJcblx0XHRcdFx0Lm9uZShcInRyYW5zaXRpb25lbmQgd2Via2l0VHJhbnNpdGlvbkVuZCBvVHJhbnNpdGlvbkVuZCBNU1RyYW5zaXRpb25FbmRcIiwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRtYXAuc2V0Q2VudGVyKGNlbnRlcik7XHJcblx0XHRcdFx0XHRjaGFydE9iai5yZXNpemUoY2hhcnRPYmoucmVuZGVyKVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdFx0XHJcblx0XHQvKiogSW5pdGlhbGlzZSBnb29nbGUgbWFwIHdoZW4gZG9jdW1lbnQgaXMgbG9hZGVkICovXHJcblx0XHQkZG9jdW1lbnQucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHRcdG1hcC5pbml0aWFsaXNlTWFwKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0pKCk7IiwiLyoqXHJcbiAqIEZsb29kIE1vbml0b3JpbmcgU3lzdGVtXHJcbiAqIFZlcnNpb24gMC4wLjEgKER1eXVuZylcclxuICpcclxuICogQ29weXJpZ2h0IChDKSBUZWFtIE5lcHR1bmVcclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogQGF1dGhvciAgICAgQW5kcmV3IER5ZXIgPGFuZHJld0BkeWVyZ3JvdXAuY29tLmF1PlxyXG4gKiBAdmVyc2lvbiAgICAwLjAuMVxyXG4gKiBAY29weXJpZ2h0ICBUZWFtIE5lcHR1bmUgKDIwMTUpXHJcbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hY2xlbC9kZWNvMzgwMVxyXG4gKi9cclxuKGZ1bmN0aW9uKCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHRcclxuXHRhbmd1bGFyLm1vZHVsZSgnYXBwLmRhc2hib2FyZCcpXHJcblx0XHQucnVuKHNldFJvdXRlcyk7XHJcblx0XHRcclxuXHQvKiogRGVmaW5lIHJvdXRlcyBmb3IgZGFzaGJvYXJkIG1vZHVsZSAqL1xyXG5cdGZ1bmN0aW9uIHNldFJvdXRlcyhyb3V0ZXJIZWxwZXIpIHtcclxuXHRcdHZhciBvdGhlcndpc2VQYXRoID0gJy9kYXNoYm9hcmQnO1xyXG5cdFx0cm91dGVySGVscGVyLmNvbmZpZ3VyZVN0YXRlcyhnZXRTdGF0ZXMoKSwgb3RoZXJ3aXNlUGF0aCk7XHJcblx0fVxyXG5cdFxyXG5cdGZ1bmN0aW9uIGdldFN0YXRlcygpIHtcclxuXHRcdHJldHVybiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzdGF0ZTogJ2Rhc2hib2FyZCcsXHJcblx0XHRcdFx0Y29uZmlnOiB7XHJcblx0XHRcdFx0XHR1cmw6ICcvZGFzaGJvYXJkJyxcclxuXHRcdFx0XHRcdGNvbnRyb2xsZXI6ICdEYXNoYm9hcmRDb250cm9sbGVyJyxcclxuXHRcdFx0XHRcdGNvbnRyb2xsZXJBczogJ3ZtJyxcclxuXHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmh0bWwnLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRhY2Nlc3M6ICdhdXRoZWQnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRdO1xyXG5cdH1cclxufSkoKTsiLCIvKipcclxuICogRmxvb2QgTW9uaXRvcmluZyBTeXN0ZW1cclxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKEMpIFRlYW0gTmVwdHVuZVxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgICBBbmRyZXcgRHllciA8YW5kcmV3QGR5ZXJncm91cC5jb20uYXU+XHJcbiAqIEB2ZXJzaW9uICAgIDAuMC4xXHJcbiAqIEBjb3B5cmlnaHQgIFRlYW0gTmVwdHVuZSAoMjAxNSlcclxuICogQGxpbmsgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FjbGVsL2RlY28zODAxXHJcbiAqL1xyXG4oZnVuY3Rpb24oKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdFxyXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAuZGFzaGJvYXJkJylcclxuXHRcdC5mYWN0b3J5KCdkYXNoYm9hcmQnLCBkYXNoYm9hcmQpO1xyXG5cdFx0XHJcblx0LyoqXHJcblx0XHQqIEBuZ2RvYyBzZXJ2aWNlXHJcblx0XHQqIEBuYW1lIGFwcC5kYXNoYm9hcmQuZGFzaGJvYXJkXHJcblx0XHQqIEByZXF1aXJlcyAkbG9nXHJcblx0XHQqIEByZXF1aXJlcyBzZXJ2ZXJcclxuXHRcdCogQHJlcXVpcmVzIG1hcFxyXG5cdFx0KiBAcmVxdWlyZXMgbW9tZW50XHJcblx0KiovXHJcblx0ZnVuY3Rpb24gZGFzaGJvYXJkKCRsb2csICRxLCBzZXJ2ZXIsIG1hcCwgbW9tZW50KSB7XHJcblx0XHQvKiogSW50ZXJuYWwgdmFyaWFibGVzLiBUaGVzZSBhcmUgcHJlc2VydmVkIHVudGlsIHBhZ2UgcmVmcmVzaC4gKi9cclxuXHRcdHZhciByZWFkaW5ncyA9IFtdO1xyXG5cdFx0dmFyIGZpbHRlcmVkUmVhZGluZ3MgPSBbXTtcclxuXHRcdHZhciBzZW5zb3JzID0ge307XHJcblx0XHR2YXIgYnVveXMgPSBbXTtcclxuXHRcdHZhciB0aW1lcyA9IHt9O1xyXG5cdFx0dmFyIGNoYXJ0ID0ge307XHJcblxyXG5cdFx0dmFyIGRhdGVGb3JtYXQgPSBcIkQvTS9ZWVwiO1xyXG5cdFx0dmFyIHRpbWVGb3JtYXQgPSBcImg6bW0gQVwiO1xyXG5cclxuXHRcdGluaXRpYWxpc2VUaW1lcygpO1xyXG5cdFx0aW5pdGlhbGlzZUNoYXJ0KCk7XHJcblxyXG5cdFx0LyoqIFRoZSBzZXJ2aWNlIG1ldGhvZHMgdG8gZXhwb3NlICovXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRidW95czogZ2V0QnVveXMsXHJcblx0XHRcdHRpbWVzOiBnZXRUaW1lcyxcclxuXHRcdFx0c2Vuc29yczogZ2V0U2Vuc29ycyxcclxuXHRcdFx0Y2hhcnQ6IGdldENoYXJ0LFxyXG5cdFx0XHRxdWVyeVJlYWRpbmdzOiBxdWVyeVJlYWRpbmdzLFxyXG5cdFx0XHRxdWVyeVNlbnNvcnM6IHF1ZXJ5U2Vuc29ycyxcclxuXHRcdFx0c2VsZWN0QnVveUdyb3VwOiBzZWxlY3RCdW95R3JvdXAsXHJcblx0XHRcdHNlbGVjdEJ1b3lJbnN0YW5jZTogc2VsZWN0QnVveUluc3RhbmNlLFxyXG5cdFx0XHR1cGRhdGVUaW1lczogdXBkYXRlVGltZXMsXHJcblx0XHRcdHVwZGF0ZVNlbnNvcnM6IHVwZGF0ZVNlbnNvcnMsXHJcblx0XHRcdGV4cG9ydERhdGE6IGV4cG9ydERhdGEsXHJcblx0XHRcdGRpc3BsYXlDaGFydEluc3RhbmNlOiBkaXNwbGF5Q2hhcnRJbnN0YW5jZVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJldHVybiBidW95IGlucHV0IGRhdGEgc3RydWN0dXJlc1xyXG5cdFx0ICogQHJldHVybiB7b2JqZWN0fSBidW95cyBmaWx0ZXJzIGFuZCBpbnB1dHNcclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gZ2V0QnVveXMoKSB7XHJcblx0XHRcdHJldHVybiBidW95cztcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXR1cm4gdGltZSBpbnB1dCBkYXRhIHN0cnVjdHVyZXNcclxuXHRcdCAqIEByZXR1cm4ge29iamVjdH0gdGltZSBpbnB1dHNcclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gZ2V0VGltZXMoKSB7XHJcblx0XHRcdHJldHVybiB0aW1lcztcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXR1cm4gc2Vuc29yIGlucHV0IGRhdGEgc3RydWN0dXJlc1xyXG5cdFx0ICogQHJldHVybiB7b2JqZWN0fSBzZW5zb3IgaW5wdXRzIGFuZCBmaWx0ZXJzXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIGdldFNlbnNvcnMoKSB7XHJcblx0XHRcdHJldHVybiBzZW5zb3JzO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmV0dXJuIGNoYXJ0IGRhdGEgc3RydWN0dXJlXHJcblx0XHQgKiBAcmV0dXJuIHtvYmplY3R9IGNoYXJ0IGRhdGFcclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gZ2V0Q2hhcnQoKSB7XHJcblx0XHRcdHJldHVybiBjaGFydDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBRdWVyeSByZWFkaW5ncyBmcm9tIHNlcnZlciBhbmQgdXBkYXRlIGludGVybmFsIGRhdGEgc3RydWN0dXJlc1xyXG5cdFx0ICogQHBhcmFtICB7aW50fSBmcm9tIHVuaXggdGltZXN0YW1wIGZyb20gdGltZVxyXG5cdFx0ICogQHBhcmFtICB7aW50fSB0byAgIHVuaXggdGltZXN0YW1wIHRvIHRpbWVcclxuXHRcdCAqIEByZXR1cm4ge3Byb21pc2V9ICAgICAgcmVxdWVzdCBwcm9taXNlXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIHF1ZXJ5UmVhZGluZ3MoZnJvbSwgdG8pIHtcclxuXHRcdFx0aWYgKCFmcm9tKSB7XHJcblx0XHRcdFx0ZnJvbSA9IG1vbWVudCgpLnN1YnRyYWN0KHRpbWVzLmlucHV0cy5zaW5jZS52YWx1ZSxcclxuXHRcdFx0XHRcdCB0aW1lcy5pbnB1dHMuc2luY2UucXVhbnRpZmllcikudW5peCgpO1xyXG5cdFx0XHRcdHRvID0gbW9tZW50KCkudW5peCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHZhciBwcm9taXNlID0gc2VydmVyLmdldFJlYWRpbmdzKGZyb20sIHRvKTtcclxuXHRcdFx0cHJvbWlzZS50aGVuKGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdHJlYWRpbmdzID0gcmVzLmRhdGEuYnVveUdyb3VwcztcclxuXHRcdFx0XHRwb3B1bGF0ZUJ1b3lzKCk7XHJcblx0XHRcdFx0dXBkYXRlRmlsdGVycygpO1xyXG5cdFx0XHR9LCBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHQkbG9nLmVycm9yKHJlcyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBRdWVyeSBzZW5zb3JzIGZyb20gc2VydmVyIGFuZCB1cGRhdGUgaW50ZXJuYWwgZGF0YSBzdHJ1Y3R1cmVzXHJcblx0XHQgKiBAcmV0dXJuIHtwcm9taXNlfSByZXF1ZXN0IHByb21pc2VcclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gcXVlcnlTZW5zb3JzKCkge1xyXG5cdFx0XHR2YXIgcHJvbWlzZSA9IHNlcnZlci5nZXRTZW5zb3JUeXBlcygpO1xyXG5cdFx0XHRwcm9taXNlLnRoZW4oZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0cG9wdWxhdGVTZW5zb3JzKHJlcy5kYXRhLnNlbnNvclR5cGVzKTtcclxuXHRcdFx0XHR1cGRhdGVGaWx0ZXJzKCk7XHJcblx0XHRcdH0sIGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdCRsb2cuZXJyb3IocmVzKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBwcm9taXNlO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKiogSW5pdGlhbGlzZSBmaWx0ZXJzIGFuZCBpbnB1dHMgKi9cclxuXHRcdGZ1bmN0aW9uIGluaXRpYWxpc2VUaW1lcygpIHtcclxuXHRcdFx0dGltZXMgPSB7XHJcblx0XHRcdFx0dHlwZTogXCJzaW5jZVwiLFxyXG5cdFx0XHRcdHJhbmdlOiB7IGZyb206IG51bGwsIHRvOiBudWxsIH0sIC8vIGZyb20gYW5kIHRvIGNvbnRhaW4gbW9tZW50c1xyXG5cdFx0XHRcdHBvaW50OiBudWxsLFxyXG5cdFx0XHRcdHBvaW50UmVhZGluZ3M6IFtdLCAvLyBjb250YWlucyBsaXN0IG9mIGNsb3Nlc3QgcmVhZGluZ3MgdG8gcG9pbnRcclxuXHRcdFx0XHRpbnB1dHM6IHtcclxuXHRcdFx0XHRcdHNpbmNlOiB7IHZhbHVlOiA0LCBxdWFudGlmaWVyOiBcIndlZWtzXCIsIG9wdGlvbnM6IFtcclxuXHRcdFx0XHRcdFx0XCJob3Vyc1wiLCBcImRheXNcIiwgXCJ3ZWVrc1wiLCBcIm1vbnRoc1wiXHJcblx0XHRcdFx0XHRdIH0sXHJcblx0XHRcdFx0XHRyYW5nZToge1xyXG5cdFx0XHRcdFx0XHRmcm9tOiB7IGRhdGU6IFwiXCIsIHRpbWU6IFwiXCIgfSxcclxuXHRcdFx0XHRcdFx0dG86IHsgZGF0ZTogXCJcIiwgdGltZTogXCJcIiB9LFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHBvaW50OiB7IGRhdGU6IFwiXCIsIHRpbWU6IFwiXCIgfSxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvKiogSW5pdGlhbGlzZSBjaGFydHMgKi9cclxuXHRcdGZ1bmN0aW9uIGluaXRpYWxpc2VDaGFydCgpIHtcclxuXHRcdFx0Y2hhcnQuc2VyaWVzID0gW107XHJcblx0XHRcdGNoYXJ0LmxhYmVscyA9IFtdO1xyXG5cdFx0XHRjaGFydC5kYXRhID0gW1xyXG5cdFx0XHRcdFtudWxsXVxyXG5cdFx0XHRdO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKiogUG9wdWxhdGUgYnVveXMgZmlsdGVyICovXHJcblx0XHRmdW5jdGlvbiBwb3B1bGF0ZUJ1b3lzKCkge1x0XHJcblx0XHRcdGlmICghcmVhZGluZ3MpIHJldHVybjtcclxuXHJcblx0XHRcdHZhciBncm91cHMgPSBbXTtcclxuXHRcdFx0dmFyIGluc3RhbmNlcyA9IFtdO1xyXG5cclxuXHRcdFx0Ly8gYWRkIGdyb3Vwc1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlYWRpbmdzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dmFyIGJ1b3lHcm91cCA9IHJlYWRpbmdzW2ldO1xyXG5cdFx0XHRcdGdyb3Vwcy5wdXNoKGJ1b3lHcm91cC5pZCk7XHJcblx0XHRcdFx0dmFyIGdyb3VwID0gYnVveXNGaWx0ZXJBZGRHcm91cChidW95R3JvdXApO1xyXG5cclxuXHRcdFx0XHQvLyBhZGQgaW5zdGFuY2VzXHJcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBidW95R3JvdXAuYnVveUluc3RhbmNlcy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdFx0dmFyIGJ1b3lJbnN0YW5jZSA9IGJ1b3lHcm91cC5idW95SW5zdGFuY2VzW2pdO1xyXG5cdFx0XHRcdFx0aW5zdGFuY2VzLnB1c2goYnVveUluc3RhbmNlLmlkKTtcclxuXHRcdFx0XHRcdGJ1b3lzRmlsdGVyQWRkSW5zdGFuY2UoYnVveUluc3RhbmNlLCBncm91cCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHRcdFxyXG5cclxuXHRcdFx0Ly8gcmVtb3ZlIG9sZCBidW95c1xyXG5cdFx0XHRidW95c0ZpbHRlclJlbW92ZU9sZEdyb3Vwcyhncm91cHMpO1xyXG5cdFx0XHRidW95c0ZpbHRlclJlbW92ZU9sZEluc3RhbmNlcyhpbnN0YW5jZXMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKiBQb3B1bGF0ZSBzZW5zb3IgaW5wdXQgZGF0YSAqL1xyXG5cdFx0ZnVuY3Rpb24gcG9wdWxhdGVTZW5zb3JzKGRhdGEpIHtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dmFyIHNlbnNvciA9IGRhdGFbaV07XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHNlbnNvcnMuaGFzT3duUHJvcGVydHkoc2Vuc29yLmlkKSkgY29udGludWU7XHJcblxyXG5cdFx0XHRcdHNlbnNvci5pbnB1dHMgPSB7XHJcblx0XHRcdFx0XHRlbmFibGVkOiBmYWxzZSxcclxuXHRcdFx0XHRcdG9wdGlvbnM6IFtcIj5cIiwgXCI8XCIsIFwiPVwiXSxcclxuXHRcdFx0XHRcdHNlbGVjdGVkOiBcIj5cIixcclxuXHRcdFx0XHRcdHZhbHVlOiBcIlwiXHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0c2Vuc29yc1tzZW5zb3IuaWRdID0gc2Vuc29yO1x0XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEFkZCBidW95IGdyb3VwIHRvIGJ1b3lzIGZpbHRlciBhcnJheSwgZG9uJ3Qgb3ZlcndyaXRlIGV4aXN0aW5nIGdyb3Vwc1xyXG5cdFx0ICogXHJcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gYnVveUdyb3VwIGJ1b3lHcm91cCB0byBhZGRcclxuXHRcdCAqIEByZXR1cm4ge29iamVjdH0gcmVmZXJlbmNlIHRvIGFkZGVkIGdyb3VwXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIGJ1b3lzRmlsdGVyQWRkR3JvdXAoYnVveUdyb3VwKSB7XHJcblx0XHRcdHZhciBncm91cCA9IHt9O1xyXG5cdFx0XHR2YXIgZ0luZGV4ID0gYnVveXNGaWx0ZXJHcm91cEluZGV4KGJ1b3lHcm91cC5pZCk7XHJcblx0XHRcdGlmIChnSW5kZXggIT0gLTEpIHtcclxuXHRcdFx0XHRncm91cCA9IGJ1b3lzW2dJbmRleF07XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Z3JvdXAuaWQgPSBidW95R3JvdXAuaWQ7XHJcblx0XHRcdFx0Z3JvdXAubmFtZSA9IGJ1b3lHcm91cC5uYW1lO1xyXG5cdFx0XHRcdGdyb3VwLmVuYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHRcdGdyb3VwLmNvbGxhcHNlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdGdyb3VwLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuXHRcdFx0XHRncm91cC5idW95SW5zdGFuY2VzID0gW107XHJcblx0XHRcdFx0YnVveXMucHVzaChncm91cCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Z3JvdXAubmFtZSA9IGJ1b3lHcm91cC5uYW1lOyAvLyBhbHdheXMgdXBkYXRlIG5hbWUgaW4gY2FzZSBpdCB3YXMgY2hhbmdlZCBpbiBjb25maWcgcGFnZVxyXG5cdFx0XHRyZXR1cm4gZ3JvdXA7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBZGQgYnVveSBpbnN0YW5jZSB0byBhIGJ1b3kgZ3JvdXAsIGRvbid0IG92ZXJ3cml0ZSBleGlzdGluZyBpbnN0YW5jZXNcclxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBidW95SW5zdGFuY2UgYnVveUluc3RhbmNlIHRvIGFkZFxyXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IGdyb3VwICAgICAgICBidW95R3JvdXAgdG8gYWRkIHRoZSBpbnN0YW5jZSB0b1xyXG5cdFx0ICogQHJldHVybiB7b2JqZWN0fSByZWZlcmVuY2UgdG8gYWRkZWQgaW5zdGFuY2VcclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gYnVveXNGaWx0ZXJBZGRJbnN0YW5jZShidW95SW5zdGFuY2UsIGdyb3VwKSB7XHJcblx0XHRcdHZhciBpbnN0YW5jZSA9IHt9O1xyXG5cdFx0XHR2YXIgZ0luZGV4ID0gYnVveXNGaWx0ZXJHcm91cEluZGV4KGdyb3VwLmlkKTtcclxuXHRcdFx0dmFyIGlJbmRleCA9IGJ1b3lzRmlsdGVySW5zdGFuY2VJbmRleChidW95SW5zdGFuY2UuaWQsIGdyb3VwLmlkKTtcclxuXHRcdFx0aWYgKGlJbmRleCAhPSAtMSkge1xyXG5cdFx0XHRcdGluc3RhbmNlID0gYnVveXNbZ0luZGV4XS5idW95SW5zdGFuY2VzW2lJbmRleF07XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aW5zdGFuY2UuaWQgPSBidW95SW5zdGFuY2UuaWQ7XHJcblx0XHRcdFx0aW5zdGFuY2UuZW5hYmxlZCA9IHRydWU7XHJcblx0XHRcdFx0Z3JvdXAuYnVveUluc3RhbmNlcy5wdXNoKGluc3RhbmNlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpbnN0YW5jZS5uYW1lID0gYnVveUluc3RhbmNlLm5hbWU7IC8vIGFsd2F5cyB1cGRhdGUgbmFtZSBpbiBjYXNlIGl0IHdhcyBjaGFuZ2VkIGluIGNvbmZpZyBwYWdlXHJcblx0XHRcdHJldHVybiBpbnN0YW5jZTtcclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEZpbmQgb3V0IGluZGV4IG9mIGJ1b3lHcm91cCBpbiBidW95cyBhcnJheVxyXG5cdFx0ICogQHBhcmFtICB7aW50fSBpZCBpZCBvZiBidW95R3JvdXBcclxuXHRcdCAqIEByZXR1cm4ge2ludH0gICAgaW5kZXggb3IgLTEgaWYgbm90IGZvdW5kXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIGJ1b3lzRmlsdGVyR3JvdXBJbmRleChpZCkge1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGJ1b3lzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0aWYgKGJ1b3lzW2ldLmlkID09IGlkKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gaTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogRmluZCBvdXQgaW5kZXggb2YgYnVveUluc3RhbmNlIGluIGJ1b3lHcm91cCBpbiBidW95cyBhcnJheVxyXG5cdFx0ICogQHBhcmFtICB7aW50fSBpZCAgaWQgb2YgYnVveUluc3RhbmNlIHRvIGZpbmRcclxuXHRcdCAqIEBwYXJhbSAge2ludH0gZ0lkIGlkIG9mIGJ1b3lHcm91cFxyXG5cdFx0ICogQHJldHVybiB7aW50fSAgICAgaW5kZXggb2YgYnVveUluc3RhbmNlIG9yIC0xIGlmIG5vdCBmb3VuZFxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBidW95c0ZpbHRlckluc3RhbmNlSW5kZXgoaWQsIGdJZCkge1xyXG5cdFx0XHR2YXIgZ0luZGV4ID0gYnVveXNGaWx0ZXJHcm91cEluZGV4KGdJZCk7XHJcblx0XHRcdGlmIChnSW5kZXggPT0gLTEpIHJldHVybiAtMTtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBidW95c1tnSW5kZXhdLmJ1b3lJbnN0YW5jZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRpZiAoYnVveXNbZ0luZGV4XS5idW95SW5zdGFuY2VzW2ldLmlkID09IGlkKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gaTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmVtb3ZlIGJ1b3lHcm91cCBmcm9tIGJ1b3lzIGxpc3RcclxuXHRcdCAqIEBwYXJhbSAge2ludFtdfSBrZWVwIGFycmF5IG9mIGJ1b3lHcm91cCBJRHMgbm90IHRvIHJlbW92ZVxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBidW95c0ZpbHRlclJlbW92ZU9sZEdyb3VwcyhrZWVwKSB7XHJcblx0XHRcdHZhciByZW1vdmUgPSBbXTtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBidW95cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHZhciBncm91cCA9IGJ1b3lzW2ldO1xyXG5cdFx0XHRcdGlmIChrZWVwLmluZGV4T2YoZ3JvdXAuaWQpID09IC0xKSB7XHJcblx0XHRcdFx0XHRyZW1vdmUucHVzaChpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRidW95cy5zcGxpY2UocmVtb3ZlW2ldLCAxKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmVtb3ZlIGJ1b3lJbnN0YW5jZSBmcm9tIGJ1b3lzIGxpc3RcclxuXHRcdCAqIEBwYXJhbSAge2ludFtdfSBrZWVwIGFycmF5IG9mIGJ1b3lJbnN0YW5jZSBJRHMgbm90IHRvIHJlbW92ZVxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBidW95c0ZpbHRlclJlbW92ZU9sZEluc3RhbmNlcyhrZWVwKSB7XHJcblx0XHRcdC8vIGlmICghYnVveXMubGVuZ3RoKSByZXR1cm47IGRvZXNuJ3QgZG8gYW55dGhpbmc/XHJcblx0XHRcdHZhciByZW1vdmUgPSBbXTtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBidW95cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHZhciBncm91cCA9IGJ1b3lzW2ldO1xyXG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZ3JvdXAuYnVveUluc3RhbmNlcy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdFx0dmFyIGluc3RhbmNlID0gZ3JvdXAuYnVveUluc3RhbmNlc1tqXTtcclxuXHRcdFx0XHRcdGlmIChrZWVwLmluZGV4T2YoaW5zdGFuY2UuaWQpID09IC0xKSB7XHJcblx0XHRcdFx0XHRcdHJlbW92ZS5wdXNoKHsgZ3JvdXA6IGksIGluc3RhbmNlOiBqIH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGJ1b3lzW3JlbW92ZVtpXS5ncm91cF0uc3BsaWNlKHJlbW92ZVtpXS5pbnN0YW5jZSwgMSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblxyXG5cdFx0LyoqIFVwZGF0ZSB3aGV0aGVyIGJ1b3kgZ3JvdXAgZmlsdGVyIGlzIGVuYWJsZWQgKi9cclxuXHRcdGZ1bmN0aW9uIHNlbGVjdEJ1b3lHcm91cChidW95R3JvdXApIHtcclxuXHRcdFx0YnVveUdyb3VwLmJ1b3lJbnN0YW5jZXMuZm9yRWFjaChmdW5jdGlvbihidW95SW5zdGFuY2UpIHtcclxuXHRcdFx0XHRidW95SW5zdGFuY2UuZW5hYmxlZCA9IGJ1b3lHcm91cC5lbmFibGVkO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dXBkYXRlRmlsdGVycygpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKiBVcGRhdGUgd2hldGhlciBidW95IGluc3RhbmNlIGZpbHRlciBpcyBlbmFibGVkICovXHJcblx0XHRmdW5jdGlvbiBzZWxlY3RCdW95SW5zdGFuY2UoYnVveUdyb3VwKSB7XHJcblx0XHRcdHVwZGF0ZUJ1b3lHcm91cFNlbGVjdFN0YXRlKGJ1b3lHcm91cCk7XHRcdFx0XHJcblx0XHRcdHVwZGF0ZUZpbHRlcnMoKTtcclxuXHRcdH1cclxuXHJcblx0XHQvKiogQWxzbyBoYW5kbGUgZGlzcGxheSBvZiBpbmRldGVybWluYXRlIGNoZWNrYm94IGZvciBncm91cCAqL1xyXG5cdFx0ZnVuY3Rpb24gdXBkYXRlQnVveUdyb3VwU2VsZWN0U3RhdGUoYnVveUdyb3VwKSB7XHJcblx0XHRcdHZhciBhbGxUcnVlID0gdHJ1ZTtcclxuXHRcdFx0dmFyIGFsbEZhbHNlID0gdHJ1ZTtcclxuXHRcdFx0XHJcblx0XHRcdGJ1b3lHcm91cC5idW95SW5zdGFuY2VzLmZvckVhY2goZnVuY3Rpb24oaW5zdGFuY2UpIHtcclxuXHRcdFx0XHRpZiAoaW5zdGFuY2UuZW5hYmxlZCkge1xyXG5cdFx0XHRcdFx0YWxsRmFsc2UgPSBmYWxzZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0YWxsVHJ1ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoYWxsRmFsc2UpIHtcclxuXHRcdFx0XHRidW95R3JvdXAuZW5hYmxlZCA9IGZhbHNlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGJ1b3lHcm91cC5lbmFibGVkID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0aWYgKGFsbEZhbHNlIHx8IGFsbFRydWUpIHtcclxuXHRcdFx0XHRidW95R3JvdXAuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGJ1b3lHcm91cC5pbmRldGVybWluYXRlID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8qKiBVcGRhdGUgZmlsdGVycyBhbmQgbWFwIHdoZW4gdGltZSBmaWx0ZXJzIGFyZSBjaGFuZ2VkICovXHJcblx0XHRmdW5jdGlvbiB1cGRhdGVUaW1lcygpIHtcclxuXHRcdFx0dmFyIGRlZmVyID0gJHEuZGVmZXIoKTtcclxuXHRcdFx0Ly8gY29udmVydCBpbnB1dCBzdHJpbmdzIHRvIG1vbWVudHMgXHJcblx0XHRcdC8vIGFuZCB1cGRhdGUgdm0udGltZXMsIHdoaWNoIHVwZGF0ZXMgcmVmZXJlbmNlIGluIGRhc2hib2FyZCBzZXJ2aWNlXHJcblx0XHRcdGlmICh0aW1lc0lucHV0c1ZhbGlkKCkpIHtcclxuXHRcdFx0XHR2YXIgbW9tZW50Rm9ybWF0ID0gZGF0ZUZvcm1hdCArIFwiIFwiICsgdGltZUZvcm1hdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAodGltZXMudHlwZSA9PSAncmFuZ2UnKSB7XHJcblx0XHRcdFx0XHR0aW1lcy5yYW5nZS5mcm9tID0gbW9tZW50KHRpbWVzLmlucHV0cy5yYW5nZS5mcm9tLmRhdGVcclxuXHRcdFx0XHRcdFx0KyBcIiBcIiArIHRpbWVzLmlucHV0cy5yYW5nZS5mcm9tLnRpbWUsIG1vbWVudEZvcm1hdCk7XHJcblx0XHRcdFx0XHR0aW1lcy5yYW5nZS50byA9IG1vbWVudCh0aW1lcy5pbnB1dHMucmFuZ2UudG8uZGF0ZVxyXG5cdFx0XHRcdFx0XHQrIFwiIFwiICsgdGltZXMuaW5wdXRzLnJhbmdlLnRvLnRpbWUsIG1vbWVudEZvcm1hdCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGVsc2UgaWYgKHRpbWVzLnR5cGUgPT0gJ3BvaW50Jykge1xyXG5cdFx0XHRcdFx0dGltZXMucG9pbnQgPSBtb21lbnQodGltZXMuaW5wdXRzLnBvaW50LmRhdGVcclxuXHRcdFx0XHRcdFx0KyBcIiBcIiArIHRpbWVzLmlucHV0cy5wb2ludC50aW1lLCBtb21lbnRGb3JtYXQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRxdWVyeVJlYWRpbmdUaW1lcygpLnRoZW4oZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRkZWZlci5yZXNvbHZlKCk7XHRcclxuXHRcdFx0XHR9LCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGRlZmVyLnJlamVjdCgpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBkZWZlci5wcm9taXNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKiBCYXNpYyB2YWxpZGF0aW9uIG9mIHRpbWVzIGlucHV0cyAqL1xyXG5cdFx0ZnVuY3Rpb24gdGltZXNJbnB1dHNWYWxpZCgpIHtcclxuXHRcdFx0aWYgKHRpbWVzLnR5cGUgPT0gJ3NpbmNlJykge1xyXG5cdFx0XHRcdGlmICh0aW1lcy5pbnB1dHMuc2luY2UudmFsdWUpIHtcclxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGltZXMudHlwZSA9PSAncmFuZ2UnKSB7XHJcblx0XHRcdFx0Ly8gdmFsaWQgY29tYmluYXRpb25zOiBhbGwgZmlsbGVkLCBkYXRlcyBmaWxsZWQsIHRpbWVzIGZpbGxlZFxyXG5cdFx0XHRcdHZhciBmcm9tRGF0ZSA9IHRpbWVzLmlucHV0cy5yYW5nZS5mcm9tLmRhdGU7XHJcblx0XHRcdFx0dmFyIGZyb21UaW1lID0gdGltZXMuaW5wdXRzLnJhbmdlLmZyb20udGltZTtcclxuXHRcdFx0XHR2YXIgdG9EYXRlID0gdGltZXMuaW5wdXRzLnJhbmdlLnRvLmRhdGU7XHJcblx0XHRcdFx0dmFyIHRvVGltZSA9IHRpbWVzLmlucHV0cy5yYW5nZS50by50aW1lO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChmcm9tRGF0ZSAmJiBmcm9tVGltZSAmJiB0b0RhdGUgJiYgdG9UaW1lKSByZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRpZiAoZnJvbURhdGUgJiYgIWZyb21UaW1lICYmIHRvRGF0ZSAmJiAhdG9UaW1lKSByZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGltZXMudHlwZSA9PSAncG9pbnQnKSB7XHJcblx0XHRcdFx0Ly8gbXVzdCBoYXZlIGRhdGUsIHRpbWUgaXMgb3B0aW9uYWxcclxuXHRcdFx0XHRpZiAodGltZXMuaW5wdXRzLnBvaW50LmRhdGUpIHtcclxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKiogVXBkYXRlIGludGVybmFsIGZpbHRlcmVkIHJlYWRpbmdzIHdoZW4gdGltZSBmaWx0ZXJzIGNoYW5nZXMgKi9cclxuXHRcdGZ1bmN0aW9uIHF1ZXJ5UmVhZGluZ1RpbWVzKCkge1xyXG5cdFx0XHQvLyBxdWVyeSBzZXJ2ZXIgZm9yIG5ldyB0aW1lc1xyXG5cdFx0XHR2YXIgZnJvbSwgdG87XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAodGltZXMudHlwZSA9PSAnc2luY2UnKSB7XHJcblx0XHRcdFx0ZnJvbSA9IG1vbWVudCgpLnN1YnRyYWN0KHRpbWVzLmlucHV0cy5zaW5jZS52YWx1ZSxcclxuXHRcdFx0XHRcdCB0aW1lcy5pbnB1dHMuc2luY2UucXVhbnRpZmllcikudW5peCgpO1xyXG5cdFx0XHRcdHRvID0gbW9tZW50KCkudW5peCgpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRpbWVzLnR5cGUgPT0gJ2FsbCcpIHtcclxuXHRcdFx0XHRmcm9tID0gMDtcclxuXHRcdFx0XHR0byA9IG1vbWVudCgpLnVuaXgoKTtcclxuXHRcdFx0fSBlbHNlIGlmICh0aW1lcy50eXBlID09ICdyYW5nZScpIHtcclxuXHRcdFx0XHRmcm9tID0gdGltZXMucmFuZ2UuZnJvbS51bml4KCk7XHJcblx0XHRcdFx0dG8gPSB0aW1lcy5yYW5nZS50by51bml4KCk7XHJcblx0XHRcdH0gZWxzZSBpZiAodGltZXMudHlwZSA9PSAncG9pbnQnKSB7XHJcblx0XHRcdFx0ZnJvbSA9IHRpbWVzLnBvaW50LmNsb25lKCkuc3VidHJhY3QoMiwgJ3dlZWtzJykudW5peCgpO1xyXG5cdFx0XHRcdHRvID0gdGltZXMucG9pbnQuY2xvbmUoKS5hZGQoMiwgJ3dlZWtzJykudW5peCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgcHJvbWlzZSA9IHF1ZXJ5UmVhZGluZ3MoZnJvbSwgdG8pO1xyXG5cdFx0XHRwcm9taXNlLnRoZW4oZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKHRpbWVzLnR5cGUgPT0gJ3BvaW50Jykge1xyXG5cdFx0XHRcdFx0Y2FsY3VsYXRlUG9pbnRSZWFkaW5ncygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBwcm9taXNlO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKiogVXBkYXRlIGludGVybmFsIGZpbHRlcmVkIHJlYWRpbmdzIHdoZW4gc2Vuc29yIGZpbHRlcnMgY2hhbmdlZCAqL1xyXG5cdFx0ZnVuY3Rpb24gdXBkYXRlU2Vuc29ycygpIHtcclxuXHRcdFx0dXBkYXRlRmlsdGVycygpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKiogQ2FsY3VsYXRlIHJlYWRpbmdzIGNsb3Nlc3QgdG8gc3BlY2lmaWVkIHRpbWUgKi9cclxuXHRcdGZ1bmN0aW9uIGNhbGN1bGF0ZVBvaW50UmVhZGluZ3MoKSB7XHJcblx0XHRcdHRpbWVzLnBvaW50UmVhZGluZ3MgPSBbXTtcclxuXHRcdFx0aWYgKCFyZWFkaW5ncykgcmV0dXJuO1xyXG5cclxuXHRcdFx0cmVhZGluZ3MuZm9yRWFjaChmdW5jdGlvbihidW95R3JvdXApIHtcclxuXHRcdFx0XHRidW95R3JvdXAuYnVveUluc3RhbmNlcy5mb3JFYWNoKGZ1bmN0aW9uKGJ1b3lJbnN0YW5jZSkge1xyXG5cdFx0XHRcdFx0dmFyIGNsb3Nlc3QgPSB7XHJcblx0XHRcdFx0XHRcdGlkOiBidW95SW5zdGFuY2UucmVhZGluZ3NbMF0uaWQsXHJcblx0XHRcdFx0XHRcdHRpbWVzdGFtcDogYnVveUluc3RhbmNlLnJlYWRpbmdzWzBdLnRpbWVzdGFtcFxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdGJ1b3lJbnN0YW5jZS5yZWFkaW5ncy5mb3JFYWNoKGZ1bmN0aW9uKHJlYWRpbmcpIHtcclxuXHRcdFx0XHRcdFx0dmFyIGRpZmZPbGQgPSBtb21lbnQudW5peChjbG9zZXN0LnRpbWVzdGFtcCkuZGlmZih0aW1lcy5wb2ludCk7XHJcblx0XHRcdFx0XHRcdHZhciBkaWZmTmV3ID0gbW9tZW50LnVuaXgocmVhZGluZy50aW1lc3RhbXApLmRpZmYodGltZXMucG9pbnQpO1xyXG5cdFx0XHRcdFx0XHRpZiAoTWF0aC5hYnMoZGlmZk5ldykgPCBNYXRoLmFicyhkaWZmT2xkKSkge1xyXG5cdFx0XHRcdFx0XHRcdGNsb3Nlc3QuaWQgPSByZWFkaW5nLmlkO1xyXG5cdFx0XHRcdFx0XHRcdGNsb3Nlc3QudGltZXN0YW1wID0gcmVhZGluZy50aW1lc3RhbXA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0dGltZXMucG9pbnRSZWFkaW5ncy5wdXNoKGNsb3Nlc3QuaWQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqIFJlLWZpbHRlciByZWFkaW5ncyBiYXNlZCBvbiB1cGRhdGVkIGZpbHRlcnMgKi9cclxuXHRcdGZ1bmN0aW9uIHVwZGF0ZUZpbHRlcnMoKSB7XHJcblx0XHRcdGZpbHRlcmVkUmVhZGluZ3MgPSBbXTtcclxuXHRcdFx0aWYgKCFyZWFkaW5ncy5sZW5ndGggfHwgIU9iamVjdC5rZXlzKHNlbnNvcnMpLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZWFkaW5ncy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHZhciBidW95R3JvdXAgPSByZWFkaW5nc1tpXTtcclxuXHRcdFx0XHRpZiAoIWJ1b3lHcm91cEVuYWJsZWQoYnVveUdyb3VwLmlkKSkgY29udGludWU7XHJcblx0XHRcdFx0dmFyIGdyb3VwID0gYWRkQnVveUdyb3VwKGJ1b3lHcm91cCk7XHJcblxyXG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgYnVveUdyb3VwLmJ1b3lJbnN0YW5jZXMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRcdHZhciBidW95SW5zdGFuY2UgPSBidW95R3JvdXAuYnVveUluc3RhbmNlc1tqXTtcclxuXHRcdFx0XHRcdGlmICghYnVveUluc3RhbmNlRW5hYmxlZChidW95SW5zdGFuY2UuaWQsIGJ1b3lHcm91cC5pZCkpIGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0dmFyIGluc3RhbmNlID0gYWRkQnVveUluc3RhbmNlKGJ1b3lJbnN0YW5jZSwgZ3JvdXApO1xyXG5cclxuXHRcdFx0XHRcdGZvciAodmFyIGsgPSAwOyBrIDwgYnVveUluc3RhbmNlLnJlYWRpbmdzLmxlbmd0aDsgaysrKSB7XHJcblx0XHRcdFx0XHRcdHZhciByZWFkaW5nID0gYnVveUluc3RhbmNlLnJlYWRpbmdzW2tdO1xyXG5cdFx0XHRcdFx0XHRpZiAoIXNob3dSZWFkaW5nKHJlYWRpbmcpKSBjb250aW51ZTtcclxuXHRcdFx0XHRcdFx0aW5zdGFuY2UucmVhZGluZ3MucHVzaChyZWFkaW5nKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0dXBkYXRlTWFwKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBDaGVjayB3aGV0aGVyIGEgYnVveSBncm91cCBzaG91bGQgYmUgc2hvd25cclxuXHRcdCAqIEBwYXJhbSAge2ludH0gaWQgaWQgb2YgYnVveSBncm91cCB0byBjaGVja1xyXG5cdFx0ICogQHJldHVybiB7Ym9vbH0gICAgdHJ1ZSBpZiBpdCBzaG91bGQgYmUgc2hvd24sIGZhbHNlIGlmIG5vdFxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBidW95R3JvdXBFbmFibGVkKGlkKSB7XHJcblx0XHRcdHJldHVybiBidW95c1tidW95c0ZpbHRlckdyb3VwSW5kZXgoaWQpXS5lbmFibGVkO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQ2hlY2sgd2hldGhlciBhIGJ1b3kgaW5zdGFuY2Ugc2hvdWxkIGJlIHNob3duXHJcblx0XHQgKiBAcGFyYW0gIHtpbnR9IGlkIGlkIG9mIGJ1b3kgaW5zdGFuY2UgdG8gY2hlY2tcclxuXHRcdCAqIEBwYXJhbSB7aW50fSBnSWQgaWQgb2YgZ3JvdXAgaW5zdGFuY2UgaXMgaW5cclxuXHRcdCAqIEByZXR1cm4ge2Jvb2x9ICAgIHRydWUgaWYgaXQgc2hvdWxkIGJlIHNob3duLCBmYWxzZSBpZiBub3RcclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gYnVveUluc3RhbmNlRW5hYmxlZChpZCwgZ0lkKSB7XHJcblx0XHRcdHZhciBnSW5kZXggPSBidW95c0ZpbHRlckdyb3VwSW5kZXgoZ0lkKTtcclxuXHRcdFx0dmFyIGlJbmRleCA9IGJ1b3lzRmlsdGVySW5zdGFuY2VJbmRleChpZCwgZ0lkKTtcclxuXHRcdFx0cmV0dXJuIGJ1b3lzW2dJbmRleF0uYnVveUluc3RhbmNlc1tpSW5kZXhdLmVuYWJsZWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBZGQgYSBidW95IGdyb3VwIHRvIGZpbHRlcmVkIHJlYWRpbmdzXHJcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gYnVveUdyb3VwIGJ1b3kgZ3JvdXAgdG8gYWRkXHJcblx0XHQgKiBAcmV0dXJuIHtvYmplY3R9IHJlZmVyZW5jZSB0byBhZGRlZCBncm91cFxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBhZGRCdW95R3JvdXAoYnVveUdyb3VwKSB7XHJcblx0XHRcdHZhciBncm91cCA9IHt9O1xyXG5cdFx0XHRmaWx0ZXJlZFJlYWRpbmdzLnB1c2goZ3JvdXApO1xyXG5cdFx0XHRncm91cC5pZCA9IGJ1b3lHcm91cC5pZDtcclxuXHRcdFx0Z3JvdXAubmFtZSA9IGJ1b3lHcm91cC5uYW1lO1xyXG5cdFx0XHRncm91cC5idW95SW5zdGFuY2VzID0gW107XHJcblx0XHRcdHJldHVybiBncm91cDtcclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEFkZCBhIGJ1b3kgaW5zdGFuY2UgdG8gZmlsdGVyZWQgcmVhZGluZ3NcclxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBidW95SW5zdGFuY2UgYnVveSBpbnN0YW5jZSB0byBhZGRcclxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBncm91cCB0aGUgZ3JvdXAgaXQgc2hvdWxkIGJlIGFkZGVkIHRvXHJcblx0XHQgKiBAcmV0dXJuIHtvYmplY3R9IHJlZmVyZW5jZSB0byBhZGRlZCBpbnN0YW5jZVxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBhZGRCdW95SW5zdGFuY2UoYnVveUluc3RhbmNlLCBncm91cCkge1xyXG5cdFx0XHR2YXIgaW5zdGFuY2UgPSB7fTtcclxuXHRcdFx0Z3JvdXAuYnVveUluc3RhbmNlcy5wdXNoKGluc3RhbmNlKTtcclxuXHRcdFx0aW5zdGFuY2UuaWQgPSBidW95SW5zdGFuY2UuaWQ7XHJcblx0XHRcdGluc3RhbmNlLm5hbWUgPSBidW95SW5zdGFuY2UubmFtZTtcclxuXHRcdFx0aW5zdGFuY2UucmVhZGluZ3MgPSBbXTtcclxuXHRcdFx0cmV0dXJuIGluc3RhbmNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQ2hlY2sgd2hldGhlciBvciBub3QgdG8gc2hvdyBhIHJlYWRpbmcgYmFzZWQgb24gb3RoZXIgZmlsdGVyc1xyXG5cdFx0ICogQHBhcmFtICB7b2JqZWN0fSByZWFkaW5nIHJlYWRpbmcgdG8gY2hlY2tcclxuXHRcdCAqIEByZXR1cm4ge2Jvb2x9ICAgICAgICAgdHJ1ZSBpZiB0aGUgcmVhZGluZyBzaG91bGQgYmUgc2hvdywgZWxzZSBmYWxzZVxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBzaG93UmVhZGluZyhyZWFkaW5nKSB7XHJcblx0XHRcdGlmICghZmlsdGVyVGltZXMocmVhZGluZykpIHJldHVybiBmYWxzZTtcclxuXHRcdFx0aWYgKCFmaWx0ZXJTZW5zb3JzKHJlYWRpbmcpKSByZXR1cm4gZmFsc2U7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIEZpbHRlciByZWFkaW5ncyBiYXNlZCBvbiB0aW1lc3RhbXBcclxuXHRcdCAqIEBwYXJhbSAge29iamVjdH0gcmVhZGluZyByZWFkaW5nXHJcblx0XHQgKiBAcmV0dXJuIHtib29sfSAgICAgICAgIGluY2x1ZGUgcmVhZGluZ1xyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBmaWx0ZXJUaW1lcyhyZWFkaW5nKSB7XHJcblx0XHRcdGlmICh0aW1lcy50eXBlID09ICdzaW5jZScpIHtcclxuXHRcdFx0XHR2YXIgc2luY2UgPSBtb21lbnQoKS5zdWJ0cmFjdCh0aW1lcy5pbnB1dHMuc2luY2UudmFsdWUsXHJcblx0XHRcdFx0XHQgdGltZXMuaW5wdXRzLnNpbmNlLnF1YW50aWZpZXIpO1xyXG5cdFx0XHRcdHZhciB0aW1lID0gbW9tZW50LnVuaXgocmVhZGluZy50aW1lc3RhbXApO1xyXG5cdFx0XHRcdGlmICghdGltZS5pc0FmdGVyKHNpbmNlKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmICh0aW1lcy50eXBlID09ICdyYW5nZScpIHtcclxuXHRcdFx0XHR2YXIgdGltZSA9IG1vbWVudC51bml4KHJlYWRpbmcudGltZXN0YW1wKTtcclxuXHRcdFx0XHRpZiAoIXRpbWUuaXNCZXR3ZWVuKHRpbWVzLnJhbmdlLmZyb20sIHRpbWVzLnJhbmdlLnRvKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmICh0aW1lcy50eXBlID09ICdwb2ludCcpIHtcclxuXHRcdFx0XHRpZiAodGltZXMucG9pbnRSZWFkaW5ncy5pbmRleE9mKHJlYWRpbmcuaWQpID09IC0xKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIEZpbHRlciByZWFkaW5ncyBiYXNlZCBvbiBzZW5zb3IgZmlsdGVyc1xyXG5cdFx0ICogQHBhcmFtICB7b2JqZWN0fSByZWFkaW5nIHJlYWRpbmdcclxuXHRcdCAqIEByZXR1cm4ge2Jvb2x9ICAgICAgICAgaW5jbHVkZSByZWFkaW5nXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIGZpbHRlclNlbnNvcnMocmVhZGluZykge1xyXG5cdFx0XHRpZiAoT2JqZWN0LmtleXMoc2Vuc29ycykubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcmVhZGluZy5zZW5zb3JSZWFkaW5ncy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGlmICghZmlsdGVyU2Vuc29yKHJlYWRpbmcuc2Vuc29yUmVhZGluZ3NbaV0pKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIEZpbHRlciByZWFkaW5nIGJhc2VkIG9uIHNwZWNpZmljIHNlbnNvclxyXG5cdFx0ICogQHBhcmFtICB7b2JqZWN0fSBzUmVhZGluZyBzZW5zb3IgcmVhZGluZ1xyXG5cdFx0ICogQHJldHVybiB7Ym9vbH0gICAgICAgICAgaW5jbHVkZSByZWFkaW5nXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIGZpbHRlclNlbnNvcihzUmVhZGluZykge1xyXG5cdFx0XHR2YXIgc2Vuc29yID0gc2Vuc29yc1tzUmVhZGluZy5zZW5zb3JUeXBlSWRdLmlucHV0cztcclxuXHRcdFx0XHJcblx0XHRcdGlmICghc2Vuc29yLmVuYWJsZWQpIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHR2YXIgdmFsdWUgPSBwYXJzZUludChzZW5zb3IudmFsdWUsIDEwKTtcclxuXHRcdFx0aWYgKHNlbnNvci5zZWxlY3RlZCA9PSBcIj5cIikge1xyXG5cdFx0XHRcdGlmIChzUmVhZGluZy52YWx1ZSA8PSB2YWx1ZSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmIChzZW5zb3Iuc2VsZWN0ZWQgPT0gXCI8XCIpIHtcclxuXHRcdFx0XHRpZiAoc1JlYWRpbmcudmFsdWUgPj0gdmFsdWUpIHtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAoc2Vuc29yLnNlbGVjdGVkID09IFwiPVwiKSB7XHJcblx0XHRcdFx0aWYgKHNSZWFkaW5nLnZhbHVlICE9IHZhbHVlKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFJldHVybiAwLTEgZGVwZW5kaW5nIHdoZXJlIHJlYWRpbmcgdGltZXN0YW1wIGZhbGxzIGJhc2VkIG9uIHRpbWUgZmlsdGVyc1xyXG5cdFx0ICogQHBhcmFtICB7b2JqZWN0fSByZWFkaW5nIHJlYWRpbmdcclxuXHRcdCAqIEByZXR1cm4ge2Zsb2F0fSAgICAgICAgIGFnZSAoMCBpcyBvbGQsIDEgaXMgbmV3KVxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBnZXRSZWxhdGl2ZUFnZShyZWFkaW5nKSB7XHJcblx0XHRcdC8vIHJldHVybnMgYWdlIGJldHdlZW4gMCBhbmQgMSwgYmFzZWQgb24gYSByYW5nZSBkZXRlcm1pbmVkIGFzIHNlZW4gYmVsb3dcclxuXHRcdFx0dmFyIHRpbWUgPSBtb21lbnQudW5peChyZWFkaW5nLnRpbWVzdGFtcCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAodGltZXMudHlwZSA9PSAnYWxsJykge1xyXG5cdFx0XHRcdC8vIHJhbmdlOiBmcm9tIDIgd2Vla3MgYWdvIHVudGlsIG5vd1xyXG5cdFx0XHRcdHZhciBtYXggPSBtb21lbnQoKTtcclxuXHRcdFx0XHR2YXIgbWluID0gbWF4LmNsb25lKCkuc3VidHJhY3QoMiwgJ3dlZWtzJyk7XHJcblx0XHRcdFxyXG5cdFx0XHR9IGVsc2UgaWYgKHRpbWVzLnR5cGUgPT0gJ3NpbmNlJykge1xyXG5cdFx0XHRcdHZhciBtYXggPSBtb21lbnQoKTtcclxuXHRcdFx0XHR2YXIgbWluID0gbW9tZW50KCkuc3VidHJhY3QodGltZXMuaW5wdXRzLnNpbmNlLnZhbHVlLFxyXG5cdFx0XHRcdFx0IHRpbWVzLmlucHV0cy5zaW5jZS5xdWFudGlmaWVyKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHR9IGVsc2UgaWYgKHRpbWVzLnR5cGUgPT0gJ3JhbmdlJykge1xyXG5cdFx0XHRcdC8vIHJhbmdlOiByYW5nZSBvZiB0aW1lIGZpbHRlcnNcclxuXHRcdFx0XHR2YXIgbWF4ID0gdGltZXMucmFuZ2UudG87XHJcblx0XHRcdFx0dmFyIG1pbiA9IHRpbWVzLnJhbmdlLmZyb207XHJcblx0XHRcdFxyXG5cdFx0XHR9ICBlbHNlIGlmICh0aW1lcy50eXBlID09ICdwb2ludCcpIHtcclxuXHRcdFx0XHQvLyByYW5nZTogZnJvbSB0d28gd2Vla3MgYmVmb3JlIHBvaW50IHVudGlsIHBvaW50XHJcblx0XHRcdFx0aWYgKHRpbWVzLnBvaW50ID09PSBudWxsKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gMS4wO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YXIgbWF4ID0gdGltZXMucG9pbnQ7XHJcblx0XHRcdFx0dmFyIG1pbiA9IG1heC5jbG9uZSgpLnN1YnRyYWN0KDIsICd3ZWVrcycpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBjYWxjdWxhdGVBZ2VJblJhbmdlKHRpbWUsIG1pbiwgbWF4KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqIFxyXG5cdFx0ICogQ2FsY3VsYXRlIHdoZXJlIG51bWJlciBmYWxscyBpbiByYW5nZVxyXG5cdFx0ICogQHBhcmFtICB7aW50fSB0aW1lIHRpbWVcclxuXHRcdCAqIEBwYXJhbSAge2ludH0gbWluICBtaW4gdGltZVxyXG5cdFx0ICogQHBhcmFtICB7aW50fSBtYXggIG1heCB0aW1lXHJcblx0XHQgKiBAcmV0dXJuIHtmbG9hdH0gICAgICAwLTEsIHdoZXJlIHRpbWUgZmFsbHMgaW4gcmFuZ2VcclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gY2FsY3VsYXRlQWdlSW5SYW5nZSh0aW1lLCBtaW4sIG1heCkge1xyXG5cdFx0XHRpZiAodGltZS5pc0JlZm9yZShtaW4pKSB7XHJcblx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdH0gZWxzZSBpZiAoIXRpbWUuaXNCZWZvcmUobWF4KSkge1xyXG5cdFx0XHRcdHJldHVybiAxLjA7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuICh0aW1lLmRpZmYobWluKSAvIG1heC5kaWZmKG1pbikpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKiogRXhwb3J0IGZpbHRlcmVkIHJlYWRpbmdzLCBxdWVyeSBzZXJ2ZXIgZm9yIGZpbGUgKi9cclxuXHRcdGZ1bmN0aW9uIGV4cG9ydERhdGEoKSB7XHJcblx0XHRcdHZhciByZWFkaW5nSWRzID0gW107XHJcblx0XHRcdGZpbHRlcmVkUmVhZGluZ3MuZm9yRWFjaChmdW5jdGlvbihidW95R3JvdXApIHtcclxuXHRcdFx0XHRidW95R3JvdXAuYnVveUluc3RhbmNlcy5mb3JFYWNoKGZ1bmN0aW9uKGJ1b3lJbnN0YW5jZSkge1xyXG5cdFx0XHRcdFx0YnVveUluc3RhbmNlLnJlYWRpbmdzLmZvckVhY2goZnVuY3Rpb24ocmVhZGluZykge1xyXG5cdFx0XHRcdFx0XHRyZWFkaW5nSWRzLnB1c2gocmVhZGluZy5pZCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHNlcnZlci5leHBvcnREYXRhKHJlYWRpbmdJZHMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKiBcclxuXHRcdCAqIERldGVybWluZSBjb250ZW50IHRvIHNldCBmb3IgbWFya2VyIHBvcHVwXHJcblx0XHQgKiBAcGFyYW0gIHtvYmplY3R9IHJlYWRpbmcgICAgICByZWFkaW5nXHJcblx0XHQgKiBAcGFyYW0gIHtvYmplY3R9IGJ1b3lJbnN0YW5jZSBidW95IGluc3RhbmNlXHJcblx0XHQgKiBAcmV0dXJuIHtzdHJpbmd9ICAgICAgICAgICAgICBwb3B1cCBjb250ZW50XHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIHBvcHVwQ29udGVudChyZWFkaW5nLCBidW95SW5zdGFuY2UpIHtcclxuXHRcdFx0dmFyIGZvcm1hdHRlZFRpbWUgPSBtb21lbnQudW5peChyZWFkaW5nLnRpbWVzdGFtcClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuZm9ybWF0KCdEIE1NTU0gaDptbSBBJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdHZhciBjb250ZW50ID0gXCI8ZGl2PlwiICtcclxuXHRcdFx0XHRcIjxoNT48c3Ryb25nPlwiICsgYnVveUluc3RhbmNlLm5hbWUgKyBcIjwvc3Ryb25nPjwvaDU+XCIgK1xyXG5cdFx0XHRcdFwiPGVtPlwiICsgZm9ybWF0dGVkVGltZSArIFwiPC9lbT48YnI+XCIgK1xyXG5cdFx0XHRcdFwiPHRhYmxlIGNsYXNzPSdwb3B1cC10YWJsZSc+PHRib2R5PlwiO1xyXG5cdFx0XHRcclxuXHJcblx0XHRcdHJlYWRpbmcuc2Vuc29yUmVhZGluZ3MuZm9yRWFjaChmdW5jdGlvbihzZW5zb3JSZWFkaW5nKSB7XHJcblx0XHRcdFx0Y29udGVudCArPSBcIjx0cj48dGQ+XCIgKyBcclxuXHRcdFx0XHRcdHNlbnNvcnNbc2Vuc29yUmVhZGluZy5zZW5zb3JUeXBlSWRdLm5hbWUgK1xyXG5cdFx0XHRcdFx0XCI6IDwvdGQ+PHRkIGNsYXNzPSdyaWdodCc+XCIgKyBzZW5zb3JSZWFkaW5nLnZhbHVlICsgXCIgXCIgK1xyXG5cdFx0XHRcdFx0c2Vuc29yc1tzZW5zb3JSZWFkaW5nLnNlbnNvclR5cGVJZF0udW5pdCArIFwiPC90ZD48L3RyPlwiO1xyXG5cdFx0XHR9KTtcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0Y29udGVudCArPSBcIjwvdGJvZHk+PC90YWJsZT48L2Rpdj5cIjtcclxuXHRcdFx0XHRcclxuXHRcdFx0cmV0dXJuIGNvbnRlbnQ7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBVcGRhdGUgdGhlIG1hcCB0byBzaG93IG1hcmtlcnMgZm9yIGZpbHRlcmVkIHJlYWRpbmdzXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIHVwZGF0ZU1hcCgpIHtcclxuXHRcdFx0dmFyIGVuYWJsZWRNYXJrZXJzID0gW107XHJcblx0XHRcdHZhciBpbnNOdW0gPSAwO1xyXG5cclxuXHRcdFx0Ly8gc2hvdyBhIG1hcmtlciBmb3IgZXZlcnkgcmVhZGluZ1xyXG5cdFx0XHRmaWx0ZXJlZFJlYWRpbmdzLmZvckVhY2goZnVuY3Rpb24oYnVveUdyb3VwKSB7XHJcblx0XHRcdFx0YnVveUdyb3VwLmJ1b3lJbnN0YW5jZXMuZm9yRWFjaChmdW5jdGlvbihidW95SW5zdGFuY2UpIHtcclxuXHRcdFx0XHRcdGJ1b3lJbnN0YW5jZS5yZWFkaW5ncy5mb3JFYWNoKGZ1bmN0aW9uKHJlYWRpbmcpIHtcclxuXHRcdFx0XHRcdFx0ZW5hYmxlZE1hcmtlcnMucHVzaChyZWFkaW5nLmlkKTtcclxuXHRcdFx0XHRcdFx0bWFwLnNob3dNYXJrZXIocmVhZGluZywgYnVveUluc3RhbmNlLFxyXG5cdFx0XHRcdFx0XHRcdGluc051bSwgZ2V0UmVsYXRpdmVBZ2UocmVhZGluZyksXHJcblx0XHRcdFx0XHRcdFx0cG9wdXBDb250ZW50KHJlYWRpbmcsIGJ1b3lJbnN0YW5jZSkpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRpbnNOdW0rKztcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdG1hcC5oaWRlRGlzYWJsZWRNYXJrZXJzKGVuYWJsZWRNYXJrZXJzKTtcclxuXHRcdH1cclxuXHJcblxyXG5cdFx0ZnVuY3Rpb24gc2V0dXBSZWFkaW5ncygpIHtcclxuXHJcblx0XHRcdHZhciBjaGFydEFycmF5ID0gW107XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgcmVhZGluZ3NMaXN0ID0gZmlsdGVyZWRSZWFkaW5ncztcclxuXHJcblx0XHRcdGZvciAodmFyIHAgPSAwOyBwIDwgcmVhZGluZ3NMaXN0Lmxlbmd0aDsgcCsrKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZWFkaW5nc0xpc3RbcF0uYnVveUluc3RhbmNlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0dmFyIGNoYXJ0RGF0YSA9IHt9O1xyXG5cclxuXHRcdFx0XHRcdGNoYXJ0RGF0YS5uYW1lID0gcmVhZGluZ3NMaXN0W3BdLmJ1b3lJbnN0YW5jZXNbaV0ubmFtZTtcclxuXHRcdFx0XHRcdHZhciBjaGFydFJlYWRpbmdzID0gW107XHJcblx0XHRcdFx0XHRmb3IodmFyIHEgPSAwOyBxIDwgcmVhZGluZ3NMaXN0W3BdLmJ1b3lJbnN0YW5jZXNbaV0ucmVhZGluZ3MubGVuZ3RoOyBxICsrKXtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGZvciAodmFyIHogPSAwOyB6IDwgcmVhZGluZ3NMaXN0W3BdLmJ1b3lJbnN0YW5jZXNbaV0ucmVhZGluZ3NbcV0uc2Vuc29yUmVhZGluZ3MubGVuZ3RoOyB6ICsrKXtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAocmVhZGluZ3NMaXN0W3BdLmJ1b3lJbnN0YW5jZXNbaV0ucmVhZGluZ3NbcV0uc2Vuc29yUmVhZGluZ3Nbel0uc2Vuc29yVHlwZUlkID09IDEpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHZhciB0aW1lU3RhbXAgPSByZWFkaW5nc0xpc3RbcF0uYnVveUluc3RhbmNlc1tpXS5yZWFkaW5nc1txXS50aW1lc3RhbXA7XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdHZhciBuaWNlVGltZSA9IG1vbWVudC51bml4KHRpbWVTdGFtcCkuZm9ybWF0KFwiRC9NIGg6bW1hXCIpXHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgdHVyYmlkaXR5ID0gcmVhZGluZ3NMaXN0W3BdLmJ1b3lJbnN0YW5jZXNbaV0ucmVhZGluZ3NbcV0uc2Vuc29yUmVhZGluZ3Nbel0udmFsdWU7XHJcblx0XHRcdFx0XHRcdFx0XHQvL3NldHMgYSBtYXggdmFsdWUgb24gdHVyYmlkaXR5IGR1ZSB0byBjaGFydCBsaW1pdGF0aW9ucyBcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh0dXJiaWRpdHkgPiAyMDApe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0dXJiaWRpdHkgPSAyMDA7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRjaGFydFJlYWRpbmdzLnB1c2goe3RpbWVTdGFtcDogbmljZVRpbWUsdHVyYmlkaXR5OiB0dXJiaWRpdHl9KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjaGFydERhdGEucmVhZGluZ3MgPSBjaGFydFJlYWRpbmdzO1xyXG5cclxuXHRcdFx0XHRjaGFydEFycmF5LnB1c2goY2hhcnREYXRhKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zb2xlLmxvZyhjaGFydEFycmF5KTtcclxuXHRcdFx0cmV0dXJuIGNoYXJ0QXJyYXk7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGRpc3BsYXlDaGFydEluc3RhbmNlKGluc3RhbmNlTmFtZSl7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgaW5zdGFuY2VSZWFkaW5ncyA9IHNldHVwUmVhZGluZ3MoKTtcclxuXHJcblx0XHRcdHZhciB0ZW1wRGF0YSA9IFtdO1xyXG5cdFx0XHR2YXIgdGVtcExhYmVscyA9IFtdO1xyXG5cdFx0XHR2YXIgdGVtcE5hbWU7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaW5zdGFuY2VSZWFkaW5ncy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdFx0aWYgKGluc3RhbmNlUmVhZGluZ3NbaV0ubmFtZSA9PSBpbnN0YW5jZU5hbWUpe1xyXG5cclxuXHRcdFx0XHRcdHRlbXBOYW1lID0gW2luc3RhbmNlUmVhZGluZ3NbaV0ubmFtZSBdO1xyXG5cdFx0XHRcdFx0Ly8gdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRcdFx0Zm9yKHZhciBxID0gMDsgcSA8IGluc3RhbmNlUmVhZGluZ3NbaV0ucmVhZGluZ3MubGVuZ3RoOyBxKyspe1xyXG5cdFx0XHRcdFx0XHJcblxyXG5cclxuXHRcdFx0XHRcdFx0Ly8gZGF0ZSA9IGluc3RhbmNlUmVhZGluZ3NbaV0ucmVhZGluZ3NbcV0udGltZVN0YW1wXHJcblx0XHRcdFx0XHRcdHRlbXBMYWJlbHMucHVzaChpbnN0YW5jZVJlYWRpbmdzW2ldLnJlYWRpbmdzW3FdLnRpbWVTdGFtcCk7XHJcblx0XHRcdFx0XHRcdHRlbXBEYXRhLnB1c2goaW5zdGFuY2VSZWFkaW5nc1tpXS5yZWFkaW5nc1txXS50dXJiaWRpdHkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRlbXBMYWJlbHMubGVuZ3RoID4gMTAwKXtcclxuXHRcdFx0XHR0ZW1wTGFiZWxzID0gdGVtcExhYmVscy5zbGljZSgwLDEwMSk7XHJcblx0XHRcdFx0dmFyIGRpdmlzaW9uID0gTWF0aC5mbG9vcih0ZW1wTGFiZWxzLmxlbmd0aC8xMCk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZGl2aXNpb24pO1xyXG5cdFx0XHRcdGNoYXJ0LmxhYmVscy51bnNoaWZ0KFwiXCIpO1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAxOyBpIDwgdGVtcExhYmVscy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdFx0XHRpZiAoaSAlIGRpdmlzaW9uICE9IDApe1xyXG5cdFx0XHRcdFx0XHR0ZW1wTGFiZWxzW2ldID0gXCJcIjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0ZW1wTGFiZWxzKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IFxyXG5cdFx0XHRjaGFydC5zZXJpZXMgPSB0ZW1wTmFtZTtcclxuXHRcdFx0Y2hhcnQubGFiZWxzID0gdGVtcExhYmVscztcclxuXHRcdFx0Y2hhcnQubGFiZWxzLnVuc2hpZnQoXCJcIik7XHJcblx0XHRcdGNoYXJ0LmRhdGEgPSBbdGVtcERhdGFdO1xyXG5cclxuXHRcdFx0Y2hhcnQuZGF0YVswXS51bnNoaWZ0KHRlbXBEYXRhWzBdKTtcclxuXHJcblx0XHRcdFxyXG5cclxuXHRcdH1cclxuXHR9XHJcbn0pKCk7IiwiLyoqXHJcbiAqIEZsb29kIE1vbml0b3JpbmcgU3lzdGVtXHJcbiAqIFZlcnNpb24gMC4wLjEgKER1eXVuZylcclxuICpcclxuICogQ29weXJpZ2h0IChDKSBUZWFtIE5lcHR1bmVcclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogQGF1dGhvciAgICAgQW5kcmV3IER5ZXIgPGFuZHJld0BkeWVyZ3JvdXAuY29tLmF1PlxyXG4gKiBAdmVyc2lvbiAgICAwLjAuMVxyXG4gKiBAY29weXJpZ2h0ICBUZWFtIE5lcHR1bmUgKDIwMTUpXHJcbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hY2xlbC9kZWNvMzgwMVxyXG4gKi9cclxuKGZ1bmN0aW9uKCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHRcclxuXHRhbmd1bGFyLm1vZHVsZSgnYXBwLmRhc2hib2FyZCcpXHJcblx0XHQuZmFjdG9yeSgnbWFwJywgbWFwKTtcclxuXHRcdFxyXG5cdC8qKlxyXG5cdFx0KiBAbmdkb2Mgc2VydmljZVxyXG5cdFx0KiBAbmFtZSBhcHAuZGFzaGJvYXJkLm1hcFxyXG5cdFx0KiBAcmVxdWlyZXMgZ29vZ2xlXHJcblx0KiovXHJcblx0ZnVuY3Rpb24gbWFwKCRyb290U2NvcGUsICRsb2csIGdvb2dsZSkge1xyXG5cdFx0XHRcclxuXHRcdC8qKiBJbnRlcm5hbCB2YXJpYWJsZXMgKi9cclxuXHRcdHZhciBtYXA7XHJcblx0XHR2YXIgbWFwT3B0aW9ucyA9IHtcclxuXHRcdFx0em9vbTogMTEsXHJcblx0XHRcdGNlbnRlcjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZygtMjcuNTczNzA0LCAxNTMuMDU1ODE4KSxcclxuXHRcdFx0bWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUFxyXG5cdFx0fTtcclxuXHRcdHZhciBtYXJrZXJzID0ge307XHJcblx0XHR2YXIgZGlzYWJsZWRNYXJrZXJzID0gW107XHJcblx0XHR2YXIgaW5mb0JveDtcclxuXHRcdHZhciBpbmZvQm94T3BlbiA9IGZhbHNlO1xyXG5cdFx0dmFyIGN1cnJlbnRNYXJrZXJJZCA9IC0xO1xyXG5cdFx0dmFyIG1hcENlbnRlcjtcclxuXHRcdFxyXG5cdFx0LyoqIFRoZSBzZXJ2aWNlIG1ldGhvZHMgdG8gZXhwb3NlICovXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRpbml0aWFsaXNlTWFwOiBpbml0aWFsaXNlTWFwLFxyXG5cdFx0XHRnZXRDZW50ZXI6IGdldENlbnRlcixcclxuXHRcdFx0c2V0Q2VudGVyOiBzZXRDZW50ZXIsXHJcblx0XHRcdHNob3dNYXJrZXI6IHNob3dNYXJrZXIsXHJcblx0XHRcdGhpZGVEaXNhYmxlZE1hcmtlcnM6IGhpZGVEaXNhYmxlZE1hcmtlcnNcclxuXHRcdH07XHJcblxyXG5cdFx0LyoqIFNldHVwIGdvb2dsZSBtYXAsIHNldCBzdHlsZXMgYW5kIGxpc3RlbmVycyAqL1xyXG5cdFx0ZnVuY3Rpb24gaW5pdGlhbGlzZU1hcCgpIHtcclxuXHRcdFx0bWFwT3B0aW9ucy5zdHlsZXMgPSBzdHlsZXNCbHVlV2F0ZXIoKTtcclxuXHRcdFx0XHJcblx0XHRcdG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXAtY2FudmFzXCIpLCBtYXBPcHRpb25zKTsgXHJcblx0XHRcdFxyXG5cdFx0XHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXAsICd6b29tX2NoYW5nZWQnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRtYXBPcHRpb25zLnpvb20gPSBtYXAuZ2V0Wm9vbSgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcCwgJ2NlbnRlcl9jaGFuZ2VkJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bWFwT3B0aW9ucy5jZW50ZXIgPSBtYXAuZ2V0Q2VudGVyKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFwLCAnbWFwdHlwZWlkX2NoYW5nZWQnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRtYXBPcHRpb25zLm1hcFR5cGVJZCA9IG1hcC5nZXRNYXBUeXBlSWQoKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0ICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcCwgJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHQgICAgICAgIGlmIChpbmZvQm94T3Blbikge1xyXG5cdFx0XHRcdFx0Y2xvc2VJbmZvQm94KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0ICAgIH0pO1xyXG5cclxuXHRcdCAgICAvLyByZXNldCBtYXJrZXJzXHJcblx0XHQgICAgbWFya2VycyA9IHt9O1xyXG5cdFx0XHRkaXNhYmxlZE1hcmtlcnMgPSBbXTtcclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEdldCB0aGUgY3VycmVudCBjZW50ZXIgb2YgdGhlIG1hcFxyXG5cdFx0ICogQHJldHVybiB7b2JqZWN0fSBjZW50ZXIgb2YgdGhlIG1hcFxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBnZXRDZW50ZXIoKSB7XHJcblx0XHRcdHJldHVybiBtYXAuZ2V0Q2VudGVyKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBTZXQgdGhlIGNlbnRlciBvZiB0aGUgbWFwXHJcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gY2VudGVyIG5ldyBjZW50ZXJcclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gc2V0Q2VudGVyKGNlbnRlcikge1xyXG5cdFx0XHRnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKG1hcCwgXCJyZXNpemVcIik7XHJcblx0XHRcdG1hcC5zZXRDZW50ZXIoY2VudGVyKTtcclxuXHRcdH1cclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBTaG93IGEgbWFya2VyIG9uIHRoZSBtYXBcclxuXHRcdCAqIEBwYXJhbSAge29iamVjdH0gcmVhZGluZyAgICAgIHJlYWRpbmcgZm9yIHRoZSBtYXJrZXJcclxuXHRcdCAqIEBwYXJhbSAge29iamVjdH0gYnVveUluc3RhbmNlIGJ1b3lJbnN0YW5jZSB0aGUgcmVhZGluZyBpcyBmcm9tXHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gY29sb3VyIGhleCBjb2xvdXIgb2YgdGhlIG1hcmtlclxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBzaG93TWFya2VyKHJlYWRpbmcsIGJ1b3lJbnN0YW5jZSwgY29sb3VySW5kZXgsIGFnZSwgY29udGVudCkge1xyXG5cdFx0XHR2YXIgaWQgPSByZWFkaW5nLmlkO1xyXG5cdFx0XHRpZiAoIW1hcmtlcnMuaGFzT3duUHJvcGVydHkoaWQpKSB7XHJcblx0XHRcdFx0Ly8gY3JlYXRlIG5ldyBtYXJrZXIgaWYgaXQgZG9lc24ndCBleGlzdFxyXG5cdFx0XHRcdGFkZE1hcmtlcihyZWFkaW5nLCBidW95SW5zdGFuY2UsIGNvbnRlbnQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChkaXNhYmxlZE1hcmtlcnMuaW5kZXhPZihpZCkgIT0gLTEpIHtcclxuXHRcdFx0XHRcdC8vIHNob3cgKHJlLWVuYWJsZSkgbWFya2VyIGlmIGl0IGFscmVhZHkgZXhpc3RzXHJcblx0XHRcdFx0XHRlbmFibGVNYXJrZXIoaWQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRtYXJrZXJzW2lkXS5zZXRJY29uKG1hcmtlckNvbG91cihjb2xvclBhbGV0dGUoY29sb3VySW5kZXgpKSk7XHJcblx0XHRcdG1hcmtlcnNbaWRdLnNldE9wYWNpdHkoY2FsY3VsYXRlT3BhY2l0eShhZ2UpKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiBEaXNhYmxlIG9sZCBtYXJrZXJzIHdoaWNoIHNob3VsZG4ndCBiZSBkaXNwbGF5ZWRcclxuXHRcdCAqIEBwYXJhbSAge2ludFtdfSBlbmFibGVkTWFya2VycyBsaXN0IG9mIG1hcmtlciBpZHMgd2hpY2ggYXJlIGVuYWJsZWRcclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gaGlkZURpc2FibGVkTWFya2VycyhlbmFibGVkTWFya2Vycykge1xyXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gbWFya2Vycykge1xyXG5cdFx0XHRcdGlmIChtYXJrZXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0XHRcdGtleSA9IHBhcnNlSW50KGtleSwgMTApO1xyXG5cdFx0XHRcdFx0aWYgKGVuYWJsZWRNYXJrZXJzLmluZGV4T2Yoa2V5KSA9PSAtMSkge1xyXG5cdFx0XHRcdFx0XHRkaXNhYmxlTWFya2VyKGtleSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqIFxyXG5cdFx0ICogQWRkIG5ldyBtYXJrZXIgdG8gbWFwXHJcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gcmVhZGluZyAgICAgIHJlYWRpbmcgZm9yIG1hcmtlclxyXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IGJ1b3lJbnN0YW5jZSBidW95SW5zdGFuY2UgdGhlIHJlYWRpbmcgaXMgZnJvbVxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBhZGRNYXJrZXIocmVhZGluZywgYnVveUluc3RhbmNlLCBjb250ZW50KSB7XHJcblx0XHRcdHZhciBsYXQgPSByYW5kb21pc2VQb3MocmVhZGluZy5sYXRpdHVkZSk7XHJcblx0XHRcdHZhciBsb25nID0gcmFuZG9taXNlUG9zKHJlYWRpbmcubG9uZ2l0dWRlKTtcclxuXHJcblx0XHRcdHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuXHRcdFx0XHRwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXQsIGxvbmcpLFxyXG5cdFx0XHRcdG1hcDogbWFwLFxyXG5cdFx0XHRcdC8vIHRpdGxlOiAnQnVveSAnICsgcmVhZGluZy5idW95ICsgJzogcmVhZGluZyAnICsgcmVhZGluZy5pZCxcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXIsICdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdG9wZW5JbmZvQm94KHJlYWRpbmcsIGJ1b3lJbnN0YW5jZSwgbWFya2VyLCBjb250ZW50KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHRtYXJrZXJzW3JlYWRpbmcuaWRdID0gbWFya2VyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHJhbmRvbWlzZVBvcyhwb3MpIHtcclxuXHRcdFx0dmFyIG1hZ25pdHVkZSA9IDEwMDAwMDtcclxuXHRcdFx0aWYgKE1hdGgucmFuZG9tKCkgPCAwLjUpIHtcclxuXHRcdFx0XHRwb3MgKz0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwKSAvIG1hZ25pdHVkZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRwb3MgLT0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwKSAvIG1hZ25pdHVkZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcG9zO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmUtZW5hYmxlIChzaG93IG9uIG1hcCkgZGlzYWJsZWQgbWFya2VyXHJcblx0XHQgKiBAcGFyYW0gIHtpbnR9IGlkIGlkIG9mIG1hcmtlciB0byBlbmFibGVcclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gZW5hYmxlTWFya2VyKGlkKSB7XHJcblx0XHRcdG1hcmtlcnNbaWRdLnNldE1hcChtYXApO1xyXG5cdFx0XHRkaXNhYmxlZE1hcmtlcnMuc3BsaWNlKGRpc2FibGVkTWFya2Vycy5pbmRleE9mKGlkKSwgMSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKiBcclxuXHRcdCAqIERpc2FibGUgbWFya2VyIChoaWRlIGZyb20gbWFwKSB3aXRob3V0IGRlbGV0aW5nIGl0XHJcblx0XHQgKiBAcGFyYW0gIHtpbnR9IGlkIGlkIG9mIG1hcmtlciB0byBkaXNhYmxlXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIGRpc2FibGVNYXJrZXIoaWQpIHtcclxuXHRcdFx0bWFya2Vyc1tpZF0uc2V0TWFwKG51bGwpO1xyXG5cdFx0XHRkaXNhYmxlZE1hcmtlcnMucHVzaChpZCk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBjbG9zZSBpbmZvYm94IG9mIGRpc2FibGVkIG1hcmtlclxyXG5cdFx0XHRpZiAoaW5mb0JveE9wZW4pIHtcclxuXHRcdFx0XHRpZiAoZGlzYWJsZWRNYXJrZXJzLmluZGV4T2YoY3VycmVudE1hcmtlcklkKSAhPSAtMSkge1xyXG5cdFx0XHRcdFx0Y2xvc2VJbmZvQm94KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqIFxyXG5cdFx0ICogT3BlbiB0aGUgaW5mb2JveFxyXG5cdFx0ICogQHBhcmFtICB7b2JqZWN0fSByZWFkaW5nICAgICAgcmVhZGluZ1xyXG5cdFx0ICogQHBhcmFtICB7b2JqZWN0fSBidW95SW5zdGFuY2UgYnVveUluc3RhbmNlIHRoZSByZWFkaW5nIGlzIGZvclxyXG5cdFx0ICogQHBhcmFtICB7b2JqZWN0fSBtYXJrZXIgICAgICAgbWFya2VyIG9iamVjdFxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBvcGVuSW5mb0JveChyZWFkaW5nLCBidW95SW5zdGFuY2UsIG1hcmtlciwgY29udGVudCkge1xyXG5cdFx0XHRpZiAoaW5mb0JveE9wZW4pIHtcclxuXHRcdFx0XHRjbG9zZUluZm9Cb3goKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAocmVhZGluZy5pZCA9PSBjdXJyZW50TWFya2VySWQpIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHVwZGF0ZSBjaGFydHNcclxuXHRcdFx0JHJvb3RTY29wZS4kYnJvYWRjYXN0KCdkaXNwbGF5Q2hhcnRJbnN0YW5jZScsIGJ1b3lJbnN0YW5jZSk7XHJcblx0XHRcdFxyXG5cdFx0XHRpbmZvQm94ID0gbmV3IEluZm9Cb3goe1xyXG5cdFx0XHRcdGNvbnRlbnQ6IGNvbnRlbnQsXHJcblx0XHRcdFx0cGl4ZWxPZmZzZXQ6IG5ldyBnb29nbGUubWFwcy5TaXplKC05MCwgMCksXHJcblx0ICAgICAgICAgICAgekluZGV4OiBudWxsLFxyXG5cdCAgICAgICAgICAgIGNsb3NlQm94TWFyZ2luOiBcIi02cHggLTZweCAycHggMnB4XCJcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHRpbmZvQm94Lm9wZW4obWFwLCBtYXJrZXIpO1x0XHRcdFxyXG5cdFx0XHRpbmZvQm94T3BlbiA9IHRydWU7XHJcblx0XHRcdGN1cnJlbnRNYXJrZXJJZCA9IHJlYWRpbmcuaWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqIENsb3NlIHRoZSBpbmZvYm94IChtYXAgbWFya2VyIHBvcHVwKSAqL1xyXG5cdFx0ZnVuY3Rpb24gY2xvc2VJbmZvQm94KCkge1xyXG5cdFx0XHRpbmZvQm94LmNsb3NlKCk7XHJcblx0XHRcdGluZm9Cb3hPcGVuID0gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXR1cm5zIGEgbWFya2VyIGljb24gd2l0aCBhIHNwZWNpZmllZCBjb2xvdXJcclxuXHRcdCAqIEBwYXJhbSAge3N0cmluZ30gY29sb3VyIGNvbG91ciBpbiBoZXggZm9ybWF0XHJcblx0XHQgKiBAcmV0dXJuIHtvYmplY3R9ICAgICAgICBtYXJrZXIgaWNvbiB1c2FibGUgaW4gZ29vZ2xlIG1hcHMgQVBJXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIG1hcmtlckNvbG91cihjb2xvdXIpIHtcclxuXHRcdFx0Ly8gcmV0dXJuIHtcclxuXHRcdFx0Ly8gXHRwYXRoOiAnTSAwLDAgQyAtMiwtMjAgLTEwLC0yMiAtMTAsLTMwIEEgMTAsMTAgMCAxLDEgMTAsLTMwIEMgMTAsLTIyIDIsLTIwIDAsMCB6IE0gLTIsLTMwIGEgMiwyIDAgMSwxIDQsMCAyLDIgMCAxLDEgLTQsMCcsXHJcblx0XHQgLy8gICAgICAgIGZpbGxDb2xvcjogY29sb3VyLFxyXG5cdFx0IC8vICAgICAgICBmaWxsT3BhY2l0eTogMSxcclxuXHRcdCAvLyAgICAgICAgc3Ryb2tlQ29sb3I6ICcjMDAwJyxcclxuXHRcdCAvLyAgICAgICAgc3Ryb2tlV2VpZ2h0OiAxLFxyXG5cdFx0IC8vICAgICAgICBzY2FsZTogMVxyXG5cdFx0XHQvLyB9O1xyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIChuZXcgZ29vZ2xlLm1hcHMuTWFya2VySW1hZ2UoXCJodHRwOi8vY2hhcnQuYXBpcy5nb29nbGUuY29tL2NoYXJ0P2Noc3Q9ZF9tYXBfcGluX2xldHRlciZjaGxkPSVFMiU4MCVBMnxcIiArIGNvbG91ci5zdWJzdHIoMSksXHJcblx0XHQgICAgICAgIG5ldyBnb29nbGUubWFwcy5TaXplKDIxLCAzNCksXHJcblx0XHQgICAgICAgIG5ldyBnb29nbGUubWFwcy5Qb2ludCgwLCAwKSxcclxuXHRcdCAgICAgICAgbmV3IGdvb2dsZS5tYXBzLlBvaW50KDEwLCAzNClcclxuXHQgICAgICAgICkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSGFyZGNvZGVkIGNvbG91ciBwYWxldHRlXHJcblx0XHQgKiBAcGFyYW0gIHtpbnR9IG4gaW5kZXggb2YgY29sb3VyIGluIHBhbGV0dGUgdG8gZ2V0ICh3cmFwcyBhcm91bmQpXHJcblx0XHQgKiBAcmV0dXJuIHtzdHJpbmd9ICAgaGV4IGNvbG91clxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBjb2xvclBhbGV0dGUobikge1xyXG5cdFx0XHQvLyBwYWxldHRlIGdlbmVyYXRlZCBmcm9tIGh0dHA6Ly90b29scy5tZWRpYWxhYi5zY2llbmNlcy1wby5mci9pd2FudGh1ZS9cclxuXHRcdFx0dmFyIHBhbGV0dGUgPSBbXHJcblx0XHRcdFx0XCIjODRDQkQxXCIsXHJcblx0XHRcdFx0XCIjQ0M0QjMwXCIsXHJcblx0XHRcdFx0XCIjQkY1NEQwXCIsXHJcblx0XHRcdFx0XCIjNzBEODRDXCIsXHJcblx0XHRcdFx0XCIjMzYzNjJCXCIsXHJcblx0XHRcdFx0XCIjQ0Q0MDc1XCIsXHJcblx0XHRcdFx0XCIjNTUzMjY0XCIsXHJcblx0XHRcdFx0XCIjQ0JDQzkyXCIsXHJcblx0XHRcdFx0XCIjRDI5ODNDXCIsXHJcblx0XHRcdFx0XCIjNkI3QUQwXCIsXHJcblx0XHRcdFx0XCIjQzc4Mzc4XCIsXHJcblx0XHRcdFx0XCIjNUE4QTM3XCIsXHJcblx0XHRcdFx0XCIjQ0NENDQ2XCIsXHJcblx0XHRcdFx0XCIjNzJEQTlFXCIsXHJcblx0XHRcdFx0XCIjNTk4MzY5XCIsXHJcblx0XHRcdFx0XCIjNkQyOTJGXCIsXHJcblx0XHRcdFx0XCIjQ0FCM0NDXCIsXHJcblx0XHRcdFx0XCIjNzg1RjJBXCIsXHJcblx0XHRcdFx0XCIjNTk2Qzg3XCIsXHJcblx0XHRcdFx0XCIjQzQ3MUI0XCJcclxuXHRcdFx0XTtcclxuXHRcdFx0cmV0dXJuIHBhbGV0dGVbbiAlIHBhbGV0dGUubGVuZ3RoXTtcdFxyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogR2VuZXJhdGVzIGEgcmFuZG9tIGhleCBjb2xvdXIgKG5vdCBjdXJyZW50bHkgdXNlZClcclxuXHRcdCAqIEByZXR1cm4ge3N0cmluZ30gaGV4IGNvbG91clxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiByYW5kb21Db2xvdXIoKSB7XHJcblx0XHRcdHJldHVybiBcIiNcIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIsIDgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKiBcclxuXHRcdCAqIEdldCB0aGUgdmFsdWUgdG8gc2V0IGZvciBtYXJrZXIgb3BhY2l0eVxyXG5cdFx0ICogQHBhcmFtICB7aW50fSByZWxhdGl2ZSBhZ2UgdG8gYmFzZSBvcGFjaXR5IG9uXHJcblx0XHQgKiBAcmV0dXJuIHtmbG9hdH0gICAgICAgICBvcGFjaXR5IHZhbHVlIGJldHdlZW4gMCBhbmQgMVxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBjYWxjdWxhdGVPcGFjaXR5KGFnZSkge1xyXG5cdFx0XHR2YXIgbWluVmlzaWJsZU9wYWNpdHkgPSAwLjM7XHJcblx0XHRcdHJldHVybiBhZ2UgKiAoMSAtIG1pblZpc2libGVPcGFjaXR5KSArIG1pblZpc2libGVPcGFjaXR5O1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogTWFwIHN0eWxlcyB0byBkaXNhYmxlIHBvaW50cyBvZiBpbnRlcmVzdCAobm90IGN1cnJlbnRseSB1c2VkKVxyXG5cdFx0ICogQHJldHVybiB7b2JqZWN0fSBtYXAgc3R5bGVzIHVzYWJsZSBieSBnb29nbGUgbWFwcyBhcGlcclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gc3R5bGVzTm9Qb2koKSB7XHJcblx0XHRcdHJldHVybiBbXHJcblx0XHRcdCAgICB7XHJcblx0XHRcdCAgICAgICAgZmVhdHVyZVR5cGU6IFwicG9pXCIsXHJcblx0XHRcdCAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzXCIsXHJcblx0XHRcdCAgICAgICAgc3R5bGVyczogW1xyXG5cdFx0XHQgICAgICAgICAgICAgIHsgdmlzaWJpbGl0eTogXCJvZmZcIiB9XHJcblx0XHRcdCAgICAgICAgXVxyXG5cdFx0XHQgICAgfSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdCAgICAgICAgZmVhdHVyZVR5cGU6IFwidHJhbnNpdC5zdGF0aW9uXCIsXHJcblx0XHRcdCAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzXCIsXHJcblx0XHRcdCAgICAgICAgc3R5bGVyczogW1xyXG5cdFx0XHQgICAgICAgICAgICAgIHsgdmlzaWJpbGl0eTogXCJvZmZcIiB9XHJcblx0XHRcdCAgICAgICAgXVxyXG5cdFx0XHQgICAgfVxyXG5cdFx0XHRdO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogTWFwIHN0eWxlIGJsdWUgd2F0ZXIgc3R5bGVcclxuXHRcdCAqIGZyb20gaHR0cHM6Ly9zbmF6enltYXBzLmNvbS9zdHlsZS8yNS9ibHVlLXdhdGVyXHJcblx0XHQgKiBAcmV0dXJuIHtvYmplY3R9IG1hcCBzdHlsZXMgdXNhYmxlIGJ5IGdvb2dsZSBtYXBzIGFwaVxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBzdHlsZXNCbHVlV2F0ZXIoKSB7XHJcblx0XHRcdHJldHVybiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXHJcblx0XHRcdFx0XHRcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG5cdFx0XHRcdFx0XCJzdHlsZXJzXCI6IFtcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwiY29sb3JcIjogXCIjNDQ0NDQ0XCJcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZVwiLFxyXG5cdFx0XHRcdFx0XCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG5cdFx0XHRcdFx0XCJzdHlsZXJzXCI6IFtcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwiY29sb3JcIjogXCIjZjJmMmYyXCJcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxyXG5cdFx0XHRcdFx0XCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG5cdFx0XHRcdFx0XCJzdHlsZXJzXCI6IFtcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXHJcblx0XHRcdFx0XHRcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcblx0XHRcdFx0XHRcInN0eWxlcnNcIjogW1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJzYXR1cmF0aW9uXCI6IC0xMDBcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibGlnaHRuZXNzXCI6IDQ1XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcclxuXHRcdFx0XHRcdFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuXHRcdFx0XHRcdFwic3R5bGVyc1wiOiBbXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcclxuXHRcdFx0XHRcdFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMuaWNvblwiLFxyXG5cdFx0XHRcdFx0XCJzdHlsZXJzXCI6IFtcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0XCIsXHJcblx0XHRcdFx0XHRcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcblx0XHRcdFx0XHRcInN0eWxlcnNcIjogW1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXHJcblx0XHRcdFx0XHRcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcblx0XHRcdFx0XHRcInN0eWxlcnNcIjogW1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJjb2xvclwiOiBcIiMwQjVCOTFcIlxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJ2aXNpYmlsaXR5XCI6IFwib25cIlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdO1xyXG5cdFx0fVxyXG5cdH1cclxufSkoKTsiLCIvKipcclxuICogRmxvb2QgTW9uaXRvcmluZyBTeXN0ZW1cclxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKEMpIFRlYW0gTmVwdHVuZVxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgICBBbmRyZXcgRHllciA8YW5kcmV3QGR5ZXJncm91cC5jb20uYXU+XHJcbiAqIEB2ZXJzaW9uICAgIDAuMC4xXHJcbiAqIEBjb3B5cmlnaHQgIFRlYW0gTmVwdHVuZSAoMjAxNSlcclxuICogQGxpbmsgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FjbGVsL2RlY28zODAxXHJcbiAqL1xyXG4oZnVuY3Rpb24oKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdFxyXG5cdC8qKiBTZXQgdGltZXBpY2tlciBhbmQgZGF0ZXBpY2tlciBkZWZhdWx0cyAqL1xyXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAuZ3VpJylcclxuXHRcdC5jb25maWcoZnVuY3Rpb24oJGRhdGVwaWNrZXJQcm92aWRlciwgJHRpbWVwaWNrZXJQcm92aWRlcixcclxuXHRcdFx0XHRcdFx0JGh0dHBQcm92aWRlciwgJGFsZXJ0UHJvdmlkZXIpIHtcclxuXHRcdFxyXG5cdFx0XHQvLyBpbnRlcmNlcHQgYWxsIHJlcXVlc3RzIHRvIGNoZWNrIGZvciB0b2tlblx0XHJcblx0XHRcdCRodHRwUHJvdmlkZXIuaW50ZXJjZXB0b3JzLnB1c2goJ2F1dGhJbnRlcmNlcHRvcicpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gZGVmYXVsdCBzZXR0aW5ncyBmb3IgZGF0ZXBpY2tlclxyXG5cdFx0XHRhbmd1bGFyLmV4dGVuZCgkZGF0ZXBpY2tlclByb3ZpZGVyLmRlZmF1bHRzLCB7XHJcblx0XHRcdFx0YXV0b2Nsb3NlOiB0cnVlLFxyXG5cdFx0XHRcdGRhdGVGb3JtYXQ6ICdkZC9NTS95eScsXHJcblx0XHRcdFx0bW9kZWxEYXRlRm9ybWF0OiAnZGQvTU0veXknLFxyXG5cdFx0XHRcdGRhdGVUeXBlOiAnc3RyaW5nJyxcclxuXHRcdFx0XHRzdGFydFdlZWs6IDFcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBkZWZhdWx0IHNldHRpbmdzIGZvciB0aW1lcGlja2VyXHJcblx0XHRcdGFuZ3VsYXIuZXh0ZW5kKCR0aW1lcGlja2VyUHJvdmlkZXIuZGVmYXVsdHMsIHtcclxuXHRcdFx0XHRhdXRvY2xvc2U6IGZhbHNlLFxyXG5cdFx0XHRcdHRpbWVGb3JtYXQ6ICdoOm1tIGEnLFxyXG5cdFx0XHRcdG1vZGVsVGltZUZvcm1hdDogJ2g6bW0gYScsXHJcblx0XHRcdFx0dGltZVR5cGU6ICdzdHJpbmcnXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gZGVmYXVsdCBzZXR0aW5ncyBmb3IgYWxlcnRzXHJcblx0XHRcdGFuZ3VsYXIuZXh0ZW5kKCRhbGVydFByb3ZpZGVyLmRlZmF1bHRzLCB7XHJcblx0XHRcdFx0cGxhY2VtZW50OiAnYWxlcnQtcGxhY2VtZW50JyxcclxuXHRcdFx0XHRkdXJhdGlvbjogMyxcclxuXHRcdFx0XHRjb250YWluZXI6ICcjcGFnZScsXHJcblx0XHRcdFx0c2hvdzogdHJ1ZVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG59KSgpOyIsIi8qKlxyXG4gKiBGbG9vZCBNb25pdG9yaW5nIFN5c3RlbVxyXG4gKiBWZXJzaW9uIDAuMC4xIChEdXl1bmcpXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoQykgVGVhbSBOZXB0dW5lXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgIEFuZHJldyBEeWVyIDxhbmRyZXdAZHllcmdyb3VwLmNvbS5hdT5cclxuICogQHZlcnNpb24gICAgMC4wLjFcclxuICogQGNvcHlyaWdodCAgVGVhbSBOZXB0dW5lICgyMDE1KVxyXG4gKiBAbGluayAgICAgICBodHRwczovL2dpdGh1Yi5jb20vYWNsZWwvZGVjbzM4MDFcclxuICovXHJcbihmdW5jdGlvbigpIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblx0XHJcblx0YW5ndWxhci5tb2R1bGUoJ2FwcC5ndWknKVxyXG5cdFx0LmZhY3RvcnkoJ2d1aScsIGd1aSk7XHJcblx0XHJcbiAgICAvKipcclxuICAgICAgICAqIEBuZ2RvYyBzZXJ2aWNlXHJcbiAgICAgICAgKiBAbmFtZSBhcHAuZ3VpLmd1aVxyXG4gICAgICAgICogQHJlcXVpcmVzICRhbGVydFxyXG4gICAgICAgICogQHJlcXVpcmVzICRtb2RhbFxyXG4gICAgICAgICogQHJlcXVpcmVzICRsb2dcclxuICAgICoqL1xyXG5cdGZ1bmN0aW9uIGd1aSgkYWxlcnQsICRtb2RhbCwgJGxvZykge1xyXG5cdFx0XHJcblx0XHQvKiogVGhlIHNlcnZpY2UgbWV0aG9kcyB0byBleHBvc2UgKi9cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGFsZXJ0U3VjY2VzczogYWxlcnRTdWNjZXNzLFxyXG4gICAgICAgICAgICBhbGVydEVycm9yOiBhbGVydEVycm9yLFxyXG4gICAgICAgICAgICBhbGVydEJhZFJlc3BvbnNlOiBhbGVydEJhZFJlc3BvbnNlLFxyXG4gICAgICAgICAgICBjb25maXJtRGVsZXRlOiBjb25maXJtRGVsZXRlXHJcblx0XHR9O1xyXG5cdFx0XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2hvd3MgYSBzdWNjZXNzIGFsZXJ0XHJcbiAgICAgICAgICogQHBhcmFtICB7c3RyaW5nfSBtZXNzYWdlIG1lc3NhZ2UgdG8gc2hvdyBpbiB0aGUgYWxlcnRcclxuICAgICAgICAgKi9cclxuXHRcdGZ1bmN0aW9uIGFsZXJ0U3VjY2VzcyhtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICRhbGVydCh7dGl0bGU6ICdTdWNjZXNzIScsIGNvbnRlbnQ6IG1lc3NhZ2UsIHR5cGU6ICdzdWNjZXNzJyB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNob3dzIGFuIGVycm9yIGFsZXJ0XHJcbiAgICAgICAgICogQHBhcmFtICB7c3RyaW5nfSBtZXNzYWdlIG1lc3NhZ2UgdG8gc2hvdyBpbiB0aGUgYWxlcnRcclxuICAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhbGVydEVycm9yKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgJGFsZXJ0KHt0aXRsZTogJ0Vycm9yOicsIGNvbnRlbnQ6IG1lc3NhZ2UsIHR5cGU6ICdkYW5nZXInIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2hvd3MgYW4gZXJyb3IgYWxlcnQgb24gYmFkIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlclxyXG4gICAgICAgICAqIEBwYXJhbSAge29iamVjdH0gcmVzIGh0dHAgcmVzcG9uc2Ugb2JqZWN0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYWxlcnRCYWRSZXNwb25zZShyZXMpIHtcclxuICAgICAgICAgICAgJGxvZy5lcnJvcihyZXMpOyAvLyBmb3IgZGVidWdnaW5nIHB1cnBvc2VzXHJcbiAgICAgICAgICAgIGFsZXJ0RXJyb3IocmVzLmRhdGEgKyAnKCcgKyByZXMuc3RhdHVzICsgJyknKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNob3cgYSBtb2RhbCB3aGljaCBjb25maXJtcyBkZWxldGlvbi4gVXNlcyB2bSB2YXJpYWJsZXMgZnJvbVxyXG4gICAgICAgICAqIHRoZSBjYWxsaW5nIGNvbnRyb2xsZXIuXHJcbiAgICAgICAgICogQHBhcmFtICB7b2JqZWN0fSBzY29wZSBzY29wZSB0byBiaW5kIHRvIHRoZSBtb2RhbFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGNvbmZpcm1EZWxldGUoc2NvcGUpIHtcclxuICAgICAgICAgICAgJG1vZGFsKHtcclxuICAgICAgICAgICAgICAgIHNjb3BlOiBzY29wZSxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2FwcC9ndWkvZGVsZXRlLm1vZGFsLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblx0fVxyXG59KSgpOyIsIi8qKlxyXG4gKiBGbG9vZCBNb25pdG9yaW5nIFN5c3RlbVxyXG4gKiBWZXJzaW9uIDAuMC4xIChEdXl1bmcpXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoQykgVGVhbSBOZXB0dW5lXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgIEFuZHJldyBEeWVyIDxhbmRyZXdAZHllcmdyb3VwLmNvbS5hdT5cclxuICogQHZlcnNpb24gICAgMC4wLjFcclxuICogQGNvcHlyaWdodCAgVGVhbSBOZXB0dW5lICgyMDE1KVxyXG4gKiBAbGluayAgICAgICBodHRwczovL2dpdGh1Yi5jb20vYWNsZWwvZGVjbzM4MDFcclxuICovXHJcbihmdW5jdGlvbigpIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblx0XHJcblx0YW5ndWxhci5tb2R1bGUoJ2FwcC5uYXYnKVxyXG5cdFx0LmNvbnRyb2xsZXIoJ05hdkNvbnRyb2xsZXInLCBOYXZDb250cm9sbGVyKTtcclxuXHRcclxuXHQvKipcclxuXHRcdCogQG5nZG9jIG9iamVjdFxyXG5cdFx0KiBAbmFtZSBhcHAubmF2LmNvbnRyb2xsZXI6TmF2Q29udHJvbGxlclxyXG5cdFx0KiBAZGVzY3JpcHRpb24gUHJvdmlkZXMgdmlld21vZGVsIGZvciBuYXZpZ2F0aW9uIHRlbXBsYXRlXHJcblx0XHQqIEByZXF1aXJlcyAkcm9vdFNjb3BlXHJcblx0XHQqIEByZXF1aXJlcyAkc3RhdGVcclxuXHRcdCogQHJlcXVpcmVzIHJvdXRlckhlbHBlclxyXG5cdFx0KiBAcmVxdWlyZXMgYXV0aFxyXG5cdCoqL1xyXG5cdGZ1bmN0aW9uIE5hdkNvbnRyb2xsZXIoJHJvb3RTY29wZSwgJHN0YXRlLCByb3V0ZXJIZWxwZXIsIGF1dGgpIHtcclxuXHRcdHZhciB2bSA9IHRoaXM7XHJcblx0XHRcclxuXHRcdC8qKiBJbnRlcm5hbCB2YXJpYWJsZXMgKi9cclxuXHRcdHZhciBsb2dnZWRJbiA9IGF1dGgubG9nZ2VkSW4oKTtcclxuXHRcdFxyXG5cdFx0LyoqIFZhcmlhYmxlcyBhbmQgbWV0aG9kcyBib3VuZCB0byB2aWV3bW9kZWwgKi9cclxuXHRcdHZtLmFjY291bnRNZW51ID0gW1xyXG5cdFx0XHR7IHRleHQ6IFwiQ2hhbmdlIHBhc3N3b3JkXCIsIGNsaWNrOiBcInZtLmNoYW5nZVBhc3N3b3JkKClcIiB9LFxyXG5cdFx0XHR7IHRleHQ6IFwiTG9nb3V0XCIsIGNsaWNrOiBcInZtLmxvZ291dCgpXCIgfVxyXG5cdFx0XTtcclxuXHRcdHZtLmNoZWNrU2hvd05hdiA9IGNoZWNrU2hvd05hdjtcclxuXHRcdHZtLnN0YXRlQWN0aXZlID0gc3RhdGVBY3RpdmU7XHJcblx0XHR2bS5sb2dvdXQgPSBsb2dvdXQ7XHJcblx0XHR2bS5jaGFuZ2VQYXNzd29yZCA9IGNoYW5nZVBhc3N3b3JkO1xyXG5cdFx0XHJcblx0XHRhY3RpdmF0ZSgpO1xyXG5cdFx0XHJcblx0XHQvKiogQ2FsbGVkIHdoZW4gY29udHJvbGxlciBpcyBpbnN0YW50aWF0ZWQgKG5hdmJhciBpcyBsb2FkZWQpICovXHJcblx0XHRmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcclxuXHRcdFx0Ly8gYWZ0ZXIgbmF2aWdhdGluZyB0byBhIG5ldyBwYW5lbCwgY2hlY2sgc3RpbGwgbG9nZ2VkIGluXHJcblx0XHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdWNjZXNzJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bG9nZ2VkSW4gPSBhdXRoLmxvZ2dlZEluKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKiogXHJcblx0XHQgKiBDaGVjayB3aGV0aGVyIGEgc3RhdGUgaXMgYWN0aXZlXHJcblx0XHQgKiBAcGFyYW0gIHtzdHJpbmd9IG5hbWUgc3RhdGUgbmFtZVxyXG5cdFx0ICogQHJldHVybiB7Ym9vbH0gICAgICBzdGF0ZSBpcyBhY3RpdmVcclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gc3RhdGVBY3RpdmUobmFtZSkge1xyXG5cdFx0XHRyZXR1cm4gcm91dGVySGVscGVyLnN0YXRlQWN0aXZlKG5hbWUpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIENoZWNrIHdoZXRoZXIgdG8gc2hvdyBuYXZpZ2F0aW9uIGxpbmsgYmFzZWQgb24gYXV0aGVudGljYXRpb25cclxuXHRcdCAqIEBwYXJhbSAge3N0cmluZ30gbmF2IG5hdiBsaW5rIGVsZW1lbnRcclxuXHRcdCAqIEByZXR1cm4ge2Jvb2x9ICAgICBzaG93IG5hdiBlbGVtZW50XHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIGNoZWNrU2hvd05hdihuYXYpIHtcclxuXHRcdFx0c3dpdGNoKG5hdikge1xyXG5cdFx0XHRcdGNhc2UgJ2Rhc2hib2FyZCc6XHJcblx0XHRcdFx0XHRyZXR1cm4gbG9nZ2VkSW47XHJcblx0XHRcdFx0Y2FzZSAnY29uZmlnJzpcclxuXHRcdFx0XHRcdHJldHVybiBhdXRoLmNoZWNrVXNlcigncG93ZXJfdXNlcicpO1xyXG5cdFx0XHRcdGNhc2UgJ3dhcm5pbmdzJzpcclxuXHRcdFx0XHRcdHJldHVybiBsb2dnZWRJbjtcclxuXHRcdFx0XHRjYXNlICdhZG1pbic6XHJcblx0XHRcdFx0XHRyZXR1cm4gYXV0aC5jaGVja1VzZXIoJ3N5c3RlbV9hZG1pbicpO1xyXG5cdFx0XHRcdGNhc2UgJ2xvZ291dCc6XHJcblx0XHRcdFx0XHRyZXR1cm4gbG9nZ2VkSW47XHJcblx0XHRcdFx0Y2FzZSAnYWNjb3VudCc6XHJcblx0XHRcdFx0XHRyZXR1cm4gbG9nZ2VkSW47XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKiogTG9nb3V0IHVzZXIgYW5kIHJlZGlyZWN0IHRvIGxvZ2luIHBhZ2UgKi9cclxuXHRcdGZ1bmN0aW9uIGxvZ291dCgpIHtcclxuXHRcdFx0YXV0aC5sb2dvdXQoKTtcclxuXHRcdFx0bG9nZ2VkSW4gPSBmYWxzZTtcclxuXHRcdFx0JHN0YXRlLmdvKCdsb2dpbicpO1x0XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqIFJlZGlyZWN0IHVzZXIgdG8gY2hhbmdlIHBhc3N3b3JkIHBhZ2UgKi9cclxuXHRcdGZ1bmN0aW9uIGNoYW5nZVBhc3N3b3JkKCkge1xyXG5cdFx0XHQkc3RhdGUuZ28oJ2NoYW5nZV9wYXNzd29yZCcpO1xyXG5cdFx0fVxyXG5cdH1cclxufSkoKTsiLCIvKipcclxuICogRmxvb2QgTW9uaXRvcmluZyBTeXN0ZW1cclxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKEMpIFRlYW0gTmVwdHVuZVxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgICBBbmRyZXcgRHllciA8YW5kcmV3QGR5ZXJncm91cC5jb20uYXU+XHJcbiAqIEB2ZXJzaW9uICAgIDAuMC4xXHJcbiAqIEBjb3B5cmlnaHQgIFRlYW0gTmVwdHVuZSAoMjAxNSlcclxuICogQGxpbmsgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FjbGVsL2RlY28zODAxXHJcbiAqL1xyXG4oZnVuY3Rpb24oKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdFxyXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAud2FybmluZ3MnKVxyXG5cdFx0LmNvbnRyb2xsZXIoJ1dhcm5pbmdzQ29udHJvbGxlcicsIFdhcm5pbmdzQ29udHJvbGxlcik7XHJcblx0XHJcblx0LyoqXHJcblx0XHQqIEBuZ2RvYyBvYmplY3RcclxuXHRcdCogQG5hbWUgYXBwLndhcm5pbmdzLmNvbnRyb2xsZXI6V2FybmluZ3NDb250cm9sbGVyXHJcblx0XHQqIEBkZXNjcmlwdGlvbiBQcm92aWRlcyB2aWV3bW9kZWwgZm9yIHdhcm5pbmdzIHZpZXdcclxuXHRcdCogQHJlcXVpcmVzICRsb2dcclxuXHRcdCogQHJlcXVpcmVzIHNlcnZlclxyXG5cdFx0KiBAcmVxdWlyZXMgbW9tZW50XHJcblx0KiovXHJcblx0ZnVuY3Rpb24gV2FybmluZ3NDb250cm9sbGVyKCRsb2csIHNlcnZlciwgbW9tZW50KSB7XHJcblx0XHR2YXIgdm0gPSB0aGlzO1xyXG5cclxuXHRcdHZhciByZXNvbHZlZCA9IDA7IC8vIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZW4gZGF0YSBpcyByZWNlaXZlZFxyXG5cdFx0XHJcblx0XHQvKiogVmFyaWFibGVzIGFuZCBtZXRob2RzIGJvdW5kIHRvIHZpZXdtb2RlbCAqL1xyXG5cdFx0dm0ubG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0dm0ud2FybmluZ3MgPSBbXTtcclxuXHRcdHZtLmJ1b3lJbnN0YW5jZXMgPSBbXTtcclxuXHRcdHZtLnNlbnNvclR5cGVzID0gW107XHJcblx0XHRcclxuXHRcdGFjdGl2YXRlKCk7XHJcblx0XHRcclxuXHRcdC8qKiBDYWxsZWQgd2hlbiBjb250cm9sbGVyIGlzIGluc3RhbnRpYXRlZCAod2FybmluZ3MgcGFnZSBpcyBsb2FkZWQpICovXHJcblx0XHRmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcclxuXHRcdFx0dm0ubG9hZGluZyA9IHRydWU7XHJcblx0XHRcdHF1ZXJ5V2FybmluZ3MoKTtcclxuXHRcdFx0cXVlcnlCdW95SW5zdGFuY2VzKCk7XHJcblx0XHRcdHF1ZXJ5U2Vuc29yVHlwZXMoKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqIFF1ZXJ5IHdhcm5pbmdzIGZyb20gc2VydmVyIGFuZCB1cGRhdGUgdmlld21vZGVsICovXHJcblx0XHRmdW5jdGlvbiBxdWVyeVdhcm5pbmdzKCkge1xyXG5cdFx0XHRzZXJ2ZXIuZ2V0V2FybmluZ3MoKS50aGVuKGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdHZtLndhcm5pbmdzID0gcmVzLmRhdGEud2FybmluZ3M7XHJcblx0XHRcdFx0cmVzb2x2ZWQrKztcclxuXHRcdFx0XHRwYXJzZVdhcm5pbmdzKCk7XHJcblx0XHRcdH0sIGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdCRsb2cuZXJyb3IocmVzKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qKiBRdWVyeSBidW95IGluc3RhbmNlcyBmcm9tIHNlcnZlciBhbmQgdXBkYXRlIHZpZXdtb2RlbCAqL1xyXG5cdFx0ZnVuY3Rpb24gcXVlcnlCdW95SW5zdGFuY2VzKCkge1xyXG5cdFx0XHRzZXJ2ZXIuZ2V0QnVveUluc3RhbmNlcygpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0dm0uYnVveUluc3RhbmNlcyA9IHJlcy5kYXRhLmJ1b3lJbnN0YW5jZXM7XHJcblx0XHRcdFx0cmVzb2x2ZWQrKztcclxuXHRcdFx0XHRwYXJzZVdhcm5pbmdzKCk7XHJcblx0XHRcdH0sIGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdCRsb2cuZXJyb3IocmVzKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqIFF1ZXJ5IHNlbnNvciB0eXBlcyBmcm9tIHNlcnZlciBhbmQgcGFyc2Ugd2FybmluZ3MgKi9cclxuXHRcdGZ1bmN0aW9uIHF1ZXJ5U2Vuc29yVHlwZXMoKSB7XHJcblx0XHRcdHNlcnZlci5nZXRTZW5zb3JUeXBlcygpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0dm0uc2Vuc29yVHlwZXMgPSByZXMuZGF0YS5zZW5zb3JUeXBlcztcclxuXHRcdFx0XHRyZXNvbHZlZCsrO1xyXG5cdFx0XHRcdHBhcnNlV2FybmluZ3MoKTtcclxuXHRcdFx0fSwgZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0JGxvZy5lcnJvcihyZXMpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LyoqIEFzc29jaWF0ZSBidW95LCBzZW5zb3IgYW5kIHRpbWUgaW5mbyB3aXRoIHdhcm5pbmdzICovXHJcblx0XHRmdW5jdGlvbiBwYXJzZVdhcm5pbmdzKCkge1xyXG5cdFx0XHRpZiAocmVzb2x2ZWQgPCAzKSByZXR1cm47IC8vIHdhaXQgdW50aWwgYWxsIGRhdGEgaGFzIGJlZW4gcmVjZWl2ZWQgZnJvbSBzZXJ2ZXJcclxuXHRcdFx0dm0ubG9hZGluZyA9IGZhbHNlO1xyXG5cclxuXHRcdFx0dm0ud2FybmluZ3MuZm9yRWFjaChmdW5jdGlvbih3YXJuaW5nKSB7XHJcblx0XHRcdFx0Ly8gcGFyc2UgdGltZVxyXG5cdFx0XHRcdHdhcm5pbmcucmVhZGluZ1RpbWUgPSBtb21lbnQod2FybmluZy5yZWFkaW5nVGltZXN0YW1wLFxyXG5cdFx0XHRcdFx0J1gnKS5mb3JtYXQoXCJERC9NTS9ZWSBISDptbSBBXCIpO1xyXG5cdFx0XHRcdC8vIGdldCBidW95IG5hbWVcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZtLmJ1b3lJbnN0YW5jZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdHZhciBidW95SW5zdGFuY2UgPSB2bS5idW95SW5zdGFuY2VzW2ldO1xyXG5cdFx0XHRcdFx0aWYgKGJ1b3lJbnN0YW5jZS5pZCA9PSB3YXJuaW5nLndhcm5pbmdUcmlnZ2VyLmJ1b3lJbnN0YW5jZUlkKSB7XHJcblx0XHRcdFx0XHRcdHdhcm5pbmcuYnVveU5hbWUgPSBidW95SW5zdGFuY2UubmFtZTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIGdldCBzZW5zb3IgbmFtZVxyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdm0uc2Vuc29yVHlwZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdHZhciBzZW5zb3JUeXBlID0gdm0uc2Vuc29yVHlwZXNbaV07XHJcblx0XHRcdFx0XHRpZiAoc2Vuc29yVHlwZS5pZCA9PSB3YXJuaW5nLndhcm5pbmdUcmlnZ2VyLnNlbnNvclR5cGVJZCkge1xyXG5cdFx0XHRcdFx0XHR3YXJuaW5nLnNlbnNvck5hbWUgPSBzZW5zb3JUeXBlLm5hbWU7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBmb3JtYXQgc2Vuc29yLCBvcGVyYXRvciBhbmQgdmFsdWVcclxuXHRcdFx0XHR3YXJuaW5nLndhcm5pbmcgPSB3YXJuaW5nLnNlbnNvck5hbWUgKyBcIiBcIiArXHJcblx0XHRcdFx0XHR3YXJuaW5nLndhcm5pbmdUcmlnZ2VyLm9wZXJhdG9yICsgXCIgXCIgK1xyXG5cdFx0XHRcdFx0d2FybmluZy53YXJuaW5nVHJpZ2dlci52YWx1ZTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG59KSgpOyIsIi8qKlxyXG4gKiBGbG9vZCBNb25pdG9yaW5nIFN5c3RlbVxyXG4gKiBWZXJzaW9uIDAuMC4xIChEdXl1bmcpXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoQykgVGVhbSBOZXB0dW5lXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIEBhdXRob3IgICAgIEFuZHJldyBEeWVyIDxhbmRyZXdAZHllcmdyb3VwLmNvbS5hdT5cclxuICogQHZlcnNpb24gICAgMC4wLjFcclxuICogQGNvcHlyaWdodCAgVGVhbSBOZXB0dW5lICgyMDE1KVxyXG4gKiBAbGluayAgICAgICBodHRwczovL2dpdGh1Yi5jb20vYWNsZWwvZGVjbzM4MDFcclxuICovXHJcbihmdW5jdGlvbigpIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblx0XHJcblx0YW5ndWxhci5tb2R1bGUoJ2FwcC53YXJuaW5ncycpXHJcblx0XHQucnVuKHNldFJvdXRlcyk7XHJcblx0XHJcblx0LyoqIERlZmluZSByb3V0ZXMgZm9yIHdhcm5pbmdzIHBhZ2UgKi9cclxuXHRmdW5jdGlvbiBzZXRSb3V0ZXMocm91dGVySGVscGVyKSB7XHJcblx0XHRyb3V0ZXJIZWxwZXIuY29uZmlndXJlU3RhdGVzKGdldFN0YXRlcygpKTtcclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gZ2V0U3RhdGVzKCkge1xyXG5cdFx0cmV0dXJuIFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHN0YXRlOiAnd2FybmluZ3MnLFxyXG5cdFx0XHRcdGNvbmZpZzoge1xyXG5cdFx0XHRcdFx0dXJsOiAnL3dhcm5pbmdzJyxcclxuXHRcdFx0XHRcdGNvbnRyb2xsZXI6ICdXYXJuaW5nc0NvbnRyb2xsZXInLFxyXG5cdFx0XHRcdFx0Y29udHJvbGxlckFzOiAndm0nLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvYXBwL3dhcm5pbmdzL3dhcm5pbmdzLmh0bWwnLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRhY2Nlc3M6ICdhdXRoZWQnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRdO1xyXG5cdH1cclxufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=