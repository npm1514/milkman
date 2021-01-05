const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  phone: {type: String, required: true},
  address: {type: String, required: true},
  city: {type: String, required: true},
  state: {type: String, required: true},
  zip: {type: String, required: true},
  encryptedCard: {type: String},
  encryptedCVV: {type: String},
  encryptedExp: {type: String},
  cardZip: {type: String},
  last4CC: {type: String},
  currentCart: [{type: mongoose.Schema.Types.ObjectId, ref: "subscriptions"}],
  subscriptions: [{type: mongoose.Schema.Types.ObjectId, ref: "subscriptions"}],
  orders: [{type: mongoose.Schema.Types.ObjectId, ref: "orders"}]
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('users', userSchema);
