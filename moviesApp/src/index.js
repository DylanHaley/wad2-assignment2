import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import PrivateRoute from "./routes/privateRoute";
import AuthProvider from "./contexts/authContext";
import UserHomePage from "./pages/userHomePage"
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"   
import FavoriteMoviesPage from './pages/favoritesMoviesPage'      
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import UpcomingMovies from './pages/upcomingMovies';
import NowPlayingMovies from './pages/nowPlayingMovies';
import LatestMovies from './pages/latestMovies';

const App = () => {
  return (
      <BrowserRouter>
        <div className="jumbotron">
          <AuthProvider>
          <SiteHeader />      {}
          <div className="container-fluid">
          <MoviesContextProvider>     {}
          <GenresContextProvider>    {}
            <Switch>
          <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />    
          <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
          <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <PrivateRoute exact path="/movies/upcoming" component={UpcomingMovies}/>
          <PrivateRoute exact path="/movies/nowplaying" component={NowPlayingMovies}/>
          <PrivateRoute exact path="/movies/latest" component={LatestMovies}/>
          <PrivateRoute path="/movies/:id" component={MoviePage} />
          <PrivateRoute path="/home" component={UserHomePage}/>
          <Route exact path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
        </GenresContextProvider>    
        </MoviesContextProvider>   
      </div>
      </AuthProvider>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));