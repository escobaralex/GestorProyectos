/**
 * hasPermission
 *
 * @description :: Policy to check if user is authorized with JSON web token
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Policies
 */

module.exports = function (req, res, next) {
  //TODO:
  /*
    _Obtener el verbo
    _Obtener el controller que esta solicitando
    _Obtener la acción
    _Obtener Id de Usuario

    Validar si cuenta con los permisos  */
  var verb = req.method;
  var module = req.options.controller;
  var method = req.options.action;  
  var usuarioId = req.token.id;
  var result = false;
  
  //TODO: Validar que el verbo sea consistente con el metodo
  var permission = null;

  if((method == "create" || method == "add" ) && verb == "POST")
    permission = "add";

  if((method == "find" || method == "findOne" ) && verb == "GET")
    permission = "view";

  if(method == "update" && verb == "PUT")
    permission = "renow";

  if((method == "remove" || method == "destroy" ) && verb == "DELETE")
    permission = "remove";

  if(!permission)
    return res.json(401, {err: 'Error al intentar verificar los permisos del usuario'});
    
    

};