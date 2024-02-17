import Animal from "./Animal";
import Tiger from "./Tiger";

export default class TigerAdapter extends Animal {
  private tiger: Tiger

  constructor(name: string) {
    super(name);
    this.tiger = new Tiger()
    this.tiger.name = name
  }
  

  sound(): void {
    console.log(`${this.tiger.name}가 ${this.tiger.roar()}거립니다.`)
  }
}