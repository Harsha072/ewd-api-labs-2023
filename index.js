import dotenv from 'dotenv';
import express from 'express';
import ErrorHandler from './src/utils/ErrorHandler.js';
import db from './src/config/db.js';
import createAccountsRouter from './src/accounts/routes/index.js';
import buildDependencies from "./src/config/dependencies.js";
import createMoviesRouter from './src/movies/routes/index.js';
import createSeriesRouter from './src/series/routes/index.js';
import createActorsRouter from './src/actors/routes/index.js';
dotenv.config();
db.init(); 
const app = express();

// eslint-disable-next-line no-undef
const dependencies = buildDependencies();
const port = process.env.PORT;
app.use(express.json());
  app.use('/api/accounts', createAccountsRouter(dependencies));
  app.use('/api/movies', createMoviesRouter(dependencies));
  app.use('/api/series', createSeriesRouter(dependencies))
  app.use('/api/actors', createActorsRouter(dependencies))
  app.use(ErrorHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

