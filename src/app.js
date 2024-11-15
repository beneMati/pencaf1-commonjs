const express = require('express');
const driversRouter = require('./routes/drivers');
const circuitsRouter = require('./routes/circuits');
const teamsRouter = require('./routes/teams');
const usersRouter = require('./routes/users');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World app.js');
});

app.use('/drivers', driversRouter);
app.use('/circuits', circuitsRouter);
app.use('/teams', teamsRouter);
app.use('/users', usersRouter);

module.exports = app;
