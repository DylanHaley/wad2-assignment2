import React, {useContext} from "react";
import MoviesListPageTemplate from "../components/templateMovieListPage";
import {MoviesContext} from '../contexts/moviesContext';

/* Created a new upcoming movies page using code similar to the favourites page*/
const UpcomingMovies = () => {
    const context = useContext(MoviesContext);
    const upcomingMovies = context.upcoming.filter( (m) => {
        return !("favorite" in m);
    });
    return (
      <MoviesListPageTemplate
        title={"Upcoming Movies"}
        movies={upcomingMovies}
        action={(movie) => {
            return ;
        }}
      />
    );
  };
  
  export default UpcomingMovies;