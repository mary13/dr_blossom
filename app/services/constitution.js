import Ember from 'ember';
import questions from 'blossom/utils/dosha-questions';
import groupBy from 'blossom/utils/group-by';

function initializeQuestion(q, idx) {
  return Ember.merge(q, {
    isSelected: false,
    id: idx + 1
  });
}

export default Ember.Service.extend({
  user: {},
  flashMessages: Ember.inject.service(),

  doshas: ['vata', 'pitta', 'kapha'],

  questions: Ember.computed({
    get() {
      return questions.map(initializeQuestion);
    },
    set(key, value) {
      return value;
    }
  }),

  setGender(gender) {
    this.set('gender', gender);
  },

  sectionQuestions(section) {
    const questions = this.get('questions').filterBy('section', section);
    return groupBy(questions, 'type');
  },

  getResults() {
    let answered = this.get('questions').filterBy('isSelected');
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
      });
    }, {});

    return {
      percentages,
      answersByType: groupBy(answered, 'type'),
      isAnswered: answered.length
    };
  },

  resetAnswers() {
    this.set('questions', this.get('questions').map(initializeQuestion));
  }
});
