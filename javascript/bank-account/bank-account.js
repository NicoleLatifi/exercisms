export class BankAccount {
  constructor() {
    this.balance = 0
  }

  open() {
    this.balance = 0
  }

  close() {
    throw new Error('Remove this statement and implement this function');
  }

  deposit() {
    throw new Error('Remove this statement and implement this function');
  }

  withdraw() {
    throw new Error('Remove this statement and implement this function');
  }

  get balance() {
    return this.balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
