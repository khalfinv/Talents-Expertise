const mongoose = require('mongoose');
const config = require('../config/database');

// User Schema
const JobSchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  companyIcon: {

  },
  city: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  jobRequirements: {
    type: String,
    required: true
  },
  requirements: {
    type: String,
    required: true
  },
  mainField: {
    type: String,
    required: true
  },
  subField: {
    type: String,
    required: true
  },
  subSubField: {
    type: String,
    required: true
  },
});


const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.getUserByEmail = function(email, callback){
  const query = {email: email}
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}
