"use strict";

var OrderModel = require('./../models/orderModel');

module.exports = {
  create: function create(req, res) {
    var order = new OrderModel(req.body);
    order.save(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  read: function read(req, res) {
    OrderModel.find(req.query).exec(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  update: function update(req, res) {
    OrderModel.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  destroy: function destroy(req, res) {
    OrderModel.findByIdAndRemove(req.params.id, req.body, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  }
};