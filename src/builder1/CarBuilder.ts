import Car from "./Car";

export default class CarBuilder {
  private engine: string = undefined;
  private airbag: boolean = false;
  private color: string = undefined;
  private cameraSensor: boolean = false;
  private AEB: boolean = false;

  setEngine(v: string) {
    this.engine = v;
    return this
  }

  setAirbag(v: boolean) {
    this.airbag = v;
    return this
  }

  setColor(v: string) {
    this.color = v;
    return this
  }

  setCameraSensor(v: boolean) {
    this.cameraSensor = v;
    return this
  }

  setAEB(v: boolean) {
    this.AEB = v;
    return this
  }

  build(): Car {
    if(this.engine === undefined) return null;
    if(this.color === undefined) return null;
    if(this.AEB === undefined) return null;

    return new Car(this.engine, this.airbag, this.color, this.cameraSensor, this.AEB)
  }
}
