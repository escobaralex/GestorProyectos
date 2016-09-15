(function () {
    'use strict';
    function LogoutController($scope, $state, AuthService, toaster) {
        $scope.loading = false;
        if(authService.logout()) {
            $state.go('login');
        }else{        
            toaster.pop('error', "Ha ocurrido un error al salir del sistema."+  
            "  Vuelva a intentar, si el error persiste, cierre su navegador.");
            $scope.loading = false;
        }
    }

    angular
	.module(app.name)
	.controller('LogoutController', LogoutController);

    LogoutController.$inject = ['$scope', '$state', 'authService', 'toaster'];

})();