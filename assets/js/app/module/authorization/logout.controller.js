(function () {
    'use strict';
    function LogoutController($scope, $state, AuthService, toaster) {
        $scope.loading = false;
        $scope.loginData = {
            userName: "",
            password: "",
            useRefreshTokens: false
        };

        authService.login($scope.loginData).then(function (response) {
            if(response.user){
                $state.go('login');
            }else{
                toaster.pop('error', "Error al salir del sistema ", response.message);
                $scope.loading = false;
            }                    
        },
        function (err) {
            toaster.pop('error', "Error al salir del sistema ", err.message);
            $scope.loading = false;
        });
    }

    angular
	.module(app.name)
	.controller('LogoutController', LogoutController);

    LogoutController.$inject = ['$scope', '$state', 'authService', 'toaster'];

})();