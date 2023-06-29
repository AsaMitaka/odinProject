const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!(username && email && password)) {
      res.status(400).json({ message: 'username or email or password cant be empty' });
      return;
    }

    if (password.length < 6 || password.length > 15) {
      res.status(400).json({ message: 'password cant be less than 6 or more 15' });
      return;
    }
    const salt = bcrypt.getSaltSync(10);
    const hashPassword = bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashPassword,
    });

    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, process.env.JWT);
    const { password: hashedPassword, ...othersData } = newUser._doc;

    res
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .status(200)
      .json(othersData);
  } catch (err) {
    next(err);
  }
};

module.exports = { signup };
