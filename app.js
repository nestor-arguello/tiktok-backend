const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');

const PORT = 3001;
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const postsRouter = require('./routes/posts');

app.use('/v2/posts', postsRouter);

mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log('Connected to the database')
);

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
