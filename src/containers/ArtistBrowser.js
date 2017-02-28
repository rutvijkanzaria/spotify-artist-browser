'use strict';

// Dependencies
import React, {Component} from 'react';
import axios from 'axios';

// Sytyes
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/App.css';


// Components

class ArtistBrowser extends Component {
  handleSubmit = e => {
    e.preventDefault();
    let formValue = this.artistInput.value.split(" ").join('+');
    axios.get(`https://api.spotify.com/v1/search?query=${formValue}&type=artist`)
      .then(response => {
        if(response.status === 200){
          console.log(response.data.artists.items);
        }
      });
  }

  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4 text-center">Spotify Artist Browser</h1>
        <p className="lead text-center">Search your favourite artists and their albums here</p>
        <hr className="my-4"/>
        <div className="container">
          <div className="row">
            <div className="offset-md-2 col-md-8">
              <form onSubmit={this.handleSubmit}>
                <div className="input-group">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search for artist" 
                    ref={input => {this.artistInput = input}}
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-secondary" type="submit">Search your Artist</button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ArtistBrowser;