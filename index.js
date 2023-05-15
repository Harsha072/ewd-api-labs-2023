import dotenv from 'dotenv';
import express from 'express';

import createAccountsRouter from './src/accounts/routes/index.js';
import buildDependencies from "./src/config/dependencies.js";
import createMoviesRouter from './src/movies/routes/index.js';

dotenv.config();

const app = express();

// eslint-disable-next-line no-undef
const dependencies = buildDependencies();
const port = process.env.PORT;
app.use(express.json());

  app.use('/api/accounts', createAccountsRouter(dependencies));
  app.use('/api/movies', createMoviesRouter(dependencies));
 

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

