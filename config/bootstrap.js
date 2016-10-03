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
var async = require('async');

module.exports.bootstrap = function(cb) {
  
  function dropSP(){
    // El modelo es indiferente para la ejecución directa de querys
    var sqlDropSP = "DROP PROCEDURE `HasPermission`";
    User.query(sqlDropSP, [], function(err, result) {
      if(!result && null == result)
        sails.log.error("Ocurrio un error al borrar el SP de Permisos");
    });
  }

  function init_module(done){
    Module.count().exec(function(err, count) {
      if(err) sails.log.error('error al contar data Module.');
      if(count > 0) sails.log.error('Ya existen Module.');          
      Module.create([
        {"name" : "Presupuestos","controller": "presupuesto"},
        {"name" : "Proyectos", "controller": "proyecto"},
        {"name" : "Compras","controller": "compra"},
        {"name" : "Finanzas","controller": "finanza"},
        {"name" : "Materiales","controller": "material"},
        {"name" : "Clientes","controller": "cliente"},
        {"name" : "Proveedores", "controller": "proveedor"},
        {"name" : "Recursos","controller": "recurso"},
        {"name" : "Usuarios", "controller": "user"}
      ]).exec(done);      
    });
  }

  function init_role(done){
    Role.count().exec(function(err, count) {    
      if(err) sails.log.error('error al contar data Role.');
      if(count > 0) sails.log.error('Ya existen Role.');    
      Role.create([
          {"name": "Gerente General","reportTo" : 0},
          {"name": "Gerente Comercial","reportTo" : 1},
          {"name": "Gerente Finanzas","reportTo" : 1},
          {"name": "Gerente Operaciones","reportTo" : 1},
          {"name": "Vendedor","reportTo" : 2},
          {"name": "Contador","reportTo" : 3},
          {"name": "Jefe Bodega", "reportTo" : 4}
        ]).exec(done);    
	  });
  }
  
  function init_cliente(done){
    Cliente.count().exec(function(err, count) {
      if(err) sails.log.error('error al contar data cliente.');
      if(count > 0) sails.log.error('Ya existen clientes.');          
      Cliente.create([]).exec(done);
    });  
  }
  
  function init_compra(done){
    Compra.count().exec(function(err, count) {
      if(err) sails.log.error('error al contar data compra.');
      if(count > 0) sails.log.error('Ya existen Compras.');
      Compra.create([]).exec(done);      
    });
  }
  
  function init_finanza(done){
    Finanza.count().exec(function(err, count) {
      if(err) sails.log.error('error al contar data Finanza.');
      if(count > 0) sails.log.error('Ya existen Finanza.');
      Finanza.create([]).exec(done); 
    });
  }
 
  function init_material(done){ 
    Material.count().exec(function(err, count) {
      if(err) sails.log.error('error al contar data Material.');
      if(count > 0) sails.log.error('Ya existen Material.');      
      Material.create([]).exec(done);      
    });
  }

  function init_presupuesto(done){
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
      ]).exec(done);
    });
  } 

  function init_proveedor(done){
    Proveedor.count().exec(function(err, count) {
      if(err) sails.log.error('error al contar data Proveedor.');
      if(count > 0) sails.log.error('Ya existen Proveedor.');      
      Proveedor.create([]).exec(done);
    });
  }
  
  function init_proyecto(done){
    Proyecto.count().exec(function(err, count) {
      if(err) sails.log.error('error al contar data Proyecto.');
      if(count > 0) sails.log.error('Ya existen Proyecto.');
      Proyecto.create([]).exec(done);
    });
  }

  function init_recurso(done){
    Recurso.count().exec(function(err, count) {
      if(err) sails.log.error('error al contar data Recurso.');
      if(count > 0) sails.log.error('Ya existen Recurso.');
      Recurso.create([]).exec(done);
    });
  }

  function init_role_module(done){
    RoleModule.count().exec(function(err, count) {
      if(err) sails.log.error('error al contar data RoleModule.');
      if(count > 0) sails.log.error('Ya existen RoleModule.');
      Role.findOne({id:1}).exec(function(err,rol){
        if(rol){
          Module.findOne({id:1}).exec(function(err,modulo){              
            RoleModule.create({
              role : rol,
              module: modulo,
              add :true,
              view: true,
              renow: true,
              remove: true,
              export: false
            }).exec(done);            
          });
        }
      });	
    });
  }

  function init_profile(done){
    Profile.count().exec(function(err, count) {
      if(err) sails.log.error('error al contar data Profile.');
      if(count > 0) sails.log.error('Ya existen Profile.');    
      Role.findOne({id:1}).exec(function(err, rol){
          Profile.create([
            { "name": "Gerente","role" : rol,"descripcion": "Sin descripción" }
          ]).exec(function(err, perfil){
            ProfileModule.count().exec(function(err, count) {
            if(err) sails.log.error('error al contar data ProfileModule.');
            if(count > 0) sails.log.error('Ya existen ProfileModule.');
            
              if(perfil){
                Module.findOne({id:1}).exec(function(err,modulo){ 

                  ProfileModule.create({
                    profile :perfil[0],
                    module: modulo,
                    add :true,
                    view: true,
                    renow: true,
                    remove: true,
                    export: false
                  }).exec(done);                       
                });
              }         
          });
        });
      });
  	});
  }

  function init_role_profile(done){
     RoleProfile.count().exec(function(err, count) {
      if(err) sails.log.error('error al contar data RoleProfile.');
      if(count > 0) sails.log.error('Ya existen RoleProfile.');
      Role.findOne({id:1}).exec(function(err,rol){
        if(rol){
          Profile.findOne({id:1}).exec(function(err,perfil){              
            RoleProfile.create({
              role : rol,
              profile: 1             
            }).exec(done);            
          });
        }
      });	
    });
  }

  function init_usuarios(done){
    User.count().exec(function(err, count) {
      if(err) sails.log.error('error al contar data User.');
      if(count > 0) sails.log.error('Ya existen User.');
      Role.findOne({name:'Gerente General'}).exec(function(err,rol){        
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
        ]).exec(done);
        //done();// Siempre debe pasar por acá
      });
    });
  }

  function setStoreProcedures(done){
    // El modelo es indiferente para la ejecución directa de querys
    var sqlSP = "CREATE DEFINER=`root`@`localhost` PROCEDURE "
      + "`HasPermission`(IN `usuId` INT, IN `controller` VARCHAR(500)) "
      + " NO SQL " 
      + "SELECT "
      + "AUT_USER.id, "
      + "AUT_USER.firstname, "
      + "AUT_USER.lastname, "
      + "AUT_USER.username, "
      + "AUT_USER.status, "
      + "CONCAT('ROLE') as autorizacion, "
      + "AUT_ROLE.name, "
      + "AUT_MODULE.controller, "
      + "AUT_ROLE_MODULE.add, "
      + "AUT_ROLE_MODULE.view, "
      + "AUT_ROLE_MODULE.renow, "
      + "AUT_ROLE_MODULE.remove, "
      + "AUT_ROLE_MODULE.export "
      + "FROM "
      + "AUT_USER, "
      + "AUT_ROLE, "
      + "AUT_ROLE_MODULE, "
      + "AUT_MODULE "
      + "WHERE 1=1 "
      + "AND AUT_USER.ROLE = AUT_ROLE.ID "
      + "AND AUT_ROLE.ID = AUT_ROLE_MODULE.ROLE "
      + "AND AUT_ROLE_MODULE.MODULE = AUT_MODULE.ID "
      + "AND AUT_USER.ID = usuId "
      + "AND AUT_MODULE.CONTROLLER = controller "
      + "UNION ALL "
      + "SELECT  "
      + "AUT_USER.id, "
      + "AUT_USER.firstname, "
      + "AUT_USER.lastname, "
      + "AUT_USER.username, "
      + "AUT_USER.status, "
      + "CONCAT('PROFILE') as autorizacion, "
      + "AUT_PROFILE.name, "
      + "AUT_MODULE.controller, "
      + "AUT_PROFILE_MODULE.add, "
      + "AUT_PROFILE_MODULE.view, "
      + "AUT_PROFILE_MODULE.renow, "
      + "AUT_PROFILE_MODULE.remove, "
      + "AUT_PROFILE_MODULE.export "
      + "FROM  "
      + "AUT_USER, "
      + "AUT_ROLE, "
      + "AUT_ROLE_PROFILE, "
      + "AUT_PROFILE, "
      + "AUT_PROFILE_MODULE, "
      + "AUT_MODULE "
      + "WHERE 1=1 "
      + "AND AUT_USER.ROLE = AUT_ROLE.ID "
      + "AND AUT_ROLE.ID = AUT_ROLE_PROFILE.ROLE "
      + "AND AUT_ROLE_PROFILE.PROFILE = AUT_PROFILE.ID "
      + "AND AUT_PROFILE.ID = AUT_PROFILE_MODULE.PROFILE "
      + "AND AUT_PROFILE_MODULE.MODULE = AUT_MODULE.ID "
      + "AND AUT_USER.ID = usuId "
      + "AND AUT_MODULE.CONTROLLER = controller";

      Role.query(sqlSP, [], function(err, result) {
      if(!result && null == result)
        sails.log.error(err);
    
    });
  }

  // Mantener con mucho cuidado el orden de los metodos para que no afecte la orquestacion de las inserciones
  async.parallel([
    //dropSP,
    init_module,
    init_role,
    //init_cliente,// Por agregar data dummys
    //init_compra,// Por agregar data
    //init_finanza,
    //init_material,   
    init_presupuesto,    
    //init_proveedor,
    //init_proyecto,
    init_role_module,
    init_profile,
    //init_recurso,    
    init_usuarios,
    init_role_profile,
    setStoreProcedures
  ], cb);
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  //cb();
};
