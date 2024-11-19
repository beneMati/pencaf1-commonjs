const express = require('express');
const path = require('path');
const driversRouter = require('./routes/drivers');
const circuitsRouter = require('./routes/circuits');
const teamsRouter = require('./routes/teams');
const usersRouter = require('./routes/users');
const resultsRouter = require('./routes/results');
const predictionsRouter = require('./routes/predictions');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '..' ,'views'));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  res.send('Hello World app.js');
});

app.use('/drivers', driversRouter);
app.use('/circuits', circuitsRouter);
app.use('/teams', teamsRouter);
app.use('/users', usersRouter);
app.use('/results', resultsRouter);
app.use('/predictions', predictionsRouter);

module.exports = app;