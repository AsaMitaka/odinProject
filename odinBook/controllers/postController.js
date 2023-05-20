const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config.json');
const Post = require('../models/post');

const postPageController = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      res.render('layout', {
        contentPage: 'post',
        titlePage: 'Create Post',
        errorMsg: 'Page is not found',
        post: null,
        authorName: null,
      });
      return;
    }
    const post = await Post.findById(id).populate('author');
    if (!post) {
      res.render('layout', {
        contentPage: 'post',
        titlePage: 'Create Post',
        errorMsg: 'Post not found',
        post: null,
        authorName: null,
      });
      return;
    }

    const authorUsername = post.author.username;
    res.render('layout', {
      contentPage: 'post',
      titlePage: 'Create Post',
      errorMsg: null,
      post: post,
      authorName: authorUsername,
    });
  } catch (error) {
    console.log(error);
  }
};

const createPostPageController = (req, res) => {
  try {
    res.render('layout', {
      contentPage: 'createpost',
      titlePage: 'Create Post',
      errorMsg: null,
    });
  } catch (error) {
    console.log(error);
  }
};

const createPostController = async (req, res) => {
  const { title, text } = req.body;
  const { token } = req.session;
  try {
    console.log(title, text);
    if (!(title && text)) {
      res.render('layout', {
        contentPage: 'createpost',
        titlePage: 'Create Post',
        errorMsg: 'Title or text cant be empty',
      });
      return;
    }

    if (title.length < 2 || title.length > 20) {
      res.render('layout', {
        contentPage: 'createpost',
        titlePage: 'Create Post',
        errorMsg: 'Title cant be length less than to 2 or more than 20',
      });
      return;
    }

    if (text.length < 1 || text.length > 200) {
      res.render('layout', {
        contentPage: 'createpost',
        titlePage: 'Create Post',
        errorMsg: 'Text cant be length less than to 1 or more than 200',
      });
      return;
    }

    const { userId } = await jwt.verify(token, jwtSecret);
    if (!userId) {
      res.render('layout', {
        contentPage: 'createpost',
        titlePage: 'Create Post',
        errorMsg: 'error',
      });
      return;
    }

    const newPost = await Post.create({
      title: title,
      text: text,
      author: userId,
    });

    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};

module.exports = { postPageController, createPostPageController, createPostController };
