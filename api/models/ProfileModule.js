/**
 * ProfileModule.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {  
  tableName:"aut_profile_module",
  attributes: {
  	profile: {
        model: 'profile',    
    },
    module: {
        model: 'module',      
    },add: {
      type:'boolean',
      defaultsTo: false,
    },
    view: {
      type:'boolean',
      defaultsTo: false,
    },
    renow: {
      type:'boolean',
      defaultsTo: false,
    },
    remove: {
      type:'boolean',
      defaultsTo: false,
    },
    export: {
      type:'boolean',
      defaultsTo: false,
    }
  }
};

