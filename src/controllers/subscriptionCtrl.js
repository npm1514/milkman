var Subscription = require('./../models/subscriptionModel');
const mapFrequency = (date, frequency) => {
  let cb = (a,i) => {
      return new Date(date.setDate(date.getDate() + i));
  }

  switch(frequency) {
    case "Daily":
      break;
    case "Work Days":
      cb = (a,i) => {
          let newDate = new Date(date.setDate(date.getDate() + i));
          if(newDate.getDay() != 0 && newDate.getDay() != 6)
          return newDate;
      }
      break;
    case "Weekend":
      cb = (a,i) => {
          let newDate = new Date(date.setDate(date.getDate() + i));
          if(newDate.getDay() == 0 || newDate.getDay() == 6)
          return newDate;
      }
      break;
    case "Weekly":
      cb = (a,i) => {
          return new Date(date.setDate(date.getDate() + (i * 7)));
      }
      break;
    case "Bi-Weekly":
      cb = (a,i) => {
          return new Date(date.setDate(date.getDate() + (i * 14)));
      }
      break;
    case "Monthly":
      cb = (a,i) => {
          let newDate = new Date(date.setDate(date.getDate() + i));
          let startDate = date.getDate();
          if(startDate == 29 || startDate == 30 || startDate == 31){
            startDate = 1;
          }
          if(newDate.getDate() == startDate)
          return newDate;
      }
      break;
  }

  return [...new Array(10000)].map(cb);
}

module.exports = {
  create: function(req, res){
    let newSubscription = req.body;
    let date = new Date(newSubscription.startDate);
    newSubscription.deliveryDays = mapFrequency(date, newSubscription.deliveryFrequency)
    newSubscription.paymentDays = mapFrequency(date, newSubscription.payPeriodFrequency)
    newSubscription.creationDate = new Date();
    var subscription = new Subscription(newSubscription);
    subscription.save(function(err, result){
      if(err){
        res.send(err);
      } else {
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
  },
  destroyEverything: function(req, res){
    Subscription.deleteMany({}, function(err){
      if(err){
        res.send(err);
      } else {
        res.send("success");
      }
    });
  }
};
