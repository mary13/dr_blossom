import { test } from 'qunit';
import moduleForAcceptance from 'blossom/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | dosha');

function checkDosha(doshaType) {
  test(`checks pure ${doshaType}`, function(assert) {
    assert.expect(1);

    visit('/prakriti/physical');
    click(`.${doshaType}`);

    visit('/prakriti/mental');
    click(`.${doshaType}`);

    visit('/prakriti/digestive');
    click(`.${doshaType}`);

    visit('/prakriti/results');

    andThen(function() {
      return assert.equal(find(`.${doshaType}-score`).text(), '100 %', 'scores 100%');
    });
  });
}

['kapha', 'vata', 'pitta'].forEach(checkDosha);

test('no questions answered yet', function(assert) {
  assert.expect(1);
  visit('/prakriti/results');
  andThen(() => assert.ok(find(`body:contains('No questions answered yet!')`)));
});
