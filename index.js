import dotenv from 'dotenv';
import express from 'express';
import ErrorHandler from './src/utils/ErrorHandler.js';
import db from './src/config/db.js';
import createAccountsRouter from './src/accounts/routes/index.js';
import buildDependencies from "./src/config/dependencies.js";
import createMoviesRouter from './src/movies/routes/index.js';
import createSeriesRouter from './src/series/routes/index.js';
import createActorsRouter from './src/actors/routes/index.js';
import expressStatusMonitor from 'express-status-monitor';

import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 to generate request IDs
import morgan from 'morgan';

dotenv.config();
db.init(); 
const app = express();

// eslint-disable-next-line no-undef
const dependencies = buildDependencies();
const port = process.env.PORT;
app.use((req, res, next) => {
  req.id = uuidv4();
  next();
});

// Use morgan middleware with custom token for request ID
app.use(
  morgan(
    "[:date[iso] #:id] Started :method :url for :remote-addr",
    {
      immediate: true,
      token: (req) => req.id.split('-')[0]
    }
  )
);
morgan.token('id', (req) => {
  return req.id && req.id.split('-')[0]; // Check if req.id exists before splitting
});
;

app.use(expressStatusMonitor())
app.use(express.json());

  app.use('/api/accounts', createAccountsRouter(dependencies));
  app.use('/api/movies', createMoviesRouter(dependencies));
  app.use('/api/series', createSeriesRouter(dependencies))
  app.use('/api/actors', createActorsRouter(dependencies))
  app.use(ErrorHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

