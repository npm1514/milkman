"use strict";

var payObj = {
  pay: function pay(req, res) {
    if (payObj.ccNum(req.body)) {
      return res.send({
        message: "failed due to ccNum"
      });
    }

    if (payObj.ccExp(req.body)) {
      return res.send({
        message: "failed due to ccExp"
      });
    }

    if (payObj.ccCVV(req.body)) {
      return res.send({
        message: "failed due to ccCVV"
      });
    }

    if (payObj.ccZip(req.body)) {
      return res.send({
        message: "failed due to ccZip"
      });
    }

    res.send({
      message: "success"
    });
  },
  ccNum: function ccNum(body) {
    if (body.ccNum) {
      return false;
    } else {
      return true;
    }
  },
  ccExp: function ccExp(body) {
    if (body.ccExp) {
      return false;
    } else {
      return true;
    }
  },
  ccCVV: function ccCVV(body) {
    if (body.ccCVV) {
      return false;
    } else {
      return true;
    }
  },
  ccZip: function ccZip(body) {
    if (body.ccZip) {
      return false;
    } else {
      return true;
    }
  }
};
module.exports = payObj;