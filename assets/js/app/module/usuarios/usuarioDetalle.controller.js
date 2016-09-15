(function () {
    'use strict';
    function UsuarioDetalleController($scope, $state,toaster,$log,UsuarioService) {
		$scope.usuario = {};		
	}

    angular
	.module(app.name)
	.controller('UsuarioDetalleController', UsuarioDetalleController);

    UsuarioDetalleController.$inject = ['$scope', '$state','toaster','$log','UsuarioService'];

})();