/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 **/
module.exports = {
  index: function (req, res) {
    var email = req.param('email');
    var password = req.param('password');

    if (!email || !password) {
      return res.json(401, {err: 'email and password required'});
    }

    User.findOne({email: email}, function (err, user) {
        if (!user) {
            return res.json(401, {err: 'invalid email or password'});
        }
        if(User.comparePassword(password, user)) {
            return res.json({
                user: user,
                token: jwToken.issue({id : user.id })
            });
        }        
        return res.json(403, {err: 'invalid email or password'});
    })
  }
};
/*
var passport = require('passport');

module.exports = {
	
	_config: {
        actions: false,
        shortcuts: false,
        rest: false
    },

    login: function(req, res) {
        passport.authenticate('local', function(err, user, info) {
            if ((err) || (!user)) {
                return res.send({
                    message: info.message,
                    user: user
                });
            }
            req.logIn(user, function(err) {
                if (err) res.send(err);
                return res.send({
                    message: info.message,
                    user: user
                });
            });

        })(req, res);
    },

    logout: function(req, res) {
        req.logout();
        res.redirect('/');
    }
    
};
*/