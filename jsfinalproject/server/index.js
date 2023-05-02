const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth.routes');
// const loginRouter = require('./routes/login.routes');

const app = express();

const PORT = config.get('serverPort');

app.use(express.json());
app.use('/api/auth', authRouter);

const start = async () => {
  try {
    await mongoose.connect(config.get('dbUrl'));

    app.listen(PORT, () => {
      console.log(`Server start at ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
