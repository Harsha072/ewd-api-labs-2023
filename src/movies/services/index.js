import axios from 'axios';

export default {
    getMovie: async (movieId) => {
      
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_KEY}`
          );
          return response.data;
    },
    getAllMovie: async () => {
      
      const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}`
        );
        return response.data;
  },
    find: async (query) => {
      console.log("geting find:::::")
        const response = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&${query}`
          );
          return response.data;
    },

    findUpcoming: async ()=>{
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false
        `
      );
      return response.data;
  },
  getSimilarMovies: async (id)=>{
    console.log("similar",id)
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    );
    return response.data;
}
,
getMoviecredit: async (id)=>{
  console.log("credit",id)
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  );
  return response.data;
},
getMoviegenres: async ()=>{
  console.log("genre")
  const response = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  );
  return response.data;
},
getPopularMovie: async ()=>{
  console.log("popular")
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  );
  return response.data;
},


  };
