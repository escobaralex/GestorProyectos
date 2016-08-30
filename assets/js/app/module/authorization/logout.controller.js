(function () {
    'use strict';
    function LogoutController($scope, $state, AuthService, ngAuthSettings, toaster) {
        $scope.loading = false;
        $scope.loginData = {
            userName: "",
            password: "",
            useRefreshTokens: false
        };

        $scope.login = function () {
            $scope.loading = true;
            $scope.form.$submitted = true;
            if ($scope.form.$valid) {
                authService.login($scope.loginData).then(function (response) {
                    if(response.user){
                        $state.go('PresupuestosListar');
                    }else{
                        toaster.pop('error', "Error al ingresar", response.message);
                        $scope.loading = false;
                    }                    
                },
                 function (err) {
                     toaster.pop('error', "Error al ingresar", err.message);
                     $scope.loading = false;
                 });
            } else {
                toaster.pop('error', "Error", "Verifique que se han llenado correctamente todos los campos.");
                $scope.loading = false;
            }
        };
    }

    angular
	.module(app.name)
	.controller('LogoutController', LogoutController);

    LogoutController.$inject = ['$scope', '$state', 'authService', 'ngAuthSettings', 'toaster'];

})();