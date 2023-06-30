const User = require('../models/User');
const Tweet = require('../models/Tweet');

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  if (id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        {
          $set: req.body,
        },
        {
          new: true,
        },
      );

      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  } else {
    res.status.json('You can only update your own account');
    next(403);
  }
};

const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  if (id === req.user.id) {
    try {
      await User.findByIdAndDelete(id);
      await Tweet.remove({ userId: id });
      res.status(200).json({ message: 'User delete' });
    } catch (err) {
      next(err);
    }
  } else {
    res.status.json('You can only update your own account');
    next(403);
  }
};

const followUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    const currentUser = await User.findById(req.body.id);

    if (!user.followers.includes(req.body.id)) {
      await user.updateOne({
        $push: { followers: req.body.id },
      });

      await currentUser.updateOne({
        $push: { following: id },
      });
    } else {
      res.status(403).json({ message: 'you already follow this user' });
    }

    res.status(200).json({ message: 'following this user' });
  } catch (err) {
    next(err);
  }
};

const unFollowUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    const currentUser = await User.findById(req.body.id);

    if (!user.followers.includes(id)) {
      await user.updateOne({
        $pull: { followers: req.body.id },
      });

      await currentUser.updateOne({
        $pull: { following: id },
      });
    } else {
      res.status(403).json({ message: 'you are not follow this user' });
    }

    res.status(200).json({ message: 'unfollow this user' });
  } catch (err) {
    next(err);
  }
};

module.exports = { getUser, updateUser, deleteUser, followUser, unFollowUser };
