/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {
  
  Cliente.count().exec(function(err, count) {
    if(err) {
      sails.log.error('Already have data.');
      return cb(err);
    }
    if(count > 0) return cb();
    
    var dummy = [
	
    ]
		Cliente.create(dummy).exec(cb);
	});
  
  Compra.count().exec(function(err, count) {
    if(err) {
      sails.log.error('Already have data.');
      return cb(err);
    }
    if(count > 0) return cb();
    
    var dummy = [
    
    ]
		Compra.create(dummy).exec(cb);
	});
  
  Finanza.count().exec(function(err, count) {
    if(err) {
      sails.log.error('Already have data.');
      return cb(err);
    }
    if(count > 0) return cb();
    
    var dummy = [
    
    ]
		Finanza.create(dummy).exec(cb);
	});
  
  Material.count().exec(function(err, count) {
    if(err) {
      sails.log.error('Already have data.');
      return cb(err);
    }
    if(count > 0) return cb();
    
    var dummy = [
    
    ]
		Material.create(dummy).exec(cb);
	});
  
  Module.count().exec(function(err, count) {
    if(err) {
      sails.log.error('Already have data.');
      return cb(err);
    }
    if(count > 0) return cb();
    
    var dummy = [
    
    ]
		Module.create(dummy).exec(cb);
	});

  Presupuesto.count().exec(function(err, count) {
    if(err) {
      sails.log.error('Already have data.');
      return cb(err);
    }
    if(count > 0) return cb();
    
    var dummy = [
    {
      "nomCliente":"Inmobiliaria los Montes",
      "asunto":"Excavación Red Subterránea",
      "fecha":new Date(),
      "estado":"Enviada Cliente",
      "monto":8000000
    },
    {
      "nomCliente":"Cliente AB",
      "asunto":"Urbanización Subterránea",
      "fecha":new Date(),
      "estado":"Aprobada",
      "monto":13000000
    },
    {
      "nomCliente":"Cliente KP",
      "asunto":"Mantenimiento Redes Eléctricas",
      "fecha": new Date(),
      "estado":"Creada",
      "monto":3000000
    }
    ]

		Presupuesto.create(dummy).exec(cb);
	});
  
  Proveedor.count().exec(function(err, count) {
    if(err) {
      sails.log.error('Already have data.');
      return cb(err);
    }
    if(count > 0) return cb();
    
    var dummy = [
    
    ]
		Proveedor.create(dummy).exec(cb);
	});
  
  Proyecto.count().exec(function(err, count) {
    if(err) {
      sails.log.error('Already have data.');
      return cb(err);
    }
    if(count > 0) return cb();
    
    var dummy = [
    
    ]
		Proyecto.create(dummy).exec(cb);
	});
  
  Recurso.count().exec(function(err, count) {
    if(err) {
      sails.log.error('Already have data.');
      return cb(err);
    }
    if(count > 0) return cb();
    
    var dummy = [
    
    ]
		Recurso.create(dummy).exec(cb);
	});
  
  Role.count().exec(function(err, count) {
    if(err) {
      sails.log.error('Already have data.');
      return cb(err);
    }
    if(count > 0) return cb();
    
    var dummy = [
    
    ]
		Role.create(dummy).exec(cb);
	});

	User.count().exec(function(err, count) {
    if(err) {
      sails.log.error('Already have data.');
      return cb(err);
    }
    if(count > 0) return cb();

    var dummy = [{
      "firstname" : "Alex",
      "lastname" : "Escobar",
      "email" : "aescobar@tadis.cl",
      "username" : "AER",
      "secondname" : "",
      "secondlastname" : "",
      "status": true,
      "password" : "123456"
    },
    {
      "firstname" : "Jorge",
      "lastname" : "Guiñez",
      "email" : "jguinez@nemesoft.com",
      "username" : "jguinez",
      "secondname" : "",
      "secondlastname" : "",
      "status": true,
      "password" : "123456"
    }
    ]
		User.create(dummy).exec(cb);
	});
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
