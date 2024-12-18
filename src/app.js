const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const passport = require('./passport/index');
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const adminRouter = require('./routes/admin');
const handleRole = require('./utils/handleRole');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cookieParser());
app.use(passport.initialize());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '..' ,'views'));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  res.send('Hello World app.js');
});

// New Routing
app.use(
  '/admin', 
  passport.authenticate('cookie', { session: false, failureRedirect: '/auth/login' }) ,
  handleRole(['admin']),
  adminRouter,
);
app.use(
  '/app', 
  passport.authenticate('cookie', { session: false, failureRedirect: '/auth/login' }),
  handleRole(['user','admin']),
  userRouter,
);
app.use('/auth', authRouter);

module.exports = app;
