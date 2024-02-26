import CoolAircoon from "./CoolAircoon";
import Window from "./Window";
import HeatBoiler from "./HeatBoiler";
import Mediator from "./Mediator";
import Participant from "./Participant";
import Door from "./Door";

export default class SmartHome implements Mediator {
  door = new Door(this)
  window = new Window(this)
  aircoon = new CoolAircoon(this)
  boiler = new HeatBoiler(this)

  participantChanged(participant: Participant): void {
    if(participant === this.door && !this.door.isClosed()){
      this.aircoon.off()
      this.boiler.off()
    }

    if(participant === this.window && !this.window.isClosed()){
      this.aircoon.off()
      this.boiler.off()
    }
    
    if(participant === this.aircoon && this.aircoon.isRunning()){
      this.boiler.off()
      this.window.close()
      this.door.close()
    }

    if(participant === this.boiler && this.boiler.isRunning()) {
      this.aircoon.off()
      this.window.close()
      this.door.close()
    }
  }

  display() {
    const domDoor = document.querySelector(".door") as HTMLElement
    const domWindow = document.querySelector(".window") as HTMLElement
    const domHeatBoiler = document.querySelector(".heatboiler") as HTMLElement
    const domCoolAirCoon = document.querySelector(".coolaircoon") as HTMLElement

    this.door.displayState(domDoor)
    this.window.displayState(domWindow)
    this.aircoon.displayState(domCoolAirCoon)
    this.boiler.displayState(domHeatBoiler)
  }
  
  install() {
    const domDoor = document.querySelector(".door") as HTMLElement
    const domWindow = document.querySelector(".window") as HTMLElement
    const domHeatBoiler = document.querySelector(".heatboiler") as HTMLElement
    const domCoolAirCoon = document.querySelector(".coolaircoon") as HTMLElement

    domDoor.addEventListener("click", () => {
      this.door.isClosed() ? this.door.open() : this.door.close()
      this.display()
    })

    domWindow.addEventListener("click", () => {
      this.window.isClosed() ? this.window.open() : this.window.close()
      this.display()
    })

    domHeatBoiler.addEventListener("click", () => {
      this.boiler.isRunning() ? this.boiler.off() : this.boiler.on()
      this.display()
    })

    domCoolAirCoon.addEventListener("click", () => {
      this.aircoon.isRunning() ? this.aircoon.off() : this.aircoon.on()
      this.display()
    })

    this.display()
  }
}