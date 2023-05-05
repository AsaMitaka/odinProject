const express = require('express');
const {
  mainController,
  mainNewPostController,
  mainPostNewPostContoller,
  mainPostsContoller,
  mainPostItemContoller,
  mainAboutContoller,
  mainPostDeleteController,
} = require('../controllers/mainController');
const router = express.Router();

router.get('/', mainController);
router.get('/newpost', mainNewPostController);
router.post('/newpost', mainPostNewPostContoller);
router.get('/posts', mainPostsContoller);
router.get('/posts/:id', mainPostItemContoller);
router.delete('/posts/:id', mainPostDeleteController);

router.get('/about', mainAboutContoller);

module.exports = router;
