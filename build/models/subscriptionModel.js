"use strict";

var mongoose = require('mongoose');

var subscriptionSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true
  },
  flavor: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  deliveryFrequency: {
    type: String,
    required: true
  },
  startDate: {
    type: String,
    required: true
  },
  timeOfDelivery: {
    type: String,
    required: true
  },
  pricePerDelivery: {
    type: Number,
    required: true
  },
  pricePerPayPeriod: {
    type: Number
  },
  payPeriodFrequency: {
    type: String,
    "default": "Monthly"
  },
  recurringPayment: {
    type: Boolean,
    "default": true
  },
  notes: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "orders"
  },
  active: {
    type: Boolean,
    "default": false
  }
});
module.exports = mongoose.model('subscriptions', subscriptionSchema);