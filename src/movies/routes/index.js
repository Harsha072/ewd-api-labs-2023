import express from 'express';
import MoviesController from '../controller/index.js';

const createMoviesRouter = (dependencies) => {
    const router = express.Router();
    // load controllers with dependencies
    const moviesController = MoviesController(dependencies);

    router.route('/:id')
        .get(moviesController.getMovie);

    router.route('/')
        .get(moviesController.find);
    router.get('/upcoming', (req, res) => {
            console.log('hello hiiiii');
           
          });

    return router;
};
export default createMoviesRouter;
