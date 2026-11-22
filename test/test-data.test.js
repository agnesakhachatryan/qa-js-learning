import test from 'node:test';
import assert from 'node:assert/strict';

import {
  buildUser,
  buildMany,
  parseAmount,
  formatAmount,
  TestUser,
} from '../src/test-data/index.js';

test('buildUser creates unique users', () => {
  const user1 = buildUser();
  const user2 = buildUser();

  assert.notEqual(user1.email, user2.email);
  assert.notEqual(user1.username, user2.username);
});

test('buildUser applies custom overrides', () => {
  const user = buildUser({
    currency: 'USD',
    country: 'US',
  });

  assert.equal(user.currency, 'USD');
  assert.equal(user.country, 'US');
});

test('parseAmount converts European format', () => {
  assert.equal(parseAmount('€1 234,56'), 1234.56);
});

test('parseAmount converts US format', () => {
  assert.equal(parseAmount('$1,234.56'), 1234.56);
});

test('parseAmount rejects invalid input', () => {
  assert.throws(() => parseAmount('hello'), Error);
});

test('formatAmount formats EUR correctly', () => {
  assert.equal(formatAmount(1234.56, 'EUR'), '€1 234,56');
});

test('formatAmount formats USD correctly', () => {
  assert.equal(formatAmount(1234.56, 'USD'), '$1,234.56');
});

test('buildMany creates the requested number of users', () => {
  const users = buildMany(5, buildUser);

  assert.equal(users.length, 5);
});

test('TestUser identifies high rollers', () => {
  const user = buildUser({ balance: 15000 });
  const testUser = new TestUser(user);

  assert.equal(testUser.isHighRoller, true);
});
