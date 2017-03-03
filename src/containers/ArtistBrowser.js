'use strict';

// Dependencies
import React, {Component} from 'react';
import axios from 'axios';

// Sytyes
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/App.css';


// Components
import SearchHeader from '../components/SearchHeader';
import SearchResults from '../components/SearchResults';
import Pagination from '../components/Pagination';

class ArtistBrowser extends Component {
  constructor(props){
    super(props);
    this.state = {
      artists: [],
      artistName: "",
      total: 0,
      offset: 0,
      activeLink: 0
    }
  }

  getArtists = (artistName, offset, limit) => {
    axios.get(`https://api.spotify.com/v1/search?query=${artistName}&type=artist&offset=${offset}&limit=${limit}`)
      .then(response => {
        if(response.status === 200){
          let artists = response.data.artists.items;
          let total = (response.data.artists.total%10 === 0) ? Math.floor(response.data.artists.total/10) : Math.floor(response.data.artists.total/10) +1;
          this.setState({
            artists,
            artistName,
            total,
            offset,
            activeLink: offset/10
          });
        }
      });
  }

  loadPage = (e, index) => {
    if(index !== this.state.offset){
      this.getArtists(this.state.artistName, (index*10), 10)
    }
  }

  render() {
    return (
      <div>
        <SearchHeader getArtists={this.getArtists} />
        <SearchResults allArtists={this.state.artists} />
        {
          (this.state.total !== 0)
          ?
            <Pagination activeLink={this.state.activeLink} total={this.state.total} loadPage={this.loadPage} />
          :
            <div></div>
        }
      </div>
    );
  }
};

export default ArtistBrowser;