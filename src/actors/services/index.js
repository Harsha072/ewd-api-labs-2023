import axios from 'axios';

export default {
    getActor: async (seriesId) => {
      console.log("calling get acto")
        const response = await axios.get(
            `https://api.themoviedb.org/3/person/${seriesId}?api_key=${process.env.TMDB_KEY}`
          );
          return response.data;
    },
    getAllActors: async () => {
      console.log("calling get all actors")
      const response = await axios.get(
          `https://api.themoviedb.org/3/person/popular?api_key=${process.env.TMDB_KEY}`
        );
        return response.data;
  },
 

    getActorCredits: async (id)=>{
console.log("actor credits :::::")
      const response = await axios.get(
        `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false
        `
      );
 
      return response.data;
  },



  };
