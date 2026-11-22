import { randomUUID } from 'node:crypto';

export function buildUser(overrides = {}, idGenerator = randomUUID) {
  const id = idGenerator();

  const defaultUser = {
    username: `qa_user_${id}`,
    email: `qa_${id}@example.com`,
    password: 'Password123!',
    currency: 'EUR',
    country: 'DE',
  };

  return {
    ...defaultUser,
    ...overrides,
  };
}
