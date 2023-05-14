import dotenv from 'dotenv';
import express from 'express';
import movierouter from './src/movies/index.js';

dotenv.config();

const app = express();

// eslint-disable-next-line no-undef
const port = process.env.PORT;
app.use(express.json());

app.use('/api/movies', movierouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

