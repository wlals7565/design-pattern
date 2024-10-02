import StandUpState from "./StandUpState";
import State from "./State";

export default class Player {
  private state: State
  private speed: number = 0;

  constructor(private domTalk: HTMLElement) {
    this.state = new StandUpState(this);
  }

  getSpeed() {return this.speed}
  setSpeed(speed: number): void {this.speed = speed}

  setState(state: State): void { this.state = state}
  getState(): State { return this.state }

  talk(msg: string) {
    this.domTalk.innerHTML = msg
  }
}