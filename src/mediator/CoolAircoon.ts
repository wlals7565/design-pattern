import Mediator from "./Mediator";
import Participant from "./Participant";

export default class CoolAircoon extends Participant {
  private bOff = true

  constructor(mediator: Mediator) {
    super(mediator)
  }

  on(): void {
    if(!this.bOff) return
    this.bOff = false
    this.mediator.participantChanged(this)
  }

  off(): void {
    if(this.bOff) return
    this.bOff = true
    this.mediator.participantChanged(this)
  }

  isRunning() {
    return !this.bOff
  }

  displayState(dom: HTMLElement): void {
    dom.innerHTML = this.bOff ? "coolaircoon off" : "coolaircoon running"
    if(this.isRunning()) dom.classList.add("hilighting")
    else dom.classList.remove("hilighting")
  }
}