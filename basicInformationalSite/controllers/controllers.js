const path = require('path');

const homeControllers = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
};

const contactControllers = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/contact-me.html'));
};

const aboutControllers = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/about.html'));
};

const errorControllers = (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../views/404.html'));
};

module.exports = { homeControllers, contactControllers, aboutControllers, errorControllers };
