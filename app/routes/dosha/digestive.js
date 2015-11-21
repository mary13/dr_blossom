import Ember from 'ember';

export default Ember.Route.extend({
  constitution: Ember.inject.service(),
  model() {
    return this.get('constitution.questions').filterBy('category', 'digestive');
  }
});
