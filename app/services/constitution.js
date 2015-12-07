import Ember from 'ember';
import questions from 'blossom/utils/dosha-questions';

export default Ember.Service.extend({
  user: {},
  flashMessages: Ember.inject.service(),

  doshas: ['vata', 'pitta', 'kapha'],

  questions: Ember.computed({
    get() {
      return questions.map((q, idx) => {
        return Ember.merge(q, {
          isSelected: false,
          id: idx + 1
        });
      });
    }
  }),

  setGender(gender) {
    this.set('gender', gender);
  },

  calculateScore() {
    let answered = this.get('questions').filterBy('isSelected');
    if (!answered.length) {
      Ember.get(this, 'flashMessages').warning('No questions answered yet!');
    }

    let doshas = this.get('doshas');

    let grouped = doshas.reduce((memo, dosha) => {
      const answers = answered.filterBy('dosha', dosha);
      return Ember.merge(memo, {
        [dosha]: answers
      });
    }, {});

    let percentages = doshas.reduce((memo, dosha) => {
      const ratio = grouped[dosha].length / answered.length;
      return Ember.merge(memo, {
        [dosha]: (ratio * 100).toFixed(0)
      })
    }, {});

    return { grouped, percentages }
  }
});
