import Ember from 'ember';

export default Ember.Component.extend({
  constitution: Ember.inject.service(),
  didReceiveAttrs() {
    const section = this.get('section');
    if (section !== 'results') {
      let questions = this.get('constitution').sectionQuestions(section);
      this.set('sectionQuestions', questions);
    } else {
      this.set('results', this.get('constitution').calculateScore());
    }
  }
});
