# Assignment 2 - Web API.

Name: [Puttaswamy Harsha]

## Features.


 + Get all movies - Returns all movies

 + Get all sereis- Returns all the popular series

 + Get all popular Actors- Returns all the popular 

 + Get actors credits - Return credits for a particular actor

 + Get actor - Return actor details based on actor id

 + Get Similar Movies-  Get a list of similar movies using a movie ID. 

 + Get Similar Series -  Get a list of similar movies using a series ID.

 + Get series images - Get the images for series based on id

 + Get upcoming movies - Returns all upcoming movies 

 + Get popular movies - Returns all popular movies 

 + Get genre for movies - Returns genre list for movies 

 + Get a movie - Returns a movie details based on id 

 + Get movie credits - Returns movie credits based on movie id 

 + Add favourite movies and series - Add both favourite movies and series for a particular user

+ Get favourite movies and series - Return favourite movies and series for a user

## Installation Requirements



```cmd
git clone https://github.com/Harsha072/ewd-api-labs-2023.git
```

followed by installation

```cmd
 cd ewd-api-labs-2023

```
```cmd
npm install

```



## API Configuration

### Add the below details in your .env file

```bat
NODE_ENV=development
PORT=8080
HOST=localhost
TMDB_KEY=YourTMDBKey
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
DATABASE_DIALECT=mongo
```


## API Design


|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieId} | Get a Movie | N/A | N/A | N/A
| /api/movies/credits/{movieid} | Get all credits for movie | N/A | N/A | N/A  
| /api/movies/upcoming/ | Get all upcoming movies | N/A | N/A | N/A  
| /api/movies/popular/ | Get all popular movies movie | N/A | N/A | N/A  
| /api/movies/genre/ | Get all genre movies movie | N/A | N/A | N/A 
| /api/movies/similar/{movieId} | Get all similar movies based on  movieid | N/A | N/A | N/A
| /api/movies/credits/{movieId} | Get all similar movies based on  movieid | N/A | N/A | N/A
| /api/series |Gets a list of series | N/A | N/A |   
| /api/series/{seriesId} | Get a series | N/A | N/A | N/A
| /api/series/images/{seriesId} | Get a series image based on id | N/A | N/A | N/A
| /api/actors/ | Get all actors | N/A | N/A | N/A
| /api/actors/{actorId} | Get actors detail based on id | N/A | N/A | N/A
| /api/actors/credits/{actorId} | Get credits for an actor based on id | N/A | N/A | N/A
| /api/accounts/{userId}/favourites |  | add favourite movies and sereis | N/A | N/A
| /api/accounts/{userId}/favourites | Get favourite movies and sereis | N/A | N/A | N/A



## Security and Authentication
### APIs that require authentication
/api/movies <br>
/api/movies/{movieId}
/api/movies/credits/{movieid}
/api/movies/upcoming/
/api/movies/popular/
 /api/movies/genre/
 /api/movies/similar/{movieId}
 /api/movies/credits/{movieId}
 /api/series
  /api/series/{seriesId}
  /api/series/images/{seriesId}
  /api/actors/
   /api/actors/{actorId}
   /api/actors/credits/{actorId}
    /api/accounts/{userId}/favourites
    
## Validation

[Briefly describe and extra data validation you added to the API, and where it is implemented in the App.]





## Integrating with React App

[Describe how you integrated your React app with the API. You can provide a link to the React App repo and give an example of an API call from React App. For example: ]

~~~Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then((res) => res.json());
};

~~~

[You can also add images of React app here also if you wish. This can be also shown in the video]

## Extra features

. . Briefly explain any non-standard features, functional or non-functional, developed for the app.  

If you deployed to a hosting service/cloud, you should specify here. 

## Independent learning.

. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .  
