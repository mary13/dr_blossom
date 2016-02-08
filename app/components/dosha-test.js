import Ember from 'ember';

export default Ember.Component.extend({
  constitution: Ember.inject.service(),

  didReceiveAttrs() {
    const testType = this.get('test-type');
    const section = this.get('section');
    const [ otherTestType ] = ['vikriti', 'prakriti'].without(testType);
    this.set('otherTestType', otherTestType);
    if (section !== 'results') {
      let questions = this.get('constitution').sectionQuestions(testType, section);
      this.set('sectionQuestions', questions);
    } else {
      let r = this.get('constitution')[`${testType}Results`]();
      let o = this.get('constitution')[`${otherTestType}Results`]();

      this.set('results', r);
      this.set('otherResults', o);
    }
  },

  actions: {
    printAnswers() {
      const w = window.open();
      w.document.write(this.$().html());
      w.print();
      w.close();
    },

    resetAnswers(test) {
      this.get('constitution').resetAnswers(test);
      const primaryTestType = this.get('test-type');
      const [ otherTestType ] = ['vikriti', 'prakriti'].without(primaryTestType);
      // reset this test
      // or reset other test
      if (primaryTestType === test) {
        this.set('results', this.get('constitution').getResults(test));
      } else {
        this.set('otherResults', this.get('constitution').getResults(otherTestType));
      }
    },
  }
});
