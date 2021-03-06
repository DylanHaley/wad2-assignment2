# Assignment 2 

Name: Dylan Haley

## Features.
 + Feature 1 - Intergrated my api from the labs with my react assignemnt
 + Feature 2 - Added upcoming movies to my api
 + Feature 3 - Added nowPlaying movies to my api
 + Feature 4 - Added login and sign up
 + Feature 5 - Mongoose intergration 

## API Data Model.

### GET
+ http://localhost:8080/api/movies - GET a list of the movies.
+ http://localhost:8080/api/movies/:id - GET a movie with a specified id.
+ http://localhost:8080/api/movies/:id/reviews - GET a list of reviews of a movie with a specified id.
+ http://localhost:8080/api/users - GET a list of current users. 
+ http://localhost:8080/api/upcoming - GET a list of upcoming movies.
+ http://localhost:8080/api/nowPlaying - GET a list of now playing movies.

### POST
+ http://localhost:8080/api/users - Post a user

## App Design.

### UI Design.
![][cardLink]
>Home page view. Click on movie card to see details.

![][movieDetail]
>Movie details view. Shows info of the movie, clicking the 'Show reviews' button will display extracts from critic reviews.

![][review]
>Shows the full text for a movie review.

![][upcoming]
>Shows upcoming movies.

![][nowPlaying]
>Shows nowPlaying movies.

![][favorites]
>Shows your list of movies that you have added to your favourites.

![][login]
>Shows the login page.

![][signUp]
>Shows the sign up page.
## Routing.
+ /home (protected) - displays list of movies.
+ /movies/favorites (protected) - displays the user's favorite movies selection.
+ /reviews/:id (protected) - displays the full text of a movie review.
+ /movies/upcoming (protected) - displays a list of upcoming movies.
+ /movies/nowplaing (protected) - displays a list of now playing movies.
+ /reviews/form (protected) - give a movie review.
+ /login (public) - displays login page.
+ /signUp (public) - displays sign up page.

---------------------------------

[model]: ./data.jpg
[movieDetail]: ./moviesApp/public/movieDetail.png
[review]: ./moviesApp/public/review.png
[cardLink]: ./moviesApp/public/cardlink.png
[upcoming]: ./moviesApp/public/upcoming.png
[nowPlaying]: ./moviesApp/public/nowplaying.png
[favorites]: ./moviesApp/public/favorites.png
[login]: ./moviesApp/public/login.png
[signUp]: ./moviesApp/public/signUp.png

