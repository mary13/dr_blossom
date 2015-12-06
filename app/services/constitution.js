import Ember from 'ember';
import questions from 'blossom/utils/dosha-questions';

questions.forEach((q, idx) => {
  Ember.merge(q, {
    isSelected: false,
    id: idx + 1
  });
});

const doshas = ['vata', 'pitta', 'kapha'];

export default Ember.Service.extend({
  user: {},
  questions: questions,
  flashMessages: Ember.inject.service(),

  setGender(gender) {
    this.set('gender', gender);
  },

  calculateScore() {
    let answered = this.get('questions').filterBy('isSelected');
    if (!answered.length) {
      Ember.get(this, 'flashMessages').warning('No questions answered yet!');
    }

    let grouped = doshas.reduce((memo, dosha) => {
      const answers = answered.filterBy('dosha', dosha);
      return Ember.merge(memo, {
        [dosha]: answers
      });
    }, {});

    let percentages = doshas.reduce((memo, dosha) => {
      const ratio = (grouped[dosha].length / answered.length).toFixed(3);
      return Ember.merge(memo, {
        [dosha]: ratio * 100
      })
    }, {});

    return { grouped, percentages }
  }
});
