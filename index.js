import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import ArtistBrowser from './src/containers/ArtistBrowser';
import Artist from './src/containers/Artist';

render(
  <Router history={browserHistory}>
  	<Route path="/" component={ArtistBrowser} />
  	<Route path="artist/:artistId" component={Artist} />
  </Router>,
  document.getElementById('root')
);