import Prototype from "./Prototype";
import Shape from "./Shape";

export default class Group implements Prototype, Shape {
  private shapes = new Array<Shape | Prototype>();

  add(shape: Shape | Prototype): this {
    this.shapes.push((shape as Prototype).copy());
    return this;
  }

  copy(): this {
    const result = new Group();

    this.shapes.forEach((shape) => {
      result.add(shape);
    });

    return result as this;
  }

  draw(canvas: HTMLCanvasElement): this {
    throw new Error("Method not implemented.");
  }
  moveOffset(dx: number, dy: number): this {
    throw new Error("Method not implemented.");
  }
}
