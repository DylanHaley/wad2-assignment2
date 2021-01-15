import React, {useContext} from "react";
import MoviesListPageTemplate from "../components/templateMovieListPage";
import {MoviesContext} from '../contexts/moviesContext'

/*Attempted to add a latest movies page but was unable to get it to work*/
const LatestMovies = () => {
    const context = useContext(MoviesContext);
    const latestMovies = context.latest.filter( (m) => {
        return !("favorite" in m);
    });
    return (
      <MoviesListPageTemplate
        title={"Latest Movies"}
        movies={latestMovies}
        action={(movie) => {
            return ;
        }}
      />
    );
  };
  
  export default LatestMovies;