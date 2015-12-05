import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dosha', { path: 'dosha/:category' }, function() {
    this.route('results');
  });
});

export default Router;
