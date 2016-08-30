(function () {

    function PresupuestoService($http, $q, $log) {
        var presupuestosDummy = [{
		              		"id":"1",
		              		"nomCliente":"Inmobiliaria los Montes",
		              		"asunto":"Excavación Red Subterránea",
							"fecha":"2016-05-31",
							"estado":"Enviada Cliente",
							"monto":"$  8.000.000"
		                  },
		                  {
		              		"id":"2",
		              		"nomCliente":"Cliente AB",
		              		"asunto":"Urbanización Subterránea",
							"fecha":"2016-05-31",
							"estado":"Aprobada",
							"monto":"$ 13.000.000"
		                  },
		                  {
		              		"id":"3",
		              		"nomCliente":"Cliente KP",
		              		"asunto":"Mantenimiento Redes Eléctricas",
		              		"fecha":"2016-05-31",
							"estado":"Creada",
							"monto":"$  3.000.000"
		                  }
	                  ];

        function listar() {
            var deferred = $q.defer();
            if(app.callApi){            
                $http.get(app.urlServer + 'presupuesto')
                .success(function (response) {                
                    deferred.resolve(response);                
                }).error(function (err, status) {                
                    deferred.reject(err);
                });            
            }else{
                deferred.resolve(presupuestosDummy);
            }
            return deferred.promise;
        }

        function crear(presupuesto) {
            
            var deferred = $q.defer();
            
            $http.post(app.urlServer + 'presupuesto', presupuesto)
            .success(function (response) {                
                deferred.resolve(response);                
            }).error(function (err, status) {                
                deferred.reject(err);
            });
            
            return deferred.promise;
        }

        function obtener(id) {
            
            var deferred = $q.defer();
            
            $http.get(app.urlServer + 'presupuesto', id)
            .success(function (response) {                
                deferred.resolve(response);                
            }).error(function (err, status) {                
                deferred.reject(err);
            });
            
            return deferred.promise;
        }

        function actualizar(presupuesto){
            
            var deferred = $q.defer();
            
            $http.put(app.urlServer + 'presupuesto', presupuesto)
            .success(function (response) {                
                deferred.resolve(response);                
            }).error(function (err, status) {                
                deferred.reject(err);
            });
            
            return deferred.promise;            
        }

        function eliminar(id){
            
            var deferred = $q.defer();
            
            $http.delete(app.urlServer + 'presupuesto', id)
            .success(function (response) {                
                deferred.resolve(response);                
            }).error(function (err, status) {                
                deferred.reject(err);
            });
            
            return deferred.promise;            
        }

        this.listar = listar;
        this.obtener = obtener;
        this.crear = crear;
        this.actualizar = actualizar;
        this.eliminar = eliminar;
    }

    angular.module(app.name)
    .service('PresupuestoService', PresupuestoService);

    PresupuestoService.$inject = ['$http', '$q', '$log'];

})();