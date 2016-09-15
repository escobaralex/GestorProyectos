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

    Validar si cuenta con los permisos
  */
  if (req.headers && req.headers.authorization) {
    next();
  } else {
    return res.json(401, {err: 'No cuenta con los permisos para esta acción.'});
  }
};