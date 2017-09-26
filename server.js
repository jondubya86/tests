const express =require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

//sequelize db
const db = require('./back/models');
const router = require('./back/routes');


app.use(function (err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.use(express.static(path.join(__dirname, './front/bundle')));

app.get('/*', function (req, res) {
  res.sendFile(path.resolve(__dirname, './front/index.html'))
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`listening on port ${3000}`);
});

module.exports = app;