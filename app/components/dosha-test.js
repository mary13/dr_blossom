import Ember from 'ember';

export default Ember.Component.extend({
  constitution: Ember.inject.service(),
  didReceiveAttrs() {
    const testType = this.get('test-type');
    const section = this.get('section');
    if (section !== 'results') {
      let questions = this.get('constitution').sectionQuestions(testType, section);
      this.set('sectionQuestions', questions);
    } else {
      this.set('results', this.get('constitution').getResults(testType));
    }
  },
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
