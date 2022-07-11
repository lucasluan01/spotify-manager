// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://api.spotify.com/v1',
  currentUser: 'me',
  playlists: 'playlists',
  tracks: 'tracks',
  recommendations: 'recommendations',
  browse: 'browse',
  categories: 'categories',
  artist: 'artists',
  search: 'search',
  player: 'player',
  albums: 'albums',
  users: 'users',
  country: 'BR',
  locale: 'pt_BR',
};

export const authorizationSpotify = {
  clientId: '3a17febb99344e8180c6cf30378d09d8',
  redirectUri: 'http://localhost:4200/',
  authEndPoint: 'https://accounts.spotify.com/authorize',
  scopes: [
    'playlist-modify-private',
    'playlist-modify-public',
    'playlist-read-private',
    // 'playlist-read-public',
    'user-library-read',
    'user-read-email',
    'user-read-private',
    'user-read-recently-played',
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
