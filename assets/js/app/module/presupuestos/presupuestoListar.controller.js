(function () {
    'use strict';
    function PresupuestoListarController($scope, $state,toaster,$log,PresupuestoService) {
        $scope.gridPresupuestosListar = { 
			enableRowSelection: true, 
			enableRowHeaderSelection: false,
			enableColumnMenus: true,
			multiSelect: false
		};

		$scope.gridPresupuestosListar.columnDefs = [
			{ field: 'id', display:'Numero',width: 80 },
			{ name: 'nomCliente' },
			{ name: 'asunto' },
			{ name: 'fecha', width: 100 },
			{ name: 'estado', width: 100 },
			{ name: 'monto', width: 100 }
		];
		
		$scope.gridPresupuestosListar.rowTemplate= "<div ng-dblclick=\"grid.appScope.showInfo(row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>";
			
		
		$scope.gridPresupuestosListar.onRegisterApi = function( gridApi ) {
			$scope.gridApi = gridApi;
			/*gridApi.selection.on.rowSelectionChanged($scope, function(){
				alert('click!');
			});
			*/
		};
		
		$scope.showInfo = function(row){
			$state.go('PresupuestosDetalle');
		}
		
		PresupuestoService.listar()
		.then(function (data) {
                    $scope.gridPresupuestosListar.data = data;
		})
		.catch(function (err) {
			toaster.pop('error', "Ups", 'Ocurrio un error al obtener los presupuestos, error: ' + err);
		});		
	}

    angular
	.module(app.name)
	.controller('PresupuestoListarController', PresupuestoListarController);

    PresupuestoListarController.$inject = ['$scope', '$state','toaster','$log','PresupuestoService'];

})();