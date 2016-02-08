import { test } from 'qunit';
import moduleForAcceptance from 'blossom/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | dosha');

function checkPrakriti(doshaType) {
  return test(`checks pure ${doshaType} in prakriti test`, function(assert) {
    assert.expect(1);

    visit(`/prakriti/physical`);
    click(`.${doshaType}`);

    visit(`/prakriti/mental`);
    click(`.${doshaType}`);

    visit(`/prakriti/digestive`);
    click(`.${doshaType}`);

    visit(`/prakriti/results`);

    andThen(function() {
      return assert.equal(find(`.${doshaType}-score`).text(), '100 %', `scores 100% for ${doshaType} in prakriti test`);
    });
  });
}

['kapha', 'vata', 'pitta'].forEach(d => checkPrakriti(d));

test(`checks vikriti test`, function(assert) {
  assert.expect(3);

  visit(`/vikriti/physical`);
  click(`.kapha`);
  click(`.pitta`);
  click(`.vata`);

  visit(`/vikriti/mental`);
  click(`.kapha`);
  click(`.pitta`);
  click(`.vata`);

  visit(`/vikriti/digestive`);
  click(`.kapha`);
  click(`.pitta`);
  click(`.vata`);

  visit(`/vikriti/results`);

  andThen(function() {
    assert.equal(find(`.kapha-score`).text(), '100 %', `scores 100% for kapha in vikriti test`);
    assert.equal(find(`.pitta-score`).text(), '100 %', `scores 100% for pitta in vikriti test`);
    assert.equal(find(`.vata-score`).text(), '100 %', `scores 100% for vata in vikriti test`);
  });
});


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
