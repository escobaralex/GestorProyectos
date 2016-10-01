/**
 * RoleProfile.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'aut_role_profile',
  attributes: {
    role: {
        model: 'role',    
    },
    profile: {
        model: 'profile',      
    }
  }
};

