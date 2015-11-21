import Ember from 'ember';
import questions from 'blossom/utils/dosha-questions';

export default Ember.Route.extend({
  model() {
    return Ember.get(questions, 'mental')
  }
});
