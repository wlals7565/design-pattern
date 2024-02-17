import Animal from "./Animal";
import Cat from "./Cat";
import Dog from "./Dog";
import Tiger from "./Tiger";
import TigerAdapter from "./TigerAdapter";

const list = Array<Animal>()

list.push(new Dog("댕댕이"))
list.push(new Cat("야옹이"))
list.push(new Cat("양양이"))

// const tiger = new Tiger()
// tiger.name = "타이거"
// list.push(tiger)

list.push(new TigerAdapter("타이거"))

list.forEach(animal => {animal.sound()})