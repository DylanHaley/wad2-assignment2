import express from 'express';
import nowPlayingModel from './nowPlayingModel';

const router = express.Router();

router.get('/', (req, res, next) => {
    nowPlayingModel.find().then(movies => res.status(200).send(movies)).catch(next);
  });


  export default router;