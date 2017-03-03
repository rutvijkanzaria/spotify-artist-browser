'use strict';

import React from 'react';
import { Link } from 'react-router';

const SearchResults = props => {
  
	const artistList = props.allArtists.map((val, index) => {
		return (
      <div key={val.id} className="col-sm-4 p-5">
      	<img 
      		src={(val.images.length > 0) ? val.images[0].url : '../../images/user.svg'} 
      		className="img-fluid artist-img"
      	/>
      	<Link to={`/artist/${val.id}`} className="text-center d-block mt-3">{val.name}</Link>
      </div>
		)
	})

	return(
		<div className="container">
      <div className="row">
        {artistList}
      </div>     
    </div>
	)
}

export default SearchResults;