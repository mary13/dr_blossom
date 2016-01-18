import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('choose-gender', 'Integration | Component | choose gender', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.on('selectGender', Ember.K);

  this.render(
    hbs`{{
      choose-gender
      select-gender=(action 'selectGender')
    }}`);

  assert.ok(this.$().text().trim());

});
