(function () {
    'use strict';
    function PresupuestoCrearController($scope, $state,toaster,$uibModal,$log,PresupuestoService) {
        $scope.materials = [
		                 {
		                     "tipoRecurso": "CIVIL",
		                     "nombreRecurso":"Juan Gonzalez",
		                     "material":"Excavador",
		                     "tipoMaterial":"Excavador",
		                     "categoriaMaterial": "Experimentado",
		                     "unidades":"Horas",
		                     "cantidadUnidades":"40"
		                 },
		                 {
		                     "tipoRecurso": "MAQUINARIA CIVIL",
		                     "nombreRecurso":"CAT 420F2 ",
		                     "material":"Retroexcavadora",
		                     "tipoMaterial":"",
		                     "categoriaMaterial": "",
		                     "unidades":"Horas",
		                     "cantidadUnidades":"40"
		                 }
		                 
	             ];
	
		$scope.openDialogAddResource = function(rowSelected){
			var modalInstance = $uibModal.open({
					animation: false,
					templateUrl: 'templates/Recursos/DialogAddResource.html',
					controller: 'DialogAddResourceController',
					size: 'lg',
					resolve: {
					}					 
				}
			);
			
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
	.controller('PresupuestoCrearController', PresupuestoCrearController);

    PresupuestoCrearController.$inject = ['$scope', '$state','toaster','$uibModal','$log','PresupuestoService'];

})();