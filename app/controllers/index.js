import Ember from 'ember';

export default Ember.Controller.extend({
  constitution: Ember.inject.service(),
  actions: {
    selectGender(gender) {
      this.get('constitution').setGender(gender);
      this.transitionToRoute('dosha', 'physical');
    }
  }
});
