import assert from 'node:assert';
import { test } from 'node:test';
import { placeholder } from '../src/test-data/index.js';

test('placeholder returns true', () => {
  assert.strictEqual(placeholder(), true);
});
