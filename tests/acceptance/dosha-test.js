import { test } from 'qunit';
import moduleForAcceptance from 'blossom/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | dosha');

function checkDosha(testType, doshaType) {
  return test(`checks pure ${doshaType}`, function(assert) {
    assert.expect(1);

    visit(`/${testType}/physical`);
    click(`.${doshaType}`);

    visit(`/${testType}/mental`);
    click(`.${doshaType}`);

    visit(`/${testType}/digestive`);
    click(`.${doshaType}`);

    visit(`/${testType}/results`);

    andThen(function() {
      return assert.equal(find(`.${doshaType}-score`).text(), '100 %', `scores 100% for ${doshaType} in ${testType} test`);
    });
  });
}

['kapha', 'vata', 'pitta'].forEach(d => checkDosha('prakriti', d));
['kapha', 'vata', 'pitta'].forEach(d => checkDosha('vikriti', d));

test('no questions answered yet', function(assert) {
  assert.expect(1);
  visit('/prakriti/results');
  andThen(() => assert.ok(find(`body:contains('No questions answered yet!')`)));
});

test('no questions answered yet', function(assert) {
  assert.expect(1);
  visit('/vikriti/results');
  andThen(() => assert.ok(find(`body:contains('No questions answered yet!')`)));
});

test('can take dosha tests sequentially', function(assert) {
  assert.expect(4);

  visit('/prakriti/physical');
  click('.kapha');
  visit('/prakriti/mental');
  click('.pitta');
  visit('/prakriti/results');
  visit('/vikriti/physical');
  click('.kapha');
  visit('/vikriti/mental');
  click('.vata');
  visit('/vikriti/results');

  andThen(function() {
    assert.ok(find(`.prakriti.kapha-score`).text().length, 'prakriti results has nonzero kapha score');
    assert.ok(find(`.prakriti.pitta-score`).text().length, 'prakriti results has nonzero pitta score');
    assert.ok(find(`.vikriti.kapha-score`).text().length, 'vikriti results has nonzero kapha score');
    assert.ok(find(`.vikriti.vata-score`).text().length, 'vikriti results has nonzero vata score');
  });
});
