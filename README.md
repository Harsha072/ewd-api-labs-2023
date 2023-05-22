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

 + Get series images - Get the images for series

 + Get upcoming movies - Returns all upcoming movies 

 + Get popular movies - Returns all popular movies 

 + Get genre for movies - Returns genre list for movies 

 + Get a movie - Returns a movie details based on id 

 + Get movie credits - Returns movie credits based on movie id 

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
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/credits/{movieid} | Get all credits for movie | N/A | N/A | N/A  
| /api/movies/upcoming/ | Get all upcoming movies | N/A | N/A | N/A  
| /api/movies/popular/ | Get all popular movies movie | N/A | N/A | N/A  
| ... | ... | ... | ... | ...

[If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).]
https://app.swaggerhub.com/apis-docs/fxwalsh/userAPI/initial




## Security and Authentication
[Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected. **REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB]**

[Give details of the routes that have authentication. ]



## Validation

[Briefly describe and extra data validation you added to the API, and where it is implemented in the App.]



## Testing

Briefly state how you tested the API. 

Give an example of any automated testing results or link to a report. 

![](./images/tests-image.png)

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
