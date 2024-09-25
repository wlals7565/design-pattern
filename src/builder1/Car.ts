export default class Car {
  constructor(
    private engine: string,
    private airbage: boolean,
    private color: string,
    private cameraSensor: boolean,
    private AEB: boolean 
  ) {}

  print(): void {
    console.table(this)
  }
}