(function () {
    'use strict';
    function MaterialListarController($scope, $state,toaster,$uibModal,$log,MaterialService) {
        $scope.gridMaterialesListar = {
			enableRowSelection: true, 
			enableRowHeaderSelection: false,
			enableColumnMenus: true,
			multiSelect: false,
			columnDefs: [
			            { name: 'codigo'},
			            { name: 'tipo'},
			            { name: 'categoria'}
			           ]
		};
		$scope.gridMaterialesListarData = [
			{"codigo":"12AB","tipo":"Excavador","categoria":"Experimentado"},
			{"codigo":"12AB","tipo":"RETROEXCAVADORA","categoria":"Maquina"},
			{"codigo":"12AB","tipo":"PERFORADORA","categoria":"Maquina"}
		];
		
		$scope.MaterialesCrearClick = function(){
			var modalInstance = $uibModal.open({
				animation: false,
				templateUrl: 'templates/Materiales/DialogCreaMaterial.html',
				controller: 'DialogCreaMaterialController',
				size: 'md',
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
	.controller('MaterialListarController', MaterialListarController);

    MaterialListarController.$inject = ['$scope', '$state','toaster','$uibModal','$log','MaterialService'];

})();