const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');
const Router = require('express');
const User = require('../models/User');

const router = Router();

router.post(
  '/registration',
  [
    check('email', 'Uncorrect email').isEmail(),
    check(
      'password',
      'Uncorrect password, password must be longer than 5 and shorter than 12 ',
    ).isLength({ min: 6, max: 12 }),
  ],
  async (req, res) => {
    try {
      console.log(req.body);
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Uncorrect request', errors });
      }
      const { email, password, name } = req.body;
      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(400).json({ message: `User with email ${email} already exist` });
      }
      const hashPasword = await bcrypt.hash(password, 15);
      const user = new User({
        email,
        name,
        password: hashPasword,
      });
      await user.save();

      return res.json({
        message: 'User was created',
      });
    } catch (e) {
      console.log(e);
      res.send({ message: 'Server Error' });
    }
  },
);

module.exports = router;
