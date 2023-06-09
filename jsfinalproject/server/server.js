const express = require('express');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const app = express();

const routeAuth = require('./routes/authRoute');
const routeUser = require('./routes/userRoute');
const routeTweet = require('./routes/tweetRoute');

const connect = () => {
  mongoose.set('strictQuery', false);
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log('server is start');
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth/', routeAuth);
app.use('/api/users/', routeUser);
app.use('/api/tweets/', routeTweet);

app.listen(process.env.PORT, () => {
  connect();
  console.log(`Server started at ${process.env.PORT}`);
});
