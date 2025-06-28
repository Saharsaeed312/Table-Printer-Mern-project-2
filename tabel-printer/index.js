const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

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

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
