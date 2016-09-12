(function () {

    function AuthService($http, $q, WebStorageService, ngAuthSettings, jwtHelper, $log) {
        
        var authentication = {
            isAuth: false,
            userName: "",
            useRefreshTokens: false,
            rol: "",
            usuario: "",
        };

        function login(loginData) {

            //var user = "?email=" + loginData.userName + "&password=" + loginData.password;
            var user = { "email" : loginData.userName , "password" : loginData.password };

            var deferred = $q.defer();
            //{ headers: { 'Content-Type': 'application/x-www-form-urlencoded' } 
            $http.post(ngAuthSettings.urlServer + 'auth', user)
                .success(function (response) {
                
                if (response.user) {
                    WebStorageService.set('ss', 'authInfo', { token: response.access_token, userName: loginData.userName, refreshToken: "", useRefreshTokens: false });
                    
                    authentication.isAuth = true;
                    authentication.userName = loginData.userName;
                    authentication.useRefreshTokens = loginData.useRefreshTokens;
                    /*var tokenPayload = jwtHelper.decodeToken(response.access_token);
                    if (authentication.isAuth == true && tokenPayload) {
                        authentication.rol = tokenPayload.rol;
                        authentication.usuario = tokenPayload.nombres + ' ' + tokenPayload.apellidos;
                    } */               
                }
                
                deferred.resolve(response);
                
            }).error(function (err, status) {                
                deferred.reject(err);
            });
            
            return deferred.promise;
        }

        function logout() {
            
            var deferred = $q.defer();
            var uri = URL_API + 'api/accounts/logout'
            $http({
                url: uri,
                method: "GET"
            })
            .success(function (data, status, headers, config) {
                $log.info('Sesión cerrada correctamente');                
                WebStorageService.remove('ss', 'authInfo');
                authentication.isAuth = false;
                authentication.userName = "";
                authentication.useRefreshTokens = false;
                authentication.rol = "";
                authentication.usuario = "";
                authentication.empresa = "";
                authentication.idEmpresa = "";
                deferred.resolve(data);
            })
            .error(function (err) {
                $log.error('error al intentar cerrar sesion.');
                deferred.reject(err)
            });
            return deferred.promise;
        }

        function fillAuthData() {

            var authData = WebStorageService.get('ss', 'authInfo');
            if (authData) {
                authentication.isAuth = true;
                authentication.userName = authData.userName;
                authentication.useRefreshTokens = authData.useRefreshTokens;
                var tokenPayload = jwtHelper.decodeToken(authData.token);
                if (authentication.isAuth == true && tokenPayload) {
                    authentication.rol = tokenPayload.rol;
                    authentication.usuario = tokenPayload.nombres + ' ' + tokenPayload.apellidos;
                    authentication.empresa = tokenPayload.empresa;                    
                }
            }
        }

        this.login = login;
        this.logout = logout;
        this.fillAuthData = fillAuthData;
        this.authentication = authentication;
    }

    angular.module(app.name)
    .service('AuthService', AuthService);

    AuthService.$inject = ['$http', '$q', 'WebStorageService', 'ngAuthSettings', 'jwtHelper', '$log'];

})();