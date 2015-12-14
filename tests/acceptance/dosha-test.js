import { test } from 'qunit';
import moduleForAcceptance from 'blossom/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | dosha');

function checkDosha(doshaType) {
  test(`checks pure ${doshaType}`, function(assert) {
    assert.expect(1);

    visit('/dosha/physical');
    click(`.${doshaType}`);

    visit('/dosha/mental');
    click(`.${doshaType}`);

    visit('/dosha/digestive');
    click(`.${doshaType}`);

    visit('/dosha/results');

    andThen(function() {
      return assert.equal(find(`li.${doshaType} .score`).text(), '100 %', 'scores 100%');
    });
  });
}

['kapha', 'vata', 'pitta'].forEach(checkDosha);

test('no questions answered yet', function(assert) {
  assert.expect(1);
  visit('/dosha/results');
  andThen(() => assert.ok(find(`body:contains('No questions answered yet!')`)));
});
