import Ember from 'ember';

export default Ember.Service.extend({
  user: {},
  setGender(gender) {
    this.set('gender', gender);
  }
});
