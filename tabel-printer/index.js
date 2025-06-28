const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // important for deployment

app.get('/', (req, res) => {
  res.render('table', { number: null, table: null });
});

app.post('/', (req, res) => {
  const number = parseInt(req.body.number);
  const table = [];

  if (!isNaN(number)) {
    for (let i = 1; i <= 10; i++) {
      table.push(`${number} x ${i} = ${number * i}`);
    }
  }

  res.render('table', { number, table });
});

module.exports = app; // ✅ This is the Vercel requirement
