(function () {
    'use strict';
    function UsuarioListarController($scope, $state,toaster,$log,UsuarioService) {
       
		$scope.gridListar = {
			enableRowSelection: true, 
			enableRowHeaderSelection: false,
			enableColumnMenus: true,
			multiSelect: false,
			columnDefs: [			            
			            { name: 'nombre' },
			            { name: 'inicio' },
			            { name: 'termino' },
			            { name: 'cliente' },
			            { name: 'avance' },
			            { name: 'desviacion' }
			           ]
		};

		$scope.gridListar.rowTemplate= "<div ng-dblclick=\"grid.appScope.showInfo(row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>";
		
		UsuarioService.listar()
		.then(function (data) {
        	$scope.gridListar.data = data;
		})
		.catch(function (err) {
			toaster.pop('error', "Ups", 'Ocurrio un error al obtener los usuarios, error: ' + err);
		});	
		$scope.showInfo = function(row){
			$state.go('ProyectosDetalle');
		}
	}

    angular
	.module(app.name)
	.controller('UsuarioListarController',UsuarioListarController);

    UsuarioListarController.$inject = ['$scope', '$state','toaster','$log','UsuarioService'];

})();