import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import upcomingRouter from './api/upcoming';
import nowPlayingRouter from'./api/nowPlaying';
import bodyParser from 'body-parser';
import './db';
import {loadUsers, loadMovies, loadUpcoming, loadNowPlaying} from './seedData';
import usersRouter from './api/users';
import session from 'express-session';
import passport from './authenticate';


dotenv.config();

const errHandler = (err, req, res, next) => {
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍, ${err.stack} `);
};

const app = express();

const port = process.env.PORT;

app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(passport.initialize());
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/movies', moviesRouter);
app.use('/api/users', usersRouter);
app.use('/api/upcoming', upcomingRouter);
app.use('/api/nowPlaying', nowPlayingRouter);
app.use(errHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

if (process.env.SEED_DB) {
  loadUsers();
  loadMovies();
  loadUpcoming();
  loadNowPlaying();
}