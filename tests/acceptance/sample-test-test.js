import { test } from 'qunit';
import moduleForAcceptance from 'blossom/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | sample test');

test('visiting /sample-test', function(assert) {
  visit('/sample-test');

  andThen(function() {
    assert.equal(currentURL(), '/sample-test');
  });
});
