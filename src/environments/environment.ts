// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBRHCWBwooCPPv49WsBBuLYMd6Q1VAtbUQ',
    authDomain: 'talloo-app.firebaseapp.com',
    databaseURL: 'https://talloo-app.firebaseio.com',
    projectId: 'talloo-app',
    storageBucket: 'talloo-app.appspot.com',
    messagingSenderId: '652298048160'
    // apiKey: 'AIzaSyBaVc8e7euC1tPM5LRQkMF4Na6-j94DHQU',
    // authDomain: 'sample-test-274b9.firebaseapp.com',
    // databaseURL: 'https://sample-test-274b9.firebaseio.com',
    // projectId: 'sample-test-274b9',
    // storageBucket: 'sample-test-274b9.appspot.com',
    // messagingSenderId: '208871460264'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
