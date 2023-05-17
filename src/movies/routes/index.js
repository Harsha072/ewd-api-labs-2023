import express from 'express';
import MoviesController from '../controller/index.js';
import AccountsController from '../../accounts/controllers/index.js'

const createMoviesRouter = (dependencies) => {
    const router = express.Router();
    // load controllers with dependencies
    const moviesController = MoviesController(dependencies);
    const accountsController = AccountsController(dependencies);//ADD THIS: Create accountsController with dependencies

    //  router.route('/*')
    //     .all(accountsController.verify, moviesController.getAllMovie); //ADD THIS: require token for all routes

    router.route('/:id')
        .get(moviesController.getMovie);

    router.route('/')
        .get(moviesController.find); 

    // router.route('/:id/reviews')
    //     .get(moviesController.getMovieReviews);

    return router;
};
export default createMoviesRouter;