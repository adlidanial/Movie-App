import React, { Component } from "react";

class Search extends Component {
  state = {
    value: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchMovies(this.state.value);
    this.setState({ value: "" });
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search movies title"
            name="search"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <div className="input-group-append">
            <button className="btn btn-secondary" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Search;
