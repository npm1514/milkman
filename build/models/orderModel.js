"use strict";

var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  subscriptions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "subscriptions"
  }],
  price: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('orders', orderSchema);