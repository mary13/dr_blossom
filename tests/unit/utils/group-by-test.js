import groupBy from '../../../utils/group-by';
import { module, test } from 'qunit';

module('Unit | Utility | group by');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = groupBy([
    {
      id: 1,
      type: 'dog'
    },
    {
      id: 2,
      type: 'dog'
    },
    {
      id: 3,
      type: 'cat'
    }
  ], 'type');

  assert.ok(result.dog);
  assert.ok(result.cat);
});
