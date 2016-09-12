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
  Role.count().exec(function(err, count) {
    if(err) sails.log.error('error al contar data Role.');

    if(count > 0) sails.log.error('Ya existen Role.');
  
    Role.create([
        {"name": "Gerente General","reportTo" : 0},
        {
          "name": "Gerente Comercial",
          "reportTo" : 1,
        },
        {
          "name": "Gerente Finanzas",
          "reportTo" : 1,
        },
        {
          "name": "Gerente Operaciones",
          "reportTo" : 1,
        },
        {
          "name": "Vendedor",
          "reportTo" : 2,
        },
        {
            "name": "Contador",
            "reportTo" : 3,
        },
        {
            "name": "Jefe Bodega",
              "reportTo" : 4,
        }
      ]).exec(cb);    
      cb();
	});

  Cliente.count().exec(function(err, count) {
    if(err) sails.log.error('error al contar data cliente.');

    if(count > 0) sails.log.error('Ya existen clientes.');
        
		Cliente.create([]).exec(cb);
    cb();
	});
  
  Compra.count().exec(function(err, count) {
    if(err) sails.log.error('error al contar data compra.');

    if(count > 0) sails.log.error('Ya existen Compras.');

		Compra.create([]).exec(cb);
    cb();
	});
  
  Finanza.count().exec(function(err, count) {
    if(err) sails.log.error('error al contar data Finanza.');

    if(count > 0) sails.log.error('Ya existen Finanza.');

		Finanza.create([]).exec(cb);
    cb();
	});
  
  Material.count().exec(function(err, count) {
    if(err) sails.log.error('error al contar data Material.');

    if(count > 0) sails.log.error('Ya existen Material.');
    
		Material.create([]).exec(cb);
    cb();
	});

  Presupuesto.count().exec(function(err, count) {
    if(err) sails.log.error('error al contar data Presupuesto.');

    if(count > 0) sails.log.error('Ya existen Presupuesto.');
    
    Presupuesto.create([
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
    ]).exec(cb);
		cb();
	});
  
  Proveedor.count().exec(function(err, count) {
    if(err) sails.log.error('error al contar data Proveedor.');

    if(count > 0) sails.log.error('Ya existen Proveedor.');
    
		Proveedor.create([]).exec(cb);
    cb();
	});
  
  Proyecto.count().exec(function(err, count) {
    if(err) sails.log.error('error al contar data Proyecto.');

    if(count > 0) sails.log.error('Ya existen Proyecto.');

		Proyecto.create([]).exec(cb);
    cb();
	});
  
  Recurso.count().exec(function(err, count) {
    if(err) sails.log.error('error al contar data Recurso.');

    if(count > 0) sails.log.error('Ya existen Recurso.');

		Recurso.create([]).exec(cb);
    cb();
	});

  Module.count().exec(function(err, count) {
    if(err) sails.log.error('error al contar data Module.');

    if(count > 0) sails.log.error('Ya existen Module.');
        
		Module.create([
      {
        "name" : "Presupuestos",
        "controller": "presupuesto"
      },
      {
        "name" : "Proyectos",
        "controller": "proyecto"
      },
      {
        "name" : "Compras",
        "controller": "compra"
      },
      {
        "name" : "Finanzas",
        "controller": "finanza"
      },
      {
        "name" : "Materiales",
        "controller": "material"
      },
      {
        "name" : "Clientes",
        "controller": "cliente"
      },
      {
        "name" : "Proveedores",
        "controller": "proveedor"
      },
      {
        "name" : "Recursos",
        "controller": "recurso"
      },
      {
        "name" : "Usuarios",
        "controller": "user"
      }
    ]).exec(cb);
    cb();
	});

	User.count().exec(function(err, count) {
    if(err) sails.log.error('error al contar data User.');

    if(count > 0) sails.log.error('Ya existen User.');

    Role.findOne(
      {name:'Gerente General'}
    ).exec(function(err,rol){
      
      User.create([
        {
          "firstname" : "Alex",
          "lastname" : "Escobar",
          "email" : "aescobar@tadis.cl",
          "username" : "AER",
          "secondname" : "",
          "secondlastname" : "",
          "status": true,
          "password" : "123456",
          "role": rol
       },
       {
        "firstname" : "Jorge",
        "lastname" : "Guiñez",
        "email" : "jguinez@nemesoft.com",
        "username" : "jguinez",
        "secondname" : "",
        "secondlastname" : "",
        "status": true,
        "password" : "123456",
        "role": rol
        }
      ]).exec(cb);
    });
  });
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
