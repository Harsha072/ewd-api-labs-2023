import actorService from "./../services/index.js";

export default (dependencies) => {

    const getActor = async (request, response, next) => {
        //input
        console.log("calling upcominh get movie")
        const movieId = request.params.id;
        // Treatment
        const movie = await actorService.getActor(movieId, dependencies);
        //output
        response.status(200).json(movie);
    };
    const getAllActors = async (request, response, next) => {
        //input
        console.log("calling upcominh get all series")
        const movieId = request.params.id;
        // Treatment
        const movie = await actorService.getAllActors(dependencies);
        //output
        response.status(200).json(movie);
    };
    const find = async (request, response, next) => {
        //input
        console.log("calling find")
        const query = request.query;
        // Treatment
        const movies = await actorService.find(query, dependencies);
        //output
        response.status(200).json(movies);
    };

    const getActorCredits = async (request, response, next) => {
        console.log("calling similar series", request.params.id)
        const movieId = request.params.id
        const upcomingmovie = await actorService.getActorCredits(movieId, dependencies);
        //output
        response.status(200).json(upcomingmovie);
    };
 
   



    return {
        getActor,
        find,
        getAllActors,
        getActorCredits,
        
       
    };
};
