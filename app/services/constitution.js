import Ember from 'ember';
import questions from 'blossom/utils/dosha-questions';

questions.forEach((q, idx) => {
  Ember.merge(q, {
    isSelected: false,
    id: idx + 1
  });
});

export default Ember.Service.extend({
  user: {},
  questions: questions,

  setGender(gender) {
    this.set('gender', gender);
  },

  calculateScore() {
    const score = this.get('questions').filterBy('isSelected')
    console.log(score);
  }
});
