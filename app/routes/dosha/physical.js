import Ember from 'ember';

function groupByType(collection) {
  return collection.reduce((memo, item) => {
    const { type } = item;
    if (!memo[type]) {
      memo[type] = [];
    }
    memo[type].pushObject(item);
    return memo;
  }, {});
}

export default Ember.Route.extend({
  constitution: Ember.inject.service(),
  model() {
    const questions = this.get('constitution.questions').filterBy('category', 'physical');
    return groupByType(questions);
  }
});
