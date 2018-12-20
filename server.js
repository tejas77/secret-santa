const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to server.log');
    }
  });
  next();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {});
});

app.get('/5221', (req, res) => {
  res.render('reception-hint.hbs', {});
});

app.get('/1225', (req, res) => {
  res.render('balaji-hint.hbs', {});
});
app.get('/2512', (req, res) => {
  // res.send('<H1>Hello Express!</H1>');
  res.render('knowyoursanta.hbs', {});
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
