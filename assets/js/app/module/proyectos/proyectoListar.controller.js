(function () {
    'use strict';
    function ProyectoListarController($scope, $state,toaster,$log,ProyectoService) {
       
		$scope.gridProyectosListar = {
			enableRowSelection: true, 
			enableRowHeaderSelection: false,
			enableColumnMenus: true,
			multiSelect: false,
			columnDefs: [
			            { name: 'numero', width: 80 },
			            { name: 'nombre' },
			            { name: 'inicio' },
			            { name: 'termino' },
			            { name: 'cliente' },
			            { name: 'avance' },
			            { name: 'desviacion' }
			           ]
		};

		$scope.gridProyectosListar.rowTemplate= "<div ng-dblclick=\"grid.appScope.showInfo(row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>";
		ProyectoService.listar()
		.then(function (data) {
        	$scope.gridProyectosListar.data = data;
		})
		.catch(function (err) {
			toaster.pop('error', "Ups", 'Ocurrio un error al obtener los presupuestos, error: ' + err);
		});	
		
		$scope.showInfo = function(row){
			$state.go('ProyectosDetalle');
		}
	}

    angular
	.module(app.name)
	.controller('ProyectoListarController', ProyectoListarController);

    ProyectoListarController.$inject = ['$scope', '$state','toaster','$log','ProyectoService'];

})();