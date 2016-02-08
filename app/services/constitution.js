import Ember from 'ember';
import groupBy from 'blossom/utils/group-by';
import prakriti from 'blossom/utils/prakriti-questions';
import vikriti from 'blossom/utils/vikriti-questions';

function initializeQuestion(q, idx) {
  return Ember.merge(q, {
    isSelected: false,
    id: idx + 1
  });
}

function buildQuestions(questions) {
  return Ember.computed({
    get() {
      return questions.map(initializeQuestion);
    },
    set(key, value) {
      return value;
    }
  });
}

export default Ember.Service.extend({
  user: {},
  flashMessages: Ember.inject.service(),

  prakriti: buildQuestions(prakriti),
  vikriti: buildQuestions(vikriti),
  doshas: ['vata', 'pitta', 'kapha'],

  setGender(gender) {
    this.set('gender', gender);
  },

  sectionQuestions(testType, section) {
    const questions = this.get(testType).filterBy('section', section);
    return groupBy(questions, 'type');
  },

  prakritiResults() {
    let answered = this.get('prakriti').filterBy('isSelected');
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

  vikritiResults() {
    let vikritiQuestions = this.get('vikriti');
    let answered = vikritiQuestions.filterBy('isSelected');
    let doshas = this.get('doshas');

    let grouped = doshas.reduce((memo, dosha) => {
      const answers = answered.filterBy('dosha', dosha);
      return Ember.merge(memo, {
        [dosha]: answers
      });
    }, {});

    let gender = this.get('gender');
    let allDoshaQuestions = gender === 'female' ? vikritiQuestions : vikritiQuestions.rejectBy('section', 'reproductive');

    let percentages = doshas.reduce((memo, dosha) => {
      let ratio = grouped[dosha].length / allDoshaQuestions.length;
      return Ember.merge(memo, {
        [dosha]: (ratio * 100).toFixed(0)
      });
    }, {});

    return {
      percentages,
      // answersByType: groupBy(answered, 'type'),
      isAnswered: answered.length
    };

  },

  resetAnswers(testType) {
    this.set(testType, this.get(testType).map(initializeQuestion));
  }
});
