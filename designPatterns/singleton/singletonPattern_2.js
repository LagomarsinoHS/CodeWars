class Singleton {
  static #instance;

  constructor() {
    if (!Singleton.#instance) {
      Singleton.#instance = this.createDbConnection();
    }
    return Singleton.#instance;
  }
  createDbConnection() {
    return new Object('I am the DataBase instance');
  }
}
function clientCode() {
  const s1 = new Singleton();
  const s2 = new Singleton();
  if (s1 === s2) {
    console.log('Singleton works, both variables contain the same instance.');
  } else {
    console.log('Singleton failed, variables contain different instances.');
  }
}

clientCode();
