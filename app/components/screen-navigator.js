import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    transitionPath(path) {
      let testType = this.get('test-type');
      this.get('router').transitionTo(testType, path);
      this.$('.fixed-action-btn').closeFAB();
    }
  }
});
