'use strict';

// Dependencies
import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import 'Bootstrap';


// Components
import ArtistDetails from '../components/ArtistDetails';
import ArtistAlbums from '../components/ArtistAlbums';


class Artist extends Component {
  constructor(props){
    super(props);
    this.state={
      artistDetails: {},
      artistAlbums: [],
      tracks: [],
    }
  }

  componentDidMount(){
    let artistDetails;
    let artistAlbums;
    axios.get(`https://api.spotify.com/v1/artists/${this.props.params.artistId}`)
    .then(res => {
      artistDetails = res.data;
      axios.get(`https://api.spotify.com/v1/artists/${this.props.params.artistId}/albums?limit=10&offset=0`)
      .then(res => {
        artistAlbums= res.data.items
        this.setState({
          artistDetails,
          artistAlbums
        })
      });
    });
  }

  render() {
    return (
      <div>
        <ArtistDetails artistDetails={this.state.artistDetails} />
        <ArtistAlbums loadTracks={this.loadTracks} artistAlbums={this.state.artistAlbums} />
      </div>
    );
  }
};

export default Artist;