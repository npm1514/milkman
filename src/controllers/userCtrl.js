var nodemailer = require('nodemailer');
var config = require('../config');
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
  recover: (req, res, next) => {
    let { email } = req.body;
    User.findOne({'email': email}, function(err, user) {
        if (err) res.send({ message: err });
        if (user) {
          var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
              user: req.nodeEmail,
              pass: req.nodePW
            }
          });
          transporter.sendMail({
            from: "cafejuniperslc@gmail.com",
            to: email,
            subject: 'Cafe Juniper: Password Recovery',
            html: `
              <h3>Hi!</h3>
              <h3>Click the link below to recover your password.<h3/>
              <h4>This link expires in 30 minutes.</h4>
              <a href="http://localhost:3003/passwordrecovery/${user._id}?pr=${new Date(new Date().getTime() + 30*60000).getTime()}">Click Here!</a>
            `
          }, (error, info) => {
            if (error) res.send({message: error});
            else res.send(info);
          });
        } else {
          res.send({ message : "No user account"})
        }
    });
  },
  passwordChange: (req, res, next) => {
    console.log("crash", req.params.id);
    User
    .findById(req.params.id)
    .exec((err, result) => {
      if(err){
        res.send({ message: err });
      } else if(result) {
        console.log("crash1", result);
        let user = {
          currentCart: result.currentCart,
          subscriptions: result.subscriptions,
          orders: result.orders,
          firstName: result.firstName,
          lastName: result.lastName,
          email: result.email,
          password: req.body.password1,
          phone: result.phone,
          address: result.address,
          city: result.city,
          state: result.state,
          zip: result.zip,
        };
        console.log("crash2", user);
        User.findByIdAndRemove(req.params.id, function(err, result){
          if(err){
            res.send({ message: err });
          } else {
            console.log("user deleted3", user);
            var newUser = new User(user);
            newUser.password = newUser.generateHash(newUser.password);
            console.log("crash4", newUser);
            newUser.save(function(err) {
                if (err) res.send({ message: err });
                console.log(newUser.id + " signed up and logged in");
                res.send(newUser);
            });
          }
        });
      } else {
        res.send({message: "no user"})
      }
    });
  },
  update: (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, result) => {
      res.send(result);
    });
  }
};
