const BALANCE = Symbol();

export class BankAccount {
  constructor() {
    this[BALANCE] = 0
  }

  open() {
    this[BALANCE] = 0
  }

  close() {
    this[BALANCE] = null
  }

  deposit(amount) {
    if(this[BALANCE] !== null) {
      this[BALANCE] += amount
    } else {
      throw new ValueError()
    }
  }

  withdraw(amount) {
    if(this[BALANCE] !== null) {
      this[BALANCE] -= amount
    } else {
      throw new ValueError()
    }
  }

  get balance() {
    if(this[BALANCE] !== null) {
      return this[BALANCE]
    } else {
      throw new ValueError()
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
