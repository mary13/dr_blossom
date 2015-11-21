import Ember from 'ember';
import questions from 'blossom/utils/dosha-questions';

// need to bring questions into this session
// keep track of their checked status


// const doshaQuestions = Object.keys(questions).map(key => {
//   const category = Ember.get(questions, key);
//   return Object.keys(category).map(dosha => {
//     return category[dosha].map(question => question.isSelected = false)
//   })
// })

export default Ember.Service.extend({
  user: {},
  questions: questions,
  setGender(gender) {
    this.set('gender', gender);
  }
});
