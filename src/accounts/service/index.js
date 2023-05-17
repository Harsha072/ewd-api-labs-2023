import Account from '../entities/accounts.js';
import TokenManager from '../security/TokenManager.js';


export default {
  registerAccount: async  (firstName, lastName, email, password, {accountsRepository,authenticator}) => {
    password = await authenticator.encrypt(password);
    const account = new Account(undefined, firstName, lastName, email, password);
    return accountsRepository.persist(account);
  },
  updateAccount: async (id, firstName, lastName, email, password, {accountsRepository,authenticator})=>{
    password = await authenticator.encrypt(password);
    const account = new Account(id, firstName, lastName, email, password);
    return accountsRepository.merge(account);
   },
  getAccount: (accountId, {accountsRepository}) => {
    return accountsRepository.get(accountId);
  },
  find: ({accountsRepository})=>{
    return accountsRepository.find();
  },
  findByEmail: (email, {accountsRepository})=>{
    return accountsRepository.getByEmail(email);
  },

 verifyToken:   async (token,{accountsRepository, tokenManager}) => {
  console.log("verify token:::: ",token)
  const decoded = await tokenManager.decode(token);
  const user = await accountsRepository.getByEmail(decoded.email);
  if (!user) {
      throw new Error('Bad token');
  }
  return user.email;
},


  authenticate: async (email, password, { accountsRepository, authenticator, tokenManager }) => {
    console.log("token ",tokenManager)
    const account = await accountsRepository.getByEmail(email);
    const result = await authenticator.compare(password, account.password);
    console.log("the result ",result)
    if (!result) {
      throw new Error('Bad credentials');
    }
    
    const token = tokenManager.generate({ email: account.email });
    return token;
  }
,
getFavourites: async (accountId, { accountsRepository }) => {
  const account = await accountsRepository.get(accountId);
  return account.favourites;
},
addFavourite: async (accountId, movieId, { accountsRepository }) => {
  const account = await accountsRepository.get(accountId);
  if (!account.favourites.includes(movieId)) {
    account.favourites.push(movieId);
  }
  return await accountsRepository.merge(account);

}


};
