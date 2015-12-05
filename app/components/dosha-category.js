import Ember from 'ember';
import groupBy from 'blossom/utils/group-by';

export default Ember.Component.extend({
  constitution: Ember.inject.service(),
  didReceiveAttrs() {
    const category = this.get('category');
    const questions = this.get('constitution.questions').filterBy('category', category);
    this.set('categoryQuestions', groupBy(questions, 'type'));
  },
});
