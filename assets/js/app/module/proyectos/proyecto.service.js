(function () {

    function ProyectoService($http, $q, $log) {
        var proyectosDummys = [{
		              		"numero":"1",
		              		"nomCliente":"Inmobiliaria los Montes",
		              		"asunto":"Excavación Red Subterránea",
							"fecha":"2016-05-31",
							"estado":"Enviada Cliente",
							"monto":"$  8.000.000"
		                  },
		                  {
		              		"numero":"2",
		              		"nomCliente":"Cliente AB",
		              		"asunto":"Urbanización Subterránea",
							"fecha":"2016-05-31",
							"estado":"Aprobada",
							"monto":"$ 13.000.000"
		                  },
		                  {
		              		"numero":"3",
		              		"nomCliente":"Cliente KP",
		              		"asunto":"Mantenimiento Redes Eléctricas",
		              		"fecha":"2016-05-31",
							"estado":"Creada",
							"monto":"$  3.000.000"
		                  }
	                  ];
	
        
        function listar() {
            if(!app.callApi) return proyectosDummys;

            var deferred = $q.defer();
            
            $http.get(app.urlServer + 'proyecto')
            .success(function (response) {                
                deferred.resolve(response);                
            }).error(function (err, status) {                
                deferred.reject(err);
            });
            
            return deferred.promise;
        }

        function crear(proyecto) {
            
            var deferred = $q.defer();
            
            $http.post(app.urlServer + 'proyecto', proyecto)
            .success(function (response) {                
                deferred.resolve(response);                
            }).error(function (err, status) {                
                deferred.reject(err);
            });
            
            return deferred.promise;
        }

        function obtener(id) {
            var deferred = $q.defer();
            
            $http.get(app.urlServer + 'proyecto', id)
            .success(function (response) {                
                deferred.resolve(response);                
            }).error(function (err, status) {                
                deferred.reject(err);
            });
            
            return deferred.promise;
        }

        function actualizar(proyectoid){
            var deferred = $q.defer();
            
            $http.put(app.urlServer + 'proyecto', proyecto)
            .success(function (response) {                
                deferred.resolve(response);                
            }).error(function (err, status) {                
                deferred.reject(err);
            });
            
            return deferred.promise;            
        }

        function eliminar(id){
            var deferred = $q.defer();
            
            $http.delete(app.urlServer + 'proyecto', id)
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
    .service('ProyectoService', ProyectoService);

    ProyectoService .$inject = ['$http', '$q', '$log'];

})();