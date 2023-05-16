const jwt = require('jsonwebtoken');
const Post = require('../models/post');
const { jwtSecret } = require('../config/config.json');
const { validationResult } = require('express-validator');

const postPageController = async (req, res) => {
  const { token } = req.session;
  const { userId } = await jwt.verify(token, jwtSecret);
  console.log(userId);
  try {
    const posts = await Post.find({ author: userId });

    res.render('layout', {
      content: 'post',
      titlePage: 'All Post',
      pageContent: posts || [],
    });
  } catch (error) {
    console.log(error);
  }
};

const postCreatePageController = (req, res) => {
  res.render('layout', {
    content: 'createpost',
    titlePage: 'Create Post',
    error: null,
  });
};

const postCreateController = async (req, res) => {
  const { posttext, title } = req.body;
  const { token } = req.session;
  const errors = validationResult(req);

  try {
    if (!posttext) {
      res.render('layout', {
        content: 'createpost',
        titlePage: 'Create Post',
        error: 'Title or text cant be empty',
      });
      return;
    }

    if (!errors.isEmpty() && errors.errors[0].path === 'title') {
      res.render('layout', {
        content: 'createpost',
        titlePage: 'Create Post',
        error: 'Title length must be min 5 length or max 50',
      });
      return;
    }

    if (!errors.isEmpty() && errors.errors[0].path === 'posttext') {
      res.render('layout', {
        content: 'createpost',
        titlePage: 'Create Post',
        error: 'Text length must be min 1 length or max 500',
      });
      return;
    }

    const { userId: authorId } = await jwt.verify(token, jwtSecret);

    const post = await Post.create({
      title: title,
      text: posttext,
      author: authorId,
    });

    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};

const postPageIdController = async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await Post.findById(postId);
    console.log(post);

    if (!post) {
      res.render('layout', {
        content: 'postId',
        titlePage: 'Post Page',
        pageContent: post[0],
        error: 'Post not found',
      });
    }

    res.render('layout', {
      content: 'postId',
      titlePage: 'Post Page',
      pageContent: post,
      error: null,
    });
  } catch (error) {
    console.log(error);
  }
};

const postPageIdDeleteController = async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      res.render('layout', {
        content: 'postId',
        titlePage: 'Post Page',
        pageContent: post,
        error: 'Error when deleting a post, try later',
      });
      return;
    }

    await Post.findByIdAndRemove(postId);
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postPageController,
  postCreatePageController,
  postCreateController,
  postPageIdController,
  postPageIdDeleteController,
};
