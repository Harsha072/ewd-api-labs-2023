import express from 'express';
import AccountsController from '../controllers/index.js';
import ValidationController from '../controllers/ValidationController.js';
const createRouter = (dependencies) => {
    const router = express.Router();
    // load controller with dependencies
    const accountsController = AccountsController(dependencies);
    const validationController = ValidationController(dependencies);//Add this lineLoad validation controller with dependencies

    
    router.route('/')
        .post(validationController.validateAccount, accountsController.createAccount); //add validateAccount to route

    router.route('/')
        .get(accountsController.listAccounts);
        router.route('/')
        .get(accountsController.getAccount);

    router.route('/:id')
        .get(accountsController.getAccount);
    router.route('/:id')
        .put(accountsController.updateAccount);


    router.route('/security/token')
        .post(accountsController.authenticateAccount);

    router.route('/:id/favourites')
        .post(accountsController.addFavourite);
    router.route('/:id/favourites')
        .get(accountsController.getFavourites);


    return router;
};
export default createRouter;
