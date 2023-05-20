const Post = require('../models/post');

const indexPageController = async (req, res) => {
  const posts = await Post.find();

  res.render('layout', {
    titlePage: 'main page',
    contentPage: 'main',
    postContent: posts,
  });
};

module.exports = { indexPageController };
