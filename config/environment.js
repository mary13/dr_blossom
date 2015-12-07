/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'blossom',
    environment: environment,
    baseURL: '/',
    locationType: process.env.EMBER_CLI_ELECTRON ? 'hash' : 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },


    contentSecurityPolicy: {
     'default-src': "'none'",
     'script-src': "'self' 'sha256-lvdVA4kDCCeUHqFP0ya/huuFYWUd1IFRDrpYyU7KPWs=' 'sha256-lEVH6eXKB6UpAXi/eeWHLOGyGEwf79P2EOwvs3a/BYo=' 'sha256-37u63EBe1EibDZ3vZNr6mxLepqlY1CQw+4N89HrzP9s='",
     'font-src': "'self'",
     'connect-src': "'self'",
     'img-src': "'self'",
     'style-src': "'self' 'unsafe-inline'",
     'media-src': "'self'"
   }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
