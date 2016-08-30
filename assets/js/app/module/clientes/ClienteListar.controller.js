(function () {
    'use strict';
    function ClienteListarController($scope, $state,toaster,$uibModal,$log,ClienteService) {
        $scope.gridClientesListarData = [
		{"nombreCliente":"Inmobiliaria Los Montes","fonoEmpresa":"123456789","nombreContacto":"Sergio Narea","emailContacto":"narea@santiago.com","fonocontacto":"99999999"},
		{"nombreCliente":"Inmobiliaria Los Copihües","fonoEmpresa":"726342574","nombreContacto":"Jorge Gonzalez","emailContacto":"alfa@santiago.com","fonocontacto":"99999999"},
		{"nombreCliente":"Contructora Santiago","fonoEmpresa":"17263716","nombreContacto":"Claudio Tapia","emailContacto":"beta@santiago.com","fonocontacto":"99999999"}
		];
		
		$scope.ClientesCrearClick = function(){
			var modalInstance = $uibModal.open({
				animation: false,
				templateUrl: 'templates/Clientes/DialogCreaCliente.html',
				controller: 'DialogCreaClienteController',
				size: 'lg',
				resolve: {
				}					 
			});
		
			modalInstance.closed.then(
				function () {
					//...
				},
				function () {
				//dismissed
				}
			);
		}
	}

    angular
	.module(app.name)
	.controller('ClienteListarController', ClienteListarController);

    ClienteListarController.$inject = ['$scope', '$state','toaster','$uibModal','$log','ClienteService'];

})();