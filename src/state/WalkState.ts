import RunState from "./RunState";
import SitDownState from "./SitDownState";
import StandUpState from "./StandUpState";
import State from "./State";

export default class WalkState extends State {
  standUp(): void {
    this.player.setSpeed(0)
    this.player.setState(new StandUpState(this.player))
    this.player.talk("멈추자")
  }
  sitDown(): void {
    this.player.setSpeed(0)
    this.player.setState(new SitDownState(this.player))
    this.player.talk("걷다가 앉는건 엉덩이 아픈데")
  }
  walk(): void {
    this.player.talk("계속 걷자")
  }
  run(): void {
    this.player.setSpeed(10)
    this.player.setState(new RunState(this.player))
    this.player.talk("이게 추진력이라는 거다 뛰자")
  }
  getDescription(): string {
    return "걷고 있음"
  }
}