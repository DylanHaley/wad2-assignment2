import React, {useContext} from "react";
import MoviesListPageTemplate from "../components/templateMovieListPage";
import {MoviesContext} from '../contexts/moviesContext';

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