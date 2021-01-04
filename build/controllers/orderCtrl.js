"use strict";

var Order = require('./../models/orderModel');

var Subscription = require('./../models/subscriptionModel');

module.exports = {
  create: function create(req, res) {
    var order = new Order(req.body);
    order.save(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        console.log(result);
        this.updateSubscriptions(result);
        res.send(result);
      }
    });
  },
  updateSubscriptions: function updateSubscriptions(order) {
    console.log(order);
    order.subscriptions.map(function (a) {
      Subscription.findByIdAndUpdate(a, {
        active: true
      }, function (err, result) {
        return result;
      });
    });
  },
  read: function read(req, res) {
    Order.find(req.query).populate("subscriptions").populate("users").exec(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  readOne: function readOne(req, res) {
    Order.findById(req.params.id).populate("subscriptions").populate("users").exec(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  update: function update(req, res) {
    Order.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  destroy: function destroy(req, res) {
    Order.findByIdAndRemove(req.params.id, req.body, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  }
};