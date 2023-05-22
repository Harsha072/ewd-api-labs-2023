import express from 'express';
import SeriesController from '../controller/index.js';
import AccountsController from '../../accounts/controllers/index.js'

const createSeriesRouter = (dependencies) => {
    const router = express.Router();
    // load controllers with dependencies
    const seriesController = SeriesController(dependencies);
    const accountsController = AccountsController(dependencies);//ADD THIS: Create accountsController with dependencies

    router.route('/:id')
    .get(accountsController.verify,seriesController.getSeries);

router.route('/')
    .get(accountsController.verify,seriesController.getAllSeries); 
router.route('/similar/:id')
    .get(accountsController.verify,accountsController.verify, seriesController.getSimilarSeries); //ADD THIS: require token for all routes

 //ADD THIS: require token for all routes
    router.route('/images/:id')
    .get(accountsController.verify,accountsController.verify, seriesController.getSeriesImages); //ADD THIS: require token for all routes

    // router.route('/:id/reviews')
    //     .get(moviesController.getMovieReviews);

    return router;
};
export default createSeriesRouter;