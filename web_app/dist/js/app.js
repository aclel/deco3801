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
        .constant('SERVER_ADDRESS', 'https://teamneptune.co');
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
				console.log($stateParams.token);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJhZG1pbi9hZG1pbi5tb2R1bGUuanMiLCJhdXRoL2F1dGgubW9kdWxlLmpzIiwiY29uZmlnL2NvbmZpZy5tb2R1bGUuanMiLCJjb3JlL2NvcmUubW9kdWxlLmpzIiwiZGFzaGJvYXJkL2Rhc2hib2FyZC5tb2R1bGUuanMiLCJndWkvZ3VpLm1vZHVsZS5qcyIsIm5hdi9uYXYubW9kdWxlLmpzIiwid2FybmluZ3Mvd2FybmluZ3MubW9kdWxlLmpzIiwiYXBwLmdsb2JhbHMuanMiLCJlbnYuanMiLCJhZG1pbi9hZG1pbi5jb250cm9sbGVyLmpzIiwiYWRtaW4vYWRtaW4ucm91dGVzLmpzIiwiYXV0aC9hdXRoLmNvbmZpZy5qcyIsImF1dGgvYXV0aC5jb250cm9sbGVyLmpzIiwiYXV0aC9hdXRoLnJvdXRlcy5qcyIsImF1dGgvYXV0aC5zZXJ2aWNlLmpzIiwiYXV0aC9hdXRoSW50ZXJjZXB0b3Iuc2VydmljZS5qcyIsImNvbmZpZy9jb25maWcuY29udHJvbGxlci5qcyIsImNvbmZpZy9jb25maWcucm91dGVzLmpzIiwiY29yZS9jb3JlLnJvdXRlcy5qcyIsImNvcmUvaGVsbG8uY29udHJvbGxlci5qcyIsImNvcmUvcm91dGVySGVscGVyLnByb3ZpZGVyLmpzIiwiY29yZS9zZXJ2ZXIuc2VydmljZS5qcyIsImNvcmUvc2VydmVyLnNlcnZpY2UubW9jay5qcyIsImRhc2hib2FyZC9kYXNoYm9hcmQuY29uZmlnLmpzIiwiZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzIiwiZGFzaGJvYXJkL2Rhc2hib2FyZC5yb3V0ZXMuanMiLCJkYXNoYm9hcmQvZGFzaGJvYXJkLnNlcnZpY2UuanMiLCJkYXNoYm9hcmQvbWFwLnNlcnZpY2UuanMiLCJndWkvZ3VpLmNvbmZpZy5qcyIsImd1aS9ndWkuc2VydmljZS5qcyIsIm5hdi9uYXYuY29udHJvbGxlci5qcyIsIndhcm5pbmdzL3dhcm5pbmdzLmNvbnRyb2xsZXIuanMiLCJ3YXJuaW5ncy93YXJuaW5ncy5yb3V0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQVlBLENBQUEsV0FBQTtJQUNBOzs7Ozs7O0lBT0EsUUFBQSxPQUFBLE9BQUE7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQkEsQ0FBQSxXQUFBO0NBQ0E7Ozs7Ozs7Q0FPQSxRQUFBLE9BQUEsYUFBQTs7RUFFQTtFQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNYQSxDQUFBLFdBQUE7Q0FDQTs7Ozs7OztDQU9BLFFBQUEsT0FBQSxZQUFBOzs7Ozs7Ozs7Ozs7OztBQ1JBLENBQUEsV0FBQTtDQUNBOzs7Ozs7O0NBT0EsUUFBQSxPQUFBLGNBQUE7O0VBRUE7RUFDQTs7O1FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLENBQUEsV0FBQTtDQUNBOzs7Ozs7O0NBT0EsUUFBQSxPQUFBLFlBQUE7O0VBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBLENBQUEsV0FBQTtDQUNBOzs7Ozs7O0NBT0EsUUFBQSxPQUFBLGlCQUFBOztFQUVBO0VBQ0E7OztFQUdBO0VBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBLENBQUEsV0FBQTtDQUNBOzs7Ozs7O0NBT0EsUUFBQSxPQUFBLFdBQUE7O1FBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBLENBQUEsV0FBQTtDQUNBOzs7Ozs7O0NBT0EsUUFBQSxPQUFBLFdBQUE7O0VBRUE7RUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNaQSxDQUFBLFdBQUE7Q0FDQTs7Ozs7OztDQU9BLFFBQUEsT0FBQSxnQkFBQTs7RUFFQTtFQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBLENBQUEsV0FBQTtDQUNBOzs7Q0FHQSxRQUFBLE9BQUE7R0FDQSxTQUFBLFVBQUE7R0FDQSxTQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7O0FDUkEsQ0FBQSxXQUFBO0lBQ0E7OztJQUdBLFFBQUEsT0FBQTtTQUNBLFNBQUEsa0JBQUE7Ozs7Ozs7Ozs7Ozs7O0FDTEEsQ0FBQSxXQUFBO0NBQ0E7O0NBRUEsUUFBQSxPQUFBO0dBQ0EsV0FBQSxtQkFBQTs7Ozs7Ozs7Q0FRQSxTQUFBLGdCQUFBLFFBQUEsUUFBQSxLQUFBO0VBQ0EsSUFBQSxLQUFBOzs7RUFHQSxHQUFBLFFBQUE7RUFDQSxHQUFBLGFBQUEsQ0FBQTtFQUNBLEdBQUEsY0FBQTtFQUNBLEdBQUEsUUFBQSxDQUFBLFFBQUEsY0FBQTtFQUNBLEdBQUEsaUJBQUE7RUFDQSxHQUFBLG1CQUFBO0VBQ0EsR0FBQSxvQkFBQTtFQUNBLEdBQUEsYUFBQTtFQUNBLEdBQUEsb0JBQUE7RUFDQSxHQUFBLGtCQUFBO0VBQ0EsR0FBQSxtQkFBQTtFQUNBLEdBQUEsVUFBQTs7Ozs7OztFQU9BOzs7RUFHQSxTQUFBLFdBQUE7R0FDQTs7Ozs7O0VBTUEsU0FBQSxhQUFBO0dBQ0EsT0FBQSxXQUFBLEtBQUEsU0FBQSxLQUFBO0lBQ0EsR0FBQSxRQUFBLElBQUEsS0FBQTtJQUNBO01BQ0EsU0FBQSxLQUFBO0lBQ0EsSUFBQSxpQkFBQTs7Ozs7OztFQU9BLFNBQUEsa0JBQUE7R0FDQSxHQUFBLE1BQUEsUUFBQSxTQUFBLE1BQUE7SUFDQSxJQUFBLENBQUEsS0FBQSxVQUFBLE9BQUE7S0FDQSxLQUFBLFVBQUEsT0FBQTtXQUNBO0tBQ0EsS0FBQSxVQUFBLE9BQUEsT0FBQSxLQUFBLFVBQUEsTUFBQTs7Ozs7Ozs7O0VBU0EsU0FBQSxpQkFBQSxNQUFBO0dBQ0EsR0FBQSxhQUFBLEtBQUE7R0FDQSxHQUFBLFdBQUE7Ozs7Ozs7RUFPQSxTQUFBLG9CQUFBO0dBQ0EsSUFBQSxHQUFBLGNBQUEsQ0FBQSxHQUFBO0lBQ0EsT0FBQSxXQUFBLEdBQUEsVUFBQSxLQUFBLFNBQUEsS0FBQTtLQUNBO0tBQ0EsSUFBQSxhQUFBO09BQ0EsU0FBQSxLQUFBO0tBQ0EsSUFBQSxpQkFBQTs7VUFFQTtJQUNBLE9BQUEsUUFBQSxHQUFBLFVBQUEsS0FBQSxTQUFBLEtBQUE7S0FDQTtLQUNBLElBQUEsYUFBQTtPQUNBLFNBQUEsS0FBQTtLQUNBLElBQUEsaUJBQUE7O0lBRUEsR0FBQSxNQUFBLE9BQUEsR0FBQSxNQUFBLFNBQUEsR0FBQTs7R0FFQSxHQUFBLGFBQUEsQ0FBQTs7Ozs7O0VBTUEsU0FBQSxvQkFBQTtHQUNBLElBQUEsR0FBQSxjQUFBLENBQUEsR0FBQTtJQUNBLEdBQUEsTUFBQSxPQUFBLEdBQUEsTUFBQSxTQUFBLEdBQUE7O0dBRUEsR0FBQSxhQUFBLENBQUE7Ozs7Ozs7RUFPQSxTQUFBLGtCQUFBLE1BQUE7R0FDQSxPQUFBLFdBQUEsS0FBQSxJQUFBLEtBQUEsU0FBQSxLQUFBO0lBQ0E7SUFDQSxJQUFBLGFBQUE7TUFDQSxTQUFBLEtBQUE7SUFDQSxJQUFBLGlCQUFBOzs7Ozs7OztFQVFBLFNBQUEsV0FBQSxNQUFBO0dBQ0EsR0FBQSxlQUFBO0dBQ0EsR0FBQSxhQUFBO0dBQ0EsR0FBQSxhQUFBLEtBQUE7R0FDQSxJQUFBLGNBQUE7Ozs7Ozs7O0VBUUEsU0FBQSxpQkFBQSxNQUFBO0dBQ0EsUUFBQSxDQUFBLEdBQUEsY0FBQSxDQUFBLEtBQUEsR0FBQSxjQUFBLEtBQUE7SUFDQSxLQUFBLE1BQUEsQ0FBQTs7Ozs7OztFQU9BLFNBQUEsa0JBQUE7R0FDQSxJQUFBLFdBQUEsRUFBQSxJQUFBLENBQUEsR0FBQSxNQUFBLEdBQUEsTUFBQTtHQUNBLEdBQUEsTUFBQSxLQUFBO0dBQ0EsaUJBQUE7Ozs7OztFQU1BLFNBQUEsVUFBQTtHQUNBLElBQUEsR0FBQSxlQUFBLElBQUE7R0FDQSxJQUFBLE9BQUE7R0FDQSxPQUFBLFFBQUEsR0FBQSxhQUFBLE1BQUEsS0FBQSxTQUFBLEtBQUE7SUFDQSxJQUFBLGFBQUE7TUFDQSxTQUFBLEtBQUE7SUFDQSxJQUFBLGlCQUFBOztHQUVBLEdBQUEsY0FBQTs7OztFQUlBLFNBQUEsZUFBQTtHQUNBLE9BQUEsdUNBQUEsUUFBQSxTQUFBLFNBQUEsR0FBQTtJQUNBLElBQUEsSUFBQSxLQUFBLFNBQUEsR0FBQSxHQUFBLElBQUEsS0FBQSxNQUFBLEtBQUEsRUFBQSxJQUFBO0lBQ0EsT0FBQSxFQUFBLFNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0tBLENBQUEsV0FBQTtDQUNBOztDQUVBLFFBQUEsT0FBQTtHQUNBLElBQUE7OztDQUdBLFNBQUEsVUFBQSxjQUFBO0VBQ0EsYUFBQSxnQkFBQTs7OztDQUdBLFNBQUEsWUFBQTtFQUNBLE9BQUE7R0FDQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0tBQ0EsS0FBQTtLQUNBLFlBQUE7S0FDQSxjQUFBO0tBQ0EsYUFBQTtLQUNBLE1BQUE7TUFDQSxRQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBLENBQUEsV0FBQTtDQUNBOztDQUVBLFFBQUEsT0FBQTtHQUNBLElBQUE7OztDQUdBLFNBQUEsVUFBQSxZQUFBLFFBQUEsTUFBQTtFQUNBLFdBQUEsSUFBQSxxQkFBQTs7RUFFQSxTQUFBLFlBQUEsT0FBQSxTQUFBO0lBQ0EsV0FBQSxZQUFBOztHQUVBLElBQUEsQ0FBQSxLQUFBLFVBQUEsUUFBQSxLQUFBLFNBQUE7SUFDQSxNQUFBOzs7SUFHQSxJQUFBLFVBQUEsUUFBQSxLQUFBO0tBQ0EsSUFBQSxLQUFBLFlBQUE7TUFDQSxPQUFBLEdBQUE7WUFDQTtNQUNBLE9BQUEsR0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkEsQ0FBQSxXQUFBO0NBQ0E7O0NBRUEsUUFBQSxPQUFBO0dBQ0EsV0FBQSxrQkFBQTs7Ozs7Ozs7Ozs7OztDQWFBLFNBQUEsZUFBQSxRQUFBLFFBQUEsY0FBQSxNQUFBLFFBQUEsY0FBQTtFQUNBLElBQUEsS0FBQTs7O0VBR0EsR0FBQSxhQUFBO0VBQ0EsR0FBQSxRQUFBO0VBQ0EsR0FBQSxnQkFBQSxFQUFBO0VBQ0EsR0FBQSx5QkFBQSxDQUFBO0VBQ0EsR0FBQSxVQUFBO0VBQ0EsR0FBQSxpQkFBQTtFQUNBLEdBQUEsaUJBQUE7RUFDQSxHQUFBLGdCQUFBOztFQUVBOzs7RUFHQSxTQUFBLFdBQUE7R0FDQTtHQUNBLE9BQUEsSUFBQSx1QkFBQTs7OztFQUlBLFNBQUEsY0FBQTtHQUNBLElBQUEsT0FBQSxHQUFBO0tBQ0EsT0FBQSxHQUFBO0tBQ0EsT0FBQSxHQUFBLG9CQUFBO0lBQ0EsR0FBQSx5QkFBQSxDQUFBO0lBQ0EsR0FBQSxpQkFBQSxDQUFBO0lBQ0EsR0FBQSxVQUFBO0lBQ0E7SUFDQTs7Ozs7RUFLQSxTQUFBLFFBQUE7R0FDQSxPQUFBLE1BQUEsR0FBQSxPQUFBLEdBQUEsVUFBQTtHQUNBLFNBQUEsS0FBQTtJQUNBLFFBQUEsSUFBQTtJQUNBLElBQUEsS0FBQSxZQUFBO0tBQ0EsSUFBQSxDQUFBLElBQUEsS0FBQSxVQUFBLE9BQUE7TUFDQSxPQUFBLEdBQUE7TUFDQSxHQUFBLGFBQUE7WUFDQTtNQUNBLE9BQUEsR0FBQTs7S0FFQTs7OztHQUlBLFNBQUEsS0FBQTtJQUNBLE1BQUE7Ozs7O0VBS0EsU0FBQSxpQkFBQTtHQUNBLEdBQUEsVUFBQTs7R0FFQSxJQUFBLEdBQUEsZUFBQSxNQUFBLEdBQUEsZUFBQSxHQUFBLGlCQUFBO0lBQ0EsT0FBQSxlQUFBLEdBQUEsaUJBQUEsR0FBQSxhQUFBLEtBQUEsU0FBQSxLQUFBO0tBQ0EsR0FBQSx5QkFBQTtPQUNBLFNBQUEsS0FBQTtLQUNBLEdBQUEseUJBQUE7O1VBRUE7SUFDQSxNQUFBOzs7OztFQUtBLFNBQUEsZ0JBQUE7R0FDQSxHQUFBLFVBQUE7R0FDQSxJQUFBLEdBQUEsZUFBQSxNQUFBLEdBQUEsZUFBQSxHQUFBLGlCQUFBO0lBQ0EsUUFBQSxJQUFBLGFBQUE7SUFDQSxPQUFBLGNBQUEsYUFBQSxRQUFBLEtBQUEsR0FBQSxhQUFBLEtBQUEsU0FBQSxLQUFBO0tBQ0EsR0FBQSx5QkFBQTtLQUNBLEdBQUEsYUFBQTtPQUNBLFNBQUEsS0FBQTtLQUNBLEdBQUEseUJBQUE7O1VBRUE7SUFDQSxNQUFBOzs7OztFQUtBLFNBQUEsaUJBQUE7R0FDQSxHQUFBLFVBQUE7R0FDQSxPQUFBLGVBQUEsR0FBQSxPQUFBLEtBQUEsU0FBQSxLQUFBO0lBQ0EsR0FBQSxpQkFBQTtNQUNBLFNBQUEsS0FBQTtJQUNBLEdBQUEsaUJBQUE7Ozs7O0VBS0EsU0FBQSxpQkFBQTtHQUNBLEdBQUEsUUFBQTtHQUNBLEdBQUEsV0FBQTs7OztFQUlBLFNBQUEsb0JBQUE7R0FDQSxHQUFBLGtCQUFBO0dBQ0EsR0FBQSxjQUFBO0dBQ0EsR0FBQSxrQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSEEsQ0FBQSxXQUFBO0NBQ0E7O0NBRUEsUUFBQSxPQUFBO0dBQ0EsSUFBQTs7O0NBR0EsU0FBQSxVQUFBLGNBQUE7RUFDQSxhQUFBLGdCQUFBOzs7O0NBR0EsU0FBQSxZQUFBO0VBQ0EsT0FBQTtHQUNBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7S0FDQSxLQUFBOzs7S0FHQSxhQUFBO0tBQ0EsTUFBQTtNQUNBLFFBQUE7Ozs7R0FJQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0tBQ0EsS0FBQTs7O0tBR0EsYUFBQTtLQUNBLE1BQUE7TUFDQSxRQUFBOzs7O0dBSUE7SUFDQSxPQUFBO0lBQ0EsUUFBQTtLQUNBLEtBQUE7OztLQUdBLGFBQUE7S0FDQSxNQUFBO01BQ0EsUUFBQTs7OztHQUlBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7S0FDQSxLQUFBOzs7S0FHQSxhQUFBO0tBQ0EsTUFBQTtNQUNBLFFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REEsQ0FBQSxXQUFBO0NBQ0E7O0NBRUEsUUFBQSxPQUFBO0dBQ0EsUUFBQSxRQUFBOzs7Ozs7OztDQVFBLFNBQUEsS0FBQSxTQUFBLFFBQUE7OztFQUdBLE9BQUE7R0FDQSxRQUFBO0dBQ0EsVUFBQTtHQUNBLFVBQUE7R0FDQSxXQUFBO0dBQ0EsYUFBQTtHQUNBLFdBQUE7Ozs7RUFJQSxTQUFBLFNBQUE7R0FDQSxRQUFBLGFBQUEsV0FBQTs7Ozs7OztFQU9BLFNBQUEsV0FBQTtHQUNBLElBQUEsUUFBQTtHQUNBLEdBQUEsT0FBQTtJQUNBLElBQUEsU0FBQSxTQUFBO0lBQ0EsUUFBQSxTQUFBLFVBQUEsT0FBQTtVQUNBO0lBQ0EsT0FBQTs7Ozs7Ozs7RUFRQSxTQUFBLFVBQUEsT0FBQTtHQUNBLFFBQUEsYUFBQSxXQUFBOzs7Ozs7O0VBT0EsU0FBQSxXQUFBO0dBQ0EsT0FBQSxRQUFBLGFBQUE7Ozs7Ozs7O0VBUUEsU0FBQSxjQUFBO0dBQ0EsT0FBQSxTQUFBLFlBQUE7Ozs7Ozs7O0VBUUEsU0FBQSxrQkFBQTtHQUNBLElBQUEsUUFBQTtHQUNBLElBQUEsU0FBQSxNQUFBO0lBQ0EsT0FBQTs7R0FFQSxPQUFBLFNBQUEsT0FBQTs7Ozs7Ozs7RUFRQSxTQUFBLFVBQUEsTUFBQTtHQUNBLElBQUEsUUFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0EsUUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLFVBQUE7OztHQUdBLElBQUEsUUFBQSxPQUFBLE9BQUE7O0dBRUEsSUFBQSxRQUFBLFlBQUE7SUFDQSxJQUFBLFlBQUE7S0FDQSxPQUFBOztVQUVBO0lBQ0EsSUFBQSxDQUFBLFlBQUE7S0FDQSxPQUFBOzs7O0dBSUEsUUFBQSxNQUFBLHNCQUFBLE1BQUE7Ozs7Ozs7O0VBUUEsU0FBQSxTQUFBLE9BQUE7R0FDQSxJQUFBLFlBQUEsTUFBQSxNQUFBLEtBQUE7R0FDQSxJQUFBLFNBQUEsVUFBQSxRQUFBLEtBQUEsS0FBQSxRQUFBLEtBQUE7R0FDQSxPQUFBLEtBQUEsTUFBQSxRQUFBLEtBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkhBLENBQUEsV0FBQTtDQUNBOztDQUVBLFFBQUEsT0FBQTtHQUNBLFFBQUEsbUJBQUE7Ozs7Ozs7OztDQVNBLFNBQUEsZ0JBQUEsTUFBQTs7O0VBR0EsT0FBQTtHQUNBLFNBQUE7R0FDQSxVQUFBOzs7O0VBSUEsU0FBQSxRQUFBLFFBQUE7R0FDQSxPQUFBOzs7O0VBSUEsU0FBQSxTQUFBLEtBQUE7R0FDQSxJQUFBLElBQUEsS0FBQSxPQUFBO0lBQ0EsS0FBQSxVQUFBLElBQUEsS0FBQTs7R0FFQSxPQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQSxDQUFBLFdBQUE7Q0FDQTs7Q0FFQSxRQUFBLE9BQUE7R0FDQSxXQUFBLG9CQUFBOzs7Ozs7OztDQVFBLFNBQUEsaUJBQUEsUUFBQSxLQUFBO0VBQ0EsSUFBQSxLQUFBOzs7RUFHQSxHQUFBLGFBQUE7RUFDQSxHQUFBLGdCQUFBO0VBQ0EsR0FBQSxhQUFBO0VBQ0EsR0FBQSxXQUFBO0VBQ0EsR0FBQSxlQUFBO0VBQ0EsR0FBQSxjQUFBO0VBQ0EsR0FBQSxrQkFBQTtFQUNBLEdBQUEsVUFBQSxFQUFBLElBQUEsQ0FBQSxHQUFBLE9BQUE7RUFDQSxHQUFBLFdBQUEsRUFBQSxNQUFBLE9BQUEsS0FBQTtFQUNBLEdBQUEsV0FBQTtFQUNBLEdBQUEsU0FBQSxLQUFBO0VBQ0EsR0FBQSxZQUFBO0VBQ0EsR0FBQSxVQUFBLEtBQUE7RUFDQSxHQUFBLGFBQUE7RUFDQSxHQUFBLGFBQUE7RUFDQSxHQUFBLFlBQUEsRUFBQSxLQUFBLEtBQUE7RUFDQSxHQUFBLFVBQUE7RUFDQSxHQUFBLGNBQUE7RUFDQSxHQUFBLFlBQUE7RUFDQSxHQUFBLGtCQUFBO0VBQ0EsR0FBQSxxQkFBQTtFQUNBLEdBQUEsbUJBQUE7RUFDQSxHQUFBLG9CQUFBO0VBQ0EsR0FBQSx3QkFBQTtFQUNBLEdBQUEseUJBQUE7RUFDQSxHQUFBLHFCQUFBO0VBQ0EsR0FBQSxtQkFBQTtFQUNBLEdBQUEsa0JBQUE7RUFDQSxHQUFBLGdCQUFBO0VBQ0EsR0FBQSxjQUFBO0VBQ0EsR0FBQSxnQkFBQTtFQUNBLEdBQUEsaUJBQUE7RUFDQSxHQUFBLGFBQUE7RUFDQSxHQUFBLG1CQUFBO0VBQ0EsR0FBQSxtQkFBQTtFQUNBLEdBQUEsVUFBQTtFQUNBLEdBQUEsaUJBQUE7RUFDQSxHQUFBLGtCQUFBO0VBQ0EsR0FBQSxrQkFBQTs7RUFFQTs7O0VBR0EsU0FBQSxXQUFBO0dBQ0E7R0FDQTtHQUNBO0dBQ0E7R0FDQTtHQUNBOzs7O0VBSUEsU0FBQSxpQkFBQTtHQUNBLEdBQUEsY0FBQTtJQUNBLFFBQUEsU0FBQSxRQUFBLE1BQUEsV0FBQTs7O0tBR0EsSUFBQSxPQUFBLFlBQUEsUUFBQSxZQUFBOztNQUVBLElBQUEsS0FBQSxVQUFBLEdBQUEsT0FBQTtZQUNBOztNQUVBLElBQUEsS0FBQSxXQUFBLEdBQUEsT0FBQTs7TUFFQSxJQUFBLEtBQUEsYUFBQSxjQUFBLE1BQUE7T0FDQSxJQUFBLEtBQUEsYUFBQSxXQUFBLFdBQUEsT0FBQTs7O0tBR0EsT0FBQTs7SUFFQSxTQUFBLFNBQUEsT0FBQTs7O0lBR0EsV0FBQSxTQUFBLE9BQUE7OztLQUdBLElBQUEsU0FBQSxNQUFBLE9BQUE7S0FDQSxJQUFBLE9BQUEsWUFBQSxRQUFBLFNBQUE7TUFDQSxnQkFBQSxPQUFBO1lBQ0E7TUFDQSxtQkFBQSxPQUFBOzs7Ozs7O0VBT0EsU0FBQSxrQkFBQTtHQUNBLE9BQUEsZ0JBQUEsS0FBQSxTQUFBLEtBQUE7SUFDQSxHQUFBLGFBQUEsSUFBQSxLQUFBO0lBQ0E7TUFDQSxTQUFBLEtBQUE7SUFDQSxJQUFBLGlCQUFBOzs7OztFQUtBLFNBQUEscUJBQUE7R0FDQSxPQUFBLG1CQUFBLEtBQUEsU0FBQSxLQUFBO0lBQ0EsR0FBQSxnQkFBQSxJQUFBLEtBQUE7SUFDQTtNQUNBLFNBQUEsS0FBQTtJQUNBLElBQUEsaUJBQUE7Ozs7O0VBS0EsU0FBQSxvQkFBQTtHQUNBLE9BQUEsa0JBQUEsS0FBQSxTQUFBLEtBQUE7SUFDQSxHQUFBLGVBQUEsSUFBQSxLQUFBO0lBQ0E7TUFDQSxTQUFBLEtBQUE7SUFDQSxJQUFBLGlCQUFBOzs7OztFQUtBLFNBQUEsZ0JBQUE7R0FDQSxPQUFBLGtCQUFBLEtBQUEsU0FBQSxLQUFBO0lBQ0EsR0FBQSxXQUFBLElBQUEsS0FBQTtJQUNBO01BQ0EsU0FBQSxLQUFBO0lBQ0EsSUFBQSxpQkFBQTs7Ozs7RUFLQSxTQUFBLHVCQUFBO0dBQ0EsT0FBQSxxQkFBQSxLQUFBLFNBQUEsS0FBQTtJQUNBLEdBQUEsa0JBQUEsSUFBQSxLQUFBO0lBQ0E7TUFDQSxTQUFBLEtBQUE7SUFDQSxJQUFBLGlCQUFBOzs7OztFQUtBLFNBQUEsbUJBQUE7R0FDQSxPQUFBLGlCQUFBLEtBQUEsU0FBQSxLQUFBO0lBQ0EsR0FBQSxjQUFBLElBQUEsS0FBQTtJQUNBO01BQ0EsU0FBQSxLQUFBO0lBQ0EsSUFBQSxpQkFBQTs7Ozs7RUFLQSxTQUFBLGtCQUFBO0dBQ0E7R0FDQSxHQUFBLGNBQUEsUUFBQSxTQUFBLGNBQUE7SUFDQSxxQkFBQTtJQUNBLGFBQUEsT0FBQTs7Ozs7RUFLQSxTQUFBLHNCQUFBO0dBQ0EsR0FBQSxnQkFBQSxRQUFBLFNBQUEsU0FBQTs7SUFFQSxLQUFBLElBQUEsSUFBQSxHQUFBLElBQUEsR0FBQSxjQUFBLFFBQUEsS0FBQTtLQUNBLElBQUEsZUFBQSxHQUFBLGNBQUE7S0FDQSxJQUFBLGFBQUEsTUFBQSxRQUFBLGdCQUFBO01BQ0EsUUFBQSxXQUFBLGFBQUE7TUFDQTs7OztJQUlBLEtBQUEsSUFBQSxJQUFBLEdBQUEsSUFBQSxHQUFBLFlBQUEsUUFBQSxLQUFBO0tBQ0EsSUFBQSxhQUFBLEdBQUEsWUFBQTtLQUNBLElBQUEsV0FBQSxNQUFBLFFBQUEsY0FBQTtNQUNBLFFBQUEsYUFBQSxXQUFBO01BQ0E7Ozs7Ozs7Ozs7RUFVQSxTQUFBLGlCQUFBO0dBQ0EsSUFBQSxHQUFBLFNBQUEsUUFBQSxZQUFBLE9BQUE7R0FDQSxJQUFBLEdBQUEsU0FBQSxRQUFBLFdBQUEsR0FBQSxXQUFBLFNBQUEsR0FBQSxPQUFBO0dBQ0EsSUFBQSxHQUFBLFNBQUEsUUFBQSxTQUFBLEdBQUEsY0FBQSxTQUFBLEdBQUEsT0FBQTtHQUNBLE9BQUE7Ozs7RUFJQSxTQUFBLG1CQUFBO0dBQ0EsR0FBQSxhQUFBO0dBQ0EsR0FBQSxjQUFBLFFBQUEsU0FBQSxjQUFBO0lBQ0EsSUFBQSxhQUFBLGVBQUEsR0FBQSxTQUFBLElBQUEsSUFBQTtLQUNBLEdBQUEsV0FBQSxLQUFBOzs7Ozs7RUFNQSxTQUFBLFlBQUE7R0FDQTtHQUNBLEdBQUEsU0FBQSxPQUFBOzs7O0VBSUEsU0FBQSxjQUFBO0dBQ0EsR0FBQSxTQUFBLEtBQUE7R0FDQSxHQUFBLFVBQUEsS0FBQTtHQUNBLEdBQUEsYUFBQTtHQUNBLEdBQUEsYUFBQTs7OztFQUlBLFNBQUEsZ0JBQUEsV0FBQTtHQUNBO0dBQ0EsR0FBQSxTQUFBLE9BQUE7R0FDQSxHQUFBLFNBQUEsTUFBQTtHQUNBOzs7O0VBSUEsU0FBQSxtQkFBQSxjQUFBO0dBQ0E7R0FDQSxHQUFBLFNBQUEsT0FBQTtHQUNBLEdBQUEsU0FBQSxNQUFBO0dBQ0E7Ozs7RUFJQSxTQUFBLDBCQUFBO0dBQ0EsR0FBQSxXQUFBLFFBQUEsU0FBQSxXQUFBO0lBQ0EsVUFBQSxPQUFBO0lBQ0EsVUFBQSxnQkFBQTs7Ozs7RUFLQSxTQUFBLHFCQUFBLGNBQUE7R0FDQSxHQUFBLFdBQUEsUUFBQSxTQUFBLFdBQUE7SUFDQSxJQUFBLFVBQUEsTUFBQSxhQUFBLGFBQUE7S0FDQSxhQUFBLGdCQUFBLHdCQUFBLFVBQUE7S0FDQSxVQUFBLGNBQUEsS0FBQTtLQUNBOzs7Ozs7RUFNQSxTQUFBLGdCQUFBLFdBQUE7R0FDQSxVQUFBLFlBQUEsQ0FBQSxVQUFBOzs7O0VBSUEsU0FBQSxtQkFBQTs7Ozs7R0FLQSxHQUFBLFNBQUEsS0FBQTs7OztFQUlBLFNBQUEsb0JBQUE7O0dBRUEsR0FBQSxTQUFBLEtBQUE7O0dBRUEsSUFBQSxHQUFBLFNBQUEsUUFBQSxTQUFBO0lBQ0EsT0FBQSxvQkFBQSxHQUFBLFNBQUEsSUFBQTtLQUNBLEdBQUEsU0FBQSxJQUFBLE1BQUEsS0FBQSxTQUFBLEtBQUE7TUFDQTtNQUNBLElBQUEsYUFBQTtRQUNBLFNBQUEsS0FBQTtNQUNBLElBQUEsaUJBQUE7O1VBRUEsSUFBQSxHQUFBLFNBQUEsUUFBQSxZQUFBO0lBQ0EsT0FBQSx1QkFBQSxHQUFBLFNBQUEsSUFBQTtLQUNBLEdBQUEsU0FBQSxJQUFBLE1BQUEsR0FBQSxTQUFBLElBQUEsYUFBQSxLQUFBLFNBQUEsS0FBQTtNQUNBO01BQ0EsSUFBQSxhQUFBO1FBQ0EsU0FBQSxLQUFBO01BQ0EsSUFBQSxpQkFBQTtRQUNBOzs7OztFQUtBLFNBQUEsaUJBQUE7R0FDQSxHQUFBLFNBQUEsS0FBQTs7OztFQUlBLFNBQUEsd0JBQUE7R0FDQSxHQUFBLFVBQUEsS0FBQTtHQUNBLEdBQUEsVUFBQSxjQUFBLEdBQUEsU0FBQSxJQUFBOzs7O0VBSUEsU0FBQSx5QkFBQTtHQUNBLEdBQUEsVUFBQSxLQUFBO0dBQ0EsR0FBQSxTQUFBLElBQUEsY0FBQSxHQUFBLFVBQUE7R0FDQSxpQkFBQSxHQUFBLFNBQUE7O0dBRUEsT0FBQTtJQUNBLEdBQUEsU0FBQSxJQUFBO0lBQ0EsR0FBQSxVQUFBO0lBQ0EsR0FBQSxVQUFBO0tBQ0EsS0FBQSxTQUFBLEtBQUE7SUFDQTtJQUNBLElBQUEsYUFBQTtNQUNBLFNBQUEsS0FBQTtJQUNBLElBQUEsaUJBQUE7Ozs7O0VBS0EsU0FBQSxrQkFBQTtHQUNBLEdBQUEsVUFBQSxLQUFBOzs7Ozs7OztFQVFBLFNBQUEsVUFBQTtHQUNBLElBQUEsR0FBQSxTQUFBLElBQUEsT0FBQTtHQUNBLElBQUEsR0FBQSxVQUFBLElBQUEsT0FBQTtHQUNBLElBQUEsR0FBQSxZQUFBLE9BQUE7R0FDQSxJQUFBLEdBQUEsWUFBQSxPQUFBO0dBQ0EsT0FBQTs7OztFQUlBLFNBQUEscUJBQUE7R0FDQSxHQUFBLFNBQUEsT0FBQTtHQUNBLEdBQUEsU0FBQSxNQUFBOzs7O0VBSUEsU0FBQSxtQkFBQTtHQUNBLE9BQUEsYUFBQSxHQUFBLFNBQUEsT0FBQSxLQUFBLFNBQUEsS0FBQTtJQUNBLEdBQUEsU0FBQSxPQUFBO0lBQ0E7SUFDQSxJQUFBLGFBQUE7TUFDQSxTQUFBLEtBQUE7SUFDQSxJQUFBLGlCQUFBOzs7OztFQUtBLFNBQUEsZ0JBQUE7R0FDQSxHQUFBLFNBQUEsUUFBQSxTQUFBLFNBQUE7O0lBRUEsS0FBQSxJQUFBLElBQUEsR0FBQSxJQUFBLEdBQUEsY0FBQSxRQUFBLEtBQUE7S0FDQSxJQUFBLGVBQUEsR0FBQSxjQUFBO0tBQ0EsSUFBQSxRQUFBLFVBQUEsYUFBQSxRQUFBO01BQ0EsUUFBQSxXQUFBLGFBQUE7TUFDQSxJQUFBLFFBQUEsWUFBQSxJQUFBO09BQ0EsUUFBQSxXQUFBOztNQUVBOzs7O0lBSUEsS0FBQSxJQUFBLElBQUEsR0FBQSxJQUFBLEdBQUEsYUFBQSxRQUFBLEtBQUE7S0FDQSxJQUFBLFFBQUEsaUJBQUEsR0FBQSxhQUFBLEdBQUEsSUFBQTtNQUNBLFFBQUEsY0FBQSxHQUFBLGFBQUEsR0FBQTtNQUNBOzs7Ozs7O0VBT0EsU0FBQSxjQUFBO0dBQ0EsSUFBQSxHQUFBLFFBQUEsTUFBQSxDQUFBLEtBQUEsR0FBQSxRQUFBLFNBQUEsSUFBQTtHQUNBLEdBQUEsYUFBQTtHQUNBLElBQUEsVUFBQTtHQUNBLElBQUEsR0FBQSxTQUFBLFFBQUEsWUFBQTtJQUNBLFFBQUEsS0FBQSxHQUFBLFNBQUEsSUFBQTtVQUNBLElBQUEsR0FBQSxTQUFBLFFBQUEsU0FBQTs7SUFFQSxHQUFBLGNBQUEsUUFBQSxTQUFBLGNBQUE7S0FDQSxJQUFBLGFBQUEsZUFBQSxHQUFBLFNBQUEsSUFBQSxJQUFBO01BQ0EsUUFBQSxLQUFBLGFBQUE7OztVQUdBLElBQUEsR0FBQSxTQUFBLFFBQUEsT0FBQTs7SUFFQSxHQUFBLGNBQUEsUUFBQSxTQUFBLGNBQUE7S0FDQSxRQUFBLEtBQUEsYUFBQTs7O0dBR0EsYUFBQTtHQUNBOzs7O0VBSUEsU0FBQSxrQkFBQTtHQUNBLEdBQUEsUUFBQSxLQUFBLENBQUE7R0FDQSxHQUFBLFFBQUEsUUFBQTs7OztFQUlBLFNBQUEsbUJBQUE7R0FDQSxHQUFBLGFBQUE7R0FDQTs7OztFQUlBLFNBQUEsYUFBQSxTQUFBO0dBQ0EsT0FBQSxnQkFBQSxHQUFBLFNBQUEsU0FBQSxLQUFBLFNBQUEsS0FBQTtJQUNBO0lBQ0EsSUFBQSxhQUFBO01BQ0EsU0FBQSxLQUFBO0lBQ0EsSUFBQSxpQkFBQTs7Ozs7RUFLQSxTQUFBLGNBQUEsU0FBQTs7Ozs7RUFLQSxTQUFBLGFBQUE7R0FDQSxJQUFBLEdBQUEsUUFBQSxnQkFBQSxDQUFBLEtBQUEsR0FBQSxRQUFBLFNBQUEsSUFBQTtHQUNBLEdBQUEsYUFBQTtHQUNBLElBQUEsa0JBQUE7R0FDQSxJQUFBLEdBQUEsU0FBQSxRQUFBLFlBQUE7SUFDQSxnQkFBQSxLQUFBLEdBQUEsU0FBQSxJQUFBO1VBQ0EsSUFBQSxHQUFBLFNBQUEsUUFBQSxTQUFBOztJQUVBLEdBQUEsY0FBQSxRQUFBLFNBQUEsY0FBQTtLQUNBLElBQUEsYUFBQSxlQUFBLEdBQUEsU0FBQSxJQUFBLElBQUE7TUFDQSxnQkFBQSxLQUFBLGFBQUE7OztVQUdBLElBQUEsR0FBQSxTQUFBLFFBQUEsT0FBQTs7SUFFQSxHQUFBLGNBQUEsUUFBQSxTQUFBLGNBQUE7S0FDQSxnQkFBQSxLQUFBLGFBQUE7OztHQUdBLGFBQUE7R0FDQTs7OztFQUlBLFNBQUEsYUFBQSxTQUFBO0dBQ0EsT0FBQSxtQkFBQSxHQUFBLFNBQUEsU0FBQSxLQUFBLFNBQUEsS0FBQTtJQUNBO0lBQ0EsSUFBQSxhQUFBO01BQ0EsU0FBQSxLQUFBO0lBQ0EsSUFBQSxpQkFBQTs7Ozs7RUFLQSxTQUFBLGtCQUFBO0dBQ0EsR0FBQSxVQUFBO0lBQ0EsY0FBQSxDQUFBO0lBQ0EsVUFBQTtJQUNBLE9BQUE7SUFDQSxTQUFBOzs7OztFQUtBLFNBQUEsbUJBQUE7R0FDQSxHQUFBLGFBQUE7R0FDQTs7Ozs7Ozs7RUFRQSxTQUFBLGdCQUFBLFdBQUE7R0FDQSxJQUFBLFVBQUEsTUFBQSxHQUFBLE9BQUE7R0FDQSxPQUFBOzs7Ozs7OztFQVFBLFNBQUEsY0FBQSxTQUFBO0dBQ0EsSUFBQSxHQUFBLFNBQUEsUUFBQSxPQUFBO0lBQ0EsT0FBQTtVQUNBLElBQUEsR0FBQSxTQUFBLFFBQUEsWUFBQTtJQUNBLE9BQUEsMEJBQUE7VUFDQSxJQUFBLEdBQUEsU0FBQSxRQUFBLFNBQUE7SUFDQSxPQUFBLHVCQUFBOztHQUVBLE9BQUE7Ozs7Ozs7O0VBUUEsU0FBQSwwQkFBQSxTQUFBO0dBQ0EsSUFBQSxRQUFBLFVBQUEsR0FBQSxTQUFBLElBQUEsUUFBQSxPQUFBO0dBQ0EsT0FBQTs7Ozs7Ozs7RUFRQSxTQUFBLHVCQUFBLFNBQUE7R0FDQSxLQUFBLElBQUEsSUFBQSxHQUFBLElBQUEsR0FBQSxjQUFBLFFBQUEsS0FBQTtJQUNBLElBQUEsZUFBQSxHQUFBLGNBQUE7SUFDQSxJQUFBLGFBQUEsZUFBQSxHQUFBLFNBQUEsSUFBQSxJQUFBO0tBQ0EsSUFBQSxRQUFBLFVBQUEsYUFBQSxRQUFBLE9BQUE7OztHQUdBLE9BQUE7Ozs7Ozs7O0VBUUEsU0FBQSx3QkFBQSxLQUFBO0dBQ0EsSUFBQSxJQUFBLE1BQUEsS0FBQTtJQUNBLE1BQUEsSUFBQSxPQUFBOztHQUVBLElBQUEsSUFBQSxJQUFBLFNBQUEsTUFBQSxLQUFBO0lBQ0EsTUFBQSxJQUFBLE9BQUEsR0FBQSxJQUFBLFNBQUE7O0dBRUEsT0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxaUJBLENBQUEsV0FBQTtDQUNBOztDQUVBLFFBQUEsT0FBQTtHQUNBLElBQUE7OztDQUdBLFNBQUEsVUFBQSxjQUFBO0VBQ0EsYUFBQSxnQkFBQTs7OztDQUdBLFNBQUEsWUFBQTtFQUNBLE9BQUE7R0FDQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0tBQ0EsS0FBQTtLQUNBLFlBQUE7S0FDQSxjQUFBO0tBQ0EsYUFBQTtLQUNBLE1BQUE7TUFDQSxRQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBLENBQUEsV0FBQTtDQUNBOztDQUVBLFFBQUEsT0FBQTtHQUNBLElBQUE7OztDQUdBLFNBQUEsVUFBQSxjQUFBO0VBQ0EsSUFBQSxnQkFBQTtFQUNBLGFBQUEsZ0JBQUEsYUFBQTs7OztDQUdBLFNBQUEsWUFBQTtFQUNBLE9BQUE7R0FDQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0tBQ0EsS0FBQTtLQUNBLFlBQUE7S0FDQSxNQUFBO01BQ0EsUUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxDQUFBLFdBQUE7Q0FDQTs7Q0FFQSxRQUFBLE9BQUE7R0FDQSxXQUFBLG1CQUFBOzs7Ozs7Ozs7O0NBVUEsU0FBQSxnQkFBQSxRQUFBLE1BQUE7RUFDQSxJQUFBLEtBQUE7O0VBRUE7Ozs7OztFQU1BLFNBQUEsV0FBQTtHQUNBLEtBQUEsTUFBQTs7O0dBR0EsT0FBQSxHQUFBOzs7R0FHQSxJQUFBLE9BQUEsU0FBQSxVQUFBO0lBQ0EsT0FBQSxHQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkEsQ0FBQSxXQUFBO0NBQ0E7O0NBRUEsUUFBQSxPQUFBO0dBQ0EsU0FBQSxnQkFBQTs7Ozs7Ozs7OztDQVVBLFNBQUEscUJBQUE7RUFDQSxnQkFBQSxvQkFBQTs7RUFFQSxLQUFBLE9BQUE7O0VBRUEsU0FBQSxhQUFBLFFBQUE7R0FDQSxJQUFBLGVBQUE7OztHQUdBLE9BQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBOzs7O0dBSUEsU0FBQSxnQkFBQSxRQUFBLGVBQUE7SUFDQSxPQUFBLFFBQUEsU0FBQSxPQUFBO0tBQ0EsZUFBQSxNQUFBLE1BQUEsT0FBQSxNQUFBOzs7SUFHQSxJQUFBLGlCQUFBLENBQUEsY0FBQTtLQUNBLGVBQUE7S0FDQSxtQkFBQSxVQUFBOzs7Ozs7OztHQVFBLFNBQUEsWUFBQTtJQUNBLE9BQUEsT0FBQTs7Ozs7Ozs7R0FRQSxTQUFBLFlBQUEsTUFBQTtJQUNBLE9BQUEsT0FBQSxTQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REQSxDQUFBLFdBQUE7Q0FDQTs7Q0FFQSxRQUFBLE9BQUE7R0FDQSxRQUFBLFVBQUE7Ozs7Ozs7Ozs7O0NBV0EsU0FBQSxPQUFBLE9BQUEsTUFBQSxnQkFBQSxNQUFBLFFBQUE7OztFQUdBLE9BQUE7R0FDQSxPQUFBO0dBQ0EsUUFBQTtHQUNBLGdCQUFBO0dBQ0EsZUFBQTtHQUNBLGdCQUFBO0dBQ0EsYUFBQTtHQUNBLGVBQUE7R0FDQSxrQkFBQTtHQUNBLHFCQUFBO0dBQ0Esd0JBQUE7R0FDQSxjQUFBO0dBQ0EseUJBQUE7R0FDQSxpQkFBQTtHQUNBLGlCQUFBO0dBQ0EsWUFBQTtHQUNBLGlCQUFBO0dBQ0Esb0JBQUE7R0FDQSxvQkFBQTtHQUNBLGFBQUE7R0FDQSxnQkFBQTtHQUNBLFVBQUE7R0FDQSxTQUFBO0dBQ0EsWUFBQTtHQUNBLFlBQUE7R0FDQSxtQkFBQTtHQUNBLFNBQUE7Ozs7Ozs7RUFPQSxTQUFBLFVBQUE7R0FDQSxPQUFBO0lBQ0EsU0FBQTs7Ozs7Ozs7RUFRQSxTQUFBLFNBQUEsUUFBQTtHQUNBLE9BQUEsUUFBQSxtQkFBQSxZQUFBLEtBQUE7R0FDQSxPQUFBOzs7Ozs7O0VBT0EsU0FBQSxRQUFBLFFBQUE7R0FDQSxPQUFBLFFBQUEsa0JBQUE7R0FDQSxPQUFBOzs7Ozs7Ozs7O0VBVUEsU0FBQSxNQUFBLE9BQUEsVUFBQTtHQUNBLElBQUEsT0FBQTtJQUNBLE9BQUE7SUFDQSxVQUFBOztHQUVBLE9BQUEsTUFBQSxLQUFBLGlCQUFBLGNBQUEsS0FBQSxVQUFBOzs7O0VBSUEsU0FBQSxTQUFBO0dBQ0EsS0FBQTs7Ozs7Ozs7O0VBU0EsU0FBQSxlQUFBLGlCQUFBLGFBQUE7R0FDQSxJQUFBLFNBQUEsU0FBQTtHQUNBLElBQUEsT0FBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTs7R0FFQSxJQUFBLFFBQUEsS0FBQTtHQUNBLE9BQUEsTUFBQSxJQUFBLGlCQUFBO0lBQ0EsUUFBQSxvQkFBQSxLQUFBLFVBQUEsT0FBQTs7O0VBR0EsU0FBQSxjQUFBLE9BQUEsYUFBQTtHQUNBLElBQUEsT0FBQTtJQUNBLGFBQUE7O0dBRUEsSUFBQSxTQUFBLFlBQUE7R0FDQSxPQUFBLE1BQUEsS0FBQSxpQkFBQSx3QkFBQSxRQUFBLEtBQUEsVUFBQTs7Ozs7Ozs7O0VBU0EsU0FBQSxlQUFBLE9BQUE7R0FDQSxJQUFBLE9BQUE7SUFDQSxPQUFBOztHQUVBLE9BQUEsTUFBQSxLQUFBLGlCQUFBLHdCQUFBLEtBQUEsVUFBQTs7Ozs7Ozs7OztFQVVBLFNBQUEsWUFBQSxNQUFBLElBQUE7R0FDQSxJQUFBLFNBQUEsU0FBQTtHQUNBLElBQUEsU0FBQSxpQkFBQSxPQUFBLGVBQUE7R0FDQSxPQUFBLE1BQUEsSUFBQSxpQkFBQSxrQkFBQSxRQUFBOzs7Ozs7OztFQVFBLFNBQUEsZ0JBQUE7R0FDQSxJQUFBLFNBQUEsU0FBQTtHQUNBLE9BQUEsTUFBQSxJQUFBLGlCQUFBLG9CQUFBOzs7Ozs7OztFQVFBLFNBQUEsbUJBQUE7R0FDQSxJQUFBLFNBQUEsU0FBQTtHQUNBLE9BQUEsTUFBQSxJQUFBLGlCQUFBLG1DQUFBOzs7Ozs7Ozs7O0VBVUEsU0FBQSxvQkFBQSxJQUFBLE1BQUE7R0FDQSxJQUFBLFNBQUEsUUFBQSxTQUFBO0dBQ0EsSUFBQSxPQUFBO0lBQ0EsTUFBQTs7R0FFQSxPQUFBLE1BQUEsSUFBQSxpQkFBQSxzQkFBQTtLQUNBLEtBQUEsVUFBQSxPQUFBOzs7Ozs7Ozs7OztFQVdBLFNBQUEsdUJBQUEsSUFBQSxNQUFBLGFBQUE7R0FDQSxJQUFBLFNBQUEsUUFBQSxTQUFBO0dBQ0EsSUFBQSxPQUFBO0lBQ0EsTUFBQTtJQUNBLGFBQUE7O0dBRUEsT0FBQSxNQUFBLElBQUEsaUJBQUEseUJBQUE7S0FDQSxLQUFBLFVBQUEsT0FBQTs7Ozs7Ozs7O0VBU0EsU0FBQSxhQUFBLE1BQUE7R0FDQSxJQUFBLFNBQUEsUUFBQSxTQUFBO0dBQ0EsSUFBQSxPQUFBO0lBQ0EsTUFBQTs7R0FFQSxPQUFBLE1BQUEsS0FBQSxpQkFBQTtLQUNBLEtBQUEsVUFBQSxPQUFBOzs7Ozs7Ozs7OztFQVdBLFNBQUEsd0JBQUEsUUFBQSxTQUFBLE1BQUE7R0FDQSxJQUFBLFNBQUEsUUFBQSxTQUFBO0dBQ0EsSUFBQSxPQUFBO0lBQ0EsTUFBQTtJQUNBLFFBQUE7SUFDQSxhQUFBOztHQUVBLE9BQUEsTUFBQSxLQUFBLGlCQUFBO0tBQ0EsS0FBQSxVQUFBLE9BQUE7Ozs7Ozs7O0VBUUEsU0FBQSxrQkFBQTtHQUNBLElBQUEsU0FBQSxTQUFBO0dBQ0EsT0FBQSxNQUFBLElBQUEsaUJBQUEsc0JBQUE7Ozs7Ozs7O0VBUUEsU0FBQSxrQkFBQTtHQUNBLElBQUEsU0FBQSxTQUFBO0dBQ0EsT0FBQSxNQUFBLElBQUEsaUJBQUEsNEJBQUE7Ozs7Ozs7OztFQVNBLFNBQUEsV0FBQSxVQUFBO0dBQ0EsSUFBQSxTQUFBLFNBQUE7R0FDQSxPQUFBLGVBQUE7R0FDQSxPQUFBLFFBQUEsWUFBQTtHQUNBLElBQUEsT0FBQTtJQUNBLFVBQUE7OztHQUdBLElBQUEsVUFBQSxNQUFBLEtBQUEsaUJBQUE7SUFDQSxLQUFBLFVBQUEsT0FBQTs7R0FFQSxRQUFBLEtBQUEsU0FBQSxLQUFBO0lBQ0EsSUFBQSxPQUFBLFNBQUEsT0FBQTtJQUNBLElBQUEsV0FBQSxZQUFBLE9BQUE7SUFDQSxpQkFBQSxVQUFBLElBQUEsTUFBQTtNQUNBLFNBQUEsS0FBQTtJQUNBLEtBQUEsTUFBQTs7O0dBR0EsT0FBQTs7Ozs7O0VBTUEsU0FBQSxpQkFBQSxVQUFBLFNBQUEsV0FBQTtHQUNBLElBQUEsT0FBQSxJQUFBLEtBQUEsQ0FBQSxVQUFBLENBQUEsTUFBQTtHQUNBLE9BQUEsTUFBQTs7Ozs7Ozs7OztFQVVBLFNBQUEsZ0JBQUEsU0FBQSxTQUFBO0dBQ0EsSUFBQSxTQUFBLFFBQUEsU0FBQTtHQUNBLElBQUEsT0FBQTtJQUNBLFVBQUE7O0dBRUEsUUFBQSxRQUFBLFNBQUEsUUFBQTtJQUNBLEtBQUEsU0FBQSxLQUFBO0tBQ0EsZUFBQSxRQUFBO0tBQ0EsT0FBQSxTQUFBLFFBQUEsT0FBQTtLQUNBLFFBQUE7OztHQUdBLE9BQUEsTUFBQSxLQUFBLGlCQUFBO0lBQ0EsS0FBQSxVQUFBLE9BQUE7Ozs7Ozs7O0VBUUEsU0FBQSxrQkFBQSxRQUFBOzs7Ozs7Ozs7RUFTQSxTQUFBLHFCQUFBO0dBQ0EsSUFBQSxTQUFBLFNBQUE7R0FDQSxPQUFBLE1BQUEsSUFBQSxpQkFBQSwrQ0FBQTs7Ozs7Ozs7Ozs7RUFXQSxTQUFBLG1CQUFBLFNBQUEsaUJBQUE7R0FDQSxJQUFBLFNBQUEsUUFBQSxTQUFBO0dBQ0EsSUFBQSxPQUFBO0lBQ0EsaUJBQUE7O0dBRUEsZ0JBQUEsUUFBQSxTQUFBLGdCQUFBO0lBQ0EsS0FBQSxnQkFBQSxLQUFBO0tBQ0EsZ0JBQUE7S0FDQSxjQUFBLFFBQUE7S0FDQSxVQUFBLFFBQUE7S0FDQSxPQUFBLFNBQUEsUUFBQSxPQUFBO0tBQ0EsU0FBQSxRQUFBOzs7R0FHQSxPQUFBLE1BQUEsS0FBQSxpQkFBQTtJQUNBLEtBQUEsVUFBQSxPQUFBOzs7Ozs7OztFQVFBLFNBQUEsY0FBQTtHQUNBLElBQUEsU0FBQSxTQUFBO0dBQ0EsT0FBQSxNQUFBLElBQUEsaUJBQUEsaUJBQUE7Ozs7Ozs7O0VBUUEsU0FBQSxpQkFBQTtHQUNBLElBQUEsU0FBQSxTQUFBO0dBQ0EsT0FBQSxNQUFBLElBQUEsaUJBQUEscUJBQUE7Ozs7Ozs7O0VBUUEsU0FBQSxXQUFBO0dBQ0EsSUFBQSxTQUFBLFNBQUE7R0FDQSxPQUFBLE1BQUEsSUFBQSxpQkFBQSxjQUFBOzs7Ozs7Ozs7RUFTQSxTQUFBLFFBQUEsTUFBQTtHQUNBLElBQUEsU0FBQSxRQUFBLFNBQUE7R0FDQSxJQUFBLE9BQUE7SUFDQSxPQUFBLEtBQUE7SUFDQSxXQUFBLEtBQUE7SUFDQSxVQUFBLEtBQUE7SUFDQSxNQUFBLEtBQUE7O0dBRUEsT0FBQSxNQUFBLEtBQUEsaUJBQUE7SUFDQSxLQUFBLFVBQUEsT0FBQTs7Ozs7Ozs7O0VBU0EsU0FBQSxXQUFBLE1BQUE7R0FDQSxJQUFBLFNBQUEsUUFBQSxTQUFBO0dBQ0EsSUFBQSxPQUFBO0lBQ0EsV0FBQSxLQUFBO0lBQ0EsVUFBQSxLQUFBO0lBQ0EsTUFBQSxLQUFBOztHQUVBLE9BQUEsTUFBQSxJQUFBLGlCQUFBLGdCQUFBLEtBQUE7SUFDQSxLQUFBLFVBQUEsT0FBQTs7Ozs7Ozs7O0VBU0EsU0FBQSxXQUFBLElBQUE7R0FDQSxJQUFBLFNBQUEsU0FBQTtHQUNBLE9BQUEsTUFBQSxPQUFBLGlCQUFBLGdCQUFBLElBQUE7Ozs7Ozs7OztFQVNBLFNBQUEsUUFBQSxNQUFBLE1BQUE7R0FDQSxJQUFBLFNBQUEsUUFBQSxTQUFBO0dBQ0EsSUFBQSxPQUFBO0lBQ0EsTUFBQTtJQUNBLE1BQUE7O0dBRUEsT0FBQSxNQUFBLEtBQUEsaUJBQUE7SUFDQSxLQUFBLFVBQUEsT0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoY0EsQ0FBQSxXQUFBO0NBQ0E7O0NBRUEsUUFBQSxPQUFBLGVBQUE7R0FDQSxRQUFBLFVBQUE7Ozs7Ozs7Q0FPQSxTQUFBLFNBQUE7OztFQUdBLE9BQUE7R0FDQSxhQUFBO0dBQ0EsWUFBQTtHQUNBLE9BQUE7R0FDQSxRQUFBOzs7O0VBSUEsU0FBQSxjQUFBO0dBQ0EsT0FBQTtJQUNBO0tBQ0EsSUFBQTtLQUNBLE1BQUE7S0FDQSxXQUFBO0tBQ0EsVUFBQSxDQUFBO0tBQ0EsV0FBQTtLQUNBLFdBQUE7TUFDQSxTQUFBO01BQ0EsVUFBQTtNQUNBLFVBQUE7TUFDQSxXQUFBOztPQUVBO0tBQ0EsSUFBQTtLQUNBLE1BQUE7S0FDQSxXQUFBO0tBQ0EsVUFBQSxDQUFBO0tBQ0EsV0FBQTtLQUNBLFdBQUE7TUFDQSxTQUFBO01BQ0EsVUFBQTtNQUNBLFVBQUE7TUFDQSxXQUFBOztPQUVBO0tBQ0EsSUFBQTtLQUNBLE1BQUE7S0FDQSxXQUFBO0tBQ0EsVUFBQSxDQUFBO0tBQ0EsV0FBQTtLQUNBLFdBQUE7TUFDQSxTQUFBO01BQ0EsVUFBQTtNQUNBLFVBQUE7TUFDQSxXQUFBOztPQUVBO0tBQ0EsSUFBQTtLQUNBLE1BQUE7S0FDQSxXQUFBO0tBQ0EsVUFBQSxDQUFBO0tBQ0EsV0FBQTtLQUNBLFdBQUE7TUFDQSxTQUFBO01BQ0EsVUFBQTtNQUNBLFVBQUE7TUFDQSxXQUFBOztPQUVBO0tBQ0EsSUFBQTtLQUNBLE1BQUE7S0FDQSxXQUFBO0tBQ0EsVUFBQSxDQUFBO0tBQ0EsV0FBQTtLQUNBLFdBQUE7TUFDQSxTQUFBO01BQ0EsVUFBQTtNQUNBLFVBQUE7TUFDQSxXQUFBOzs7Ozs7O0VBT0EsU0FBQSxhQUFBO0dBQ0EsT0FBQTtJQUNBO0tBQ0EsSUFBQTtLQUNBLE1BQUE7S0FDQSxhQUFBO0tBQ0EsUUFBQTtLQUNBLE9BQUE7S0FDQSxZQUFBO0tBQ0EsWUFBQTtLQUNBLFNBQUE7S0FDQSxjQUFBOztJQUVBO0tBQ0EsSUFBQTtLQUNBLE1BQUE7S0FDQSxhQUFBO0tBQ0EsUUFBQTtLQUNBLE9BQUE7S0FDQSxZQUFBO0tBQ0EsWUFBQTtLQUNBLFNBQUE7S0FDQSxjQUFBOztJQUVBO0tBQ0EsSUFBQTtLQUNBLE1BQUE7S0FDQSxhQUFBO0tBQ0EsUUFBQTtLQUNBLE9BQUE7S0FDQSxZQUFBLENBQUE7S0FDQSxZQUFBLENBQUE7S0FDQSxTQUFBO0tBQ0EsY0FBQTs7Ozs7O0VBTUEsU0FBQSxRQUFBOzs7OztFQUtBLFNBQUEsU0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySUEsQ0FBQSxXQUFBO0lBQ0E7OztJQUdBLFFBQUEsT0FBQTtTQUNBLDJCQUFBLFNBQUEsaUJBQUE7WUFDQSxnQkFBQSxXQUFBO2dCQUNBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQSxDQUFBLFdBQUE7Q0FDQTs7Q0FFQSxRQUFBLE9BQUE7R0FDQSxXQUFBLHVCQUFBOzs7Ozs7Ozs7O0NBVUEsU0FBQSxvQkFBQSxNQUFBLFdBQUEsUUFBQSxXQUFBLEtBQUE7RUFDQSxJQUFBLEtBQUE7OztFQUdBLElBQUEsV0FBQTtFQUNBLElBQUE7OztFQUdBLEdBQUEsVUFBQTtFQUNBLEdBQUEsYUFBQTtFQUNBLEdBQUEsUUFBQSxVQUFBO0VBQ0EsR0FBQSxRQUFBLFVBQUE7RUFDQSxHQUFBLFVBQUEsVUFBQTtFQUNBLEdBQUEsUUFBQSxVQUFBO0VBQ0EsR0FBQSxrQkFBQSxVQUFBO0VBQ0EsR0FBQSxxQkFBQSxVQUFBO0VBQ0EsR0FBQSxnQkFBQSxVQUFBO0VBQ0EsR0FBQSxjQUFBO0VBQ0EsR0FBQSxhQUFBLFVBQUE7RUFDQSxHQUFBLGVBQUE7O0VBRUE7OztFQUdBLFNBQUEsV0FBQTtHQUNBLEdBQUEsVUFBQTtHQUNBLFdBQUE7O0dBRUE7R0FDQTs7O0dBR0EsT0FBQSxJQUFBLHdCQUFBLFNBQUEsT0FBQSxjQUFBO0lBQ0EsT0FBQSxPQUFBLFdBQUE7S0FDQSxJQUFBLENBQUEsR0FBQSxZQUFBO01BQ0E7O0tBRUEsVUFBQSxxQkFBQSxhQUFBOzs7R0FHQSxPQUFBLElBQUEsVUFBQSxTQUFBLE9BQUEsT0FBQTtJQUNBLFdBQUE7Ozs7O0VBS0EsU0FBQSxnQkFBQTtHQUNBLFVBQUEsZ0JBQUEsS0FBQSxXQUFBO0lBQ0E7Ozs7O0VBS0EsU0FBQSxlQUFBO0dBQ0EsVUFBQSxlQUFBLEtBQUEsV0FBQTtJQUNBLEdBQUEsVUFBQSxVQUFBO0lBQ0E7Ozs7O0VBS0EsU0FBQSxjQUFBO0dBQ0EsR0FBQSxVQUFBO0dBQ0EsVUFBQSxjQUFBLEtBQUEsV0FBQTtJQUNBLEdBQUEsVUFBQTs7Ozs7RUFLQSxTQUFBLGNBQUE7R0FDQSxJQUFBLEVBQUEsWUFBQSxHQUFBO0lBQ0EsR0FBQSxVQUFBOzs7OztFQUtBLFNBQUEsZUFBQTtHQUNBLEdBQUEsYUFBQSxDQUFBLEdBQUE7R0FDQSxJQUFBLFNBQUEsSUFBQTtHQUNBLFFBQUE7SUFDQSxTQUFBLHVCQUFBO0tBQ0EsSUFBQSxvRUFBQSxXQUFBO0tBQ0EsSUFBQSxVQUFBO0tBQ0EsU0FBQSxPQUFBLFNBQUE7Ozs7O0VBS0EsVUFBQSxNQUFBLFdBQUE7R0FDQSxJQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHQSxDQUFBLFdBQUE7Q0FDQTs7Q0FFQSxRQUFBLE9BQUE7R0FDQSxJQUFBOzs7Q0FHQSxTQUFBLFVBQUEsY0FBQTtFQUNBLElBQUEsZ0JBQUE7RUFDQSxhQUFBLGdCQUFBLGFBQUE7Ozs7Q0FHQSxTQUFBLFlBQUE7RUFDQSxPQUFBO0dBQ0E7SUFDQSxPQUFBO0lBQ0EsUUFBQTtLQUNBLEtBQUE7S0FDQSxZQUFBO0tBQ0EsY0FBQTtLQUNBLGFBQUE7S0FDQSxNQUFBO01BQ0EsUUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQSxDQUFBLFdBQUE7Q0FDQTs7Q0FFQSxRQUFBLE9BQUE7R0FDQSxRQUFBLGFBQUE7Ozs7Ozs7Ozs7Q0FVQSxTQUFBLFVBQUEsTUFBQSxJQUFBLFFBQUEsS0FBQSxRQUFBOztFQUVBLElBQUEsV0FBQTtFQUNBLElBQUEsbUJBQUE7RUFDQSxJQUFBLFVBQUE7RUFDQSxJQUFBLFFBQUE7RUFDQSxJQUFBLFFBQUE7RUFDQSxJQUFBLFFBQUE7O0VBRUEsSUFBQSxhQUFBO0VBQ0EsSUFBQSxhQUFBOztFQUVBO0VBQ0E7OztFQUdBLE9BQUE7R0FDQSxPQUFBO0dBQ0EsT0FBQTtHQUNBLFNBQUE7R0FDQSxPQUFBO0dBQ0EsZUFBQTtHQUNBLGNBQUE7R0FDQSxpQkFBQTtHQUNBLG9CQUFBO0dBQ0EsYUFBQTtHQUNBLGVBQUE7R0FDQSxZQUFBO0dBQ0Esc0JBQUE7Ozs7Ozs7RUFPQSxTQUFBLFdBQUE7R0FDQSxPQUFBOzs7Ozs7O0VBT0EsU0FBQSxXQUFBO0dBQ0EsT0FBQTs7Ozs7OztFQU9BLFNBQUEsYUFBQTtHQUNBLE9BQUE7Ozs7Ozs7RUFPQSxTQUFBLFdBQUE7R0FDQSxPQUFBOzs7Ozs7Ozs7RUFTQSxTQUFBLGNBQUEsTUFBQSxJQUFBO0dBQ0EsSUFBQSxDQUFBLE1BQUE7SUFDQSxPQUFBLFNBQUEsU0FBQSxNQUFBLE9BQUEsTUFBQTtNQUNBLE1BQUEsT0FBQSxNQUFBLFlBQUE7SUFDQSxLQUFBLFNBQUE7O0dBRUEsSUFBQSxVQUFBLE9BQUEsWUFBQSxNQUFBO0dBQ0EsUUFBQSxLQUFBLFNBQUEsS0FBQTtJQUNBLFdBQUEsSUFBQSxLQUFBO0lBQ0E7SUFDQTtNQUNBLFNBQUEsS0FBQTtJQUNBLEtBQUEsTUFBQTs7R0FFQSxPQUFBOzs7Ozs7O0VBT0EsU0FBQSxlQUFBO0dBQ0EsSUFBQSxVQUFBLE9BQUE7R0FDQSxRQUFBLEtBQUEsU0FBQSxLQUFBO0lBQ0EsZ0JBQUEsSUFBQSxLQUFBO0lBQ0E7TUFDQSxTQUFBLEtBQUE7SUFDQSxLQUFBLE1BQUE7O0dBRUEsT0FBQTs7OztFQUlBLFNBQUEsa0JBQUE7R0FDQSxRQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUEsRUFBQSxNQUFBLE1BQUEsSUFBQTtJQUNBLE9BQUE7SUFDQSxlQUFBO0lBQ0EsUUFBQTtLQUNBLE9BQUEsRUFBQSxPQUFBLEdBQUEsWUFBQSxTQUFBLFNBQUE7TUFDQSxTQUFBLFFBQUEsU0FBQTs7S0FFQSxPQUFBO01BQ0EsTUFBQSxFQUFBLE1BQUEsSUFBQSxNQUFBO01BQ0EsSUFBQSxFQUFBLE1BQUEsSUFBQSxNQUFBOztLQUVBLE9BQUEsRUFBQSxNQUFBLElBQUEsTUFBQTs7Ozs7O0VBTUEsU0FBQSxrQkFBQTtHQUNBLE1BQUEsU0FBQTtHQUNBLE1BQUEsU0FBQTtHQUNBLE1BQUEsT0FBQTtJQUNBLENBQUE7Ozs7O0VBS0EsU0FBQSxnQkFBQTtHQUNBLElBQUEsQ0FBQSxVQUFBOztHQUVBLElBQUEsU0FBQTtHQUNBLElBQUEsWUFBQTs7O0dBR0EsS0FBQSxJQUFBLElBQUEsR0FBQSxJQUFBLFNBQUEsUUFBQSxLQUFBO0lBQ0EsSUFBQSxZQUFBLFNBQUE7SUFDQSxPQUFBLEtBQUEsVUFBQTtJQUNBLElBQUEsUUFBQSxvQkFBQTs7O0lBR0EsS0FBQSxJQUFBLElBQUEsR0FBQSxJQUFBLFVBQUEsY0FBQSxRQUFBLEtBQUE7S0FDQSxJQUFBLGVBQUEsVUFBQSxjQUFBO0tBQ0EsVUFBQSxLQUFBLGFBQUE7S0FDQSx1QkFBQSxjQUFBOzs7OztHQUtBLDJCQUFBO0dBQ0EsOEJBQUE7Ozs7RUFJQSxTQUFBLGdCQUFBLE1BQUE7R0FDQSxLQUFBLElBQUEsSUFBQSxHQUFBLElBQUEsS0FBQSxRQUFBLEtBQUE7SUFDQSxJQUFBLFNBQUEsS0FBQTs7SUFFQSxJQUFBLFFBQUEsZUFBQSxPQUFBLEtBQUE7O0lBRUEsT0FBQSxTQUFBO0tBQ0EsU0FBQTtLQUNBLFNBQUEsQ0FBQSxLQUFBLEtBQUE7S0FDQSxVQUFBO0tBQ0EsT0FBQTs7O0lBR0EsUUFBQSxPQUFBLE1BQUE7Ozs7Ozs7Ozs7RUFVQSxTQUFBLG9CQUFBLFdBQUE7R0FDQSxJQUFBLFFBQUE7R0FDQSxJQUFBLFNBQUEsc0JBQUEsVUFBQTtHQUNBLElBQUEsVUFBQSxDQUFBLEdBQUE7SUFDQSxRQUFBLE1BQUE7VUFDQTtJQUNBLE1BQUEsS0FBQSxVQUFBO0lBQ0EsTUFBQSxPQUFBLFVBQUE7SUFDQSxNQUFBLFVBQUE7SUFDQSxNQUFBLFlBQUE7SUFDQSxNQUFBLGdCQUFBO0lBQ0EsTUFBQSxnQkFBQTtJQUNBLE1BQUEsS0FBQTs7R0FFQSxNQUFBLE9BQUEsVUFBQTtHQUNBLE9BQUE7Ozs7Ozs7OztFQVNBLFNBQUEsdUJBQUEsY0FBQSxPQUFBO0dBQ0EsSUFBQSxXQUFBO0dBQ0EsSUFBQSxTQUFBLHNCQUFBLE1BQUE7R0FDQSxJQUFBLFNBQUEseUJBQUEsYUFBQSxJQUFBLE1BQUE7R0FDQSxJQUFBLFVBQUEsQ0FBQSxHQUFBO0lBQ0EsV0FBQSxNQUFBLFFBQUEsY0FBQTtVQUNBO0lBQ0EsU0FBQSxLQUFBLGFBQUE7SUFDQSxTQUFBLFVBQUE7SUFDQSxNQUFBLGNBQUEsS0FBQTs7R0FFQSxTQUFBLE9BQUEsYUFBQTtHQUNBLE9BQUE7Ozs7Ozs7O0VBUUEsU0FBQSxzQkFBQSxJQUFBO0dBQ0EsS0FBQSxJQUFBLElBQUEsR0FBQSxJQUFBLE1BQUEsUUFBQSxLQUFBO0lBQ0EsSUFBQSxNQUFBLEdBQUEsTUFBQSxJQUFBO0tBQ0EsT0FBQTs7O0dBR0EsT0FBQSxDQUFBOzs7Ozs7Ozs7RUFTQSxTQUFBLHlCQUFBLElBQUEsS0FBQTtHQUNBLElBQUEsU0FBQSxzQkFBQTtHQUNBLElBQUEsVUFBQSxDQUFBLEdBQUEsT0FBQSxDQUFBO0dBQ0EsS0FBQSxJQUFBLElBQUEsR0FBQSxJQUFBLE1BQUEsUUFBQSxjQUFBLFFBQUEsS0FBQTtJQUNBLElBQUEsTUFBQSxRQUFBLGNBQUEsR0FBQSxNQUFBLElBQUE7S0FDQSxPQUFBOzs7R0FHQSxPQUFBLENBQUE7Ozs7Ozs7RUFPQSxTQUFBLDJCQUFBLE1BQUE7R0FDQSxJQUFBLFNBQUE7R0FDQSxLQUFBLElBQUEsSUFBQSxHQUFBLElBQUEsTUFBQSxRQUFBLEtBQUE7SUFDQSxJQUFBLFFBQUEsTUFBQTtJQUNBLElBQUEsS0FBQSxRQUFBLE1BQUEsT0FBQSxDQUFBLEdBQUE7S0FDQSxPQUFBLEtBQUE7OztHQUdBLEtBQUEsSUFBQSxJQUFBLEdBQUEsSUFBQSxPQUFBLFFBQUEsS0FBQTtJQUNBLE1BQUEsT0FBQSxPQUFBLElBQUE7Ozs7Ozs7O0VBUUEsU0FBQSw4QkFBQSxNQUFBOztHQUVBLElBQUEsU0FBQTtHQUNBLEtBQUEsSUFBQSxJQUFBLEdBQUEsSUFBQSxNQUFBLFFBQUEsS0FBQTtJQUNBLElBQUEsUUFBQSxNQUFBO0lBQ0EsS0FBQSxJQUFBLElBQUEsR0FBQSxJQUFBLE1BQUEsY0FBQSxRQUFBLEtBQUE7S0FDQSxJQUFBLFdBQUEsTUFBQSxjQUFBO0tBQ0EsSUFBQSxLQUFBLFFBQUEsU0FBQSxPQUFBLENBQUEsR0FBQTtNQUNBLE9BQUEsS0FBQSxFQUFBLE9BQUEsR0FBQSxVQUFBOzs7O0dBSUEsS0FBQSxJQUFBLElBQUEsR0FBQSxJQUFBLE9BQUEsUUFBQSxLQUFBO0lBQ0EsTUFBQSxPQUFBLEdBQUEsT0FBQSxPQUFBLE9BQUEsR0FBQSxVQUFBOzs7Ozs7RUFNQSxTQUFBLGdCQUFBLFdBQUE7R0FDQSxVQUFBLGNBQUEsUUFBQSxTQUFBLGNBQUE7SUFDQSxhQUFBLFVBQUEsVUFBQTs7R0FFQTs7OztFQUlBLFNBQUEsbUJBQUEsV0FBQTtHQUNBLDJCQUFBO0dBQ0E7Ozs7RUFJQSxTQUFBLDJCQUFBLFdBQUE7R0FDQSxJQUFBLFVBQUE7R0FDQSxJQUFBLFdBQUE7O0dBRUEsVUFBQSxjQUFBLFFBQUEsU0FBQSxVQUFBO0lBQ0EsSUFBQSxTQUFBLFNBQUE7S0FDQSxXQUFBO1dBQ0E7S0FDQSxVQUFBOzs7O0dBSUEsSUFBQSxVQUFBO0lBQ0EsVUFBQSxVQUFBO1VBQ0E7SUFDQSxVQUFBLFVBQUE7OztHQUdBLElBQUEsWUFBQSxTQUFBO0lBQ0EsVUFBQSxnQkFBQTtVQUNBO0lBQ0EsVUFBQSxnQkFBQTs7Ozs7RUFLQSxTQUFBLGNBQUE7R0FDQSxJQUFBLFFBQUEsR0FBQTs7O0dBR0EsSUFBQSxvQkFBQTtJQUNBLElBQUEsZUFBQSxhQUFBLE1BQUE7O0lBRUEsSUFBQSxNQUFBLFFBQUEsU0FBQTtLQUNBLE1BQUEsTUFBQSxPQUFBLE9BQUEsTUFBQSxPQUFBLE1BQUEsS0FBQTtRQUNBLE1BQUEsTUFBQSxPQUFBLE1BQUEsS0FBQSxNQUFBO0tBQ0EsTUFBQSxNQUFBLEtBQUEsT0FBQSxNQUFBLE9BQUEsTUFBQSxHQUFBO1FBQ0EsTUFBQSxNQUFBLE9BQUEsTUFBQSxHQUFBLE1BQUE7OztTQUdBLElBQUEsTUFBQSxRQUFBLFNBQUE7S0FDQSxNQUFBLFFBQUEsT0FBQSxNQUFBLE9BQUEsTUFBQTtRQUNBLE1BQUEsTUFBQSxPQUFBLE1BQUEsTUFBQTs7O0lBR0Esb0JBQUEsS0FBQSxXQUFBO0tBQ0EsTUFBQTtPQUNBLFdBQUE7S0FDQSxNQUFBOzs7R0FHQSxPQUFBLE1BQUE7Ozs7RUFJQSxTQUFBLG1CQUFBO0dBQ0EsSUFBQSxNQUFBLFFBQUEsU0FBQTtJQUNBLElBQUEsTUFBQSxPQUFBLE1BQUEsT0FBQTtLQUNBLE9BQUE7OztHQUdBLElBQUEsTUFBQSxRQUFBLFNBQUE7O0lBRUEsSUFBQSxXQUFBLE1BQUEsT0FBQSxNQUFBLEtBQUE7SUFDQSxJQUFBLFdBQUEsTUFBQSxPQUFBLE1BQUEsS0FBQTtJQUNBLElBQUEsU0FBQSxNQUFBLE9BQUEsTUFBQSxHQUFBO0lBQ0EsSUFBQSxTQUFBLE1BQUEsT0FBQSxNQUFBLEdBQUE7O0lBRUEsSUFBQSxZQUFBLFlBQUEsVUFBQSxRQUFBLE9BQUE7SUFDQSxJQUFBLFlBQUEsQ0FBQSxZQUFBLFVBQUEsQ0FBQSxRQUFBLE9BQUE7O0dBRUEsSUFBQSxNQUFBLFFBQUEsU0FBQTs7SUFFQSxJQUFBLE1BQUEsT0FBQSxNQUFBLE1BQUE7S0FDQSxPQUFBOzs7O0dBSUEsT0FBQTs7OztFQUlBLFNBQUEsb0JBQUE7O0dBRUEsSUFBQSxNQUFBOztHQUVBLElBQUEsTUFBQSxRQUFBLFNBQUE7SUFDQSxPQUFBLFNBQUEsU0FBQSxNQUFBLE9BQUEsTUFBQTtNQUNBLE1BQUEsT0FBQSxNQUFBLFlBQUE7SUFDQSxLQUFBLFNBQUE7VUFDQSxJQUFBLE1BQUEsUUFBQSxPQUFBO0lBQ0EsT0FBQTtJQUNBLEtBQUEsU0FBQTtVQUNBLElBQUEsTUFBQSxRQUFBLFNBQUE7SUFDQSxPQUFBLE1BQUEsTUFBQSxLQUFBO0lBQ0EsS0FBQSxNQUFBLE1BQUEsR0FBQTtVQUNBLElBQUEsTUFBQSxRQUFBLFNBQUE7SUFDQSxPQUFBLE1BQUEsTUFBQSxRQUFBLFNBQUEsR0FBQSxTQUFBO0lBQ0EsS0FBQSxNQUFBLE1BQUEsUUFBQSxJQUFBLEdBQUEsU0FBQTs7O0dBR0EsSUFBQSxVQUFBLGNBQUEsTUFBQTtHQUNBLFFBQUEsS0FBQSxXQUFBO0lBQ0EsSUFBQSxNQUFBLFFBQUEsU0FBQTtLQUNBOzs7R0FHQSxPQUFBOzs7O0VBSUEsU0FBQSxnQkFBQTtHQUNBOzs7O0VBSUEsU0FBQSx5QkFBQTtHQUNBLE1BQUEsZ0JBQUE7R0FDQSxJQUFBLENBQUEsVUFBQTs7R0FFQSxTQUFBLFFBQUEsU0FBQSxXQUFBO0lBQ0EsVUFBQSxjQUFBLFFBQUEsU0FBQSxjQUFBO0tBQ0EsSUFBQSxVQUFBO01BQ0EsSUFBQSxhQUFBLFNBQUEsR0FBQTtNQUNBLFdBQUEsYUFBQSxTQUFBLEdBQUE7O0tBRUEsYUFBQSxTQUFBLFFBQUEsU0FBQSxTQUFBO01BQ0EsSUFBQSxVQUFBLE9BQUEsS0FBQSxRQUFBLFdBQUEsS0FBQSxNQUFBO01BQ0EsSUFBQSxVQUFBLE9BQUEsS0FBQSxRQUFBLFdBQUEsS0FBQSxNQUFBO01BQ0EsSUFBQSxLQUFBLElBQUEsV0FBQSxLQUFBLElBQUEsVUFBQTtPQUNBLFFBQUEsS0FBQSxRQUFBO09BQ0EsUUFBQSxZQUFBLFFBQUE7OztLQUdBLE1BQUEsY0FBQSxLQUFBLFFBQUE7Ozs7OztFQU1BLFNBQUEsZ0JBQUE7R0FDQSxtQkFBQTtHQUNBLElBQUEsQ0FBQSxTQUFBLFVBQUEsQ0FBQSxPQUFBLEtBQUEsU0FBQSxRQUFBOztHQUVBLEtBQUEsSUFBQSxJQUFBLEdBQUEsSUFBQSxTQUFBLFFBQUEsS0FBQTtJQUNBLElBQUEsWUFBQSxTQUFBO0lBQ0EsSUFBQSxDQUFBLGlCQUFBLFVBQUEsS0FBQTtJQUNBLElBQUEsUUFBQSxhQUFBOztJQUVBLEtBQUEsSUFBQSxJQUFBLEdBQUEsSUFBQSxVQUFBLGNBQUEsUUFBQSxLQUFBO0tBQ0EsSUFBQSxlQUFBLFVBQUEsY0FBQTtLQUNBLElBQUEsQ0FBQSxvQkFBQSxhQUFBLElBQUEsVUFBQSxLQUFBO0tBQ0EsSUFBQSxXQUFBLGdCQUFBLGNBQUE7O0tBRUEsS0FBQSxJQUFBLElBQUEsR0FBQSxJQUFBLGFBQUEsU0FBQSxRQUFBLEtBQUE7TUFDQSxJQUFBLFVBQUEsYUFBQSxTQUFBO01BQ0EsSUFBQSxDQUFBLFlBQUEsVUFBQTtNQUNBLFNBQUEsU0FBQSxLQUFBOzs7O0dBSUE7Ozs7Ozs7O0VBUUEsU0FBQSxpQkFBQSxJQUFBO0dBQ0EsT0FBQSxNQUFBLHNCQUFBLEtBQUE7Ozs7Ozs7OztFQVNBLFNBQUEsb0JBQUEsSUFBQSxLQUFBO0dBQ0EsSUFBQSxTQUFBLHNCQUFBO0dBQ0EsSUFBQSxTQUFBLHlCQUFBLElBQUE7R0FDQSxPQUFBLE1BQUEsUUFBQSxjQUFBLFFBQUE7Ozs7Ozs7O0VBUUEsU0FBQSxhQUFBLFdBQUE7R0FDQSxJQUFBLFFBQUE7R0FDQSxpQkFBQSxLQUFBO0dBQ0EsTUFBQSxLQUFBLFVBQUE7R0FDQSxNQUFBLE9BQUEsVUFBQTtHQUNBLE1BQUEsZ0JBQUE7R0FDQSxPQUFBOzs7Ozs7Ozs7RUFTQSxTQUFBLGdCQUFBLGNBQUEsT0FBQTtHQUNBLElBQUEsV0FBQTtHQUNBLE1BQUEsY0FBQSxLQUFBO0dBQ0EsU0FBQSxLQUFBLGFBQUE7R0FDQSxTQUFBLE9BQUEsYUFBQTtHQUNBLFNBQUEsV0FBQTtHQUNBLE9BQUE7Ozs7Ozs7O0VBUUEsU0FBQSxZQUFBLFNBQUE7R0FDQSxJQUFBLENBQUEsWUFBQSxVQUFBLE9BQUE7R0FDQSxJQUFBLENBQUEsY0FBQSxVQUFBLE9BQUE7R0FDQSxPQUFBOzs7Ozs7OztFQVFBLFNBQUEsWUFBQSxTQUFBO0dBQ0EsSUFBQSxNQUFBLFFBQUEsU0FBQTtJQUNBLElBQUEsUUFBQSxTQUFBLFNBQUEsTUFBQSxPQUFBLE1BQUE7TUFDQSxNQUFBLE9BQUEsTUFBQTtJQUNBLElBQUEsT0FBQSxPQUFBLEtBQUEsUUFBQTtJQUNBLElBQUEsQ0FBQSxLQUFBLFFBQUEsUUFBQTtLQUNBLE9BQUE7O1VBRUEsSUFBQSxNQUFBLFFBQUEsU0FBQTtJQUNBLElBQUEsT0FBQSxPQUFBLEtBQUEsUUFBQTtJQUNBLElBQUEsQ0FBQSxLQUFBLFVBQUEsTUFBQSxNQUFBLE1BQUEsTUFBQSxNQUFBLEtBQUE7S0FDQSxPQUFBOztVQUVBLElBQUEsTUFBQSxRQUFBLFNBQUE7SUFDQSxJQUFBLE1BQUEsY0FBQSxRQUFBLFFBQUEsT0FBQSxDQUFBLEdBQUE7S0FDQSxPQUFBOzs7R0FHQSxPQUFBOzs7Ozs7OztFQVFBLFNBQUEsY0FBQSxTQUFBO0dBQ0EsSUFBQSxPQUFBLEtBQUEsU0FBQSxXQUFBLEdBQUE7SUFDQSxPQUFBOzs7R0FHQSxLQUFBLElBQUEsSUFBQSxHQUFBLElBQUEsUUFBQSxlQUFBLFFBQUEsS0FBQTtJQUNBLElBQUEsQ0FBQSxhQUFBLFFBQUEsZUFBQSxLQUFBO0tBQ0EsT0FBQTs7O0dBR0EsT0FBQTs7Ozs7Ozs7RUFRQSxTQUFBLGFBQUEsVUFBQTtHQUNBLElBQUEsU0FBQSxRQUFBLFNBQUEsY0FBQTs7R0FFQSxJQUFBLENBQUEsT0FBQSxTQUFBO0lBQ0EsT0FBQTs7R0FFQSxJQUFBLFFBQUEsU0FBQSxPQUFBLE9BQUE7R0FDQSxJQUFBLE9BQUEsWUFBQSxLQUFBO0lBQ0EsSUFBQSxTQUFBLFNBQUEsT0FBQTtLQUNBLE9BQUE7O1VBRUEsSUFBQSxPQUFBLFlBQUEsS0FBQTtJQUNBLElBQUEsU0FBQSxTQUFBLE9BQUE7S0FDQSxPQUFBOztVQUVBLElBQUEsT0FBQSxZQUFBLEtBQUE7SUFDQSxJQUFBLFNBQUEsU0FBQSxPQUFBO0tBQ0EsT0FBQTs7O0dBR0EsT0FBQTs7Ozs7Ozs7RUFRQSxTQUFBLGVBQUEsU0FBQTs7R0FFQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFFBQUE7O0dBRUEsSUFBQSxNQUFBLFFBQUEsT0FBQTs7SUFFQSxJQUFBLE1BQUE7SUFDQSxJQUFBLE1BQUEsSUFBQSxRQUFBLFNBQUEsR0FBQTs7VUFFQSxJQUFBLE1BQUEsUUFBQSxTQUFBO0lBQ0EsSUFBQSxNQUFBO0lBQ0EsSUFBQSxNQUFBLFNBQUEsU0FBQSxNQUFBLE9BQUEsTUFBQTtNQUNBLE1BQUEsT0FBQSxNQUFBOztVQUVBLElBQUEsTUFBQSxRQUFBLFNBQUE7O0lBRUEsSUFBQSxNQUFBLE1BQUEsTUFBQTtJQUNBLElBQUEsTUFBQSxNQUFBLE1BQUE7O1dBRUEsSUFBQSxNQUFBLFFBQUEsU0FBQTs7SUFFQSxJQUFBLE1BQUEsVUFBQSxNQUFBO0tBQ0EsT0FBQTs7SUFFQSxJQUFBLE1BQUEsTUFBQTtJQUNBLElBQUEsTUFBQSxJQUFBLFFBQUEsU0FBQSxHQUFBOztHQUVBLE9BQUEsb0JBQUEsTUFBQSxLQUFBOzs7Ozs7Ozs7O0VBVUEsU0FBQSxvQkFBQSxNQUFBLEtBQUEsS0FBQTtHQUNBLElBQUEsS0FBQSxTQUFBLE1BQUE7SUFDQSxPQUFBO1VBQ0EsSUFBQSxDQUFBLEtBQUEsU0FBQSxNQUFBO0lBQ0EsT0FBQTs7R0FFQSxRQUFBLEtBQUEsS0FBQSxPQUFBLElBQUEsS0FBQTs7OztFQUlBLFNBQUEsYUFBQTtHQUNBLElBQUEsYUFBQTtHQUNBLGlCQUFBLFFBQUEsU0FBQSxXQUFBO0lBQ0EsVUFBQSxjQUFBLFFBQUEsU0FBQSxjQUFBO0tBQ0EsYUFBQSxTQUFBLFFBQUEsU0FBQSxTQUFBO01BQ0EsV0FBQSxLQUFBLFFBQUE7Ozs7R0FJQSxPQUFBLFdBQUE7Ozs7Ozs7OztFQVNBLFNBQUEsYUFBQSxTQUFBLGNBQUE7R0FDQSxJQUFBLGdCQUFBLE9BQUEsS0FBQSxRQUFBO1dBQ0EsT0FBQTs7R0FFQSxJQUFBLFVBQUE7SUFDQSxpQkFBQSxhQUFBLE9BQUE7SUFDQSxTQUFBLGdCQUFBO0lBQ0E7OztHQUdBLFFBQUEsZUFBQSxRQUFBLFNBQUEsZUFBQTtJQUNBLFdBQUE7S0FDQSxRQUFBLGNBQUEsY0FBQTtLQUNBLDhCQUFBLGNBQUEsUUFBQTtLQUNBLFFBQUEsY0FBQSxjQUFBLE9BQUE7OztHQUdBLFdBQUE7O0dBRUEsT0FBQTs7Ozs7O0VBTUEsU0FBQSxZQUFBO0dBQ0EsSUFBQSxpQkFBQTtHQUNBLElBQUEsU0FBQTs7O0dBR0EsaUJBQUEsUUFBQSxTQUFBLFdBQUE7SUFDQSxVQUFBLGNBQUEsUUFBQSxTQUFBLGNBQUE7S0FDQSxhQUFBLFNBQUEsUUFBQSxTQUFBLFNBQUE7TUFDQSxlQUFBLEtBQUEsUUFBQTtNQUNBLElBQUEsV0FBQSxTQUFBO09BQ0EsUUFBQSxlQUFBO09BQ0EsYUFBQSxTQUFBOztLQUVBOzs7R0FHQSxJQUFBLG9CQUFBOzs7O0VBSUEsU0FBQSxnQkFBQTs7R0FFQSxJQUFBLGFBQUE7O0dBRUEsSUFBQSxlQUFBOztHQUVBLEtBQUEsSUFBQSxJQUFBLEdBQUEsSUFBQSxhQUFBLFFBQUEsS0FBQTtJQUNBLEtBQUEsSUFBQSxJQUFBLEdBQUEsSUFBQSxhQUFBLEdBQUEsY0FBQSxRQUFBLEtBQUE7S0FDQSxJQUFBLFlBQUE7O0tBRUEsVUFBQSxPQUFBLGFBQUEsR0FBQSxjQUFBLEdBQUE7S0FDQSxJQUFBLGdCQUFBO0tBQ0EsSUFBQSxJQUFBLElBQUEsR0FBQSxJQUFBLGFBQUEsR0FBQSxjQUFBLEdBQUEsU0FBQSxRQUFBLEtBQUE7O01BRUEsS0FBQSxJQUFBLElBQUEsR0FBQSxJQUFBLGFBQUEsR0FBQSxjQUFBLEdBQUEsU0FBQSxHQUFBLGVBQUEsUUFBQSxLQUFBOztPQUVBLElBQUEsYUFBQSxHQUFBLGNBQUEsR0FBQSxTQUFBLEdBQUEsZUFBQSxHQUFBLGdCQUFBLEVBQUE7Ozs7UUFJQSxJQUFBLFlBQUEsYUFBQSxHQUFBLGNBQUEsR0FBQSxTQUFBLEdBQUE7O1FBRUEsSUFBQSxXQUFBLE9BQUEsS0FBQSxXQUFBLE9BQUE7UUFDQSxJQUFBLFlBQUEsYUFBQSxHQUFBLGNBQUEsR0FBQSxTQUFBLEdBQUEsZUFBQSxHQUFBOztRQUVBLElBQUEsWUFBQSxJQUFBO1NBQ0EsWUFBQTs7UUFFQSxjQUFBLEtBQUEsQ0FBQSxXQUFBLFNBQUEsV0FBQTs7Ozs7Ozs7SUFRQSxVQUFBLFdBQUE7O0lBRUEsV0FBQSxLQUFBOzs7OztHQUtBLFFBQUEsSUFBQTtHQUNBLE9BQUE7Ozs7RUFJQSxTQUFBLHFCQUFBLGFBQUE7O0dBRUEsSUFBQSxtQkFBQTs7R0FFQSxJQUFBLFdBQUE7R0FDQSxJQUFBLGFBQUE7R0FDQSxJQUFBO0dBQ0EsS0FBQSxJQUFBLElBQUEsR0FBQSxJQUFBLGlCQUFBLFFBQUEsSUFBQTtJQUNBLElBQUEsaUJBQUEsR0FBQSxRQUFBLGFBQUE7O0tBRUEsV0FBQSxDQUFBLGlCQUFBLEdBQUE7O0tBRUEsSUFBQSxJQUFBLElBQUEsR0FBQSxJQUFBLGlCQUFBLEdBQUEsU0FBQSxRQUFBLElBQUE7Ozs7O01BS0EsV0FBQSxLQUFBLGlCQUFBLEdBQUEsU0FBQSxHQUFBO01BQ0EsU0FBQSxLQUFBLGlCQUFBLEdBQUEsU0FBQSxHQUFBOzs7OztHQUtBLElBQUEsV0FBQSxTQUFBLElBQUE7SUFDQSxhQUFBLFdBQUEsTUFBQSxFQUFBO0lBQ0EsSUFBQSxXQUFBLEtBQUEsTUFBQSxXQUFBLE9BQUE7SUFDQSxRQUFBLElBQUE7SUFDQSxNQUFBLE9BQUEsUUFBQTtJQUNBLEtBQUEsSUFBQSxJQUFBLEdBQUEsSUFBQSxXQUFBLFFBQUEsSUFBQTtLQUNBLElBQUEsSUFBQSxZQUFBLEVBQUE7TUFDQSxXQUFBLEtBQUE7O0lBRUEsUUFBQSxJQUFBOzs7O0dBSUEsTUFBQSxTQUFBO0dBQ0EsTUFBQSxTQUFBO0dBQ0EsTUFBQSxPQUFBLFFBQUE7R0FDQSxNQUFBLE9BQUEsQ0FBQTs7R0FFQSxNQUFBLEtBQUEsR0FBQSxRQUFBLFNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbnpCQSxDQUFBLFdBQUE7Q0FDQTs7Q0FFQSxRQUFBLE9BQUE7R0FDQSxRQUFBLE9BQUE7Ozs7Ozs7Q0FPQSxTQUFBLElBQUEsWUFBQSxNQUFBLFFBQUE7OztFQUdBLElBQUE7RUFDQSxJQUFBLGFBQUE7R0FDQSxNQUFBO0dBQ0EsUUFBQSxJQUFBLE9BQUEsS0FBQSxPQUFBLENBQUEsV0FBQTtHQUNBLFdBQUEsT0FBQSxLQUFBLFVBQUE7O0VBRUEsSUFBQSxVQUFBO0VBQ0EsSUFBQSxrQkFBQTtFQUNBLElBQUE7RUFDQSxJQUFBLGNBQUE7RUFDQSxJQUFBLGtCQUFBLENBQUE7RUFDQSxJQUFBOzs7RUFHQSxPQUFBO0dBQ0EsZUFBQTtHQUNBLFdBQUE7R0FDQSxXQUFBO0dBQ0EsWUFBQTtHQUNBLHFCQUFBOzs7O0VBSUEsU0FBQSxnQkFBQTtHQUNBLFdBQUEsU0FBQTs7R0FFQSxNQUFBLElBQUEsT0FBQSxLQUFBLElBQUEsU0FBQSxlQUFBLGVBQUE7O0dBRUEsT0FBQSxLQUFBLE1BQUEsWUFBQSxLQUFBLGdCQUFBLFdBQUE7SUFDQSxXQUFBLE9BQUEsSUFBQTs7O0dBR0EsT0FBQSxLQUFBLE1BQUEsWUFBQSxLQUFBLGtCQUFBLFdBQUE7SUFDQSxXQUFBLFNBQUEsSUFBQTs7O0dBR0EsT0FBQSxLQUFBLE1BQUEsWUFBQSxLQUFBLHFCQUFBLFdBQUE7SUFDQSxXQUFBLFlBQUEsSUFBQTs7O01BR0EsT0FBQSxLQUFBLE1BQUEsWUFBQSxLQUFBLFNBQUEsV0FBQTtVQUNBLElBQUEsYUFBQTtLQUNBOzs7OztNQUtBLFVBQUE7R0FDQSxrQkFBQTs7Ozs7OztFQU9BLFNBQUEsWUFBQTtHQUNBLE9BQUEsSUFBQTs7Ozs7OztFQU9BLFNBQUEsVUFBQSxRQUFBO0dBQ0EsT0FBQSxLQUFBLE1BQUEsUUFBQSxLQUFBO0dBQ0EsSUFBQSxVQUFBOzs7Ozs7Ozs7O0VBVUEsU0FBQSxXQUFBLFNBQUEsY0FBQSxhQUFBLEtBQUEsU0FBQTtHQUNBLElBQUEsS0FBQSxRQUFBO0dBQ0EsSUFBQSxDQUFBLFFBQUEsZUFBQSxLQUFBOztJQUVBLFVBQUEsU0FBQSxjQUFBO1VBQ0E7SUFDQSxJQUFBLGdCQUFBLFFBQUEsT0FBQSxDQUFBLEdBQUE7O0tBRUEsYUFBQTs7O0dBR0EsUUFBQSxJQUFBLFFBQUEsYUFBQSxhQUFBO0dBQ0EsUUFBQSxJQUFBLFdBQUEsaUJBQUE7Ozs7Ozs7RUFPQSxTQUFBLG9CQUFBLGdCQUFBO0dBQ0EsS0FBQSxJQUFBLE9BQUEsU0FBQTtJQUNBLElBQUEsUUFBQSxlQUFBLE1BQUE7S0FDQSxNQUFBLFNBQUEsS0FBQTtLQUNBLElBQUEsZUFBQSxRQUFBLFFBQUEsQ0FBQSxHQUFBO01BQ0EsY0FBQTs7Ozs7Ozs7Ozs7RUFXQSxTQUFBLFVBQUEsU0FBQSxjQUFBLFNBQUE7R0FDQSxJQUFBLE1BQUEsYUFBQSxRQUFBO0dBQ0EsSUFBQSxPQUFBLGFBQUEsUUFBQTs7R0FFQSxJQUFBLFNBQUEsSUFBQSxPQUFBLEtBQUEsT0FBQTtJQUNBLFVBQUEsSUFBQSxPQUFBLEtBQUEsT0FBQSxLQUFBO0lBQ0EsS0FBQTs7OztHQUlBLE9BQUEsS0FBQSxNQUFBLFlBQUEsUUFBQSxTQUFBLFdBQUE7SUFDQSxZQUFBLFNBQUEsY0FBQSxRQUFBOzs7R0FHQSxRQUFBLFFBQUEsTUFBQTs7O0VBR0EsU0FBQSxhQUFBLEtBQUE7R0FDQSxJQUFBLFlBQUE7R0FDQSxJQUFBLEtBQUEsV0FBQSxLQUFBO0lBQ0EsT0FBQSxLQUFBLE1BQUEsS0FBQSxXQUFBLE9BQUE7VUFDQTtJQUNBLE9BQUEsS0FBQSxNQUFBLEtBQUEsV0FBQSxPQUFBOztHQUVBLE9BQUE7Ozs7Ozs7RUFPQSxTQUFBLGFBQUEsSUFBQTtHQUNBLFFBQUEsSUFBQSxPQUFBO0dBQ0EsZ0JBQUEsT0FBQSxnQkFBQSxRQUFBLEtBQUE7Ozs7Ozs7RUFPQSxTQUFBLGNBQUEsSUFBQTtHQUNBLFFBQUEsSUFBQSxPQUFBO0dBQ0EsZ0JBQUEsS0FBQTs7O0dBR0EsSUFBQSxhQUFBO0lBQ0EsSUFBQSxnQkFBQSxRQUFBLG9CQUFBLENBQUEsR0FBQTtLQUNBOzs7Ozs7Ozs7OztFQVdBLFNBQUEsWUFBQSxTQUFBLGNBQUEsUUFBQSxTQUFBO0dBQ0EsSUFBQSxhQUFBO0lBQ0E7O0lBRUEsSUFBQSxRQUFBLE1BQUEsaUJBQUE7S0FDQTs7Ozs7R0FLQSxXQUFBLFdBQUEsd0JBQUE7O0dBRUEsVUFBQSxJQUFBLFFBQUE7SUFDQSxTQUFBO0lBQ0EsYUFBQSxJQUFBLE9BQUEsS0FBQSxLQUFBLENBQUEsSUFBQTthQUNBLFFBQUE7YUFDQSxnQkFBQTs7O0dBR0EsUUFBQSxLQUFBLEtBQUE7R0FDQSxjQUFBO0dBQ0Esa0JBQUEsUUFBQTs7OztFQUlBLFNBQUEsZUFBQTtHQUNBLFFBQUE7R0FDQSxjQUFBOzs7Ozs7OztFQVFBLFNBQUEsYUFBQSxRQUFBOzs7Ozs7Ozs7O0dBVUEsUUFBQSxJQUFBLE9BQUEsS0FBQSxZQUFBLDZFQUFBLE9BQUEsT0FBQTtVQUNBLElBQUEsT0FBQSxLQUFBLEtBQUEsSUFBQTtVQUNBLElBQUEsT0FBQSxLQUFBLE1BQUEsR0FBQTtVQUNBLElBQUEsT0FBQSxLQUFBLE1BQUEsSUFBQTs7Ozs7Ozs7O0VBU0EsU0FBQSxhQUFBLEdBQUE7O0dBRUEsSUFBQSxVQUFBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7R0FFQSxPQUFBLFFBQUEsSUFBQSxRQUFBOzs7Ozs7O0VBT0EsU0FBQSxlQUFBO0dBQ0EsT0FBQSxNQUFBLEtBQUEsU0FBQSxTQUFBLElBQUEsTUFBQSxHQUFBOzs7Ozs7OztFQVFBLFNBQUEsaUJBQUEsS0FBQTtHQUNBLElBQUEsb0JBQUE7R0FDQSxPQUFBLE9BQUEsSUFBQSxxQkFBQTs7Ozs7OztFQU9BLFNBQUEsY0FBQTtHQUNBLE9BQUE7T0FDQTtXQUNBLGFBQUE7V0FDQSxhQUFBO1dBQ0EsU0FBQTtpQkFDQSxFQUFBLFlBQUE7OztJQUdBO1dBQ0EsYUFBQTtXQUNBLGFBQUE7V0FDQSxTQUFBO2lCQUNBLEVBQUEsWUFBQTs7Ozs7Ozs7Ozs7RUFXQSxTQUFBLGtCQUFBO0dBQ0EsT0FBQTtJQUNBO0tBQ0EsZUFBQTtLQUNBLGVBQUE7S0FDQSxXQUFBO01BQ0E7T0FDQSxTQUFBOzs7O0lBSUE7S0FDQSxlQUFBO0tBQ0EsZUFBQTtLQUNBLFdBQUE7TUFDQTtPQUNBLFNBQUE7Ozs7SUFJQTtLQUNBLGVBQUE7S0FDQSxlQUFBO0tBQ0EsV0FBQTtNQUNBO09BQ0EsY0FBQTs7OztJQUlBO0tBQ0EsZUFBQTtLQUNBLGVBQUE7S0FDQSxXQUFBO01BQ0E7T0FDQSxjQUFBLENBQUE7O01BRUE7T0FDQSxhQUFBOzs7O0lBSUE7S0FDQSxlQUFBO0tBQ0EsZUFBQTtLQUNBLFdBQUE7TUFDQTtPQUNBLGNBQUE7Ozs7SUFJQTtLQUNBLGVBQUE7S0FDQSxlQUFBO0tBQ0EsV0FBQTtNQUNBO09BQ0EsY0FBQTs7OztJQUlBO0tBQ0EsZUFBQTtLQUNBLGVBQUE7S0FDQSxXQUFBO01BQ0E7T0FDQSxjQUFBOzs7O0lBSUE7S0FDQSxlQUFBO0tBQ0EsZUFBQTtLQUNBLFdBQUE7TUFDQTtPQUNBLFNBQUE7O01BRUE7T0FDQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwWUEsQ0FBQSxXQUFBO0NBQ0E7OztDQUdBLFFBQUEsT0FBQTtHQUNBLHlGQUFBLFNBQUEscUJBQUE7TUFDQSxlQUFBLGdCQUFBOzs7R0FHQSxjQUFBLGFBQUEsS0FBQTs7O0dBR0EsUUFBQSxPQUFBLG9CQUFBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7Ozs7R0FJQSxRQUFBLE9BQUEsb0JBQUEsVUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxVQUFBOzs7O0dBSUEsUUFBQSxPQUFBLGVBQUEsVUFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0EsQ0FBQSxXQUFBO0NBQ0E7O0NBRUEsUUFBQSxPQUFBO0dBQ0EsUUFBQSxPQUFBOzs7Ozs7Ozs7Q0FTQSxTQUFBLElBQUEsUUFBQSxRQUFBLE1BQUE7OztFQUdBLE9BQUE7R0FDQSxjQUFBO1lBQ0EsWUFBQTtZQUNBLGtCQUFBO1lBQ0EsZUFBQTs7Ozs7OztFQU9BLFNBQUEsYUFBQSxTQUFBO1lBQ0EsT0FBQSxDQUFBLE9BQUEsWUFBQSxTQUFBLFNBQUEsTUFBQTs7Ozs7OztRQU9BLFNBQUEsV0FBQSxTQUFBO1lBQ0EsT0FBQSxDQUFBLE9BQUEsVUFBQSxTQUFBLFNBQUEsTUFBQTs7Ozs7OztRQU9BLFNBQUEsaUJBQUEsS0FBQTtZQUNBLEtBQUEsTUFBQTtZQUNBLFdBQUEsSUFBQSxPQUFBLE1BQUEsSUFBQSxTQUFBOzs7Ozs7OztRQVFBLFNBQUEsY0FBQSxPQUFBO1lBQ0EsT0FBQTtnQkFDQSxPQUFBO2dCQUNBLGFBQUE7Z0JBQ0EsTUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRBLENBQUEsV0FBQTtDQUNBOztDQUVBLFFBQUEsT0FBQTtHQUNBLFdBQUEsaUJBQUE7Ozs7Ozs7Ozs7O0NBV0EsU0FBQSxjQUFBLFlBQUEsUUFBQSxjQUFBLE1BQUE7RUFDQSxJQUFBLEtBQUE7OztFQUdBLElBQUEsV0FBQSxLQUFBOzs7RUFHQSxHQUFBLGNBQUE7R0FDQSxFQUFBLE1BQUEsbUJBQUEsT0FBQTtHQUNBLEVBQUEsTUFBQSxVQUFBLE9BQUE7O0VBRUEsR0FBQSxlQUFBO0VBQ0EsR0FBQSxjQUFBO0VBQ0EsR0FBQSxTQUFBO0VBQ0EsR0FBQSxpQkFBQTs7RUFFQTs7O0VBR0EsU0FBQSxXQUFBOztHQUVBLFdBQUEsSUFBQSx1QkFBQSxXQUFBO0lBQ0EsV0FBQSxLQUFBOzs7Ozs7Ozs7RUFTQSxTQUFBLFlBQUEsTUFBQTtHQUNBLE9BQUEsYUFBQSxZQUFBOzs7Ozs7OztFQVFBLFNBQUEsYUFBQSxLQUFBO0dBQ0EsT0FBQTtJQUNBLEtBQUE7S0FDQSxPQUFBO0lBQ0EsS0FBQTtLQUNBLE9BQUEsS0FBQSxVQUFBO0lBQ0EsS0FBQTtLQUNBLE9BQUE7SUFDQSxLQUFBO0tBQ0EsT0FBQSxLQUFBLFVBQUE7SUFDQSxLQUFBO0tBQ0EsT0FBQTtJQUNBLEtBQUE7S0FDQSxPQUFBO0lBQ0E7S0FDQSxPQUFBOzs7OztFQUtBLFNBQUEsU0FBQTtHQUNBLEtBQUE7R0FDQSxXQUFBO0dBQ0EsT0FBQSxHQUFBOzs7O0VBSUEsU0FBQSxpQkFBQTtHQUNBLE9BQUEsR0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRkEsQ0FBQSxXQUFBO0NBQ0E7O0NBRUEsUUFBQSxPQUFBO0dBQ0EsV0FBQSxzQkFBQTs7Ozs7Ozs7OztDQVVBLFNBQUEsbUJBQUEsTUFBQSxRQUFBLFFBQUE7RUFDQSxJQUFBLEtBQUE7O0VBRUEsSUFBQSxXQUFBOzs7RUFHQSxHQUFBLFVBQUE7RUFDQSxHQUFBLFdBQUE7RUFDQSxHQUFBLGdCQUFBO0VBQ0EsR0FBQSxjQUFBOztFQUVBOzs7RUFHQSxTQUFBLFdBQUE7R0FDQSxHQUFBLFVBQUE7R0FDQTtHQUNBO0dBQ0E7Ozs7RUFJQSxTQUFBLGdCQUFBO0dBQ0EsT0FBQSxjQUFBLEtBQUEsU0FBQSxLQUFBO0lBQ0EsR0FBQSxXQUFBLElBQUEsS0FBQTtJQUNBO0lBQ0E7TUFDQSxTQUFBLEtBQUE7SUFDQSxLQUFBLE1BQUE7Ozs7O0VBS0EsU0FBQSxxQkFBQTtHQUNBLE9BQUEsbUJBQUEsS0FBQSxTQUFBLEtBQUE7SUFDQSxHQUFBLGdCQUFBLElBQUEsS0FBQTtJQUNBO0lBQ0E7TUFDQSxTQUFBLEtBQUE7SUFDQSxLQUFBLE1BQUE7Ozs7O0VBS0EsU0FBQSxtQkFBQTtHQUNBLE9BQUEsaUJBQUEsS0FBQSxTQUFBLEtBQUE7SUFDQSxHQUFBLGNBQUEsSUFBQSxLQUFBO0lBQ0E7SUFDQTtNQUNBLFNBQUEsS0FBQTtJQUNBLEtBQUEsTUFBQTs7Ozs7RUFLQSxTQUFBLGdCQUFBO0dBQ0EsSUFBQSxXQUFBLEdBQUE7R0FDQSxHQUFBLFVBQUE7O0dBRUEsR0FBQSxTQUFBLFFBQUEsU0FBQSxTQUFBOztJQUVBLFFBQUEsY0FBQSxPQUFBLFFBQUE7S0FDQSxLQUFBLE9BQUE7O0lBRUEsS0FBQSxJQUFBLElBQUEsR0FBQSxJQUFBLEdBQUEsY0FBQSxRQUFBLEtBQUE7S0FDQSxJQUFBLGVBQUEsR0FBQSxjQUFBO0tBQ0EsSUFBQSxhQUFBLE1BQUEsUUFBQSxlQUFBLGdCQUFBO01BQ0EsUUFBQSxXQUFBLGFBQUE7TUFDQTs7OztJQUlBLEtBQUEsSUFBQSxJQUFBLEdBQUEsSUFBQSxHQUFBLFlBQUEsUUFBQSxLQUFBO0tBQ0EsSUFBQSxhQUFBLEdBQUEsWUFBQTtLQUNBLElBQUEsV0FBQSxNQUFBLFFBQUEsZUFBQSxjQUFBO01BQ0EsUUFBQSxhQUFBLFdBQUE7TUFDQTs7OztJQUlBLFFBQUEsVUFBQSxRQUFBLGFBQUE7S0FDQSxRQUFBLGVBQUEsV0FBQTtLQUNBLFFBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEdBLENBQUEsV0FBQTtDQUNBOztDQUVBLFFBQUEsT0FBQTtHQUNBLElBQUE7OztDQUdBLFNBQUEsVUFBQSxjQUFBO0VBQ0EsYUFBQSxnQkFBQTs7OztDQUdBLFNBQUEsWUFBQTtFQUNBLE9BQUE7R0FDQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0tBQ0EsS0FBQTtLQUNBLFlBQUE7S0FDQSxjQUFBO0tBQ0EsYUFBQTtLQUNBLE1BQUE7TUFDQSxRQUFBOzs7Ozs7S0FNQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEZsb29kIE1vbml0b3JpbmcgU3lzdGVtXG4gKiBWZXJzaW9uIDAuMC4xIChEdXl1bmcpXG4gKlxuICogQ29weXJpZ2h0IChDKSBUZWFtIE5lcHR1bmVcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogQGF1dGhvciAgICAgQW5kcmV3IER5ZXIgPGFuZHJld0BkeWVyZ3JvdXAuY29tLmF1PlxuICogQHZlcnNpb24gICAgMC4wLjFcbiAqIEBjb3B5cmlnaHQgIFRlYW0gTmVwdHVuZSAoMjAxNSlcbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hY2xlbC9kZWNvMzgwMVxuICovXG4oZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIFxuICAgIC8qKlxuICAgICAgICAqIEBuZ2RvYyBvdmVydmlld1xuICAgICAgICAqIEBuYW1lIGFwcC5tb2R1bGVcbiAgICAgICAgKiBAZGVzY3JpcHRpb24gQXBwIG1vZHVsZSwgdGllcyB0b2dldGhlciBhbGwgc3VibW9kdWxlc1xuICAgICoqL1xuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXG4gICAgICAgIC8vIFNoYXJlZCBtb2R1bGVzXG4gICAgICAgICdhcHAuY29yZScsXG4gICAgICAgICdhcHAuZ3VpJyxcbiAgICAgICAgJ2FwcC5hdXRoJyxcbiAgICAgICAgJ2FwcC5uYXYnLFxuICAgICAgICBcbiAgICAgICAgLy8gRmVhdHVyZSBtb2R1bGVzICAgICAgICBcbiAgICAgICAgJ2FwcC5kYXNoYm9hcmQnLFxuICAgICAgICAnYXBwLmNvbmZpZycsXG4gICAgICAgICdhcHAud2FybmluZ3MnLFxuICAgICAgICAnYXBwLmFkbWluJ1xuICAgIF0pO1xufSkoKTsiLCIvKipcbiAqIEZsb29kIE1vbml0b3JpbmcgU3lzdGVtXG4gKiBWZXJzaW9uIDAuMC4xIChEdXl1bmcpXG4gKlxuICogQ29weXJpZ2h0IChDKSBUZWFtIE5lcHR1bmVcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogQGF1dGhvciAgICAgQW5kcmV3IER5ZXIgPGFuZHJld0BkeWVyZ3JvdXAuY29tLmF1PlxuICogQHZlcnNpb24gICAgMC4wLjFcbiAqIEBjb3B5cmlnaHQgIFRlYW0gTmVwdHVuZSAoMjAxNSlcbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hY2xlbC9kZWNvMzgwMVxuICovXG4oZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG4gICAgLyoqXG4gICAgICAgICogQG5nZG9jIG92ZXJ2aWV3XG4gICAgICAgICogQG5hbWUgYXBwLm1vZHVsZTphZG1pblxuICAgICAgICAqIEBkZXNjcmlwdGlvbiBNb2R1bGUgZm9yIGFkbWluIHBhZ2VcbiAgICAqKi9cblx0YW5ndWxhci5tb2R1bGUoJ2FwcC5hZG1pbicsIFtcblx0XHQvLyBTaGFyZWQgbW9kdWxlc1xuXHRcdCdhcHAuY29yZScsXG5cdFx0J2FwcC5ndWknXG5cdF0pO1xufSkoKTsiLCIvKipcbiAqIEZsb29kIE1vbml0b3JpbmcgU3lzdGVtXG4gKiBWZXJzaW9uIDAuMC4xIChEdXl1bmcpXG4gKlxuICogQ29weXJpZ2h0IChDKSBUZWFtIE5lcHR1bmVcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogQGF1dGhvciAgICAgQW5kcmV3IER5ZXIgPGFuZHJld0BkeWVyZ3JvdXAuY29tLmF1PlxuICogQHZlcnNpb24gICAgMC4wLjFcbiAqIEBjb3B5cmlnaHQgIFRlYW0gTmVwdHVuZSAoMjAxNSlcbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hY2xlbC9kZWNvMzgwMVxuICovXG4oZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdC8qKlxuICAgICAgICAqIEBuZ2RvYyBvdmVydmlld1xuICAgICAgICAqIEBuYW1lIGFwcC5tb2R1bGU6YXV0aFxuICAgICAgICAqIEBkZXNjcmlwdGlvbiBNb2R1bGUgZm9yIGF1dGhlbnRpY2F0aW9uIGFjcm9zcyBhcHBcbiAgICAqKi9cblx0YW5ndWxhci5tb2R1bGUoJ2FwcC5hdXRoJywgW10pO1xufSkoKTsiLCIvKipcbiAqIEZsb29kIE1vbml0b3JpbmcgU3lzdGVtXG4gKiBWZXJzaW9uIDAuMC4xIChEdXl1bmcpXG4gKlxuICogQ29weXJpZ2h0IChDKSBUZWFtIE5lcHR1bmVcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogQGF1dGhvciAgICAgQW5kcmV3IER5ZXIgPGFuZHJld0BkeWVyZ3JvdXAuY29tLmF1PlxuICogQHZlcnNpb24gICAgMC4wLjFcbiAqIEBjb3B5cmlnaHQgIFRlYW0gTmVwdHVuZSAoMjAxNSlcbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hY2xlbC9kZWNvMzgwMVxuICovXG4oZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG4gICAgLyoqXG4gICAgICAgICogQG5nZG9jIG92ZXJ2aWV3XG4gICAgICAgICogQG5hbWUgYXBwLm1vZHVsZTpjb25maWdcbiAgICAgICAgKiBAZGVzY3JpcHRpb24gTW9kdWxlIGZvciBjb25maWcgcGFnZVxuICAgICoqL1xuXHRhbmd1bGFyLm1vZHVsZSgnYXBwLmNvbmZpZycsIFtcblx0XHQvLyBTaGFyZWQgbW9kdWxlc1xuXHRcdCdhcHAuY29yZScsXG5cdFx0J2FwcC5ndWknLFxuXG4gICAgICAgIC8vIDNyZC1wYXJ0eSBtb2R1bGVzXG4gICAgICAgICd1aS50cmVlJ1xuXHRdKTtcbn0pKCk7IiwiLyoqXG4gKiBGbG9vZCBNb25pdG9yaW5nIFN5c3RlbVxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxuICpcbiAqIENvcHlyaWdodCAoQykgVGVhbSBOZXB0dW5lXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIEBhdXRob3IgICAgIEFuZHJldyBEeWVyIDxhbmRyZXdAZHllcmdyb3VwLmNvbS5hdT5cbiAqIEB2ZXJzaW9uICAgIDAuMC4xXG4gKiBAY29weXJpZ2h0ICBUZWFtIE5lcHR1bmUgKDIwMTUpXG4gKiBAbGluayAgICAgICBodHRwczovL2dpdGh1Yi5jb20vYWNsZWwvZGVjbzM4MDFcbiAqL1xuKGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdFxuICAgIC8qKlxuICAgICAgICAqIEBuZ2RvYyBvdmVydmlld1xuICAgICAgICAqIEBuYW1lIGFwcC5tb2R1bGU6Y29yZVxuICAgICAgICAqIEBkZXNjcmlwdGlvbiBNb2R1bGUgZm9yIGNvcmUgYXBwbGljYXRpb24gY29tcG9uZW50c1xuICAgICoqL1xuXHRhbmd1bGFyLm1vZHVsZSgnYXBwLmNvcmUnLCBbXG5cdFx0Ly8gM3JkIHBhcnR5IG1vZHVsZXNcblx0XHQndWkucm91dGVyJ1xuXHRdKTtcbn0pKCk7IiwiLyoqXG4gKiBGbG9vZCBNb25pdG9yaW5nIFN5c3RlbVxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxuICpcbiAqIENvcHlyaWdodCAoQykgVGVhbSBOZXB0dW5lXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIEBhdXRob3IgICAgIEFuZHJldyBEeWVyIDxhbmRyZXdAZHllcmdyb3VwLmNvbS5hdT5cbiAqIEB2ZXJzaW9uICAgIDAuMC4xXG4gKiBAY29weXJpZ2h0ICBUZWFtIE5lcHR1bmUgKDIwMTUpXG4gKiBAbGluayAgICAgICBodHRwczovL2dpdGh1Yi5jb20vYWNsZWwvZGVjbzM4MDFcbiAqL1xuKGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdFxuXHQvKipcbiAgICAgICAgKiBAbmdkb2Mgb3ZlcnZpZXdcbiAgICAgICAgKiBAbmFtZSBhcHAubW9kdWxlOmRhc2hib2FyZFxuICAgICAgICAqIEBkZXNjcmlwdGlvbiBNb2R1bGUgZm9yIGRhc2hib2FyZCBwYWdlXG4gICAgKiovXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAuZGFzaGJvYXJkJywgW1xuXHRcdC8vIFNoYXJlZCBtb2R1bGVzXG5cdFx0J2FwcC5jb3JlJyxcblx0XHQnYXBwLmd1aScsXG5cdFx0XG5cdFx0Ly8gM3JkLXBhcnR5IG1vZHVsZXNcblx0XHQnY2hhcnQuanMnLFxuXHRcdCd1aS5pbmRldGVybWluYXRlJ1xuXHRdKTtcbn0pKCk7IiwiLyoqXG4gKiBGbG9vZCBNb25pdG9yaW5nIFN5c3RlbVxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxuICpcbiAqIENvcHlyaWdodCAoQykgVGVhbSBOZXB0dW5lXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIEBhdXRob3IgICAgIEFuZHJldyBEeWVyIDxhbmRyZXdAZHllcmdyb3VwLmNvbS5hdT5cbiAqIEB2ZXJzaW9uICAgIDAuMC4xXG4gKiBAY29weXJpZ2h0ICBUZWFtIE5lcHR1bmUgKDIwMTUpXG4gKiBAbGluayAgICAgICBodHRwczovL2dpdGh1Yi5jb20vYWNsZWwvZGVjbzM4MDFcbiAqL1xuKGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdFxuXHQvKipcbiAgICAgICAgKiBAbmdkb2Mgb3ZlcnZpZXdcbiAgICAgICAgKiBAbmFtZSBhcHAubW9kdWxlOmd1aVxuICAgICAgICAqIEBkZXNjcmlwdGlvbiBNb2R1bGUgY29udGFpbmluZyBsaWJyYXJpZXMgcmVxdWlyZWQgZm9yIGd1aVxuICAgICoqL1xuXHRhbmd1bGFyLm1vZHVsZSgnYXBwLmd1aScsIFtcblx0XHQvLyAzcmQtcGFydHkgbW9kdWxlc1xuICAgICAgICAnbmdBbmltYXRlJywgXG5cdFx0J21nY3JlYS5uZ1N0cmFwJyxcblx0XHQnbWdjcmVhLm5nU3RyYXAuaGVscGVycy5kaW1lbnNpb25zJyxcblx0XHQnbWdjcmVhLm5nU3RyYXAuaGVscGVycy5kYXRlUGFyc2VyJyxcblx0XHQnbWdjcmVhLm5nU3RyYXAuaGVscGVycy5wYXJzZU9wdGlvbnMnLFxuXHRcdCdtZ2NyZWEubmdTdHJhcC50b29sdGlwJyxcblx0XHQnbWdjcmVhLm5nU3RyYXAuZGF0ZXBpY2tlcicsXG5cdFx0J21nY3JlYS5uZ1N0cmFwLnRpbWVwaWNrZXInLFxuXHRcdCdtZ2NyZWEubmdTdHJhcC5idXR0b24nLFxuXHRcdCdtZ2NyZWEubmdTdHJhcC5zZWxlY3QnLFxuICAgICAgICAnbWdjcmVhLm5nU3RyYXAubW9kYWwnLFxuICAgICAgICAnbWdjcmVhLm5nU3RyYXAuYWxlcnQnLFxuICAgICAgICAnbWdjcmVhLm5nU3RyYXAudGFiJyxcbiAgICAgICAgJ21nY3JlYS5uZ1N0cmFwLmRyb3Bkb3duJ1xuXHRdKTtcbn0pKCk7IiwiLyoqXG4gKiBGbG9vZCBNb25pdG9yaW5nIFN5c3RlbVxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxuICpcbiAqIENvcHlyaWdodCAoQykgVGVhbSBOZXB0dW5lXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIEBhdXRob3IgICAgIEFuZHJldyBEeWVyIDxhbmRyZXdAZHllcmdyb3VwLmNvbS5hdT5cbiAqIEB2ZXJzaW9uICAgIDAuMC4xXG4gKiBAY29weXJpZ2h0ICBUZWFtIE5lcHR1bmUgKDIwMTUpXG4gKiBAbGluayAgICAgICBodHRwczovL2dpdGh1Yi5jb20vYWNsZWwvZGVjbzM4MDFcbiAqL1xuKGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdFxuICAgIC8qKlxuICAgICAgICAqIEBuZ2RvYyBvdmVydmlld1xuICAgICAgICAqIEBuYW1lIGFwcC5tb2R1bGU6bmF2XG4gICAgICAgICogQGRlc2NyaXB0aW9uIE1vZHVsZSBmb3IgYXBwIG5hdmlnYXRpb25cbiAgICAqKi9cblx0YW5ndWxhci5tb2R1bGUoJ2FwcC5uYXYnLCBbXG5cdFx0Ly8gU2hhcmVkIG1vZHVsZXNcblx0XHQnYXBwLmNvcmUnLFxuXHRcdCdhcHAuYXV0aCcsXG4gICAgICAgICdhcHAuZ3VpJ1xuXHRdKTtcbn0pKCk7IiwiLyoqXG4gKiBGbG9vZCBNb25pdG9yaW5nIFN5c3RlbVxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxuICpcbiAqIENvcHlyaWdodCAoQykgVGVhbSBOZXB0dW5lXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIEBhdXRob3IgICAgIEFuZHJldyBEeWVyIDxhbmRyZXdAZHllcmdyb3VwLmNvbS5hdT5cbiAqIEB2ZXJzaW9uICAgIDAuMC4xXG4gKiBAY29weXJpZ2h0ICBUZWFtIE5lcHR1bmUgKDIwMTUpXG4gKiBAbGluayAgICAgICBodHRwczovL2dpdGh1Yi5jb20vYWNsZWwvZGVjbzM4MDFcbiAqL1xuKGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdFxuICAgIC8qKlxuICAgICAgICAqIEBuZ2RvYyBvdmVydmlld1xuICAgICAgICAqIEBuYW1lIGFwcC5tb2R1bGU6d2FybmluZ3NcbiAgICAgICAgKiBAZGVzY3JpcHRpb24gTW9kdWxlIGZvciB3YXJuaW5ncyBwYWdlXG4gICAgKiovXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAud2FybmluZ3MnLCBbXG5cdFx0Ly8gU2hhcmVkIG1vZHVsZXNcblx0XHQnYXBwLmNvcmUnLFxuXHRcdCdhcHAuZ3VpJ1xuXHRdKTtcbn0pKCk7IiwiLyoqXG4gKiBGbG9vZCBNb25pdG9yaW5nIFN5c3RlbVxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxuICpcbiAqIENvcHlyaWdodCAoQykgVGVhbSBOZXB0dW5lXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIEBhdXRob3IgICAgIEFuZHJldyBEeWVyIDxhbmRyZXdAZHllcmdyb3VwLmNvbS5hdT5cbiAqIEB2ZXJzaW9uICAgIDAuMC4xXG4gKiBAY29weXJpZ2h0ICBUZWFtIE5lcHR1bmUgKDIwMTUpXG4gKiBAbGluayAgICAgICBodHRwczovL2dpdGh1Yi5jb20vYWNsZWwvZGVjbzM4MDFcbiAqL1xuLyogZ2xvYmFsIGdvb2dsZSAqL1xuLyogZ2xvYmFsIG1vbWVudCAqL1xuKGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdFxuICAgIC8qKiBEZWZpbmUgZ2xvYmFscyBmcm9tIHRoaXJkLXBhcnR5IGxpYnJhcmllcyBzbyB0aGV5IGNhbiBiZSBpbmplY3RlZCAqL1xuXHRhbmd1bGFyLm1vZHVsZSgnYXBwJylcblx0XHQuY29uc3RhbnQoJ21vbWVudCcsIG1vbWVudClcblx0XHQuY29uc3RhbnQoJ2dvb2dsZScsIGdvb2dsZSk7XG59KSgpOyIsIi8qKlxuICogRmxvb2QgTW9uaXRvcmluZyBTeXN0ZW1cbiAqIFZlcnNpb24gMC4wLjEgKER1eXVuZylcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIFRlYW0gTmVwdHVuZVxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBAYXV0aG9yICAgICBBbmRyZXcgRHllciA8YW5kcmV3QGR5ZXJncm91cC5jb20uYXU+XG4gKiBAdmVyc2lvbiAgICAwLjAuMVxuICogQGNvcHlyaWdodCAgVGVhbSBOZXB0dW5lICgyMDE1KVxuICogQGxpbmsgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FjbGVsL2RlY28zODAxXG4gKi9cbihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgXG4gICAgLyoqIERlZmluZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgaGVyZSAqL1xuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuICAgICAgICAuY29uc3RhbnQoJ1NFUlZFUl9BRERSRVNTJywgJ2h0dHBzOi8vdGVhbW5lcHR1bmUuY28nKTtcbn0pKCk7IiwiLyoqXG4gKiBGbG9vZCBNb25pdG9yaW5nIFN5c3RlbVxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxuICpcbiAqIENvcHlyaWdodCAoQykgVGVhbSBOZXB0dW5lXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIEBhdXRob3IgICAgIEFuZHJldyBEeWVyIDxhbmRyZXdAZHllcmdyb3VwLmNvbS5hdT5cbiAqIEB2ZXJzaW9uICAgIDAuMC4xXG4gKiBAY29weXJpZ2h0ICBUZWFtIE5lcHR1bmUgKDIwMTUpXG4gKiBAbGluayAgICAgICBodHRwczovL2dpdGh1Yi5jb20vYWNsZWwvZGVjbzM4MDFcbiAqL1xuKGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRhbmd1bGFyLm1vZHVsZSgnYXBwLmFkbWluJylcblx0XHQuY29udHJvbGxlcignQWRtaW5Db250cm9sbGVyJywgQWRtaW5Db250cm9sbGVyKTtcblx0XG5cdC8qKlxuXHRcdCogQG5nZG9jIG9iamVjdFxuXHRcdCogQG5hbWUgYXBwLmFkbWluLmNvbnRyb2xsZXI6QWRtaW5Db250cm9sbGVyXG5cdFx0KiBAZGVzY3JpcHRpb24gUHJvdmlkZXMgdmlld21vZGVsIGZvciBhZG1pbiB2aWV3XG5cdFx0KiBAcmVxdWlyZXMgc2VydmVyXG5cdCoqL1xuXHRmdW5jdGlvbiBBZG1pbkNvbnRyb2xsZXIoJHNjb3BlLCBzZXJ2ZXIsIGd1aSkge1xuXHRcdHZhciB2bSA9IHRoaXM7XG5cdFx0XG5cdFx0LyoqIFZhcmlhYmxlcyBhbmQgbWV0aG9kcyBib3VuZCB0byB2aWV3bW9kZWwgKi9cblx0XHR2bS51c2VycyA9IFtdO1xuXHRcdHZtLmVkaXRVc2VySWQgPSAtMTtcblx0XHR2bS5uZXdCdW95TmFtZSA9ICcnO1xuXHRcdHZtLnJvbGVzID0gWyd1c2VyJywgJ3Bvd2VyX3VzZXInLCAnc3lzdGVtX2FkbWluJ107XG5cdFx0dm0uY29uZmlybURlbGV0ZSAgPSBjb25maXJtRGVsZXRlVXNlcjtcblx0XHR2bS5zdGFydEVkaXRpbmdVc2VyID0gc3RhcnRFZGl0aW5nVXNlcjtcblx0XHR2bS5maW5pc2hFZGl0aW5nVXNlciA9IGZpbmlzaEVkaXRpbmdVc2VyO1xuXHRcdHZtLmRlbGV0ZVVzZXIgPSBkZWxldGVVc2VyO1xuXHRcdHZtLmNhbmNlbEVkaXRpbmdVc2VyID0gY2FuY2VsRWRpdGluZ1VzZXI7XG5cdFx0dm0uc3RhcnRBZGRpbmdVc2VyID0gc3RhcnRBZGRpbmdVc2VyO1xuXHRcdHZtLnNob3dEZWxldGVCdXR0b24gPSBzaG93RGVsZXRlQnV0dG9uO1xuXHRcdHZtLmFkZEJ1b3kgPSBhZGRCdW95O1xuXHRcdFxuXHRcdC8vIHZtLnNlbnNvcnMgPSBzZXJ2ZXIuZ2V0U2Vuc29yVHlwZXMoKTtcblx0XHQvLyB2bS5zZW5zb3JzRWRpdCA9IFtdO1xuXHRcdC8vIHZtLnRvZ2dsZUVkaXQgPSB0b2dnbGVFZGl0O1xuXHRcdC8vIHZtLnNlbnNvclZhbGlkID0gc2Vuc29yVmFsaWQ7XG5cdFx0XG5cdFx0YWN0aXZhdGUoKTtcblx0XHRcblx0XHQvKiogQ2FsbGVkIHdoZW4gY29udHJvbGxlciBpcyBpbnN0YW50aWF0ZWQgKGFkbWluIHBhZ2UgaXMgbG9hZGVkKSAqL1xuXHRcdGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuXHRcdFx0cXVlcnlVc2VycygpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFF1ZXJ5IHVzZXJzIGZyb20gdGhlIHNlcnZlclxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIHF1ZXJ5VXNlcnMoKSB7XG5cdFx0XHRzZXJ2ZXIuZ2V0VXNlcnMoKS50aGVuKGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHR2bS51c2VycyA9IHJlcy5kYXRhLnVzZXJzO1xuXHRcdFx0XHRmb3JtYXRMYXN0TG9naW4oKTtcblx0XHRcdH0sIGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHRndWkuYWxlcnRCYWRSZXNwb25zZShyZXMpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIEZvcm1hdCBsYXN0IGxvZ2luIHRpbWUgYW5kIGFkZCBpdCB0byB1c2VycyBhcnJheVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGZvcm1hdExhc3RMb2dpbigpIHtcblx0XHRcdHZtLnVzZXJzLmZvckVhY2goZnVuY3Rpb24odXNlcikge1xuXHRcdFx0XHRpZiAoIXVzZXIubGFzdExvZ2luLlZhbGlkKSB7XG5cdFx0XHRcdFx0dXNlci5sYXN0TG9naW4udGV4dCA9ICdOZXZlcic7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dXNlci5sYXN0TG9naW4udGV4dCA9IG1vbWVudCh1c2VyLmxhc3RMb2dpbi5UaW1lKS5mcm9tTm93KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0XHRcblx0XHQvKipcblx0XHQgKiBTdGFydCBlZGl0aW5nIGEgdXNlciwgY2FsbGVkIG9uIEVkaXQgYnV0dG9uIGNsaWNrXG5cdFx0ICogQHBhcmFtICB7b2JqZWN0fSB1c2VyIFxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIHN0YXJ0RWRpdGluZ1VzZXIodXNlcikge1xuXHRcdFx0dm0uZWRpdFVzZXJJZCA9IHVzZXIuaWQ7XG5cdFx0XHR2bS5lZGl0VXNlciA9IHVzZXI7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogVXNlciBlZGl0cyBhcmUgc2F2ZWQsIGFuZCBzZXJ2ZXIgaXMgdXBkYXRlZCwgXG5cdFx0ICogY2FsbGVkIG9uIFNhdmUgYnV0dG9uIGNsaWNrXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gZmluaXNoRWRpdGluZ1VzZXIoKSB7XG5cdFx0XHRpZiAodm0uZWRpdFVzZXJJZCAhPSAtMikge1xuXHRcdFx0XHRzZXJ2ZXIudXBkYXRlVXNlcih2bS5lZGl0VXNlcikudGhlbihmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0XHRxdWVyeVVzZXJzKCk7XG5cdFx0XHRcdFx0Z3VpLmFsZXJ0U3VjY2VzcygnVXNlciB1cGRhdGVkLicpO1xuXHRcdFx0XHR9LCBmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0XHRndWkuYWxlcnRCYWRSZXNwb25zZShyZXMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlcnZlci5hZGRVc2VyKHZtLmVkaXRVc2VyKS50aGVuKGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHRcdHF1ZXJ5VXNlcnMoKTtcblx0XHRcdFx0XHRndWkuYWxlcnRTdWNjZXNzKCdVc2VyIGFkZGVkLicpO1xuXHRcdFx0XHR9LCBmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0XHRndWkuYWxlcnRCYWRSZXNwb25zZShyZXMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0dm0udXNlcnMuc3BsaWNlKHZtLnVzZXJzLmxlbmd0aCAtIDEsIDEpO1xuXHRcdFx0fVxuXHRcdFx0dm0uZWRpdFVzZXJJZCA9IC0xO1xuXHRcdH1cblx0XHRcblx0XHQvKipcblx0XHQgKiBVc2VyIGVkaXRzIGFyZSBkaXNjYXJkZWQsIGNhbGxlZCBvbiBDYW5jZWwgYnV0dG9uIGNsaWNrXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gY2FuY2VsRWRpdGluZ1VzZXIoKSB7XG5cdFx0XHRpZiAodm0uZWRpdFVzZXJJZCA9PSAtMikge1xuXHRcdFx0XHR2bS51c2Vycy5zcGxpY2Uodm0udXNlcnMubGVuZ3RoIC0gMSwgMSk7XG5cdFx0XHR9XG5cdFx0XHR2bS5lZGl0VXNlcklkID0gLTE7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIFVzZXIgaXMgZGVsZXRlZCwgY2FsbGVkIG9uIENvbmZpcm0gYnV0dG9uIGNsaWNrIGluIGRlbGV0ZSBtb2RhbFxuXHRcdCAqIEBwYXJhbSAge29iamVjdH0gdXNlciB1c2VyIHRvIGRlbGV0ZVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGNvbmZpcm1EZWxldGVVc2VyKHVzZXIpIHtcblx0XHRcdHNlcnZlci5kZWxldGVVc2VyKHVzZXIuaWQpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdHF1ZXJ5VXNlcnMoKTtcblx0XHRcdFx0Z3VpLmFsZXJ0U3VjY2VzcygnVXNlciBkZWxldGVkLicpO1xuXHRcdFx0fSwgZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdGd1aS5hbGVydEJhZFJlc3BvbnNlKHJlcyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTaG93cyBhIGRlbGV0ZSBjb25maXJtYXRpb24sIGNhbGxlZCBvbiBEZWxldGUgYnV0dG9uIGNsaWNrXG5cdFx0ICogQHBhcmFtICB7b2JqZWN0fSB1c2VyIHVzZXIgdG8gZGVsZXRlXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gZGVsZXRlVXNlcih1c2VyKSB7XG5cdFx0XHR2bS5kZWxldGVPYmplY3QgPSB1c2VyO1xuXHRcdFx0dm0uZGVsZXRlVHlwZSA9ICd1c2VyJztcblx0XHRcdHZtLmRlbGV0ZU5hbWUgPSB1c2VyLmVtYWlsO1xuXHRcdFx0Z3VpLmNvbmZpcm1EZWxldGUoJHNjb3BlKTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHNob3cgZGVsZXRlIGJ1dHRvbiBmb3IgZWFjaCB1c2VyIHJvd1xuXHRcdCAqIEBwYXJhbSAge29iamVjdH0gdXNlclxuXHRcdCAqIEByZXR1cm4ge2Jvb2x9ICAgICAgd2hldGhlciB0byBzaG93IGRlbGV0ZSBidXR0b25cblx0XHQgKi9cblx0XHRmdW5jdGlvbiBzaG93RGVsZXRlQnV0dG9uKHVzZXIpIHtcblx0XHRcdHJldHVybiAoKHZtLmVkaXRVc2VySWQgPT0gLTEgfHwgdm0uZWRpdFVzZXJJZCA9PSB1c2VyLmlkKSAmJlxuXHRcdFx0XHR1c2VyLmlkICE9IC0yKTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogQWRkIG5ldyByb3cgdG8gdXNlcnMgdGFibGUgYW5kIHN0YXJ0IGVkaXRpbmcsIFxuXHRcdCAqIGNhbGxlZCBvbiBBZGQgVXNlciBidXR0b24gY2xpY2tcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBzdGFydEFkZGluZ1VzZXIoKSB7XG5cdFx0XHR2YXIgdGVtcFVzZXIgPSB7IGlkOiAtMiwgcm9sZTogdm0ucm9sZXNbMF0gfTtcblx0XHRcdHZtLnVzZXJzLnB1c2godGVtcFVzZXIpO1xuXHRcdFx0c3RhcnRFZGl0aW5nVXNlcih0ZW1wVXNlcik7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIEFkZCBuZXcgQnVveSwgdXBkYXRlIHNlcnZlciwgY2FsbGVkIG9uIEFkZCBidXR0b24gY2xpY2tcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBhZGRCdW95KCkge1xuXHRcdFx0aWYgKHZtLm5ld0J1b3lOYW1lID09ICcnKSByZXR1cm47XG5cdFx0XHR2YXIgZ3VpZCA9IGdlbmVyYXRlR3VpZCgpO1xuXHRcdFx0c2VydmVyLmFkZEJ1b3kodm0ubmV3QnVveU5hbWUsIGd1aWQpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdGd1aS5hbGVydFN1Y2Nlc3MoJ0J1b3kgY3JlYXRlZC4nKTtcblx0XHRcdH0sIGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHRndWkuYWxlcnRCYWRSZXNwb25zZShyZXMpO1xuXHRcdFx0fSk7XG5cdFx0XHR2bS5uZXdCdW95TmFtZSA9ICcnO1xuXHRcdH1cblx0XHRcblx0XHQvKiogUmV0dXJucyBhIEdVSUQgKi9cblx0XHRmdW5jdGlvbiBnZW5lcmF0ZUd1aWQoKSB7XG5cdFx0XHRyZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbihjKSB7XG5cdFx0XHRcdHZhciByID0gTWF0aC5yYW5kb20oKSoxNnwwLCB2ID0gYyA9PSAneCcgPyByIDogKHImMHgzfDB4OCk7XG5cdFx0XHRcdHJldHVybiB2LnRvU3RyaW5nKDE2KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRcblx0XHRcblx0XHRcblx0XHQvLyBmb3IgKHZhciBpID0gMDsgaSA8IHZtLnNlbnNvcnMubGVuZ3RoOyBpKyspIHtcblx0XHQvLyBcdHZtLnNlbnNvcnNFZGl0LnB1c2goZmFsc2UpO1xuXHRcdC8vIH1cblx0XHRcblx0XHQvLyBmdW5jdGlvbiB0b2dnbGVFZGl0KGluZGV4KSB7XG5cdFx0Ly8gXHRpZiAodm0uc2Vuc29yc0VkaXRbaW5kZXhdKSB7XG5cdFx0Ly8gXHRcdHZtLnNlbnNvcnNbaW5kZXhdLnVuY29uZmlndXJlZCA9IGZhbHNlO1xuXHRcdC8vIFx0fVxuXHRcdC8vIFx0dm0uc2Vuc29yc0VkaXRbaW5kZXhdID0gIXZtLnNlbnNvcnNFZGl0W2luZGV4XTtcblx0XHQvLyB9XG5cdFx0XG5cdFx0Ly8gZnVuY3Rpb24gc2Vuc29yVmFsaWQoc2Vuc29yKSB7XG5cdFx0Ly8gXHRpZiAoIXNlbnNvci5uYW1lIHx8ICFzZW5zb3IudW5pdHMpIHtcblx0XHQvLyBcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdC8vIFx0fVx0XHRcdFxuXHRcdC8vIFx0cmV0dXJuIHRydWU7XG5cdFx0Ly8gfVxuXHR9XG59KSgpOyIsIi8qKlxuICogRmxvb2QgTW9uaXRvcmluZyBTeXN0ZW1cbiAqIFZlcnNpb24gMC4wLjEgKER1eXVuZylcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIFRlYW0gTmVwdHVuZVxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBAYXV0aG9yICAgICBBbmRyZXcgRHllciA8YW5kcmV3QGR5ZXJncm91cC5jb20uYXU+XG4gKiBAdmVyc2lvbiAgICAwLjAuMVxuICogQGNvcHlyaWdodCAgVGVhbSBOZXB0dW5lICgyMDE1KVxuICogQGxpbmsgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FjbGVsL2RlY28zODAxXG4gKi9cbihmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0YW5ndWxhci5tb2R1bGUoJ2FwcC5hZG1pbicpXG5cdFx0LnJ1bihzZXRSb3V0ZXMpO1xuXHRcdFxuXHQvKiogRGVmaW5lIHJvdXRlcyBmb3IgYWRtaW4gbW9kdWxlICovXG5cdGZ1bmN0aW9uIHNldFJvdXRlcyhyb3V0ZXJIZWxwZXIpIHtcblx0XHRyb3V0ZXJIZWxwZXIuY29uZmlndXJlU3RhdGVzKGdldFN0YXRlcygpKTtcblx0fVxuXHRcblx0ZnVuY3Rpb24gZ2V0U3RhdGVzKCkge1xuXHRcdHJldHVybiBbXG5cdFx0XHR7XG5cdFx0XHRcdHN0YXRlOiAnYWRtaW4nLFxuXHRcdFx0XHRjb25maWc6IHtcblx0XHRcdFx0XHR1cmw6ICcvYWRtaW4nLFxuXHRcdFx0XHRcdGNvbnRyb2xsZXI6ICdBZG1pbkNvbnRyb2xsZXInLFxuXHRcdFx0XHRcdGNvbnRyb2xsZXJBczogJ3ZtJyxcblx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9hcHAvYWRtaW4vYWRtaW4uaHRtbCcsXG5cdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0YWNjZXNzOiAnc3lzdGVtX2FkbWluJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF07XG5cdH1cbn0pKCk7IiwiLyoqXG4gKiBGbG9vZCBNb25pdG9yaW5nIFN5c3RlbVxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxuICpcbiAqIENvcHlyaWdodCAoQykgVGVhbSBOZXB0dW5lXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIEBhdXRob3IgICAgIEFuZHJldyBEeWVyIDxhbmRyZXdAZHllcmdyb3VwLmNvbS5hdT5cbiAqIEB2ZXJzaW9uICAgIDAuMC4xXG4gKiBAY29weXJpZ2h0ICBUZWFtIE5lcHR1bmUgKDIwMTUpXG4gKiBAbGluayAgICAgICBodHRwczovL2dpdGh1Yi5jb20vYWNsZWwvZGVjbzM4MDFcbiAqL1xuKGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRhbmd1bGFyLm1vZHVsZSgnYXBwLmF1dGgnKVxuXHRcdC5ydW4oYXV0aFJvdXRlKVxuXHRcdFxuXHQvKiogU2V0dXAgcm91dGUgYXV0aGVudGljYXRpb24gcmVzdHJpY3Rpb25zICovXG5cdGZ1bmN0aW9uIGF1dGhSb3V0ZSgkcm9vdFNjb3BlLCAkc3RhdGUsIGF1dGgpIHtcblx0XHQkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCBzdGF0ZUNoYW5nZSk7XG5cdFx0XG5cdFx0ZnVuY3Rpb24gc3RhdGVDaGFuZ2UoZXZlbnQsIHRvU3RhdGUsIHRvUGFyYW1zLFxuXHRcdFx0XHRmcm9tU3RhdGUsIGZyb21QYXJhbXMpIHtcblx0XHRcdFx0XG5cdFx0XHRpZiAoIWF1dGguY2hlY2tVc2VyKHRvU3RhdGUuZGF0YS5hY2Nlc3MpKSB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyBvbmx5IHJlZGlyZWN0IGlmIHBhZ2Ugd2FzIGp1c3QgbG9hZGVkXG5cdFx0XHRcdGlmIChmcm9tU3RhdGUudXJsID09PSAnXicpIHtcblx0XHRcdFx0XHRpZiAoYXV0aC5sb2dnZWRJbigpKSB7XG5cdFx0XHRcdFx0XHQkc3RhdGUuZ28oJ2Rhc2hib2FyZCcpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQkc3RhdGUuZ28oJ2xvZ2luJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XHRcdFx0XG5cdFx0fVxuXHR9XG59KSgpOyIsIi8qKlxuICogRmxvb2QgTW9uaXRvcmluZyBTeXN0ZW1cbiAqIFZlcnNpb24gMC4wLjEgKER1eXVuZylcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIFRlYW0gTmVwdHVuZVxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBAYXV0aG9yICAgICBBbmRyZXcgRHllciA8YW5kcmV3QGR5ZXJncm91cC5jb20uYXU+XG4gKiBAdmVyc2lvbiAgICAwLjAuMVxuICogQGNvcHlyaWdodCAgVGVhbSBOZXB0dW5lICgyMDE1KVxuICogQGxpbmsgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FjbGVsL2RlY28zODAxXG4gKi9cbihmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0YW5ndWxhci5tb2R1bGUoJ2FwcC5hdXRoJylcblx0XHQuY29udHJvbGxlcignQXV0aENvbnRyb2xsZXInLCBBdXRoQ29udHJvbGxlcik7XG5cdFxuXHQvKipcblx0XHQqIEBuZ2RvYyBvYmplY3Rcblx0XHQqIEBuYW1lIGFwcC5hdXRoLmNvbnRyb2xsZXI6QXV0aENvbnRyb2xsZXJcblx0XHQqIEBkZXNjcmlwdGlvbiBDb250cm9sbGVyIGZvciBhdXRoZW50aWNhdGlvbiBhY3Jvc3MgZW50aXJlIGFwcFxuXHRcdCogQHJlcXVpcmVzICRzY29wZVxuXHRcdCogQHJlcXVpcmVzICRzdGF0ZVxuXHRcdCogQHJlcXVpcmVzICRzdGF0ZVBhcmFtc1xuXHRcdCogQHJlcXVpcmVzIGF1dGhcblx0XHQqIEByZXF1aXJlcyBzZXJ2ZXJcblx0XHQqIEByZXF1aXJlcyByb3V0ZUhlbHBlclxuXHQqKi9cblx0ZnVuY3Rpb24gQXV0aENvbnRyb2xsZXIoJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgYXV0aCwgc2VydmVyLCByb3V0ZXJIZWxwZXIpIHtcblx0XHR2YXIgdm0gPSB0aGlzO1xuXHRcdFxuXHRcdC8qKiBWYXJpYWJsZXMgYW5kIG1ldGhvZHMgYm91bmQgdG8gdmlld21vZGVsICovXG5cdFx0dm0uZmlyc3RMb2dpbiA9IGZhbHNlO1xuXHRcdHZtLmxvZ2luID0gbG9naW47XG5cdFx0dm0uZm9yZ290UmVzcG9uc2UgPS0gMTtcblx0XHR2bS5jaGFuZ2VQYXNzd29yZFJlc3BvbnNlID0gLTE7XG5cdFx0dm0ud2FpdGluZyA9IGZhbHNlO1xuXHRcdHZtLmNoYW5nZVBhc3N3b3JkID0gY2hhbmdlUGFzc3dvcmQ7XG5cdFx0dm0uZm9yZ290UGFzc3dvcmQgPSBmb3Jnb3RQYXNzd29yZDtcblx0XHR2bS5yZXNldFBhc3N3b3JkID0gcmVzZXRQYXNzd29yZDtcblx0XHRcblx0XHRhY3RpdmF0ZSgpO1xuXHRcdFxuXHRcdC8qKiBDYWxsZWQgd2hlbiBjb250cm9sbGVyIGlzIGluc3RhbnRpYXRlZCAqL1xuXHRcdGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuXHRcdFx0cmVzZXRMb2dpbkZvcm0oKTtcblx0XHRcdCRzY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN1Y2Nlc3MnLCBzdGF0ZUxvYWRlZCk7XG5cdFx0fVxuXG5cdFx0LyoqIENhbGxlZCB3aGVuIGEgc3RhdGUgaXMgbG9hZGVkLCB1c2VkIHRvIHJlc2V0IHZpZXdzICovXG5cdFx0ZnVuY3Rpb24gc3RhdGVMb2FkZWQoKSB7XG5cdFx0XHRpZiAoJHN0YXRlLmlzKCdjaGFuZ2VfcGFzc3dvcmQnKSB8fFxuXHRcdFx0XHRcdCRzdGF0ZS5pcygncmVzZXRfcGFzc3dvcmQnKSB8fFxuXHRcdFx0XHRcdCRzdGF0ZS5pcygnZm9yZ290X3Bhc3N3b3JkJykpIHtcblx0XHRcdFx0dm0uY2hhbmdlUGFzc3dvcmRSZXNwb25zZSA9IC0xO1xuXHRcdFx0XHR2bS5mb3Jnb3RSZXNwb25zZSA9IC0xO1xuXHRcdFx0XHR2bS53YWl0aW5nID0gZmFsc2U7XG5cdFx0XHRcdHJlc2V0UGFzc3dvcmRGb3JtKCk7XG5cdFx0XHRcdHJlc2V0TG9naW5Gb3JtKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdC8qKiBTZW5kIGxvZ2luIHJlcXVlc3QgdG8gc2VydmVyLCBjYWxsZWQgb24gTG9naW4gYnV0dG9uIGNsaWNrICovXHRcblx0XHRmdW5jdGlvbiBsb2dpbigpIHtcblx0XHRcdHNlcnZlci5sb2dpbih2bS5lbWFpbCwgdm0ucGFzc3dvcmQpLnRoZW4oXG5cdFx0XHRmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0aWYgKGF1dGgubG9nZ2VkSW4oKSkge1xuXHRcdFx0XHRcdGlmICghcmVzLmRhdGEubGFzdExvZ2luLlZhbGlkKSB7XG5cdFx0XHRcdFx0XHQkc3RhdGUuZ28oJ3Jlc2V0X3Bhc3N3b3JkJyk7XG5cdFx0XHRcdFx0XHR2bS5maXJzdExvZ2luID0gdHJ1ZTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0JHN0YXRlLmdvKCdkYXNoYm9hcmQnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmVzZXRMb2dpbkZvcm0oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0XHRmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0YWxlcnQoJ0ludmFsaWQgZW1haWwgb3IgcGFzc3dvcmQnKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRcblx0XHQvKiogU2VuZCBjaGFuZ2UgcGFzc3dvcmQgcmVxdWVzdCB0byBzZXJ2ZXIgKi9cblx0XHRmdW5jdGlvbiBjaGFuZ2VQYXNzd29yZCgpIHtcblx0XHRcdHZtLndhaXRpbmcgPSB0cnVlO1xuXHRcdFx0Ly8gbmVlZCB0byB2YWxpZGF0ZSBpbnB1dFxuXHRcdFx0aWYgKHZtLm5ld1Bhc3N3b3JkICE9IFwiXCIgJiYgdm0ubmV3UGFzc3dvcmQgPT0gdm0uY29uZmlybVBhc3N3b3JkKSB7XG5cdFx0XHRcdHNlcnZlci5jaGFuZ2VQYXNzd29yZCh2bS5jdXJyZW50UGFzc3dvcmQsIHZtLm5ld1Bhc3N3b3JkKS50aGVuKGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHRcdHZtLmNoYW5nZVBhc3N3b3JkUmVzcG9uc2UgPSAwO1xuXHRcdFx0XHR9LCBmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0XHR2bS5jaGFuZ2VQYXNzd29yZFJlc3BvbnNlID0gMTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhbGVydChcIkludmFsaWQgcGFzc3dvcmRcIik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqIFNlbmQgcmVzZXQgcGFzc3dvcmQgcmVxdWVzdCB0byBzZXJ2ZXIgKi9cblx0XHRmdW5jdGlvbiByZXNldFBhc3N3b3JkKCkge1xuXHRcdFx0dm0ud2FpdGluZyA9IHRydWU7XG5cdFx0XHRpZiAodm0ubmV3UGFzc3dvcmQgIT0gXCJcIiAmJiB2bS5uZXdQYXNzd29yZCA9PSB2bS5jb25maXJtUGFzc3dvcmQpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJHN0YXRlUGFyYW1zLnRva2VuKTtcblx0XHRcdFx0c2VydmVyLnJlc2V0UGFzc3dvcmQoJHN0YXRlUGFyYW1zLnRva2VuICsgXCI9XCIsIHZtLm5ld1Bhc3N3b3JkKS50aGVuKGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHRcdHZtLmNoYW5nZVBhc3N3b3JkUmVzcG9uc2UgPSAwO1xuXHRcdFx0XHRcdHZtLmZpcnN0TG9naW4gPSBmYWxzZTtcblx0XHRcdFx0fSwgZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdFx0dm0uY2hhbmdlUGFzc3dvcmRSZXNwb25zZSA9IDE7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YWxlcnQoXCJJbnZhbGlkIHBhc3N3b3JkXCIpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHQvKiogU2VuZCBmb3Jnb3QgcGFzc3dvcmQgcmVxdWVzdCB0byBzZXJ2ZXIgKi9cblx0XHRmdW5jdGlvbiBmb3Jnb3RQYXNzd29yZCgpIHtcblx0XHRcdHZtLndhaXRpbmcgPSB0cnVlO1xuXHRcdFx0c2VydmVyLmZvcmdvdFBhc3N3b3JkKHZtLmVtYWlsKS50aGVuKGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHR2bS5mb3Jnb3RSZXNwb25zZSA9IDA7XG5cdFx0XHR9LCBmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0dm0uZm9yZ290UmVzcG9uc2UgPSAxO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKiBSZXNldCBsb2dpbiBmb3JtICovXG5cdFx0ZnVuY3Rpb24gcmVzZXRMb2dpbkZvcm0oKSB7XG5cdFx0XHR2bS5lbWFpbCA9IFwiXCI7IC8vIHBsYWNlaG9sZGVyXG5cdFx0XHR2bS5wYXNzd29yZCA9IFwiXCI7XG5cdFx0fVxuXG5cdFx0LyoqIFJlc2V0IGNoYW5nZSBwYXNzd29yZCBmb3JtICovXG5cdFx0ZnVuY3Rpb24gcmVzZXRQYXNzd29yZEZvcm0oKSB7XG5cdFx0XHR2bS5jdXJyZW50UGFzc3dvcmQgPSBcIlwiO1xuXHRcdFx0dm0ubmV3UGFzc3dvcmQgPSBcIlwiO1xuXHRcdFx0dm0uY29uZmlybVBhc3N3b3JkID0gXCJcIjtcblx0XHR9XG5cdH1cbn0pKCk7IiwiLyoqXG4gKiBGbG9vZCBNb25pdG9yaW5nIFN5c3RlbVxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxuICpcbiAqIENvcHlyaWdodCAoQykgVGVhbSBOZXB0dW5lXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIEBhdXRob3IgICAgIEFuZHJldyBEeWVyIDxhbmRyZXdAZHllcmdyb3VwLmNvbS5hdT5cbiAqIEB2ZXJzaW9uICAgIDAuMC4xXG4gKiBAY29weXJpZ2h0ICBUZWFtIE5lcHR1bmUgKDIwMTUpXG4gKiBAbGluayAgICAgICBodHRwczovL2dpdGh1Yi5jb20vYWNsZWwvZGVjbzM4MDFcbiAqL1xuKGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRhbmd1bGFyLm1vZHVsZSgnYXBwLmF1dGgnKVxuXHRcdC5ydW4oc2V0Um91dGVzKTtcblx0XHRcblx0LyoqIERlZmluZSByb3V0ZXMgZm9yIGF1dGggbW9kdWxlICovXG5cdGZ1bmN0aW9uIHNldFJvdXRlcyhyb3V0ZXJIZWxwZXIpIHtcblx0XHRyb3V0ZXJIZWxwZXIuY29uZmlndXJlU3RhdGVzKGdldFN0YXRlcygpKTtcblx0fVxuXHRcblx0ZnVuY3Rpb24gZ2V0U3RhdGVzKCkge1xuXHRcdHJldHVybiBbXG5cdFx0XHR7XG5cdFx0XHRcdHN0YXRlOiAnbG9naW4nLFxuXHRcdFx0XHRjb25maWc6IHtcblx0XHRcdFx0XHR1cmw6ICcvbG9naW4nLFxuXHRcdFx0XHRcdC8vIGNvbnRyb2xsZXI6ICdBdXRoQ29udHJvbGxlcicsIG5vdyB1c2VzIHBhcmVudCBjb250cm9sbGVyXG5cdFx0XHRcdFx0Ly8gY29udHJvbGxlckFzOiAndm0nLFxuXHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnL2FwcC9hdXRoL2xvZ2luLmh0bWwnLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdGFjY2VzczogJ3VuYXV0aGVkJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0c3RhdGU6ICdjaGFuZ2VfcGFzc3dvcmQnLFxuXHRcdFx0XHRjb25maWc6IHtcblx0XHRcdFx0XHR1cmw6ICcvY2hhbmdlX3Bhc3N3b3JkJyxcblx0XHRcdFx0XHQvLyBjb250cm9sbGVyOiAnQXV0aENvbnRyb2xsZXInLCBub3cgdXNlcyBwYXJlbnQgY29udHJvbGxlclxuXHRcdFx0XHRcdC8vIGNvbnRyb2xsZXJBczogJ3ZtJyxcblx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9hcHAvYXV0aC9jaGFuZ2VfcGFzc3dvcmQuaHRtbCcsXG5cdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0YWNjZXNzOiAnYXV0aGVkJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0c3RhdGU6ICdyZXNldF9wYXNzd29yZCcsXG5cdFx0XHRcdGNvbmZpZzoge1xuXHRcdFx0XHRcdHVybDogJy9yZXNldF9wYXNzd29yZD90b2tlbicsXG5cdFx0XHRcdFx0Ly8gY29udHJvbGxlcjogJ0F1dGhDb250cm9sbGVyJywgbm93IHVzZXMgcGFyZW50IGNvbnRyb2xsZXJcblx0XHRcdFx0XHQvLyBjb250cm9sbGVyQXM6ICd2bScsXG5cdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvYXBwL2F1dGgvcmVzZXRfcGFzc3dvcmQuaHRtbCcsXG5cdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0YWNjZXNzOiAndW5hdXRoZWQnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRzdGF0ZTogJ2ZvcmdvdF9wYXNzd29yZCcsXG5cdFx0XHRcdGNvbmZpZzoge1xuXHRcdFx0XHRcdHVybDogJy9mb3Jnb3RfcGFzc3dvcmQnLFxuXHRcdFx0XHRcdC8vIGNvbnRyb2xsZXI6ICdBdXRoQ29udHJvbGxlcicsIG5vdyB1c2VzIHBhcmVudCBjb250cm9sbGVyXG5cdFx0XHRcdFx0Ly8gY29udHJvbGxlckFzOiAndm0nLFxuXHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnL2FwcC9hdXRoL2ZvcmdvdF9wYXNzd29yZC5odG1sJyxcblx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHRhY2Nlc3M6ICd1bmF1dGhlZCdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdO1xuXHR9XG59KSgpOyIsIi8qKlxuICogRmxvb2QgTW9uaXRvcmluZyBTeXN0ZW1cbiAqIFZlcnNpb24gMC4wLjEgKER1eXVuZylcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIFRlYW0gTmVwdHVuZVxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBAYXV0aG9yICAgICBBbmRyZXcgRHllciA8YW5kcmV3QGR5ZXJncm91cC5jb20uYXU+XG4gKiBAdmVyc2lvbiAgICAwLjAuMVxuICogQGNvcHlyaWdodCAgVGVhbSBOZXB0dW5lICgyMDE1KVxuICogQGxpbmsgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FjbGVsL2RlY28zODAxXG4gKi9cbihmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0YW5ndWxhci5tb2R1bGUoJ2FwcC5hdXRoJylcblx0XHQuZmFjdG9yeSgnYXV0aCcsIGF1dGgpO1xuXHRcblx0LyoqXG5cdFx0KiBAbmdkb2Mgc2VydmljZVxuXHRcdCogQG5hbWUgYXBwLmF1dGguYXV0aFxuXHRcdCogQHJlcXVpcmVzICR3aW5kb3dcblx0XHQqIEByZXF1aXJlcyBtb21lbnRcblx0KiovXG5cdGZ1bmN0aW9uIGF1dGgoJHdpbmRvdywgbW9tZW50KSB7XG5cdFx0XG5cdFx0LyoqIFRoZSBzZXJ2aWNlIG1ldGhvZHMgdG8gZXhwb3NlICovXG5cdFx0cmV0dXJuIHtcblx0XHRcdGxvZ291dDogbG9nb3V0LFxuXHRcdFx0bG9nZ2VkSW46IGxvZ2dlZEluLFxuXHRcdFx0Z2V0VG9rZW46IGdldFRva2VuLFxuXHRcdFx0c2F2ZVRva2VuOiBzYXZlVG9rZW4sXG5cdFx0XHRjdXJyZW50VXNlcjogY3VycmVudFVzZXIsXG5cdFx0XHRjaGVja1VzZXI6IGNoZWNrVXNlclxuXHRcdH07XG5cdFx0XG5cdFx0LyoqIExvZ291dCBieSByZW1vdmluZyB1c2VyIHRva2VuIGZyb20gbG9jYWxTdG9yYWdlICovXG5cdFx0ZnVuY3Rpb24gbG9nb3V0KCkge1xuXHRcdFx0JHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogUmV0dXJucyB3aGV0aGVyIGN1cnJlbnRseSBsb2dnZWQgaW4gb3Igbm90XG5cdFx0ICogQHJldHVybiB7Ym9vbH0gbG9nZ2VkSW5cblx0XHQgKi9cblx0XHRmdW5jdGlvbiBsb2dnZWRJbigpIHtcblx0XHRcdHZhciB0b2tlbiA9IGdldFRva2VuKCk7XG5cdFx0XHRpZih0b2tlbikge1xuXHRcdFx0XHR2YXIgcGFyYW1zID0gcGFyc2VKd3QodG9rZW4pO1xuXHRcdFx0XHRyZXR1cm4gKG1vbWVudCgpLnVuaXgoKSA8PSBwYXJhbXMuZXhwKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogU2F2ZSBKV1QgdG9rZW4gdG8gbG9jYWxTdG9yYWdlLCB0byBwcmVzZXJ2ZSBzZXNzaW9uXG5cdFx0ICogQHBhcmFtICB7c3RyaW5nfSB0b2tlbiBKV1QgdG9rZW5cblx0XHQgKi9cblx0XHRmdW5jdGlvbiBzYXZlVG9rZW4odG9rZW4pIHtcblx0XHRcdCR3aW5kb3cubG9jYWxTdG9yYWdlWyd0b2tlbiddID0gdG9rZW47XG5cdFx0fVxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIEdldCBKV1QgVG9rZW4gZnJvbSBsb2NhbFN0b3JhZ2Vcblx0XHQgKiBAcmV0dXJuIHtzdHJpbmd9ICAgICAgIEpXVCB0b2tlblxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGdldFRva2VuKCkge1xuXHRcdFx0cmV0dXJuICR3aW5kb3cubG9jYWxTdG9yYWdlWyd0b2tlbiddO1xuXHRcdH1cblx0XHRcblx0XHQvKipcblx0XHQgKiBSZXR1cm5zIGN1cnJlbnQgdXNlclxuXHRcdCAqIFVzZXIgZGV0YWlscyBhcmUgY29udGFpbmVkIGluIEpXVCB0b2tlblxuXHRcdCAqIEByZXR1cm4ge3N0cmluZ30gZW1haWxcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBjdXJyZW50VXNlcigpIHtcblx0XHRcdHJldHVybiBwYXJzZUp3dChnZXRUb2tlbigpKS5zdWI7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIFJldHVybnMgY3VycmVudCB1c2VyIHJvbGVcblx0XHQgKiBVc2VyIGRldGFpbHMgYXJlIGNvbnRhaW5lZCBpbiBKV1QgdG9rZW5cblx0XHQgKiBAcmV0dXJuIHtzdHJpbmd9IHJvbGVcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBjdXJyZW50VXNlclJvbGUoKSB7XG5cdFx0XHR2YXIgdG9rZW4gPSBnZXRUb2tlbigpO1xuXHRcdFx0aWYgKHRva2VuID09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuICd1bmF1dGhlZCc7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcGFyc2VKd3QodG9rZW4pLnJvbGU7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIFJldHVybnMgd2hldGhlciBhIHVzZXIgaXMgaXMgYXV0aG9yaXNlZCBiYXNlZCBvbiB0aGVpciByb2xlXG5cdFx0ICogQHBhcmFtICB7c3RyaW5nfSByb2xlIHJvbGVcblx0XHQgKiBAcmV0dXJuIHtib29sfSAgICAgIGF1dGhvcmlzZWRcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBjaGVja1VzZXIocm9sZSkge1xuXHRcdFx0dmFyIHJvbGVzID0ge1xuXHRcdFx0XHQndW5hdXRoZWQnOiAwLFxuXHRcdFx0XHQnYXV0aGVkJzogMSxcblx0XHRcdFx0J3VzZXInOiAxLFxuXHRcdFx0XHQncG93ZXJfdXNlcic6IDIsXG5cdFx0XHRcdCdzeXN0ZW1fYWRtaW4nOiAzLFxuXHRcdFx0XHQnYW5kcmV3JzogOTk5OTlcblx0XHRcdH07XG5cdFx0XHRcblx0XHRcdGlmIChyb2xlID09ICdhbnknKSByZXR1cm4gdHJ1ZTtcblx0XHRcdFxuXHRcdFx0aWYgKHJvbGUgPT0gJ3VuYXV0aGVkJykge1xuXHRcdFx0XHRpZiAobG9nZ2VkSW4oKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKCFsb2dnZWRJbigpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHJldHVybiAocm9sZXNbY3VycmVudFVzZXJSb2xlKCldID49IHJvbGVzW3JvbGVdKTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogUGFyc2VzIGEgSldUIHRva2VuXG5cdFx0ICogQHBhcmFtICB7c3RyaW5nfSB0b2tlbiBKV1QgdG9rZW5cblx0XHQgKiBAcmV0dXJuIHtvYmplY3R9ICAgICAgIHBhcnNlZCB0b2tlblxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIHBhcnNlSnd0KHRva2VuKSB7XG5cdFx0XHR2YXIgYmFzZTY0VXJsID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcblx0XHRcdHZhciBiYXNlNjQgPSBiYXNlNjRVcmwucmVwbGFjZSgnLScsICcrJykucmVwbGFjZSgnXycsICcvJyk7XG5cdFx0XHRyZXR1cm4gSlNPTi5wYXJzZSgkd2luZG93LmF0b2IoYmFzZTY0KSk7XG5cdFx0fVxuXHR9XG59KSgpOyIsIi8qKlxuICogRmxvb2QgTW9uaXRvcmluZyBTeXN0ZW1cbiAqIFZlcnNpb24gMC4wLjEgKER1eXVuZylcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIFRlYW0gTmVwdHVuZVxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBAYXV0aG9yICAgICBBbmRyZXcgRHllciA8YW5kcmV3QGR5ZXJncm91cC5jb20uYXU+XG4gKiBAdmVyc2lvbiAgICAwLjAuMVxuICogQGNvcHlyaWdodCAgVGVhbSBOZXB0dW5lICgyMDE1KVxuICogQGxpbmsgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FjbGVsL2RlY28zODAxXG4gKi9cbihmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0YW5ndWxhci5tb2R1bGUoJ2FwcC5hdXRoJylcblx0XHQuZmFjdG9yeSgnYXV0aEludGVyY2VwdG9yJywgYXV0aEludGVyY2VwdG9yKTtcblx0XG5cdC8qKlxuXHRcdCogQG5nZG9jIHNlcnZpY2Vcblx0XHQqIEBuYW1lIG1vZHVsZS5hdXRoSW50ZXJjZXB0b3Jcblx0XHQqIEByZXF1aXJlcyBhdXRoXG5cdFx0KiBAZGVzY3JpcHRpb24gaW50ZXJjZXB0cyBhbGwgcmVxdWVzdHMgYW5kIHJlc3BvbnNlcyxcblx0XHQqICAgICAgICAgICAgICBzYXZlcyBpbmNvbWluZyBhdXRoZW50aWNhdGlvbiB0b2tlbnNcblx0KiovXG5cdGZ1bmN0aW9uIGF1dGhJbnRlcmNlcHRvcihhdXRoKSB7XG5cdFx0XG5cdFx0LyoqIFRoZSBzZXJ2aWNlIG1ldGhvZHMgdG8gZXhwb3NlICovXG5cdFx0cmV0dXJuIHtcblx0XHRcdHJlcXVlc3Q6IHJlcXVlc3QsXG5cdFx0XHRyZXNwb25zZTogcmVzcG9uc2Vcblx0XHR9O1xuXHRcdFxuXHRcdC8qKiBSZXF1ZXN0cyBhcmUgbm90IG1vZGlmaWVkICovXG5cdFx0ZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcblx0XHRcdHJldHVybiBjb25maWc7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKiBJZiBhIHJlc3BvbnNlIGNvbnRhaW5zIGEgdG9rZW4sIHNhdmUgaXQgKi9cblx0XHRmdW5jdGlvbiByZXNwb25zZShyZXMpIHtcblx0XHRcdGlmIChyZXMuZGF0YS50b2tlbikge1xuXHRcdFx0XHRhdXRoLnNhdmVUb2tlbihyZXMuZGF0YS50b2tlbik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzO1xuXHRcdH1cblx0fVxufSkoKTsiLCIvKipcbiAqIEZsb29kIE1vbml0b3JpbmcgU3lzdGVtXG4gKiBWZXJzaW9uIDAuMC4xIChEdXl1bmcpXG4gKlxuICogQ29weXJpZ2h0IChDKSBUZWFtIE5lcHR1bmVcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogQGF1dGhvciAgICAgQW5kcmV3IER5ZXIgPGFuZHJld0BkeWVyZ3JvdXAuY29tLmF1PlxuICogQHZlcnNpb24gICAgMC4wLjFcbiAqIEBjb3B5cmlnaHQgIFRlYW0gTmVwdHVuZSAoMjAxNSlcbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hY2xlbC9kZWNvMzgwMVxuICovXG4oZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAuY29uZmlnJylcblx0XHQuY29udHJvbGxlcignQ29uZmlnQ29udHJvbGxlcicsIENvbmZpZ0NvbnRyb2xsZXIpO1xuXHRcblx0LyoqXG5cdFx0KiBAbmdkb2Mgb2JqZWN0XG5cdFx0KiBAbmFtZSBhcHAuY29uZmlnLmNvbnRyb2xsZXI6Q29uZmlnQ29udHJvbGxlclxuXHRcdCogQGRlc2NyaXB0aW9uIFByb3ZpZGVzIHZpZXdtb2RlbCBmb3IgY29uZmlnIHZpZXdcblx0XHQqIEByZXF1aXJlcyBzZXJ2ZXJcblx0KiovXG5cdGZ1bmN0aW9uIENvbmZpZ0NvbnRyb2xsZXIoc2VydmVyLCBndWkpIHtcblx0XHR2YXIgdm0gPSB0aGlzO1xuXHRcdFxuXHRcdC8qKiBWYXJpYWJsZXMgYW5kIG1ldGhvZHMgYm91bmQgdG8gdmlld21vZGVsICovXG5cdFx0dm0uYnVveUdyb3VwcyA9IFtdO1xuXHRcdHZtLmJ1b3lJbnN0YW5jZXMgPSBbXTtcblx0XHR2bS5ncm91cEJ1b3lzID0gW107XG5cdFx0dm0uY29tbWFuZHMgPSBbXTtcblx0XHR2bS5jb21tYW5kVHlwZXMgPSBbXTtcblx0XHR2bS5zZW5zb3JUeXBlcyA9IFtdO1xuXHRcdHZtLndhcm5pbmdUcmlnZ2VycyA9IFtdO1xuXHRcdHZtLmNvbW1hbmQgPSB7IGlkOiAtMSwgdmFsdWU6ICcnIH07XG5cdFx0dm0uc2VsZWN0ZWQgPSB7IHR5cGU6ICdhbGwnLCBvYmo6IG51bGwgfTtcblx0XHR2bS5lZGl0TmFtZSA9IHt9O1xuXHRcdHZtLmVkaXROYW1lLm9uID0gZmFsc2U7XG5cdFx0dm0uZWRpdEdyb3VwID0ge307XG5cdFx0dm0uZWRpdEdyb3VwLm9uID0gZmFsc2U7XG5cdFx0dm0ubmV3Q29tbWFuZCA9IGZhbHNlO1xuXHRcdHZtLm5ld1RyaWdnZXIgPSBmYWxzZTtcblx0XHR2bS5vcGVyYXRvcnMgPSBbICc8JywgJz4nLCAnPScgXTtcblx0XHR2bS50cmlnZ2VyID0ge307XG5cdFx0dm0udHJlZU9wdGlvbnMgPSB7fTtcblx0XHR2bS5zZWxlY3RBbGwgPSBzZWxlY3RBbGw7XG5cdFx0dm0uc2VsZWN0QnVveUdyb3VwID0gc2VsZWN0QnVveUdyb3VwO1xuXHRcdHZtLnNlbGVjdEJ1b3lJbnN0YW5jZSA9IHNlbGVjdEJ1b3lJbnN0YW5jZTtcblx0XHR2bS5zdGFydEVkaXRpbmdOYW1lID0gc3RhcnRFZGl0aW5nTmFtZTtcblx0XHR2bS5maW5pc2hFZGl0aW5nTmFtZSA9IGZpbmlzaEVkaXRpbmdOYW1lO1xuXHRcdHZtLnN0YXJ0RWRpdGluZ0J1b3lHcm91cCA9IHN0YXJ0RWRpdGluZ0J1b3lHcm91cDtcblx0XHR2bS5maW5pc2hFZGl0aW5nQnVveUdyb3VwID0gZmluaXNoRWRpdGluZ0J1b3lHcm91cDtcblx0XHR2bS5zZWxlY3ROZXdCdW95R3JvdXAgPSBzZWxlY3ROZXdCdW95R3JvdXA7XG5cdFx0dm0uc2F2ZU5ld0J1b3lHcm91cCA9IHNhdmVOZXdCdW95R3JvdXA7XG5cdFx0dm0uYnVveUdyb3VwRmlsdGVyID0gYnVveUdyb3VwRmlsdGVyO1xuXHRcdHZtLmNvbW1hbmRGaWx0ZXIgPSBjb21tYW5kRmlsdGVyO1xuXHRcdHZtLnNlbmRDb21tYW5kID0gc2VuZENvbW1hbmQ7XG5cdFx0dm0uZGVsZXRlQ29tbWFuZCA9IGRlbGV0ZUNvbW1hbmQ7XG5cdFx0dm0uc2hvd0J1b3lDb25maWcgPSBzaG93QnVveUNvbmZpZztcblx0XHR2bS5hZGRUcmlnZ2VyID0gYWRkVHJpZ2dlcjtcblx0XHR2bS5jYW5jZWxOZXdDb21tYW5kID0gY2FuY2VsTmV3Q29tbWFuZDtcblx0XHR2bS5jYW5jZWxOZXdUcmlnZ2VyID0gY2FuY2VsTmV3VHJpZ2dlcjtcblx0XHR2bS5lZGl0aW5nID0gZWRpdGluZztcblx0XHR2bS5jYW5jZWxFZGl0TmFtZSA9IGNhbmNlbEVkaXROYW1lO1xuXHRcdHZtLmNhbmNlbEVkaXRHcm91cCA9IGNhbmNlbEVkaXRHcm91cDtcblx0XHR2bS50b2dnbGVCdW95R3JvdXAgPSB0b2dnbGVCdW95R3JvdXA7XG5cdFx0XG5cdFx0YWN0aXZhdGUoKTtcblx0XHRcblx0XHQvKiogQ2FsbGVkIHdoZW4gY29udHJvbGxlciBpcyBpbnN0YW50aWF0ZWQgKGNvbmZpZyBwYWdlIGlzIGxvYWRlZCkgKi9cblx0XHRmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcblx0XHRcdHF1ZXJ5QnVveUdyb3VwcygpO1xuXHRcdFx0cXVlcnlCdW95SW5zdGFuY2VzKCk7XG5cdFx0XHRxdWVyeUNvbW1hbmRUeXBlcygpO1xuXHRcdFx0cXVlcnlXYXJuaW5nVHJpZ2dlcnMoKTtcblx0XHRcdHJlc2V0TmV3VHJpZ2dlcigpO1xuXHRcdFx0c2V0VHJlZU9wdGlvbnMoKTtcblx0XHR9XG5cblx0XHQvKiogU2V0IHRoZSB0cmVlIG9wdGlvbnMgZm9yIGJ1b3kgZ3JvdXBzIGxpc3QgKi9cblx0XHRmdW5jdGlvbiBzZXRUcmVlT3B0aW9ucygpIHtcblx0XHRcdHZtLnRyZWVPcHRpb25zID0ge1xuXHRcdFx0XHRhY2NlcHQ6IGZ1bmN0aW9uKHNvdXJjZSwgZGVzdCwgZGVzdEluZGV4KSB7XG5cdFx0XHRcdFx0Ly8gaWYgKGRlc3Qubm9kcm9wRW5hYmxlZCkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0XHRcdFx0aWYgKHNvdXJjZS4kbW9kZWxWYWx1ZS50eXBlICE9IFwiaW5zdGFuY2VcIikge1xuXHRcdFx0XHRcdFx0Ly8gcHJldmVudCBncm91cHMgZnJvbSBiZWluZyBtb3ZlZCBpbnRvIGdyb3Vwc1xuXHRcdFx0XHRcdFx0aWYgKGRlc3QuZGVwdGgoKSA+IDApIHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gcHJldmVudCBpbnN0YW5jZXMgZnJvbSBiZWluZyBtb3ZlZCBvdXQgb2YgYSBncm91cFxuXHRcdFx0XHRcdFx0aWYgKGRlc3QuZGVwdGgoKSAhPSAxKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHQvLyBwcmV2ZW50IGluc3RhbmNlcyBiZWluZyBkcmFnZ2VkIGludG8gY29sbGFwc2VkIGdyb3Vwc1xuXHRcdFx0XHRcdFx0aWYgKGRlc3QuY2hpbGROb2RlcygpW2Rlc3RJbmRleF0gIT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRpZiAoZGVzdC5jaGlsZE5vZGVzKClbZGVzdEluZGV4XS5jb2xsYXBzZWQpIHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGRyb3BwZWQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZXZlbnQpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRkcmFnU3RhcnQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdFx0Ly8gc2VsZWN0IGJ1b3kgZ3JvdXAvaW5zdGFuY2Ugd2hlbiBpdCdzIGNsaWNrZWRcblx0XHRcdFx0XHQvLyAgKGRyYWdnaW5nIG92ZXJyaWRlcyBuZy1jbGljayBldmVudClcblx0XHRcdFx0XHR2YXIgc291cmNlID0gZXZlbnQuc291cmNlLm5vZGVTY29wZTtcblx0XHRcdFx0XHRpZiAoc291cmNlLiRtb2RlbFZhbHVlLnR5cGUgPT0gXCJncm91cFwiKSB7XG5cdFx0XHRcdFx0XHRzZWxlY3RCdW95R3JvdXAoc291cmNlLiRtb2RlbFZhbHVlKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c2VsZWN0QnVveUluc3RhbmNlKHNvdXJjZS4kbW9kZWxWYWx1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRcblx0XHQvKiogUXVlcnkgYnVveSBncm91cHMgZnJvbSB0aGUgc2VydmVyICovXG5cdFx0ZnVuY3Rpb24gcXVlcnlCdW95R3JvdXBzKCkge1xuXHRcdFx0c2VydmVyLmdldEJ1b3lHcm91cHMoKS50aGVuKGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHR2bS5idW95R3JvdXBzID0gcmVzLmRhdGEuYnVveUdyb3Vwcztcblx0XHRcdFx0cGFyc2VHcm91cE5hbWVzKClcblx0XHRcdH0sIGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHRndWkuYWxlcnRCYWRSZXNwb25zZShyZXMpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKiBRdWVyeSBidW95IGluc3RhbmNlcyBmcm9tIHRoZSBzZXJ2ZXIgKi9cblx0XHRmdW5jdGlvbiBxdWVyeUJ1b3lJbnN0YW5jZXMoKSB7XG5cdFx0XHRzZXJ2ZXIuZ2V0QnVveUluc3RhbmNlcygpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdHZtLmJ1b3lJbnN0YW5jZXMgPSByZXMuZGF0YS5idW95SW5zdGFuY2VzO1xuXHRcdFx0XHRwYXJzZUdyb3VwTmFtZXMoKVxuXHRcdFx0fSwgZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdGd1aS5hbGVydEJhZFJlc3BvbnNlKHJlcyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqIFF1ZXJ5IGNvbW1hbmQgdHlwZXMgZnJvbSB0aGUgc2VydmVyICovXG5cdFx0ZnVuY3Rpb24gcXVlcnlDb21tYW5kVHlwZXMoKSB7XG5cdFx0XHRzZXJ2ZXIuZ2V0Q29tbWFuZFR5cGVzKCkudGhlbihmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0dm0uY29tbWFuZFR5cGVzID0gcmVzLmRhdGEuY29tbWFuZFR5cGVzO1xuXHRcdFx0XHRxdWVyeUNvbW1hbmRzKCk7XG5cdFx0XHR9LCBmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0Z3VpLmFsZXJ0QmFkUmVzcG9uc2UocmVzKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRcblx0XHQvKiogUXVlcnkgYnVveSBjb21tYW5kcyBmcm9tIHRoZSBzZXJ2ZXIgKi9cblx0XHRmdW5jdGlvbiBxdWVyeUNvbW1hbmRzKCkge1xuXHRcdFx0c2VydmVyLmdldEJ1b3lDb21tYW5kcygpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdHZtLmNvbW1hbmRzID0gcmVzLmRhdGEuY29tbWFuZHM7XG5cdFx0XHRcdHBhcnNlQ29tbWFuZHMoKTtcblx0XHRcdH0sIGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHRndWkuYWxlcnRCYWRSZXNwb25zZShyZXMpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKiBRdWVyeSB3YXJuaW5nIHRyaWdnZXJzIGZyb20gdGhlIHNlcnZlciAqL1xuXHRcdGZ1bmN0aW9uIHF1ZXJ5V2FybmluZ1RyaWdnZXJzKCkge1xuXHRcdFx0c2VydmVyLmdldFdhcm5pbmdUcmlnZ2VycygpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdHZtLndhcm5pbmdUcmlnZ2VycyA9IHJlcy5kYXRhLndhcm5pbmdUcmlnZ2Vycztcblx0XHRcdFx0cXVlcnlTZW5zb3JUeXBlcygpO1xuXHRcdFx0fSwgZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdGd1aS5hbGVydEJhZFJlc3BvbnNlKHJlcyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqIFF1ZXJ5IHNlbnNvciB0eXBlcyBmcm9tIHRoZSBzZXJ2ZXIgKi9cblx0XHRmdW5jdGlvbiBxdWVyeVNlbnNvclR5cGVzKCkge1xuXHRcdFx0c2VydmVyLmdldFNlbnNvclR5cGVzKCkudGhlbihmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0dm0uc2Vuc29yVHlwZXMgPSByZXMuZGF0YS5zZW5zb3JUeXBlcztcblx0XHRcdFx0cGFyc2VXYXJuaW5nU2Vuc29ycygpO1xuXHRcdFx0fSwgZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdGd1aS5hbGVydEJhZFJlc3BvbnNlKHJlcyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqIEFzc29jaWF0ZSBidW95IGluc3RhbmNlcyB3aXRoIGdyb3VwcyAqL1xuXHRcdGZ1bmN0aW9uIHBhcnNlR3JvdXBOYW1lcygpIHtcblx0XHRcdHJlc2V0QnVveUdyb3VwSW5zdGFuY2VzKCk7XG5cdFx0XHR2bS5idW95SW5zdGFuY2VzLmZvckVhY2goZnVuY3Rpb24oYnVveUluc3RhbmNlKSB7XG5cdFx0XHRcdHNldEJ1b3lJbnN0YW5jZUdyb3VwKGJ1b3lJbnN0YW5jZSk7XG5cdFx0XHRcdGJ1b3lJbnN0YW5jZS50eXBlID0gJ2luc3RhbmNlJztcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRcblx0XHQvKiogQXNzb2NpYXRlIHNlbnNvciBhbmQgYnVveSBpbmZvIHdpdGggd2FybmluZ3MgKi9cblx0XHRmdW5jdGlvbiBwYXJzZVdhcm5pbmdTZW5zb3JzKCkge1xuXHRcdFx0dm0ud2FybmluZ1RyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24odHJpZ2dlcikge1xuXHRcdFx0XHQvLyBnZXQgYnVveSBuYW1lXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdm0uYnVveUluc3RhbmNlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHZhciBidW95SW5zdGFuY2UgPSB2bS5idW95SW5zdGFuY2VzW2ldO1xuXHRcdFx0XHRcdGlmIChidW95SW5zdGFuY2UuaWQgPT0gdHJpZ2dlci5idW95SW5zdGFuY2VJZCkge1xuXHRcdFx0XHRcdFx0dHJpZ2dlci5idW95TmFtZSA9IGJ1b3lJbnN0YW5jZS5uYW1lO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGdldCBzZW5zb3IgbmFtZVxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZtLnNlbnNvclR5cGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0dmFyIHNlbnNvclR5cGUgPSB2bS5zZW5zb3JUeXBlc1tpXTtcblx0XHRcdFx0XHRpZiAoc2Vuc29yVHlwZS5pZCA9PSB0cmlnZ2VyLnNlbnNvclR5cGVJZCkge1xuXHRcdFx0XHRcdFx0dHJpZ2dlci5zZW5zb3JOYW1lID0gc2Vuc29yVHlwZS5uYW1lO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogRGV0ZXJtaW5lIHdoZXRoZXIgdG8gc2hvdyBjb21tYW5kIGFuZCB3YXJuaW5nIHRyaWdnZXIgY29uZmlnXG5cdFx0ICogQHJldHVybiB7Ym9vbH0gc2hvdyBjb25maWdcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBzaG93QnVveUNvbmZpZygpIHtcblx0XHRcdGlmICh2bS5zZWxlY3RlZC50eXBlID09ICdpbnN0YW5jZScpIHJldHVybiB0cnVlO1xuXHRcdFx0aWYgKHZtLnNlbGVjdGVkLnR5cGUgPT0gJ2dyb3VwJyAmJiB2bS5ncm91cEJ1b3lzLmxlbmd0aCA+IDApIHJldHVybiB0cnVlO1xuXHRcdFx0aWYgKHZtLnNlbGVjdGVkLnR5cGUgPT0gJ2FsbCcgJiYgdm0uYnVveUluc3RhbmNlcy5sZW5ndGggPiAwKSByZXR1cm4gdHJ1ZTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqIEFzc29jaWF0ZSBidW95IGluc3RhbmNlcyB3aXRoIGJ1b3kgZ3JvdXBzICovXG5cdFx0ZnVuY3Rpb24gdXBkYXRlR3JvdXBCdW95cygpIHtcblx0XHRcdHZtLmdyb3VwQnVveXMgPSBbXTtcblx0XHRcdHZtLmJ1b3lJbnN0YW5jZXMuZm9yRWFjaChmdW5jdGlvbihidW95SW5zdGFuY2UpIHtcblx0XHRcdFx0aWYgKGJ1b3lJbnN0YW5jZS5idW95R3JvdXBJZCA9PSB2bS5zZWxlY3RlZC5vYmouaWQpIHtcblx0XHRcdFx0XHR2bS5ncm91cEJ1b3lzLnB1c2goYnVveUluc3RhbmNlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKiBTaG93IGNvbmZpZyBmb3IgYWxsIGJ1b3lzICovXG5cdFx0ZnVuY3Rpb24gc2VsZWN0QWxsKCkge1xuXHRcdFx0c3RvcEVkaXRpbmcoKTtcblx0XHRcdHZtLnNlbGVjdGVkLnR5cGUgPSAnYWxsJztcblx0XHR9XG5cdFx0XG5cdFx0LyoqIENsb3NlIGFsbCBlZGl0IGZpZWxkcyAqL1xuXHRcdGZ1bmN0aW9uIHN0b3BFZGl0aW5nKCkge1xuXHRcdFx0dm0uZWRpdE5hbWUub24gPSBmYWxzZTtcblx0XHRcdHZtLmVkaXRHcm91cC5vbiA9IGZhbHNlO1xuXHRcdFx0dm0ubmV3Q29tbWFuZCA9IGZhbHNlO1xuXHRcdFx0dm0ubmV3VHJpZ2dlciA9IGZhbHNlO1xuXHRcdH1cblx0XHRcblx0XHQvKiogU2hvdyBjb25maWcgZm9yIHNlbGVjdGVkIGJ1b3kgZ3JvdXAgKi9cblx0XHRmdW5jdGlvbiBzZWxlY3RCdW95R3JvdXAoYnVveUdyb3VwKSB7XG5cdFx0XHRzdG9wRWRpdGluZygpO1xuXHRcdFx0dm0uc2VsZWN0ZWQudHlwZSA9ICdncm91cCc7XG5cdFx0XHR2bS5zZWxlY3RlZC5vYmogPSBidW95R3JvdXA7XG5cdFx0XHR1cGRhdGVHcm91cEJ1b3lzKCk7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKiBTaG93IGNvbmZpZyBmb3Igc2VsZWN0ZWQgYnVveSBpbnN0YW5jZSAqL1xuXHRcdGZ1bmN0aW9uIHNlbGVjdEJ1b3lJbnN0YW5jZShidW95SW5zdGFuY2UpIHtcblx0XHRcdHN0b3BFZGl0aW5nKCk7XG5cdFx0XHR2bS5zZWxlY3RlZC50eXBlID0gJ2luc3RhbmNlJztcblx0XHRcdHZtLnNlbGVjdGVkLm9iaiA9IGJ1b3lJbnN0YW5jZTtcblx0XHRcdHVwZGF0ZUdyb3VwQnVveXMoKTtcblx0XHR9XG5cblx0XHQvKiogU2V0IGFsbCBidW95IGdyb3VwcyB0byBoYXZlIG5vIGluc3RhbmNlcyAqL1xuXHRcdGZ1bmN0aW9uIHJlc2V0QnVveUdyb3VwSW5zdGFuY2VzKCkge1xuXHRcdFx0dm0uYnVveUdyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uKGJ1b3lHcm91cCkge1xuXHRcdFx0XHRidW95R3JvdXAudHlwZSA9ICdncm91cCc7XG5cdFx0XHRcdGJ1b3lHcm91cC5idW95SW5zdGFuY2VzID0gW107XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvKiogQXNzb2NpYXRlIGJ1b3kgaW5zdGFuY2VzIHdpdGggZ3JvdXBzICovXG5cdFx0ZnVuY3Rpb24gc2V0QnVveUluc3RhbmNlR3JvdXAoYnVveUluc3RhbmNlKSB7XG5cdFx0XHR2bS5idW95R3JvdXBzLmZvckVhY2goZnVuY3Rpb24oYnVveUdyb3VwKSB7XG5cdFx0XHRcdGlmIChidW95R3JvdXAuaWQgPT0gYnVveUluc3RhbmNlLmJ1b3lHcm91cElkKSB7XG5cdFx0XHRcdFx0YnVveUluc3RhbmNlLmJ1b3lHcm91cE5hbWUgPSByZW1vdmVFbmNsb3NpbmdCcmFja2V0cyhidW95R3JvdXAubmFtZSk7XG5cdFx0XHRcdFx0YnVveUdyb3VwLmJ1b3lJbnN0YW5jZXMucHVzaChidW95SW5zdGFuY2UpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqIFRvZ2dsZSBidW95IGdyb3VwIGluIGxpc3QgKi9cblx0XHRmdW5jdGlvbiB0b2dnbGVCdW95R3JvdXAoYnVveUdyb3VwKSB7XG5cdFx0XHRidW95R3JvdXAuY29sbGFwc2VkID0gIWJ1b3lHcm91cC5jb2xsYXBzZWQ7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKiBTdGFydCBlZGl0aW5nIGJ1b3kgZ3JvdXAgb3IgaW5zdGFuY2UgbmFtZSAqL1xuXHRcdGZ1bmN0aW9uIHN0YXJ0RWRpdGluZ05hbWUoKSB7XG5cdFx0XHQvKiBpcyBpdCBiZXR0ZXIgdG8gYmluZCBlZGl0IHZhbHVlIGRpcmVjdGx5IHRvIG1haW4gYnVveUluc3RhbmNlLFxuXHRcdFx0b3Igd2FpdCB1bnRpbCBpdCdzICdzYXZlZCcgYmVmb3JlIHVwZGF0aW5nIG1haW4gYnVveUluc3RhbmNlP1xuXHRcdFx0dXBkYXRpbmcgbGl2ZSBpcyBjb29sZXIgKi9cblx0XHRcdC8vIHZtLmVkaXROYW1lLnZhbHVlID0gdm0uc2VsZWN0ZWQub2JqLm5hbWU7XG5cdFx0XHR2bS5lZGl0TmFtZS5vbiA9IHRydWU7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKiBTYXZlIGJ1b3kgZ3JvdXAgb3IgaW5zdGFuY2UgbmFtZSB0byBzZXJ2ZXIgYW5kIHVwZGF0ZSBwYWdlICovXG5cdFx0ZnVuY3Rpb24gZmluaXNoRWRpdGluZ05hbWUoKSB7XG5cdFx0XHQvLyB2bS5zZWxlY3RlZC5vYmoubmFtZSA9IHZtLmVkaXROYW1lLnZhbHVlO1xuXHRcdFx0dm0uZWRpdE5hbWUub24gPSBmYWxzZTtcblx0XHRcdC8vIHVwZGF0ZSBzZXJ2ZXJcblx0XHRcdGlmICh2bS5zZWxlY3RlZC50eXBlID09ICdncm91cCcpIHtcblx0XHRcdFx0c2VydmVyLnVwZGF0ZUJ1b3lHcm91cE5hbWUodm0uc2VsZWN0ZWQub2JqLmlkLFxuXHRcdFx0XHRcdHZtLnNlbGVjdGVkLm9iai5uYW1lKS50aGVuKGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHRcdFx0cXVlcnlCdW95R3JvdXBzKCk7XG5cdFx0XHRcdFx0XHRndWkuYWxlcnRTdWNjZXNzKCdOYW1lIHVwZGF0ZWQuJylcblx0XHRcdFx0XHR9LCBmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0XHRcdGd1aS5hbGVydEJhZFJlc3BvbnNlKHJlcyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2UgaWYgKHZtLnNlbGVjdGVkLnR5cGUgPT0gJ2luc3RhbmNlJykge1xuXHRcdFx0XHRzZXJ2ZXIudXBkYXRlQnVveUluc3RhbmNlTmFtZSh2bS5zZWxlY3RlZC5vYmouaWQsXG5cdFx0XHRcdFx0dm0uc2VsZWN0ZWQub2JqLm5hbWUsIHZtLnNlbGVjdGVkLm9iai5idW95R3JvdXBJZCkudGhlbihmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0XHRcdHF1ZXJ5QnVveUluc3RhbmNlcygpO1xuXHRcdFx0XHRcdFx0Z3VpLmFsZXJ0U3VjY2VzcygnTmFtZSB1cGRhdGVkLicpXG5cdFx0XHRcdFx0fSwgZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdFx0XHRndWkuYWxlcnRCYWRSZXNwb25zZShyZXMpO1xuXHRcdFx0XHRcdH0pOztcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0LyoqIENhbmNlbCBidW95IGdyb3VwIG9yIGluc3RhbmNlIG5hbWUgZWRpdGluZyAqL1xuXHRcdGZ1bmN0aW9uIGNhbmNlbEVkaXROYW1lKCkge1xuXHRcdFx0dm0uZWRpdE5hbWUub24gPSBmYWxzZTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqIFN0YXJ0IGVkaXRpbmcgdGhlIGdyb3VwIGlzIGEgYnVveSBpbnN0YW5jZSBpcyBpbiAqL1xuXHRcdGZ1bmN0aW9uIHN0YXJ0RWRpdGluZ0J1b3lHcm91cCgpIHtcblx0XHRcdHZtLmVkaXRHcm91cC5vbiA9IHRydWU7XG5cdFx0XHR2bS5lZGl0R3JvdXAuYnVveUdyb3VwSWQgPSB2bS5zZWxlY3RlZC5vYmouYnVveUdyb3VwSWQ7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKiBTYXZlIGJ1b3kncyBuZXcgZ3JvdXAgYW5kIG5hbWUgdG8gc2VydmVyIGFuZCB1cGRhdGUgcGFnZSAqL1xuXHRcdGZ1bmN0aW9uIGZpbmlzaEVkaXRpbmdCdW95R3JvdXAoKSB7XG5cdFx0XHR2bS5lZGl0R3JvdXAub24gPSBmYWxzZTtcblx0XHRcdHZtLnNlbGVjdGVkLm9iai5idW95R3JvdXBJZCA9IHZtLmVkaXRHcm91cC5idW95R3JvdXBJZDtcblx0XHRcdHNldEJ1b3lHcm91cE5hbWUodm0uc2VsZWN0ZWQub2JqKTtcblx0XHRcdC8vIHVwZGF0ZSBzZXJ2ZXJcblx0XHRcdHNlcnZlci51cGRhdGVCdW95SW5zdGFuY2VHcm91cChcblx0XHRcdFx0dm0uc2VsZWN0ZWQub2JqLmJ1b3lJZCxcblx0XHRcdFx0dm0uZWRpdEdyb3VwLmJ1b3lHcm91cElkLFxuXHRcdFx0XHR2bS5lZGl0R3JvdXAubmFtZVxuXHRcdFx0KS50aGVuKGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHRxdWVyeUJ1b3lJbnN0YW5jZXMoKTtcblx0XHRcdFx0Z3VpLmFsZXJ0U3VjY2VzcygnTmV3IGJ1b3kgaW5zdGFuY2UgY3JlYXRlZC4nKVxuXHRcdFx0fSwgZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdGd1aS5hbGVydEJhZFJlc3BvbnNlKHJlcyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqIENhbmNlbCBlZGl0IG9mIGEgYnVveSdzIGdyb3VwICovXG5cdFx0ZnVuY3Rpb24gY2FuY2VsRWRpdEdyb3VwKCkge1xuXHRcdFx0dm0uZWRpdEdyb3VwLm9uID0gZmFsc2U7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIERldGVybWluZSB3aGV0aGVyIGFuIGVkaXQgZmllbGQgaXMgY3VycmVudGx5IG9wZW4uIFVzZWQgdG9cblx0XHQgKiBlbnN1cmUgdGhhdCB1c2VycyBjYW4gb25seSBlZGl0IG9uZSBwYXJ0aWN1bGFyIHRoaW5nIGF0IG9uY2UuXG5cdFx0ICogQHJldHVybiB7Ym9vbH0gZWRpdCBmaWVsZCBpcyBvcGVuXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gZWRpdGluZygpIHtcblx0XHRcdGlmICh2bS5lZGl0TmFtZS5vbikgcmV0dXJuIHRydWU7XG5cdFx0XHRpZiAodm0uZWRpdEdyb3VwLm9uKSByZXR1cm4gdHJ1ZTtcblx0XHRcdGlmICh2bS5uZXdDb21tYW5kKSByZXR1cm4gdHJ1ZTtcblx0XHRcdGlmICh2bS5uZXdUcmlnZ2VyKSByZXR1cm4gdHJ1ZTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqIFNob3cgY29uZmlnIGZvciBhIG5ldyBidW95IGdyb3VwICovXG5cdFx0ZnVuY3Rpb24gc2VsZWN0TmV3QnVveUdyb3VwKCkge1xuXHRcdFx0dm0uc2VsZWN0ZWQudHlwZSA9ICduZXdHcm91cCc7XG5cdFx0XHR2bS5zZWxlY3RlZC5vYmogPSBudWxsO1xuXHRcdH1cblx0XHRcblx0XHQvKiogU2F2ZSBuZXcgYnVveSBncm91cCB0byBzZXJ2ZXIgYW5kIHVwZGF0ZSBwYWdlICovXG5cdFx0ZnVuY3Rpb24gc2F2ZU5ld0J1b3lHcm91cCgpIHtcblx0XHRcdHNlcnZlci5uZXdCdW95R3JvdXAodm0uZWRpdE5hbWUudmFsdWUpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdHZtLnNlbGVjdGVkLnR5cGUgPSAnYWxsJztcblx0XHRcdFx0cXVlcnlCdW95R3JvdXBzKCk7XG5cdFx0XHRcdGd1aS5hbGVydFN1Y2Nlc3MoJ05ldyBncm91cCBjcmVhdGVkLicpXG5cdFx0XHR9LCBmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0Z3VpLmFsZXJ0QmFkUmVzcG9uc2UocmVzKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRcdFx0XG5cdFx0LyoqIEFzc29jaWF0ZSBlYWNoIGNvbW1hbmQgd2l0aCBidW95IGFuZCBjb21tYW5kIGluZm8gKi9cblx0XHRmdW5jdGlvbiBwYXJzZUNvbW1hbmRzKCkge1xuXHRcdFx0dm0uY29tbWFuZHMuZm9yRWFjaChmdW5jdGlvbihjb21tYW5kKSB7XG5cdFx0XHRcdC8vIGdldCBidW95IG5hbWVcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2bS5idW95SW5zdGFuY2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0dmFyIGJ1b3lJbnN0YW5jZSA9IHZtLmJ1b3lJbnN0YW5jZXNbaV07XG5cdFx0XHRcdFx0aWYgKGNvbW1hbmQuYnVveUlkID09IGJ1b3lJbnN0YW5jZS5idW95SWQpIHtcblx0XHRcdFx0XHRcdGNvbW1hbmQuYnVveU5hbWUgPSBidW95SW5zdGFuY2UubmFtZTtcblx0XHRcdFx0XHRcdGlmIChjb21tYW5kLmJ1b3lOYW1lID09IFwiXCIpIHtcblx0XHRcdFx0XHRcdFx0Y29tbWFuZC5idW95TmFtZSA9IFwiKG5vIG5hbWUpXCJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBnZXQgY29tbWFuZCBuYW1lXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdm0uY29tbWFuZFR5cGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGNvbW1hbmQuY29tbWFuZFR5cGVJZCA9PSB2bS5jb21tYW5kVHlwZXNbaV0uaWQpIHtcblx0XHRcdFx0XHRcdGNvbW1hbmQuY29tbWFuZE5hbWUgPSB2bS5jb21tYW5kVHlwZXNbaV0ubmFtZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKiBQcmVwYXJlIHRvIHNlbmQgbmV3IGNvbW1hbmQocykgdG8gc2VydmVyICovXG5cdFx0ZnVuY3Rpb24gc2VuZENvbW1hbmQoKSB7XG5cdFx0XHRpZiAodm0uY29tbWFuZC5pZCA9PSAtMSB8fCB2bS5jb21tYW5kLnZhbHVlID09ICcnKSByZXR1cm47XG5cdFx0XHR2bS5uZXdDb21tYW5kID0gZmFsc2U7XG5cdFx0XHR2YXIgYnVveUlkcyA9IFtdOyAvLyBidW95cyB0byBzZW5kIGNvbW1hbmQgZm9yXG5cdFx0XHRpZiAodm0uc2VsZWN0ZWQudHlwZSA9PSAnaW5zdGFuY2UnKSB7XG5cdFx0XHRcdGJ1b3lJZHMucHVzaCh2bS5zZWxlY3RlZC5vYmouYnVveUlkKTtcblx0XHRcdH0gZWxzZSBpZiAodm0uc2VsZWN0ZWQudHlwZSA9PSAnZ3JvdXAnKSB7XG5cdFx0XHRcdC8vIHNlbmQgY29tbWFuZCB0byBlYWNoIGJ1b3kgaW4gc2VsZWN0ZWQgZ3JvdXBcblx0XHRcdFx0dm0uYnVveUluc3RhbmNlcy5mb3JFYWNoKGZ1bmN0aW9uKGJ1b3lJbnN0YW5jZSkge1xuXHRcdFx0XHRcdGlmIChidW95SW5zdGFuY2UuYnVveUdyb3VwSWQgPT0gdm0uc2VsZWN0ZWQub2JqLmlkKSB7XG5cdFx0XHRcdFx0XHRidW95SWRzLnB1c2goYnVveUluc3RhbmNlLmJ1b3lJZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSBpZiAodm0uc2VsZWN0ZWQudHlwZSA9PSAnYWxsJykge1xuXHRcdFx0XHQvLyBzZW5kIGNvbW1hbmQgdG8gYWxsIGJ1b3lzXG5cdFx0XHRcdHZtLmJ1b3lJbnN0YW5jZXMuZm9yRWFjaChmdW5jdGlvbihidW95SW5zdGFuY2UpIHtcblx0XHRcdFx0XHRidW95SWRzLnB1c2goYnVveUluc3RhbmNlLmJ1b3lJZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0c2VuZENvbW1hbmRzKGJ1b3lJZHMpO1x0XHRcdFxuXHRcdFx0cmVzZXROZXdDb21tYW5kKCk7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKiBDbGVhciBjb21tYW5kIGlucHV0IGZpZWxkcyAqL1xuXHRcdGZ1bmN0aW9uIHJlc2V0TmV3Q29tbWFuZCgpIHtcblx0XHRcdHZtLmNvbW1hbmQuaWQgPSAtMTtcblx0XHRcdHZtLmNvbW1hbmQudmFsdWUgPSAnJztcblx0XHR9XG5cdFx0XG5cdFx0LyoqIENhbmNlbCBlZGl0aW5nIG9mIG5ldyBjb21tYW5kICovXG5cdFx0ZnVuY3Rpb24gY2FuY2VsTmV3Q29tbWFuZCgpIHtcblx0XHRcdHZtLm5ld0NvbW1hbmQgPSBmYWxzZTtcblx0XHRcdHJlc2V0TmV3Q29tbWFuZCgpO1xuXHRcdH1cblx0XHRcblx0XHQvKiogU2VuZCBjb21tYW5kKHMpIGZvciBidW95KHMpIHRvIHNlcnZlciBhbmQgdXBkYXRlIHBhZ2UgKi9cblx0XHRmdW5jdGlvbiBzZW5kQ29tbWFuZHMoYnVveUlkcykge1xuXHRcdFx0c2VydmVyLnNlbmRCdW95Q29tbWFuZCh2bS5jb21tYW5kLCBidW95SWRzKS50aGVuKGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHRxdWVyeUNvbW1hbmRzKCk7XG5cdFx0XHRcdGd1aS5hbGVydFN1Y2Nlc3MoJ0NvbW1hbmQgcXVldWVkLicpXG5cdFx0XHR9LCBmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0Z3VpLmFsZXJ0QmFkUmVzcG9uc2UocmVzKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRcblx0XHQvKiogRGVsZXRlIGNvbW1hbmQocykgZm9yIGJ1b3kocykgYW5kIHVwZGF0ZSBzZXJ2ZXIgKi9cblx0XHRmdW5jdGlvbiBkZWxldGVDb21tYW5kKGNvbW1hbmQpIHtcblx0XHRcdFxuXHRcdH1cblx0XHRcblx0XHQvKiogUHJlcGFyZSB0byBhZGQgbmV3IHRyaWdnZXIgd2FybmluZyBmb3IgYnVveSBvciBncm91cCAqL1xuXHRcdGZ1bmN0aW9uIGFkZFRyaWdnZXIoKSB7XG5cdFx0XHRpZiAodm0udHJpZ2dlci5zZW5zb3JUeXBlSWQgPT0gLTEgfHwgdm0udHJpZ2dlci52YWx1ZSA9PSAnJykgcmV0dXJuO1xuXHRcdFx0dm0ubmV3VHJpZ2dlciA9IGZhbHNlO1xuXHRcdFx0dmFyIGJ1b3lJbnN0YW5jZUlkcyA9IFtdOyAvLyBidW95cyBpbnN0YW5jZXMgdG8gYWRkIHRyaWdnZXIgZm9yXG5cdFx0XHRpZiAodm0uc2VsZWN0ZWQudHlwZSA9PSAnaW5zdGFuY2UnKSB7XG5cdFx0XHRcdGJ1b3lJbnN0YW5jZUlkcy5wdXNoKHZtLnNlbGVjdGVkLm9iai5pZCk7XG5cdFx0XHR9IGVsc2UgaWYgKHZtLnNlbGVjdGVkLnR5cGUgPT0gJ2dyb3VwJykge1xuXHRcdFx0XHQvLyBhZGQgdHJpZ2dlciBmb3IgZWFjaCBidW95IGluIGdyb3VwXG5cdFx0XHRcdHZtLmJ1b3lJbnN0YW5jZXMuZm9yRWFjaChmdW5jdGlvbihidW95SW5zdGFuY2UpIHtcblx0XHRcdFx0XHRpZiAoYnVveUluc3RhbmNlLmJ1b3lHcm91cElkID09IHZtLnNlbGVjdGVkLm9iai5pZCkge1xuXHRcdFx0XHRcdFx0YnVveUluc3RhbmNlSWRzLnB1c2goYnVveUluc3RhbmNlLmlkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIGlmICh2bS5zZWxlY3RlZC50eXBlID09ICdhbGwnKSB7XG5cdFx0XHRcdC8vIGFkZCB0cmlnZ2VyIGZvciBhbGwgYnVveXNcblx0XHRcdFx0dm0uYnVveUluc3RhbmNlcy5mb3JFYWNoKGZ1bmN0aW9uKGJ1b3lJbnN0YW5jZSkge1xuXHRcdFx0XHRcdGJ1b3lJbnN0YW5jZUlkcy5wdXNoKGJ1b3lJbnN0YW5jZS5pZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0c2VuZFRyaWdnZXJzKGJ1b3lJbnN0YW5jZUlkcyk7XG5cdFx0XHRyZXNldE5ld1RyaWdnZXIoKTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqIFNlbmQgbmV3IHdhcm5pbmcgdHJpZ2dlcnMgdG8gc2VydmVyIGFuZCB1cGRhdGUgcGFnZSAqL1xuXHRcdGZ1bmN0aW9uIHNlbmRUcmlnZ2VycyhidW95SWRzKSB7XG5cdFx0XHRzZXJ2ZXIuYWRkV2FybmluZ1RyaWdnZXJzKHZtLnRyaWdnZXIsIGJ1b3lJZHMpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdHF1ZXJ5V2FybmluZ1RyaWdnZXJzKCk7XG5cdFx0XHRcdGd1aS5hbGVydFN1Y2Nlc3MoJ1dhcm5pbmcgdHJpZ2dlciBhZGRlZC4nKVxuXHRcdFx0fSwgZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdGd1aS5hbGVydEJhZFJlc3BvbnNlKHJlcyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqIENsZWFyIHRyaWdnZXIgaW5wdXRzICovXG5cdFx0ZnVuY3Rpb24gcmVzZXROZXdUcmlnZ2VyKCkge1xuXHRcdFx0dm0udHJpZ2dlciA9IHtcblx0XHRcdFx0c2Vuc29yVHlwZUlkOiAtMSxcblx0XHRcdFx0b3BlcmF0b3I6ICc8Jyxcblx0XHRcdFx0dmFsdWU6ICcnLFxuXHRcdFx0XHRtZXNzYWdlOiAnJ1xuXHRcdFx0fTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqIENhbmNlbCBjcmVhdGlvbiBvZiBhIG5ldyB0cmlnZ2VyICovXG5cdFx0ZnVuY3Rpb24gY2FuY2VsTmV3VHJpZ2dlcigpIHtcblx0XHRcdHZtLm5ld1RyaWdnZXIgPSBmYWxzZTtcblx0XHRcdHJlc2V0TmV3VHJpZ2dlcigpO1xuXHRcdH1cblx0XHRcblx0XHQvKiogXG5cdFx0ICogRmlsdGVyICd1bmFzc2lnbmVkJyBvdXQgb2YgYnVveSBncm91cCBsaXN0XG5cdFx0ICogQHBhcmFtICB7b2JqZWN0fSBidW95R3JvdXAgXG5cdFx0ICogQHJldHVybiB7Ym9vbH0gICAgICAgICAgIHNob3cgYnVveSBncm91cFxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGJ1b3lHcm91cEZpbHRlcihidW95R3JvdXApIHtcblx0XHRcdGlmIChidW95R3JvdXAuaWQgIT0gMCkgcmV0dXJuIHRydWU7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIEZpbHRlciBjb21tYW5kcyBsaXN0IGJhc2VkIG9uIGN1cnJlbnRseSBzZWxlY3RlZCBidW95L2dyb3VwXG5cdFx0ICogQHBhcmFtICB7b2JqZWN0fSBjb21tYW5kIGNvbW1hbmRcblx0XHQgKiBAcmV0dXJuIHtib29sfSAgICAgICAgIHNob3cgY29tbWFuZFxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGNvbW1hbmRGaWx0ZXIoY29tbWFuZCkge1xuXHRcdFx0aWYgKHZtLnNlbGVjdGVkLnR5cGUgPT0gJ2FsbCcpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKHZtLnNlbGVjdGVkLnR5cGUgPT0gJ2luc3RhbmNlJykge1xuXHRcdFx0XHRyZXR1cm4gYnVveUluc3RhbmNlQ29tbWFuZEZpbHRlcihjb21tYW5kKTtcblx0XHRcdH0gZWxzZSBpZiAodm0uc2VsZWN0ZWQudHlwZSA9PSAnZ3JvdXAnKSB7XG5cdFx0XHRcdHJldHVybiBidW95R3JvdXBDb21tYW5kRmlsdGVyKGNvbW1hbmQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRcblx0XHQvKipcblx0XHQgKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGNvbW1hbmRGaWx0ZXJcblx0XHQgKiBAcGFyYW0gIHtvYmplY3R9IGNvbW1hbmQgY29tbWFuZFxuXHRcdCAqIEByZXR1cm4ge2Jvb2x9ICAgICAgICAgc2hvdyBjb21tYW5kXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gYnVveUluc3RhbmNlQ29tbWFuZEZpbHRlcihjb21tYW5kKSB7XG5cdFx0XHRpZiAoY29tbWFuZC5idW95SWQgPT0gdm0uc2VsZWN0ZWQub2JqLmJ1b3lJZCkgcmV0dXJuIHRydWU7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIEhlbHBlciBmdW5jdGlvbiBmb3IgY29tbWFuZEZpbHRlclxuXHRcdCAqIEBwYXJhbSAge29iamVjdH0gY29tbWFuZCBjb21tYW5kXG5cdFx0ICogQHJldHVybiB7Ym9vbH0gICAgICAgICBzaG93IGNvbW1hbmRcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBidW95R3JvdXBDb21tYW5kRmlsdGVyKGNvbW1hbmQpIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdm0uYnVveUluc3RhbmNlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgYnVveUluc3RhbmNlID0gdm0uYnVveUluc3RhbmNlc1tpXTtcblx0XHRcdFx0aWYgKGJ1b3lJbnN0YW5jZS5idW95R3JvdXBJZCA9PSB2bS5zZWxlY3RlZC5vYmouaWQpIHtcblx0XHRcdFx0XHRpZiAoY29tbWFuZC5idW95SWQgPT0gYnVveUluc3RhbmNlLmJ1b3lJZCkgcmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBSZW1vdmUgZW5jbG9zaW5nIGJyYWNrZXRzIGZyb20gYSBzdHJpbmdcblx0XHQgKiBAcGFyYW0gIHtzdHJ9IHN0ciBzdHJpbmcgdG8gb3BlcmF0ZSBvblxuXHRcdCAqIEByZXR1cm4ge3N0cn0gICAgIGVkaXRlZCBzdHJpbmdcblx0XHQgKi9cblx0XHRmdW5jdGlvbiByZW1vdmVFbmNsb3NpbmdCcmFja2V0cyhzdHIpIHtcblx0XHRcdGlmIChzdHJbMF0gPT0gJygnKSB7XG5cdFx0XHRcdHN0ciA9IHN0ci5zdWJzdHIoMSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc3RyW3N0ci5sZW5ndGggLSAxXSA9PSAnKScpIHtcblx0XHRcdFx0c3RyID0gc3RyLnN1YnN0cigwLCBzdHIubGVuZ3RoIC0gMSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3RyO1xuXHRcdH1cblx0fVxufSkoKTsiLCIvKipcbiAqIEZsb29kIE1vbml0b3JpbmcgU3lzdGVtXG4gKiBWZXJzaW9uIDAuMC4xIChEdXl1bmcpXG4gKlxuICogQ29weXJpZ2h0IChDKSBUZWFtIE5lcHR1bmVcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogQGF1dGhvciAgICAgQW5kcmV3IER5ZXIgPGFuZHJld0BkeWVyZ3JvdXAuY29tLmF1PlxuICogQHZlcnNpb24gICAgMC4wLjFcbiAqIEBjb3B5cmlnaHQgIFRlYW0gTmVwdHVuZSAoMjAxNSlcbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hY2xlbC9kZWNvMzgwMVxuICovXG4oZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAuY29uZmlnJylcblx0XHQucnVuKHNldFJvdXRlcyk7XG5cdFxuXHQvKiogRGVmaW5lIHJvdXRlcyBmb3IgY29uZmlnIG1vZHVsZSAqL1xuXHRmdW5jdGlvbiBzZXRSb3V0ZXMocm91dGVySGVscGVyKSB7XG5cdFx0cm91dGVySGVscGVyLmNvbmZpZ3VyZVN0YXRlcyhnZXRTdGF0ZXMoKSk7XG5cdH1cblx0XG5cdGZ1bmN0aW9uIGdldFN0YXRlcygpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0e1xuXHRcdFx0XHRzdGF0ZTogJ2NvbmZpZycsXG5cdFx0XHRcdGNvbmZpZzoge1xuXHRcdFx0XHRcdHVybDogJy9jb25maWcnLFxuXHRcdFx0XHRcdGNvbnRyb2xsZXI6ICdDb25maWdDb250cm9sbGVyJyxcblx0XHRcdFx0XHRjb250cm9sbGVyQXM6ICd2bScsXG5cdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvYXBwL2NvbmZpZy9jb25maWcuaHRtbCcsXG5cdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0YWNjZXNzOiAncG93ZXJfdXNlcidcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdO1xuXHR9XG59KSgpOyIsIi8qKlxuICogRmxvb2QgTW9uaXRvcmluZyBTeXN0ZW1cbiAqIFZlcnNpb24gMC4wLjEgKER1eXVuZylcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIFRlYW0gTmVwdHVuZVxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBAYXV0aG9yICAgICBBbmRyZXcgRHllciA8YW5kcmV3QGR5ZXJncm91cC5jb20uYXU+XG4gKiBAdmVyc2lvbiAgICAwLjAuMVxuICogQGNvcHlyaWdodCAgVGVhbSBOZXB0dW5lICgyMDE1KVxuICogQGxpbmsgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FjbGVsL2RlY28zODAxXG4gKi9cbihmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0YW5ndWxhci5tb2R1bGUoJ2FwcC5jb3JlJylcblx0XHQucnVuKHNldFJvdXRlcyk7XG5cdFx0XG5cdC8qKiBEZWZpbmUgcm91dGVzIGZvciBjb3JlIG1vZHVsZSAqL1xuXHRmdW5jdGlvbiBzZXRSb3V0ZXMocm91dGVySGVscGVyKSB7XG5cdFx0dmFyIG90aGVyd2lzZVBhdGggPSAnL2hlbGxvJztcblx0XHRyb3V0ZXJIZWxwZXIuY29uZmlndXJlU3RhdGVzKGdldFN0YXRlcygpLCBvdGhlcndpc2VQYXRoKTtcblx0fVxuXHRcblx0ZnVuY3Rpb24gZ2V0U3RhdGVzKCkge1xuXHRcdHJldHVybiBbXG5cdFx0XHR7XG5cdFx0XHRcdHN0YXRlOiAnaGVsbG8nLFxuXHRcdFx0XHRjb25maWc6IHtcblx0XHRcdFx0XHR1cmw6ICcvaGVsbG8nLFxuXHRcdFx0XHRcdGNvbnRyb2xsZXI6ICdIZWxsb0NvbnRyb2xsZXInLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdGFjY2VzczogJ2FueSdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdO1xuXHR9XG59KSgpOyIsIi8qKlxuICogRmxvb2QgTW9uaXRvcmluZyBTeXN0ZW1cbiAqIFZlcnNpb24gMC4wLjEgKER1eXVuZylcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIFRlYW0gTmVwdHVuZVxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBAYXV0aG9yICAgICBBbmRyZXcgRHllciA8YW5kcmV3QGR5ZXJncm91cC5jb20uYXU+XG4gKiBAdmVyc2lvbiAgICAwLjAuMVxuICogQGNvcHlyaWdodCAgVGVhbSBOZXB0dW5lICgyMDE1KVxuICogQGxpbmsgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FjbGVsL2RlY28zODAxXG4gKi9cbihmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0YW5ndWxhci5tb2R1bGUoJ2FwcC5jb3JlJylcblx0XHQuY29udHJvbGxlcignSGVsbG9Db250cm9sbGVyJywgSGVsbG9Db250cm9sbGVyKTtcblx0XG5cdC8qKlxuXHRcdCogQG5nZG9jIG9iamVjdFxuXHRcdCogQG5hbWUgYXBwLmNvcmUuY29udHJvbGxlcjpIZWxsb0NvbnRyb2xsZXJcblx0XHQqIEBkZXNjcmlwdGlvbiBQcm92aWRlcyBhIGxhbmRpbmcgcGFnZSB3aGljaCBkb2Vzbid0IGhhdmUgYW55XG5cdFx0KiAgICAgICAgICAgICAgYXV0aGVudGljYXRpb24gcmVxdWlyZW1lbnRzLCB0byBwcmV2ZW50IHJvdXRpbmcgbG9vcFxuXHRcdCogQHJlcXVpcmVzICRzdGF0ZVxuXHRcdCogQHJlcXVpcmVzICRsb2dcblx0KiovXG5cdGZ1bmN0aW9uIEhlbGxvQ29udHJvbGxlcigkc3RhdGUsICRsb2cpIHtcblx0XHR2YXIgdm0gPSB0aGlzO1xuXHRcdFxuXHRcdGFjdGl2YXRlKCk7XG5cdFx0XG5cdFx0LyoqIENhbGxlZCB3aGVuIGNvbnRyb2xsZXIgaXMgaW5zdGFudGlhdGVkIChoZWxsbyBwYWdlIGlzIGxvYWRlZClcblx0XHQgKiAgSW1tZWRpYXRlbHkgcmVkaXJlY3RzIHVzZXIgdG8gZGFzaGJvYXJkLCBhbmQgaWYgdGhhdCBmYWlsc1xuXHRcdCAqICAoYmVjYXVzZSB1c2VyIGlzbid0IGxvZ2dlZCBpbiksIHJlZGlyZWN0cyB0byBsb2dpbiBwYWdlLlxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuXHRcdFx0JGxvZy5kZWJ1ZygnaG93ZHknKTtcblx0XHRcblx0XHRcdC8vIGdvIHRvIGRhc2hib2FyZFxuXHRcdFx0JHN0YXRlLmdvKCdkYXNoYm9hcmQnKTtcblx0XHRcdFxuXHRcdFx0Ly8gaWYgdGhhdCBkaWRuJ3Qgd29yaywgZ28gdG8gbG9naW5cblx0XHRcdGlmICgkc3RhdGUuaW5jbHVkZXMoJ2hlbGxvJykpIHtcblx0XHRcdFx0JHN0YXRlLmdvKCdsb2dpbicpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSkoKTsiLCIvKipcbiAqIEZsb29kIE1vbml0b3JpbmcgU3lzdGVtXG4gKiBWZXJzaW9uIDAuMC4xIChEdXl1bmcpXG4gKlxuICogQ29weXJpZ2h0IChDKSBUZWFtIE5lcHR1bmVcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogQGF1dGhvciAgICAgQW5kcmV3IER5ZXIgPGFuZHJld0BkeWVyZ3JvdXAuY29tLmF1PlxuICogQHZlcnNpb24gICAgMC4wLjFcbiAqIEBjb3B5cmlnaHQgIFRlYW0gTmVwdHVuZSAoMjAxNSlcbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hY2xlbC9kZWNvMzgwMVxuICovXG4oZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAuY29yZScpXG5cdFx0LnByb3ZpZGVyKCdyb3V0ZXJIZWxwZXInLCByb3V0ZXJIZWxwZXJQcm92aWRlcik7XG5cdFxuXHQvKipcblx0XHQqIEBuZ2RvYyBwcm92aWRlclxuXHRcdCogQG5hbWUgYXBwLmNvcmUucm91dGVySGVscGVyXG5cdFx0KiBAcmVxdWlyZXMgJGxvY2F0aW9uUHJvdmlkZXJcblx0XHQqIEByZXF1aXJlcyAkc3RhdGVQcm92aWRlclxuXHRcdCogQHJlcXVpcmVzICR1cmxSb3V0ZXJQcm92aWRlclxuXHRcdCogQGRlc2NyaXB0aW9uIFByb3ZpZGVzIHNvbWUgaGVscGVyIGZ1bmN0aW9ucyBmb3Igcm90aW5nXG5cdCoqL1xuXHRmdW5jdGlvbiByb3V0ZXJIZWxwZXJQcm92aWRlcigkbG9jYXRpb25Qcm92aWRlciwgXG5cdFx0JHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuXHRcdFxuXHRcdHRoaXMuJGdldCA9IFJvdXRlckhlbHBlcjtcblx0XHRcblx0XHRmdW5jdGlvbiBSb3V0ZXJIZWxwZXIoJHN0YXRlKSB7XG5cdFx0XHR2YXIgaGFzT3RoZXJ3aXNlID0gZmFsc2U7XG5cdFx0XHRcblx0XHRcdC8qKiBUaGUgcHJvdmlkZXIgbWV0aG9kcyB0byBleHBvc2UgKi9cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNvbmZpZ3VyZVN0YXRlczogY29uZmlndXJlU3RhdGVzLFxuXHRcdFx0XHRnZXRTdGF0ZXM6IGdldFN0YXRlcyxcblx0XHRcdFx0c3RhdGVBY3RpdmU6IHN0YXRlQWN0aXZlXG5cdFx0XHR9O1xuXHRcdFx0XG5cdFx0XHQvKiogQWxsb3dzIHRoZSBjYWxsZXIgdG8gYWRkIGEgbmV3IHJvdXRlIChzdGF0ZSkgdG8gdGhlIGFwcCAqL1xuXHRcdFx0ZnVuY3Rpb24gY29uZmlndXJlU3RhdGVzKHN0YXRlcywgb3RoZXJ3aXNlUGF0aCkge1xuXHRcdFx0XHRzdGF0ZXMuZm9yRWFjaChmdW5jdGlvbihzdGF0ZSkge1xuXHRcdFx0XHRcdCRzdGF0ZVByb3ZpZGVyLnN0YXRlKHN0YXRlLnN0YXRlLCBzdGF0ZS5jb25maWcpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0Lyogb3RoZXJ3aXNlUGF0aCBpcyBhIGZhbGxiYWNrIHJvdXRlICovXG5cdFx0XHRcdGlmIChvdGhlcndpc2VQYXRoICYmICFoYXNPdGhlcndpc2UpIHtcblx0XHRcdFx0XHRoYXNPdGhlcndpc2UgPSB0cnVlO1xuXHRcdFx0XHRcdCR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2Uob3RoZXJ3aXNlUGF0aCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBSZXR1cm4gYXBwIHJvdXRlc1xuXHRcdFx0ICogQHJldHVybiB7b2JqZWN0fSByb3V0ZXNcblx0XHRcdCAqL1xuXHRcdFx0ZnVuY3Rpb24gZ2V0U3RhdGVzKCkge1xuXHRcdFx0XHRyZXR1cm4gJHN0YXRlLmdldCgpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvKipcblx0XHRcdCAqIFJldHVybiB3aGV0aGVyIGEgc3RhdGUgaXMgYWN0aXZlIG9yIG5vdFxuXHRcdFx0ICogQHBhcmFtICB7c3RyaW5nfSBuYW1lIHN0YXRlIG5hbWVcblx0XHRcdCAqIEByZXR1cm4ge2Jvb2x9ICAgICAgc3RhdGUgaXMgYWN0aXZlXG5cdFx0XHQgKi9cblx0XHRcdGZ1bmN0aW9uIHN0YXRlQWN0aXZlKG5hbWUpIHtcblx0XHRcdFx0cmV0dXJuICRzdGF0ZS5pbmNsdWRlcyhuYW1lKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0pKCk7IiwiLyoqXG4gKiBGbG9vZCBNb25pdG9yaW5nIFN5c3RlbVxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxuICpcbiAqIENvcHlyaWdodCAoQykgVGVhbSBOZXB0dW5lXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIEBhdXRob3IgICAgIEFuZHJldyBEeWVyIDxhbmRyZXdAZHllcmdyb3VwLmNvbS5hdT5cbiAqIEB2ZXJzaW9uICAgIDAuMC4xXG4gKiBAY29weXJpZ2h0ICBUZWFtIE5lcHR1bmUgKDIwMTUpXG4gKiBAbGluayAgICAgICBodHRwczovL2dpdGh1Yi5jb20vYWNsZWwvZGVjbzM4MDFcbiAqL1xuLyogZ2xvYmFsIHNhdmVBcyAqL1xuKGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRhbmd1bGFyLm1vZHVsZSgnYXBwJylcblx0XHQuZmFjdG9yeSgnc2VydmVyJywgc2VydmVyKTtcblx0XG5cdC8qKlxuXHRcdCogQG5nZG9jIHNlcnZpY2Vcblx0XHQqIEBuYW1lIGFwcC5jb3JlLnNlcnZlclxuXHRcdCogQHJlcXVpcmVzICRodHRwXG5cdFx0KiBAcmVxdWlyZXMgJGxvZ1xuXHRcdCogQHJlcXVpcmVzIFNFUlZFUl9BRERSRVNTXG5cdFx0KiBAcmVxdWlyZXMgYXV0aFxuXHRcdCogQHJlcXVpcmVzIG1vbWVudFxuXHQqKi9cblx0ZnVuY3Rpb24gc2VydmVyKCRodHRwLCAkbG9nLCBTRVJWRVJfQUREUkVTUywgYXV0aCwgbW9tZW50KSB7XG5cdFx0XG5cdFx0LyoqIFRoZSBzZXJ2aWNlIG1ldGhvZHMgdG8gZXhwb3NlICovXG5cdFx0cmV0dXJuIHtcblx0XHRcdGxvZ2luOiBsb2dpbixcblx0XHRcdGxvZ291dDogbG9nb3V0LFxuXHRcdFx0Y2hhbmdlUGFzc3dvcmQ6IGNoYW5nZVBhc3N3b3JkLFxuXHRcdFx0cmVzZXRQYXNzd29yZDogcmVzZXRQYXNzd29yZCxcblx0XHRcdGZvcmdvdFBhc3N3b3JkOiBmb3Jnb3RQYXNzd29yZCxcblx0XHRcdGdldFJlYWRpbmdzOiBnZXRSZWFkaW5ncyxcblx0XHRcdGdldEJ1b3lHcm91cHM6IGdldEJ1b3lHcm91cHMsXG5cdFx0XHRnZXRCdW95SW5zdGFuY2VzOiBnZXRCdW95SW5zdGFuY2VzLFxuXHRcdFx0dXBkYXRlQnVveUdyb3VwTmFtZTogdXBkYXRlQnVveUdyb3VwTmFtZSxcblx0XHRcdHVwZGF0ZUJ1b3lJbnN0YW5jZU5hbWU6IHVwZGF0ZUJ1b3lJbnN0YW5jZU5hbWUsXG5cdFx0XHRuZXdCdW95R3JvdXA6IG5ld0J1b3lHcm91cCxcblx0XHRcdHVwZGF0ZUJ1b3lJbnN0YW5jZUdyb3VwOiB1cGRhdGVCdW95SW5zdGFuY2VHcm91cCxcblx0XHRcdGdldENvbW1hbmRUeXBlczogZ2V0Q29tbWFuZFR5cGVzLFxuXHRcdFx0Z2V0QnVveUNvbW1hbmRzOiBnZXRCdW95Q29tbWFuZHMsXG5cdFx0XHRleHBvcnREYXRhOiBleHBvcnREYXRhLFxuXHRcdFx0c2VuZEJ1b3lDb21tYW5kOiBzZW5kQnVveUNvbW1hbmQsXG5cdFx0XHRnZXRXYXJuaW5nVHJpZ2dlcnM6IGdldFdhcm5pbmdUcmlnZ2Vycyxcblx0XHRcdGFkZFdhcm5pbmdUcmlnZ2VyczogYWRkV2FybmluZ1RyaWdnZXJzLFxuXHRcdFx0Z2V0V2FybmluZ3M6IGdldFdhcm5pbmdzLFxuXHRcdFx0Z2V0U2Vuc29yVHlwZXM6IGdldFNlbnNvclR5cGVzLFxuXHRcdFx0Z2V0VXNlcnM6IGdldFVzZXJzLFxuXHRcdFx0YWRkVXNlcjogYWRkVXNlcixcblx0XHRcdHVwZGF0ZVVzZXI6IHVwZGF0ZVVzZXIsXG5cdFx0XHRkZWxldGVVc2VyOiBkZWxldGVVc2VyLFxuXHRcdFx0ZGVsZXRlQnVveUNvbW1hbmQ6IGRlbGV0ZUJ1b3lDb21tYW5kLFxuXHRcdFx0YWRkQnVveTogYWRkQnVveVxuXHRcdH07XG5cdFx0XG5cdFx0LyoqIFxuXHRcdCAqIENyZWF0ZSBhIGNvbmZpZyBvYmplY3QgY29udGFpbmluZyBlbXB0eSBoZWFkZXJzXG5cdFx0ICogQHJldHVybiB7b2JqZWN0fSByZXF1ZXN0IGNvbmZpZ1xuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGhlYWRlcnMoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRoZWFkZXJzOiB7fVxuXHRcdFx0fTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogQWRkIEpXVCB0b2tlbiB0byByZXF1ZXN0IGhlYWRlcnNcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIHJlcXVlc3QgY29uZmlnXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gYWRkVG9rZW4oY29uZmlnKSB7XG5cdFx0XHRjb25maWcuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gJ0JlYXJlciAnICsgYXV0aC5nZXRUb2tlbigpO1xuXHRcdFx0cmV0dXJuIGNvbmZpZztcblx0XHR9XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogU2V0IHJlcXVlc3QgY29udGVudCB0eXBlIHRvIEpTT05cblx0XHQgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIHJlcXVlc3QgY29uZmlnXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gc2V0SnNvbihjb25maWcpIHtcblx0XHRcdGNvbmZpZy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblx0XHRcdHJldHVybiBjb25maWc7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIFJlcXVlc3QgbG9naW5cblx0XHQgKiBQT1NUIC9hcGkvbG9naW5cblx0XHQgKiBAcGFyYW0gIHtzdHJpbmd9IGVtYWlsICAgIGVtYWlsXG5cdFx0ICogQHBhcmFtICB7c3RyaW5nfSBwYXNzd29yZCBwYXNzd29yZFxuXHRcdCAqIEByZXR1cm4ge3Byb21pc2V9ICAgICAgICAgIHJlcXVlc3QgcHJvbWlzZVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGxvZ2luKGVtYWlsLCBwYXNzd29yZCkge1xuXHRcdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHRcdGVtYWlsOiBlbWFpbCxcblx0XHRcdFx0cGFzc3dvcmQ6IHBhc3N3b3JkXG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuICRodHRwLnBvc3QoU0VSVkVSX0FERFJFU1MgKyAnL2FwaS9sb2dpbicsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqIExvZ291dCAqL1xuXHRcdGZ1bmN0aW9uIGxvZ291dCgpIHtcblx0XHRcdGF1dGgubG9nb3V0KCk7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIFJlcXVlc3QgcGFzc3dvcmQgY2hhbmdlXG5cdFx0ICogUE9TVCAvYXBpL2NoYW5nZXBhc3N3b3JkXG5cdFx0ICogQHBhcmFtICB7c3RyaW5nfSBwYXNzd29yZCBwYXNzd29yZFxuXHRcdCAqIEByZXR1cm4ge3Byb21pc2V9ICAgICAgICAgIHJlcXVlc3QgcHJvbWlzZVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGNoYW5nZVBhc3N3b3JkKGN1cnJlbnRQYXNzd29yZCwgbmV3UGFzc3dvcmQpIHtcblx0XHRcdHZhciBjb25maWcgPSBhZGRUb2tlbihoZWFkZXJzKCkpO1xuXHRcdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHRcdGN1cnJlbnRQYXNzd29yZDogY3VycmVudFBhc3N3b3JkLFxuXHRcdFx0XHRuZXdQYXNzd29yZDogbmV3UGFzc3dvcmRcblx0XHRcdH07XG5cdFx0XHR2YXIgZW1haWwgPSBhdXRoLmN1cnJlbnRVc2VyKCk7XG5cdFx0XHRyZXR1cm4gJGh0dHAucHV0KFNFUlZFUl9BRERSRVNTICsgJy9hcGkvdXNlcnMvJyArXG5cdFx0XHRcdGVtYWlsICsgJy9jaGFuZ2VfcGFzc3dvcmQnLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgY29uZmlnKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiByZXNldFBhc3N3b3JkKHRva2VuLCBuZXdQYXNzd29yZCkge1xuXHRcdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHRcdG5ld1Bhc3N3b3JkOiBuZXdQYXNzd29yZFxuXHRcdFx0fTtcblx0XHRcdHZhciBwYXJhbXMgPSAnP3Rva2VuPScgKyB0b2tlbjtcblx0XHRcdHJldHVybiAkaHR0cC5wb3N0KFNFUlZFUl9BRERSRVNTICsgJy9hcGkvcmVzZXRfcGFzc3dvcmQnICsgcGFyYW1zLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKiBcblx0XHQgKiBSZXF1ZXN0IGZvcmdvdCBwYXNzd29yZFxuXHRcdCAqIFBPU1QgL2FwaS9mb3Jnb3Rwc2Fzd29yZFxuXHRcdCAqIEBwYXJhbSAge3N0cmluZ30gZW1haWwgZW1haWxcblx0XHQgKiBAcmV0dXJuIHtwcm9taXNlfSAgICAgICByZXF1ZXN0IHByb21pc2Vcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBmb3Jnb3RQYXNzd29yZChlbWFpbCkge1xuXHRcdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHRcdGVtYWlsOiBlbWFpbFxuXHRcdFx0fTtcblx0XHRcdHJldHVybiAkaHR0cC5wb3N0KFNFUlZFUl9BRERSRVNTICsgJy9hcGkvZm9yZ290X3Bhc3N3b3JkJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXHRcdH1cblx0XHRcblx0XHQvKipcblx0XHQgKiBSZXF1ZXN0IHJlYWRpbmdzXG5cdFx0ICogR0VUIC9hcGkvcmVhZGluZ3M/c3RhcnRfdGltZT0mZW5kX3RpbWU9XG5cdFx0ICogQHBhcmFtICB7aW50fSBmcm9tIHVuaXggdGltZXN0YW1wXG5cdFx0ICogQHBhcmFtICB7aW50fSB0byAgIHVuaXggdGltZXN0YW1wXG5cdFx0ICogQHJldHVybiB7cHJvbWlzZX0gICAgICByZXF1ZXN0IHByb21pc2Vcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBnZXRSZWFkaW5ncyhmcm9tLCB0bykge1xuXHRcdFx0dmFyIGNvbmZpZyA9IGFkZFRva2VuKGhlYWRlcnMoKSk7XG5cdFx0XHR2YXIgcGFyYW1zID0gXCI/c3RhcnRfdGltZT1cIiArIGZyb20gKyBcIiZlbmRfdGltZT1cIiArIHRvO1xuXHRcdFx0cmV0dXJuICRodHRwLmdldChTRVJWRVJfQUREUkVTUyArICcvYXBpL3JlYWRpbmdzJyArIHBhcmFtcywgY29uZmlnKTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogUmVxdWVzdCBidW95IGdyb3Vwc1xuXHRcdCAqIEdFVCAvYXBpL2J1b3lfZ3JvdXBzXG5cdFx0ICogQHJldHVybiB7cHJvbWlzZX0gcmVxdWVzdCBwcm9taXNlXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gZ2V0QnVveUdyb3VwcygpIHtcblx0XHRcdHZhciBjb25maWcgPSBhZGRUb2tlbihoZWFkZXJzKCkpO1xuXHRcdFx0cmV0dXJuICRodHRwLmdldChTRVJWRVJfQUREUkVTUyArICcvYXBpL2J1b3lfZ3JvdXBzJywgY29uZmlnKTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogUmVxdWVzdCBhY3RpdmUgYnVveSBpbnN0YW5jZXNcblx0XHQgKiBHRVQgL2FwaS9idW95aW5zdGFuY2VzP2FjdGl2ZT10cnVlXG5cdFx0ICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gZ2V0QnVveUluc3RhbmNlcygpIHtcblx0XHRcdHZhciBjb25maWcgPSBhZGRUb2tlbihoZWFkZXJzKCkpO1xuXHRcdFx0cmV0dXJuICRodHRwLmdldChTRVJWRVJfQUREUkVTUyArICcvYXBpL2J1b3lfaW5zdGFuY2VzP2FjdGl2ZT10cnVlJywgY29uZmlnKTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogUmVxdWVzdCB1cGRhdGUgYnVveSBncm91cFxuXHRcdCAqIFBVVCAvYXBpL2J1b3lfZ3JvdXBzLzppZFxuXHRcdCAqIEBwYXJhbSAge2ludH0gaWQgICBidW95R3JvdXAgaWRcblx0XHQgKiBAcGFyYW0gIHtzdHJpbmd9IG5hbWUgbmV3IG5hbWVcblx0XHQgKiBAcmV0dXJuIHtwcm9taXNlfSAgICAgIHJlcXVlc3QgcHJvbWlzZVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIHVwZGF0ZUJ1b3lHcm91cE5hbWUoaWQsIG5hbWUpIHtcblx0XHRcdHZhciBjb25maWcgPSBzZXRKc29uKGFkZFRva2VuKGhlYWRlcnMoKSkpO1xuXHRcdFx0dmFyIGRhdGEgPSB7IFxuXHRcdFx0XHRuYW1lOiBuYW1lXG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuICRodHRwLnB1dChTRVJWRVJfQUREUkVTUyArICcvYXBpL2J1b3lfZ3JvdXBzLycgKyBpZCwgXG5cdFx0XHRcdFx0SlNPTi5zdHJpbmdpZnkoZGF0YSksIGNvbmZpZyk7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIFJlcXVlc3QgdXBkYXRlIGJ1b3kgaW5zdGFuY2UgXG5cdFx0ICogUFVUIC9hcGkvYnVveV9pbnN0YW5jZXMvOmlkXG5cdFx0ICogQHBhcmFtICB7aW50fSBpZCAgICAgICAgICBidW95SW5zdGFuY2UgaWRcblx0XHQgKiBAcGFyYW0gIHtzdHJpbmd9IG5hbWUgICAgICAgIG5ldyBuYW1lXG5cdFx0ICogQHBhcmFtICB7aW50fSBidW95R3JvdXBJZCBidW95R3JvdXAgaWQgb2YgaW5zdGFuY2Vcblx0XHQgKiBAcmV0dXJuIHtwcm9taXNlfSAgICAgICAgICAgICByZXF1ZXN0IHByb21pc2Vcblx0XHQgKi9cblx0XHRmdW5jdGlvbiB1cGRhdGVCdW95SW5zdGFuY2VOYW1lKGlkLCBuYW1lLCBidW95R3JvdXBJZCkge1xuXHRcdFx0dmFyIGNvbmZpZyA9IHNldEpzb24oYWRkVG9rZW4oaGVhZGVycygpKSk7XG5cdFx0XHR2YXIgZGF0YSA9IHsgXG5cdFx0XHRcdG5hbWU6IG5hbWUsXG5cdFx0XHRcdGJ1b3lHcm91cElkOiBidW95R3JvdXBJZFxuXHRcdFx0fTtcblx0XHRcdHJldHVybiAkaHR0cC5wdXQoU0VSVkVSX0FERFJFU1MgKyAnL2FwaS9idW95X2luc3RhbmNlcy8nICsgaWQsIFxuXHRcdFx0XHRcdEpTT04uc3RyaW5naWZ5KGRhdGEpLCBjb25maWcpO1xuXHRcdH1cblx0XHRcblx0XHQvKipcblx0XHQgKiBSZXF1ZXN0IGNyZWF0ZSBuZXcgYnVveSBncm91cFxuXHRcdCAqIFBPU1QgL2FwaS9idW95X2dyb3Vwc1xuXHRcdCAqIEBwYXJhbSAge3N0cmluZ30gbmFtZSBuZXcgZ3JvdXAgbmFtZVxuXHRcdCAqIEByZXR1cm4ge3Byb21pc2V9ICAgICAgcmVxdWVzdCBwcm9taXNlXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gbmV3QnVveUdyb3VwKG5hbWUpIHtcblx0XHRcdHZhciBjb25maWcgPSBzZXRKc29uKGFkZFRva2VuKGhlYWRlcnMoKSkpO1xuXHRcdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHRcdG5hbWU6IG5hbWVcblx0XHRcdH07XG5cdFx0XHRyZXR1cm4gJGh0dHAucG9zdChTRVJWRVJfQUREUkVTUyArICcvYXBpL2J1b3lfZ3JvdXBzJyxcblx0XHRcdFx0XHRKU09OLnN0cmluZ2lmeShkYXRhKSwgY29uZmlnKTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogUmVxdWVzdCBjcmVhdGUgbmV3IGJ1b3kgaW5zdGFuY2UgaW4gZ3JvdXBcblx0XHQgKiBQT1NUIC9hcGkvYnVveV9pbnN0YW5jZXNcblx0XHQgKiBAcGFyYW0gIHtpbnR9IGJ1b3lJZCAgYnVveSBpZFxuXHRcdCAqIEBwYXJhbSAge2ludH0gZ3JvdXBJZCBuZXcgZ3JvdXAgaWRcblx0XHQgKiBAcGFyYW0gIHtzdHJpbmd9IG5hbWUgICAgbmV3IG5hbWVcblx0XHQgKiBAcmV0dXJuIHtwcm9taXNlfSAgICAgICAgIHJlcXVlc3QgcHJvbWlzZVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIHVwZGF0ZUJ1b3lJbnN0YW5jZUdyb3VwKGJ1b3lJZCwgZ3JvdXBJZCwgbmFtZSkge1xuXHRcdFx0dmFyIGNvbmZpZyA9IHNldEpzb24oYWRkVG9rZW4oaGVhZGVycygpKSk7XG5cdFx0XHR2YXIgZGF0YSA9IHtcblx0XHRcdFx0bmFtZTogbmFtZSxcblx0XHRcdFx0YnVveUlkOiBidW95SWQsXG5cdFx0XHRcdGJ1b3lHcm91cElkOiBncm91cElkXG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuICRodHRwLnBvc3QoU0VSVkVSX0FERFJFU1MgKyAnL2FwaS9idW95X2luc3RhbmNlcycsXG5cdFx0XHRcdFx0SlNPTi5zdHJpbmdpZnkoZGF0YSksIGNvbmZpZyk7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIFJlcXVlc3QgY29tbWFuZCB0eXBlc1xuXHRcdCAqIEdFVCAvYXBpL2NvbW1hbmRfdHlwZXNcblx0XHQgKiBAcmV0dXJuIHtwcm9taXNlfSByZXF1ZXN0IHByb21pc2Vcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBnZXRDb21tYW5kVHlwZXMoKSB7XG5cdFx0XHR2YXIgY29uZmlnID0gYWRkVG9rZW4oaGVhZGVycygpKTtcblx0XHRcdHJldHVybiAkaHR0cC5nZXQoU0VSVkVSX0FERFJFU1MgKyAnL2FwaS9jb21tYW5kX3R5cGVzJywgY29uZmlnKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBSZXF1ZXN0IHBlbmRpbmcgY29tbWFuZHNcblx0XHQgKiBHRVQgL2FwaS9jb21tYW5kcz9zZW50PWZhbHNlXG5cdFx0ICogQHJldHVybiB7cHJvbWlzZX0gcmVxdWVzdCBwcm9taXNlXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gZ2V0QnVveUNvbW1hbmRzKCkge1xuXHRcdFx0dmFyIGNvbmZpZyA9IGFkZFRva2VuKGhlYWRlcnMoKSk7XG5cdFx0XHRyZXR1cm4gJGh0dHAuZ2V0KFNFUlZFUl9BRERSRVNTICsgJy9hcGkvY29tbWFuZHM/c2VudD1mYWxzZScsIGNvbmZpZyk7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIFJlcXVlc3QgZXhwb3J0IGRhdGEgYW5kIGRvd25sb2FkIENTViBpbiByZXNwb25zZVxuXHRcdCAqIEdFVC9hcGkvZXhwb3J0P3JlYWRpbmdzPTppZHNcblx0XHQgKiBAcGFyYW0gIHtpbnRbXX0gcmVhZGluZ3MgbGlzdCBvZiByZWFkaW5nIElkc1xuXHRcdCAqIEByZXR1cm4ge3Byb21pc2V9ICAgICAgICAgIHJlcXVlc3QgcHJvbWlzZVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGV4cG9ydERhdGEocmVhZGluZ3MpIHtcblx0XHRcdHZhciBjb25maWcgPSBhZGRUb2tlbihoZWFkZXJzKCkpO1xuXHRcdFx0Y29uZmlnLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG5cdFx0XHRjb25maWcuaGVhZGVyc1snQWNjZXB0J10gPSAndGV4dC9jc3YnO1xuXHRcdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHRcdHJlYWRpbmdzOiByZWFkaW5nc1xuXHRcdFx0fTtcblx0XHRcdFxuXHRcdFx0dmFyIHByb21pc2UgPSAkaHR0cC5wb3N0KFNFUlZFUl9BRERSRVNTICsgJy9hcGkvcmVhZGluZ3MvZXhwb3J0JywgXG5cdFx0XHRcdEpTT04uc3RyaW5naWZ5KGRhdGEpLCBjb25maWcpO1xuXHRcdFx0XHRcblx0XHRcdHByb21pc2UudGhlbihmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0dmFyIHRpbWUgPSBtb21lbnQoKS5mb3JtYXQoXCJERC1NTS1ZWS1ISG1tc3NcIik7XG5cdFx0XHRcdHZhciBmaWxlbmFtZSA9ICdleHBvcnQtJyArIHRpbWUgKyAnLmNzdic7XG5cdFx0XHRcdG9wZW5TYXZlQXNEaWFsb2coZmlsZW5hbWUsIHJlcy5kYXRhLCAndGV4dC9jc3YnKTtcblx0XHRcdH0sIGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHQkbG9nLmVycm9yKHJlcyk7XG5cdFx0XHR9KTtcblx0XHRcdFxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKiBFeHRyYWN0IGZpbGUgZnJvbSByZXNwb25zZSBhbmQgc2F2ZSBpdFxuXHRcdCAqICBzYXZlQXMgaXMgZnJvbSBGaWxlU2F2ZXIuanMsIGEgY3Jvc3MgYnJvd3NlciBzb2x1dGlvblxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIG9wZW5TYXZlQXNEaWFsb2coZmlsZW5hbWUsIGNvbnRlbnQsIG1lZGlhVHlwZSkge1xuXHRcdFx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY29udGVudF0sIHt0eXBlOiBtZWRpYVR5cGV9KTtcblx0XHRcdHNhdmVBcyhibG9iLCBmaWxlbmFtZSk7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIFJlcXVlc3QgbmV3IGNvbW1hbmQgZm9yIGJ1b3lzXG5cdFx0ICogUE9TVCAvYXBpL2NvbW1hbmRzXG5cdFx0ICogQHBhcmFtICB7b2JqZWN0fSBjb21tYW5kIGNvbW1hbmRcblx0XHQgKiBAcGFyYW0gIHtpbnRbXX0gYnVveUlkcyBsaXN0IG9mIGJ1b3kgSWRzIHRvIHNlbmQgY29tbWFuZCBmb3Jcblx0XHQgKiBAcmV0dXJuIHtwcm9taXNlfSAgICAgICAgIHJlcXVlc3QgcHJvbWlzZVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIHNlbmRCdW95Q29tbWFuZChjb21tYW5kLCBidW95SWRzKSB7XG5cdFx0XHR2YXIgY29uZmlnID0gc2V0SnNvbihhZGRUb2tlbihoZWFkZXJzKCkpKTtcblx0XHRcdHZhciBkYXRhID0ge1xuXHRcdFx0XHRjb21tYW5kczogW11cblx0XHRcdH07XG5cdFx0XHRidW95SWRzLmZvckVhY2goZnVuY3Rpb24oYnVveUlkKSB7XG5cdFx0XHRcdGRhdGEuY29tbWFuZHMucHVzaCh7XG5cdFx0XHRcdFx0Y29tbWFuZFR5cGVJZDogY29tbWFuZC5pZCxcblx0XHRcdFx0XHR2YWx1ZTogcGFyc2VJbnQoY29tbWFuZC52YWx1ZSwgMTApLFxuXHRcdFx0XHRcdGJ1b3lJZDogYnVveUlkXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gJGh0dHAucG9zdChTRVJWRVJfQUREUkVTUyArICcvYXBpL2NvbW1hbmRzJywgXG5cdFx0XHRcdEpTT04uc3RyaW5naWZ5KGRhdGEpLCBjb25maWcpO1xuXHRcdH1cblx0XHRcblx0XHQvKipcblx0XHQgKiBSZXF1ZXN0IGRlbGV0ZSBidW95IGNvbW1hbmRcblx0XHQgKiBAcGFyYW0gIHtpbnR9IGJ1b3lJZCAgYnVveSBpZFxuXHRcdCAqIEByZXR1cm4ge3Byb21pc2V9ICAgICAgICAgcmVxdWVzdCBwcm9taXNlXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gZGVsZXRlQnVveUNvbW1hbmQoYnVveUlkKSB7XG5cdFx0XHRcblx0XHR9XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogUmVxdWVzdCB3YXJuaW5nIHRyaWdnZXJzIGZvciBhY3RpdmUgYnVveSBpbnN0YW5jZXNcblx0XHQgKiBHRVQgL2FwaS93YXJuaW5nX3RyaWdnZXJzP2FjdGl2ZV9pbnN0YW5jZXM9dHJ1ZVxuXHRcdCAqIEByZXR1cm4ge3Byb21pc2V9IHJlcXVlc3QgcHJvbWlzZVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGdldFdhcm5pbmdUcmlnZ2VycygpIHtcblx0XHRcdHZhciBjb25maWcgPSBhZGRUb2tlbihoZWFkZXJzKCkpO1xuXHRcdFx0cmV0dXJuICRodHRwLmdldChTRVJWRVJfQUREUkVTUyArICcvYXBpL3dhcm5pbmdfdHJpZ2dlcnM/YWN0aXZlX2luc3RhbmNlcz10cnVlJywgY29uZmlnKTtcblx0XHR9XG5cblxuXHRcdC8qKlxuXHRcdCAqIFJlcXVlc3QgY3JlYXRlIHdhcm5pbmcgdHJpZ2dlcnMgZm9yIGJ1b3kgaW5zdGFuY2VzXG5cdFx0ICogUE9TVCAvYXBpL3dhcm5pbmdfdHJpZ2dlcnNcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gdHJpZ2dlciAgICAgICAgIG5ldyB0cmlnZ2VyXG5cdFx0ICogQHBhcmFtIHtpbnRbXX0gYnVveUluc3RhbmNlSWRzIGxpc3Qgb2YgYnVveSBpbnN0YW5jZSBJZHNcblx0XHQgKiBAcmV0dXJuIHtwcm9taXNlfSByZXF1ZXN0IHByb21pc2Vcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBhZGRXYXJuaW5nVHJpZ2dlcnModHJpZ2dlciwgYnVveUluc3RhbmNlSWRzKSB7XG5cdFx0XHR2YXIgY29uZmlnID0gc2V0SnNvbihhZGRUb2tlbihoZWFkZXJzKCkpKTtcblx0XHRcdHZhciBkYXRhID0ge1xuXHRcdFx0XHR3YXJuaW5nVHJpZ2dlcnM6IFtdXG5cdFx0XHR9O1xuXHRcdFx0YnVveUluc3RhbmNlSWRzLmZvckVhY2goZnVuY3Rpb24oYnVveUluc3RhbmNlSWQpIHtcblx0XHRcdFx0ZGF0YS53YXJuaW5nVHJpZ2dlcnMucHVzaCh7XG5cdFx0XHRcdFx0YnVveUluc3RhbmNlSWQ6IGJ1b3lJbnN0YW5jZUlkLFxuXHRcdFx0XHRcdHNlbnNvclR5cGVJZDogdHJpZ2dlci5zZW5zb3JUeXBlSWQsXG5cdFx0XHRcdFx0b3BlcmF0b3I6IHRyaWdnZXIub3BlcmF0b3IsXG5cdFx0XHRcdFx0dmFsdWU6IHBhcnNlSW50KHRyaWdnZXIudmFsdWUsIDEwKSxcblx0XHRcdFx0XHRtZXNzYWdlOiB0cmlnZ2VyLm1lc3NhZ2Vcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiAkaHR0cC5wb3N0KFNFUlZFUl9BRERSRVNTICsgJy9hcGkvd2FybmluZ190cmlnZ2VycycsIFxuXHRcdFx0XHRKU09OLnN0cmluZ2lmeShkYXRhKSwgY29uZmlnKTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogUmVxdWVzdCB3YXJuaW5nc1xuXHRcdCAqIEdFVCAvYXBpL3dhcm5pbmdzXG5cdFx0ICogQHJldHVybiB7cHJvbWlzZX0gcmVxdWVzdCBwcm9taXNlXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gZ2V0V2FybmluZ3MoKSB7XG5cdFx0XHR2YXIgY29uZmlnID0gYWRkVG9rZW4oaGVhZGVycygpKTtcblx0XHRcdHJldHVybiAkaHR0cC5nZXQoU0VSVkVSX0FERFJFU1MgKyAnL2FwaS93YXJuaW5ncycsIGNvbmZpZyk7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIFJlcXVlc3Qgc2Vuc29yIHR5cGVzXG5cdFx0ICogR0VUIC9hcGkvc2Vuc29yX3R5cGVzXG5cdFx0ICogQHJldHVybiB7cHJvbWlzZX0gcmVxdWVzdCBwcm9taXNlXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gZ2V0U2Vuc29yVHlwZXMoKSB7XG5cdFx0XHR2YXIgY29uZmlnID0gYWRkVG9rZW4oaGVhZGVycygpKTtcblx0XHRcdHJldHVybiAkaHR0cC5nZXQoU0VSVkVSX0FERFJFU1MgKyAnL2FwaS9zZW5zb3JfdHlwZXMnLCBjb25maWcpO1xuXHRcdH1cblx0XHRcblx0XHQvKipcblx0XHQgKiBSZXF1ZXN0IHVzZXJzXG5cdFx0ICogR0VUIC9hcGkvdXNlcnNcblx0XHQgKiBAcmV0dXJuIHtwcm9taXNlfSByZXF1ZXN0IHByb21pc2Vcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBnZXRVc2VycygpIHtcblx0XHRcdHZhciBjb25maWcgPSBhZGRUb2tlbihoZWFkZXJzKCkpO1xuXHRcdFx0cmV0dXJuICRodHRwLmdldChTRVJWRVJfQUREUkVTUyArICcvYXBpL3VzZXJzJywgY29uZmlnKTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogUmVxdWVzdCBjcmVhdGUgdXNlclxuXHRcdCAqIFBPU1QgL2FwaS91c2Vyc1xuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSB1c2VyIG5ldyB1c2VyXG5cdFx0ICogQHJldHVybiB7cHJvbWlzZX0gcmVxdWVzdCBwcm9taXNlXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gYWRkVXNlcih1c2VyKSB7XG5cdFx0XHR2YXIgY29uZmlnID0gc2V0SnNvbihhZGRUb2tlbihoZWFkZXJzKCkpKTtcblx0XHRcdHZhciBkYXRhID0ge1xuXHRcdFx0XHRlbWFpbDogdXNlci5lbWFpbCxcblx0XHRcdFx0Zmlyc3ROYW1lOiB1c2VyLmZpcnN0TmFtZSxcblx0XHRcdFx0bGFzdE5hbWU6IHVzZXIubGFzdE5hbWUsXG5cdFx0XHRcdHJvbGU6IHVzZXIucm9sZVxuXHRcdFx0fTtcblx0XHRcdHJldHVybiAkaHR0cC5wb3N0KFNFUlZFUl9BRERSRVNTICsgJy9hcGkvdXNlcnMnLCBcblx0XHRcdFx0SlNPTi5zdHJpbmdpZnkoZGF0YSksIGNvbmZpZyk7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIFJlcXVlc3QgdXBkYXRlIHVzZXJcblx0XHQgKiBQVVQgL2FwaS91c2Vycy86aWRcblx0XHQgKiBAcGFyYW0gIHtvYmplY3R9IHVzZXIgdXBkYXRlZCB1c2VyXG5cdFx0ICogQHJldHVybiB7cHJvbWlzZX0gICAgICByZXF1ZXN0IHByb21pc2Vcblx0XHQgKi9cblx0XHRmdW5jdGlvbiB1cGRhdGVVc2VyKHVzZXIpIHtcblx0XHRcdHZhciBjb25maWcgPSBzZXRKc29uKGFkZFRva2VuKGhlYWRlcnMoKSkpO1xuXHRcdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHRcdGZpcnN0TmFtZTogdXNlci5maXJzdE5hbWUsXG5cdFx0XHRcdGxhc3ROYW1lOiB1c2VyLmxhc3ROYW1lLFxuXHRcdFx0XHRyb2xlOiB1c2VyLnJvbGVcblx0XHRcdH07XG5cdFx0XHRyZXR1cm4gJGh0dHAucHV0KFNFUlZFUl9BRERSRVNTICsgJy9hcGkvdXNlcnMvJyArIHVzZXIuaWQsIFxuXHRcdFx0XHRKU09OLnN0cmluZ2lmeShkYXRhKSwgY29uZmlnKTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogUmVxdWVzdCBkZWxldGUgdXNlclxuXHRcdCAqIERFTEVURSAvYXBpL3VzZXJzLzppZFxuXHRcdCAqIEBwYXJhbSAge2ludH0gaWQgdXNlciBJZFxuXHRcdCAqIEByZXR1cm4ge3Byb21pc2V9ICAgIHJlcXVlc3QgcHJvbWlzZVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGRlbGV0ZVVzZXIoaWQpIHtcblx0XHRcdHZhciBjb25maWcgPSBhZGRUb2tlbihoZWFkZXJzKCkpO1xuXHRcdFx0cmV0dXJuICRodHRwLmRlbGV0ZShTRVJWRVJfQUREUkVTUyArICcvYXBpL3VzZXJzLycgKyBpZCwgY29uZmlnKTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogUmVxdWVzdCBjcmVhdGUgYnVveVxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIGJ1b3kgbmFtZVxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBndWlkIGJ1b3kgR1VJRFxuXHRcdCAqIEByZXR1cm4ge3Byb21pc2V9IHJlcXVlc3QgcHJvbWlzZVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGFkZEJ1b3kobmFtZSwgZ3VpZCkge1xuXHRcdFx0dmFyIGNvbmZpZyA9IHNldEpzb24oYWRkVG9rZW4oaGVhZGVycygpKSk7XG5cdFx0XHR2YXIgZGF0YSA9IHtcblx0XHRcdFx0Z3VpZDogZ3VpZCxcblx0XHRcdFx0bmFtZTogbmFtZVxuXHRcdFx0fTtcblx0XHRcdHJldHVybiAkaHR0cC5wb3N0KFNFUlZFUl9BRERSRVNTICsgJy9hcGkvYnVveXMnLCBcblx0XHRcdFx0SlNPTi5zdHJpbmdpZnkoZGF0YSksIGNvbmZpZyk7XG5cdFx0fVxuXHR9XG59KSgpOyIsIi8qKlxuICogRmxvb2QgTW9uaXRvcmluZyBTeXN0ZW1cbiAqIFZlcnNpb24gMC4wLjEgKER1eXVuZylcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIFRlYW0gTmVwdHVuZVxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBAYXV0aG9yICAgICBBbmRyZXcgRHllciA8YW5kcmV3QGR5ZXJncm91cC5jb20uYXU+XG4gKiBAdmVyc2lvbiAgICAwLjAuMVxuICogQGNvcHlyaWdodCAgVGVhbSBOZXB0dW5lICgyMDE1KVxuICogQGxpbmsgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FjbGVsL2RlY28zODAxXG4gKi9cbihmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0YW5ndWxhci5tb2R1bGUoJ21vY2suc2VydmVyJywgW10pXG5cdFx0LmZhY3RvcnkoJ3NlcnZlcicsIHNlcnZlcik7XG5cdFxuXHQvKipcblx0XHQqIEBuZ2RvYyBzZXJ2aWNlXG5cdFx0KiBAbmFtZSBtb2NrLnNlcnZlclxuXHRcdCogQGRlc2NyaXB0aW9uIE1vY2sgb2Ygc2VydmVyIHNlcnZpY2UgZm9yIHRlc3Rpbmdcblx0KiovXG5cdGZ1bmN0aW9uIHNlcnZlcigpIHtcblx0XHRcblx0XHQvKiogVGhlIG1vY2sgc2VydmljZSBtZXRob2RzIHRvIGV4cG9zZSAqL1xuXHRcdHJldHVybiB7XG5cdFx0XHRnZXRSZWFkaW5nczogZ2V0UmVhZGluZ3MsXG5cdFx0XHRnZXRTZW5zb3JzOiBnZXRTZW5zb3JzLFxuXHRcdFx0bG9naW46IGxvZ2luLFxuXHRcdFx0bG9nb3V0OiBsb2dvdXRcblx0XHR9O1xuXHRcdFxuXHRcdC8qKiBEdW1teSByZWFkaW5nIGRhdGEgKi9cblx0XHRmdW5jdGlvbiBnZXRSZWFkaW5ncygpIHtcblx0XHRcdHJldHVybiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZDogMSxcblx0XHRcdFx0XHRidW95OiAxLFxuXHRcdFx0XHRcdHRpbWVzdGFtcDogMTQzODkzMzYxNCxcblx0XHRcdFx0XHRsYXRpdHVkZTogLTI3LjQ0NjEzNDIzLFxuXHRcdFx0XHRcdGxvbmdpdHVkZTogMTUzLjA3ODM0NjI1LFxuXHRcdFx0XHRcdHJlYWRpbmdzIDoge1xuXHRcdFx0XHRcdFx0YmF0dGVyeTogOTAsXG5cdFx0XHRcdFx0XHRwcmVzc3VyZTogMTQwLFxuXHRcdFx0XHRcdFx0c2VhbGV2ZWw6IDIxLFxuXHRcdFx0XHRcdFx0dHVyYmlkaXR5OiAxNFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdGlkOiAyLCBcblx0XHRcdFx0XHRidW95OiAyLFxuXHRcdFx0XHRcdHRpbWVzdGFtcDogMTQzODU4ODExNyxcblx0XHRcdFx0XHRsYXRpdHVkZTogLTI3LjQyNjkzNzcyLFxuXHRcdFx0XHRcdGxvbmdpdHVkZTogMTUzLjIwNjc0ODk2LFxuXHRcdFx0XHRcdHJlYWRpbmdzIDoge1xuXHRcdFx0XHRcdFx0YmF0dGVyeTogNzAsXG5cdFx0XHRcdFx0XHRwcmVzc3VyZTogMTIyLFxuXHRcdFx0XHRcdFx0c2VhbGV2ZWw6IDQ0LFxuXHRcdFx0XHRcdFx0dHVyYmlkaXR5OiA0XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0aWQ6IDMsIFxuXHRcdFx0XHRcdGJ1b3k6IDIsXG5cdFx0XHRcdFx0dGltZXN0YW1wOiAxNDM4NzYwODc2LFxuXHRcdFx0XHRcdGxhdGl0dWRlOiAtMjcuNDkxNDc1LCBcblx0XHRcdFx0XHRsb25naXR1ZGU6IDE1My4wMDY2NTUsXG5cdFx0XHRcdFx0cmVhZGluZ3MgOiB7XG5cdFx0XHRcdFx0XHRiYXR0ZXJ5OiA0NSxcblx0XHRcdFx0XHRcdHByZXNzdXJlOiA4NSxcblx0XHRcdFx0XHRcdHNlYWxldmVsOiAxNSxcblx0XHRcdFx0XHRcdHR1cmJpZGl0eTogNDVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRpZDogNCwgXG5cdFx0XHRcdFx0YnVveTogNCxcblx0XHRcdFx0XHR0aW1lc3RhbXA6IDE0Mzg4NDcyOTEsXG5cdFx0XHRcdFx0bGF0aXR1ZGU6IC0yNy40MDAzNTcsIFxuXHRcdFx0XHRcdGxvbmdpdHVkZTogMTUzLjE3Nzk5NSxcblx0XHRcdFx0XHRyZWFkaW5ncyA6IHtcblx0XHRcdFx0XHRcdGJhdHRlcnk6IDc1LFxuXHRcdFx0XHRcdFx0cHJlc3N1cmU6IDk3LFxuXHRcdFx0XHRcdFx0c2VhbGV2ZWw6IDMzLFxuXHRcdFx0XHRcdFx0dHVyYmlkaXR5OiA2NlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdGlkOiA3NywgXG5cdFx0XHRcdFx0YnVveTogMSxcblx0XHRcdFx0XHR0aW1lc3RhbXA6IDE0MzgzMjg4MzksXG5cdFx0XHRcdFx0bGF0aXR1ZGU6IC0yNy40NDcxMzQyMyxcblx0XHRcdFx0XHRsb25naXR1ZGU6IDE1My4wOTIzNDYyNSxcblx0XHRcdFx0XHRyZWFkaW5ncyA6IHtcblx0XHRcdFx0XHRcdGJhdHRlcnk6IDgzLFxuXHRcdFx0XHRcdFx0cHJlc3N1cmU6IDExOCxcblx0XHRcdFx0XHRcdHNlYWxldmVsOiAyNC41LFxuXHRcdFx0XHRcdFx0dHVyYmlkaXR5OiA4XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRdO1xuXHRcdH1cblx0XHRcblx0XHQvKiogRHVtbXkgc2Vuc29yIGRhdGEgKi9cblx0XHRmdW5jdGlvbiBnZXRTZW5zb3JzKCkge1xuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlkOiBcImJhdHRlcnlcIixcblx0XHRcdFx0XHRuYW1lOiBcIkJhdHRlcnlcIixcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogXCJCYXR0ZXJ5IGxldmVsIG9mIGJ1b3lcIixcblx0XHRcdFx0XHRjb2xvdXI6IFwiXCIsXG5cdFx0XHRcdFx0dW5pdHM6IFwiJVwiLFxuXHRcdFx0XHRcdGxvd2VyQm91bmQ6IDAsXG5cdFx0XHRcdFx0dXBwZXJCb3VuZDogMTAwLFxuXHRcdFx0XHRcdGRpc3BsYXk6IHRydWUsXG5cdFx0XHRcdFx0dW5jb25maWd1cmVkOiBmYWxzZVx0XHRcdFx0XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZDogXCJ0dXJiaWRpdHlcIixcblx0XHRcdFx0XHRuYW1lOiBcIlR1cmJpZGl0eVwiLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBcIldhdGVyIHF1YWxpdHkgYXJvdW5kIGJ1b3lcIixcblx0XHRcdFx0XHRjb2xvdXI6IFwiXCIsXG5cdFx0XHRcdFx0dW5pdHM6IFwiZy9tbFwiLFxuXHRcdFx0XHRcdGxvd2VyQm91bmQ6IDAsXG5cdFx0XHRcdFx0dXBwZXJCb3VuZDogNzAsXG5cdFx0XHRcdFx0ZGlzcGxheTogdHJ1ZSxcblx0XHRcdFx0XHR1bmNvbmZpZ3VyZWQ6IGZhbHNlXHRcdFx0XHRcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlkOiBcInByZXNzdXJlXCIsXG5cdFx0XHRcdFx0bmFtZTogXCJcIixcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogXCJcIixcblx0XHRcdFx0XHRjb2xvdXI6IFwiXCIsXG5cdFx0XHRcdFx0dW5pdHM6IFwiXCIsXG5cdFx0XHRcdFx0bG93ZXJCb3VuZDogLTEsXG5cdFx0XHRcdFx0dXBwZXJCb3VuZDogLTEsXG5cdFx0XHRcdFx0ZGlzcGxheTogZmFsc2UsXG5cdFx0XHRcdFx0dW5jb25maWd1cmVkOiB0cnVlXHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0XTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqIE1vY2tlZCBsb2dpbiBmdW5jdGlvbiAqL1xuXHRcdGZ1bmN0aW9uIGxvZ2luKCkge1xuXHRcdFx0Ly8gcmV0dXJuIDA7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKiBNb2NrZWQgbG9nb3V0IGZ1bmN0aW9uICovXG5cdFx0ZnVuY3Rpb24gbG9nb3V0KCkge1xuXHRcdFx0XG5cdFx0fVxuXHR9XG59KSgpOyIsIi8qKlxuICogRmxvb2QgTW9uaXRvcmluZyBTeXN0ZW1cbiAqIFZlcnNpb24gMC4wLjEgKER1eXVuZylcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIFRlYW0gTmVwdHVuZVxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBAYXV0aG9yICAgICBBbmRyZXcgRHllciA8YW5kcmV3QGR5ZXJncm91cC5jb20uYXU+XG4gKiBAdmVyc2lvbiAgICAwLjAuMVxuICogQGNvcHlyaWdodCAgVGVhbSBOZXB0dW5lICgyMDE1KVxuICogQGxpbmsgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FjbGVsL2RlY28zODAxXG4gKi9cbihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgXG4gICAgLyoqIFNldCBjaGFydCBkZWZhdWx0cyAqL1xuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAuZGFzaGJvYXJkJylcbiAgICAgICAgLmNvbmZpZyhmdW5jdGlvbihDaGFydEpzUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIENoYXJ0SnNQcm92aWRlci5zZXRPcHRpb25zKHtcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG59KSgpOyIsIi8qKlxuICogRmxvb2QgTW9uaXRvcmluZyBTeXN0ZW1cbiAqIFZlcnNpb24gMC4wLjEgKER1eXVuZylcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIFRlYW0gTmVwdHVuZVxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBAYXV0aG9yICAgICBBbmRyZXcgRHllciA8YW5kcmV3QGR5ZXJncm91cC5jb20uYXU+XG4gKiBAdmVyc2lvbiAgICAwLjAuMVxuICogQGNvcHlyaWdodCAgVGVhbSBOZXB0dW5lICgyMDE1KVxuICogQGxpbmsgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FjbGVsL2RlY28zODAxXG4gKi9cbihmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0YW5ndWxhci5tb2R1bGUoJ2FwcC5kYXNoYm9hcmQnKVxuXHRcdC5jb250cm9sbGVyKCdEYXNoYm9hcmRDb250cm9sbGVyJywgRGFzaGJvYXJkQ29udHJvbGxlcik7XG5cdFxuXHQvKipcblx0XHQqIEBuZ2RvYyBvYmplY3Rcblx0XHQqIEBuYW1lIGFwcC5kYXNoYm9hcmQuY29udHJvbGxlcjpEYXNoYm9hcmRDb250cm9sbGVyXG5cdFx0KiBAZGVzY3JpcHRpb24gUHJvdmlkZXMgdmlld21vZGVsIGZvciBkYXNoYm9hcmQgdmlld1xuXHRcdCogQHJlcXVpcmVzICRkb2N1bWVudFxuXHRcdCogQHJlcXVpcmVzIGRhc2hib2FyZFxuXHRcdCogQHJlcXVpcmVzIG1hcFxuXHQqKi9cdFxuXHRmdW5jdGlvbiBEYXNoYm9hcmRDb250cm9sbGVyKCRsb2csICRkb2N1bWVudCwgJHNjb3BlLCBkYXNoYm9hcmQsIG1hcCkge1xuXHRcdHZhciB2bSA9IHRoaXM7XG5cdFx0XG5cdFx0LyoqIFVzZWQgdG8gZGV0ZXJtaW5lIHdoZW4gaW5pdGlhbCByZXF1ZXN0cyBoYXZlIHJldHVybmVkICovXG5cdFx0dmFyIHJlc29sdmVkID0gMDtcblx0XHR2YXIgY2hhcnRPYmo7XG5cblx0XHQvKiogVmFyaWFibGVzIGFuZCBtZXRob2RzIGJvdW5kIHRvIHZpZXdtb2RlbCAqL1xuXHRcdHZtLmxvYWRpbmcgPSBmYWxzZTtcblx0XHR2bS5zaG93R3JhcGhzID0gZmFsc2U7XG5cdFx0dm0uYnVveXMgPSBkYXNoYm9hcmQuYnVveXMoKTsgLy8gYmluZHMgcmVmZXJlbmNlXG5cdFx0dm0udGltZXMgPSBkYXNoYm9hcmQudGltZXMoKTsgLy8gYmluZHMgcmVmZXJlbmNlXG5cdFx0dm0uc2Vuc29ycyA9IGRhc2hib2FyZC5zZW5zb3JzKCk7IC8vIGJpbmRzIHJlZmVyZW5jZVxuXHRcdHZtLmNoYXJ0ID0gZGFzaGJvYXJkLmNoYXJ0KCk7IC8vIGJpbmRzIHJlZmVyZW5jZVxuXHRcdHZtLnNlbGVjdEJ1b3lHcm91cCA9IGRhc2hib2FyZC5zZWxlY3RCdW95R3JvdXA7XG5cdFx0dm0uc2VsZWN0QnVveUluc3RhbmNlID0gZGFzaGJvYXJkLnNlbGVjdEJ1b3lJbnN0YW5jZTtcblx0XHR2bS51cGRhdGVTZW5zb3JzID0gZGFzaGJvYXJkLnVwZGF0ZVNlbnNvcnM7XG5cdFx0dm0udXBkYXRlVGltZXMgPSB1cGRhdGVUaW1lcztcblx0XHR2bS5leHBvcnREYXRhID0gZGFzaGJvYXJkLmV4cG9ydERhdGE7XG5cdFx0dm0udG9nZ2xlR3JhcGhzID0gdG9nZ2xlR3JhcGhzO1xuXHRcdFxuXHRcdGFjdGl2YXRlKCk7XG5cblx0XHQvKiogQ2FsbGVkIHdoZW4gY29udHJvbGxlciBpcyBpbnN0YW50aWF0ZWQgKGRhc2hib2FyZCBwYWdlIGlzIGxvYWRlZCkgKi9cblx0XHRmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcblx0XHRcdHZtLmxvYWRpbmcgPSB0cnVlO1xuXHRcdFx0cmVzb2x2ZWQgPSAwO1xuXG5cdFx0XHRxdWVyeVJlYWRpbmdzKCk7XG5cdFx0XHRxdWVyeVNlbnNvcnMoKTtcblxuXHRcdFx0Ly8gc2V0IHVwIGNoYXJ0IGxpc3RlbmVyc1xuXHRcdFx0JHNjb3BlLiRvbignZGlzcGxheUNoYXJ0SW5zdGFuY2UnLCBmdW5jdGlvbihldmVudCwgYnVveUluc3RhbmNlKSB7XG5cdFx0XHRcdCRzY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKCF2bS5zaG93R3JhcGhzKSB7XG5cdFx0XHRcdFx0XHR0b2dnbGVHcmFwaHMoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGFzaGJvYXJkLmRpc3BsYXlDaGFydEluc3RhbmNlKGJ1b3lJbnN0YW5jZS5uYW1lKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHRcdCRzY29wZS4kb24oJ2NyZWF0ZScsIGZ1bmN0aW9uKGV2ZW50LCBjaGFydCkge1xuXHRcdFx0XHRjaGFydE9iaiA9IGNoYXJ0O1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqIFF1ZXJ5IHJlYWRpbmdzIGFuZCB1cGRhdGUgZGlzcGxheSAqL1xuXHRcdGZ1bmN0aW9uIHF1ZXJ5UmVhZGluZ3MoKSB7XG5cdFx0XHRkYXNoYm9hcmQucXVlcnlSZWFkaW5ncygpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNoZWNrTG9hZGVkKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvKiogQmluZCBzZW5zb3IgaW5mb3JtYXRpb24gdG8gdm0gKi9cblx0XHRmdW5jdGlvbiBxdWVyeVNlbnNvcnMoKSB7XG5cdFx0XHRkYXNoYm9hcmQucXVlcnlTZW5zb3JzKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdFx0dm0uc2Vuc29ycyA9IGRhc2hib2FyZC5zZW5zb3JzKCk7XG5cdFx0XHRcdGNoZWNrTG9hZGVkKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqIFVwZGF0ZSB0aW1lIGZpbHRlcnMsIGhhbmRsZSBsb2FkaW5nICovXG5cdFx0ZnVuY3Rpb24gdXBkYXRlVGltZXMoKSB7XG5cdFx0XHR2bS5sb2FkaW5nID0gdHJ1ZTtcblx0XHRcdGRhc2hib2FyZC51cGRhdGVUaW1lcygpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZtLmxvYWRpbmcgPSBmYWxzZTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRcblx0XHQvKiogQ2hlY2sgd2hldGhlciB0aGUgZGFzaGJvYXJkIGhhcyBmaW5pc2hlZCBsb2FkaW5nICovXG5cdFx0ZnVuY3Rpb24gY2hlY2tMb2FkZWQoKSB7XG5cdFx0XHRpZiAoKytyZXNvbHZlZCA9PSAyKSB7XG5cdFx0XHRcdHZtLmxvYWRpbmcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0LyoqIEV4cGFuZC9jb250cmFjdCBncmFwaHMgcGFuZSBhbmQgdXBkYXRlIG1hcCAqL1xuXHRcdGZ1bmN0aW9uIHRvZ2dsZUdyYXBocygpIHtcblx0XHRcdHZtLnNob3dHcmFwaHMgPSAhdm0uc2hvd0dyYXBocztcblx0XHRcdHZhciBjZW50ZXIgPSBtYXAuZ2V0Q2VudGVyKCk7XG5cdFx0XHRhbmd1bGFyLmVsZW1lbnQoXG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Rhc2hib2FyZC1wYW5lbCcpKVxuXHRcdFx0XHQub25lKFwidHJhbnNpdGlvbmVuZCB3ZWJraXRUcmFuc2l0aW9uRW5kIG9UcmFuc2l0aW9uRW5kIE1TVHJhbnNpdGlvbkVuZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRtYXAuc2V0Q2VudGVyKGNlbnRlcik7XG5cdFx0XHRcdFx0Y2hhcnRPYmoucmVzaXplKGNoYXJ0T2JqLnJlbmRlcilcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRcdFxuXHRcdC8qKiBJbml0aWFsaXNlIGdvb2dsZSBtYXAgd2hlbiBkb2N1bWVudCBpcyBsb2FkZWQgKi9cblx0XHQkZG9jdW1lbnQucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0XHRtYXAuaW5pdGlhbGlzZU1hcCgpO1xuXHRcdH0pO1xuXHR9XG59KSgpOyIsIi8qKlxuICogRmxvb2QgTW9uaXRvcmluZyBTeXN0ZW1cbiAqIFZlcnNpb24gMC4wLjEgKER1eXVuZylcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIFRlYW0gTmVwdHVuZVxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBAYXV0aG9yICAgICBBbmRyZXcgRHllciA8YW5kcmV3QGR5ZXJncm91cC5jb20uYXU+XG4gKiBAdmVyc2lvbiAgICAwLjAuMVxuICogQGNvcHlyaWdodCAgVGVhbSBOZXB0dW5lICgyMDE1KVxuICogQGxpbmsgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FjbGVsL2RlY28zODAxXG4gKi9cbihmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0YW5ndWxhci5tb2R1bGUoJ2FwcC5kYXNoYm9hcmQnKVxuXHRcdC5ydW4oc2V0Um91dGVzKTtcblx0XHRcblx0LyoqIERlZmluZSByb3V0ZXMgZm9yIGRhc2hib2FyZCBtb2R1bGUgKi9cblx0ZnVuY3Rpb24gc2V0Um91dGVzKHJvdXRlckhlbHBlcikge1xuXHRcdHZhciBvdGhlcndpc2VQYXRoID0gJy9kYXNoYm9hcmQnO1xuXHRcdHJvdXRlckhlbHBlci5jb25maWd1cmVTdGF0ZXMoZ2V0U3RhdGVzKCksIG90aGVyd2lzZVBhdGgpO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBnZXRTdGF0ZXMoKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdHtcblx0XHRcdFx0c3RhdGU6ICdkYXNoYm9hcmQnLFxuXHRcdFx0XHRjb25maWc6IHtcblx0XHRcdFx0XHR1cmw6ICcvZGFzaGJvYXJkJyxcblx0XHRcdFx0XHRjb250cm9sbGVyOiAnRGFzaGJvYXJkQ29udHJvbGxlcicsXG5cdFx0XHRcdFx0Y29udHJvbGxlckFzOiAndm0nLFxuXHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmh0bWwnLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdGFjY2VzczogJ2F1dGhlZCdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdO1xuXHR9XG59KSgpOyIsIi8qKlxuICogRmxvb2QgTW9uaXRvcmluZyBTeXN0ZW1cbiAqIFZlcnNpb24gMC4wLjEgKER1eXVuZylcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIFRlYW0gTmVwdHVuZVxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBAYXV0aG9yICAgICBBbmRyZXcgRHllciA8YW5kcmV3QGR5ZXJncm91cC5jb20uYXU+XG4gKiBAdmVyc2lvbiAgICAwLjAuMVxuICogQGNvcHlyaWdodCAgVGVhbSBOZXB0dW5lICgyMDE1KVxuICogQGxpbmsgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FjbGVsL2RlY28zODAxXG4gKi9cbihmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0YW5ndWxhci5tb2R1bGUoJ2FwcC5kYXNoYm9hcmQnKVxuXHRcdC5mYWN0b3J5KCdkYXNoYm9hcmQnLCBkYXNoYm9hcmQpO1xuXHRcdFxuXHQvKipcblx0XHQqIEBuZ2RvYyBzZXJ2aWNlXG5cdFx0KiBAbmFtZSBhcHAuZGFzaGJvYXJkLmRhc2hib2FyZFxuXHRcdCogQHJlcXVpcmVzICRsb2dcblx0XHQqIEByZXF1aXJlcyBzZXJ2ZXJcblx0XHQqIEByZXF1aXJlcyBtYXBcblx0XHQqIEByZXF1aXJlcyBtb21lbnRcblx0KiovXG5cdGZ1bmN0aW9uIGRhc2hib2FyZCgkbG9nLCAkcSwgc2VydmVyLCBtYXAsIG1vbWVudCkge1xuXHRcdC8qKiBJbnRlcm5hbCB2YXJpYWJsZXMuIFRoZXNlIGFyZSBwcmVzZXJ2ZWQgdW50aWwgcGFnZSByZWZyZXNoLiAqL1xuXHRcdHZhciByZWFkaW5ncyA9IFtdO1xuXHRcdHZhciBmaWx0ZXJlZFJlYWRpbmdzID0gW107XG5cdFx0dmFyIHNlbnNvcnMgPSB7fTtcblx0XHR2YXIgYnVveXMgPSBbXTtcblx0XHR2YXIgdGltZXMgPSB7fTtcblx0XHR2YXIgY2hhcnQgPSB7fTtcblxuXHRcdHZhciBkYXRlRm9ybWF0ID0gXCJEL00vWVlcIjtcblx0XHR2YXIgdGltZUZvcm1hdCA9IFwiaDptbSBBXCI7XG5cblx0XHRpbml0aWFsaXNlVGltZXMoKTtcblx0XHRpbml0aWFsaXNlQ2hhcnQoKTtcblxuXHRcdC8qKiBUaGUgc2VydmljZSBtZXRob2RzIHRvIGV4cG9zZSAqL1xuXHRcdHJldHVybiB7XG5cdFx0XHRidW95czogZ2V0QnVveXMsXG5cdFx0XHR0aW1lczogZ2V0VGltZXMsXG5cdFx0XHRzZW5zb3JzOiBnZXRTZW5zb3JzLFxuXHRcdFx0Y2hhcnQ6IGdldENoYXJ0LFxuXHRcdFx0cXVlcnlSZWFkaW5nczogcXVlcnlSZWFkaW5ncyxcblx0XHRcdHF1ZXJ5U2Vuc29yczogcXVlcnlTZW5zb3JzLFxuXHRcdFx0c2VsZWN0QnVveUdyb3VwOiBzZWxlY3RCdW95R3JvdXAsXG5cdFx0XHRzZWxlY3RCdW95SW5zdGFuY2U6IHNlbGVjdEJ1b3lJbnN0YW5jZSxcblx0XHRcdHVwZGF0ZVRpbWVzOiB1cGRhdGVUaW1lcyxcblx0XHRcdHVwZGF0ZVNlbnNvcnM6IHVwZGF0ZVNlbnNvcnMsXG5cdFx0XHRleHBvcnREYXRhOiBleHBvcnREYXRhLFxuXHRcdFx0ZGlzcGxheUNoYXJ0SW5zdGFuY2U6IGRpc3BsYXlDaGFydEluc3RhbmNlXG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFJldHVybiBidW95IGlucHV0IGRhdGEgc3RydWN0dXJlc1xuXHRcdCAqIEByZXR1cm4ge29iamVjdH0gYnVveXMgZmlsdGVycyBhbmQgaW5wdXRzXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gZ2V0QnVveXMoKSB7XG5cdFx0XHRyZXR1cm4gYnVveXM7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIFJldHVybiB0aW1lIGlucHV0IGRhdGEgc3RydWN0dXJlc1xuXHRcdCAqIEByZXR1cm4ge29iamVjdH0gdGltZSBpbnB1dHNcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBnZXRUaW1lcygpIHtcblx0XHRcdHJldHVybiB0aW1lcztcblx0XHR9XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogUmV0dXJuIHNlbnNvciBpbnB1dCBkYXRhIHN0cnVjdHVyZXNcblx0XHQgKiBAcmV0dXJuIHtvYmplY3R9IHNlbnNvciBpbnB1dHMgYW5kIGZpbHRlcnNcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBnZXRTZW5zb3JzKCkge1xuXHRcdFx0cmV0dXJuIHNlbnNvcnM7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogUmV0dXJuIGNoYXJ0IGRhdGEgc3RydWN0dXJlXG5cdFx0ICogQHJldHVybiB7b2JqZWN0fSBjaGFydCBkYXRhXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gZ2V0Q2hhcnQoKSB7XG5cdFx0XHRyZXR1cm4gY2hhcnQ7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIFF1ZXJ5IHJlYWRpbmdzIGZyb20gc2VydmVyIGFuZCB1cGRhdGUgaW50ZXJuYWwgZGF0YSBzdHJ1Y3R1cmVzXG5cdFx0ICogQHBhcmFtICB7aW50fSBmcm9tIHVuaXggdGltZXN0YW1wIGZyb20gdGltZVxuXHRcdCAqIEBwYXJhbSAge2ludH0gdG8gICB1bml4IHRpbWVzdGFtcCB0byB0aW1lXG5cdFx0ICogQHJldHVybiB7cHJvbWlzZX0gICAgICByZXF1ZXN0IHByb21pc2Vcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBxdWVyeVJlYWRpbmdzKGZyb20sIHRvKSB7XG5cdFx0XHRpZiAoIWZyb20pIHtcblx0XHRcdFx0ZnJvbSA9IG1vbWVudCgpLnN1YnRyYWN0KHRpbWVzLmlucHV0cy5zaW5jZS52YWx1ZSxcblx0XHRcdFx0XHQgdGltZXMuaW5wdXRzLnNpbmNlLnF1YW50aWZpZXIpLnVuaXgoKTtcblx0XHRcdFx0dG8gPSBtb21lbnQoKS51bml4KCk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgcHJvbWlzZSA9IHNlcnZlci5nZXRSZWFkaW5ncyhmcm9tLCB0byk7XG5cdFx0XHRwcm9taXNlLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdHJlYWRpbmdzID0gcmVzLmRhdGEuYnVveUdyb3Vwcztcblx0XHRcdFx0cG9wdWxhdGVCdW95cygpO1xuXHRcdFx0XHR1cGRhdGVGaWx0ZXJzKCk7XG5cdFx0XHR9LCBmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0JGxvZy5lcnJvcihyZXMpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogUXVlcnkgc2Vuc29ycyBmcm9tIHNlcnZlciBhbmQgdXBkYXRlIGludGVybmFsIGRhdGEgc3RydWN0dXJlc1xuXHRcdCAqIEByZXR1cm4ge3Byb21pc2V9IHJlcXVlc3QgcHJvbWlzZVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIHF1ZXJ5U2Vuc29ycygpIHtcblx0XHRcdHZhciBwcm9taXNlID0gc2VydmVyLmdldFNlbnNvclR5cGVzKCk7XG5cdFx0XHRwcm9taXNlLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdHBvcHVsYXRlU2Vuc29ycyhyZXMuZGF0YS5zZW5zb3JUeXBlcyk7XG5cdFx0XHRcdHVwZGF0ZUZpbHRlcnMoKTtcblx0XHRcdH0sIGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHQkbG9nLmVycm9yKHJlcyk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdH1cblx0XHRcblx0XHQvKiogSW5pdGlhbGlzZSBmaWx0ZXJzIGFuZCBpbnB1dHMgKi9cblx0XHRmdW5jdGlvbiBpbml0aWFsaXNlVGltZXMoKSB7XG5cdFx0XHR0aW1lcyA9IHtcblx0XHRcdFx0dHlwZTogXCJzaW5jZVwiLFxuXHRcdFx0XHRyYW5nZTogeyBmcm9tOiBudWxsLCB0bzogbnVsbCB9LCAvLyBmcm9tIGFuZCB0byBjb250YWluIG1vbWVudHNcblx0XHRcdFx0cG9pbnQ6IG51bGwsXG5cdFx0XHRcdHBvaW50UmVhZGluZ3M6IFtdLCAvLyBjb250YWlucyBsaXN0IG9mIGNsb3Nlc3QgcmVhZGluZ3MgdG8gcG9pbnRcblx0XHRcdFx0aW5wdXRzOiB7XG5cdFx0XHRcdFx0c2luY2U6IHsgdmFsdWU6IDQsIHF1YW50aWZpZXI6IFwid2Vla3NcIiwgb3B0aW9uczogW1xuXHRcdFx0XHRcdFx0XCJob3Vyc1wiLCBcImRheXNcIiwgXCJ3ZWVrc1wiLCBcIm1vbnRoc1wiXG5cdFx0XHRcdFx0XSB9LFxuXHRcdFx0XHRcdHJhbmdlOiB7XG5cdFx0XHRcdFx0XHRmcm9tOiB7IGRhdGU6IFwiXCIsIHRpbWU6IFwiXCIgfSxcblx0XHRcdFx0XHRcdHRvOiB7IGRhdGU6IFwiXCIsIHRpbWU6IFwiXCIgfSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHBvaW50OiB7IGRhdGU6IFwiXCIsIHRpbWU6IFwiXCIgfSxcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKiBJbml0aWFsaXNlIGNoYXJ0cyAqL1xuXHRcdGZ1bmN0aW9uIGluaXRpYWxpc2VDaGFydCgpIHtcblx0XHRcdGNoYXJ0LnNlcmllcyA9IFtdO1xuXHRcdFx0Y2hhcnQubGFiZWxzID0gW107XG5cdFx0XHRjaGFydC5kYXRhID0gW1xuXHRcdFx0XHRbbnVsbF1cblx0XHRcdF07XG5cdFx0fVxuXHRcdFxuXHRcdC8qKiBQb3B1bGF0ZSBidW95cyBmaWx0ZXIgKi9cblx0XHRmdW5jdGlvbiBwb3B1bGF0ZUJ1b3lzKCkge1x0XG5cdFx0XHRpZiAoIXJlYWRpbmdzKSByZXR1cm47XG5cblx0XHRcdHZhciBncm91cHMgPSBbXTtcblx0XHRcdHZhciBpbnN0YW5jZXMgPSBbXTtcblxuXHRcdFx0Ly8gYWRkIGdyb3Vwc1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZWFkaW5ncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgYnVveUdyb3VwID0gcmVhZGluZ3NbaV07XG5cdFx0XHRcdGdyb3Vwcy5wdXNoKGJ1b3lHcm91cC5pZCk7XG5cdFx0XHRcdHZhciBncm91cCA9IGJ1b3lzRmlsdGVyQWRkR3JvdXAoYnVveUdyb3VwKTtcblxuXHRcdFx0XHQvLyBhZGQgaW5zdGFuY2VzXG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgYnVveUdyb3VwLmJ1b3lJbnN0YW5jZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHR2YXIgYnVveUluc3RhbmNlID0gYnVveUdyb3VwLmJ1b3lJbnN0YW5jZXNbal07XG5cdFx0XHRcdFx0aW5zdGFuY2VzLnB1c2goYnVveUluc3RhbmNlLmlkKTtcblx0XHRcdFx0XHRidW95c0ZpbHRlckFkZEluc3RhbmNlKGJ1b3lJbnN0YW5jZSwgZ3JvdXApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XHRcdFxuXG5cdFx0XHQvLyByZW1vdmUgb2xkIGJ1b3lzXG5cdFx0XHRidW95c0ZpbHRlclJlbW92ZU9sZEdyb3Vwcyhncm91cHMpO1xuXHRcdFx0YnVveXNGaWx0ZXJSZW1vdmVPbGRJbnN0YW5jZXMoaW5zdGFuY2VzKTtcblx0XHR9XG5cblx0XHQvKiogUG9wdWxhdGUgc2Vuc29yIGlucHV0IGRhdGEgKi9cblx0XHRmdW5jdGlvbiBwb3B1bGF0ZVNlbnNvcnMoZGF0YSkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBzZW5zb3IgPSBkYXRhW2ldO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKHNlbnNvcnMuaGFzT3duUHJvcGVydHkoc2Vuc29yLmlkKSkgY29udGludWU7XG5cblx0XHRcdFx0c2Vuc29yLmlucHV0cyA9IHtcblx0XHRcdFx0XHRlbmFibGVkOiBmYWxzZSxcblx0XHRcdFx0XHRvcHRpb25zOiBbXCI+XCIsIFwiPFwiLCBcIj1cIl0sXG5cdFx0XHRcdFx0c2VsZWN0ZWQ6IFwiPlwiLFxuXHRcdFx0XHRcdHZhbHVlOiBcIlwiXG5cdFx0XHRcdH07XG5cblx0XHRcdFx0c2Vuc29yc1tzZW5zb3IuaWRdID0gc2Vuc29yO1x0XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogQWRkIGJ1b3kgZ3JvdXAgdG8gYnVveXMgZmlsdGVyIGFycmF5LCBkb24ndCBvdmVyd3JpdGUgZXhpc3RpbmcgZ3JvdXBzXG5cdFx0ICogXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IGJ1b3lHcm91cCBidW95R3JvdXAgdG8gYWRkXG5cdFx0ICogQHJldHVybiB7b2JqZWN0fSByZWZlcmVuY2UgdG8gYWRkZWQgZ3JvdXBcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBidW95c0ZpbHRlckFkZEdyb3VwKGJ1b3lHcm91cCkge1xuXHRcdFx0dmFyIGdyb3VwID0ge307XG5cdFx0XHR2YXIgZ0luZGV4ID0gYnVveXNGaWx0ZXJHcm91cEluZGV4KGJ1b3lHcm91cC5pZCk7XG5cdFx0XHRpZiAoZ0luZGV4ICE9IC0xKSB7XG5cdFx0XHRcdGdyb3VwID0gYnVveXNbZ0luZGV4XTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGdyb3VwLmlkID0gYnVveUdyb3VwLmlkO1xuXHRcdFx0XHRncm91cC5uYW1lID0gYnVveUdyb3VwLm5hbWU7XG5cdFx0XHRcdGdyb3VwLmVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRncm91cC5jb2xsYXBzZWQgPSBmYWxzZTtcblx0XHRcdFx0Z3JvdXAuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuXHRcdFx0XHRncm91cC5idW95SW5zdGFuY2VzID0gW107XG5cdFx0XHRcdGJ1b3lzLnB1c2goZ3JvdXApO1xuXHRcdFx0fVxuXHRcdFx0Z3JvdXAubmFtZSA9IGJ1b3lHcm91cC5uYW1lOyAvLyBhbHdheXMgdXBkYXRlIG5hbWUgaW4gY2FzZSBpdCB3YXMgY2hhbmdlZCBpbiBjb25maWcgcGFnZVxuXHRcdFx0cmV0dXJuIGdyb3VwO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEFkZCBidW95IGluc3RhbmNlIHRvIGEgYnVveSBncm91cCwgZG9uJ3Qgb3ZlcndyaXRlIGV4aXN0aW5nIGluc3RhbmNlc1xuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBidW95SW5zdGFuY2UgYnVveUluc3RhbmNlIHRvIGFkZFxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBncm91cCAgICAgICAgYnVveUdyb3VwIHRvIGFkZCB0aGUgaW5zdGFuY2UgdG9cblx0XHQgKiBAcmV0dXJuIHtvYmplY3R9IHJlZmVyZW5jZSB0byBhZGRlZCBpbnN0YW5jZVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGJ1b3lzRmlsdGVyQWRkSW5zdGFuY2UoYnVveUluc3RhbmNlLCBncm91cCkge1xuXHRcdFx0dmFyIGluc3RhbmNlID0ge307XG5cdFx0XHR2YXIgZ0luZGV4ID0gYnVveXNGaWx0ZXJHcm91cEluZGV4KGdyb3VwLmlkKTtcblx0XHRcdHZhciBpSW5kZXggPSBidW95c0ZpbHRlckluc3RhbmNlSW5kZXgoYnVveUluc3RhbmNlLmlkLCBncm91cC5pZCk7XG5cdFx0XHRpZiAoaUluZGV4ICE9IC0xKSB7XG5cdFx0XHRcdGluc3RhbmNlID0gYnVveXNbZ0luZGV4XS5idW95SW5zdGFuY2VzW2lJbmRleF07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpbnN0YW5jZS5pZCA9IGJ1b3lJbnN0YW5jZS5pZDtcblx0XHRcdFx0aW5zdGFuY2UuZW5hYmxlZCA9IHRydWU7XG5cdFx0XHRcdGdyb3VwLmJ1b3lJbnN0YW5jZXMucHVzaChpbnN0YW5jZSk7XG5cdFx0XHR9XG5cdFx0XHRpbnN0YW5jZS5uYW1lID0gYnVveUluc3RhbmNlLm5hbWU7IC8vIGFsd2F5cyB1cGRhdGUgbmFtZSBpbiBjYXNlIGl0IHdhcyBjaGFuZ2VkIGluIGNvbmZpZyBwYWdlXG5cdFx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogRmluZCBvdXQgaW5kZXggb2YgYnVveUdyb3VwIGluIGJ1b3lzIGFycmF5XG5cdFx0ICogQHBhcmFtICB7aW50fSBpZCBpZCBvZiBidW95R3JvdXBcblx0XHQgKiBAcmV0dXJuIHtpbnR9ICAgIGluZGV4IG9yIC0xIGlmIG5vdCBmb3VuZFxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGJ1b3lzRmlsdGVyR3JvdXBJbmRleChpZCkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBidW95cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoYnVveXNbaV0uaWQgPT0gaWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIC0xO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEZpbmQgb3V0IGluZGV4IG9mIGJ1b3lJbnN0YW5jZSBpbiBidW95R3JvdXAgaW4gYnVveXMgYXJyYXlcblx0XHQgKiBAcGFyYW0gIHtpbnR9IGlkICBpZCBvZiBidW95SW5zdGFuY2UgdG8gZmluZFxuXHRcdCAqIEBwYXJhbSAge2ludH0gZ0lkIGlkIG9mIGJ1b3lHcm91cFxuXHRcdCAqIEByZXR1cm4ge2ludH0gICAgIGluZGV4IG9mIGJ1b3lJbnN0YW5jZSBvciAtMSBpZiBub3QgZm91bmRcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBidW95c0ZpbHRlckluc3RhbmNlSW5kZXgoaWQsIGdJZCkge1xuXHRcdFx0dmFyIGdJbmRleCA9IGJ1b3lzRmlsdGVyR3JvdXBJbmRleChnSWQpO1xuXHRcdFx0aWYgKGdJbmRleCA9PSAtMSkgcmV0dXJuIC0xO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBidW95c1tnSW5kZXhdLmJ1b3lJbnN0YW5jZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKGJ1b3lzW2dJbmRleF0uYnVveUluc3RhbmNlc1tpXS5pZCA9PSBpZCkge1xuXHRcdFx0XHRcdHJldHVybiBpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gLTE7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlIGJ1b3lHcm91cCBmcm9tIGJ1b3lzIGxpc3Rcblx0XHQgKiBAcGFyYW0gIHtpbnRbXX0ga2VlcCBhcnJheSBvZiBidW95R3JvdXAgSURzIG5vdCB0byByZW1vdmVcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBidW95c0ZpbHRlclJlbW92ZU9sZEdyb3VwcyhrZWVwKSB7XG5cdFx0XHR2YXIgcmVtb3ZlID0gW107XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGJ1b3lzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBncm91cCA9IGJ1b3lzW2ldO1xuXHRcdFx0XHRpZiAoa2VlcC5pbmRleE9mKGdyb3VwLmlkKSA9PSAtMSkge1xuXHRcdFx0XHRcdHJlbW92ZS5wdXNoKGkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRidW95cy5zcGxpY2UocmVtb3ZlW2ldLCAxKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBSZW1vdmUgYnVveUluc3RhbmNlIGZyb20gYnVveXMgbGlzdFxuXHRcdCAqIEBwYXJhbSAge2ludFtdfSBrZWVwIGFycmF5IG9mIGJ1b3lJbnN0YW5jZSBJRHMgbm90IHRvIHJlbW92ZVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGJ1b3lzRmlsdGVyUmVtb3ZlT2xkSW5zdGFuY2VzKGtlZXApIHtcblx0XHRcdC8vIGlmICghYnVveXMubGVuZ3RoKSByZXR1cm47IGRvZXNuJ3QgZG8gYW55dGhpbmc/XG5cdFx0XHR2YXIgcmVtb3ZlID0gW107XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGJ1b3lzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBncm91cCA9IGJ1b3lzW2ldO1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGdyb3VwLmJ1b3lJbnN0YW5jZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHR2YXIgaW5zdGFuY2UgPSBncm91cC5idW95SW5zdGFuY2VzW2pdO1xuXHRcdFx0XHRcdGlmIChrZWVwLmluZGV4T2YoaW5zdGFuY2UuaWQpID09IC0xKSB7XG5cdFx0XHRcdFx0XHRyZW1vdmUucHVzaCh7IGdyb3VwOiBpLCBpbnN0YW5jZTogaiB9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGJ1b3lzW3JlbW92ZVtpXS5ncm91cF0uc3BsaWNlKHJlbW92ZVtpXS5pbnN0YW5jZSwgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cblx0XHQvKiogVXBkYXRlIHdoZXRoZXIgYnVveSBncm91cCBmaWx0ZXIgaXMgZW5hYmxlZCAqL1xuXHRcdGZ1bmN0aW9uIHNlbGVjdEJ1b3lHcm91cChidW95R3JvdXApIHtcblx0XHRcdGJ1b3lHcm91cC5idW95SW5zdGFuY2VzLmZvckVhY2goZnVuY3Rpb24oYnVveUluc3RhbmNlKSB7XG5cdFx0XHRcdGJ1b3lJbnN0YW5jZS5lbmFibGVkID0gYnVveUdyb3VwLmVuYWJsZWQ7XG5cdFx0XHR9KTtcblx0XHRcdHVwZGF0ZUZpbHRlcnMoKTtcblx0XHR9XG5cblx0XHQvKiogVXBkYXRlIHdoZXRoZXIgYnVveSBpbnN0YW5jZSBmaWx0ZXIgaXMgZW5hYmxlZCAqL1xuXHRcdGZ1bmN0aW9uIHNlbGVjdEJ1b3lJbnN0YW5jZShidW95R3JvdXApIHtcblx0XHRcdHVwZGF0ZUJ1b3lHcm91cFNlbGVjdFN0YXRlKGJ1b3lHcm91cCk7XHRcdFx0XG5cdFx0XHR1cGRhdGVGaWx0ZXJzKCk7XG5cdFx0fVxuXG5cdFx0LyoqIEFsc28gaGFuZGxlIGRpc3BsYXkgb2YgaW5kZXRlcm1pbmF0ZSBjaGVja2JveCBmb3IgZ3JvdXAgKi9cblx0XHRmdW5jdGlvbiB1cGRhdGVCdW95R3JvdXBTZWxlY3RTdGF0ZShidW95R3JvdXApIHtcblx0XHRcdHZhciBhbGxUcnVlID0gdHJ1ZTtcblx0XHRcdHZhciBhbGxGYWxzZSA9IHRydWU7XG5cdFx0XHRcblx0XHRcdGJ1b3lHcm91cC5idW95SW5zdGFuY2VzLmZvckVhY2goZnVuY3Rpb24oaW5zdGFuY2UpIHtcblx0XHRcdFx0aWYgKGluc3RhbmNlLmVuYWJsZWQpIHtcblx0XHRcdFx0XHRhbGxGYWxzZSA9IGZhbHNlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGFsbFRydWUgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRcblx0XHRcdGlmIChhbGxGYWxzZSkge1xuXHRcdFx0XHRidW95R3JvdXAuZW5hYmxlZCA9IGZhbHNlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YnVveUdyb3VwLmVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZiAoYWxsRmFsc2UgfHwgYWxsVHJ1ZSkge1xuXHRcdFx0XHRidW95R3JvdXAuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YnVveUdyb3VwLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKiBVcGRhdGUgZmlsdGVycyBhbmQgbWFwIHdoZW4gdGltZSBmaWx0ZXJzIGFyZSBjaGFuZ2VkICovXG5cdFx0ZnVuY3Rpb24gdXBkYXRlVGltZXMoKSB7XG5cdFx0XHR2YXIgZGVmZXIgPSAkcS5kZWZlcigpO1xuXHRcdFx0Ly8gY29udmVydCBpbnB1dCBzdHJpbmdzIHRvIG1vbWVudHMgXG5cdFx0XHQvLyBhbmQgdXBkYXRlIHZtLnRpbWVzLCB3aGljaCB1cGRhdGVzIHJlZmVyZW5jZSBpbiBkYXNoYm9hcmQgc2VydmljZVxuXHRcdFx0aWYgKHRpbWVzSW5wdXRzVmFsaWQoKSkge1xuXHRcdFx0XHR2YXIgbW9tZW50Rm9ybWF0ID0gZGF0ZUZvcm1hdCArIFwiIFwiICsgdGltZUZvcm1hdDtcblx0XHRcdFx0XG5cdFx0XHRcdGlmICh0aW1lcy50eXBlID09ICdyYW5nZScpIHtcblx0XHRcdFx0XHR0aW1lcy5yYW5nZS5mcm9tID0gbW9tZW50KHRpbWVzLmlucHV0cy5yYW5nZS5mcm9tLmRhdGVcblx0XHRcdFx0XHRcdCsgXCIgXCIgKyB0aW1lcy5pbnB1dHMucmFuZ2UuZnJvbS50aW1lLCBtb21lbnRGb3JtYXQpO1xuXHRcdFx0XHRcdHRpbWVzLnJhbmdlLnRvID0gbW9tZW50KHRpbWVzLmlucHV0cy5yYW5nZS50by5kYXRlXG5cdFx0XHRcdFx0XHQrIFwiIFwiICsgdGltZXMuaW5wdXRzLnJhbmdlLnRvLnRpbWUsIG1vbWVudEZvcm1hdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGVsc2UgaWYgKHRpbWVzLnR5cGUgPT0gJ3BvaW50Jykge1xuXHRcdFx0XHRcdHRpbWVzLnBvaW50ID0gbW9tZW50KHRpbWVzLmlucHV0cy5wb2ludC5kYXRlXG5cdFx0XHRcdFx0XHQrIFwiIFwiICsgdGltZXMuaW5wdXRzLnBvaW50LnRpbWUsIG1vbWVudEZvcm1hdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHF1ZXJ5UmVhZGluZ1RpbWVzKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRkZWZlci5yZXNvbHZlKCk7XHRcblx0XHRcdFx0fSwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0ZGVmZXIucmVqZWN0KCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRlZmVyLnByb21pc2U7XG5cdFx0fVxuXG5cdFx0LyoqIEJhc2ljIHZhbGlkYXRpb24gb2YgdGltZXMgaW5wdXRzICovXG5cdFx0ZnVuY3Rpb24gdGltZXNJbnB1dHNWYWxpZCgpIHtcblx0XHRcdGlmICh0aW1lcy50eXBlID09ICdzaW5jZScpIHtcblx0XHRcdFx0aWYgKHRpbWVzLmlucHV0cy5zaW5jZS52YWx1ZSkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodGltZXMudHlwZSA9PSAncmFuZ2UnKSB7XG5cdFx0XHRcdC8vIHZhbGlkIGNvbWJpbmF0aW9uczogYWxsIGZpbGxlZCwgZGF0ZXMgZmlsbGVkLCB0aW1lcyBmaWxsZWRcblx0XHRcdFx0dmFyIGZyb21EYXRlID0gdGltZXMuaW5wdXRzLnJhbmdlLmZyb20uZGF0ZTtcblx0XHRcdFx0dmFyIGZyb21UaW1lID0gdGltZXMuaW5wdXRzLnJhbmdlLmZyb20udGltZTtcblx0XHRcdFx0dmFyIHRvRGF0ZSA9IHRpbWVzLmlucHV0cy5yYW5nZS50by5kYXRlO1xuXHRcdFx0XHR2YXIgdG9UaW1lID0gdGltZXMuaW5wdXRzLnJhbmdlLnRvLnRpbWU7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoZnJvbURhdGUgJiYgZnJvbVRpbWUgJiYgdG9EYXRlICYmIHRvVGltZSkgcmV0dXJuIHRydWU7XG5cdFx0XHRcdGlmIChmcm9tRGF0ZSAmJiAhZnJvbVRpbWUgJiYgdG9EYXRlICYmICF0b1RpbWUpIHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRpbWVzLnR5cGUgPT0gJ3BvaW50Jykge1xuXHRcdFx0XHQvLyBtdXN0IGhhdmUgZGF0ZSwgdGltZSBpcyBvcHRpb25hbFxuXHRcdFx0XHRpZiAodGltZXMuaW5wdXRzLnBvaW50LmRhdGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKiBVcGRhdGUgaW50ZXJuYWwgZmlsdGVyZWQgcmVhZGluZ3Mgd2hlbiB0aW1lIGZpbHRlcnMgY2hhbmdlcyAqL1xuXHRcdGZ1bmN0aW9uIHF1ZXJ5UmVhZGluZ1RpbWVzKCkge1xuXHRcdFx0Ly8gcXVlcnkgc2VydmVyIGZvciBuZXcgdGltZXNcblx0XHRcdHZhciBmcm9tLCB0bztcblx0XHRcdFxuXHRcdFx0aWYgKHRpbWVzLnR5cGUgPT0gJ3NpbmNlJykge1xuXHRcdFx0XHRmcm9tID0gbW9tZW50KCkuc3VidHJhY3QodGltZXMuaW5wdXRzLnNpbmNlLnZhbHVlLFxuXHRcdFx0XHRcdCB0aW1lcy5pbnB1dHMuc2luY2UucXVhbnRpZmllcikudW5peCgpO1xuXHRcdFx0XHR0byA9IG1vbWVudCgpLnVuaXgoKTtcblx0XHRcdH0gZWxzZSBpZiAodGltZXMudHlwZSA9PSAnYWxsJykge1xuXHRcdFx0XHRmcm9tID0gMDtcblx0XHRcdFx0dG8gPSBtb21lbnQoKS51bml4KCk7XG5cdFx0XHR9IGVsc2UgaWYgKHRpbWVzLnR5cGUgPT0gJ3JhbmdlJykge1xuXHRcdFx0XHRmcm9tID0gdGltZXMucmFuZ2UuZnJvbS51bml4KCk7XG5cdFx0XHRcdHRvID0gdGltZXMucmFuZ2UudG8udW5peCgpO1xuXHRcdFx0fSBlbHNlIGlmICh0aW1lcy50eXBlID09ICdwb2ludCcpIHtcblx0XHRcdFx0ZnJvbSA9IHRpbWVzLnBvaW50LmNsb25lKCkuc3VidHJhY3QoMiwgJ3dlZWtzJykudW5peCgpO1xuXHRcdFx0XHR0byA9IHRpbWVzLnBvaW50LmNsb25lKCkuYWRkKDIsICd3ZWVrcycpLnVuaXgoKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0dmFyIHByb21pc2UgPSBxdWVyeVJlYWRpbmdzKGZyb20sIHRvKTtcblx0XHRcdHByb21pc2UudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKHRpbWVzLnR5cGUgPT0gJ3BvaW50Jykge1xuXHRcdFx0XHRcdGNhbGN1bGF0ZVBvaW50UmVhZGluZ3MoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqIFVwZGF0ZSBpbnRlcm5hbCBmaWx0ZXJlZCByZWFkaW5ncyB3aGVuIHNlbnNvciBmaWx0ZXJzIGNoYW5nZWQgKi9cblx0XHRmdW5jdGlvbiB1cGRhdGVTZW5zb3JzKCkge1xuXHRcdFx0dXBkYXRlRmlsdGVycygpO1xuXHRcdH1cblx0XHRcblx0XHQvKiogQ2FsY3VsYXRlIHJlYWRpbmdzIGNsb3Nlc3QgdG8gc3BlY2lmaWVkIHRpbWUgKi9cblx0XHRmdW5jdGlvbiBjYWxjdWxhdGVQb2ludFJlYWRpbmdzKCkge1xuXHRcdFx0dGltZXMucG9pbnRSZWFkaW5ncyA9IFtdO1xuXHRcdFx0aWYgKCFyZWFkaW5ncykgcmV0dXJuO1xuXG5cdFx0XHRyZWFkaW5ncy5mb3JFYWNoKGZ1bmN0aW9uKGJ1b3lHcm91cCkge1xuXHRcdFx0XHRidW95R3JvdXAuYnVveUluc3RhbmNlcy5mb3JFYWNoKGZ1bmN0aW9uKGJ1b3lJbnN0YW5jZSkge1xuXHRcdFx0XHRcdHZhciBjbG9zZXN0ID0ge1xuXHRcdFx0XHRcdFx0aWQ6IGJ1b3lJbnN0YW5jZS5yZWFkaW5nc1swXS5pZCxcblx0XHRcdFx0XHRcdHRpbWVzdGFtcDogYnVveUluc3RhbmNlLnJlYWRpbmdzWzBdLnRpbWVzdGFtcFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0YnVveUluc3RhbmNlLnJlYWRpbmdzLmZvckVhY2goZnVuY3Rpb24ocmVhZGluZykge1xuXHRcdFx0XHRcdFx0dmFyIGRpZmZPbGQgPSBtb21lbnQudW5peChjbG9zZXN0LnRpbWVzdGFtcCkuZGlmZih0aW1lcy5wb2ludCk7XG5cdFx0XHRcdFx0XHR2YXIgZGlmZk5ldyA9IG1vbWVudC51bml4KHJlYWRpbmcudGltZXN0YW1wKS5kaWZmKHRpbWVzLnBvaW50KTtcblx0XHRcdFx0XHRcdGlmIChNYXRoLmFicyhkaWZmTmV3KSA8IE1hdGguYWJzKGRpZmZPbGQpKSB7XG5cdFx0XHRcdFx0XHRcdGNsb3Nlc3QuaWQgPSByZWFkaW5nLmlkO1xuXHRcdFx0XHRcdFx0XHRjbG9zZXN0LnRpbWVzdGFtcCA9IHJlYWRpbmcudGltZXN0YW1wO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRpbWVzLnBvaW50UmVhZGluZ3MucHVzaChjbG9zZXN0LmlkKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqIFJlLWZpbHRlciByZWFkaW5ncyBiYXNlZCBvbiB1cGRhdGVkIGZpbHRlcnMgKi9cblx0XHRmdW5jdGlvbiB1cGRhdGVGaWx0ZXJzKCkge1xuXHRcdFx0ZmlsdGVyZWRSZWFkaW5ncyA9IFtdO1xuXHRcdFx0aWYgKCFyZWFkaW5ncy5sZW5ndGggfHwgIU9iamVjdC5rZXlzKHNlbnNvcnMpLmxlbmd0aCkgcmV0dXJuO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlYWRpbmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBidW95R3JvdXAgPSByZWFkaW5nc1tpXTtcblx0XHRcdFx0aWYgKCFidW95R3JvdXBFbmFibGVkKGJ1b3lHcm91cC5pZCkpIGNvbnRpbnVlO1xuXHRcdFx0XHR2YXIgZ3JvdXAgPSBhZGRCdW95R3JvdXAoYnVveUdyb3VwKTtcblxuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGJ1b3lHcm91cC5idW95SW5zdGFuY2VzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0dmFyIGJ1b3lJbnN0YW5jZSA9IGJ1b3lHcm91cC5idW95SW5zdGFuY2VzW2pdO1xuXHRcdFx0XHRcdGlmICghYnVveUluc3RhbmNlRW5hYmxlZChidW95SW5zdGFuY2UuaWQsIGJ1b3lHcm91cC5pZCkpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdHZhciBpbnN0YW5jZSA9IGFkZEJ1b3lJbnN0YW5jZShidW95SW5zdGFuY2UsIGdyb3VwKTtcblxuXHRcdFx0XHRcdGZvciAodmFyIGsgPSAwOyBrIDwgYnVveUluc3RhbmNlLnJlYWRpbmdzLmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdFx0XHR2YXIgcmVhZGluZyA9IGJ1b3lJbnN0YW5jZS5yZWFkaW5nc1trXTtcblx0XHRcdFx0XHRcdGlmICghc2hvd1JlYWRpbmcocmVhZGluZykpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0aW5zdGFuY2UucmVhZGluZ3MucHVzaChyZWFkaW5nKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHVwZGF0ZU1hcCgpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIENoZWNrIHdoZXRoZXIgYSBidW95IGdyb3VwIHNob3VsZCBiZSBzaG93blxuXHRcdCAqIEBwYXJhbSAge2ludH0gaWQgaWQgb2YgYnVveSBncm91cCB0byBjaGVja1xuXHRcdCAqIEByZXR1cm4ge2Jvb2x9ICAgIHRydWUgaWYgaXQgc2hvdWxkIGJlIHNob3duLCBmYWxzZSBpZiBub3Rcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBidW95R3JvdXBFbmFibGVkKGlkKSB7XG5cdFx0XHRyZXR1cm4gYnVveXNbYnVveXNGaWx0ZXJHcm91cEluZGV4KGlkKV0uZW5hYmxlZDtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBDaGVjayB3aGV0aGVyIGEgYnVveSBpbnN0YW5jZSBzaG91bGQgYmUgc2hvd25cblx0XHQgKiBAcGFyYW0gIHtpbnR9IGlkIGlkIG9mIGJ1b3kgaW5zdGFuY2UgdG8gY2hlY2tcblx0XHQgKiBAcGFyYW0ge2ludH0gZ0lkIGlkIG9mIGdyb3VwIGluc3RhbmNlIGlzIGluXG5cdFx0ICogQHJldHVybiB7Ym9vbH0gICAgdHJ1ZSBpZiBpdCBzaG91bGQgYmUgc2hvd24sIGZhbHNlIGlmIG5vdFxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGJ1b3lJbnN0YW5jZUVuYWJsZWQoaWQsIGdJZCkge1xuXHRcdFx0dmFyIGdJbmRleCA9IGJ1b3lzRmlsdGVyR3JvdXBJbmRleChnSWQpO1xuXHRcdFx0dmFyIGlJbmRleCA9IGJ1b3lzRmlsdGVySW5zdGFuY2VJbmRleChpZCwgZ0lkKTtcblx0XHRcdHJldHVybiBidW95c1tnSW5kZXhdLmJ1b3lJbnN0YW5jZXNbaUluZGV4XS5lbmFibGVkO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEFkZCBhIGJ1b3kgZ3JvdXAgdG8gZmlsdGVyZWQgcmVhZGluZ3Ncblx0XHQgKiBAcGFyYW0ge29iamVjdH0gYnVveUdyb3VwIGJ1b3kgZ3JvdXAgdG8gYWRkXG5cdFx0ICogQHJldHVybiB7b2JqZWN0fSByZWZlcmVuY2UgdG8gYWRkZWQgZ3JvdXBcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBhZGRCdW95R3JvdXAoYnVveUdyb3VwKSB7XG5cdFx0XHR2YXIgZ3JvdXAgPSB7fTtcblx0XHRcdGZpbHRlcmVkUmVhZGluZ3MucHVzaChncm91cCk7XG5cdFx0XHRncm91cC5pZCA9IGJ1b3lHcm91cC5pZDtcblx0XHRcdGdyb3VwLm5hbWUgPSBidW95R3JvdXAubmFtZTtcblx0XHRcdGdyb3VwLmJ1b3lJbnN0YW5jZXMgPSBbXTtcblx0XHRcdHJldHVybiBncm91cDtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBBZGQgYSBidW95IGluc3RhbmNlIHRvIGZpbHRlcmVkIHJlYWRpbmdzXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IGJ1b3lJbnN0YW5jZSBidW95IGluc3RhbmNlIHRvIGFkZFxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBncm91cCB0aGUgZ3JvdXAgaXQgc2hvdWxkIGJlIGFkZGVkIHRvXG5cdFx0ICogQHJldHVybiB7b2JqZWN0fSByZWZlcmVuY2UgdG8gYWRkZWQgaW5zdGFuY2Vcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBhZGRCdW95SW5zdGFuY2UoYnVveUluc3RhbmNlLCBncm91cCkge1xuXHRcdFx0dmFyIGluc3RhbmNlID0ge307XG5cdFx0XHRncm91cC5idW95SW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpO1xuXHRcdFx0aW5zdGFuY2UuaWQgPSBidW95SW5zdGFuY2UuaWQ7XG5cdFx0XHRpbnN0YW5jZS5uYW1lID0gYnVveUluc3RhbmNlLm5hbWU7XG5cdFx0XHRpbnN0YW5jZS5yZWFkaW5ncyA9IFtdO1xuXHRcdFx0cmV0dXJuIGluc3RhbmNlO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIENoZWNrIHdoZXRoZXIgb3Igbm90IHRvIHNob3cgYSByZWFkaW5nIGJhc2VkIG9uIG90aGVyIGZpbHRlcnNcblx0XHQgKiBAcGFyYW0gIHtvYmplY3R9IHJlYWRpbmcgcmVhZGluZyB0byBjaGVja1xuXHRcdCAqIEByZXR1cm4ge2Jvb2x9ICAgICAgICAgdHJ1ZSBpZiB0aGUgcmVhZGluZyBzaG91bGQgYmUgc2hvdywgZWxzZSBmYWxzZVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIHNob3dSZWFkaW5nKHJlYWRpbmcpIHtcblx0XHRcdGlmICghZmlsdGVyVGltZXMocmVhZGluZykpIHJldHVybiBmYWxzZTtcblx0XHRcdGlmICghZmlsdGVyU2Vuc29ycyhyZWFkaW5nKSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIEZpbHRlciByZWFkaW5ncyBiYXNlZCBvbiB0aW1lc3RhbXBcblx0XHQgKiBAcGFyYW0gIHtvYmplY3R9IHJlYWRpbmcgcmVhZGluZ1xuXHRcdCAqIEByZXR1cm4ge2Jvb2x9ICAgICAgICAgaW5jbHVkZSByZWFkaW5nXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gZmlsdGVyVGltZXMocmVhZGluZykge1xuXHRcdFx0aWYgKHRpbWVzLnR5cGUgPT0gJ3NpbmNlJykge1xuXHRcdFx0XHR2YXIgc2luY2UgPSBtb21lbnQoKS5zdWJ0cmFjdCh0aW1lcy5pbnB1dHMuc2luY2UudmFsdWUsXG5cdFx0XHRcdFx0IHRpbWVzLmlucHV0cy5zaW5jZS5xdWFudGlmaWVyKTtcblx0XHRcdFx0dmFyIHRpbWUgPSBtb21lbnQudW5peChyZWFkaW5nLnRpbWVzdGFtcCk7XG5cdFx0XHRcdGlmICghdGltZS5pc0FmdGVyKHNpbmNlKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aW1lcy50eXBlID09ICdyYW5nZScpIHtcblx0XHRcdFx0dmFyIHRpbWUgPSBtb21lbnQudW5peChyZWFkaW5nLnRpbWVzdGFtcCk7XG5cdFx0XHRcdGlmICghdGltZS5pc0JldHdlZW4odGltZXMucmFuZ2UuZnJvbSwgdGltZXMucmFuZ2UudG8pKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRpbWVzLnR5cGUgPT0gJ3BvaW50Jykge1xuXHRcdFx0XHRpZiAodGltZXMucG9pbnRSZWFkaW5ncy5pbmRleE9mKHJlYWRpbmcuaWQpID09IC0xKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogRmlsdGVyIHJlYWRpbmdzIGJhc2VkIG9uIHNlbnNvciBmaWx0ZXJzXG5cdFx0ICogQHBhcmFtICB7b2JqZWN0fSByZWFkaW5nIHJlYWRpbmdcblx0XHQgKiBAcmV0dXJuIHtib29sfSAgICAgICAgIGluY2x1ZGUgcmVhZGluZ1xuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGZpbHRlclNlbnNvcnMocmVhZGluZykge1xuXHRcdFx0aWYgKE9iamVjdC5rZXlzKHNlbnNvcnMpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZWFkaW5nLnNlbnNvclJlYWRpbmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmICghZmlsdGVyU2Vuc29yKHJlYWRpbmcuc2Vuc29yUmVhZGluZ3NbaV0pKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogRmlsdGVyIHJlYWRpbmcgYmFzZWQgb24gc3BlY2lmaWMgc2Vuc29yXG5cdFx0ICogQHBhcmFtICB7b2JqZWN0fSBzUmVhZGluZyBzZW5zb3IgcmVhZGluZ1xuXHRcdCAqIEByZXR1cm4ge2Jvb2x9ICAgICAgICAgIGluY2x1ZGUgcmVhZGluZ1xuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGZpbHRlclNlbnNvcihzUmVhZGluZykge1xuXHRcdFx0dmFyIHNlbnNvciA9IHNlbnNvcnNbc1JlYWRpbmcuc2Vuc29yVHlwZUlkXS5pbnB1dHM7XG5cdFx0XHRcblx0XHRcdGlmICghc2Vuc29yLmVuYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHR2YXIgdmFsdWUgPSBwYXJzZUludChzZW5zb3IudmFsdWUsIDEwKTtcblx0XHRcdGlmIChzZW5zb3Iuc2VsZWN0ZWQgPT0gXCI+XCIpIHtcblx0XHRcdFx0aWYgKHNSZWFkaW5nLnZhbHVlIDw9IHZhbHVlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHNlbnNvci5zZWxlY3RlZCA9PSBcIjxcIikge1xuXHRcdFx0XHRpZiAoc1JlYWRpbmcudmFsdWUgPj0gdmFsdWUpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoc2Vuc29yLnNlbGVjdGVkID09IFwiPVwiKSB7XG5cdFx0XHRcdGlmIChzUmVhZGluZy52YWx1ZSAhPSB2YWx1ZSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIFJldHVybiAwLTEgZGVwZW5kaW5nIHdoZXJlIHJlYWRpbmcgdGltZXN0YW1wIGZhbGxzIGJhc2VkIG9uIHRpbWUgZmlsdGVyc1xuXHRcdCAqIEBwYXJhbSAge29iamVjdH0gcmVhZGluZyByZWFkaW5nXG5cdFx0ICogQHJldHVybiB7ZmxvYXR9ICAgICAgICAgYWdlICgwIGlzIG9sZCwgMSBpcyBuZXcpXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gZ2V0UmVsYXRpdmVBZ2UocmVhZGluZykge1xuXHRcdFx0Ly8gcmV0dXJucyBhZ2UgYmV0d2VlbiAwIGFuZCAxLCBiYXNlZCBvbiBhIHJhbmdlIGRldGVybWluZWQgYXMgc2VlbiBiZWxvd1xuXHRcdFx0dmFyIHRpbWUgPSBtb21lbnQudW5peChyZWFkaW5nLnRpbWVzdGFtcCk7XG5cdFx0XHRcblx0XHRcdGlmICh0aW1lcy50eXBlID09ICdhbGwnKSB7XG5cdFx0XHRcdC8vIHJhbmdlOiBmcm9tIDIgd2Vla3MgYWdvIHVudGlsIG5vd1xuXHRcdFx0XHR2YXIgbWF4ID0gbW9tZW50KCk7XG5cdFx0XHRcdHZhciBtaW4gPSBtYXguY2xvbmUoKS5zdWJ0cmFjdCgyLCAnd2Vla3MnKTtcblx0XHRcdFxuXHRcdFx0fSBlbHNlIGlmICh0aW1lcy50eXBlID09ICdzaW5jZScpIHtcblx0XHRcdFx0dmFyIG1heCA9IG1vbWVudCgpO1xuXHRcdFx0XHR2YXIgbWluID0gbW9tZW50KCkuc3VidHJhY3QodGltZXMuaW5wdXRzLnNpbmNlLnZhbHVlLFxuXHRcdFx0XHRcdCB0aW1lcy5pbnB1dHMuc2luY2UucXVhbnRpZmllcik7XG5cdFx0XHRcdFx0XG5cdFx0XHR9IGVsc2UgaWYgKHRpbWVzLnR5cGUgPT0gJ3JhbmdlJykge1xuXHRcdFx0XHQvLyByYW5nZTogcmFuZ2Ugb2YgdGltZSBmaWx0ZXJzXG5cdFx0XHRcdHZhciBtYXggPSB0aW1lcy5yYW5nZS50bztcblx0XHRcdFx0dmFyIG1pbiA9IHRpbWVzLnJhbmdlLmZyb207XG5cdFx0XHRcblx0XHRcdH0gIGVsc2UgaWYgKHRpbWVzLnR5cGUgPT0gJ3BvaW50Jykge1xuXHRcdFx0XHQvLyByYW5nZTogZnJvbSB0d28gd2Vla3MgYmVmb3JlIHBvaW50IHVudGlsIHBvaW50XG5cdFx0XHRcdGlmICh0aW1lcy5wb2ludCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybiAxLjA7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIG1heCA9IHRpbWVzLnBvaW50O1xuXHRcdFx0XHR2YXIgbWluID0gbWF4LmNsb25lKCkuc3VidHJhY3QoMiwgJ3dlZWtzJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY2FsY3VsYXRlQWdlSW5SYW5nZSh0aW1lLCBtaW4sIG1heCk7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKiBcblx0XHQgKiBDYWxjdWxhdGUgd2hlcmUgbnVtYmVyIGZhbGxzIGluIHJhbmdlXG5cdFx0ICogQHBhcmFtICB7aW50fSB0aW1lIHRpbWVcblx0XHQgKiBAcGFyYW0gIHtpbnR9IG1pbiAgbWluIHRpbWVcblx0XHQgKiBAcGFyYW0gIHtpbnR9IG1heCAgbWF4IHRpbWVcblx0XHQgKiBAcmV0dXJuIHtmbG9hdH0gICAgICAwLTEsIHdoZXJlIHRpbWUgZmFsbHMgaW4gcmFuZ2Vcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBjYWxjdWxhdGVBZ2VJblJhbmdlKHRpbWUsIG1pbiwgbWF4KSB7XG5cdFx0XHRpZiAodGltZS5pc0JlZm9yZShtaW4pKSB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fSBlbHNlIGlmICghdGltZS5pc0JlZm9yZShtYXgpKSB7XG5cdFx0XHRcdHJldHVybiAxLjA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKHRpbWUuZGlmZihtaW4pIC8gbWF4LmRpZmYobWluKSk7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKiBFeHBvcnQgZmlsdGVyZWQgcmVhZGluZ3MsIHF1ZXJ5IHNlcnZlciBmb3IgZmlsZSAqL1xuXHRcdGZ1bmN0aW9uIGV4cG9ydERhdGEoKSB7XG5cdFx0XHR2YXIgcmVhZGluZ0lkcyA9IFtdO1xuXHRcdFx0ZmlsdGVyZWRSZWFkaW5ncy5mb3JFYWNoKGZ1bmN0aW9uKGJ1b3lHcm91cCkge1xuXHRcdFx0XHRidW95R3JvdXAuYnVveUluc3RhbmNlcy5mb3JFYWNoKGZ1bmN0aW9uKGJ1b3lJbnN0YW5jZSkge1xuXHRcdFx0XHRcdGJ1b3lJbnN0YW5jZS5yZWFkaW5ncy5mb3JFYWNoKGZ1bmN0aW9uKHJlYWRpbmcpIHtcblx0XHRcdFx0XHRcdHJlYWRpbmdJZHMucHVzaChyZWFkaW5nLmlkKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHRcdHNlcnZlci5leHBvcnREYXRhKHJlYWRpbmdJZHMpO1xuXHRcdH1cblxuXHRcdC8qKiBcblx0XHQgKiBEZXRlcm1pbmUgY29udGVudCB0byBzZXQgZm9yIG1hcmtlciBwb3B1cFxuXHRcdCAqIEBwYXJhbSAge29iamVjdH0gcmVhZGluZyAgICAgIHJlYWRpbmdcblx0XHQgKiBAcGFyYW0gIHtvYmplY3R9IGJ1b3lJbnN0YW5jZSBidW95IGluc3RhbmNlXG5cdFx0ICogQHJldHVybiB7c3RyaW5nfSAgICAgICAgICAgICAgcG9wdXAgY29udGVudFxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIHBvcHVwQ29udGVudChyZWFkaW5nLCBidW95SW5zdGFuY2UpIHtcblx0XHRcdHZhciBmb3JtYXR0ZWRUaW1lID0gbW9tZW50LnVuaXgocmVhZGluZy50aW1lc3RhbXApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5mb3JtYXQoJ0QgTU1NTSBoOm1tIEEnKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHR2YXIgY29udGVudCA9IFwiPGRpdj5cIiArXG5cdFx0XHRcdFwiPGg1PjxzdHJvbmc+XCIgKyBidW95SW5zdGFuY2UubmFtZSArIFwiPC9zdHJvbmc+PC9oNT5cIiArXG5cdFx0XHRcdFwiPGVtPlwiICsgZm9ybWF0dGVkVGltZSArIFwiPC9lbT48YnI+XCIgK1xuXHRcdFx0XHRcIjx0YWJsZSBjbGFzcz0ncG9wdXAtdGFibGUnPjx0Ym9keT5cIjtcblx0XHRcdFxuXG5cdFx0XHRyZWFkaW5nLnNlbnNvclJlYWRpbmdzLmZvckVhY2goZnVuY3Rpb24oc2Vuc29yUmVhZGluZykge1xuXHRcdFx0XHRjb250ZW50ICs9IFwiPHRyPjx0ZD5cIiArIFxuXHRcdFx0XHRcdHNlbnNvcnNbc2Vuc29yUmVhZGluZy5zZW5zb3JUeXBlSWRdLm5hbWUgK1xuXHRcdFx0XHRcdFwiOiA8L3RkPjx0ZCBjbGFzcz0ncmlnaHQnPlwiICsgc2Vuc29yUmVhZGluZy52YWx1ZSArIFwiIFwiICtcblx0XHRcdFx0XHRzZW5zb3JzW3NlbnNvclJlYWRpbmcuc2Vuc29yVHlwZUlkXS51bml0ICsgXCI8L3RkPjwvdHI+XCI7XG5cdFx0XHR9KTtcdFx0XHRcblx0XHRcdFx0XG5cdFx0XHRjb250ZW50ICs9IFwiPC90Ym9keT48L3RhYmxlPjwvZGl2PlwiO1xuXHRcdFx0XHRcblx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFVwZGF0ZSB0aGUgbWFwIHRvIHNob3cgbWFya2VycyBmb3IgZmlsdGVyZWQgcmVhZGluZ3Ncblx0XHQgKi9cblx0XHRmdW5jdGlvbiB1cGRhdGVNYXAoKSB7XG5cdFx0XHR2YXIgZW5hYmxlZE1hcmtlcnMgPSBbXTtcblx0XHRcdHZhciBpbnNOdW0gPSAwO1xuXG5cdFx0XHQvLyBzaG93IGEgbWFya2VyIGZvciBldmVyeSByZWFkaW5nXG5cdFx0XHRmaWx0ZXJlZFJlYWRpbmdzLmZvckVhY2goZnVuY3Rpb24oYnVveUdyb3VwKSB7XG5cdFx0XHRcdGJ1b3lHcm91cC5idW95SW5zdGFuY2VzLmZvckVhY2goZnVuY3Rpb24oYnVveUluc3RhbmNlKSB7XG5cdFx0XHRcdFx0YnVveUluc3RhbmNlLnJlYWRpbmdzLmZvckVhY2goZnVuY3Rpb24ocmVhZGluZykge1xuXHRcdFx0XHRcdFx0ZW5hYmxlZE1hcmtlcnMucHVzaChyZWFkaW5nLmlkKTtcblx0XHRcdFx0XHRcdG1hcC5zaG93TWFya2VyKHJlYWRpbmcsIGJ1b3lJbnN0YW5jZSxcblx0XHRcdFx0XHRcdFx0aW5zTnVtLCBnZXRSZWxhdGl2ZUFnZShyZWFkaW5nKSxcblx0XHRcdFx0XHRcdFx0cG9wdXBDb250ZW50KHJlYWRpbmcsIGJ1b3lJbnN0YW5jZSkpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGluc051bSsrO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0bWFwLmhpZGVEaXNhYmxlZE1hcmtlcnMoZW5hYmxlZE1hcmtlcnMpO1xuXHRcdH1cblxuXG5cdFx0ZnVuY3Rpb24gc2V0dXBSZWFkaW5ncygpIHtcblxuXHRcdFx0dmFyIGNoYXJ0QXJyYXkgPSBbXTtcblx0XHRcdFxuXHRcdFx0dmFyIHJlYWRpbmdzTGlzdCA9IGZpbHRlcmVkUmVhZGluZ3M7XG5cblx0XHRcdGZvciAodmFyIHAgPSAwOyBwIDwgcmVhZGluZ3NMaXN0Lmxlbmd0aDsgcCsrKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcmVhZGluZ3NMaXN0W3BdLmJ1b3lJbnN0YW5jZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHR2YXIgY2hhcnREYXRhID0ge307XG5cblx0XHRcdFx0XHRjaGFydERhdGEubmFtZSA9IHJlYWRpbmdzTGlzdFtwXS5idW95SW5zdGFuY2VzW2ldLm5hbWU7XG5cdFx0XHRcdFx0dmFyIGNoYXJ0UmVhZGluZ3MgPSBbXTtcblx0XHRcdFx0XHRmb3IodmFyIHEgPSAwOyBxIDwgcmVhZGluZ3NMaXN0W3BdLmJ1b3lJbnN0YW5jZXNbaV0ucmVhZGluZ3MubGVuZ3RoOyBxICsrKXtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgeiA9IDA7IHogPCByZWFkaW5nc0xpc3RbcF0uYnVveUluc3RhbmNlc1tpXS5yZWFkaW5nc1txXS5zZW5zb3JSZWFkaW5ncy5sZW5ndGg7IHogKyspe1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0aWYgKHJlYWRpbmdzTGlzdFtwXS5idW95SW5zdGFuY2VzW2ldLnJlYWRpbmdzW3FdLnNlbnNvclJlYWRpbmdzW3pdLnNlbnNvclR5cGVJZCA9PSAxKXtcblx0XHRcdFx0XHRcdFx0XHRcblxuXG5cdFx0XHRcdFx0XHRcdFx0dmFyIHRpbWVTdGFtcCA9IHJlYWRpbmdzTGlzdFtwXS5idW95SW5zdGFuY2VzW2ldLnJlYWRpbmdzW3FdLnRpbWVzdGFtcDtcblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHR2YXIgbmljZVRpbWUgPSBtb21lbnQudW5peCh0aW1lU3RhbXApLmZvcm1hdChcIkQvTSBoOm1tYVwiKVxuXHRcdFx0XHRcdFx0XHRcdHZhciB0dXJiaWRpdHkgPSByZWFkaW5nc0xpc3RbcF0uYnVveUluc3RhbmNlc1tpXS5yZWFkaW5nc1txXS5zZW5zb3JSZWFkaW5nc1t6XS52YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHQvL3NldHMgYSBtYXggdmFsdWUgb24gdHVyYmlkaXR5IGR1ZSB0byBjaGFydCBsaW1pdGF0aW9ucyBcblx0XHRcdFx0XHRcdFx0XHRpZiAodHVyYmlkaXR5ID4gMjAwKXtcblx0XHRcdFx0XHRcdFx0XHRcdHR1cmJpZGl0eSA9IDIwMDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Y2hhcnRSZWFkaW5ncy5wdXNoKHt0aW1lU3RhbXA6IG5pY2VUaW1lLHR1cmJpZGl0eTogdHVyYmlkaXR5fSk7XG5cblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRjaGFydERhdGEucmVhZGluZ3MgPSBjaGFydFJlYWRpbmdzO1xuXG5cdFx0XHRcdGNoYXJ0QXJyYXkucHVzaChjaGFydERhdGEpO1xuXG5cdFx0XHRcdH1cblx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0Y29uc29sZS5sb2coY2hhcnRBcnJheSk7XG5cdFx0XHRyZXR1cm4gY2hhcnRBcnJheTtcblx0XHRcdFxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGRpc3BsYXlDaGFydEluc3RhbmNlKGluc3RhbmNlTmFtZSl7XG5cdFx0XHRcblx0XHRcdHZhciBpbnN0YW5jZVJlYWRpbmdzID0gc2V0dXBSZWFkaW5ncygpO1xuXG5cdFx0XHR2YXIgdGVtcERhdGEgPSBbXTtcblx0XHRcdHZhciB0ZW1wTGFiZWxzID0gW107XG5cdFx0XHR2YXIgdGVtcE5hbWU7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGluc3RhbmNlUmVhZGluZ3MubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHRpZiAoaW5zdGFuY2VSZWFkaW5nc1tpXS5uYW1lID09IGluc3RhbmNlTmFtZSl7XG5cblx0XHRcdFx0XHR0ZW1wTmFtZSA9IFtpbnN0YW5jZVJlYWRpbmdzW2ldLm5hbWUgXTtcblx0XHRcdFx0XHQvLyB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0XHRcdFx0Zm9yKHZhciBxID0gMDsgcSA8IGluc3RhbmNlUmVhZGluZ3NbaV0ucmVhZGluZ3MubGVuZ3RoOyBxKyspe1xuXHRcdFx0XHRcdFxuXG5cblx0XHRcdFx0XHRcdC8vIGRhdGUgPSBpbnN0YW5jZVJlYWRpbmdzW2ldLnJlYWRpbmdzW3FdLnRpbWVTdGFtcFxuXHRcdFx0XHRcdFx0dGVtcExhYmVscy5wdXNoKGluc3RhbmNlUmVhZGluZ3NbaV0ucmVhZGluZ3NbcV0udGltZVN0YW1wKTtcblx0XHRcdFx0XHRcdHRlbXBEYXRhLnB1c2goaW5zdGFuY2VSZWFkaW5nc1tpXS5yZWFkaW5nc1txXS50dXJiaWRpdHkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cdFx0XHRpZiAodGVtcExhYmVscy5sZW5ndGggPiAxMDApe1xuXHRcdFx0XHR0ZW1wTGFiZWxzID0gdGVtcExhYmVscy5zbGljZSgwLDEwMSk7XG5cdFx0XHRcdHZhciBkaXZpc2lvbiA9IE1hdGguZmxvb3IodGVtcExhYmVscy5sZW5ndGgvMTApO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhkaXZpc2lvbik7XG5cdFx0XHRcdGNoYXJ0LmxhYmVscy51bnNoaWZ0KFwiXCIpO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMTsgaSA8IHRlbXBMYWJlbHMubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHRcdGlmIChpICUgZGl2aXNpb24gIT0gMCl7XG5cdFx0XHRcdFx0XHR0ZW1wTGFiZWxzW2ldID0gXCJcIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGNvbnNvbGUubG9nKHRlbXBMYWJlbHMpO1xuXG5cdFx0XHRcdH1cblx0XHRcdH0gXG5cdFx0XHRjaGFydC5zZXJpZXMgPSB0ZW1wTmFtZTtcblx0XHRcdGNoYXJ0LmxhYmVscyA9IHRlbXBMYWJlbHM7XG5cdFx0XHRjaGFydC5sYWJlbHMudW5zaGlmdChcIlwiKTtcblx0XHRcdGNoYXJ0LmRhdGEgPSBbdGVtcERhdGFdO1xuXG5cdFx0XHRjaGFydC5kYXRhWzBdLnVuc2hpZnQodGVtcERhdGFbMF0pO1xuXG5cdFx0XHRcblxuXHRcdH1cblx0fVxufSkoKTsiLCIvKipcbiAqIEZsb29kIE1vbml0b3JpbmcgU3lzdGVtXG4gKiBWZXJzaW9uIDAuMC4xIChEdXl1bmcpXG4gKlxuICogQ29weXJpZ2h0IChDKSBUZWFtIE5lcHR1bmVcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogQGF1dGhvciAgICAgQW5kcmV3IER5ZXIgPGFuZHJld0BkeWVyZ3JvdXAuY29tLmF1PlxuICogQHZlcnNpb24gICAgMC4wLjFcbiAqIEBjb3B5cmlnaHQgIFRlYW0gTmVwdHVuZSAoMjAxNSlcbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hY2xlbC9kZWNvMzgwMVxuICovXG4oZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAuZGFzaGJvYXJkJylcblx0XHQuZmFjdG9yeSgnbWFwJywgbWFwKTtcblx0XHRcblx0LyoqXG5cdFx0KiBAbmdkb2Mgc2VydmljZVxuXHRcdCogQG5hbWUgYXBwLmRhc2hib2FyZC5tYXBcblx0XHQqIEByZXF1aXJlcyBnb29nbGVcblx0KiovXG5cdGZ1bmN0aW9uIG1hcCgkcm9vdFNjb3BlLCAkbG9nLCBnb29nbGUpIHtcblx0XHRcdFxuXHRcdC8qKiBJbnRlcm5hbCB2YXJpYWJsZXMgKi9cblx0XHR2YXIgbWFwO1xuXHRcdHZhciBtYXBPcHRpb25zID0ge1xuXHRcdFx0em9vbTogMTEsXG5cdFx0XHRjZW50ZXI6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoLTI3LjU3MzcwNCwgMTUzLjA1NTgxOCksXG5cdFx0XHRtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQXG5cdFx0fTtcblx0XHR2YXIgbWFya2VycyA9IHt9O1xuXHRcdHZhciBkaXNhYmxlZE1hcmtlcnMgPSBbXTtcblx0XHR2YXIgaW5mb0JveDtcblx0XHR2YXIgaW5mb0JveE9wZW4gPSBmYWxzZTtcblx0XHR2YXIgY3VycmVudE1hcmtlcklkID0gLTE7XG5cdFx0dmFyIG1hcENlbnRlcjtcblx0XHRcblx0XHQvKiogVGhlIHNlcnZpY2UgbWV0aG9kcyB0byBleHBvc2UgKi9cblx0XHRyZXR1cm4ge1xuXHRcdFx0aW5pdGlhbGlzZU1hcDogaW5pdGlhbGlzZU1hcCxcblx0XHRcdGdldENlbnRlcjogZ2V0Q2VudGVyLFxuXHRcdFx0c2V0Q2VudGVyOiBzZXRDZW50ZXIsXG5cdFx0XHRzaG93TWFya2VyOiBzaG93TWFya2VyLFxuXHRcdFx0aGlkZURpc2FibGVkTWFya2VyczogaGlkZURpc2FibGVkTWFya2Vyc1xuXHRcdH07XG5cblx0XHQvKiogU2V0dXAgZ29vZ2xlIG1hcCwgc2V0IHN0eWxlcyBhbmQgbGlzdGVuZXJzICovXG5cdFx0ZnVuY3Rpb24gaW5pdGlhbGlzZU1hcCgpIHtcblx0XHRcdG1hcE9wdGlvbnMuc3R5bGVzID0gc3R5bGVzQmx1ZVdhdGVyKCk7XG5cdFx0XHRcblx0XHRcdG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXAtY2FudmFzXCIpLCBtYXBPcHRpb25zKTsgXG5cdFx0XHRcblx0XHRcdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcCwgJ3pvb21fY2hhbmdlZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRtYXBPcHRpb25zLnpvb20gPSBtYXAuZ2V0Wm9vbSgpO1xuXHRcdFx0fSk7XG5cdFx0XHRcblx0XHRcdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcCwgJ2NlbnRlcl9jaGFuZ2VkJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdG1hcE9wdGlvbnMuY2VudGVyID0gbWFwLmdldENlbnRlcigpO1xuXHRcdFx0fSk7XG5cdFx0XHRcblx0XHRcdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcCwgJ21hcHR5cGVpZF9jaGFuZ2VkJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdG1hcE9wdGlvbnMubWFwVHlwZUlkID0gbWFwLmdldE1hcFR5cGVJZCgpO1xuXHRcdFx0fSk7XG5cdFx0XHRcblx0XHQgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFwLCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHQgICAgICAgIGlmIChpbmZvQm94T3Blbikge1xuXHRcdFx0XHRcdGNsb3NlSW5mb0JveCgpO1xuXHRcdFx0XHR9XG5cdFx0ICAgIH0pO1xuXG5cdFx0ICAgIC8vIHJlc2V0IG1hcmtlcnNcblx0XHQgICAgbWFya2VycyA9IHt9O1xuXHRcdFx0ZGlzYWJsZWRNYXJrZXJzID0gW107XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogR2V0IHRoZSBjdXJyZW50IGNlbnRlciBvZiB0aGUgbWFwXG5cdFx0ICogQHJldHVybiB7b2JqZWN0fSBjZW50ZXIgb2YgdGhlIG1hcFxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGdldENlbnRlcigpIHtcblx0XHRcdHJldHVybiBtYXAuZ2V0Q2VudGVyKCk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2V0IHRoZSBjZW50ZXIgb2YgdGhlIG1hcFxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBjZW50ZXIgbmV3IGNlbnRlclxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIHNldENlbnRlcihjZW50ZXIpIHtcblx0XHRcdGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIobWFwLCBcInJlc2l6ZVwiKTtcblx0XHRcdG1hcC5zZXRDZW50ZXIoY2VudGVyKTtcblx0XHR9XG5cblxuXHRcdC8qKlxuXHRcdCAqIFNob3cgYSBtYXJrZXIgb24gdGhlIG1hcFxuXHRcdCAqIEBwYXJhbSAge29iamVjdH0gcmVhZGluZyAgICAgIHJlYWRpbmcgZm9yIHRoZSBtYXJrZXJcblx0XHQgKiBAcGFyYW0gIHtvYmplY3R9IGJ1b3lJbnN0YW5jZSBidW95SW5zdGFuY2UgdGhlIHJlYWRpbmcgaXMgZnJvbVxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvdXIgaGV4IGNvbG91ciBvZiB0aGUgbWFya2VyXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gc2hvd01hcmtlcihyZWFkaW5nLCBidW95SW5zdGFuY2UsIGNvbG91ckluZGV4LCBhZ2UsIGNvbnRlbnQpIHtcblx0XHRcdHZhciBpZCA9IHJlYWRpbmcuaWQ7XG5cdFx0XHRpZiAoIW1hcmtlcnMuaGFzT3duUHJvcGVydHkoaWQpKSB7XG5cdFx0XHRcdC8vIGNyZWF0ZSBuZXcgbWFya2VyIGlmIGl0IGRvZXNuJ3QgZXhpc3Rcblx0XHRcdFx0YWRkTWFya2VyKHJlYWRpbmcsIGJ1b3lJbnN0YW5jZSwgY29udGVudCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoZGlzYWJsZWRNYXJrZXJzLmluZGV4T2YoaWQpICE9IC0xKSB7XG5cdFx0XHRcdFx0Ly8gc2hvdyAocmUtZW5hYmxlKSBtYXJrZXIgaWYgaXQgYWxyZWFkeSBleGlzdHNcblx0XHRcdFx0XHRlbmFibGVNYXJrZXIoaWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtYXJrZXJzW2lkXS5zZXRJY29uKG1hcmtlckNvbG91cihjb2xvclBhbGV0dGUoY29sb3VySW5kZXgpKSk7XG5cdFx0XHRtYXJrZXJzW2lkXS5zZXRPcGFjaXR5KGNhbGN1bGF0ZU9wYWNpdHkoYWdlKSk7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIERpc2FibGUgb2xkIG1hcmtlcnMgd2hpY2ggc2hvdWxkbid0IGJlIGRpc3BsYXllZFxuXHRcdCAqIEBwYXJhbSAge2ludFtdfSBlbmFibGVkTWFya2VycyBsaXN0IG9mIG1hcmtlciBpZHMgd2hpY2ggYXJlIGVuYWJsZWRcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBoaWRlRGlzYWJsZWRNYXJrZXJzKGVuYWJsZWRNYXJrZXJzKSB7XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gbWFya2Vycykge1xuXHRcdFx0XHRpZiAobWFya2Vycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdFx0a2V5ID0gcGFyc2VJbnQoa2V5LCAxMCk7XG5cdFx0XHRcdFx0aWYgKGVuYWJsZWRNYXJrZXJzLmluZGV4T2Yoa2V5KSA9PSAtMSkge1xuXHRcdFx0XHRcdFx0ZGlzYWJsZU1hcmtlcihrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKiBcblx0XHQgKiBBZGQgbmV3IG1hcmtlciB0byBtYXBcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gcmVhZGluZyAgICAgIHJlYWRpbmcgZm9yIG1hcmtlclxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBidW95SW5zdGFuY2UgYnVveUluc3RhbmNlIHRoZSByZWFkaW5nIGlzIGZyb21cblx0XHQgKi9cblx0XHRmdW5jdGlvbiBhZGRNYXJrZXIocmVhZGluZywgYnVveUluc3RhbmNlLCBjb250ZW50KSB7XG5cdFx0XHR2YXIgbGF0ID0gcmFuZG9taXNlUG9zKHJlYWRpbmcubGF0aXR1ZGUpO1xuXHRcdFx0dmFyIGxvbmcgPSByYW5kb21pc2VQb3MocmVhZGluZy5sb25naXR1ZGUpO1xuXG5cdFx0XHR2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG5cdFx0XHRcdHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxhdCwgbG9uZyksXG5cdFx0XHRcdG1hcDogbWFwLFxuXHRcdFx0XHQvLyB0aXRsZTogJ0J1b3kgJyArIHJlYWRpbmcuYnVveSArICc6IHJlYWRpbmcgJyArIHJlYWRpbmcuaWQsXG5cdFx0XHR9KTtcblx0XHRcdFxuXHRcdFx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyLCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0b3BlbkluZm9Cb3gocmVhZGluZywgYnVveUluc3RhbmNlLCBtYXJrZXIsIGNvbnRlbnQpO1xuXHRcdFx0fSk7XG5cdFx0XHRcblx0XHRcdG1hcmtlcnNbcmVhZGluZy5pZF0gPSBtYXJrZXI7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcmFuZG9taXNlUG9zKHBvcykge1xuXHRcdFx0dmFyIG1hZ25pdHVkZSA9IDEwMDAwMDtcblx0XHRcdGlmIChNYXRoLnJhbmRvbSgpIDwgMC41KSB7XG5cdFx0XHRcdHBvcyArPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDApIC8gbWFnbml0dWRlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cG9zIC09IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMCkgLyBtYWduaXR1ZGU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcG9zO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFJlLWVuYWJsZSAoc2hvdyBvbiBtYXApIGRpc2FibGVkIG1hcmtlclxuXHRcdCAqIEBwYXJhbSAge2ludH0gaWQgaWQgb2YgbWFya2VyIHRvIGVuYWJsZVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGVuYWJsZU1hcmtlcihpZCkge1xuXHRcdFx0bWFya2Vyc1tpZF0uc2V0TWFwKG1hcCk7XG5cdFx0XHRkaXNhYmxlZE1hcmtlcnMuc3BsaWNlKGRpc2FibGVkTWFya2Vycy5pbmRleE9mKGlkKSwgMSk7XG5cdFx0fVxuXHRcdFxuXHRcdC8qKiBcblx0XHQgKiBEaXNhYmxlIG1hcmtlciAoaGlkZSBmcm9tIG1hcCkgd2l0aG91dCBkZWxldGluZyBpdFxuXHRcdCAqIEBwYXJhbSAge2ludH0gaWQgaWQgb2YgbWFya2VyIHRvIGRpc2FibGVcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBkaXNhYmxlTWFya2VyKGlkKSB7XG5cdFx0XHRtYXJrZXJzW2lkXS5zZXRNYXAobnVsbCk7XG5cdFx0XHRkaXNhYmxlZE1hcmtlcnMucHVzaChpZCk7XG5cdFx0XHRcblx0XHRcdC8vIGNsb3NlIGluZm9ib3ggb2YgZGlzYWJsZWQgbWFya2VyXG5cdFx0XHRpZiAoaW5mb0JveE9wZW4pIHtcblx0XHRcdFx0aWYgKGRpc2FibGVkTWFya2Vycy5pbmRleE9mKGN1cnJlbnRNYXJrZXJJZCkgIT0gLTEpIHtcblx0XHRcdFx0XHRjbG9zZUluZm9Cb3goKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKiBcblx0XHQgKiBPcGVuIHRoZSBpbmZvYm94XG5cdFx0ICogQHBhcmFtICB7b2JqZWN0fSByZWFkaW5nICAgICAgcmVhZGluZ1xuXHRcdCAqIEBwYXJhbSAge29iamVjdH0gYnVveUluc3RhbmNlIGJ1b3lJbnN0YW5jZSB0aGUgcmVhZGluZyBpcyBmb3Jcblx0XHQgKiBAcGFyYW0gIHtvYmplY3R9IG1hcmtlciAgICAgICBtYXJrZXIgb2JqZWN0XG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gb3BlbkluZm9Cb3gocmVhZGluZywgYnVveUluc3RhbmNlLCBtYXJrZXIsIGNvbnRlbnQpIHtcblx0XHRcdGlmIChpbmZvQm94T3Blbikge1xuXHRcdFx0XHRjbG9zZUluZm9Cb3goKTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmIChyZWFkaW5nLmlkID09IGN1cnJlbnRNYXJrZXJJZCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyB1cGRhdGUgY2hhcnRzXG5cdFx0XHQkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2Rpc3BsYXlDaGFydEluc3RhbmNlJywgYnVveUluc3RhbmNlKTtcblx0XHRcdFxuXHRcdFx0aW5mb0JveCA9IG5ldyBJbmZvQm94KHtcblx0XHRcdFx0Y29udGVudDogY29udGVudCxcblx0XHRcdFx0cGl4ZWxPZmZzZXQ6IG5ldyBnb29nbGUubWFwcy5TaXplKC05MCwgMCksXG5cdCAgICAgICAgICAgIHpJbmRleDogbnVsbCxcblx0ICAgICAgICAgICAgY2xvc2VCb3hNYXJnaW46IFwiLTZweCAtNnB4IDJweCAycHhcIlxuXHRcdFx0fSk7XG5cdFx0XHRcblx0XHRcdGluZm9Cb3gub3BlbihtYXAsIG1hcmtlcik7XHRcdFx0XG5cdFx0XHRpbmZvQm94T3BlbiA9IHRydWU7XG5cdFx0XHRjdXJyZW50TWFya2VySWQgPSByZWFkaW5nLmlkO1xuXHRcdH1cblxuXHRcdC8qKiBDbG9zZSB0aGUgaW5mb2JveCAobWFwIG1hcmtlciBwb3B1cCkgKi9cblx0XHRmdW5jdGlvbiBjbG9zZUluZm9Cb3goKSB7XG5cdFx0XHRpbmZvQm94LmNsb3NlKCk7XG5cdFx0XHRpbmZvQm94T3BlbiA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFJldHVybnMgYSBtYXJrZXIgaWNvbiB3aXRoIGEgc3BlY2lmaWVkIGNvbG91clxuXHRcdCAqIEBwYXJhbSAge3N0cmluZ30gY29sb3VyIGNvbG91ciBpbiBoZXggZm9ybWF0XG5cdFx0ICogQHJldHVybiB7b2JqZWN0fSAgICAgICAgbWFya2VyIGljb24gdXNhYmxlIGluIGdvb2dsZSBtYXBzIEFQSVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIG1hcmtlckNvbG91cihjb2xvdXIpIHtcblx0XHRcdC8vIHJldHVybiB7XG5cdFx0XHQvLyBcdHBhdGg6ICdNIDAsMCBDIC0yLC0yMCAtMTAsLTIyIC0xMCwtMzAgQSAxMCwxMCAwIDEsMSAxMCwtMzAgQyAxMCwtMjIgMiwtMjAgMCwwIHogTSAtMiwtMzAgYSAyLDIgMCAxLDEgNCwwIDIsMiAwIDEsMSAtNCwwJyxcblx0XHQgLy8gICAgICAgIGZpbGxDb2xvcjogY29sb3VyLFxuXHRcdCAvLyAgICAgICAgZmlsbE9wYWNpdHk6IDEsXG5cdFx0IC8vICAgICAgICBzdHJva2VDb2xvcjogJyMwMDAnLFxuXHRcdCAvLyAgICAgICAgc3Ryb2tlV2VpZ2h0OiAxLFxuXHRcdCAvLyAgICAgICAgc2NhbGU6IDFcblx0XHRcdC8vIH07XG5cdFx0XHRcblx0XHRcdHJldHVybiAobmV3IGdvb2dsZS5tYXBzLk1hcmtlckltYWdlKFwiaHR0cDovL2NoYXJ0LmFwaXMuZ29vZ2xlLmNvbS9jaGFydD9jaHN0PWRfbWFwX3Bpbl9sZXR0ZXImY2hsZD0lRTIlODAlQTJ8XCIgKyBjb2xvdXIuc3Vic3RyKDEpLFxuXHRcdCAgICAgICAgbmV3IGdvb2dsZS5tYXBzLlNpemUoMjEsIDM0KSxcblx0XHQgICAgICAgIG5ldyBnb29nbGUubWFwcy5Qb2ludCgwLCAwKSxcblx0XHQgICAgICAgIG5ldyBnb29nbGUubWFwcy5Qb2ludCgxMCwgMzQpXG5cdCAgICAgICAgKSk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogSGFyZGNvZGVkIGNvbG91ciBwYWxldHRlXG5cdFx0ICogQHBhcmFtICB7aW50fSBuIGluZGV4IG9mIGNvbG91ciBpbiBwYWxldHRlIHRvIGdldCAod3JhcHMgYXJvdW5kKVxuXHRcdCAqIEByZXR1cm4ge3N0cmluZ30gICBoZXggY29sb3VyXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gY29sb3JQYWxldHRlKG4pIHtcblx0XHRcdC8vIHBhbGV0dGUgZ2VuZXJhdGVkIGZyb20gaHR0cDovL3Rvb2xzLm1lZGlhbGFiLnNjaWVuY2VzLXBvLmZyL2l3YW50aHVlL1xuXHRcdFx0dmFyIHBhbGV0dGUgPSBbXG5cdFx0XHRcdFwiIzg0Q0JEMVwiLFxuXHRcdFx0XHRcIiNDQzRCMzBcIixcblx0XHRcdFx0XCIjQkY1NEQwXCIsXG5cdFx0XHRcdFwiIzcwRDg0Q1wiLFxuXHRcdFx0XHRcIiMzNjM2MkJcIixcblx0XHRcdFx0XCIjQ0Q0MDc1XCIsXG5cdFx0XHRcdFwiIzU1MzI2NFwiLFxuXHRcdFx0XHRcIiNDQkNDOTJcIixcblx0XHRcdFx0XCIjRDI5ODNDXCIsXG5cdFx0XHRcdFwiIzZCN0FEMFwiLFxuXHRcdFx0XHRcIiNDNzgzNzhcIixcblx0XHRcdFx0XCIjNUE4QTM3XCIsXG5cdFx0XHRcdFwiI0NDRDQ0NlwiLFxuXHRcdFx0XHRcIiM3MkRBOUVcIixcblx0XHRcdFx0XCIjNTk4MzY5XCIsXG5cdFx0XHRcdFwiIzZEMjkyRlwiLFxuXHRcdFx0XHRcIiNDQUIzQ0NcIixcblx0XHRcdFx0XCIjNzg1RjJBXCIsXG5cdFx0XHRcdFwiIzU5NkM4N1wiLFxuXHRcdFx0XHRcIiNDNDcxQjRcIlxuXHRcdFx0XTtcblx0XHRcdHJldHVybiBwYWxldHRlW24gJSBwYWxldHRlLmxlbmd0aF07XHRcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBHZW5lcmF0ZXMgYSByYW5kb20gaGV4IGNvbG91ciAobm90IGN1cnJlbnRseSB1c2VkKVxuXHRcdCAqIEByZXR1cm4ge3N0cmluZ30gaGV4IGNvbG91clxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIHJhbmRvbUNvbG91cigpIHtcblx0XHRcdHJldHVybiBcIiNcIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIsIDgpO1xuXHRcdH1cblxuXHRcdC8qKiBcblx0XHQgKiBHZXQgdGhlIHZhbHVlIHRvIHNldCBmb3IgbWFya2VyIG9wYWNpdHlcblx0XHQgKiBAcGFyYW0gIHtpbnR9IHJlbGF0aXZlIGFnZSB0byBiYXNlIG9wYWNpdHkgb25cblx0XHQgKiBAcmV0dXJuIHtmbG9hdH0gICAgICAgICBvcGFjaXR5IHZhbHVlIGJldHdlZW4gMCBhbmQgMVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGNhbGN1bGF0ZU9wYWNpdHkoYWdlKSB7XG5cdFx0XHR2YXIgbWluVmlzaWJsZU9wYWNpdHkgPSAwLjM7XG5cdFx0XHRyZXR1cm4gYWdlICogKDEgLSBtaW5WaXNpYmxlT3BhY2l0eSkgKyBtaW5WaXNpYmxlT3BhY2l0eTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBNYXAgc3R5bGVzIHRvIGRpc2FibGUgcG9pbnRzIG9mIGludGVyZXN0IChub3QgY3VycmVudGx5IHVzZWQpXG5cdFx0ICogQHJldHVybiB7b2JqZWN0fSBtYXAgc3R5bGVzIHVzYWJsZSBieSBnb29nbGUgbWFwcyBhcGlcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBzdHlsZXNOb1BvaSgpIHtcblx0XHRcdHJldHVybiBbXG5cdFx0XHQgICAge1xuXHRcdFx0ICAgICAgICBmZWF0dXJlVHlwZTogXCJwb2lcIixcblx0XHRcdCAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzXCIsXG5cdFx0XHQgICAgICAgIHN0eWxlcnM6IFtcblx0XHRcdCAgICAgICAgICAgICAgeyB2aXNpYmlsaXR5OiBcIm9mZlwiIH1cblx0XHRcdCAgICAgICAgXVxuXHRcdFx0ICAgIH0sXG5cdFx0XHRcdHtcblx0XHRcdCAgICAgICAgZmVhdHVyZVR5cGU6IFwidHJhbnNpdC5zdGF0aW9uXCIsXG5cdFx0XHQgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVsc1wiLFxuXHRcdFx0ICAgICAgICBzdHlsZXJzOiBbXG5cdFx0XHQgICAgICAgICAgICAgIHsgdmlzaWJpbGl0eTogXCJvZmZcIiB9XG5cdFx0XHQgICAgICAgIF1cblx0XHRcdCAgICB9XG5cdFx0XHRdO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIE1hcCBzdHlsZSBibHVlIHdhdGVyIHN0eWxlXG5cdFx0ICogZnJvbSBodHRwczovL3NuYXp6eW1hcHMuY29tL3N0eWxlLzI1L2JsdWUtd2F0ZXJcblx0XHQgKiBAcmV0dXJuIHtvYmplY3R9IG1hcCBzdHlsZXMgdXNhYmxlIGJ5IGdvb2dsZSBtYXBzIGFwaVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIHN0eWxlc0JsdWVXYXRlcigpIHtcblx0XHRcdHJldHVybiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcblx0XHRcdFx0XHRcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuXHRcdFx0XHRcdFwic3R5bGVyc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiY29sb3JcIjogXCIjNDQ0NDQ0XCJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlXCIsXG5cdFx0XHRcdFx0XCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuXHRcdFx0XHRcdFwic3R5bGVyc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiY29sb3JcIjogXCIjZjJmMmYyXCJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXG5cdFx0XHRcdFx0XCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuXHRcdFx0XHRcdFwic3R5bGVyc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcblx0XHRcdFx0XHRcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG5cdFx0XHRcdFx0XCJzdHlsZXJzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJzYXR1cmF0aW9uXCI6IC0xMDBcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibGlnaHRuZXNzXCI6IDQ1XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuXHRcdFx0XHRcdFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcblx0XHRcdFx0XHRcInN0eWxlcnNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5hcnRlcmlhbFwiLFxuXHRcdFx0XHRcdFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMuaWNvblwiLFxuXHRcdFx0XHRcdFwic3R5bGVyc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXRcIixcblx0XHRcdFx0XHRcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG5cdFx0XHRcdFx0XCJzdHlsZXJzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcblx0XHRcdFx0XHRcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG5cdFx0XHRcdFx0XCJzdHlsZXJzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJjb2xvclwiOiBcIiMwQjVCOTFcIlxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJ2aXNpYmlsaXR5XCI6IFwib25cIlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0XTtcblx0XHR9XG5cdH1cbn0pKCk7IiwiLyoqXG4gKiBGbG9vZCBNb25pdG9yaW5nIFN5c3RlbVxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxuICpcbiAqIENvcHlyaWdodCAoQykgVGVhbSBOZXB0dW5lXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIEBhdXRob3IgICAgIEFuZHJldyBEeWVyIDxhbmRyZXdAZHllcmdyb3VwLmNvbS5hdT5cbiAqIEB2ZXJzaW9uICAgIDAuMC4xXG4gKiBAY29weXJpZ2h0ICBUZWFtIE5lcHR1bmUgKDIwMTUpXG4gKiBAbGluayAgICAgICBodHRwczovL2dpdGh1Yi5jb20vYWNsZWwvZGVjbzM4MDFcbiAqL1xuKGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdFxuXHQvKiogU2V0IHRpbWVwaWNrZXIgYW5kIGRhdGVwaWNrZXIgZGVmYXVsdHMgKi9cblx0YW5ndWxhci5tb2R1bGUoJ2FwcC5ndWknKVxuXHRcdC5jb25maWcoZnVuY3Rpb24oJGRhdGVwaWNrZXJQcm92aWRlciwgJHRpbWVwaWNrZXJQcm92aWRlcixcblx0XHRcdFx0XHRcdCRodHRwUHJvdmlkZXIsICRhbGVydFByb3ZpZGVyKSB7XG5cdFx0XG5cdFx0XHQvLyBpbnRlcmNlcHQgYWxsIHJlcXVlc3RzIHRvIGNoZWNrIGZvciB0b2tlblx0XG5cdFx0XHQkaHR0cFByb3ZpZGVyLmludGVyY2VwdG9ycy5wdXNoKCdhdXRoSW50ZXJjZXB0b3InKTtcblx0XHRcdFxuXHRcdFx0Ly8gZGVmYXVsdCBzZXR0aW5ncyBmb3IgZGF0ZXBpY2tlclxuXHRcdFx0YW5ndWxhci5leHRlbmQoJGRhdGVwaWNrZXJQcm92aWRlci5kZWZhdWx0cywge1xuXHRcdFx0XHRhdXRvY2xvc2U6IHRydWUsXG5cdFx0XHRcdGRhdGVGb3JtYXQ6ICdkZC9NTS95eScsXG5cdFx0XHRcdG1vZGVsRGF0ZUZvcm1hdDogJ2RkL01NL3l5Jyxcblx0XHRcdFx0ZGF0ZVR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRzdGFydFdlZWs6IDFcblx0XHRcdH0pO1xuXHRcdFx0XG5cdFx0XHQvLyBkZWZhdWx0IHNldHRpbmdzIGZvciB0aW1lcGlja2VyXG5cdFx0XHRhbmd1bGFyLmV4dGVuZCgkdGltZXBpY2tlclByb3ZpZGVyLmRlZmF1bHRzLCB7XG5cdFx0XHRcdGF1dG9jbG9zZTogZmFsc2UsXG5cdFx0XHRcdHRpbWVGb3JtYXQ6ICdoOm1tIGEnLFxuXHRcdFx0XHRtb2RlbFRpbWVGb3JtYXQ6ICdoOm1tIGEnLFxuXHRcdFx0XHR0aW1lVHlwZTogJ3N0cmluZydcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBkZWZhdWx0IHNldHRpbmdzIGZvciBhbGVydHNcblx0XHRcdGFuZ3VsYXIuZXh0ZW5kKCRhbGVydFByb3ZpZGVyLmRlZmF1bHRzLCB7XG5cdFx0XHRcdHBsYWNlbWVudDogJ2FsZXJ0LXBsYWNlbWVudCcsXG5cdFx0XHRcdGR1cmF0aW9uOiAzLFxuXHRcdFx0XHRjb250YWluZXI6ICcjcGFnZScsXG5cdFx0XHRcdHNob3c6IHRydWVcblx0XHRcdH0pO1xuXHRcdH0pO1xufSkoKTsiLCIvKipcbiAqIEZsb29kIE1vbml0b3JpbmcgU3lzdGVtXG4gKiBWZXJzaW9uIDAuMC4xIChEdXl1bmcpXG4gKlxuICogQ29weXJpZ2h0IChDKSBUZWFtIE5lcHR1bmVcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogQGF1dGhvciAgICAgQW5kcmV3IER5ZXIgPGFuZHJld0BkeWVyZ3JvdXAuY29tLmF1PlxuICogQHZlcnNpb24gICAgMC4wLjFcbiAqIEBjb3B5cmlnaHQgIFRlYW0gTmVwdHVuZSAoMjAxNSlcbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hY2xlbC9kZWNvMzgwMVxuICovXG4oZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAuZ3VpJylcblx0XHQuZmFjdG9yeSgnZ3VpJywgZ3VpKTtcblx0XG4gICAgLyoqXG4gICAgICAgICogQG5nZG9jIHNlcnZpY2VcbiAgICAgICAgKiBAbmFtZSBhcHAuZ3VpLmd1aVxuICAgICAgICAqIEByZXF1aXJlcyAkYWxlcnRcbiAgICAgICAgKiBAcmVxdWlyZXMgJG1vZGFsXG4gICAgICAgICogQHJlcXVpcmVzICRsb2dcbiAgICAqKi9cblx0ZnVuY3Rpb24gZ3VpKCRhbGVydCwgJG1vZGFsLCAkbG9nKSB7XG5cdFx0XG5cdFx0LyoqIFRoZSBzZXJ2aWNlIG1ldGhvZHMgdG8gZXhwb3NlICovXG5cdFx0cmV0dXJuIHtcblx0XHRcdGFsZXJ0U3VjY2VzczogYWxlcnRTdWNjZXNzLFxuICAgICAgICAgICAgYWxlcnRFcnJvcjogYWxlcnRFcnJvcixcbiAgICAgICAgICAgIGFsZXJ0QmFkUmVzcG9uc2U6IGFsZXJ0QmFkUmVzcG9uc2UsXG4gICAgICAgICAgICBjb25maXJtRGVsZXRlOiBjb25maXJtRGVsZXRlXG5cdFx0fTtcblx0XHRcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3dzIGEgc3VjY2VzcyBhbGVydFxuICAgICAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IG1lc3NhZ2UgbWVzc2FnZSB0byBzaG93IGluIHRoZSBhbGVydFxuICAgICAgICAgKi9cblx0XHRmdW5jdGlvbiBhbGVydFN1Y2Nlc3MobWVzc2FnZSkge1xuICAgICAgICAgICAgJGFsZXJ0KHt0aXRsZTogJ1N1Y2Nlc3MhJywgY29udGVudDogbWVzc2FnZSwgdHlwZTogJ3N1Y2Nlc3MnIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3dzIGFuIGVycm9yIGFsZXJ0XG4gICAgICAgICAqIEBwYXJhbSAge3N0cmluZ30gbWVzc2FnZSBtZXNzYWdlIHRvIHNob3cgaW4gdGhlIGFsZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBhbGVydEVycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICRhbGVydCh7dGl0bGU6ICdFcnJvcjonLCBjb250ZW50OiBtZXNzYWdlLCB0eXBlOiAnZGFuZ2VyJyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG93cyBhbiBlcnJvciBhbGVydCBvbiBiYWQgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyXG4gICAgICAgICAqIEBwYXJhbSAge29iamVjdH0gcmVzIGh0dHAgcmVzcG9uc2Ugb2JqZWN0XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBhbGVydEJhZFJlc3BvbnNlKHJlcykge1xuICAgICAgICAgICAgJGxvZy5lcnJvcihyZXMpOyAvLyBmb3IgZGVidWdnaW5nIHB1cnBvc2VzXG4gICAgICAgICAgICBhbGVydEVycm9yKHJlcy5kYXRhICsgJygnICsgcmVzLnN0YXR1cyArICcpJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdyBhIG1vZGFsIHdoaWNoIGNvbmZpcm1zIGRlbGV0aW9uLiBVc2VzIHZtIHZhcmlhYmxlcyBmcm9tXG4gICAgICAgICAqIHRoZSBjYWxsaW5nIGNvbnRyb2xsZXIuXG4gICAgICAgICAqIEBwYXJhbSAge29iamVjdH0gc2NvcGUgc2NvcGUgdG8gYmluZCB0byB0aGUgbW9kYWxcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGNvbmZpcm1EZWxldGUoc2NvcGUpIHtcbiAgICAgICAgICAgICRtb2RhbCh7XG4gICAgICAgICAgICAgICAgc2NvcGU6IHNjb3BlLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2FwcC9ndWkvZGVsZXRlLm1vZGFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIHNob3c6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cdH1cbn0pKCk7IiwiLyoqXG4gKiBGbG9vZCBNb25pdG9yaW5nIFN5c3RlbVxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxuICpcbiAqIENvcHlyaWdodCAoQykgVGVhbSBOZXB0dW5lXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIEBhdXRob3IgICAgIEFuZHJldyBEeWVyIDxhbmRyZXdAZHllcmdyb3VwLmNvbS5hdT5cbiAqIEB2ZXJzaW9uICAgIDAuMC4xXG4gKiBAY29weXJpZ2h0ICBUZWFtIE5lcHR1bmUgKDIwMTUpXG4gKiBAbGluayAgICAgICBodHRwczovL2dpdGh1Yi5jb20vYWNsZWwvZGVjbzM4MDFcbiAqL1xuKGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRhbmd1bGFyLm1vZHVsZSgnYXBwLm5hdicpXG5cdFx0LmNvbnRyb2xsZXIoJ05hdkNvbnRyb2xsZXInLCBOYXZDb250cm9sbGVyKTtcblx0XG5cdC8qKlxuXHRcdCogQG5nZG9jIG9iamVjdFxuXHRcdCogQG5hbWUgYXBwLm5hdi5jb250cm9sbGVyOk5hdkNvbnRyb2xsZXJcblx0XHQqIEBkZXNjcmlwdGlvbiBQcm92aWRlcyB2aWV3bW9kZWwgZm9yIG5hdmlnYXRpb24gdGVtcGxhdGVcblx0XHQqIEByZXF1aXJlcyAkcm9vdFNjb3BlXG5cdFx0KiBAcmVxdWlyZXMgJHN0YXRlXG5cdFx0KiBAcmVxdWlyZXMgcm91dGVySGVscGVyXG5cdFx0KiBAcmVxdWlyZXMgYXV0aFxuXHQqKi9cblx0ZnVuY3Rpb24gTmF2Q29udHJvbGxlcigkcm9vdFNjb3BlLCAkc3RhdGUsIHJvdXRlckhlbHBlciwgYXV0aCkge1xuXHRcdHZhciB2bSA9IHRoaXM7XG5cdFx0XG5cdFx0LyoqIEludGVybmFsIHZhcmlhYmxlcyAqL1xuXHRcdHZhciBsb2dnZWRJbiA9IGF1dGgubG9nZ2VkSW4oKTtcblx0XHRcblx0XHQvKiogVmFyaWFibGVzIGFuZCBtZXRob2RzIGJvdW5kIHRvIHZpZXdtb2RlbCAqL1xuXHRcdHZtLmFjY291bnRNZW51ID0gW1xuXHRcdFx0eyB0ZXh0OiBcIkNoYW5nZSBwYXNzd29yZFwiLCBjbGljazogXCJ2bS5jaGFuZ2VQYXNzd29yZCgpXCIgfSxcblx0XHRcdHsgdGV4dDogXCJMb2dvdXRcIiwgY2xpY2s6IFwidm0ubG9nb3V0KClcIiB9XG5cdFx0XTtcblx0XHR2bS5jaGVja1Nob3dOYXYgPSBjaGVja1Nob3dOYXY7XG5cdFx0dm0uc3RhdGVBY3RpdmUgPSBzdGF0ZUFjdGl2ZTtcblx0XHR2bS5sb2dvdXQgPSBsb2dvdXQ7XG5cdFx0dm0uY2hhbmdlUGFzc3dvcmQgPSBjaGFuZ2VQYXNzd29yZDtcblx0XHRcblx0XHRhY3RpdmF0ZSgpO1xuXHRcdFxuXHRcdC8qKiBDYWxsZWQgd2hlbiBjb250cm9sbGVyIGlzIGluc3RhbnRpYXRlZCAobmF2YmFyIGlzIGxvYWRlZCkgKi9cblx0XHRmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcblx0XHRcdC8vIGFmdGVyIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFuZWwsIGNoZWNrIHN0aWxsIGxvZ2dlZCBpblxuXHRcdFx0JHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN1Y2Nlc3MnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0bG9nZ2VkSW4gPSBhdXRoLmxvZ2dlZEluKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqIFxuXHRcdCAqIENoZWNrIHdoZXRoZXIgYSBzdGF0ZSBpcyBhY3RpdmVcblx0XHQgKiBAcGFyYW0gIHtzdHJpbmd9IG5hbWUgc3RhdGUgbmFtZVxuXHRcdCAqIEByZXR1cm4ge2Jvb2x9ICAgICAgc3RhdGUgaXMgYWN0aXZlXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gc3RhdGVBY3RpdmUobmFtZSkge1xuXHRcdFx0cmV0dXJuIHJvdXRlckhlbHBlci5zdGF0ZUFjdGl2ZShuYW1lKTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogQ2hlY2sgd2hldGhlciB0byBzaG93IG5hdmlnYXRpb24gbGluayBiYXNlZCBvbiBhdXRoZW50aWNhdGlvblxuXHRcdCAqIEBwYXJhbSAge3N0cmluZ30gbmF2IG5hdiBsaW5rIGVsZW1lbnRcblx0XHQgKiBAcmV0dXJuIHtib29sfSAgICAgc2hvdyBuYXYgZWxlbWVudFxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGNoZWNrU2hvd05hdihuYXYpIHtcblx0XHRcdHN3aXRjaChuYXYpIHtcblx0XHRcdFx0Y2FzZSAnZGFzaGJvYXJkJzpcblx0XHRcdFx0XHRyZXR1cm4gbG9nZ2VkSW47XG5cdFx0XHRcdGNhc2UgJ2NvbmZpZyc6XG5cdFx0XHRcdFx0cmV0dXJuIGF1dGguY2hlY2tVc2VyKCdwb3dlcl91c2VyJyk7XG5cdFx0XHRcdGNhc2UgJ3dhcm5pbmdzJzpcblx0XHRcdFx0XHRyZXR1cm4gbG9nZ2VkSW47XG5cdFx0XHRcdGNhc2UgJ2FkbWluJzpcblx0XHRcdFx0XHRyZXR1cm4gYXV0aC5jaGVja1VzZXIoJ3N5c3RlbV9hZG1pbicpO1xuXHRcdFx0XHRjYXNlICdsb2dvdXQnOlxuXHRcdFx0XHRcdHJldHVybiBsb2dnZWRJbjtcblx0XHRcdFx0Y2FzZSAnYWNjb3VudCc6XG5cdFx0XHRcdFx0cmV0dXJuIGxvZ2dlZEluO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0LyoqIExvZ291dCB1c2VyIGFuZCByZWRpcmVjdCB0byBsb2dpbiBwYWdlICovXG5cdFx0ZnVuY3Rpb24gbG9nb3V0KCkge1xuXHRcdFx0YXV0aC5sb2dvdXQoKTtcblx0XHRcdGxvZ2dlZEluID0gZmFsc2U7XG5cdFx0XHQkc3RhdGUuZ28oJ2xvZ2luJyk7XHRcblx0XHR9XG5cblx0XHQvKiogUmVkaXJlY3QgdXNlciB0byBjaGFuZ2UgcGFzc3dvcmQgcGFnZSAqL1xuXHRcdGZ1bmN0aW9uIGNoYW5nZVBhc3N3b3JkKCkge1xuXHRcdFx0JHN0YXRlLmdvKCdjaGFuZ2VfcGFzc3dvcmQnKTtcblx0XHR9XG5cdH1cbn0pKCk7IiwiLyoqXG4gKiBGbG9vZCBNb25pdG9yaW5nIFN5c3RlbVxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxuICpcbiAqIENvcHlyaWdodCAoQykgVGVhbSBOZXB0dW5lXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIEBhdXRob3IgICAgIEFuZHJldyBEeWVyIDxhbmRyZXdAZHllcmdyb3VwLmNvbS5hdT5cbiAqIEB2ZXJzaW9uICAgIDAuMC4xXG4gKiBAY29weXJpZ2h0ICBUZWFtIE5lcHR1bmUgKDIwMTUpXG4gKiBAbGluayAgICAgICBodHRwczovL2dpdGh1Yi5jb20vYWNsZWwvZGVjbzM4MDFcbiAqL1xuKGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRhbmd1bGFyLm1vZHVsZSgnYXBwLndhcm5pbmdzJylcblx0XHQuY29udHJvbGxlcignV2FybmluZ3NDb250cm9sbGVyJywgV2FybmluZ3NDb250cm9sbGVyKTtcblx0XG5cdC8qKlxuXHRcdCogQG5nZG9jIG9iamVjdFxuXHRcdCogQG5hbWUgYXBwLndhcm5pbmdzLmNvbnRyb2xsZXI6V2FybmluZ3NDb250cm9sbGVyXG5cdFx0KiBAZGVzY3JpcHRpb24gUHJvdmlkZXMgdmlld21vZGVsIGZvciB3YXJuaW5ncyB2aWV3XG5cdFx0KiBAcmVxdWlyZXMgJGxvZ1xuXHRcdCogQHJlcXVpcmVzIHNlcnZlclxuXHRcdCogQHJlcXVpcmVzIG1vbWVudFxuXHQqKi9cblx0ZnVuY3Rpb24gV2FybmluZ3NDb250cm9sbGVyKCRsb2csIHNlcnZlciwgbW9tZW50KSB7XG5cdFx0dmFyIHZtID0gdGhpcztcblxuXHRcdHZhciByZXNvbHZlZCA9IDA7IC8vIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZW4gZGF0YSBpcyByZWNlaXZlZFxuXHRcdFxuXHRcdC8qKiBWYXJpYWJsZXMgYW5kIG1ldGhvZHMgYm91bmQgdG8gdmlld21vZGVsICovXG5cdFx0dm0ubG9hZGluZyA9IGZhbHNlO1xuXHRcdHZtLndhcm5pbmdzID0gW107XG5cdFx0dm0uYnVveUluc3RhbmNlcyA9IFtdO1xuXHRcdHZtLnNlbnNvclR5cGVzID0gW107XG5cdFx0XG5cdFx0YWN0aXZhdGUoKTtcblx0XHRcblx0XHQvKiogQ2FsbGVkIHdoZW4gY29udHJvbGxlciBpcyBpbnN0YW50aWF0ZWQgKHdhcm5pbmdzIHBhZ2UgaXMgbG9hZGVkKSAqL1xuXHRcdGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuXHRcdFx0dm0ubG9hZGluZyA9IHRydWU7XG5cdFx0XHRxdWVyeVdhcm5pbmdzKCk7XG5cdFx0XHRxdWVyeUJ1b3lJbnN0YW5jZXMoKTtcblx0XHRcdHF1ZXJ5U2Vuc29yVHlwZXMoKTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqIFF1ZXJ5IHdhcm5pbmdzIGZyb20gc2VydmVyIGFuZCB1cGRhdGUgdmlld21vZGVsICovXG5cdFx0ZnVuY3Rpb24gcXVlcnlXYXJuaW5ncygpIHtcblx0XHRcdHNlcnZlci5nZXRXYXJuaW5ncygpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdHZtLndhcm5pbmdzID0gcmVzLmRhdGEud2FybmluZ3M7XG5cdFx0XHRcdHJlc29sdmVkKys7XG5cdFx0XHRcdHBhcnNlV2FybmluZ3MoKTtcblx0XHRcdH0sIGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHQkbG9nLmVycm9yKHJlcyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqIFF1ZXJ5IGJ1b3kgaW5zdGFuY2VzIGZyb20gc2VydmVyIGFuZCB1cGRhdGUgdmlld21vZGVsICovXG5cdFx0ZnVuY3Rpb24gcXVlcnlCdW95SW5zdGFuY2VzKCkge1xuXHRcdFx0c2VydmVyLmdldEJ1b3lJbnN0YW5jZXMoKS50aGVuKGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHR2bS5idW95SW5zdGFuY2VzID0gcmVzLmRhdGEuYnVveUluc3RhbmNlcztcblx0XHRcdFx0cmVzb2x2ZWQrKztcblx0XHRcdFx0cGFyc2VXYXJuaW5ncygpO1xuXHRcdFx0fSwgZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdCRsb2cuZXJyb3IocmVzKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8qKiBRdWVyeSBzZW5zb3IgdHlwZXMgZnJvbSBzZXJ2ZXIgYW5kIHBhcnNlIHdhcm5pbmdzICovXG5cdFx0ZnVuY3Rpb24gcXVlcnlTZW5zb3JUeXBlcygpIHtcblx0XHRcdHNlcnZlci5nZXRTZW5zb3JUeXBlcygpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdHZtLnNlbnNvclR5cGVzID0gcmVzLmRhdGEuc2Vuc29yVHlwZXM7XG5cdFx0XHRcdHJlc29sdmVkKys7XG5cdFx0XHRcdHBhcnNlV2FybmluZ3MoKTtcblx0XHRcdH0sIGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHQkbG9nLmVycm9yKHJlcyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqIEFzc29jaWF0ZSBidW95LCBzZW5zb3IgYW5kIHRpbWUgaW5mbyB3aXRoIHdhcm5pbmdzICovXG5cdFx0ZnVuY3Rpb24gcGFyc2VXYXJuaW5ncygpIHtcblx0XHRcdGlmIChyZXNvbHZlZCA8IDMpIHJldHVybjsgLy8gd2FpdCB1bnRpbCBhbGwgZGF0YSBoYXMgYmVlbiByZWNlaXZlZCBmcm9tIHNlcnZlclxuXHRcdFx0dm0ubG9hZGluZyA9IGZhbHNlO1xuXG5cdFx0XHR2bS53YXJuaW5ncy5mb3JFYWNoKGZ1bmN0aW9uKHdhcm5pbmcpIHtcblx0XHRcdFx0Ly8gcGFyc2UgdGltZVxuXHRcdFx0XHR3YXJuaW5nLnJlYWRpbmdUaW1lID0gbW9tZW50KHdhcm5pbmcucmVhZGluZ1RpbWVzdGFtcCxcblx0XHRcdFx0XHQnWCcpLmZvcm1hdChcIkREL01NL1lZIEhIOm1tIEFcIik7XG5cdFx0XHRcdC8vIGdldCBidW95IG5hbWVcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2bS5idW95SW5zdGFuY2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0dmFyIGJ1b3lJbnN0YW5jZSA9IHZtLmJ1b3lJbnN0YW5jZXNbaV07XG5cdFx0XHRcdFx0aWYgKGJ1b3lJbnN0YW5jZS5pZCA9PSB3YXJuaW5nLndhcm5pbmdUcmlnZ2VyLmJ1b3lJbnN0YW5jZUlkKSB7XG5cdFx0XHRcdFx0XHR3YXJuaW5nLmJ1b3lOYW1lID0gYnVveUluc3RhbmNlLm5hbWU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gZ2V0IHNlbnNvciBuYW1lXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdm0uc2Vuc29yVHlwZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHR2YXIgc2Vuc29yVHlwZSA9IHZtLnNlbnNvclR5cGVzW2ldO1xuXHRcdFx0XHRcdGlmIChzZW5zb3JUeXBlLmlkID09IHdhcm5pbmcud2FybmluZ1RyaWdnZXIuc2Vuc29yVHlwZUlkKSB7XG5cdFx0XHRcdFx0XHR3YXJuaW5nLnNlbnNvck5hbWUgPSBzZW5zb3JUeXBlLm5hbWU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gZm9ybWF0IHNlbnNvciwgb3BlcmF0b3IgYW5kIHZhbHVlXG5cdFx0XHRcdHdhcm5pbmcud2FybmluZyA9IHdhcm5pbmcuc2Vuc29yTmFtZSArIFwiIFwiICtcblx0XHRcdFx0XHR3YXJuaW5nLndhcm5pbmdUcmlnZ2VyLm9wZXJhdG9yICsgXCIgXCIgK1xuXHRcdFx0XHRcdHdhcm5pbmcud2FybmluZ1RyaWdnZXIudmFsdWU7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn0pKCk7IiwiLyoqXG4gKiBGbG9vZCBNb25pdG9yaW5nIFN5c3RlbVxuICogVmVyc2lvbiAwLjAuMSAoRHV5dW5nKVxuICpcbiAqIENvcHlyaWdodCAoQykgVGVhbSBOZXB0dW5lXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIEBhdXRob3IgICAgIEFuZHJldyBEeWVyIDxhbmRyZXdAZHllcmdyb3VwLmNvbS5hdT5cbiAqIEB2ZXJzaW9uICAgIDAuMC4xXG4gKiBAY29weXJpZ2h0ICBUZWFtIE5lcHR1bmUgKDIwMTUpXG4gKiBAbGluayAgICAgICBodHRwczovL2dpdGh1Yi5jb20vYWNsZWwvZGVjbzM4MDFcbiAqL1xuKGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRhbmd1bGFyLm1vZHVsZSgnYXBwLndhcm5pbmdzJylcblx0XHQucnVuKHNldFJvdXRlcyk7XG5cdFxuXHQvKiogRGVmaW5lIHJvdXRlcyBmb3Igd2FybmluZ3MgcGFnZSAqL1xuXHRmdW5jdGlvbiBzZXRSb3V0ZXMocm91dGVySGVscGVyKSB7XG5cdFx0cm91dGVySGVscGVyLmNvbmZpZ3VyZVN0YXRlcyhnZXRTdGF0ZXMoKSk7XG5cdH1cblx0XG5cdGZ1bmN0aW9uIGdldFN0YXRlcygpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0e1xuXHRcdFx0XHRzdGF0ZTogJ3dhcm5pbmdzJyxcblx0XHRcdFx0Y29uZmlnOiB7XG5cdFx0XHRcdFx0dXJsOiAnL3dhcm5pbmdzJyxcblx0XHRcdFx0XHRjb250cm9sbGVyOiAnV2FybmluZ3NDb250cm9sbGVyJyxcblx0XHRcdFx0XHRjb250cm9sbGVyQXM6ICd2bScsXG5cdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvYXBwL3dhcm5pbmdzL3dhcm5pbmdzLmh0bWwnLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdGFjY2VzczogJ2F1dGhlZCdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdO1xuXHR9XG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==