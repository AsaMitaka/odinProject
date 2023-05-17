const User = require('../models/user');

const profilePageController = async (req, res) => {
  const { id } = req.params;
  try {
    const isUser = true;
    const profile = await User.findById(id);
    if (!profile) {
      res.render('layout', {
        content: 'profile',
        titlePage: 'Profile',
        pageContent: profile,
        error: 'Profile not found',
        isUser: isUser,
      });
      return;
    }

    res.render('layout', {
      content: 'profile',
      titlePage: 'Profile',
      pageContent: profile,
      error: null,
      isUser: isUser,
    });
  } catch (error) {
    console.log(error);
  }
};

const profileChangePasswordController = async (req, res) => {
  const { token } = req.session;

  try {
  } catch (error) {
    console.log(error);
  }
};

module.exports = { profilePageController, profileChangePasswordController };
