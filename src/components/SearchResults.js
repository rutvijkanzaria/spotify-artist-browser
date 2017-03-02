'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

class SearchResults extends Component{
	static propTypes = {
		allArtists: React.PropTypes.array.isRequired,
	}


	render(){
		const artistList = this.props.allArtists.map((val, index) => {
			return (
				<div key={val.id} className="row">
          <div className="col-sm-3">
          	<img 
          		src={(val.images.length > 0) ? val.images[0].url : '../../images/user.svg'} 
          		className="img-fluid artist-img" 
          		alt=""
          	/>
          </div>
          <div className="col-sm-9">
          	<h4>{val.name}</h4>
          	{
          		val.genres.map((genre, indx) => {
          			return <span key={indx} className="badge badge-primary genres">{genre}</span>
	          	})
          	}
          	<Link to={`/artist/${val.id}`} className="btn btn-primary view-albums-btn">View Albums</Link>
          </div>
        </div>
			)
		})

		return(
			<div className="container artist-list">
        {artistList}
      </div>
		)
	}
}

export default SearchResults;