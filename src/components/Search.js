import React from "react";

const Search = props => (
    <div class="row">
        <div class="col-lg-4  offset-md-4 p-0">

            <form>
                <div className="form-group">
                    <label htmlFor="search">Search:</label>
                    <input
                        onChange={props.handleInputChange}
                        value={props.value}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Search For a Movie"
                        id="search"
                    />
                    <br />
                    <button onClick={props.handleFormSubmit} className="btn btn-primary">
                        Search
                    </button>
                </div>
            </form>

        </div>
    </div>
);

export default Search;