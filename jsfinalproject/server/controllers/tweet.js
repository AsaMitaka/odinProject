const Tweet = require('../models/Tweet');
const User = require('../models/User');

const createTweet = async (req, res, next) => {
  try {
    const { description, userId } = req.body;
    if (description.length < 0 || description.length > 260) {
      res.status(403).json({ message: 'Tweet cant be less than 0 or larger than 260 characters' });
      return;
    }

    const savedTweet = new Tweet({ description, userId });
    await savedTweet.save();
    res.status(200).json(savedTweet);
  } catch (error) {
    next(error);
  }
};

const deleteTweet = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tweet = await Tweet.findById(id);
    if (tweet.userId === req.body.userId) {
      await tweet.deleteOne();
      res.status(200).json({ message: 'Tweet deleted successfully' });
    } else {
      res.status(500).json({ message: 'Tweet cant be delete' });
      return;
    }
  } catch (error) {
    next(error);
  }
};

const likeOrDislikeTweet = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tweet = await Tweet.findById(id);

    if (!tweet.likes.includes(req.body.userId)) {
      await tweet.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json({ message: 'Tweet liked successfully' });
    } else {
      await tweet.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json({ message: 'Tweet disliked successfully' });
    }
  } catch (error) {
    next(error);
  }
};

const getAllTweets = async (req, res, next) => {
  try {
    const { id } = req.params;
    const currentUser = await User.findById(id);
    const userTweets = await Tweet.find({ userId: currentUser._id });

    const followersTweets = await Promise.all(
      currentUser.following.map((followerId) => {
        return Tweet.find({ userId: followerId });
      }),
    );

    res.status(200).json(userTweets.concat(...followersTweets));
  } catch (error) {
    next(error);
  }
};

const getAllUserTweets = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userTweets = await Tweet.find({ userId: id }).sort({
      createdAt: -1,
    });

    res.status(200).json(userTweets);
  } catch (error) {
    next(error);
  }
};

const getExploreTweet = async (req, res, next) => {
  try {
    const getExploreTweet = await Tweet.find({
      likes: { $exists: true },
    }).sort({ likes: -1 });

    res.status(200).json(getExploreTweet);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTweet,
  deleteTweet,
  likeOrDislikeTweet,
  getAllTweets,
  getAllUserTweets,
  getExploreTweet,
};
