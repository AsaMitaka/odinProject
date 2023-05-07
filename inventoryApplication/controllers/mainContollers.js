const indexController = (req, res) => {
  res.send('Index');
};

const aboutController = (req, res) => {
  res.send('About');
};

module.exports = { indexController, aboutController };
