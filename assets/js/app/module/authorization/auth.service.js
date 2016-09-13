(function () {

    function AuthService($http, $q, WebStorageService, ngAuthSettings, jwtHelper, $log) {
        
        var authentication = {
            isAuth: false,
            userName: "",
            useRefreshTokens: false,
            rol: "",
            usuario: "",
        };
        function isAuthenticated(){
            return authentication.isAuth;
        }
        function login(loginData) {
            
            var deferred = $q.defer();
             
            $http.post(ngAuthSettings.urlServer + 'auth', { "email" : loginData.userName , "password" : loginData.password })
                .success(function (response) {                
                if (response.user) {
                    authentication.isAuth = true;
                    authentication.userName = loginData.userName;                    
                    WebStorageService.set('ss', 'authInfo', { token: response.token , user : response.user});                    
                }
                
                deferred.resolve(response);
                
            }).error(function (err, status) {                
                deferred.reject(err);
            });
            
            return deferred.promise;
        }

        function logout() {
            //TODO: borrar token storage y pedir confirmacion de cierre de sesion y redirigir al login
            WebStorageService.remove('ss', 'authInfo');
            return true;
        }

        function fillAuthData() {
            var authData = WebStorageService.get('ss', 'authInfo');
            if (authData) {
                authentication.isAuth = true;
                authentication.userName = authData.userName;
                /*var tokenPayload = jwtHelper.decodeToken(authData.token);
                if (authentication.isAuth == true && tokenPayload) {
                    authentication.rol = tokenPayload.rol;
                    authentication.usuario = tokenPayload.nombres + ' ' + tokenPayload.apellidos;
                    authentication.empresa = tokenPayload.empresa;                    
                }*/
            }
        }

        this.login = login;
        this.logout = logout;
        this.fillAuthData = fillAuthData;
        this.authentication = authentication;
        this.isAuthenticated = isAuthenticated;
    }

    angular.module(app.name)
    .service('AuthService', AuthService);

    AuthService.$inject = ['$http', '$q', 'WebStorageService', 'ngAuthSettings', 'jwtHelper', '$log'];

})();