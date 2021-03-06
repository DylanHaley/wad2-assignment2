import userModel from '../api/users/userModel';
import movieModel from '../api/movies/movieModel';
import upcomingModel from '../api/upcoming/upcomingModel';
import nowPlayingModel from '../api/nowPlaying/nowPlayingModel';
import {movies} from './movies.js';
import {upcoming} from './upcoming.js';
import {nowPlaying} from './nowPlaying.js';

const users = [
  {
    'username': 'user1',
    'password': 'test1',
  },
  {
    'username': 'user2',
    'password': 'test2',
  },
];

// deletes all user documents in collection and inserts test data
export async function loadUsers() {
  console.log('load user Data');
    try {
      await userModel.deleteMany();
      await users.forEach(user => userModel.create(user));
      console.info(`${users.length} users were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
  }

  export async function loadMovies() {
    console.log('load seed data');
    console.log(movies.length);
    try {
      await movieModel.deleteMany();
      await movieModel.collection.insertMany(movies);
      console.info(`${movies.length} Movies were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load movie Data: ${err}`);
    }
  }

  export async function loadUpcoming() {
    console.log('load upcoming');
    console.log(upcoming.length);
    try {
      await upcomingModel.deleteMany();
      await upcomingModel.collection.insertMany(upcoming);
      console.info(`${upcoming.length} Upcoming movies were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load movie Data: ${err}`);
    }
  }

  export async function loadNowPlaying() {
    console.log('load nowPlaying');
    console.log(nowPlaying.length);
    try {
      await nowPlayingModel.deleteMany();
      await nowPlayingModel.collection.insertMany(nowPlaying);
      console.info(`${nowPlaying.length} NowPlaying movies were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load movie Data: ${err}`);
    }
  }