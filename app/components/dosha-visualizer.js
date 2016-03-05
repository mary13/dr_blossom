import Ember from 'ember';

export default Ember.Component.extend({
  svgSize: 60,

  linear: Ember.computed(function() {
    return this.get('svgSize') / 2;
  }),

  diagonal: Ember.computed(function() {
    return this.get('linear') / 2;
  }),

  hypotenuse: Ember.computed(function() {
    return this.get('linear') * 1.5;
  }),

  strokeWidth: 3
});
