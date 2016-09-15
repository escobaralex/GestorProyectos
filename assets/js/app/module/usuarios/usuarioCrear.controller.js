(function () {
    'use strict';
    function UsuarioCrearController($scope, $state,toaster,$uibModal,$log,UsuarioService) {        
		$scope.newUsuario = {};
		$scope.roles = [];
		
		UsuarioService.roles()
		.then(function (data) {
        	$scope.roles = data;
		})
		.catch(function (err) {
			toaster.pop('error', "Ups", 'Ocurrio un error al obtener los roles, error: ' + err);
		});
	}

    angular
	.module(app.name)
	.controller('UsuarioCrearController', UsuarioCrearController);

    UsuarioCrearController.$inject = ['$scope', '$state','toaster','$uibModal','$log','UsuarioService'];

})();