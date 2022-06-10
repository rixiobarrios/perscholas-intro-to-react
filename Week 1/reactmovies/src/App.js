// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS
import MovieInfo from "./MovieInfo";

// 3. CREATE COMPONENT
class App extends React.Component {
  // Add a state to our component
  state = {
    baseURL: "http://www.omdbapi.com/?",
    apikey: "apikey=" + "61bf46d3",
    query: "&t=",
    movieTitle: "",
    searchURL: "",
  };

  ////// METHODS
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(
      {
        searchURL:
          this.state.baseURL +
          this.state.apikey +
          this.state.query +
          this.state.movieTitle,
      },
      () => {
        fetch(this.state.searchURL)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.setState({
              searchResult: data,
            });
          })
          .catch((error) => {
            console.error(error.message);
          });
      }
    );
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="movieTitle">Title</label>{" "}
          <input
            id="movieTitle"
            type="text"
            value={this.state.movieTitle}
            onChange={this.handleChange}
          />{" "}
          <input type="submit" value="Find Movie Info" />
        </form>
        {this.state.searchResult ? (
          <MovieInfo searchResult={this.state.searchResult} />
        ) : (
          ""
        )}
      </>
    );
  }
}

// 4. EXPORT COMPONENT
export default App;
