(function () {
    'use strict';
    function RecursoListarController($scope, $state,toaster,$log,RecursosService) {
       $scope.proyectos = [
	                    {
	                    	"numero":1,
	                    	"nombre":"Urbanización Aérea - Cond. Los Copihües",
	                    	"inicio":"2016-05-31",
	                    	"termino":"2016-06-28",
	                    	"cliente": "Inmobiliaria Los Copihües",
	                    	"avance":"50%",
	                    	"desviacion":"0%"
	                    }
                ];
		$scope.gridProyectosListar = {
			enableRowSelection: true, 
			enableRowHeaderSelection: false,
			enableColumnMenus: true,
			multiSelect: false,
			olumnDefs: [
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
		$scope.gridProyectosListar.data = $scope.proyectos;
		
		$scope.showInfo = function(row){
			$state.go('ProyectosDetalle');
		}
	}

    angular
	.module(app.name)
	.controller('RecursoListarController', RecursoListarController);

    RecursoListarController.$inject = ['$scope', '$state','toaster','$log','RecursosService'];

})();