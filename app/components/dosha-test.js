import Ember from 'ember';

export default Ember.Component.extend({
  constitution: Ember.inject.service(),

  didReceiveAttrs() {
    const testType = this.get('test-type');
    const section = this.get('section');
    this.set('resetText', `Reset ${testType} questions`);
    if (section !== 'results') {
      let questions = this.get('constitution').sectionQuestions(testType, section);
      this.set('sectionQuestions', questions);
    } else {
      this.set('results', this.get('constitution').getResults(testType));
    }
  },

  otherTestType: Ember.computed('test-type', function() {
    const testType = this.get('test-type');
    return testType === 'vikriti' ? 'prakriti' : 'vikriti';
  }),

  otherResults: Ember.computed('otherTestType', function() {
    return this.get('constitution').getResults(this.get('otherTestType'))
  }),


  actions: {
    printAnswers() {
      const w = window.open();
      w.document.write(this.$().html());
      w.print();
      w.close();
    },

    resetAnswers() {
      const testType = this.get('test-type');
      this.get('constitution').resetAnswers(testType);
      this.set('results', this.get('constitution').getResults(testType));
    }
  }
});
