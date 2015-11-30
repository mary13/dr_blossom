import Ember from 'ember';
import groupBy from 'blossom/utils/group-by';


export default Ember.Route.extend({
  constitution: Ember.inject.service(),
  model() {
    const questions = this.get('constitution.questions').filterBy('category', 'physical');
    return groupBy(questions, 'type');
  }
});
