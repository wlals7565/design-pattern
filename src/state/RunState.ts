import SitDownState from "./SitDownState";
import StandUpState from "./StandUpState";
import State from "./State";
import WalkState from "./WalkState";

export default class RunState extends State {
  standUp(): void {
    this.player.setState(new StandUpState(this.player))
    this.player.setSpeed(0)
    this.player.talk("뛰다가 급하게 서면 다칠 수 있는데")
  }
  sitDown(): void {
    this.player.setState(new SitDownState(this.player))
    this.player.setSpeed(0)
    this.player.talk("태클인가?")
  }
  walk(): void {
    this.player.setSpeed(8)
    this.player.setState(new WalkState(this.player))
    this.player.talk("속도 줄이기")
  }
  run(): void {
    this.player.setSpeed(this.player.getSpeed()+2)
    this.player.talk("더 빠르게 뛴다.")
  }
  getDescription(): string {
    return "뛰는 중"
  }

}