const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!(username && password)) {
      res.status(400).json({ message: 'username or password cant be empty' });
      return;
    }

    const user = await User.findOne({ username });
    if (!user) {
      res.status(400).json({ message: 'user is not found' });
      return;
    }

    const isCorrect = await bcrypt.compare(password, user.password);
    if (!isCorrect) {
      res.status(400).json({ message: 'username or password is not correct' });
      return;
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT);
    const { password: hashedPassword, ...othersData } = user._doc;

    res.cookie('access_token', token, { httpOnly: true }).status(200).json(othersData);
  } catch (err) {
    next(err);
  }
};

module.exports = { login };
