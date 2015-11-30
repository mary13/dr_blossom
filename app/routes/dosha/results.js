import Ember from 'ember';
export default Ember.Route.extend({
  constitution: Ember.inject.service(),
  model() {
    const constitution = this.get('constitution');
    console.log(constitution.calculateScore());
    return [
        {
          year: 2010,
          rainfall: 12,
          temperature: 86
        },
        {
          year: 2011,
          rainfall: 15,
          temperature: 88
        },
        {
          year: 2012,
          rainfall: 21,
          temperature: 90
        }
    ];
  }
});
