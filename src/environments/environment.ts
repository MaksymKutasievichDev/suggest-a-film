// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const ApiKey = '17ad7cb14924fc83efb810edcd1705eb'
const ApiReadToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxN2FkN2NiMTQ5MjRmYzgzZWZiODEwZWRjZDE3MDVlYiIsInN1YiI6IjYzYWM3NGYzN2VmMzgxMWY1OGM5NDhmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qjMvQus9sOhJOCIGHurGWkK97nDQ1GeVf10hCpzMiG8"
const ApiAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2M2FjNzRmMzdlZjM4MTFmNThjOTQ4ZjYiLCJ2ZXJzaW9uIjoxLCJuYmYiOjE2NzI3NTg4MDMsImF1ZCI6IjE3YWQ3Y2IxNDkyNGZjODNlZmI4MTBlZGNkMTcwNWViIiwianRpIjoiNTM5NjIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdfQ.EsoposM5Ackrb7d7-UJYKqABhilGsg5jVk3zWnqE9So"
const AccountId = '63ac74f37ef3811f58c948f6'
const ApiBase = 'https://api.themoviedb.org/3/'
const ApiBase4 = 'https://api.themoviedb.org/4/'
const ApiImage500Base = 'https://image.tmdb.org/t/p/w500/'
const ApiImage300Base = 'https://image.tmdb.org/t/p/w300/'
const ApiImageOriginalBase = 'https://image.tmdb.org/t/p/original//'
export const environment = {
  production: false,
  ApiKey: ApiKey,
  ApiBase: ApiBase,
  ApiReadToken: ApiReadToken,
  ApiImage500Base: ApiImage500Base,
  ApiImageOriginalBase: ApiImageOriginalBase,
  AccountId: AccountId,
  ApiBase4: ApiBase4,
  ApiImage300Base: ApiImage300Base,
  ApiAccessToken: ApiAccessToken
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
