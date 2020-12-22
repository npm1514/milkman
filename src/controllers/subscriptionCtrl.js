var SubscriptionModel = require('./../models/subscriptionModel');

module.exports = {
  create: function(req, res){
    var subscription = new SubscriptionModel(req.body);
    subscription.save(function(err, result){
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  read: function(req, res){
    SubscriptionModel
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
    SubscriptionModel
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
    SubscriptionModel.findByIdAndUpdate(req.params.id, req.body, function(err, result){
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  destroy: function(req, res){
    SubscriptionModel.findByIdAndRemove(req.params.id, req.body, function(err, result){
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  }
};
