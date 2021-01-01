"use strict";

var UserModel = require('./../models/userModel');

var passport = require('passport');

module.exports = {
  login: function login(req, res, next) {
    passport.authenticate('local-signup', function (err, user, info) {
      console.log(err, user, info);

      if (user) {
        res.send(user);
      } else {
        res.send(info);
      }
    })(req, res, next);
  },
  getMe: function getMe(req, res) {
    console.log("get me", req.user);

    if (!req.user) {
      return res.send({});
    }

    UserModel.findById(req.user._id).populate('orders').populate('subscriptions').populate('currentCart').exec(function (err, result) {
      if (err) {
        return res.send({});
      } else {
        console.log("get me result", result);
        res.send(result);
      }
    });
  },
  logout: function logout(req, res) {
    var message = req.user ? req.user.id + " logged out!" : "No user is logged in!";
    req.logout();
    console.log(message);
    res.send(message);
  },
  read: function read(req, res) {
    UserModel.find(req.query).populate('orders').populate('subscriptions').exec(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  readOne: function readOne(req, res) {
    UserModel.findById(req.params.id).populate('orders').populate('subscriptions').exec(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  update: function update(req, res) {
    UserModel.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  }
};