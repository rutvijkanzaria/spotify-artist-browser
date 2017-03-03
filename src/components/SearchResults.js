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
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
          </ul>
        </nav>        
      </div>
		)
	}
}

export default SearchResults;