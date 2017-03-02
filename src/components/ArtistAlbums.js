'use strict';

// Dependencies
import React, {Component} from 'react';
import 'Bootstrap';

// Components
import TracksModal from './TracksModal';

class ArtistAlbums extends Component {
  render() {
    let allAlbums = this.props.artistAlbums.map((album, albumKey) => {
      return (
        <div key={album.id} className="row mt-3">
          <div className="col-md-2">
            <img src={album.images[0].url} className="img-fluid artist-img" alt=""/>
          </div>
          <div className="col-md-10">
            <h6>{album.name}</h6>
            <a href="#" data-toggle="modal" data-target={`#exampleModalLong${albumKey}`}>
              View tracks
            </a>
            <TracksModal albumKey={albumKey} />
          </div>
        </div>
      )
    })

    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12 artist-list">
            <h1 className="display-5 text-center">Albums</h1>
            <audio controls>
              <source src="https://p.scdn.co/mp3-preview/898ce4fc88f6210c9563a4f865f0bf60fd17dc5f?cid=null" type="audio/mp3" />
            Your browser does not support the audio element.
            </audio>
            {allAlbums}
          </div>
        </div>
      </div>
    );
  }
};

export default ArtistAlbums;