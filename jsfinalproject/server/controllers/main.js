const main = (req, res) => {
  res.send('Main');
};

const profile = (req, res) => {
  res.send('Profile');
};

module.exports = { main, profile };
