const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../model/user');
const { salt, jwtSecret, jwtExpiresIn } = require('../config/config.json');

const signinRenderController = (req, res) => {
  res.render('layout', { title: 'Sign In', template: 'signin', error: null });
};

const signinController = async (req, res) => {
  try {
    const { email, username, password, repassword } = req.body;
    if (!(email && username && password && repassword)) {
      res.render('layout', {
        title: 'Sign In',
        template: 'signin',
        error: 'Some row is empty',
      });
    }

    if (password !== repassword) {
      res.render('layout', {
        title: 'Sign In',
        template: 'signin',
        error: 'Passwords is not same',
      });
      return;
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.render('layout', {
        title: 'Sign In',
        template: 'signin',
        error: 'User already resist whit this email',
      });
      return;
    }

    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      username,
      password: hashPassword,
    });

    await newUser.save();
    console.log(email, username, hashPassword);

    const token = jwt.sign({ id: newUser._id, email }, jwtSecret, { expiresIn: jwtExpiresIn });
    newUser.token = token;
    newUser.password = undefined;

    res.status(201).json({ newUser });
    // res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signinRenderController, signinController };
