const path = require('path');
const express = require('express');
const helmet = require('helmet');
const toDoRouter = require('./routes/ToDo.router');
const passport = require('passport');
const { Strategy } = require('passport-google-oauth20')

require('dotenv').config();

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
};
const AUTH_OPTIONS = {
  callbackURL: '/auth/google/callback',
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
};

function verifyCallback(accessToken, refreshToken, profile, done){
  console.log('Google Profile', profile);
  done(null, profile);
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

const app = express();
app.use(helmet());

app.use(passport.initialize());

function checkLoggedin(req, res, next){
  const loggedin = true;

  if(!loggedin){
    res.status(403).json({
      error: 'Login failed'
    });
  }

  next();
}

app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['email'],
  })
);

app.get('/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/failer',
    successRedirect: '/',
    session: false,
  }),
  (req, res) => {
    console.log('Google call us back !!');
  }
);

app.use('/logout', (req, res) => {
  req.logout();
  return res.Redirect('/');
});

app.set('view engine', 'ejs');

app.use('/static', express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use('/', toDoRouter);

app.get('/', (req, res) => {
  res.render('toDo.ejs');
});


module.exports = app;
