import React, { Component } from "react";
import NavBar from "./layouts/NavBar";
import Search from "./Search";
import MoviesItem from "./MoviesItem";
import axios from "axios";

class Movies extends Component {
  state = {
    Search: [],
  };

  searchMovies = (title) => {
    axios
      .get(`http://www.omdbapi.com/?s=${title}&apikey=51b843c1`)
      .then((data) => {
        const Search = data.data;
        this.setState({ Search });
      });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <NavBar />
          <Search searchMovies={this.searchMovies} />
          <MoviesItem Title={this.state.Search.Search} />
        </div>
      </div>
    );
  }
}

export default Movies;
