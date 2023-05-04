const axios = require('axios');

const mainController = (req, res) => {
  res.render('index', { pageTitle: 'Index' });
};

const mainNewPostController = (req, res) => {
  res.render('newpost', { pageTitle: 'New Post', error: '' });
};

const mainPostNewPostContoller = (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.render('newpost', { pageTitle: 'New Post', error: 'Please fill in all fields' });
  }

  axios
    .post('http://localhost:3000/posts', {
      title: title,
      descr: description,
    })
    .then(() => {
      res.redirect('/posts');
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('Internal Server Error');
    });
};

const mainPostsContoller = (req, res) => {
  axios
    .get('http://localhost:3000/posts')
    .then((response) => {
      const data = response.data;
      res.render('posts', { pageTitle: 'Posts', data });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('Internal Server Error');
    });
};

const mainPostDeleteController = (req, res) => {
  const { id } = req.params;
  axios
    .delete(`http://localhost:3000/posts/${id}`)
    .then(() => {
      res.redirect('/posts');
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('Internal Server Error');
    });
};

const mainPostItemContoller = (req, res) => {
  const id = req.params.id;
  axios
    .get(`http://localhost:3000/posts/${id}`)
    .then((response) => {
      const post = response.data;
      res.render('post', { pageTitle: `Post ${id}`, post });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('Post is not found');
    });
};

const mainAboutContoller = (req, res) => {
  res.render('about', { pageTitle: 'about' });
};

module.exports = {
  mainController,
  mainNewPostController,
  mainPostNewPostContoller,
  mainPostsContoller,
  mainPostItemContoller,
  mainAboutContoller,
  mainPostDeleteController,
};
