'use strict';

// Dependencies
import React, {Component} from 'react';
import 'Bootstrap';
import axios from 'axios';

// Components
import TracksModal from './TracksModal';

class ArtistAlbums extends Component {
  constructor(props){
    super(props);

    this.state = {
      tracks: [],
      releaseDate: ""
    }
  }

  loadTracks = albumId => {
    axios.get(`https://api.spotify.com/v1/albums/${albumId}`)
    .then(response => {
      this.setState({
        tracks: response.data.tracks.items,
        releaseDate: response.data.release_date
      });
    });
  }


  render() {
    let allAlbums = this.props.artistAlbums.map((album, albumKey) => {
      return (
        <div key={album.id} className="row mt-3">
          <div className="col-md-2">
            <img src={album.images[0].url} className="img-fluid artist-img" alt=""/>
          </div>
          <div className="col-md-10">
            <h6>{album.name}</h6>
            <a href="#" data-toggle="modal" onClick={() => this.loadTracks(album.id)} data-target={`#exampleModalLong${albumKey}`}>
              View tracks
            </a>
            <TracksModal title={album.name} albumKey={albumKey} release={this.state.releaseDate} tracks={this.state.tracks} />
          </div>
        </div>
      )
    })

    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12 artist-list">
            <h1 className="display-5 text-center">Albums</h1>
            {allAlbums}
          </div>
        </div>
      </div>
    );
  }
};

export default ArtistAlbums;