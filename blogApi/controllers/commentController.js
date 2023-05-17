const Comment = require('../models/comment');
const Post = require('../models/post');
const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../config/config.json');

const createComment = async (req, res) => {
  const { token } = req.session;
  const id = req.params.id;

  try {
    const { commentText } = req.body;
    console.log(id, commentText);

    const post = await Post.findById(id).populate('comments');

    if (!post) {
      res.render('layout', {
        content: 'postId',
        pageContent: post,
        titlePage: 'Post Page',
        error: 'Post not found',
      });
      return;
    }

    if (!commentText) {
      res.render('layout', {
        error: 'Comment cant be empty',
      });
      return;
    }

    if (commentText.length > 200 || commentText.length < 1) {
      res.render('layout', {
        content: 'postId',
        pageContent: post,
        titlePage: 'Post Page',
        error: 'Comment length must be min 1 or 200',
      });
      return;
    }

    const { userId } = await jwt.verify(token, jwtSecret);
    const comment = await Comment.create({
      text: commentText,
      user: userId,
    });

    post.comments = post.comments || [];
    post.comments.push(comment._id);
    await post.save();

    res.redirect('/post/' + id);
  } catch (error) {
    console.log(error);
  }
};

const deleteComment = (req, res) => {};

module.exports = { createComment };
