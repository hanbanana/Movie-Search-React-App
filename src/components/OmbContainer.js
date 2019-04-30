import React, { Component } from "react";
import Search from "./Search";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";

class OMBContainer extends Component {

    state = {
        result: {},
        search: ""
    };

    componentDidMount() {
        this.searchMovies("The Lion King");
    };

    searchMovies = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchMovies(this.state.search);
    };

    render() {
        return (
            <div className="container text-center">
                <h1>Movie Search React App</h1>
                <br />

                <Search
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />

                <div className="panel panel-default text-center">
                    <div className="panel-heading">
                        <h2>Title: {this.state.result.Title || "Search for a Movie to Begin"}</h2>
                        <br />
                    </div>
                </div>

                <div className="panel-body text-center">
                    {this.state.result.Title
                        ? <MovieDetail
                            title={this.state.result.Title}
                            src={this.state.result.Poster}
                            director={this.state.result.Director}
                            genre={this.state.result.Genre}
                            released={this.state.result.Released}
                        />
                        : <h3>No Results to Display</h3>}
                </div>

            </div>
        );
    };

};

export default OMBContainer;

