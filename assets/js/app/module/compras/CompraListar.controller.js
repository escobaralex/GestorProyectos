(function () {
    'use strict';
    function CompraListarController($scope, $state,toaster,$uibModal,$log,CompraService) {
        $scope.ganttData = [
	 	               {name: 'row1', tasks: [{name: 'Compra 1', from: '2016-06-01', to: '2016-06-05',"color": "#FFDE18"}]},
	 	               {name: 'row2', tasks: [{name: 'Compra 2', from: '2016-06-05', to: '2016-06-10',"color": "#FFde18"}]},
	 	               {name: 'row3', tasks: [{name: 'Compra 3', from: '2016-06-10', to: '2016-06-15',"color": "#F1C232"}]},
	 	               {name: 'row4', tasks: [{name: 'Compra 4', from: '2016-06-15', to: '2016-06-18',"color": "#F1C232"}]},
	 	               {name: 'row5', tasks: [{name: 'Compra 5', from: '2016-06-19', to: '2016-06-22',"color": "#F1C232"}]},
	 	               {name: 'row6', tasks: [{name: 'Compra 6', from: '2016-06-22', to: '2016-06-30',"color": "#F1C232"}]},
	 	           ];
		
		$scope.ganttOptions = {
				data:$scope.ganttData			
		};
		$scope.gridGanttComprasData = [
				{"nombre":"Compra 1","fechaInicio":"2016-06-01","fechaFin":"2016-06-05"},
				{"nombre":"Compra 2","fechaInicio":"2016-06-01","fechaFin":"2016-06-05"},
				{"nombre":"Compra 3","fechaInicio":"2016-06-01","fechaFin":"2016-06-05"},
				{"nombre":"Compra 4","fechaInicio":"2016-06-01","fechaFin":"2016-06-05"},
				{"nombre":"Compra 5","fechaInicio":"2016-06-01","fechaFin":"2016-06-05"},
				{"nombre":"Compra 6","fechaInicio":"2016-06-01","fechaFin":"2016-06-05"}	                               
		];
		
		
		
		$scope.gridOrdenesCompraData = [
										{
											'etapaCompra':'Cotización',
											'centroCosto':'ASDF-12-DSFW',
											'proveedor':'Plásticos Industriales S.A.',
											'asunto':'Tubos Eléctricos B002',
											'monto':'$ 1.200.000',
											'fecha':'2016-06-21',
											'fechaVencimiento':'2016-06-25',
											'estado':'Enviada'
										},{
											'etapaCompra':'Orden de Compra',
											'centroCosto':'SDF-01-CVB',
											'proveedor':'Plásticos Industriales S.A.',
											'asunto':'Tubos Eléctricos A001',
											'monto':'$ 4.200.000',
											'fecha':'2016-06-20',
											'fechaVencimiento':'2016-06-28',
											'estado':'Aprobada'
										},{
											'etapaCompra':'Cotización',
											'centroCosto':'ASDF-12-DSFW',
											'proveedor':'Cemento Melón',
											'asunto':'Cemento',
											'monto':'$ 1.200.000',
											'fecha':'2016-06-21',
											'fechaVencimiento':'2016-06-22',
											'estado':'Enviada'
										}	                                
								];
		$scope.gridOrdenesCompra = {
				enableRowSelection: true, 
				enableRowHeaderSelection: false,
				enableColumnMenus: true,
				multiSelect: false,
				columnDefs: [
							{ name: 'etapaCompra'},
							{ name: 'centroCosto' },
							{ name: 'proveedor' },
							{ name: 'asunto' },
							{ name: 'monto' },
							{ name: 'fecha' },
							{ name: 'fechaVencimiento'},
							{ name: 'estado' }
						]
		};
		$scope.gridOrdenesCompra.data = $scope.gridOrdenesCompraData;
		
		$scope.clickComprasCrear = function(){
			var modalInstance = $uibModal.open({
				animation: false,
				templateUrl: 'templates/Compras/DialogCreaCompra.html',
				controller: 'DialogCreaCompraController',
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
		};
	}

    angular
	.module(app.name)
	.controller('CompraListarController', CompraListarController);

    CompraListarController.$inject = ['$scope', '$state','toaster','$uibModal','$log','CompraService'];

})();