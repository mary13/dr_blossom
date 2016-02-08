import Ember from 'ember';

export default Ember.Route.extend({
  constitution: Ember.inject.service(),
  gender: Ember.computed.alias('constitution.gender'),
  actions: {
    selectGender(gender) {
      if (!gender) {
        this.get('flashMessages').warning('please choose a gender');
        return;
      }
      this.get('constitution').setGender(gender);
      this.transitionTo('vikriti', 'physical');
    }
  }
});
