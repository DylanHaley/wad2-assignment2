# Assignment 1 - ReactJS app.

Name: Dylan Haley

## Features.
 + Feature 1 - Upcoming movies page
 + Feature 2 - Now playing movies page
 + Feature 3 - Small CSS design changes and bootstrap changes eg. backgroung, effects etc..
 + Feature 4 - Attempted to add latest movies page
 

## API Data Model.

..... List the additional TMDB endpoints used in your assignment, e.g.

+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres.
+ https://api.themoviedb.org/3/movie/latest - get latest movies.
+ https://api.themoviedb.org/3/movie/now_playing - get now playing movies.
+ https://api.themoviedb.org/3/movie/upcoming - get upcoming movies.
+ https://api.themoviedb.org/3/movie/${id}/reviews - get movie review.

## App Design.

### Component catalogue.

![][stories]

### UI Design.

![][cardlink]
>Home page view. Click on a a movie card to be taken to the movie page.

![][movieDetail]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

![][review]
>Shows the full text for a movie review. 

![][upcoming]
>Shows upcoming movies.

![][nowplaying]
>Shows now playing movies.

## Routing.

+ /movies/favorites (protected) - displays the user's favorite movies selection.
+ /reviews/:id (public) - displays the full text of a movie review.
+ /movies/latest (public) - displays a list of latest movies.
+ /movies/upcoming (public) - displays a list of upcoming movies.
+ /movies/nowplaing (public) - displays a list of now playing movies.
+ /reviews/form - give a movie review.

### Data hyperlinking.

![][cardlink]
> Clicking a card causes the display of that movie's details.

![][reviewlink]
>Clicking the 'Full Review' for a review extract will display the full text of the review

## Errors.
![][latest]
>Was unable to get my latest movies page to work. I believe it could have been a simple spelling error but after checking I could not fix the problem.
## Independent learning (If relevant).

---------------------------------

[model]: ./data.jpg
[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
[reviewLink]: ./public/reviewlink.png
[cardLink]: ./public/cardlink.png
[stories]: ./public/storybook.png
[latest]: ./public/latest.png
[upcoming]: ./public/upcoming.png
[nowplaying]: ./public/nowplaying