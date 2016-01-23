import Ember from 'ember';
import config from './config/environment';

let Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('prakriti');
  this.route('vikriti');
  this.route('dosha', { path: 'dosha/:section' });
  this.route('error-page', { path: '/*wildcard' });
});

export default Router;
