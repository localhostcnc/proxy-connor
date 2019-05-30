const port = 3999;
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json({ extended: true }));
app.use(cors());

app.use(express.static('public/'));

app.listen(port, (err) => {
  if (err) {
    throw err;
  }
});
