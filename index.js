/*

  sources:
  http://stackoverflow.com/questions/6177975/how-to-validate-date-with-format-mm-dd-yyyy-in-javascript
  http://stackoverflow.com/questions/6002254/get-the-current-year-in-javascript

*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const isValidDate = require('./src/dateValidator');

app.set('view engine', 'pug');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', (req, res) => {
  var result = isValidDate(req.body.dob);
  var validate = result ? 'VALID' : 'INVALID';
  res.render('result', {validate});
});

app.listen(2000, () => console.log('listening to port 2000'));