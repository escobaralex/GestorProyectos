/**
 * Module.js
 *
 * @description :: Modulos del sistema
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	name: {
      type: 'string',
      required:true,
      unique: true,
      size:50
    },
    controller: {
      type: 'string',
      required:true,
      size:50
    },
    description: {
      type: 'string',
      defaultsTo: 'Sin descripción',
      size:300
    }
  },
   tableName: 'aut_module'
};

