// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

interface AppEnv {
  production: boolean;
  baseUri: string;
  appUrl: string;
  apiUrl: string;
}

export const environment: AppEnv = {
  production: false,
  baseUri: 'https://hankali.herokuapp.com/v1/',

  // form io api's
  appUrl: 'https://example.form.io',
  apiUrl: 'https://api.form.io'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
