import RunState from "./RunState";
import SitDownState from "./SitDownState";
import State from "./State";
import WalkState from "./WalkState";

export default class StandUpState extends State {
  standUp(): void {
    this.player.talk("언제 움직일꺼야?")
  }
  sitDown(): void {
    this.player.setState(new SitDownState(this.player))
    this.player.talk("앉으니깐 편하고 좋다.")
  }
  walk(): void {
    this.player.setSpeed(8)
    this.player.setState(new WalkState(this.player))
    this.player.talk("걷기는 제2의 생각하기")
  }
  run(): void {
    this.player.setSpeed(10)
    this.player.setState(new RunState(this.player))
    this.player.talk("갑자기 뛴다?!")
  }
  getDescription(): string {
    return "제자리에 서 있음"
  }

}