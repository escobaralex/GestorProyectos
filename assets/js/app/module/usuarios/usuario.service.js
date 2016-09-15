(function () {

    function UsuarioService($http, $q, $log) {
        var usuariosDummys = [{
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
            if(!app.callApi) return recursosDummys;
            var deferred = $q.defer();
            
            $http.get(app.urlServer + 'user')
            .success(function (response) {                
                deferred.resolve(response);                
            }).error(function (err, status) {                
                deferred.reject(err);
            });
            
            return deferred.promise;
        }

        function crear(user) {
            
            var deferred = $q.defer();
            
            $http.post(app.urlServer + 'user/create', user)
            .success(function (response) {                
                deferred.resolve(response);                
            }).error(function (err, status) {                
                deferred.reject(err);
            });
            
            return deferred.promise;
        }

        function obtener(id) {

            var deferred = $q.defer();
            
            $http.get(app.urlServer + 'user', id)
            .success(function (response) {                
                deferred.resolve(response);                
            }).error(function (err, status) {                
                deferred.reject(err);
            });
            
            return deferred.promise;
        }

        function eliminar(id){
            var deferred = $q.defer();
            
            $http.delete(app.urlServer + 'user', id)
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
    .service('UsuarioService', UsuarioService);

    UsuarioService .$inject = ['$http', '$q', '$log'];

})();