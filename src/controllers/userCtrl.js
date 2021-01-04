var User = require('./../models/userModel');

module.exports = {
  login: (req, res) => {
    res.send(req.user);
  },
  getMe: (req, res) =>  {
    if(!req.user){
      return res.send({});
    }
    User
    .findById(req.user._id)
    .populate('orders')
    .populate('subscriptions')
    .populate('currentCart')
    .exec((err, result) => {
      if (err) {
        return res.send({});
      } else {
        res.send(result);
      }
    });
  },
  logout: (req, res) =>  {
    var message = req.user ? req.user.id + " logged out!" : "No user is logged in!";
    req.logout();
    console.log("logout", message);
    res.send(message);
  },
  read: (req, res) => {
    User
    .find(req.query)
    .populate('orders')
    .populate('subscriptions')
    .populate('currentCart')
    .exec((err, result) => {
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  readOne: (req, res) => {
    User
    .findById(req.params.id)
    .populate('orders')
    .populate('subscriptions')
    .populate('currentCart')
    .exec((err, result) => {
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  update: (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, result) => {
      res.send(result);
    });
  }
};
