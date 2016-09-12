(function () {
    'use strict';
    function LoginController($scope, $state, AuthService, ngAuthSettings, toaster,$log) {
        $scope.loading = false;
        $scope.loginData = {
            userName: "",
            password: ""
        };
        $scope.login = login;

        function login() {
            $scope.loading = true;
            $scope.form.$submitted = true;
            if ($scope.form.$valid) {
                AuthService.login($scope.loginData).then(function (response) {
                    if(response.user){
                        $state.go('PresupuestosListar');
                    }
                    else{
                        toaster.pop('error', "Error al ingresar","Usuario y/o contraseña incorrecta.");
                        $scope.loading = false;
                    }
                },
                 function (err) {
                     $log.error(err !== undefined && err.error_description !== undefined ? err.error_description : JSON.stringify(err || ''));
                     toaster.pop('error', "Error al ingresar","Usuario y/o contraseña incorrecta.");
                     $scope.loading = false;
                 });
            } else {
                toaster.pop('error', "Error", "Verifique que se han llenado correctamente todos los campos.");
                $scope.loading = false;
            }
        }
    }

    angular
	.module(app.name)
	.controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$state', 'AuthService', 'ngAuthSettings', 'toaster','$log'];

})();