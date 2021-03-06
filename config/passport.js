var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy;
//bcrypt = require('bcryptjs');
var simplecrypt = require("simplecrypt");

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findOne({ id: id } , function (err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {

    User.findOne({ email: email }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }

      ///
      

      var sc = simplecrypt({
      password : "75ec09e2adc0c3d5629cc",
      salt : "8cf25258d0882a66887943a9d5b7048f9b82b3852a9b19aefce02430497c9f9f"
    });

      var pass = sc.encrypt(password);

      if (pass != user.password)
          return done(null, false, {
            message: 'Invalid Password'
          });

      var returnUser = {
        email: user.email,
        createdAt: user.createdAt,
        id: user.id
      };
      return done(null, returnUser, {
        message: 'Logged In Successfully'
      });
      ///

      /*bcrypt.compareSync(password, user.password, function (err, res) {
          if (!res)
            return done(null, false, {
              message: 'Invalid Password'
            });
          var returnUser = {
            email: user.email,
            createdAt: user.createdAt,
            id: user.id
          };
          return done(null, returnUser, {
            message: 'Logged In Successfully'
          });
        });*/
    });
  }
));