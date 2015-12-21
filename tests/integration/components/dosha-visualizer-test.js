import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dosha-visualizer', 'Integration | Component | dosha visualizer', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{dosha-visualizer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#dosha-visualizer}}
      template block text
    {{/dosha-visualizer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
