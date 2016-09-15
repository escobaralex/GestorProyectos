(function () {
    'use strict';    
    angular.module(app.name,
        	[
        	'ngTouch',
        	'ngAnimate',
        	'ui.bootstrap',
        	'ui.router',
        	'ui.grid',
        	'ui.grid.selection',
        	'chart.js',
        	'gantt',
        	'ngSanitize',
        	'ngMessages',
        	'ui.bootstrap.datetimepicker',
        	'ui.select',
			'angular-jwt',
			'cfp.loadingBar',
			'toaster'
        	]	    
	)
    .constant('ngAuthSettings', {
        urlServer: app.urlServer,
        clientId: 'ngAuthApp'
    })
    .config(function ($locationProvider, $urlRouterProvider, $stateProvider, $httpProvider,$controllerProvider) {
        
        //$translateProvider.preferredLanguage('es');
        $locationProvider.html5Mode(false);
        $urlRouterProvider.otherwise("/login");

        $stateProvider
        .state('PresupuestosListar', {
	      url: "/PresupuestosListar",
	      views: {
                "nav": {
                    templateUrl: "templates/Navbar.html"               
                },
                "content": {
                    templateUrl: "templates/Presupuestos/PresupuestosListar.html",
                    controller : "PresupuestoListarController"
                }
        	}
	    })
	    .state('PresupuestosCrear', {
	      url: "/PresupuestosCrear",
	      views: {
                "nav": {
                    templateUrl: "templates/Navbar.html"
                },
                "content": {
                    templateUrl: "templates/Presupuestos/PresupuestosCrear.html",
                    controller : "PresupuestoCrearController"
                }
          	}
	    })
	    .state('PresupuestosDetalle', {
	      url: "/PresupuestosDetalle",
	      views: {
                "nav": {
                    templateUrl: "templates/Navbar.html"
                },
                "content": {
                    templateUrl: "templates/Presupuestos/PresupuestosDetalle.html",
                    controller : "PresupuestoDetalleController"
                }
            }
	    })
	    .state('ProyectosListar', {
	        url: "/ProyectosListar",
	        views: {
                "nav": {
                    templateUrl: "templates/Navbar.html"
                },
                "content": {
            		templateUrl: "templates/Proyectos/ProyectosListar.html",
                    controller : "ProyectoListarController"
                }
          	}	        
	    })
	    .state('ProyectosDetalle', {
	        url: "/ProyectosDetalle",
	        views: {
                "nav": {
                    templateUrl: "templates/Navbar.html"
                },
                "content": {
                    templateUrl: "templates/Proyectos/ProyectosDetalle.html",
                    controller : "ProyectoDetalleController"
                }
            }	        
	    })
	    .state('Compras', {
	        url: "/Compras",
	        views: {
                "nav": {
                    templateUrl: "templates/Navbar.html"
                },
                "content": {
                    templateUrl: "templates/Compras/Compras.html",
                    controller : "CompraListarController"
                }
          	}
	    })
	    .state('FinanzasResumen', {
	        url: "/FinanzasResumen",
	        views: {
                "nav": {
                    templateUrl: "templates/Navbar.html"
                },
                "content": {
                    templateUrl: "templates/Finanzas/FinanzasResumen.html",
                    controller : "FinanzaResumenController"
                }
          	}
	    })
	    .state('ClientesListar', {
	        url: "/ClientesListar",
	        views: {
                "nav": {
                    templateUrl: "templates/Navbar.html"
                },
                "content": {
                    templateUrl: "templates/Clientes/ClientesListar.html",
                    controller : "ClienteListarController"
                }
          	}
	    })
	    .state('ProveedoresListar', {
	        url: "/ProveedoresListar",
	        views: {
                "nav": {
                    templateUrl: "templates/Navbar.html"
                },
                "content": {
                    templateUrl: "templates/Proveedores/ProveedoresListar.html",
                    controller : "ProveedorListarController"
                }
            }
	    })
	    .state('RecursosListar', {
	        url: "/RecursosListar",
	        views: {
                "nav": {
                    templateUrl: "templates/Navbar.html"
                },
                "content": {
                    templateUrl: "templates/Recursos/RecursosListar.html",
                    controller : "RecursoListarController"
                }
            }	        
	    })
	    .state('MaterialesListar', {
	        url: "/MaterialesListar",
	        views: {
                "nav": {
                    templateUrl: "templates/Navbar.html"
                },
                "content": {
                    templateUrl: "templates/Materiales/MaterialesListar.html",
                    controller : "MaterialListarController"
                }
          	}
	    })
        .state('UsuariosListar', {
	        url: "/UsuariosListar",
	        views: {
                "nav": {
                    templateUrl: "templates/Navbar.html"
                },
                "content": {
                    templateUrl: "templates/Usuarios/UsuariosListar.html",
                    controller : "UsuarioListarController"
                }
            }	        
	    })
	    .state('login', {
            url: "/login",
            views: {
                "nav": {
                    template: "<br>"
                },
                "content": {
                    templateUrl: "js/app/module/authorization/login.html",
                }
          	}           
        })
        .state('logout', {
            url: "/logout",
            views: {
                "nav": {
                    template: "<br>"
                },
                "content": {
                    templateUrl: "js/app/module/authorization/logout.html",
                }
        	}
        })
        .state('no-enrutar', {
            url: "/no-enrutar",
            template: "<p>No enrutar</p>"
        });

        $httpProvider.interceptors.push('AuthInterceptorService');
    })
    .run(['$state', '$rootScope', 'AuthService', '$log', 'cfpLoadingBar', '$timeout', 'i18nService',
        function ($state, $rootScope, AuthService, $log, cfpLoadingBar, $timeout, i18nService) {
            i18nService.setCurrentLang('es');
            AuthService.fillAuthData();

            $rootScope.$on('$stateChangeStart',
                function (event, toState, toParams, fromState, fromParams) {
                    if(!AuthService.isAuthenticated()){
                        //event.preventDefault();
                        //toState = 'login';
                    }
                    if (toState.name == 'no-enrutar') 
                        event.preventDefault();
                    else 
                        cfpLoadingBar.start();                    
            });
            $rootScope.$on('$stateChangeSuccess', function () {
                $timeout(function () {
                    cfpLoadingBar.complete();
                }, 250);
            })
        }])
    .directive('onlyNumbers', function () {
        return {
            restrict: 'A',
            link: function (scope, elm, attrs, ctrl) {
                elm.on('keydown', function (event) {
                    //var tecla = String.fromCharCode(event.which).toLowerCase();
                    if (event.which == 190 || event.which == 110) {
                        if (elm[0].value.length == 0) {
                            return false;
                        } else if (elm[0].value.indexOf('.') > -1) {
                            return false;
                        }
                    } else if (event.which == 64 || event.which == 16) {
                        // to allow numbers  
                        return false;
                    } else if (event.which >= 48 && event.which <= 57) {
                        // to allow numbers  
                        return true;
                    } else if (event.which >= 96 && event.which <= 105) {
                        // to allow numpad number  
                        return true;
                    } else if ([8, 9, 13, 27, 37, 38, 39, 40].indexOf(event.which) > -1) {
                        // to allow backspace, Tab, enter, escape, arrows  
                        return true;
                    } else {
                        event.preventDefault();
                        // to stop others  
                        return false;
                    }
                });
            }
        }
    })
    .directive('onlyInterger', function () {
        return {
            restrict: 'A',
            link: function (scope, elm, attrs, ctrl) {
                elm.on('keydown', function (event) {
                    //var tecla = String.fromCharCode(event.which).toLowerCase();
                    //if (tecla == "¾") {
                    //    if (elm[0].value.length == 0) {
                    //        return false;
                    //    } else if (elm[0].value.indexOf('.') > -1) {
                    //        return false;
                    //    }
                    //} else
                    if (event.which == 64 || event.which == 16) {
                        // to allow numbers  
                        return false;
                    } else if (event.which >= 48 && event.which <= 57) {
                        // to allow numbers  
                        return true;
                    } else if (event.which >= 96 && event.which <= 105) {
                        // to allow numpad number  
                        return true;
                    } else if ([8, 9, 13, 27, 37, 38, 39, 40].indexOf(event.which) > -1) {
                        // to allow backspace, Tab, enter, escape, arrows  
                        return true;
                    } else {
                        event.preventDefault();
                        // to stop others  
                        return false;
                    }
                });
            }
        }
    })
    .directive('ngMin', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elem, attr, ctrl) {
                scope.$watch(attr.ngMin, function () {
                    ctrl.$setViewValue(ctrl.$viewValue);
                });
                var minValidator = function (value) {
                    var min = Number(attr.ngMin || 0) || 0;
                    if (!isEmpty(value) && value < min) {
                        ctrl.$setValidity('ngMin', false);
                        return undefined;
                    } else {
                        ctrl.$setValidity('ngMin', true);
                        return value;
                    }
                };

                ctrl.$parsers.push(minValidator);
                ctrl.$formatters.push(minValidator);
            }
        };
    });
    
})();

angular.module(app.name).controller('DialogAddResourceController', function ($scope, $uibModalInstance){
	$scope.ok = function(){
		$uibModalInstance.close('');
	};
	$scope.cancel = function(){
		$uibModalInstance.close('');
	};
});

angular.module(app.name).controller('DialogCreaMaterialController', function ($scope, $uibModalInstance){
	$scope.ok = function(){
		$uibModalInstance.close('');
	};
	$scope.cancel = function(){
		$uibModalInstance.close('');
	};
});

angular.module(app.name).controller('DialogCreaClienteController', function ($scope, $uibModalInstance){
	$scope.ok = function(){
		$uibModalInstance.close('');
	};
	$scope.cancel = function(){
		$uibModalInstance.close('');
	};
});

angular.module(app.name).controller('DialogCreaProveedorController', function ($scope, $uibModalInstance){
	$scope.ok = function(){
		$uibModalInstance.close('');
	};
	$scope.cancel = function(){
		$uibModalInstance.close('');
	};
});

angular.module(app.name).controller('DialogCreaCompraController', function ($scope, $uibModalInstance){
	
	$scope.gridAddCompras = {
			enableRowSelection: true, 
			enableRowHeaderSelection: false,
			enableColumnMenus: true,
			multiSelect: false,
			columnDefs: [
			            { name: 'nroItem'},
			            { name: 'nombre'},
			            { name: 'unidad' },
			            { name: 'cantidad' },
			            { name: 'valor' }
			           ]
	};
	
	$scope.gridAddCompras.data = [
									{"nroItem":"1","nombre":"Producto 1","unidad":"Kilos","cantidad":"500","valor":"$ 1.500.000"},
									{"nroItem":"1","nombre":"Producto 2","unidad":"Metros","cantidad":"40","valor":"$ 2.300.000"},
									{"nroItem":"1","nombre":"Producto 3","unidad":"Metros Cúbicos","cantidad":"50","valor":"$ 3.200.000"}
	                              ];
	
	
	
	$scope.ok = function(){
		$uibModalInstance.close('');
	};
	$scope.cancel = function(){
		$uibModalInstance.close('');
	};
});