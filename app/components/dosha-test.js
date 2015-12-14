import Ember from 'ember';
import groupBy from 'blossom/utils/group-by';

export default Ember.Component.extend({
  constitution: Ember.inject.service(),
  didReceiveAttrs() {
    const section = this.get('section');
    if (section !== 'results') {
      this.set('sectionQuestions', this.setupQuestions(section));
    } else {
      this.set('results', this.get('constitution').calculateScore());
    }
  },

  setupQuestions(category) {
    const questions = this.get('constitution.questions').filterBy('category', category);
    return groupBy(questions, 'type');
  }
});
