import StandUpState from "./StandUpState";
import State from "./State";

export default class SitDownState extends State {
  standUp(): void {
    this.player.setState(new StandUpState(this.player))
    this.player.talk("일어나자")
  }
  sitDown(): void {
    this.player.talk("계속 앉아 있으라고?")
  }
  walk(): void {
    this.player.setState(new StandUpState(this.player))
    this.player.talk("앉아서는 못 걸으니깐 일단 선다")
  }
  run(): void {
    this.player.setState(new StandUpState(this.player))
    this.player.talk("앉아서는 못 뛰니깐 일단 선다")
  }
  getDescription(): string {
    return "앉아 있음"
  }

}