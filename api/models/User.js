/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
//var bcrypt = require('bcryptjs');
var simplecrypt = require("simplecrypt");

var sc = simplecrypt({
  password : "75ec09e2adc0c3d5629cc",
  salt : "8cf25258d0882a66887943a9d5b7048f9b82b3852a9b19aefce02430497c9f9f"
 });
      
module.exports = {
  //autoPK: false,
  attributes: {
  	/*id:{
  	  type:'integer',
      autoIncrement:true,
  	  primaryKey: true,
      unique: true,
      columnName: 'userId'	  
  	},*/
  	firstname: {
      type: 'string',
      required:true,
      size:50
    },
    secondname: {
      type: 'string',
      defaultsTo: '',
      size:50
    },
    lastname: {
      type: 'string',
      required:true,
      size:50
    },
    secondlastname: {
    	type:'string',
      defaultsTo: '',
		  size:50
    },
    email:{
    	type:'email',
    	required:true,
    	unique: true,
    	size:80
    },
    username: {
	    type: 'string',
	    required:true,
	    unique: true,
	    size:50
  	},
    password: {
      type: 'string',
      required:true,
      minLength: 6,
      size:200
    },
    status: {
      type:'boolean',
      defaultsTo: true,
    },
    phone: {
      type: 'string',
      size:30
    },
    mobilephone:{
      type: 'string',
      size:30
    },
    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },
  beforeCreate: function(user, cb) {
    try {     
      user.password = sc.encrypt(user.password);
      cb(); 
    } catch (error) {
      console.log(error);
      cb(error);
    }
    /*bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) {
                console.log(err);
                cb(err);
            } else {
                user.password = hash;
                cb();
            }
        });
    });*/

  }  
};

