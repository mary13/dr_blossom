import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dosha', function() {
    this.route('mental');
    this.route('physical');
    this.route('digestive');
    this.route('results');
  });
});

export default Router;
