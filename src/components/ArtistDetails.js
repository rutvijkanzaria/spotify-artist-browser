'use strict';

// Dependencies
import React from 'react';

const ArtistDetails = props => {
  return (
    <div className="jumbotron">
      {
        (Object.keys(props.artistDetails).length !== 0)
        ?
          <div className="row">
            <div className="col-md-2">
              <img src={(props.artistDetails.images.length>0)? props.artistDetails.images[0].url : '/images/user.svg'} className="img-fluid artist-img" alt=""/>
            </div>
            <div className="col-md-8">
              <h1 className="display-4">{props.artistDetails.name}</h1>
              <p>Followers: {(props.artistDetails.followers) ? props.artistDetails.followers.total :'123456'}</p>
            </div>
          </div>
        :
          ""
      }
    </div>
  );
};

export default ArtistDetails;