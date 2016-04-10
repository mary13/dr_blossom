import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('screen-navigator', 'Integration | Component | screen navigator', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{screen-navigator}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#screen-navigator}}
      template block text
    {{/screen-navigator}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
