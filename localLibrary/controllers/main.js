const mainControllers = (req, res) => {
  res.render('layout', { title: 'Main' });
};

const aboutControllers = (req, res) => {
  res.render('layout', { title: 'About', contentBlock: 'about' });
};

module.exports = { mainControllers, aboutControllers };
