(function() {
    'use strict';
    
    angular.module('app', [
        // Shared modules
        'app.core',
        'app.gui',
        'app.auth',
        'app.nav',
        
        // Feature modules        
        'app.dashboard',
        'app.config',
        'app.warnings'
    ]);
})();