import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('screen-navigator', 'Integration | Component | screen navigator', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{screen-navigator}}`);
  assert.ok(this.$().text().trim());
});
