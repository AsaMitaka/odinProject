const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { jwtExpiresIn, jwtSecret } = require('../config/config.json');
const User = require('../model/user');

const loginRenderController = (req, res) => {
  console.log(req.session);
  if (req.session.user) {
    res.redirect('/');
  }
  res.render('layout', { title: 'Login', template: 'login', error: null });
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.render('layout', {
        title: 'Login',
        template: 'login',
        error: 'User or Password line is empty',
      });
      return;
    }

    const user = await User.findOne({ email });
    if (!user) {
      res.render('layout', { title: 'Login', template: 'login', error: 'User is not found' });
      return;
    }

    if (!(user && (await bcrypt.compare(password, user.password)))) {
      res.render('layout', { title: 'Login', template: 'login', error: 'Password isnt correct' });
      return;
    }

    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: jwtExpiresIn });
    user.token = token;

    await user.save();

    user.password = undefined;

    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    res.cookie('token', token, options);
    res.redirect('/home');
    return;
    // res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};

module.exports = { loginController, loginRenderController };
