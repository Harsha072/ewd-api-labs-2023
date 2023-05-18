import seriesService from "./../services/index.js";

export default (dependencies) => {

    const getSeries = async (request, response, next) => {
        //input
        console.log("calling upcominh get movie")
        const movieId = request.params.id;
        // Treatment
        const movie = await seriesService.getSeries(movieId, dependencies);
        //output
        response.status(200).json(movie);
    };
    const getAllSeries = async (request, response, next) => {
        //input
        console.log("calling upcominh get all series")
        const movieId = request.params.id;
        // Treatment
        const movie = await seriesService.getAllSeries(dependencies);
        //output
        response.status(200).json(movie);
    };
    const find = async (request, response, next) => {
        //input
        console.log("calling find")
        const query = request.query;
        // Treatment
        const movies = await seriesService.find(query, dependencies);
        //output
        response.status(200).json(movies);
    };

    const getSimilarSeries = async (request, response, next) => {
        console.log("calling similar series", request.params.id)
        const movieId = request.params.id
        const upcomingmovie = await seriesService.getSimilarSeries(movieId, dependencies);
        //output
        response.status(200).json(upcomingmovie);
    };
 
    const getSeriesImages = async (request, response, next) => {
        console.log("calling images series", request.params.id)
        const movieId = request.params.id
        const upcomingmovie = await seriesService.getSeriesImages(movieId, dependencies)
        //output
        response.status(200).json(upcomingmovie);
    };



    return {
        getSeries,
        find,
        getAllSeries,
        getSeriesImages,
        getSimilarSeries,
       
    };
};
