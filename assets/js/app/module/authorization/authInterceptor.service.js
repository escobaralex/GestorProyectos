(function () {

    function AuthInterceptorService($q, $injector,AuthService, $location, WebStorageService) {
        
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
                AuthService.logOut();
                $location.path('/login');
            }
            return $q.reject(rejection);
        }

        this.request = request;
        this.responseError = responseError;
    }

    angular.module(app.name)
    .service('AuthInterceptorService', AuthInterceptorService);

    AuthInterceptorService.$inject = ['$q', '$injector', 'AuthService','$location', 'WebStorageService'];

})();