import Ember from 'ember';
import questions from 'blossom/utils/dosha-questions';

export default Ember.Route.extend({
  constitution: Ember.inject.service(),
  model() {
    // console.log('questions', questions);
    return Ember.get(questions, 'physical')
  }
});
