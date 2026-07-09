const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/proposal', (req, res) => {
  res.render('proposal');
});

app.listen(port, () => {
  console.log(`Singapore Career Pathfinder is running at http://localhost:${port}`);
});
