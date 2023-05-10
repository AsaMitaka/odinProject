const homeRenderController = (req, res) => {
  const user = req.session.user;
  console.log(user);
  res.render('layout', { title: 'Home', template: 'home', user });
};

module.exports = { homeRenderController };
