import moviesService from "./../services/index.js";

export default (dependencies) => {

    const getMovie = async (request, response, next) => {
        //input
        console.log("calling upcominh")
        const movieId = request.params.id;
        // Treatment
        const movie = await moviesService.getMovie(movieId, dependencies);
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
        console.log("calling upcominh")
        const upcomingmovie = await moviesService.findUpcoming(dependencies);
        //output
        response.status(200).json(upcomingmovie);
        };
        

    return {
        getMovie,
        find,
        getUpcomingMovies
    };
};
