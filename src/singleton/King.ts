export default class King {
  private constructor() {}

  private static instance: King | undefined

  public static getInstance(): King {
    if(this.instance === undefined) this.instance = new King();
    return this.instance;
  }

  sayHello() {
    console.log("I am only one...")
  }
}