import Ember from 'ember';
import config from './config/environment';

let Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('prakriti', { path: 'prakriti/:section' });
  this.route('vikriti', { path: 'vikriti/:section' });
  this.route('select-gender');
  this.route('error-page', { path: '/*wildcard' });
});

export default Router;
