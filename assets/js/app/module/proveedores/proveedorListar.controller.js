(function () {
    'use strict';
    function ProveedorListarController($scope, $state,toaster,$log,ProveedorService) {
       $scope.gridProveedoresListarData = [
		{"nombreProveedor":"Plasticos Industriales S.A.","fonoEmpresa":"123456789","nombreContacto":"Jerome Morrow","emailContacto":"jerome@gattacca.com","fonocontacto":"99999999"},
		{"nombreProveedor":"Homecenter S.A.","fonoEmpresa":"123456789","nombreContacto":"Voncent Freeman","emailContacto":"ctc@homecenter.com","fonocontacto":"99999999"},
		{"nombreProveedor":"Melon S.A.","fonoEmpresa":"123456789","nombreContacto":"Holly Hunter","emailContacto":"ctc@melon.com","fonocontacto":"99999999"}
		];
		$scope.ProveedoresCrearClick = function(){
			var modalInstance = $uibModal.open({
				animation: false,
				templateUrl: 'templates/Proveedores/DialogCreaProveedor.html',
				controller: 'DialogCreaProveedorController',
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
	.controller('ProveedorListarController', ProveedorListarController);

    ProveedorListarController.$inject = ['$scope', '$state','toaster','$log','ProveedorService'];

})();