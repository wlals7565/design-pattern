import Bow from "./Bow";
import Factory, { ItemName } from "./Factory";
import Item from "./Item";
import Shield from "./Shield";
import Sword from "./Sword";

class ItemCount {
  private _currentCount = 0

  constructor(private _maxCount: number) {}

  get maxCount() { return this._maxCount }

  isCreatable(): boolean {
    return this._currentCount < this.maxCount
  }

  increaseCount(): void {
    if(this.isCreatable) this._currentCount++
  }
}

export default class ItemFactory extends Factory {
  private repository = new Map<ItemName, ItemCount>()

  constructor() {
    super()

    this.repository.set("sword", new ItemCount(3))
    this.repository.set("shield", new ItemCount(5))
    this.repository.set("bow", new ItemCount(2))
  }

  protected isCreatable(name: ItemName): boolean {
    const itemCount = this.repository.get(name)
    return itemCount.isCreatable()
  }
  protected createItem(name: ItemName): Item {
    let result: Item = null

    if(name === 'sword') result = new Sword()
    else if(name === 'shield') result = new Shield()
    else if(name === 'bow') result = new Bow()

    return result
  }
  protected postprocessItem(name: ItemName): void {
    const itemCount = this.repository.get(name)
      itemCount.increaseCount()
  }
}