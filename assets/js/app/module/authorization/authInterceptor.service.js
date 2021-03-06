﻿(function () {

    function AuthInterceptorService($q, $injector, $location, WebStorageService) {
        
        function request(config) {

            config.headers = config.headers || {};

            var authData = WebStorageService.get('ss','authInfo');
            if (authData) {
                config.headers.Authorization = 'Bearer ' + authData.token;
            }
            return config;
        }

        function responseError(rejection) {
            if (rejection.status === 401) {                
                var authService = $injector.get('AuthService');
                authService.logOut();
                $location.path('/login');
            }
            return $q.reject(rejection);
        }

        this.request = request;
        this.responseError = responseError;
    }

    angular.module(app.name)
    .service('AuthInterceptorService', AuthInterceptorService);

    AuthInterceptorService.$inject = ['$q', '$injector', '$location', 'WebStorageService'];

})();