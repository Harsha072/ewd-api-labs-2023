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
/api/movies/{movieId} <br>
/api/movies/credits/{movieid} <br>
/api/movies/upcoming/ <br>
/api/movies/popular/ <br>
 /api/movies/genre/ <br>
 /api/movies/similar/{movieId} <br>
 /api/movies/credits/{movieId} <br>
 /api/series <br>
  /api/series/{seriesId} <br>
  /api/series/images/{seriesId} <br>
  /api/actors/ <br>
   /api/actors/{actorId} <br>
   /api/actors/credits/{actorId} <br>
    /api/accounts/{userId}/favourites <br>
    
## Validation

~~~Javascript
import Joi from 'joi';

const accountSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string()
      .pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\S+$).{7,20}$/)
      .required()
      .messages({
        'string.pattern.base': 'Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character',
      }),
    firstName: Joi.string().min(1).max(30).required(),
    lastName: Joi.string().min(1).max(30).required(),
  });
export default {account: accountSchema};
~~~


## Integrating with React App

### Integration with react App
~~~Javascript
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        secure: false
      }
    }
  }
})

~~
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

## Extra features

### Logger implementation  API analytics using express status Monitor
![][image1]

### API analytics using express status Monitor
![][image2]



[image1]: ./images/enterpise.jpg
[image2]: ./images/expressstatus.jpg
