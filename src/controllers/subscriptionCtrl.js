var Subscription = require('./../models/subscriptionModel');

module.exports = {
  create: function(req, res){
    var subscription = new Subscription(req.body);
    subscription.save(function(err, result){
      if(err){
        res.send(err);
      } else {
        console.log(result);
        res.send(result);
      }
    });
  },
  read: function(req, res){
    Subscription
    .find(req.query)
    .populate('user')
    .exec(function(err, result){
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  readOne: function(req, res){
    Subscription
    .findById(req.params.id)
    .populate('user')
    .exec(function(err, result){
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  update: function(req, res){
    Subscription.findByIdAndUpdate(req.params.id, req.body, function(err, result){
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  destroy: function(req, res){
    Subscription.findByIdAndRemove(req.params.id, req.body, function(err, result){
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  }
};
