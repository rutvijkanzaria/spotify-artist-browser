'use strict';

// Dependencies
import React, {Component} from 'react';

// Sytyes
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/App.css';


// Components
import SearchHeader from '../components/SearchHeader';
import SearchResults from '../components/SearchResults';

class ArtistBrowser extends Component {
  constructor(props){
    super(props);
    this.state = {
      artists: []
    }
  }

  getArtists = artists => {
    this.setState({artists});
  }

  render() {
    return (
      <div>
        <SearchHeader getArtists={this.getArtists} />
        <SearchResults allArtists={this.state.artists} />
      </div>
    );
  }
};

export default ArtistBrowser;