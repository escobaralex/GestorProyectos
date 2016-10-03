/**
 * hasPermission
 *
 * @description :: Se crea para validar permisos del usuarios a los modulos
 * Se convierte la accion realizada a los metodos del blueprint de Sails (metodos por defecto)
 * a los considerados en perfilamiento y roles del usuario.
 */

module.exports = function (req, res, next) {  
  var verb = req.method;
  var method = req.options.action;
  
  var _userId = req.token.id;
  var _module = req.options.controller;    
  var _action = null;
    
  // Valido que el verbo sea consistente con el metodo
  if((method == "create" || method == "add" ) && verb == "POST")
    _action = "add";

  if((method == "find" || method == "findOne" ) && verb == "GET")
    _action = "view";

  if(method == "update" && verb == "PUT")
    _action = "renow";

  if((method == "remove" || method == "destroy" ) && verb == "DELETE")
    _action = "remove";

  if(!_action || null == _action)
    return res.json(401, {err: 'Error al intentar verificar los permisos del usuario'});
    
  User.query({
    text: "CALL HAS_PERMISSION($1,$2)",
    values: [ _userId, _module ]
  }, function(err, result) {
    if(!result || null == result || result.length == 0 || result[0][_action])
      return res.json(401, {err: 'No cuenta con permisos para realizar esta acción.'});
    
    next();
  });
};