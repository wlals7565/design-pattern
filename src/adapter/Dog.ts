import Animal from "./Animal";

export default class Dog extends Animal {
  sound(): void {
    console.log(`${this.name}가 왈왈 짖습니다.`)
  }
  constructor(name: string) {
    super(name);
  }
}