const User = require('../model/user');

const signinRenderController = (req, res) => {
  res.render('layout', { title: 'Sign In', template: 'signin' });
};

const signinController = async (req, res) => {
  try {
    if (req.body.password !== req.body.repassword) {
      return;
    }

    const newUser = new User({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    });

    await newUser.save();

    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signinRenderController, signinController };
