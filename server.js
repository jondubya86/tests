const express =require('express');
const path = require('path');
const app = express();

// app.use(function (err, req, res, next) {
//   console.error(err);
//   console.error(err.stack);
//   res.status(err.status || 500).send(err.message || 'Internal server error.');
// });

app.get('/*', function (req, res) {
  res.sendFile(path.resolve(__dirname, './front/index.html'))
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`listening on port ${3000}`);
});

module.exports = app;