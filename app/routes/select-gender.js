import Ember from 'ember';

export default Ember.Route.extend({
  constitution: Ember.inject.service(),
  actions: {
    selectGender(gender) {
      this.get('constitution').setGender(gender);
      this.transitionTo('vikriti', 'physical');
    }
  }
});
