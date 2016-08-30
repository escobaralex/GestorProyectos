(function () {
    'use strict';
    function PresupuestoCrearController($scope, $state,toaster,$log,PresupuestoService) {
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
	}

    angular
	.module(app.name)
	.controller('PresupuestoCrearController', PresupuestoCrearController);

    PresupuestoCrearController.$inject = ['$scope', '$state','toaster','$log','PresupuestoService'];

})();