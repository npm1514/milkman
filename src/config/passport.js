var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/userModel.js');

module.exports = function(passport) {

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });
    passport.use('local-signup', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
    (req, email, password, done) => {
        process.nextTick(() => {
          User.findOne({'email': email}, (err, user) => {
              if (err){
                return done(null, false, { message: err });
              }
              if (user) {
                if (user.validPassword(password)) {
                  return done(null, user);
                } else {
                  return done(null, false, req.flash('Incorrect password.'));
                }
              } else {
                if(Object.keys(req.body).length == 2){
                  return done(null, false, { message: "No account" });
                } else {
                  var newUser = new User(req.body);
                  newUser.email    = email;
                  newUser.password = newUser.generateHash(password);
                  newUser.save((err) => {
                      if (err) {
                        return done(null, false, { message: 'Missing Information' });
                      };
                      return done(null, newUser, { message: newUser.id + " logged in" });
                  });
                }
              }
          });
        });
    }));
};
