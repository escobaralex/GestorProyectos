/**
 * Presupuesto.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

  	/*numero: {
      type: 'integer',
      autoIncrement: true
    },*/
    nomCliente: {
      type: 'string',
      size:50,
      required:true,
    },
    asunto: {
      type: 'string',      
      size:150
    },
    fecha: {
    	type:'datetime',
		  required:true
    },
    estado:{
    	type:'string',
    	required:true,
    	size:50
    },
    monto: {
	    type: 'integer',
	    required:true
  	}
  }
};

