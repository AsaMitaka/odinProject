const User = require('../model/user');

const loginRenderController = (req, res) => {
  res.render('layout', { title: 'Login', template: 'login' });
};

const loginController = (req, res) => {
  try {
    const user = User.findOne({ email: req.body.email });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { loginController, loginRenderController };
