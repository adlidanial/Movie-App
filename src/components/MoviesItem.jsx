import React, { Component } from "react";

class MoviesItems extends Component {
  state = {};
  render() {
    const Title = this.props.Title;
    if (!Title || Title.length === 0) return <p>Searching...</p>;
    const movies = Title.map((movies) => {
      return (
        <li className="list-group-item text-left" key={movies.imdbID}>
          <img
            src={movies.Poster}
            alt={movies.Title}
            className="float-left"
            width="100px"
            style={{ padding: ".5em" }}
          ></img>
          <p>
            <b>Title:</b> {movies.Title}
          </p>
          <p>
            <b>Year:</b> {movies.Year}
          </p>
        </li>
      );
    });

    return (
      <div>
        <ul className="list-group">{movies}</ul>
      </div>
    );
  }
}

export default MoviesItems;
