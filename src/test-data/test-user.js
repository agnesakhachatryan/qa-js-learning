export class TestUser {
  constructor(user) {
    this.user = user;
  }

  get displayName() {
    return this.user.username;
  }

  get isHighRoller() {
    return this.user.balance >= 10000;
  }
}
