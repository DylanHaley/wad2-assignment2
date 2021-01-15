import React, { useEffect, createContext, useReducer } from "react";
import { getMovies } from "../api/movie-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        nowplaying: [...state.nowplaying]
      };
      case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming], nowplaying: [...state.nowplaying] };
    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies], nowplaying: [...state.nowplaying] };
    case "load-nowplaying":
      return { nowplaying: action.payload.movies, movies: [...state.movies], upcoming:[...state.upcoming] };
    case "add-review":
        return {
            movies: state.movies.map((m) =>
              m.id === action.payload.movie.id
                ? { ...m, review: action.payload.review }
                : m
            ),
          };
      break;
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], nowplaying: [], latest: [] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };
  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
  }, []);

  // useEffect(() => {
  //   getUpcomingMovies().then((movies) => {
  //     dispatch({ type: "load-upcoming", payload: { movies } });
  //   });
  // }, []);

  // useEffect(() => {
  //   getNowPlayingMovies().then((movies) => {
  //     dispatch({ type: "load-nowplaying", payload: { movies } });
  //   });
  // }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        nowplaying: state.nowplaying,
        favorites: state.favorites,
        addToFavorites: addToFavorites,
        addReview: addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;