const profilePageController = (req, res) => {
  const { id } = req.params;
  try {
    res.send(`Profile ${id}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { profilePageController };
