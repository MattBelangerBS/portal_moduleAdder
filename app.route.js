(function(){
    'use strict';
    
    angular.module('moduleBuild')
        .config(config);

        config.$inject = ['$stateProvider', '$httpProvider', '$urlRouterProvider'];
        
        function config($stateProvider, $httpProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/home');

            $stateProvider

            .state('home', {
                url: '/home',
                templateUrl:'module_builder/addModule.html',
                controller:'ModuleInputCtrl as ctrl'
                        
            });
        };
       
})();