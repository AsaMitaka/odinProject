const profilePageController = (req, res) => {
  res.render('layout', {
    content: 'profile',
    titlePage: 'Profile',
  });
};

const profileController = async (req, res) => {};

module.exports = { profilePageController, profileController };
