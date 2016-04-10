/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: ['bower_components/materialize/sass']
    },
  });

  app.import(app.bowerDirectory + '/materialize/dist/font/material-design-icons/Material-Design-Icons.eot', { destDir: 'font/material-design-icons' });
  app.import(app.bowerDirectory + '/materialize/dist/font/material-design-icons/Material-Design-Icons.ttf', { destDir: 'font/material-design-icons' });
  app.import(app.bowerDirectory + '/materialize/dist/font/material-design-icons/Material-Design-Icons.svg', { destDir: 'font/material-design-icons' });
  app.import(app.bowerDirectory + '/materialize/dist/font/material-design-icons/Material-Design-Icons.woff', { destDir: 'font/material-design-icons' });
  app.import(app.bowerDirectory + '/materialize/dist/font/material-design-icons/Material-Design-Icons.woff2', { destDir: 'font/material-design-icons' });

  return app.toTree();
};
