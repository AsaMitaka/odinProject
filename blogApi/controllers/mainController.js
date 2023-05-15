const mainPageController = (req, res) => {
  res.render('layout', {
    content: 'main',
    titlePage: 'Main',
  });
};

const mainController = async (req, res) => {};

module.exports = { mainPageController, mainController };
