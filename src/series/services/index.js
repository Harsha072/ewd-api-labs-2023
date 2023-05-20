import axios from 'axios';

export default {
    getSeries: async (seriesId) => {
      
        const response = await axios.get(
            `https://api.themoviedb.org/3/tv/${seriesId}?api_key=${process.env.TMDB_KEY}`
          );
          return response.data;
    },
    getAllSeries: async () => {
      
      const response = await axios.get(
          `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_KEY}`
        );
        return response.data;
  },
    findSeries: async (query) => {
      // console.log("geting find:::::")
      //   const response = await axios.get(
      //       `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&${query}`
      //     );
      //     return response.data;
    },

    getSimilarSeries: async (id)=>{
console.log("series calling")
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${process.env.TMDB_KEY}
        `
      );
     console.log("response series ",response.data)
      return response.data;
  },

  getSeriesImages: async (id)=>{
    console.log("seris images",id)
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.TMDB_KEY}`
    );
 
    return response.data;
  }

  };
