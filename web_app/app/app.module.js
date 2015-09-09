(function() {
    'use strict';
    
    angular.module('app', [
        // Shared modules
        'app.core',
        'app.gui',
        
        // Feature modules        
        'app.auth',
        'app.dashboard',
        'app.config',
        'app.warnings'
    ]);
})();