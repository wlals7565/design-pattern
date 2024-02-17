import Animal from "./Animal";

export default class Cat extends Animal {
  sound(): void {
    console.log(`${this.name}가 야옹거립니다.`)
  }
  constructor(name: string) {
    super(name);
  }
}