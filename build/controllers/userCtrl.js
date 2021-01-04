"use strict";

var User = require('./../models/userModel');

module.exports = {
  login: function login(req, res) {
    res.send(req.user);
  },
  getMe: function getMe(req, res) {
    if (!req.user) {
      return res.send({});
    }

    User.findById(req.user._id).populate('orders').populate('subscriptions').populate('currentCart').exec(function (err, result) {
      if (err) {
        return res.send({});
      } else {
        res.send(result);
      }
    });
  },
  logout: function logout(req, res) {
    var message = req.user ? req.user.id + " logged out!" : "No user is logged in!";
    req.logout();
    console.log("logout", message);
    res.send(message);
  },
  read: function read(req, res) {
    User.find(req.query).populate('orders').populate('subscriptions').populate('currentCart').exec(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  readOne: function readOne(req, res) {
    User.findById(req.params.id).populate('orders').populate('subscriptions').populate('currentCart').exec(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  update: function update(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {
      "new": true
    }, function (err, result) {
      res.send(result);
    });
  }
};