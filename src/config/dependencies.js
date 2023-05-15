import AccountsRepositoryInMemory from '../accounts/repositories/InMemoryRepository.js';
import AccountsRepositoryMongo from '../accounts/repositories/MongoAccountRepository.js';
const buildDependencies = () => {
  const dependencies = {
  };

  // eslint-disable-next-line no-undef
  if (process.env.DATABASE_DIALECT === "in-memory") {
    dependencies.accountsRepository = new AccountsRepositoryInMemory();
  } else if (process.env.DATABASE_DIALECT === "mysql") {
    throw new Error('Add mysql Support to project');
  }
  else if (process.env.DATABASE_DIALECT === "mongo") {
    dependencies.accountsRepository = new AccountsRepositoryMongo();
  } else {
    throw new Error('Add DB Support to project');
  }
  return dependencies;
};

export default buildDependencies;
