import AccountsRepositoryInMemory from '../accounts/repositories/InMemoryRepository.js';

const buildDependencies = () => {
  const dependencies = {
  };

  // eslint-disable-next-line no-undef
  if (process.env.DATABASE_DIALECT === "in-memory") {
    dependencies.accountsRepository = new AccountsRepositoryInMemory();
  } else if (process.env.DATABASE_DIALECT === "mongo") {
    throw new Error('Add Mongo Support');
  } else if (process.env.DATABASE_DIALECT === "mysql") {
    throw new Error('Add MySQL support');
  } else {
    throw new Error('Add DB Support to project');
  }
  return dependencies;
};

export default buildDependencies;
