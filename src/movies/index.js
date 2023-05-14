import express from 'express';
import {movies, movieReviews, movieDetails} from './moviesData.js';

const movierouter = express.Router(); 
movierouter.get('/', (req, res) => {
    res.json(movies,movieReviews,movieDetails);
});

export default movierouter;
