const express = require('express');
const app = express();
const cors = require('cors');


module.exports = app;

const PORT = (process.env.PORT || 4001);

app.use(express.static('public'));

app.use(cors());

// middleware for parsing request bodies
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.redirect('/home.html')
});

//gives data necessary to verify passcode and route to correct page.
app.get('/passcode', function(req, res) {
  res.json({/*Code here not included for protection*/});
});

app.get('/urlCipher', function(req, res) {
  res.json({/*Code here not included for protection*/});
});

app.get('/urlSymbol', function(req, res) {
  res.json({/*Code here not included for protection*/});
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});