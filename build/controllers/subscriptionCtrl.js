"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Subscription = require('./../models/subscriptionModel');

var mapFrequency = function mapFrequency(date, frequency) {
  var cb = function cb(a, i) {
    return new Date(date.setDate(date.getDate() + i));
  };

  switch (frequency) {
    case "Daily":
      break;

    case "Work Days":
      cb = function cb(a, i) {
        var newDate = new Date(date.setDate(date.getDate() + i));
        if (newDate.getDay() != 0 && newDate.getDay() != 6) return newDate;
      };

      break;

    case "Weekend":
      cb = function cb(a, i) {
        var newDate = new Date(date.setDate(date.getDate() + i));
        if (newDate.getDay() == 0 || newDate.getDay() == 6) return newDate;
      };

      break;

    case "Weekly":
      cb = function cb(a, i) {
        return new Date(date.setDate(date.getDate() + i * 7));
      };

      break;

    case "Bi-Weekly":
      cb = function cb(a, i) {
        return new Date(date.setDate(date.getDate() + i * 14));
      };

      break;

    case "Monthly":
      cb = function cb(a, i) {
        var newDate = new Date(date.setDate(date.getDate() + i));
        var startDate = date.getDate();

        if (startDate == 29 || startDate == 30 || startDate == 31) {
          startDate = 1;
        }

        if (newDate.getDate() == startDate) return newDate;
      };

      break;
  }

  return _toConsumableArray(new Array(10000)).map(cb);
};

module.exports = {
  create: function create(req, res) {
    var newSubscription = req.body;
    var date = new Date(newSubscription.startDate);
    newSubscription.deliveryDays = mapFrequency(date, newSubscription.deliveryFrequency);
    newSubscription.paymentDays = mapFrequency(date, newSubscription.payPeriodFrequency);
    newSubscription.creationDate = new Date();
    var subscription = new Subscription(newSubscription);
    subscription.save(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  read: function read(req, res) {
    Subscription.find(req.query).populate('user').exec(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  readOne: function readOne(req, res) {
    Subscription.findById(req.params.id).populate('user').exec(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  update: function update(req, res) {
    Subscription.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  destroy: function destroy(req, res) {
    Subscription.findByIdAndRemove(req.params.id, req.body, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  destroyEverything: function destroyEverything(req, res) {
    Subscription.deleteMany({}, function (err) {
      if (err) {
        res.send(err);
      } else {
        res.send("success");
      }
    });
  }
};