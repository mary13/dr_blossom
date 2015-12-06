import Ember from 'ember';
import groupBy from 'blossom/utils/group-by';

export default Ember.Component.extend({
  constitution: Ember.inject.service(),
  didReceiveAttrs() {
    const category = this.get('category');
    if (category !== 'results') {
      this.set('categoryQuestions', this.buildQuestions(category));
    } else {
      this.set('score', this.get('constitution').calculateScore());
    }
  },

  buildQuestions(category) {
    const questions = this.get('constitution.questions').filterBy('category', category);
    return groupBy(questions, 'type');
  }
});
