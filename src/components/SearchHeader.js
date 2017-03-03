'use strict';

// Dependencies
import React from 'react';


// Components

const SearchHeader = props => {

  let artistInput = "";

  let handleSubmit = e => {
    e.preventDefault();
    let formValue = artistInput.value.split(" ").join('+');
    props.getArtists(formValue, 0, 10);
  }

  return (
    <div className="jumbotron">
      <h1 className="display-4 text-center">Spotify Artist Browser</h1>
      <p className="lead text-center">Search your favourite artists and their albums here</p>
      <div className="container">
        <div className="row">
          <div className="offset-md-2 col-md-8">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Search for artist" 
                  ref={input => {artistInput = input}}
                />
                <span className="input-group-btn">
                  <button className="btn btn-warning" type="submit">Search your Artist</button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;