import moviesService from "./../services/index.js";

export default (dependencies) => {

    const getMovie = async (request, response, next) => {
        //input
        console.log("calling upcominh get movie",request)
        const movieId = request.params.id;
        // Treatment
        const movie = await moviesService.getMovie(movieId, dependencies);
        //output
        response.status(200).json(movie);
    };
    const getAllMovie = async (request, response, next) => {
        //input
        console.log("calling get all movie")
        const movieId = request.params.id;
        // Treatment
        const movie = await moviesService.getAllMovie(dependencies);
        //output
        response.status(200).json(movie);
    };
    const find = async (request, response, next) => {
        //input
        console.log("calling find")
        const query = request.query;
        // Treatment
        const movies = await moviesService.find(query, dependencies);
        //output
        response.status(200).json(movies);
    };
    const getUpcomingMovies = async (request, response, next) => {
        console.log("calling up all movie")
        const upcomingmovie = await moviesService.findUpcoming(dependencies);
        //output
        response.status(200).json(upcomingmovie);
    };
    const getSimilargMovies = async (request, response, next) => {
        console.log("calling similar", request.params.id)
        const movieId = request.params.id
        const upcomingmovie = await moviesService.getSimilarMovies(movieId, dependencies);
        //output
        response.status(200).json(upcomingmovie);
    };
    const getMoviesCredits = async (request, response, next) => {
        console.log("calling credits", request.params.id)
        const movieId = request.params.id
        const upcomingmovie = await moviesService.getMoviecredit(movieId,dependencies)
        //output
        response.status(200).json(upcomingmovie);
    };
    const getPopularMovie = async (request, response, next) => {
        //input
        console.log("calling get all pop movie")
        const movieId = request.params.id;
        // Treatment
        const movie = await moviesService.getPopularMovie(dependencies);
        //output
        response.status(200).json(movie);
    };


    return {
        getMovie,
        find,
        getUpcomingMovies,
        getAllMovie,
        getSimilargMovies,
        getMoviesCredits,
        getPopularMovie
    };
};
