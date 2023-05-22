import express from 'express';
import MoviesController from '../controller/index.js';
import AccountsController from '../../accounts/controllers/index.js'

const createMoviesRouter = (dependencies) => {
    const router = express.Router();
    // load controllers with dependencies
    const moviesController = MoviesController(dependencies);
    const accountsController = AccountsController(dependencies);//ADD THIS: Create accountsController with dependencies



    router.route('/')
        .get(moviesController.getAllMovie);
    router.route('/upcoming/').get(accountsController.verify, moviesController.getUpcomingMovies)
    router.route('/popular')
        .get(accountsController.verify, moviesController.getPopularMovie);
        router.route('/genre')
        .get(accountsController.verify, moviesController.getMoviegenres); //ADD THIS: require token for all routes
    router.route('/:id')
        .get(moviesController.getMovie);


    router.route('/similar/:id')
        .get(accountsController.verify, moviesController.getSimilargMovies); //ADD THIS: require token for all routes

    router.route('/credits/:id')
        .get(accountsController.verify, moviesController.getMoviesCredits); //ADD THIS: require token for all routes

    // router.route('/:id/reviews')
    //     .get(moviesController.getMovieReviews);

    return router;
};
export default createMoviesRouter;