// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebase: {
    apiKey: 'AIzaSyDWNVNTXuk-SUdF0un9h9Ux96Vpq8xZC30',
    authDomain: 'saskoandroid-93176.firebaseapp.com',
    databaseURL: 'https://saskoandroid-93176.firebaseio.com',
    projectId: 'saskoandroid-93176',
    storageBucket: 'saskoandroid-93176.appspot.com',
    messagingSenderId: '105105935749'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
