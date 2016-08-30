(function () {
    'use strict';
    function RecursoDetalleController($scope, $state,toaster,$log,RecursoService) {
		$scope.tareas = [
			{
				 "numeroTarea":"1",
				 "tarea":"Instalación Faena",
				 "inicio":"2016-06-01",
				 "termino":"2016-06-05",
				 "asignadaA":"Recurso 1",
				 "estado":"Iniciada",
				 "propietarioTarea":"Jefe Proyecto 1",
				 "dedicacion":"100%",
				 "dependeDe":""
			},
			{
				 "numeroTarea":"2",
				 "tarea":"Excavar Zanja",
				 "inicio":"2016-06-06",
				 "termino":"2016-06-10",
				 "asignadaA":"Recurso 2",
				 "estado":"Iniciada",
				 "propietarioTarea":"Jefe Proyecto 1",
				 "dedicacion":"100%",
				 "dependeDe":"1"
			},
			{
				 "numeroTarea":"3",
				 "tarea":"Instalar Plataforma",
				 "inicio":"2016-06-06",
				 "termino":"2016-06-15",
				 "asignadaA":"Recurso 3",
				 "estado":"Iniciada",
				 "propietarioTarea":"Jefe Proyecto 1",
				 "dedicacion":"100%",
				 "dependeDe":"2"
			}
		];
		
		$scope.ganttData = [
					{name: 'row1', tasks: [{name: 'Instalación Faena', from: '2016-06-01', to: '2016-06-05',"color": "#FFDE18"}]},
					{name: 'row2', tasks: [{name: 'Excavar Sanja', from: '2016-06-05', to: '2016-06-10',"color": "#FFde18"}]},
					{name: 'row3', tasks: [{name: 'Tarea nn1', from: '2016-06-10', to: '2016-06-15',"color": "#F1C232"}]},
					{name: 'row4', tasks: [{name: 'Tarea nn2', from: '2016-06-15', to: '2016-06-18',"color": "#F1C232"}]},
					{name: 'row5', tasks: [{name: 'Tarea nn3', from: '2016-06-19', to: '2016-06-22',"color": "#F1C232"}]},
					{name: 'row6', tasks: [{name: 'Tarea nn4', from: '2016-06-22', to: '2016-06-30',"color": "#F1C232"}]},
				];
		
		$scope.ganttOptions = {
				data:$scope.ganttData,
				
		};
			
		$scope.gridProjectTasks = {
				enableRowSelection: true, 
				enableRowHeaderSelection: false,
				enableColumnMenus: true,
				multiSelect: false,
				columnDefs: [
							{ name: 'numeroTarea', width: 80 },
							{ name: 'tarea' },
							{ name: 'inicio' },
							{ name: 'termino' },
							{ name: 'asignadaA' },
							{ name: 'estado' },
							{ name: 'propietarioTarea' },
							{ name: 'dedicacion' },
							{ name: 'dependeDe' }
						]
		};
		//$scope.gridProjectTasks.rowTemplate= "<div ng-dblclick=\"grid.appScope.showInfo(row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>";
		$scope.gridProjectTasks.data = $scope.tareas;
		
		$scope.labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
		$scope.series = ['Gastos Proyectado', 'Gasto Actual','Valor Ganado'];
		$scope.data = [
			[36, 60, 55, 19, 81, 20, 40],
			[23, 40, 35, 19, 82, 30, 90],
			[31, 50, 45, 25, 90, 26, 50],
		];
		
		$scope.gridValorGanadoData = [
			{"mes":"Enero","gastoProyectado":"36","gastoActual":"23","valorGanado":"31"},
			{"mes":"Febrero","gastoProyectado":"60","gastoActual":"40","valorGanado":"50"},
			{"mes":"Marzo","gastoProyectado":"55","gastoActual":"35","valorGanado":"45"},
			{"mes":"Abril","gastoProyectado":"19","gastoActual":"19","valorGanado":"25"},
			{"mes":"Mayo","gastoProyectado":"81","gastoActual":"82","valorGanado":"90"},
			{"mes":"Junio","gastoProyectado":"20","gastoActual":"30","valorGanado":"26"},
			{"mes":"Julio","gastoProyectado":"40","gastoActual":"90","valorGanado":"50"}
		];
		/*$scope.onClick = function (points, evt) {
			console.log(points, evt);
		};*/
		$scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
		$scope.options = {
			scales: {
			yAxes: [
				{
				id: 'y-axis-1',
				type: 'linear',
				display: true,
				position: 'left'
			},
			{
				id: 'y-axis-2',
				type: 'linear',
				display: true,
				position: 'right'
			}
			]
		}
		};
	}

    angular
	.module(app.name)
	.controller('RecursoDetalleController', RecursoDetalleController);

    RecursoDetalleController.$inject = ['$scope', '$state','toaster','$log','RecursoService'];

})();