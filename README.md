# spotify-artist-browser
Browser to search your favourite artists and their albums

## Setup Instructions
Step 1 - `git clone https://github.com/rutvijkanzaria/turtle-puzzle.git`.

Step 2 - run `npm install` for installing all dependencies. 

Step 3 - run `npm start` for running the application at PORT 8080

## Usage
Basic understanding of using react-router and Axios for Promise based HTTP request from API's. 

## Problem Statement 
We will build a small and simple artist search APP using Spotify’s open APIs https://developer.spotify.com/web-api/console

The app has three screen:

1) The first screen is a search page where user can search for an artist by name. There could be multiple artists that match the name.

2) Once found the artist user was searching for, clicking on the “View Albums”
link will take them to an artist detail page where the albums of the artist will be listed.

3) Clicking on the View Tracks of an album listing will open up a modal that shows the
album name, the release date and a list of tracks in the album and the duration of
each track with an audio preview of 30s.
