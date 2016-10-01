/**
 * Profile.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "aut_profile",
  attributes: {
  	name: {
      type: 'string',
      required:true,
      unique:true,
      size:60
    },
    description: {
      type: 'string',
      defaultsTo: '',
      size:250
    },
    roles:{
    	collection: 'role',
    	via: 'profiles',
      through: 'roleprofile'
    },
    modules:{
    	collection: 'module',
    	via: 'profiles',
    	through: 'profilemodule'
    }
  }  
};

