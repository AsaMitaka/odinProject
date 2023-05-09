const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, require: true },
  password: { type: String, require: true },
});

userSchema.methods.comparePassword = async function (password) {
  return password === this.password;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
