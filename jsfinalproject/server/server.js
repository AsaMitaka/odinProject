const express = require('express');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const app = express();

const routeMain = require('./routes/mainRoute');
const routeAuth = require('./routes/authRoute');
const routeUser = require('./routes/userRoute');

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

app.use('api/', routeMain);
app.use('api/auth', routeAuth);
app.use('api/users', routeUser);

app.listen(process.env.PORT, () => {
  connect();
  console.log(`Server started at ${process.env.PORT}`);
});
