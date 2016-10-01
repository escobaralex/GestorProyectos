/**
 * Role.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        ::   http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	name: {
      type: 'string',
      required:true,
      unique:true,
      size:60
    },
    description: {
      type: 'string',
      size:300
    },    
    reportTo: {
      model: 'role',      
    },
    profiles:{
    	collection: 'profile',
    	via: 'roles',
      through: 'roleprofile'
    },
    modules:{
      collection: 'module',
      via: 'roles',
      through: 'rolemodule'
    }
  },
  tableName:"aut_role"
};