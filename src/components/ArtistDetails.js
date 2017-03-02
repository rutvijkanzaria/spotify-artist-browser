'use strict';

// Dependencies
import React, {Component} from 'react';

class ArtistDetails extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="row">
          <div className="col-md-2">
            <img src={(this.props.artistDetails.images)? this.props.artistDetails.images[0].url: ''} className="img-fluid artist-img" alt=""/>
          </div>
          <div className="col-md-8">
            <h1 className="display-4">{this.props.artistDetails.name}</h1>
            <p>Followers: {(this.props.artistDetails.followers) ? this.props.artistDetails.followers.total :'123456'}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default ArtistDetails;