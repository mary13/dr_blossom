import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dosha-score', 'Integration | Component | dosha score', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{dosha-score}}`);
  assert.ok(this.$().text().trim());
});
