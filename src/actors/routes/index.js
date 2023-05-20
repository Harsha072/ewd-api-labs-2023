import express from 'express';
import ActorsController from '../controller/index.js';
import AccountsController from '../../accounts/controllers/index.js'

const createActorsRouter = (dependencies) => {
    const router = express.Router();
    // load controllers with dependencies
    const actorsController = ActorsController(dependencies);
    const accountsController = AccountsController(dependencies);//ADD THIS: Create accountsController with dependencies

    router.route('/:id')
    .get(actorsController.getActor);

router.route('/')
    .get(actorsController.getAllActors); 
router.route('/credits/:id')
    .get(accountsController.verify, actorsController.getActorCredits); //ADD THIS: require token for all routes
    // router.route('/:id/reviews')
    //     .get(moviesController.getMovieReviews);

    return router;
};
export default createActorsRouter;