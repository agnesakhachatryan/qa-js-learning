export function buildMany(count, factory) {
  if (!Number.isInteger(count) || count < 0) {
    throw new Error('Count must be a non-negative integer');
  }

  if (typeof factory !== 'function') {
    throw new Error('Factory must be a function');
  }

  const results = [];

  for (let i = 0; i < count; i++) {
    results.push(factory());
  }

  return results;
}
