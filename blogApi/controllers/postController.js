const postPageController = (req, res) => {
  res.render('layout', {
    content: 'post',
    titlePage: 'All Post',
  });
};

const postController = async (req, res) => {};

const postPageIdController = async (req, res) => {
  const { id } = req.params;
  res.render('layout', {
    content: 'post',
    titlePage: 'Post Page',
  });
};

module.exports = { postPageController, postController, postPageIdController };
