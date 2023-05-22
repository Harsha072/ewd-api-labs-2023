import accountService from "../service/index.js";

export default (dependencies) => {

    const createAccount = async (request, response) => {
        // Input
        const { firstName, lastName, email, password } = request.body;
        // Treatment
        const account = await accountService.registerAccount(firstName, lastName, email, password, dependencies);
        //output
        response.status(201).json(account);
    };
    const authenticateAccount = async (request, response) => {
      
        try {
            const { email, password } = request.body;
            const token1 = await accountService.authenticate(email, password, dependencies);
            const {accountid} = token1
            const {token} = token1
            console.log("token1",token1) 
            response.status(200).json({ id:accountid ,token: `BEARER ${token}` });
        } catch (error) {
            console.log("the erro",error);
            response.status(401).json({ message: 'Unauthorised' });
        }
    };
    
    const addFavourite = async (request, response, next) => {
        try { console.log("req ",request.body)

            const { type,movieId } = request.body;
            const id = request.params.id;
            console.log("the type",type)
            console.log("the movie id",movieId)

            const account = await accountService.addFavourite(id, request.body, dependencies);
            response.status(200).json(account);
        } catch (err) {
            next(new Error(`Invalid Data ${err.message}`));
        }
    };
    const getFavourites = async (request, response, next) => {
        try {
            const id = request.params.id;
            const favourites = await accountService.getFavourites(id, dependencies);
            console.log("the controller ",favourites);
            response.status(200).json(favourites);
        } catch (err) {
            next(new Error(`Invalid Data ${err.message}`));
        }
    };
    const verify = async (request, response, next) => {
        try {
          // Input
        
          const authHeader = request.headers.authorization;
        
          const tokenArray = authHeader.split(" ");
      
          const accessToken = tokenArray.length === 2 ? tokenArray[1] : null;
         
          
          if (!accessToken) {
            throw new Error("Access token not found");
          }
      
          const user = await accountService.verifyToken(accessToken, dependencies);
      
          // Output
          next();
        } catch (err) {
          console.log(err);
          // Token Verification Failed
          next(new Error(`Verification Failed ${err.message}`));
        }
      };

    const getAccount = async (request, response) => {
        //input
        const accountId = request.params.id;
        // Treatment
        const account = await accountService.getAccount(accountId, dependencies);
        //output
        response.status(200).json(account);
    };
    const listAccounts = async (request, response) => {
        // Treatment
        const accounts = await accountService.find(dependencies);
        //output
        response.status(200).json(accounts);
    };
    const updateAccount = async (request, response) => {
        // Input
        const id = request.params.id;
        console.log("id ",id);
        const { firstName, lastName, email, password } = request.body;
        const account = await accountService.updateAccount(id,firstName,lastName,email,password, dependencies);
        response.status(201).json(account);
    //TODO - You implement the rest
    };
    



    return {
        createAccount,
        getAccount,
        listAccounts,
        updateAccount,
        authenticateAccount,
        addFavourite,
        getFavourites,
        verify
    };
};
